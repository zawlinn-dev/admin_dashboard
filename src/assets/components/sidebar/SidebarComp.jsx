import { Box, List, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import sidebar from './sidebarComp.module.sass'
import { menuItem, mainItem } from '../../db/menuItem'

const SidebarComp = ({isMatch}) => {
    return (
        <Box component='aside' className={`${sidebar.mainSide} ${isMatch && sidebar.slideBar_100}`}>

            {/* Side Top Session */}
            <Box className={`${sidebar.top}`}>
                <Stack>
                    <Link to='/' className={sidebar.logoIcon}>
                        Brand Name
                    </Link>
                </Stack>
            </Box>

            <Box className={sidebar.center}>
                <List>
                    {

                        menuItem.map(data =>

                            <ListItem key={data.id} sx={{ p: '0' }}>
                                <NavLink to={data.path} className='navItem'>
                                    {data.icon}
                                    <Typography className='navTxt'> {data.title} </Typography>
                                </NavLink>
                            </ListItem>

                        )
                    }

                    <Typography variant='body2' className='menuTitle'> Main Menu </Typography>

                    {

                        mainItem.map(data =>

                            <ListItem key={data.id} sx={{ p: '0' }}>
                                <NavLink to={data.path} className='navItem'>
                                    {data.icon}
                                    <Typography className='navTxt'> {data.title} </Typography>
                                </NavLink>
                            </ListItem>
                        )
                    }
                </List>

            </Box>
            <Box className={sidebar.bottom}>

            </Box>
        </Box>
    )
}

export default SidebarComp
