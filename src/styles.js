import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const UserForm = styled.form`
  //   width: 500px;
  padding: 56px;
  padding-top: 50px;
  padding-bottom: 80px;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  background: #e9ecef;
  text-align: center;
  //   transition: 0.25s;
  //   margin-top: 100px;
`;
export const GymImg = styled.img`
  width: 280px;
  height: 305px;
`;

export const CardBody = styled.div`
  text-align: left;
  margin-left:: 95px;
`;
export const NavList = styled(NavLink)`
  font-size: 25px;
  margin-top: 15px;
  padding-right: 25px;
  color: orange;
  &.active {
    color: Red;
    font-weight: bold;
  }
`;
export const List = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const Navitem = styled(NavLink)`
  // color: white;
  padding: 0.2em 1em;
  // font-size: 18px;
  text-decoration: none !important;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
