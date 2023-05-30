import React from 'react'

import { AppBar, Toolbar, styled } from '@mui/material'

import logo from '../assets/codepen.jfif'

const Container = styled(AppBar)`
        background: #060606;
        height: 9vh;

`


export default function Header() {
  return (
        <Container position='static'>
           <Toolbar>
                <img src={logo} alt="logo" style={{ width: 60}} />
           </Toolbar>
        </Container>
  )
}
