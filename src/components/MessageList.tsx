import React from 'react';
import { Mail, MessageSquare, Bot, AlertCircle } from 'lucide-react';
import type { Message } from '../types';

interface MessageListProps {
  messages: Message[];
  onSelect: (message: Message) => void;
}

const MessageList: React.FC<MessageListProps> = ({ messages, onSelect }) => {
  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'email':
        return <Mail className="w-5 h-5" />;
      case 'whatsapp':
        return <MessageSquare className="w-5 h-5" />;
      case 'bot':
        return <Bot className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const getSentimentColor = (sentiment?: string) => {
    switch (sentiment) {
      case 'positive':
        return 'text-green-500';
      case 'negative':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="divide-y">
        {messages.map((message) => (
          <div
            key={message.id}
            onClick={() => onSelect(message)}
            className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {getChannelIcon(message.channel)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {message.sender}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </p>
                </div>
                <p className="text-sm text-gray-900 truncate">{message.subject}</p>
                <div className="mt-1 flex items-center space-x-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                    {message.intent}
                  </span>
                  {message.confidence < 0.7 && (
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                  )}
                  <span className={`text-sm ${getSentimentColor(message.sentiment)}`}>
                    {message.sentiment}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;