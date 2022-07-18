import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import UseapiComp from '../utilities/UseapiComp';
import AxiosComp from '../utilities/AxiosComp';
import { Link } from 'react-router-dom'
import axios from 'axios'


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'Name',
        headerName: 'Name',
        //   type: 'number',
        minWidth: 150,
        renderCell: (params) => {

            return (
                <div className='cellWithImg'>
                    {params.row.name}
                </div>
            )
        }
    },
    {

        field: 'email',
        headerName: 'Email',
        width: 230,
    },
    {

        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {

            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    }

];


const TableComp = () => {

    const [data, setData] = useState([])

    const [rows, error, loading] = UseapiComp({

        instance: AxiosComp,
        method: 'GET',
        url: '/',
        requestConfig: {

        }
    })

    const handleDelete = (id) => {

        setData(data.filter((item) => item.id !== id))

        axios.delete(`http://localhost:4000/users/${id}`)
        
    }

    React.useEffect(() => {

        setData(rows)       

        console.log(data, rows, error, loading)

    }, [rows])


    


    const actionColumn = [
        {

            field: 'action',
            headerName: "Action",
            width: 200,
            renderCell: (params) => {

                return (

                    <Stack className='cellAction' direction='row' spacing={2} alignItems='center'>
                        <Link to={`${params.row.id}`}>
                            <Button variant='outlined' color='primary' className="ViewButton"> View </Button>
                        </Link>
                        <Button variant='outlined' color='error' onClick={()=> handleDelete(params.row.id)}> Delete </Button>
                    </Stack>
                )
            }
        }
    ]


    return (
        <>
            {
                loading && <Typography color='primary' variant='h6'> Loading ... </Typography>
            }

            {

                !loading && error && <Typography color='error' variant='h6'> {error} </Typography>
            }

            {/* {

                !loading && !error && rows ? <TableContainer component={Paper}>
                    <Table sx={{width: '90%', margin: '30px auto'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell> ID </TableCell>
                                <TableCell> Name </TableCell>
                                <TableCell> Email </TableCell>
                                <TableCell> Status </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                rows.map((row) => (

                                    <TableRow key={row.id}>
                                        <TableCell className='tableCell'> {row.id} </TableCell>
                                        <TableCell className='tableCell'> {row.name} </TableCell>
                                        <TableCell className='tableCell'> {row.email} </TableCell>
                                        <TableCell className='tableCell'> {row.status} </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer> : "Server is Down"
            } */}

            <Box sx={{height: '600px'}}>

                <DataGrid
                    className='dataGrid'
                    rows={data}
                    columns={columns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
            </Box>
        </>
    )
}

export default TableComp
