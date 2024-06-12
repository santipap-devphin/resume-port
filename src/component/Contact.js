import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import MessageIcon from '@mui/icons-material/Message';

const Contact = () => {
  return (<Grid 
            container
            spacing={0}>
           <Grid item xs={12} md={4}>
                <Box sx={{ background:"#3b5998" }}>
                     <Stack 
                        direction="row" 
                        sx={{
                            pt:5 , pb:5
                        }}
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                     >
                            <FacebookIcon sx={{color:"#fff" , fontSize:72}}/> 
                            <Link to="https://www.facebook.com/kok.kop.9" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}><Typography variant='p' sx={{fontSize:24 , color:"#fff"}}>FOLLOW ME ON <br /> FACEBOOK</Typography></Link>
                     </Stack>
                </Box>
            </Grid>     
            <Grid item xs={12} md={4}>
                <Box sx={{ background:"#06c755" }}>
                    <Stack 
                        direction="row" 
                        sx={{
                            pt:5 , pb:5
                        }}
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                     >
                            <MessageIcon sx={{color:"#fff" , fontSize:72}}/> 
                            <Link to="https://line.me/ti/p/WN-adf98Ua" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}><Typography variant='p' sx={{fontSize:24 , color:"#fff"}}>FOLLOW ME ON <br /> LINE</Typography></Link>
                     </Stack>
                </Box>
            </Grid>     
            <Grid item xs={12} md={4}>
                <Box sx={{ background:"#cc2127" }}>
                    <Stack 
                        direction="row" 
                        sx={{
                            pt:5 , pb:5
                        }}
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                     >
                            <GitHubIcon sx={{color:"#fff" , fontSize:72}}/> 
                            <Link to="https://github.com/santipap-devphin" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}><Typography variant='p' sx={{fontSize:24 , color:"#fff"}}>FOLLOW ME ON <br /> GITHUB</Typography></Link>
                     </Stack>
                </Box>
            </Grid>     
         </Grid>
  )
}

export default Contact