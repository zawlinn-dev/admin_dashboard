import React from 'react'
import { Box } from '@mui/material'
import SidebarComp from '../../components/sidebar/SidebarComp'
import NavbarComp from '../../components/navbar/NavbarComp'
import UseContext from '../../components/utilities/UseContext'
import { useEffect } from 'react'


const HomeComp = () => {

  const [isMatch] = UseContext()

  console.log(isMatch)

  useEffect(()=>{

    document.title = 'Home'
    
  }, [])

  return (
    <>
      <Box component='header'>
        <SidebarComp isMatch={isMatch} />
        <Box className='main' component='main'>
          <NavbarComp isMatch={isMatch} />
        </Box>
      </Box>
    </>
  )
}

export default HomeComp
