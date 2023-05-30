import React from 'react'

import { AppBar, Toolbar, styled } from '@mui/material'

const Container = styled(AppBar)`
        background: #060606;
        height: 9vh;

`
const logo = "personal-projects/clone-projects/codepen-clone/public/codepen.jfif"

export default function Header() {
  return (
        <Container position='static'>
           <Toolbar>
                <img src={logo} alt="logo" style={{ width: 40}} />
           </Toolbar>
        </Container>
  )
}
