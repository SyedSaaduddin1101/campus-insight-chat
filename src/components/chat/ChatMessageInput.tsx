
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

interface ChatMessageInputProps {
  onSendMessage: (content: string) => void;
  isLoading?: boolean;
}

export function ChatMessageInput({ onSendMessage, isLoading = false }: ChatMessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t p-4 bg-white">
      <div className="flex items-end space-x-2">
        <div className="flex-grow">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="min-h-[60px] resize-none overflow-hidden focus-visible:ring-1 focus-visible:ring-brand-500"
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit" 
          size="icon" 
          disabled={!message.trim() || isLoading}
          className="h-10 w-10 rounded-full bg-brand-600 hover:bg-brand-700 transition-colors"
        >
          <Send size={18} />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </form>
  );
}

export default ChatMessageInput;
