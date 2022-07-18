import { Box } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import NavbarComp from '../../components/navbar/NavbarComp'
import SidebarComp from '../../components/sidebar/SidebarComp'
import TableComp from '../../components/table/TableComp'
import UseContext from '../../components/utilities/UseContext'


const UsersComp = () => {
  const [isMatch] = UseContext()

  useEffect(() => {

    document.title = "Users"

  }, [])
  return (
    <Box component='header'>
      <SidebarComp isMatch={isMatch} />
      <Box className='main' component='main'>
        <Box className={`container ${isMatch && 'left_0'} `}>
          <NavbarComp isMatch={isMatch} />
          <TableComp />
        </Box>
      </Box>
    </Box>
  )
}

export default UsersComp
