import React , { useState , useContext }from 'react';
import DataContext from '../context/DataContext';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import '../assets/css/timeline.css';

const About = () => {

    const {language} = useContext(DataContext);
    const [open , setOpen] = useState(false);
    const [idPort , setIdPort] = useState(0); 
    const [poSition , setPosition] = useState(null);

    var datas = ["../image/seo.webp" , "https://devphin.tech/port/docQueue.pdf" , "https://devphin.tech/port/datadic.pdf"];

    const handleClose = () => {
            setOpen(false);
   } 

   const clkZoom = (id) => {

    setIdPort(id);
    setPosition(datas[id]);
    setOpen(true);
   }

   const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: '#F6F7FC',
    borderRadius: '5px',
    overflow: 'hidden',
    boxShadow: 24,
    p: '10px',
    border: '2px solid #fff',
  };
   
     return (<>
            <Stack sx={{background: '#29ca8e',textAlign:'center' , pt:0.5,pb:0.5}}>
                <Typography variant='h4' >
                    {language.other}
                </Typography>
            </Stack>
            <Box sx={{
                display: 'flex',
                backgroundImage:`url(${'../../image/timeline.png'})`,
                backgroundRepeat:"no-repeat",
                backgroundPosition:"top",
                backgroundSize:"cover",
                backgroundAttachment:"fixed",
                position:"relative"
            }}
            >
                <div className="timeline">
                    
                        <div className="container left">
                            <div className="content">
                            <h2>{language.workother[0]}</h2>
                            <p>{language.workother[3]}</p>
                            <Button variant="outlined" color="warning" sx={{mb:1}} onClick={() => clkZoom(0)}>รายละเอียด <RemoveRedEyeIcon sx={{ml:1}} /></Button>
                            <embed type="image/webp" src="../image/seo.webp" style={{width:"100%", height:"auto"}}></embed>
                            </div>
                        </div>
                       
                        <div className="container right">
                            <div className="content">
                            <h2>{language.workother[1]}</h2>
                            <Button variant="outlined" color="warning" sx={{mb:1}} onClick={() => clkZoom(1)}>รายละเอียด <RemoveRedEyeIcon sx={{ml:1}} /></Button>
                            <embed src="https://devphin.tech/port/docQueue.pdf" type="application/pdf" style={{width:"100%", height:"400px"}} />
                            </div>
                        </div>
                        <div className="container left">
                            <div className="content">
                            <h2>{language.workother[2]}</h2>
                            <Button variant="outlined" color="warning" sx={{mb:1}} onClick={() => clkZoom(2)}>รายละเอียด <RemoveRedEyeIcon sx={{ml:1}} /></Button>
                            <embed src="https://devphin.tech/port/datadic.pdf" type="application/pdf" style={{width:"100%", height:"400px"}}/>
                            </div>
                        </div>
                  </div>
                        <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                slots={{ backdrop: Backdrop }}
                                slotProps={{
                                backdrop: {
                                timeout: 500,
                                },
                                }}
                            >
                                <Fade in={open}>

                                    <Box sx={style}>
                                        <Grid container columnSpacing={2}>
                                                <Grid  xs={12} sx={{textAlign:'right'}}>
                                                            <Button variant="contained" color="error" onClick={handleClose} sx={{fontSize:18}}> <DisabledByDefaultIcon /> ปิด</Button>
                                                </Grid>
                                        </Grid>
                                        <Box 
                                            sx={{p:1 , maxHeight:800 , overflow: 'auto'}}
                                         >
                                            {
                                                idPort !== 0 ?  <embed src={poSition} type="application/pdf" style={{width:"100%" ,height:800}} />

                                                :<img src={poSition} style={{width:'100%'}} loading="lazy" alt='รูปภาพ speedInsights'  />
                                            }
                                            
                                        </Box>
                                    </Box>
                                </Fade>
                            </Modal>
                 
         </Box>
         </>
  )
}

export default About