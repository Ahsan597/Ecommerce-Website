import React, {useState} from 'react'
import "./Card3.css"
import {Grid, Card, CardContent, Typography,CardHeader} from '@mui/material'
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

export default function Bonanza() {
    const [data, setData] =useState([1,3,3,3,3,3,3,2,9,9,9,9,9,9,9,8,8,8,8,8,8,9,8,8,8,8,8,8,8,8,8,8])
    const [data2, setData2] = useState([8, 8, 8, 8])

    return (
        <>
            {/* <div className="brandback">
            </div> */}
            <div className="brandtop">
                 <h1 className="brandname ">Bonanza</h1>
                    <div className="marginbox">
                                <Grid
                                    container
                                    spacing={1}
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                >
                                    {data.map(elem => (
                                        <Grid item xs={12} sm={6} md={3}>
                                            <Card cols={3} className="cardimg">
                                            <h5 className='nqpp'>Product Name</h5>
                                            <div className='pricequantity'><h6 className=''>Price: 12000</h6>
                                                <h6 className='nqp11'>Quantity: 12/50</h6>
                                                <button className='btncart1'>Add to Cart</button>
                                            </div>
                                            </Card>
                                        </Grid>
                                     ))}
                                 </Grid>
                        </div>
             </div>
         </>
    )
}