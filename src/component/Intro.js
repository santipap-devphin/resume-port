import React ,{useContext} from 'react';
import DataContext from '../context/DataContext';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { GrReactjs } from "react-icons/gr";
import { PiFileHtmlDuotone } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { PiFileSql } from "react-icons/pi";
import { SiAdobephotoshop } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { SiMaterialdesign } from "react-icons/si";
import { LuFileJson2 } from "react-icons/lu";
import { FaWordpress } from "react-icons/fa";
import { SiCodeigniter } from "react-icons/si";
import { GrGatsbyjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { SiAmp } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaLine } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";


const Intro = () =>  {
const {language} = useContext(DataContext);
  return (<Box sx={{ background:"#f8f8f8" , pt: { xs: "10px" , md: "20px"} , pb: { xs: "50px" , md: "120px"} }}>
                <Container>
                    <Stack 
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                         <Typography variant='h4' sx={{pt:5 , pb:5}}>{language.skill}</Typography>
                    </Stack>
                    <Grid container columnSpacing={2} rowSpacing={2}>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center' , textAlign:'center'}}>
                                    <GrReactjs style={{fontSize:42 , color:"#61dafb"}} />
                                    <Typography variant='h6'>React</Typography>
                                </Stack>
                           
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <PiFileHtmlDuotone style={{fontSize:42 , color:"#ff7c00"}} />
                                    <Typography variant='h6'>HTML5</Typography>
                                </Stack>
                           
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <IoLogoJavascript style={{fontSize:42 , color:"#f7df1e"}} />
                                    <Typography variant='h6'>JavaScript</Typography>
                                </Stack>
                           
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <SiPhp style={{fontSize:42 , color:"#7A86B8"}} />
                                    <Typography variant='h6'>PHP</Typography>
                                </Stack>
                           
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <FaNode style={{fontSize:42 , color:"#417e38"}} />
                                    <Typography variant='h6'>NODEJS</Typography>
                                </Stack>
                           
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <GrGatsbyjs style={{fontSize:42 , color:"#1a0dab"}} />
                                    <Typography variant='h6'>GatsbyJS</Typography>
                                </Stack>
                           
                            </Grid>
                           

                    </Grid>
                    <Grid container columnSpacing={2} rowSpacing={2} sx={{mt:1}}>
                            <Grid item="true" xs={6} md={2}>
                            <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <TbBrandNextjs style={{fontSize:42 , color:"#000"}} />
                                    <Typography variant='h6'>NextJS</Typography>
                                </Stack>
                           
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <SiMongodb style={{fontSize:42 , color:"#13aa52"}} />
                                    <Typography variant='h6'>MongoDB</Typography>
                                </Stack>
                           
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <GrMysql style={{fontSize:42 , color:"#0868ac"}} />
                                    <Typography variant='h6'>MySQL</Typography>
                                </Stack>
                           
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <PiFileSql style={{fontSize:42 , color:"#0868ac"}} />
                                    <Typography variant='h6'>SQL SERVER</Typography>
                                </Stack>
                           
                            </Grid>

                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <SiAdobephotoshop style={{fontSize:42 , color:"#00c8ff"}} />
                                    <Typography variant='h6'>PHOTOSHOP</Typography>
                                </Stack>
                           
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <FaCss3Alt style={{fontSize:42 , color:"#3595cf"}} />
                                    <Typography variant='h6'>CSS</Typography>
                                </Stack>
                           
                            </Grid>
                           
                    </Grid> 
                    <Grid container columnSpacing={2} rowSpacing={2} sx={{mt:1}}>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <LuFileJson2 style={{fontSize:42 , color:"#48836a"}} />
                                    <Typography variant='h6'>JSON</Typography>
                                </Stack>
                                
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <SiMaterialdesign style={{fontSize:42 , color:"#3595cf"}} />
                                    <Typography variant='h6'>Material Design</Typography>
                                </Stack>
                           
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <FaWordpress style={{fontSize:42 , color:"#207196"}} />
                                    <Typography variant='h6'>Wordpress</Typography>
                                </Stack>
                               
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <SiCodeigniter style={{fontSize:42 , color:"#ee4323"}} />
                                    <Typography variant='h6'>PHP Codeigniter</Typography>
                                </Stack>
                               
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <DiJqueryLogo style={{fontSize:42 , color:"#0868ac"}} />
                                    <Typography variant='h6'>Jquery</Typography>
                                </Stack>
                           
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <Box style={{fontSize:42 , background:"#1a0dab", borderRadius:50}}>
                                      <Typography variant='h5' sx={{color:'#fff' , p:0.5}}>C#</Typography>
                                    </Box> 
                                    <Typography variant='h6'>C#</Typography>
                                </Stack>
                           
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <SiAmp style={{fontSize:42 , color:"#005aef"}} />
                                    <Typography variant='h6'>AMP WEB</Typography>
                                </Stack>
                           
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <SiMui style={{fontSize:42 , color:"#007fff"}} />
                                    <Typography variant='h6'>Material UI</Typography>
                                </Stack>
                           
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <FaBootstrap style={{fontSize:42 , color:"#6e10ee"}} />
                                    <Typography variant='h6'>Bootstrap</Typography>
                                </Stack>
                           
                            </Grid>
                            <Grid item="true" xs={6} md={2}>
                                <Stack direction="column" spacing={1} sx={{background:"#fff" , p:2 , alignItems:'center', textAlign:'center'}}>
                                    <FaLine style={{fontSize:42 , color:"#00be00"}} />
                                    <Typography variant='h6'>LineBot</Typography>
                                </Stack>
                           
                            </Grid>

                           
                    </Grid>
                </Container>
         </Box>
    
        )
}

export default Intro