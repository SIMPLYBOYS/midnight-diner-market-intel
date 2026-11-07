import { useEffect, useState, useRef } from 'react';
import { eventBus } from '../engine/EventBus';

const CHARACTER_NAMES: Record<string, string> = {
  'chef': 'Master',
  'customer-a': 'Customer A',
  'customer-b': 'Customer B',
};

const CHARACTER_COLORS: Record<string, string> = {
  'chef': '#d4a024',
  'customer-a': '#5ba4cf',
  'customer-b': '#8bc78b',
};

interface ChatMessage {
  id: number;
  character: string;
  displayName: string;
  text: string;
  isNarration: boolean;
}

let nextId = 0;

export function ChatLog() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDialogue = (payload: { character: string; text: string }) => {
      const msg: ChatMessage = {
        id: nextId++,
        character: payload.character,
        displayName: CHARACTER_NAMES[payload.character] ?? payload.character,
        text: payload.text,
        isNarration: false,
      };
      setMessages((prev) => [...prev, msg]);
    };

    const onNarration = (payload: { text: string }) => {
      const msg: ChatMessage = {
        id: nextId++,
        character: '',
        displayName: '',
        text: payload.text,
        isNarration: true,
      };
      setMessages((prev) => [...prev, msg]);
    };

    const onReset = () => {
      setMessages([]);
    };

    eventBus.on('dialogue:show', onDialogue);
    eventBus.on('narration:show', onNarration);
    eventBus.on('timeline:started', onReset);

    return () => {
      eventBus.off('dialogue:show', onDialogue);
      eventBus.off('narration:show', onNarration);
      eventBus.off('timeline:started', onReset);
    };
  }, []);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);

  return (
    <div style={styles.container}>
      <div style={styles.header}>CHAT LOG</div>
      <div ref={scrollRef} style={styles.scrollArea}>
        {messages.length === 0 && (
          <div style={styles.empty}>Waiting for dialogue...</div>
        )}
        {messages.map((msg) =>
          msg.isNarration ? (
            <div key={msg.id} style={styles.narration}>
              <span style={styles.narrationDash}>──</span> {msg.text} <span style={styles.narrationDash}>──</span>
            </div>
          ) : (
            <div key={msg.id} style={styles.message}>
              <span style={{ ...styles.name, color: CHARACTER_COLORS[msg.character] ?? '#d4a024' }}>
                {msg.displayName}
              </span>
              <div style={styles.text}>{msg.text}</div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    fontSize: '10px',
    fontFamily: "'Courier New', monospace",
    color: '#555',
    letterSpacing: '2px',
    padding: '4px 0 6px',
    borderBottom: '1px solid #2a2a3a',
    marginBottom: '6px',
    flexShrink: 0,
  },
  scrollArea: {
    flex: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  empty: {
    fontSize: '11px',
    fontFamily: "'Courier New', monospace",
    color: '#444',
    fontStyle: 'italic',
    padding: '12px 0',
  },
  message: {
    fontSize: '11px',
    fontFamily: "'Courier New', monospace",
    lineHeight: 1.4,
  },
  name: {
    fontSize: '10px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
  },
  text: {
    color: '#ccc',
    marginTop: '1px',
    wordBreak: 'break-word',
  },
  narration: {
    fontSize: '10px',
    fontFamily: "'Courier New', monospace",
    color: '#888',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: '4px 0',
    lineHeight: 1.4,
    wordBreak: 'break-word',
  },
  narrationDash: {
    color: '#444',
    fontSize: '9px',
  },
};
