import styled from "styled-components";

export const Container = styled.div`
  width: 850px;
  justify-content: space-between;
  margin: 30px auto;
  text-align: center;
  @media screen and (max-width: 800px) {
    width: unset;
    align-items: center;
  }
`;

export const HR = styled.hr`
  color: black;
  border: 1px solid black;
  width: 800px;
  @media screen and (max-width: 800px) {
    width: unset;
    align-items: center;
  }
`
export const AboutTile = styled.h2`
  font-size: 38px;
  padding: 10px;
  margin-top: 5px;
`;

export const Title = styled.h1`
    margin: 10px 0;
`
export const AboutContainer = styled.span`
    color: #3742d0;
    font-weight: bolder;
    padding: 10px;
  @media screen and (max-width: 800px) {
    width: unset;
    align-items: center;
  }
`
