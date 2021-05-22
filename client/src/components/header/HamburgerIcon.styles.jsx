import styled from 'styled-components';
import {ReactComponent as Hamburger } from '../../assets/iconmonstr-shopping-bag-7.svg'

export const ToggleButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  &:focus  {
    outline: none;
  }
`

export const ToggleButtonLine = styled(Hamburger)`
  width: 30px;
  margin-left: 0.5rem;
  `
