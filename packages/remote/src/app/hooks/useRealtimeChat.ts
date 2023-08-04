import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

type Message = {
    username: string;
    content: string;
    timestamp: number;
};

type SocketEvent = 'receive_message' | 'send_message';

const useRealtimeChat = (roomId: string, username: string) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        // Initialize socket when component is mounted
        const newSocket = io('http://server-url'); // Replace with the URL of the Socket.IO . server
        setSocket(newSocket);

        return () => {
            // Close socket connection when component is unmounted
            newSocket.disconnect();
        };
    }, []);

    useEffect(() => {
        if (socket) {
            // Listen to the event of receiving new messages
            socket.on('receive_message', (message: Message) => {
                setMessages((prevMessages) => [...prevMessages, message]);
            });

            // Send user information when connecting to the room
            socket.emit('join_room', { roomId, username });

            // Handle error events if any
            socket.on('error', (error: any) => {
                console.error('Socket error:', error);
            });
        }
    }, [socket, roomId, username]);

    // Send a new message
    const sendMessage = (content: string) => {
        if (socket) {
            const newMessage: Message = {
                username,
                content,
                timestamp: Date.now(),
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            socket.emit('send_message', newMessage);
        }
    };

    return { messages, sendMessage };
};

export default useRealtimeChat;
