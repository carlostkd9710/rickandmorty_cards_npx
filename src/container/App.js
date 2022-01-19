import React, { Component } from 'react'
import Api from '../components/Api'
import styled from 'styled-components'

const StyledContainer = styled.div`
  text-align: center;
  justify-content: center;
  background-color: black;
`
export default class App extends Component {
  render() {
    return (
      <StyledContainer>
        <Api/>
      </StyledContainer>
    )
  }
}
