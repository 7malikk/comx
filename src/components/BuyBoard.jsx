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
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>
          <tr>
            <td>Berglunds snabbköp</td>
            <td>Christina Berglund</td>
            <td>Sweden</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>
          <tr>
            <td>Königlich Essen</td>
            <td>Philip Cramer</td>
            <td>Germany</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>
          <tr>
            <td>North/South</td>
            <td>Simon Crowther</td>
            <td>UK</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>
          <tr>
            <td>Paris spécialités</td>
            <td>Marie Bertrand</td>
            <td>France</td>
            <td>
              <p className="green">Buy</p>
            </td>
          </tr>

          <tr>
            <td>Paris spécialités</td>
            <td>Marie Bertrand</td>
            <td>France</td>
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
`;
