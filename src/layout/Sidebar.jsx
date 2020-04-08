import React, { useContext } from 'react'
import styled from 'styled-components'
import { LayoutContext } from '~/index'
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout'
import { withRouter, Link } from 'react-router-dom'
import { paths } from './Routes'
const LayoutSideBar = styled.div`
  position: fixed;
  width: 250px;
  height: 100%;
  z-index: 999;
  overflow-y: auto;
  transition: left 0.2s;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  background: linear-gradient(180deg, #f3f4f9 0, #d7dbe8);
  @media (min-width: 1025px) {
    left: ${(props) => (props.isActive === true ? '0px;' : '-250px;')};
  }

  @media (max-width: 1024px) {
    left: -250px;
    margin-top: 50px;
  }
`

const LogoWrapper = styled.div`
  text-align: center;
  margin-top: 24px;
  padding: 20px;
`

const Logo = styled.div`
  margin: auto;
  background-position: center;
  background-size: cover;
  height: 55px;
`

const Sidebar = ({ history, location }) => {
  const { state } = useContext(LayoutContext)

  const onSelect = (event) => {
    history.push(event.target.props.route)
  }

  const setSelectedIndex = (pathName) => {
    let currentPath = paths.find((item) => item.path === pathName)
    return currentPath?.index
  }

  const selected = setSelectedIndex(location.pathname)

  return (
    <LayoutSideBar isActive={state.isSidebarActive}>
      <PanelBar selected={selected} onSelect={onSelect}>
        <PanelBarItem title={'Home'} route="/" />
        <PanelBarItem title={'Chart Page'} route="/chart-page"></PanelBarItem>
      </PanelBar>
    </LayoutSideBar>
  )
}

export default withRouter(Sidebar)
