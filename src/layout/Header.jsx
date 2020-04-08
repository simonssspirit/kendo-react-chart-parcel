import React, { useContext } from 'react'
import styled from 'styled-components'
import { LayoutContext } from '~/index'
const TopBar = styled.div`
  position: fixed;
  height: 50px;
  padding: 0.7em 1.5em 0em 1.5em;
  color: #ffffff;
  z-index: 999;
  right: 0;
  background: linear-gradient(90deg, #0388e5 0, #07bdf4);
  @media (min-width: 1025px) {
    left: ${props => (props.isActive === true ? '250px;' : '0px;')};
  }

  @media (max-width: 1024px) {
    left: 0;
  }
`

const Icon = styled.span`
  font-size: 2em;
  &:hover {
    color: #c3e8fb;
    cursor: pointer;
  }
`

const RightCorner = styled.div`
  float: right;
  display: block;
`

const Header = () => {
  const { state, setState } = useContext(LayoutContext)
  return (
    <TopBar isActive={state.isSidebarActive}>
      <Icon
        className="k-icon k-i-rows"
        onClick={() => {
          setState({ ...state, isSidebarActive: !state.isSidebarActive })
        }}
      ></Icon>
      <RightCorner>
        <Icon className="k-icon k-i-calendar" />
        <Icon className="k-icon k-i-user" />
      </RightCorner>
    </TopBar>
  )
}

export default Header
