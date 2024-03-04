import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <Link to="/">
        <img src="images/logo.png" alt="logo" className="logo" />
      </Link>
      <Nav />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  paddings: 0 4.8rem;
  height: 8rem;
  background-color: #edf5f0;
  bacground-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  .logo {
    position: absolute;
    display: block;
    height: 7rem;
    top: 6px;
    left: 6px;
  }
`;

export default Header;
