
import { useState } from 'react';
import { Bot, X } from 'lucide-react';
import { ButtonCustom } from './ui/button-custom';
import { Card } from './ui/card';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-[350px] p-4 bg-[#2F2F2F] border-[#403E43]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">AI Assistant</h3>
            <ButtonCustom variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </ButtonCustom>
          </div>
          <div className="h-[400px] overflow-y-auto mb-4 p-4 bg-[#1A1F2C] rounded">
            <p className="text-gray-400">Hi! I'm your PC building assistant. How can I help you today?</p>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-[#1A1F2C] border border-[#403E43] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#9b87f5]"
            />
            <ButtonCustom size="sm">Send</ButtonCustom>
          </div>
        </Card>
      )}
      <ButtonCustom
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="rounded-full w-14 h-14 p-0 shadow-lg"
      >
        <Bot className="h-6 w-6" />
      </ButtonCustom>
    </div>
  );
};

export default ChatButton;
