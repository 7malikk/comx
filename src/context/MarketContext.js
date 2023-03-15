import React, { createContext, useContext, useEffect, useState } from 'react';
import Manager from '../lib/encryption';

const MarketContext = createContext();
const liveTicketUrl = 'https://comx-sand-api.afex.dev/api/security-price/live';
const productViewUrl = 'https://comx-sand-api.afex.dev/api/securities/boards';
const clientPostionUrl =
  'wss://comx-sand-api.afex.dev/stream/client-positions?cid=9900153747';
const orderBookUrl = 'wss://comx-sand-api.afex.dev/stream/trades';

export const MarketProvider = ({ children }) => {
  const manager = new Manager({
    key: process.env.REACT_APP_KEY,
    vector: process.env.REACT_APP_VECTOR,
  });
  const [tradesData, setTradesData] = useState([]);
  const [products, setProducts] = useState([]);
  const [clientData, setClientData] = useState({});
  const [liveTicker, setLiveTicker] = useState([]);

  const getData = async (url) => {
    const response = await fetch(url);
    const resData = await response.json();
    const { data } = resData;
    localStorage.setItem('liveTIcket', JSON.stringify(data));
    const decryptedData = data.map((item) => {
      item['transaction_fee_configurations'].map((other) =>
        manager.decrypt(other)
      );
      return manager.decrypt(item);
    });

    setLiveTicker(decryptedData);
  };

  const getProducts = async (url) => {
    const response = await fetch(url);
    const resData = await response.json();
    const { data } = resData;
    localStorage.setItem('productView', JSON.stringify(data));
    const decryptedData = data.map((item) => {
      manager.decrypt(item.board);
      return manager.decrypt(item);
    });

    setProducts(decryptedData);
  };

  useEffect(() => {
    getData(liveTicketUrl);
    getProducts(productViewUrl);

    // const newDec = localStorage.getItem('productView');
    // const parsedData = JSON.parse(newDec);
    // const decryptedData = parsedData.map((item) => {
    //   manager.decrypt(item.board);
    //   return manager.decrypt(item);
    // });
    // setProducts(decryptedData);

    // const newLive = localStorage.getItem('liveTIcket');
    // const parsedLive = JSON.parse(newLive);
    // const decryptedLive = parsedLive.map((item) => {
    //   item['transaction_fee_configurations'].map((other) =>
    //     manager.decrypt(other)
    //   );
    //   return manager.decrypt(item);
    // });

    // setLiveTicker(decryptedLive);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const tradesSocket = new WebSocket(orderBookUrl);

    tradesSocket.addEventListener('open', (event) => {
      console.log('TradeSocket connection established.');
    });

    tradesSocket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      localStorage.setItem('tradesFromWSS', JSON.stringify(data));
      for (let msg of data.messages) {
        manager.decrypt(msg.client);
        manager.decrypt(msg);
      }
      manager.decrypt(data);

      setTradesData(data.messages);
    });

    // const newDec = localStorage.getItem('tradesFromWSS');
    // const parsedData = JSON.parse(newDec);
    // for (let msg of parsedData.messages) {
    //   manager.decrypt(msg.client);
    //   manager.decrypt(msg);
    // }
    // manager.decrypt(parsedData);
    // setTradesData(parsedData.messages);

    tradesSocket.addEventListener('error', (event) => {
      console.log('TradeSocket error');
    });

    tradesSocket.addEventListener('close', (event) => {
      console.log('TradeSocket connection closed.');
    });

    const clientSocket = new WebSocket(clientPostionUrl);
    clientSocket.addEventListener('open', (event) => {
      console.log('ClientSocket connection established.');
    });

    clientSocket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      localStorage.setItem('clientSocket', JSON.stringify(data));
      manager.decrypt(data.wallets);
      manager.decrypt(data.portfolio);
      data.portfolio.map((item) => manager.decrypt(item));
      manager.decrypt(data.csd);
      data.csd.map((item) => manager.decrypt(item));
      manager.decrypt(data.stock_covers);
      data.stock_covers.map((item) => manager.decrypt(item));
      manager.decrypt(data.cash_cover);

      manager.decrypt(data);

      setClientData(data);
    });

    // const newClient = localStorage.getItem('clientSocket');
    // const parsedClientData = JSON.parse(newClient);
    // manager.decrypt(parsedClientData.wallets);
    // manager.decrypt(parsedClientData.portfolio);
    // parsedClientData.portfolio.map((item) => manager.decrypt(item));
    // manager.decrypt(parsedClientData.csd);
    // parsedClientData.csd.map((item) => manager.decrypt(item));
    // manager.decrypt(parsedClientData.stock_covers);
    // parsedClientData.stock_covers.map((item) => manager.decrypt(item));
    // manager.decrypt(parsedClientData.cash_cover);

    // manager.decrypt(parsedClientData);
    // setClientData(parsedClientData);

    clientSocket.addEventListener('error', (event) => {
      console.log('ClientSocket error');
    });

    clientSocket.addEventListener('close', (event) => {
      console.log('ClientSocket connection closed.');
    });
    // eslint-disable-next-line
  }, []);

  return (
    <MarketContext.Provider
      value={{
        tradesData,
        products,
        clientData,
        liveTicker,
      }}>
      {children}
    </MarketContext.Provider>
  );
};

export const useMarketContext = () => {
  return useContext(MarketContext);
};
