import Head from 'next/head'
import styled from 'styled-components'
import Navbar from './Navbar';

const StyledLayout = styled.div`
  font-family: 'Open Sans', sans-serif;
`

const Layout = (props) => (
  <StyledLayout>
    <Head>
      <title>DevFest New Orleans 2019</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet"></link>
      <style>
        {'body {margin: 20px}'}
      </style>
    </Head>
    <Navbar/>
    {props.children}
  </StyledLayout>
)

export default Layout
