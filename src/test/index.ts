import { useEffect } from 'react';
import { io } from 'socket.io-client';

function GamePage() {
  useEffect(() => {
    const socket = io('http://localhost:3001');
    socket.emit('joinGame', 'AI Player 1');
    socket.on('roleAssigned', (role) => {
      console.log('我的角色:', role);
    });
  }, []);
}
GamePage();