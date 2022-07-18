import { Box } from '@mui/material'
import React from 'react'
import navbar from './navbarComp.module.sass'

const NavbarComp = ({isMatch}) => {
  return (
    <>
      <Box component='nav' className={`${navbar.nav} ${isMatch && navbar.slide_0}`}>
          nav bar
      </Box>
    </>
  )
}

export default NavbarComp
