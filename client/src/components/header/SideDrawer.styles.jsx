import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideDrawer = styled.div`
  height: 100%;
  background: white;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 75%;
  max-width: 400px;
  z-index: 200;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  @media (min-width: 769px) {
    display: none;
  }
`

export const SideDrawerUl = styled.ul`
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const SideDrawerLi = styled(Link)`
  margin: 1.5rem 0;
  color: purple;
  text-decoration: none;
  font-size: 2rem;
  &:hover{
    &:active {
      color: orange;
      font-weight: bolder;
    }
  }
  
`
