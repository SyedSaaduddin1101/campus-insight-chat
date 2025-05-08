
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, MessageSquare } from 'lucide-react';
import ChatMessage from '@/components/chat/ChatMessage';
import ChatMessageInput from '@/components/chat/ChatMessageInput';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Contact {
  id: string;
  name: string;
  college: string;
  lastMessage: string;
  time: string;
  image?: string;
  isOnline: boolean;
  unread?: number;
}

interface Message {
  id: string;
  content: string;
  timestamp: Date;
  senderId: string;
}

// Mock data
const contacts: Contact[] = [
  {
    id: '1',
    name: 'Rohan Mehta',
    college: 'IIIT Hyderabad',
    lastMessage: 'Can you tell me about the Amazon interview?',
    time: '12:40 PM',
    isOnline: true,
    unread: 2
  },
  {
    id: '2',
    name: 'Priya Sharma',
    college: 'JNTU Hyderabad',
    lastMessage: 'Thanks for the tips!',
    time: 'Yesterday',
    isOnline: false,
  },
  {
    id: '3',
    name: 'Arjun Reddy',
    college: 'CBIT Hyderabad',
    lastMessage: 'I got placed at Microsoft!',
    time: '2 days ago',
    isOnline: true,
  },
  {
    id: '4',
    name: 'Sneha Gupta',
    college: 'Osmania University',
    lastMessage: 'Let\'s connect tomorrow',
    time: '1 week ago',
    isOnline: false,
  },
];

const currentUser = {
  id: 'current-user',
  name: 'Me',
  image: '',
};

const ChatPage = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi there! I noticed you got placed at Google. Can you share some tips for the interview process?',
      timestamp: new Date(Date.now() - 1000 * 60 * 60),
      senderId: '1',
    },
    {
      id: '2',
      content: 'Sure! For Google interviews, focus on DSA, system design, and be ready to explain your thought process clearly.',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      senderId: 'current-user',
    },
    {
      id: '3',
      content: 'That\'s helpful! Did you have any specific resources that you used to prepare?',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      senderId: '1',
    },
  ]);

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = (content: string) => {
    if (!selectedContact) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      timestamp: new Date(),
      senderId: 'current-user',
    };
    
    setMessages([...messages, newMessage]);
    
    // Simulate reply after delay (in a real app, this would come from a server)
    setTimeout(() => {
      const replyMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thanks for sharing that information! It's very helpful.",
        timestamp: new Date(),
        senderId: selectedContact.id,
      };
      setMessages(prev => [...prev, replyMessage]);
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-2xl font-bold mb-6">Connect and Chat</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row h-[calc(100vh-250px)]">
          {/* Sidebar */}
          <div className="w-full md:w-1/3 border-r">
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Search contacts..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <Tabs defaultValue="all">
              <div className="px-4">
                <TabsList className="w-full">
                  <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                  <TabsTrigger value="recent" className="flex-1">Recent</TabsTrigger>
                  <TabsTrigger value="online" className="flex-1">Online</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="m-0">
                <div className="overflow-y-auto h-[calc(100vh-370px)]">
                  {filteredContacts.length > 0 ? (
                    filteredContacts.map(contact => (
                      <div 
                        key={contact.id} 
                        className={`flex items-center p-4 cursor-pointer border-b hover:bg-gray-50 transition-colors ${selectedContact?.id === contact.id ? 'bg-gray-50' : ''}`}
                        onClick={() => setSelectedContact(contact)}
                      >
                        <div className="relative mr-3">
                          <Avatar>
                            {contact.image ? (
                              <AvatarImage src={contact.image} alt={contact.name} />
                            ) : (
                              <AvatarFallback className="bg-brand-100 text-brand-700">
                                {contact.name.charAt(0)}
                              </AvatarFallback>
                            )}
                          </Avatar>
                          {contact.isOnline && (
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-baseline">
                            <h3 className="font-medium truncate">{contact.name}</h3>
                            <span className="text-xs text-gray-500">{contact.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 truncate">{contact.college}</p>
                          <p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
                        </div>
                        {contact.unread && (
                          <span className="bg-brand-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-2">
                            {contact.unread}
                          </span>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="p-6 text-center text-gray-500">
                      No contacts found
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="recent" className="m-0">
                <div className="p-6 text-center text-gray-500">
                  Recent contacts will appear here
                </div>
              </TabsContent>
              
              <TabsContent value="online" className="m-0">
                <div className="overflow-y-auto h-[calc(100vh-370px)]">
                  {filteredContacts.filter(c => c.isOnline).length > 0 ? (
                    filteredContacts
                      .filter(c => c.isOnline)
                      .map(contact => (
                        <div 
                          key={contact.id} 
                          className={`flex items-center p-4 cursor-pointer border-b hover:bg-gray-50 transition-colors ${selectedContact?.id === contact.id ? 'bg-gray-50' : ''}`}
                          onClick={() => setSelectedContact(contact)}
                        >
                          <div className="relative mr-3">
                            <Avatar>
                              {contact.image ? (
                                <AvatarImage src={contact.image} alt={contact.name} />
                              ) : (
                                <AvatarFallback className="bg-brand-100 text-brand-700">
                                  {contact.name.charAt(0)}
                                </AvatarFallback>
                              )}
                            </Avatar>
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between">
                              <h3 className="font-medium truncate">{contact.name}</h3>
                              <span className="text-xs text-gray-500">{contact.time}</span>
                            </div>
                            <p className="text-sm text-gray-600 truncate">{contact.college}</p>
                            <p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
                          </div>
                        </div>
                      ))
                  ) : (
                    <div className="p-6 text-center text-gray-500">
                      No online contacts
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedContact ? (
              <>
                {/* Chat Header */}
                <div className="border-b p-4 flex items-center">
                  <div className="relative mr-3">
                    <Avatar>
                      {selectedContact.image ? (
                        <AvatarImage src={selectedContact.image} alt={selectedContact.name} />
                      ) : (
                        <AvatarFallback className="bg-brand-100 text-brand-700">
                          {selectedContact.name.charAt(0)}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    {selectedContact.isOnline && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{selectedContact.name}</h3>
                    <p className="text-sm text-gray-600">{selectedContact.college}</p>
                  </div>
                </div>
                
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4">
                  {messages.map(message => (
                    <ChatMessage
                      key={message.id}
                      content={message.content}
                      sender={message.senderId === 'current-user' 
                        ? currentUser 
                        : { id: selectedContact.id, name: selectedContact.name, image: selectedContact.image }
                      }
                      timestamp={message.timestamp}
                      isCurrentUser={message.senderId === 'current-user'}
                    />
                  ))}
                </div>
                
                {/* Message Input */}
                <ChatMessageInput onSendMessage={handleSendMessage} />
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center flex-col p-8">
                <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <MessageSquare size={30} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Start a conversation</h3>
                <p className="text-gray-500 text-center mb-6">
                  Select a contact from the list to start chatting
                </p>
                <Button variant="outline">
                  Find new contacts
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ChatPage;
