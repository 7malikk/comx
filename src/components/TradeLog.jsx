import React from 'react';
import styled from 'styled-components';
const TradeLog = () => {
  return (
    <Wrapper>
      <h4>Trade Log</h4>
      <table className="boardTable">
        <thead>
          <tr>
            <th>Security</th>
            <th>Board</th>
            <th>Order Type</th>
            <th>Matched Price</th>
            <th>Qauntity</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Soybeans (SSBS)</td>
            <td>X-Traded</td>
            <td>Sell </td>
            <td>1792.65</td>
            <td>2000</td>
            <td>17th Oct, 2020</td>
            <td>07:38</td>
          </tr>
          <tr>
            <td>Paddy Rice (SPRL)</td>
            <td>X-Traded</td>
            <td>Sell </td>
            <td>1792.65</td>
            <td>86</td>
            <td>17th Oct, 2020</td>
            <td>07:38</td>
          </tr>
          <tr>
            <td>Maize (SMAZ)</td>
            <td>OTC</td>
            <td>Buy </td>
            <td>1792.65</td>
            <td>2000</td>
            <td>17th Oct, 2020</td>
            <td>07:38</td>
          </tr>
          <tr>
            <td>Sorghum (SSGM)</td>
            <td>FI</td>
            <td>Buy </td>
            <td>1792.65</td>
            <td>2000</td>
            <td>17th Oct, 2020</td>
            <td>07:38</td>
          </tr>
          <tr>
            <td>Fair Trade ETC (FETC)</td>
            <td>FI</td>
            <td>Buy</td>
            <td>1792.65</td>
            <td>2000</td>
            <td>17th Oct, 2020</td>
            <td>07:38</td>
          </tr>
          <tr>
            <td>Soybeans (SSBS)</td>
            <td>X-Traded</td>
            <td>Sell </td>
            <td>1792.65</td>
            <td>2000</td>
            <td>17th Oct, 2020</td>
            <td>07:38</td>
          </tr>
          <tr>
            <td>Soybeans (SSBS)</td>
            <td>Derivatives</td>
            <td>Sell </td>
            <td>1792.65</td>
            <td>2000</td>
            <td>17th Oct, 2020</td>
            <td>07:38</td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default TradeLog;

const Wrapper = styled.section`
  grid-area: tradelog;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* margin-bottom: 1rem; */
  border-radius: 0.5rem;
  background: #ffffff;
  h4 {
    margin-block: 0.6rem;
    padding-inline: 1rem;
  }
  table.boardTable {
    border-collapse: collapse;
    width: 100%;
    th {
      border-top: 1px solid #ddd;
    }
    td,
    th {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    th {
      padding-top: 7px;
      padding-bottom: 7px;
      text-align: left;
      color: #797979;
    }
  }
  @media (min-width: 1241px) {
    table.boardTable {
      th,
      td {
        font-size: medium;
      }
    }
  }
  @media (min-width: 1441px) {
    h4 {
      font-size: xx-large;
    }
    table.boardTable {
      th,
      td {
        font-size: x-large;
      }
    }
  }
`;
