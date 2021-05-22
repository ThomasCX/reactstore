import styled from "styled-components";
import {Link} from "react-router-dom";

export const OptionLink = styled(Link)`
  cursor: pointer;
  color: #333333;
  display: inline-block;
  &:hover {
    text-decoration: none;
    color: #000000;
    font-weight: bold;
    display: inline-block;
  }
  @media screen and (max-width: 800px){
    align-items: center;
    display: inline-block;
  }
`;

export const List = styled.li`
  display: inline-block;
`

export const Container = styled.div`
  padding: 5px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  color: #777;
  position: relative;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 800px) {
    background-color:#b3b3b3;
    margin-bottom:1rem;
  }`

export const OptionLink2 = styled.div`
  cursor: pointer;
  color: #333333;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  &:hover {
    text-decoration: none;
    color: #000000;
    display: inline-block;
  }
  @media screen and (max-width: 800px){
    align-items: center;
    display: inline-block;
  }
`;

export const Icon = styled(Link)`
  padding: 20px;
  position: relative;
  display: inline-block;
  &:hover {
    color: #4800ff;
    display: inline-block;
  }
  @media screen and (max-width: 800px) {
    align-items: center;
    display: inline-block;
  }
`

export const Button = styled.button`
  position: absolute;
  border: none;
  background: none;
  display: inline-block;
  font-size: 1.5rem;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  top: .5rem;
  right: .3rem;
  line-height: 0;
  `

export const Form = styled.form`
  margin-bottom: 0;
  padding-bottom: 0;
  background-color: grey;
  position: relative;
`
