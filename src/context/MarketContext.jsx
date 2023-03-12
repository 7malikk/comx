import React, { useContext, useState, useEffect } from 'react';
import { decrypt, encrypt } from '../helpers/cipher';
import Manager from '../lib/encryption';

const manager = new Manager({
  key: process.env.KEY,
  vector: process.env.VECTOR,
});

const MarketContext = () => {
  useEffect(() => {
    const socket = new WebSocket(
      'wss://comx-sand-api.afexnigeria.com/stream/trades'
    );

    socket.addEventListener('open', (event) => {
      console.log('WebSocket connection established.');
    });

    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      console.log('Received data:', data);
    });

    socket.addEventListener('error', (event) => {
      console.error('WebSocket error:', event);
    });

    socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed.');
    });
  }, []);

  const decryptedData = manager.decrypt(
    'yvpkyomYHwtYMbCc9wOHqMSqxnLgtMGyipukFngYo/zvY6qmFwvEcl+D5y0PZaLm'
  );
  console.log(decryptedData);
  const encryptedData = manager.encrypt('calabash');
  console.log(encryptedData);

  return <div></div>;
};

export default MarketContext;
