import styled from "styled-components";
import {Link} from "react-router-dom";

export const OptionLink = styled(Link)`
  cursor: pointer;
  color: #333333;
  &:hover {
    text-decoration: none;
    color: #000000;
    font-weight: bold;
  }
  @media screen and (max-width: 800px){
    align-items: center;
  }
`;

export const Container = styled.div`

  @media screen and (max-width: 800px) {
    background-color:#b3b3b3;
    margin-bottom:1rem;
  }`

export const OptionLink2 = styled.div`
  cursor: pointer;
  color: #333333;
  text-transform: uppercase;
  font-weight: bold;
  &:hover {
    text-decoration: none;
    color: #000000;
  }
  @media screen and (max-width: 800px){
    align-items: center;
  }
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px){
    align-items: center;
  }
`;

export const Icon = styled.div`
  padding: 5px;
  @media screen and (max-width: 800px){
    align-items: center;
  }
`
