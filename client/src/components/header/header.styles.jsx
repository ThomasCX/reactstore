import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ToggleButton = styled.div`
  @media (max-width: 768px) {
      margin-right: 15px;
  }
  @media (min-width: 769px) {
    display: none;
  }
`

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  top: 0;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
  @media screen and (min-width: 769px){
    margin-left: 5px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
      display: none;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 10px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: #000000;
    font-weight: bold;
  }
`;
