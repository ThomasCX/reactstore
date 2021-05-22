import styled from "styled-components";
export const SignInForm = styled.div`
  width: 380px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    margin-bottom: 1rem;
    width: 100%;
  }
`

export const Title = styled.h2`
  margin: 10px 0;
`

export const ButtonsBarContainer  = styled.div`
   border: none;
  display: flex;
  justify-content: space-between;
`
