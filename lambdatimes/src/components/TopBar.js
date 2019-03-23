import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarInt>
      <Container>
        <ContLeft>
          <CentSpan>TOPICS</CentSpan><CentSpan>SEARCH</CentSpan>
        </ContLeft>
        <ContCent>
          <CentSpan>GENERAL</CentSpan>
          <CentSpan>BROWNBAG</CentSpan>
          <CentSpan>RANDOM</CentSpan>
          <CentSpan>MUSIC</CentSpan>
          <CentSpan>ANNOUNCEMENTS</CentSpan>
        </ContCent>
        <ContRight>
          <CentSpan>LOG IN</CentSpan>
        </ContRight>
      </Container>
    </TopBarInt>
  )
}

const TopBarInt = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`
const ContLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const ContCent = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`
const CentSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
  :hover {
    text-decoration: underline
  }
`
const ContRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

export default TopBar;