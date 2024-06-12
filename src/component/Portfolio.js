import React , {useState , useEffect , useContext} from 'react';
import DataContext from '../context/DataContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation } from 'swiper/modules';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import portProject from '../data/port.json';
import SyncIcon from '@mui/icons-material/Sync';
import PreviewIcon from '@mui/icons-material/Preview';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import { Gallery, Item } from 'react-photoswipe-gallery'

const Portfolio = () => {

   const [value , setValue] = useState('ALL');
   const [expanded, setExpanded] = useState('');
   const sizetablet = useMediaQuery('(min-width:768px)');
   const sizexl = useMediaQuery('(max-width:1536px)');
   const sizeD = useMediaQuery('(max-width:899px)');
   const [statusData , setStatusData] = useState(false);
   const [open , setOpen] = useState(false);
   const [titlePage  , setTitlePage] = useState('');
   const [idPage  , setIdPage] = useState('');
   const [imgShow , setImgShow] = useState('');
   const [showBtn , setshowBtn] = useState(false);
   const [dataPort , setDataPort] = useState([]);
   const {language} = useContext(DataContext);
   const clkDetail = () => {

         window.open('/portfolio-detail/'+titlePage+"/"+idPage, '_blank');

   }
   const handleClose = () => setOpen(false);

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
   

   const sortData =  (arr) => {

        arr.sort((a ,b) => {
            return b["id"] - a["id"]
        })
    
    }
 const haddleClk = (e) => {
        //setStatusData(false);
        const filterGroup = portProject.filter((ele) => ele.group ===  e.target.id);
        console.log(filterGroup);
        if(filterGroup.length === 0)
        {
                setDataPort(portProject);
                
        }else{
                setDataPort(filterGroup);
        }

         setValue(e.target.id);
         setshowBtn(e.target.id !== "ALL" ? true : false);
         setStatusData(true);

   }
   const mouseEnter = (e) => {
        console.log(e.currentTarget.id);
        //var titles = e.target.title.split("-")
      
        setExpanded(e.currentTarget.id)
  }
  const mouseLeave = () =>{
    
        setExpanded('')
 }

 useEffect(() => {

        if(sizeD !== true){

           sortData(portProject);
        }
        setDataPort(portProject);
        setStatusData(true);

 },[sizeD])


 const clkFullSize = (id) => {

    const findsData = dataPort.find((ele) => ele.id === id);

        //console.log(findsData);
        setImgShow(findsData.image);
        setTitlePage(findsData.title);
        setIdPage(findsData.id);
        setOpen(true);
 }
 const clkTarget= (name,id) => {

        window.open('/portfolio-detail/'+name+"/"+id, '_blank');
     }
 const loadData = () =>{

        setshowBtn(!showBtn)

 }

  return ( <Box sx={{ background:{xs:"none" , md:"#f8f8f8"} , pt: { xs: "40px" , md: "40px"} , pb: { xs: "0px" , md: "0px"} }}>
                <Grid 
                 container
                 spacing={1}
                 sx={{display:{xs:"none" , md:"flex"}}}
                 >
                     
                        <Grid xs={12} md={12}>
                             
                             <Stack 
                                direction="column"
                                justifyContent="center"
                                spacing={2}
                                sx={{pb:"40px"}}
                             >
                              <Typography variant='h4' textAlign="center">{language.port}</Typography>
                             </Stack>
                             <Stack 
                                direction="row"
                                justifyContent="center"
                                spacing={2}
                                
                             >
                                    <Button id="ALL" variant={value === "ALL" ? "contained" : "text"} 
                                        style={value === "ALL" ? {background:"#29ca8e", color:"#fff"} : {color:"#202020"}} 
                                        onClick={(e) => haddleClk(e)} >
                                            ALL
                                    </Button>
                                    <Button id="HTMLPHP" 
                                        variant={value === "HTMLPHP" ? "contained" : "text"} 
                                        style={value === "HTMLPHP" ? {background:"#29ca8e", color:"#fff"} : {color:"#202020"}} 
                                        onClick={(e) => 
                                        haddleClk(e)}>
                                            HTML + PHP
                                    </Button>
                                   
                                    <Button id="REACTNODE" 
                                            variant={value === "REACTNODE" ? "contained" : "text"} 
                                            style={value === "REACTNODE" ? {background:"#29ca8e", color:"#fff"} : {color:"#202020"}} 
                                            onClick={(e) => haddleClk(e)}>
                                            REACT + NODEJS
                                    </Button>
                                    <Button id="C#" 
                                            variant={value === "C#" ? "contained" : "text"} 
                                            style={value === "C#" ? {background:"#29ca8e", color:"#fff"} : {color:"#202020"}} 
                                            onClick={(e) => haddleClk(e)}>
                                            C#
                                    </Button>
                             </Stack>
                            
                           
                        </Grid>
                 </Grid>
                 {console.log(expanded)}
                 <Grid 
                 container
                 sx={{mt:4 , display:{xs:"none" , md:"flex"}}}
                 spacing={2}
                
                 >      {
                                statusData ?
                                         dataPort.map((val , index) => {
                                
                                        return val.priority === "1" ? 
                                        
                                           <Grid key={index} xs={12} md={sizexl ? 4 : 3} >
                                                
                                                <Box id={val.id} className="zoom" position='relative' onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={mouseLeave}>
                                                        <Box sx={{position:'absolute' , zIndex:9  , backgroundColor: 'rgba(0, 0, 0, 0.5)' , width:'100%' , height:'100%' , display:expanded === val.id.toString() ? 'block' : 'none' , cursor:'pointer' , alignContent:'center' , textAlign:'center'}}>
                                                                <Typography variant='h5' style={{color:"#fff"}}>{val.title}</Typography>
                                                                <Typography variant='p' style={{color:"#fff"}}>{val.des}</Typography>
                                                                {/*<Chip label={val.des}  color="success" />*/}
                                                                
                                                                <br />
                                                                <Button variant='contained' size="small" color="info" 
                                                                style={{
                                                                        
                                                                        borderRadius:0 ,
                                                                        height:25 , 
                                                                        marginRight:5 ,
                                                                        marginTop:10,
                                                                       
                                                                      }} onClick={() => clkTarget( val.title , val.id)}><FindInPageIcon  /> Page </Button>     
                                                                         <Button color="primary" variant='contained' size="small" style={{borderRadius:0 , height:25 , color:'#fff' , marginTop:10}} onClick={() => clkFullSize(val.id)}><RemoveRedEyeIcon  /> Preview </Button>       
                                                        </Box>
                                                        <img src={val.thumb} style={{width:'100%' , boxShadow: '5px 5px 5px #aaaaaa' , cursor:'pointer'}} title={`${val.des}`} alt={val.title} loading='lazy'/>
                                                </Box>
                                               
                                             </Grid> 
                                           
                                           : null

                                                        
                                })
                                : null
                        }

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
                                                <Grid 
                                                container
                                                direction="row"
                                                justifyContent="flex-end"
                                                alignItems="center"
                                                sx={{mb:1}}
                                                
                                                >
                                                    <Grid xs={12} sx={{textAlign:'right'}}>
                                                         <Button variant="contained" color="secondary" onClick={clkDetail} sx={{fontSize:18 , mr:1}}> <RemoveRedEyeIcon /> {language.learnmore}</Button>
                                                         <Button variant="contained" color="error" onClick={handleClose} sx={{fontSize:18}}> <DisabledByDefaultIcon /> {language.closed}</Button>
                                                    </Grid>

                                                </Grid>
                                                <Box 
                                                sx={{p:1 , maxHeight:800 , overflow: 'auto'}}
                                                >
                                                         <img src={imgShow} style={{width:"100%"}} loading="lazy" alt={'modal ' + titlePage} />
                                                 </Box>
                                         </Box>
                                </Fade>
                        </Modal>
                      
                          
                </Grid>
               
             
                <Stack direction="row" 
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        sx={{pt:2,pb:2 , display:{xs:"none" , md:value === "ALL"  ? "flex" :  "none"}}}
                        >
                         <Button variant="contained" color="warning" onClick={loadData}> <SyncIcon /> {language.loaddata}</Button>
                 </Stack>
              
                 <Divider sx={{mt:2 , mb:2 , display:
                                        (value === "REACTNODE" || value === "C#") ? "none" 
                                        
                                        : showBtn ? "flex" : 'none'}}>
                        
                                        <Chip label="SECTION 2" size="large" color='primary'  />
                                
                                        </Divider>
                                        <Grid 
                                        container
                                        sx={{mt:5 , display:{xs:"none" , md:showBtn ? "flex" : "none"}}}
                                        spacing={2}
                                        >
                        
                        {
                               
                                        dataPort.map((val , index) => {
                                
                                        return val.priority === "2" ? 
                                                <Grid key={index} xs={12} md={sizexl ? 4 : 3} >
                                                        <Card onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={mouseLeave} sx={{cursor:"pointer"}} >
                                                        <Box onClick={() => clkFullSize(val.id)}>
                                                                <img src={val.thumb} style={{width:"100%"}} loading="lazy" alt={"img all version " + val.des } />
                                                        </Box>
                                                        <CardContent>
                                                        <Chip label={val.title}  size="large" color='default' sx={{fontSize:20}}  />
                                                                <Typography variant="body2" color="text.secondary" sx={{p:1}}>
                                                                        {val.des}
                                                                </Typography>
                                                        </CardContent>
                                                        <CardActions sx={{justifyContent:'center'}}>
                                                                <Button size="small" variant='contained' color="secondary" onClick={() => clkTarget(val.title , val.id)}> <PreviewIcon /> {language.learnmore}</Button>
                                                        
                                                        </CardActions>
                                                        </Card>
                                                 </Grid> : null

                                                        
                                })
                               
                        }
                 </Grid>
                 
                <Stack 
                        direction="column"
                        justifyContent="center"
                        spacing={2}
                        sx={{
                          display: {xs:"flex"  , md:"none"}
                        }}
                        >
                        <Typography variant='p' sx={{fontSize:36}} textAlign="center">{language.port}</Typography>
                </Stack>
                <Box
                        sx={{
                        display: {xs:"flex"  , md:"none"},
                        
                        pt:1,
                        pb:1,
                }}
                >
                 
                  <Gallery>
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#29ca8e",
                                "--swiper-pagination-color": "#29ca8e",
                                
                             }}
                            slidesPerView={sizetablet ? 2 : 1}
                            spaceBetween={10}
                            navigation={true}
                            pagination={{
                            
                            clickable: true,
                            }}
                            modules={[Navigation]}
                            className="swiperMobile"
                        >
                          {
                                        statusData ?
                                        dataPort.map((item , keys) => {

                                            return  <SwiperSlide key={keys}>

                                                         <Item
                                                            original={item.thumb.indexOf("../") > -1 ? '../'+item.thumb : item.thumb}
                                                            thumbnail={item.thumb.indexOf("../") > -1 ? '../'+item.thumb : item.thumb}
                                                            width={831}
                                                            height={500}
                                                            style={{marginTop:"20px;"}}
                                                             >
                                                            {({ ref, open }) => (
                                                              
                                                                <img ref={ref} onClick={open} src={item.thumb.indexOf("../") > -1 ? '../'+item.thumb : item.thumb} loading="lazy" alt={"img mobile version " + item.des} style={{objectFit: 'fill' , height:280}} />
                                                            )}
                                                           
                                                            </Item>    
                                                             <Button variant="contained" style={{position:"absolute" , zIndex:10,bottom: "10%" ,color:"#000" , backgroundColor:'#fff'}} onClick={() => clkTarget(item.title , item.id)}>  <RemoveRedEyeIcon sx={{mr:0.5}} /> {language.details}</Button>
                                                      </SwiperSlide>
                                            })
                                        :null
                                            
                                    }
                        
                        </Swiper>
                        </Gallery>
                   
                 </Box>

                
           </Box>
        )
}

export default Portfolio