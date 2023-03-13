import React, { createContext, useContext, useEffect } from 'react';
import Manager from '../lib/encryption';

const MarketContext = createContext();

export const MarketProvider = ({ children }) => {
  // const [trades, setTrades] = useState({});
  // const [client, setClient] = useState({});
  const manager = new Manager({
    key: process.env.KEY,
    vector: process.env.VECTOR,
  });

  useEffect(() => {
    const tradesSocket = new WebSocket(
      'wss://comx-sand-api.afexnigeria.com/stream/trades'
    );

    tradesSocket.addEventListener('open', (event) => {
      console.log('TradeSocket connection established.');
    });

    tradesSocket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      console.log('TradeSocket data:', data);
    });

    tradesSocket.addEventListener('error', (event) => {
      console.error('TradeSocket error:', event);
    });

    tradesSocket.addEventListener('close', (event) => {
      console.log('TradeSocket connection closed.');
    });

    const clientSocket = new WebSocket(
      'wss://comx-sand-api.afexnigeria.com/stream/client-positions?cid=9900153747'
    );
    clientSocket.addEventListener('open', (event) => {
      console.log('ClientSocket connection established.');
    });

    clientSocket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      console.log('ClientSocket data:', data);
    });

    clientSocket.addEventListener('error', (event) => {
      console.error('ClientSocket error:', event);
    });

    clientSocket.addEventListener('close', (event) => {
      console.log('ClientSocket connection closed.');
    });
  }, []);

  const decryptedData = manager.decrypt(
    'yvpkyomYHwtYMbCc9wOHqMSqxnLgtMGyipukFngYo/zvY6qmFwvEcl+D5y0PZaLm'
  );
  console.log('decryptedData', decryptedData);

  return (
    <MarketContext.Provider value="market">{children}</MarketContext.Provider>
  );
};

export const useMarketContext = () => {
  return useContext(MarketContext);
};
