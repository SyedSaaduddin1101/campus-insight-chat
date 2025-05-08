
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export interface ChatMessageProps {
  content: string;
  sender: {
    id: string;
    name: string;
    image?: string;
  };
  timestamp: Date;
  isCurrentUser: boolean;
}

export function ChatMessage({ content, sender, timestamp, isCurrentUser }: ChatMessageProps) {
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(timestamp);
  
  const initials = sender.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className={cn(
      "flex gap-3 mb-4",
      isCurrentUser ? "flex-row-reverse" : ""
    )}>
      <Avatar className="h-8 w-8">
        {sender.image ? (
          <AvatarImage src={sender.image} alt={sender.name} />
        ) : (
          <AvatarFallback className={isCurrentUser ? "bg-brand-100 text-brand-700" : "bg-gray-200 text-gray-700"}>
            {initials}
          </AvatarFallback>
        )}
      </Avatar>
      
      <div className={cn(
        "flex flex-col max-w-[75%] sm:max-w-[70%]",
        isCurrentUser ? "items-end" : "items-start"
      )}>
        <div className={cn(
          "px-4 py-3 rounded-2xl",
          isCurrentUser 
            ? "bg-brand-600 text-white rounded-tr-none" 
            : "bg-gray-100 text-gray-800 rounded-tl-none"
        )}>
          <p className="text-sm">{content}</p>
        </div>
        <span className="text-xs text-gray-500 mt-1">{formattedTime}</span>
      </div>
    </div>
  );
}

export default ChatMessage;
