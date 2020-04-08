import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import routes from './Routes'
import { LayoutContext } from '~/index'

const Container = styled.div`
  margin-left: 250px;
  padding: 66px 16px 16px;

  @media (min-width: 1025px) {
    margin-left: ${props => (props.isActive === true ? '250px;' : '0px;')};
  }

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`

const Main = props => {
  const { state, setState } = useContext(LayoutContext)
  return (
    <Container isActive={state.isSidebarActive}>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Switch>
    </Container>
  )
}

export default Main
