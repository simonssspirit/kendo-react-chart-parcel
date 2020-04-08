import React from 'react'
import ChartPage from '~/pages/ChartPage'

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <h2>Home</h2>,
  },
  {
    path: '/chart-page',
    main: () => <ChartPage />,
  },
]

const paths = [
  { path: '/', index: '.0' },
  { path: '/chart-page', index: '.1' },
]

export { paths, routes as default }
