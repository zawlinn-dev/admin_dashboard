
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

export const menuItem = [

    {

        id: 1,
        title: 'Dashboard',
        path: '/',
        icon: <DashboardOutlinedIcon className='navIcon' />
    }
]
export const mainItem =[
    
    {

        id: 1,
        title: 'Users',
        path: '/users',
        icon: <GroupOutlinedIcon className='navIcon' />
    },
    {

        id: 3,
        title: 'Products',
        path: '/product',
        icon: <AutoAwesomeMotionIcon className='navIcon' />
    },
]