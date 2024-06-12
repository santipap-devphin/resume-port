import React , {useContext} from 'react';
import DataContext from '../context/DataContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DevicesIcon from '@mui/icons-material/Devices';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import WebIcon from '@mui/icons-material/Web';

const Service = () => {

  const {language}  = useContext(DataContext);
  const sizetablet = useMediaQuery('(min-width:768px)');
  const sizecom = useMediaQuery('(min-width:1200px)');

  return (<Box sx={{ background:"#fff" }}>
            <Grid 
                 container
                 spacing={1}>
                <Grid item xs={12} md={12} lg={6} xl={4}>
                     <Stack 
                      sx={{pt:sizecom ? "60px" : sizetablet ? "40px" : "40px" , pl:"60px" , pr:"60px" , pb:"60px"}}
                     >
                     <Divider textAlign="center" sx={{fontSize:sizetablet ? 32 : 24}}> {language.abouts}</Divider>
                     <br />
                     <Typography className='Kanit-light' variant='p' textAlign="center" style={{fontSize:18}}>
                        {language.aboutstxt}
                      </Typography>
                     {console.log(sizetablet)}
                     </Stack>
                </Grid>
                <Grid item xs={12} md={12} lg={6} xl={8} style={{paddingTop:0}}>

                        <Grid container>
                                 <Grid item xs={12} md={6}>
                                    <Box sx={{ background:"#3f51b5" , color:"#fff"}}>
                                        <Stack direction="column" alignItems="center" sx={{pt:"60px"}}>
                                             <WebIcon sx={{fontSize:60}} />
                                            
                                             <Typography variant='h5' textAlign="center" sx={{pt:"40px" , pb:"60px"}} className="fontKanitLight">FULLSTACK DEVELOPER</Typography>
                                        </Stack>
                                     </Box>
                                 </Grid>
                                 <Grid item xs={12} md={6}>
                                    <Box sx={{ background:"#29ca8e" , color:"#fff"}}>
                                        <Stack direction="column" alignItems="center" sx={{pt:"60px"}}>
                                             <DevicesIcon sx={{fontSize:60}} />
                                             <Typography variant='h5' textAlign="center" sx={{pt:"40px" , pb:"60px"}} className="fontKanitLight">WEB DEVELOPMENT & CMS</Typography>
                                        </Stack>
                                       
                                    </Box>
                                 </Grid>
                                 <Grid item xs={12} md={6}>
                                    <Box sx={{background:{xs:"#3f51b5" , md:"#29ca8e"} , color:"#fff"}}>
                                       <Stack direction="column" alignItems="center" sx={{pt:"60px"}}>
                                             <CloudQueueIcon sx={{fontSize:60}} />
                                             <Typography variant='h5' textAlign="center" sx={{pt:"40px" , pb:"60px"}} className="fontKanitLight">API</Typography>
                                        </Stack>
                                    </Box>
                                 </Grid>
                                 <Grid item xs={12} md={6}>
                                    <Box sx={{ background:{xs:"#29ca8e" , md:"#3f51b5"} , color:"#fff"}}>
                                        <Stack direction="column" alignItems="center" sx={{pt:"60px"}}>
                                             <ScreenSearchDesktopIcon sx={{fontSize:60}} />
                                             <Typography variant='h5' textAlign="center" sx={{pt:"40px" , pb:"60px"}} className="fontKanitLight">SEO</Typography>
                                        </Stack>
                                     </Box>
                                 </Grid>
                        </Grid>
               


                </Grid>
            
            
            </Grid>
          </Box>
        )
}

export default Service