import React from 'react';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';

const Marque = () => {
  return (
    <Wrapper>
      <h5>Live&nbsp;Market</h5>
      <Marquee
        direction="left"
        speed={40}
        gradient={false}
        className="marquee"
        loop={0}>
        <ul>
          <li>
            Cocoa (SCOC) <p>₦30,834.59</p>
          </li>
          <li>
            Fair Trade ETC (FETC)<p>₦30,834.59</p>
          </li>
          <li>
            Paddy Rice (SPRL) <p>₦30,834.59</p>
          </li>
          <li>
            Sorghum (SSGM) <p>₦30,834.59</p>
          </li>
          <li>
            Cocoa (SCOC) <p>₦30,834.59</p>
          </li>
          <li>
            Soybeans (SSBS) <p>₦30,834.59</p>
          </li>
          <li>
            Paddy Rice (SPRL) <p>₦30,834.59</p>
          </li>
          <li>
            Sorghum (SSGM) <p>₦30,834.59</p>
          </li>
          <li>
            Cocoa (SCOC) <p>₦30,834.59</p>
          </li>
          <li>
            Soybeans (SSBS) <p>₦30,834.59</p>
          </li>
          <li>
            Paddy Rice (SPRL) <p>₦30,834.59</p>
          </li>
          <li>
            Sorghum (SSGM) <p>₦30,834.59</p>
          </li>
          <li>
            Cocoa (SCOC) <p>₦30,834.59</p>
          </li>
          <li>
            Soybeans (SSBS) <p>₦30,834.59</p>
          </li>
          <li>
            Paddy Rice (SPRL) <p>₦30,834.59</p>
          </li>
          <li>
            Sorghum (SSGM) <p>₦30,834.59</p>
          </li>
          <li>
            Cocoa (SCOC) <p>₦30,834.59</p>
          </li>
          <li>
            Soybeans (SSBS) <p>₦30,834.59</p>
          </li>
          <li>
            Paddy Rice (SPRL) <p>₦30,834.59</p>
          </li>
          <li>
            Fair Trade ETC (FETC)<p>₦30,834.59</p>
          </li>
          <li>
            Cocoa (SCOC) <p>₦30,834.59</p>
          </li>{' '}
          <li>
            Soybeans (SSBS) <p>₦30,834.59</p>
          </li>
          <li>
            Paddy Rice (SPRL) <p>₦30,834.59</p>
          </li>
          <li>
            Paddy Rice (SPRL) <p>₦30,834.59</p>
          </li>
          <li>
            Paddy Rice (SPRL) <p>₦30,834.59</p>
          </li>
          <li>
            Soybeans (SSBS) <p>₦30,834.59</p>
          </li>
          <li>
            Soybeans (SSBS) <p>₦30,834.59</p>
          </li>
        </ul>
      </Marquee>
    </Wrapper>
  );
};

export default Marque;

const Wrapper = styled.footer`
  height: 3rem;
  position: fixed;
  right: -40px;
  bottom: 0;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  h5 {
    height: 100%;
    position: relative;
    left: 1.5rem;
    z-index: 10000;
    padding-top: 0.9rem;
    padding-inline: 1rem;
    background-color: black;
    color: white;
  }
  .marquee ul {
    display: flex;
    overflow: hidden;
    height: fit-content;
    li {
      margin: 1rem;
    }
  }
  @media (min-width: 1441px) {
    height: 4rem;
    h5 {
      font-size: xx-large;
      left: 4.5rem;
    }
    .marquee ul {
      li {
        font-size: large;
        font-weight: 700;
      }
    }
  }
`;
