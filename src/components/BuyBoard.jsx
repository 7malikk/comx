import React from 'react';
import styled from 'styled-components';

const BuyBoard = () => {
  return (
    <Wrapper>
      <h4>Buy Board</h4>
      <table className="boardTable">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Soybeans (SSBS)</td>
            <td>2003</td>
            <td>6,741.39</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>
          <tr>
            <td>Paddy Rice (SPRL)</td>
            <td>86</td>
            <td>6,741.39</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>
          <tr>
            <td>Maize (SMAZ)</td>
            <td>2003</td>
            <td>6,741.39</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>
          <tr>
            <td>Sorghum (SSGM)</td>
            <td>2003</td>
            <td>6,741.39</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>
          <tr>
            <td>Fair Trade ETC (FETC)</td>
            <td>2003</td>
            <td>6,741.39</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>
          <tr>
            <td>Soybeans (SSBS)</td>
            <td>2003</td>
            <td>6,741.39</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>
          <tr>
            <td>Soybeans (SSBS)</td>
            <td>2003</td>
            <td>6,741.39</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default BuyBoard;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  grid-area: buyboard;

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
    thead tr th:last-child,
    tbody tr td:last-child {
      text-align: center;
      .green {
        color: green;
        padding-inline: 0.1rem;
        padding-block: 0.1rem;
        border-radius: 0.3rem;
        background: #d1ffccac;
        text-align: center;
      }
    }
    tbody tr td:nth-last-child(2) {
      color: green;
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
