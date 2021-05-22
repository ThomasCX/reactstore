import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  position: relative;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  } 
  @media screen and (max-width: 600px){
    padding-left: 5px;
    padding-right: 5px;
    flex-direction: column;
    margin-bottom:1rem;
  }
`;
