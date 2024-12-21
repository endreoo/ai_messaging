import React from 'react';
import { BarChart2, Brain, MessageSquare } from 'lucide-react';
import type { ChannelStats } from '../types';

interface DashboardProps {
  stats: ChannelStats[];
}

const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.channel} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.channel}</p>
                <p className="text-2xl font-semibold">{stat.messageCount}</p>
              </div>
              {stat.channel === 'email' ? (
                <MessageSquare className="w-8 h-8 text-blue-500" />
              ) : stat.channel === 'whatsapp' ? (
                <MessageSquare className="w-8 h-8 text-green-500" />
              ) : (
                <Brain className="w-8 h-8 text-purple-500" />
              )}
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm">
                <span>Confidence</span>
                <span>{(stat.avgConfidence * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div
                  className="bg-blue-500 rounded-full h-2"
                  style={{ width: `${stat.avgConfidence * 100}%` }}
                />
              </div>
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-sm">
                <span>Accuracy</span>
                <span>{(stat.accuracy * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div
                  className="bg-green-500 rounded-full h-2"
                  style={{ width: `${stat.accuracy * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Processing Performance</h2>
          <BarChart2 className="w-5 h-5 text-gray-500" />
        </div>
        <div className="h-64 flex items-end justify-between">
          {/* Placeholder for charts - you'll want to add a proper charting library */}
          <div className="w-full text-center text-gray-500">
            Chart will be displayed here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;