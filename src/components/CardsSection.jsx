import React from 'react';
import styled from 'styled-components';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CardsSection = () => {
  return (
    <Wrapper>
      <div className="cash-card card">
        <h5>Cash Balance</h5>
        <div className="card-split">
          <div className="amount">
            <h4>₦8,374,763</h4>
            <div className="status">
              <div>Decline</div>
              <p>Monitored Monthly</p>
            </div>
          </div>
          <div className="chart">
            <AreaChart
              width={100}
              height={50}
              data={data}
              margin={{
                top: 6,
                right: 0,
                left: 0,
                bottom: 5,
              }}>
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#ff3b3b"
                fill="#ff3b3b"
              />
            </AreaChart>
          </div>
        </div>
      </div>
      <div className="security-card card">
        <h5>Securities Value</h5>
        <div className="card-split">
          <div className="amount">
            <h4>₦8,374,763</h4>
            <div className="status">
              <div>Decline</div>
              <p>Monitored Monthly</p>
            </div>
          </div>
          <div className="chart">
            <AreaChart
              width={100}
              height={50}
              data={data}
              margin={{
                top: 6,
                right: 0,
                left: 0,
                bottom: 5,
              }}>
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#ff3b3b"
                fill="#ff3b3b"
              />
            </AreaChart>
          </div>
        </div>
      </div>
      <div className="loan-card card">
        <h5>Loan Balance</h5>
        <div className="card-split">
          <div className="amount">
            <h4>₦8,374,763</h4>
            <div className="status">
              <div className="increment">Increment</div>
              <p>Monitored Monthly</p>
            </div>
          </div>
          <div className="chart">
            <AreaChart
              width={100}
              height={50}
              data={data}
              margin={{
                top: 6,
                right: 0,
                left: 0,
                bottom: 5,
              }}>
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#3bff4b"
                fill="#3bff4b"
              />
            </AreaChart>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CardsSection;

const Wrapper = styled.section`
  /* width: 90%; */
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: 1rem;
  .card {
    display: flex;
    flex-direction: column;
    padding-inline: 0.6rem;
    padding-block: 0.8rem;
    border-radius: 0.5rem;
    background: #ffffff;
    .card-split {
      display: flex;
      justify-content: space-between;
      margin-block: 0.2rem;
      .amount {
        .status {
          display: flex;
          justify-content: space-between;
          align-items: center;
          div {
            background: #ffccccac;
            color: red;
            padding-inline: 0.6rem;
            /* padding-block: 0.2rem; */
            margin-right: 0.5rem;
            border-radius: 0.3rem;
          }
          div.increment {
            background: #d1ffccac;
            color: green;
          }
        }
      }
    }
  }
`;

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },

  {
    name: 'Page H',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page I',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page H',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
