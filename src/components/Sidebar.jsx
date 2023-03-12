import React from 'react';
import styled from 'styled-components';
import logo from '../assets/comx-logo.png';
import {
  TbLayoutDashboard,
  TbHomeStats,
  TbBasket,
  TbReportSearch,
  TbSettings,
} from 'react-icons/tb';
import { IoPeopleOutline } from 'react-icons/io5';
import { BiLogOut } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <Wrapper>
      <img src={logo} alt="comx" />
      <div className="icons">
        <ul className="sidebar-icons">
          <li>
            <TbLayoutDashboard />
            <span className="tooltip">Dashboard</span>
          </li>
          <li className="active">
            <TbHomeStats />
          </li>
          <li>
            <TbBasket />
            <span className="tooltip">Portfolio</span>
          </li>
          <li>
            <IoPeopleOutline />
            <span className="tooltip">Community</span>
          </li>
          <li>
            <TbReportSearch />
            <span className="tooltip">Report</span>
          </li>
        </ul>
        <ul className="footer-icons">
          <li>
            <TbSettings />
            <span className="tooltip">Settings</span>
          </li>
          <li>
            <BiLogOut />
            <span className="tooltip">Logout</span>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.aside`
  height: 100%;
  background-color: white;
  width: 5%;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  img {
    width: 3rem;
    align-self: center;
  }
  .icons {
    height: 93vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .sidebar-icons,
  .footer-icons {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    li {
      font-size: 1.3rem;
      position: relative;
      display: inline-block;
    }
    li.active {
      background-color: #b4e0f140;
      color: #d83430;
      padding-inline: 0.5rem;
      border-radius: 10%;
    }
    li:hover .tooltip {
      visibility: visible;
    }
    li .tooltip {
      box-shadow: 5px 5px 30px 5px grey;
      visibility: hidden;
      font-size: 0.8rem;
      width: 100px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;
      position: absolute;
      z-index: 1;
      top: 1px;
      left: 175%;
    }
  }
`;
