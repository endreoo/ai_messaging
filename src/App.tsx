import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import MessageList from './components/MessageList';
import type { Message, ChannelStats } from './types';

// Mock data for demonstration
const mockStats: ChannelStats[] = [
  {
    channel: 'Email',
    messageCount: 156,
    avgConfidence: 0.85,
    accuracy: 0.92
  },
  {
    channel: 'WhatsApp',
    messageCount: 89,
    avgConfidence: 0.78,
    accuracy: 0.88
  },
  {
    channel: 'Bot',
    messageCount: 234,
    avgConfidence: 0.91,
    accuracy: 0.95
  }
];

const mockMessages: Message[] = [
  {
    id: '1',
    channel: 'email',
    subject: 'Booking Inquiry',
    content: 'Hello, I would like to book...',
    sender: 'john@example.com',
    timestamp: new Date().toISOString(),
    status: 'new',
    intent: 'booking_inquiry',
    confidence: 0.89,
    sentiment: 'positive'
  },
  // Add more mock messages as needed
];

function App() {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-8">AI Message Processing Dashboard</h1>
          
          <Dashboard stats={mockStats} />
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Recent Messages</h2>
            <MessageList 
              messages={mockMessages}
              onSelect={setSelectedMessage}
            />
          </div>
        </div>
      </div>
      
      {selectedMessage && (
        <div className="w-1/3 bg-white border-l border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">Message Details</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">From</label>
              <p>{selectedMessage.sender}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <p>{selectedMessage.subject}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <p className="whitespace-pre-wrap">{selectedMessage.content}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">AI Analysis</label>
              <div className="mt-1 space-y-2">
                <div className="flex justify-between">
                  <span>Intent:</span>
                  <span>{selectedMessage.intent}</span>
                </div>
                <div className="flex justify-between">
                  <span>Confidence:</span>
                  <span>{(selectedMessage.confidence * 100).toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Sentiment:</span>
                  <span className="capitalize">{selectedMessage.sentiment}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;