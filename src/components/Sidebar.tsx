import React from 'react';
import { 
  Mail, 
  MessageSquare, 
  Bot, 
  Settings, 
  BarChart2, 
  Brain,
  Inbox
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4">
      <div className="flex items-center space-x-2 mb-8">
        <Brain className="w-8 h-8" />
        <h1 className="text-xl font-bold">AI Mail Process</h1>
      </div>
      
      <nav className="space-y-2">
        <a href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800">
          <Inbox className="w-5 h-5" />
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800">
          <Mail className="w-5 h-5" />
          <span>Email Processing</span>
        </a>
        <a href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800">
          <MessageSquare className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
        <a href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800">
          <Bot className="w-5 h-5" />
          <span>Bot Messages</span>
        </a>
        <a href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800">
          <Brain className="w-5 h-5" />
          <span>Training</span>
        </a>
        <a href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800">
          <BarChart2 className="w-5 h-5" />
          <span>Analytics</span>
        </a>
        <a href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;