import React , {useContext} from 'react';
import DataContext from '../context/DataContext';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const Program = () =>{

  const {language}  = useContext(DataContext);
  return (<Box sx={{ background:"#f8f8f8" , pt: { xs: "10px" , md: "20px"} , pb: { xs: "50px" , md: "120px"} }}>
                <Container>
                <Stack 
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Typography variant='h4' sx={{pt:5 , pb:5}}>{language.skillother}</Typography>
                </Stack>
                <Stack sx={{m:1}}>
                    <Divider textAlign="center">
                    
                        <Chip label="PROGRAM & TOOLS" size="large" color="secondary" />

                    </Divider>
                  </Stack>
                    <Grid container columnSpacing={2} rowSpacing={2} textAlign="center" sx={{mt:1}}>
                                <Grid item="true" xs={12} md={12} > 
                               
                                    <Chip label="Express.js" sx={{m:0.5}} />
                                    <Chip label="Axios" sx={{m:0.5}} />
                                    <Chip label="Ant Design" sx={{m:0.5}} />
                                    <Chip label="SwiperJS" sx={{m:0.5}} />
                                    <Chip label="Google Map API " sx={{m:0.5}} />
                                    <Chip label="Line Messaging API " sx={{m:0.5}} />
                                    <Chip label="WinSCP" sx={{m:0.5}} />
                                    <Chip label="GitHub" sx={{m:0.5}} />
                                    <Chip label="Putty" sx={{m:0.5}} />
                                    <Chip label="Visual Studio Code" sx={{m:0.5}} />
                                    <Chip label="Atom" sx={{m:0.5}}  />
                                    <Chip label="Postman" sx={{m:0.5}}  />
                                    <Chip label="PyCharm CE" sx={{m:0.5}}  />
                                    <Chip label="Sql server management studio" sx={{m:0.5}}  />
                                    <Chip label="Netbeans IDE" sx={{m:0.5}}  />
                                    <Chip label="Adobe Photoshop CS6" sx={{m:0.5}}  />
                                    <Chip label="Adobe Dreamwever" sx={{m:0.5}}  />
                                    <Chip label="Dev C++" sx={{m:0.5}}  />
                                    <Chip label="Microsoft Visual Studio" sx={{m:0.5}}  />
                                    <Chip label="Arcgis" sx={{m:0.5}}  />
                                    <Chip label="Microsoft Office (Word, Excel , Powerpoint , Access)" sx={{m:0.5}}  />
                                    <Chip label="PhpMyadmin" sx={{m:0.5}}  />
                                    <Chip label="Andriod Studio" sx={{m:0.5}}  />
                                    <Chip label="CuteFTP" sx={{m:0.5}}  />
                                    <Chip label="FileZila" sx={{m:0.5}}  />
                                    <Chip label="อื่นๆ....." sx={{m:0.5}}  />
                                </Grid>
                    </Grid>
                    <Stack sx={{mt:2}}>
                        <Divider textAlign="center">
                        
                            <Chip label="Online Marketing" size="large" color="secondary" />

                        </Divider>
                    </Stack>
                    <Grid container columnSpacing={2} rowSpacing={2} textAlign="center" sx={{mt:1}}>
                                <Grid item="true" xs={12} md={12} > 
                                    <Chip label="SEO" sx={{m:0.5}} />
                                    <Chip label="Google PageSpeed Insights" sx={{m:0.5}}  />
                                    <Chip label="Google Map Api" sx={{m:0.5}}  />
                                    <Chip label="Google Analytics" sx={{m:0.5}}  />
                                    <Chip label="Google AdWords" sx={{m:0.5}}  />
                                    <Chip label="Facebook Ads" sx={{m:0.5}}  />
                                    <Chip label="Facebook Marketing" sx={{m:0.5}}  />
                                    <Chip label="Email Marketing" sx={{m:0.5}}  />
                                    <Chip label="Create Banner For Marketing" sx={{m:0.5}}  />
                                    <Chip label="Analyze Keyword For SEO" sx={{m:0.5}}  />
                                    <Chip label="Analyze SEO For Wesite" sx={{m:0.5}}  />
                                    <Chip label="Analyze Online Marketing For Wesite" sx={{m:0.5}}  />
                                  
                                </Grid>
                    </Grid>
              </Container>
         </Box>
        )
}

export default Program
