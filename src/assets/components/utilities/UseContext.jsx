import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const UseContext = () => {

    const theme = useTheme()

    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    return [isMatch]
}

export default UseContext
