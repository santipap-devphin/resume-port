import React , {useState} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';

const Project = () => {
  return (<Box sx={{mt:1 , mb:1}}>
            <Container>
             <Grid 
                    container
                    sx={{display:{xs:"none" , md:"flex"}}}
                    spacing={0.8}
                    >
                        <Grid item xs={12} md={12}>
                            <Card sx={{cursor:"pointer" ,background:'#3f51b5' , maxWidth:700}} >
                             
                                            <Stack 
                                                    direction="column"  
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    >
                                                    <Typography variant='p' sx={{fontSize:24 , color:"#000" , mt:1}}>title</Typography>
                                                    <Typography variant='p' sx={{fontSize:18 , color:"#000" , mt:1}} textAlign="center">des</Typography>
                                            
                                            </Stack>
                             </Card>
                        </Grid> 
                    </Grid>
             </Container>
             </Box>
         )
}

export default Project