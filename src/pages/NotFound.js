import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {Link}  from "react-router-dom";

function NotFound() {
  return (<Grid sx={{ flexGrow: 1  ,pt:5}}>
                    <Box
                        sx={
                           {
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent:'center',
                           }
                        }
                    >
                        <Card 

                            sx={{
                                width:"20%",
                                backgroundColor:' rgb(255, 255, 255)',
                                boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 15px 0px',
                                transformStyle: 'preserve-3d',
                                alignItems:'center',
                                textAlign:'center'

                            }} >
                            <CardContent>
                                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom style={{fontFamily:'Kanit-light'}}>
                                ไม่พบหน้าที่ท่านต้องการ
                                </Typography>
                              </CardContent>
                            <CardActions sx={{justifyContent:'center'}}>
                                <Link to="/">
                                <Button size="small" style={{fontFamily:'Kanit-light'}} variant="contained" color="primary">กลับหน้าหลัก</Button>    
                                </Link>
                                
                            </CardActions>
                            </Card>
                     </Box>

                </Grid>
        )
}

export default NotFound