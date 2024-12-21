export interface Message {
  id: string;
  channel: 'email' | 'whatsapp' | 'bot';
  subject?: string;
  content: string;
  sender: string;
  timestamp: string;
  status: 'new' | 'processing' | 'processed' | 'training';
  intent?: string;
  confidence: number;
  category?: string;
  sentiment?: 'positive' | 'neutral' | 'negative';
}

export interface TrainingData {
  messageId: string;
  correctIntent: string;
  correctedBy: string;
  timestamp: string;
}

export interface ChannelStats {
  channel: string;
  messageCount: number;
  avgConfidence: number;
  accuracy: number;
}