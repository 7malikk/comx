import React from 'react';
import styled from 'styled-components';

const Marquee = () => {
  return (
    <Wrapper>
      <h4>Live Market</h4>
      <ul>
        <li>
          #39400 <p>malik</p>
        </li>
        <li>
          #39400 <p>malik</p>
        </li>
        <li>
          #39400 <p>malik</p>
        </li>
        <li>
          #39400 <p>malik</p>
        </li>
        <li>
          #39400 <p>malik</p>
        </li>
        <li>
          #39400 <p>malik</p>
        </li>
        <li>
          #39400 <p>malik</p>
        </li>
        <li>
          #39400 <p>malik</p>
        </li>
        <li>
          #39400 <p>malik</p>
        </li>
        <li>
          #39400 <p>malik</p>
        </li>
        <li>
          #39400 <p>malik</p>
        </li>
        <li>
          #39400 <p>malik</p>
        </li>
        <li>
          #39400 <p>malik</p>
        </li>
        <li>
          #39400 <p>malik</p>
        </li>
        <li>
          #39400 <p>malik</p>
        </li>
        <li>
          #39400 <p>malik</p>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Marquee;

const Wrapper = styled.footer`
  height: 3rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  h4 {
    width: 20%;
    text-align: center;
    padding-block: 1rem;
    background-color: black;
    color: white;
  }
  ul {
    display: flex;
    overflow: hidden;
    li {
      margin: 1rem;
      animation: marquee 2s linear infinite;
    }
    @keyframes marquee {
      0% {
        transform: translateX(100%);
      }
      20% {
        transform: translateX(-20%);
      }
      40% {
        transform: translateX(-40%);
      }
      60% {
        transform: translateX(-60%);
      }
      80% {
        transform: translateX(-80%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
`;
