import React from 'react';
import {
  Boards,
  PageTitle,
  Marquee,
  Sidebar,
  CardsSection,
} from '../components';
import styled from 'styled-components';
import MarketContext from '../context/MarketContext';

const MarketPage = () => {
  return (
    <Wrapper>
      <MarketContext />
      <Sidebar />
      <div className="main-content">
        <div className="top-section">
          <PageTitle />
          <CardsSection />
          <Boards />
        </div>
        <Marquee />
      </div>
    </Wrapper>
  );
};

export default MarketPage;

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  background-color: #b4e0f140;
  .main-content {
    width: 95%;
    position: relative;
    height: 100%;
    .top-section {
      min-height: calc(100vh - (20vh + 1rem));
      padding: 1rem;
      width: 100%;
    }
  }
`;
