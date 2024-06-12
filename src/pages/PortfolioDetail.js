import React , {useEffect , useState} from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery'
import {Stack , Box , Typography , Divider ,Chip} from "@mui/material";
import Header from '../component/Header';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import MainBlock from './MainBlock';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import { Link , useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode, Navigation, Thumbs } from 'swiper/modules';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import portProject from '../data/port.json';
import portDetail from '../data/port_list.json';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function PortfolioDetail() {

    const {id , slug} = useParams();
    const [statusData , setStatusData] = useState(false);
    let thumbsSwiper = null;
    const [dataPortMain , setDataPortMain] = useState({});
    const [dataPort , setDataPort] = useState({});
    const [tabVal , setTabVal] = useState(0);
    const [open , setOpen] = useState(false);
    const [imgShow , setImgShow] = useState('');
    const [idPos , setIdPos] = useState(0);
    const [titlePage  , setTitlePage] = useState('');
 
    const handleClose = () => {

        console.log('idPos' + idPos);
        console.log('imglist' + dataPort.imglist.length);
        if(idPos <= dataPort.imglist.length){
            const poss = idPos-1;
            setTabVal(poss);

        }

        setOpen(false);
   } 

   useEffect(() => {

       
        const findPort = portProject.find((item) => item.id === parseInt(id));
        const findList = portDetail.find((eles) => eles.id === parseInt(id));
        //console.log(findList)
        setDataPortMain(findPort);
        setDataPort(findList)
        //findList.imglist[0].h
        setStatusData(true);
        

    },[id])

    useEffect(() => {

        if(idPos > 0){

           // console.log(dataPort.imglist.length)
            if(idPos > dataPort.imglist.length){

                setOpen(false);
                return;

             }else{

                const findimage = dataPort.imglist.find((ele) => ele.imgid === idPos);
                const position = idPos-1;
                setTitlePage(dataPort.page[position])
                setImgShow(findimage.iserver);
            }
        }
       

    },[open , idPos ,titlePage, imgShow , dataPort])

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

    const findSizeImg = (active) => {

        const imgDetail = active+1;
        const findList = portDetail.find((ele) => ele.id === parseInt(id));
        if(findList === undefined) return ;
        const findSize = findList.imglist.find((data) => data.imgid ===  imgDetail);
        if(findSize === undefined) return ;

        console.log(active);
        //console.log(findSize);
    }

    const clkFullSize = (id) => {

         //console.log(dataPort.imglist);
         const findsData = dataPort.imglist.find((ele) => ele.imgid === id);
         if(findsData === undefined) return;
         setImgShow(findsData.iserver);
         setIdPos(id);
         setOpen(true);
     }

    const handleChangeVal = (event, newValue) => {
        //setNextPage(1);
         setTabVal(newValue)
      };

      const clkprv = () => {

        const prvPage = idPos -1;
        console.log('prv' + prvPage);
        setIdPos(prvPage);

      }

      const clkNext = () => {

        const nextPage = idPos +1;
        console.log('next' + nextPage);
        setIdPos(nextPage);

        if(nextPage > dataPort.imglist.length){

            setTabVal(0);
         }
       }

      function TabPanel(props) {

        const {children, value, index, ...other } = props;
        //console.log(tabVal);
        return (
          <div
            role="tabpanel"
            hidden={tabVal !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
          >
              <Box sx={{m:2}}>
                <Typography>{children}</Typography>
              </Box>
          
          </div>
        );
      }

    return (<>
            <MainBlock>
                <Header />
                <Stack 
                    direction="row" 
                    spacing={2}
                    divider={<Divider orientation="vertical" flexItem />}
                    textAlign="center" 
                    justifyContent="center" 
                    alignItems="center"
                    sx={{pt:5,background:"#f7f5ef"}}
                    >
                     <Typography variant='h3'>{slug}</Typography>
                </Stack>
                
                <Stack 
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 2 }}
                    divider={<Divider orientation="vertical" flexItem />}
                    textAlign="center" 
                    justifyContent="center" 
                    alignItems="center"
                    sx={{p:5 , background:"#f7f5ef"}}
                    >
                    <>
                    <Link to={"/"}
                    > 
                        <Chip icon={<HomeIcon sx={{ mr: 0.5 }} fontSize="medium" />} label="Home" sx={{fontSize:22 , cursor:"pointer"}} />

                    </Link>
                    </>
                     <Typography
                        sx={{ display: 'flex', alignItems: 'center' , fontSize:22 }}
                        color="text.primary"
                                    
                     >  
                        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Portfolio-Detail
                     </Typography>
                 </Stack>
                <Grid container columnSpacing={2}>
                    <Box
                        sx={{
                            flexGrow: 1,
                            mt:2,
                            ml:1.2,
                            mr:1.2,
                            bgcolor: 'background.paper',
                            boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d",
                            maxWidth: { xs: 400 , sm: 800 , md: "100%"},
                            display: { xs: 'none' , md: 'flex'}
                        }}
                    >
                    
                        <Tabs
                            value={tabVal}
                            onChange={handleChangeVal}
                            variant="scrollable"
                            scrollButtons
                            aria-label="visible arrows tabs example"
                            textColor="primary"
                    
                            sx={{
                                borderRight: 1, 
                                borderColor: 'divider',
                                color:"orange",
                                "& .MuiTab-root.Mui-selected": {
                                    color: '#fff',
                                    fontWeight:500
                            },
                            [`& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': { opacity: 0.3 },
                            },
                            }}
                        TabIndicatorProps={{
                            style: {
                            backgroundColor: "#3f51b5",
                            alignItems:'center',
                            width:30,
                            height:'5px'
                            }
                        }}
                        
                        >
                            {
                                statusData ?

                                        dataPort.page.map((item , keys) => {

                                            return <Tab key={keys} label={item} style={{background:keys === tabVal ? "#29ca8e" : null , fontSize:18}} />
                                            
                                        })
                                : null

                            }
                        </Tabs>
                    </Box>
                 </Grid>
                <Grid container spacing={2} sx={{p:"5px"}}>

                <Grid sm={12} md={8} lg={8} xl={8} sx={{display: { xs: 'flex' , md: 'none'}}} >
                         
                            <Gallery>

                                <Swiper
                                    style={{
                                    '--swiper-navigation-color': '#3f51b5',
                                    '--swiper-pagination-color': '#3f51b5',
                                    }}
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    onRealIndexChange={(element)=> findSizeImg(element.activeIndex)}
                                    
                                >
                                    {
                                        statusData ?
                                        dataPort.imglist.map((item , keys) => {

                                            return  <SwiperSlide key={keys}>
                                                            
                                                            <Item
                                                            original={item.isrc.indexOf("../") > -1 ? '../'+item.isrc : item.isrc}
                                                            thumbnail={item.isrc.indexOf("../") > -1 ? '../'+item.isrc : item.isrc}
                                                            width={item.w}
                                                            height={item.h}
                                                            loading="lazy"
                                                             >
                                                            {({ ref, open }) => (
                                                              
                                                                <img ref={ref} onClick={open} src={item.isrc.indexOf("../") > -1 ? '../'+item.isrc : item.isrc} loading="lazy" alt={"img detail " +item.id} />
                                                            )}
                                                            </Item>

                                                    </SwiperSlide>
                                            })
                                        :null
                                            
                                    }
                                </Swiper>
                            </Gallery>
                          
                 </Grid>
                 
                 <Grid sm={12} md={8} lg={8} xl={8} sx={{display: { xs: 'none' , md: 'flex'}}}>
                           
                             {  statusData ?
                                     dataPort.imglist.map((item , keys) => {

                                        return <TabPanel key={keys} value={item} index={keys}>
                                                      <img src={item.isrc.indexOf("../") > -1 ? '../'+item.isrc : item.isrc} loading="lazy" alt={"imgdata " + keys} 
                                                            style={{
                                                                    width:'100%' 
                                                                    ,height:"100%" 
                                                                    ,transition:" all 150ms linear 0.8s"
                                                                    ,borderRadius: '5px'
                                                                    ,padding: '5px',
                                                                    overflow: 'hidden',
                                                                    boxShadow: '0 0px 15px 0px rgba(0, 0, 0, 0.3)',
                                                                    color: '#000000',
                                                                    cursor:'zoom-in'
                                                                 }}
                                                                 onClick={() => clkFullSize(item.imgid)}
                                                                 />
                                                 </TabPanel>
                                    })
                                : null
                              }
                </Grid>
                <Grid    sm={12}
                         md={4}
                         lg={4} 
                         xl={4}>
                                  <Stack spacing={2} 
                                    sx={{background:"#fff",boxShadow: '0 0px 15px 0px rgba(0, 0, 0, 0.3)',  transformStyle: "preserve-3d" , p:2 , mt:2, mb:2}}
                                    >
                                     
                                        <Typography variant='h5'>{dataPortMain?.des}</Typography>
                                        <Stack direction="column" spacing={2}>
                                             <Chip label={"รายละเอียดโครงการ"}  size="large" color='default' sx={{fontSize:18,pr:1}}  />
                                                
                                                {
                                                    statusData ? 
                                                    dataPortMain?.ability.map((ele , index) => {


                                                        return <Typography 
                                                                    key={index}
                                                                    sx={{ display: 'flex', alignItems: 'center' , fontSize:14 }}
                                                                    color="text.primary"
                                                                >  
                                                                <FiberManualRecordIcon  style={{fontSize:12 , marginRight:10}}/>
                                                                {ele}
                                                                </Typography>

                                                    })

                                                    : null
                                                
                                                }
                                                
                                        </Stack>
                                        <Stack direction="row">
                                                <Typography sx={{fontSize:18 ,pr:1}}>เครื่องมือพัฒนา</Typography>
                                                
                                        </Stack>
                                        
                                        {
                                            statusData ? 
                                            dataPortMain?.list.map((ele , index) => {


                                                return <Typography 
                                                            key={index}
                                                            sx={{ display: 'flex', alignItems: 'center' , fontSize:14 }}
                                                            color="text.primary"
                                                        >  
                                                        <FiberManualRecordIcon  style={{fontSize:12 , marginRight:10}}/>
                                                        {ele}
                                                        </Typography>

                                            })

                                            : null
                                          
                                        }
                                            <Stack direction="row">
                                                <Typography sx={{fontSize:18 ,pr:1}}>หมวดหมู่</Typography>
                                                <Chip label={dataPortMain?.dev} color="secondary" />
                                                <Chip label={dataPortMain?.database} color="warning" sx={{ml:1}} />
                                            </Stack>
                                     </Stack>
                            </Grid>
                            <Grid md={12}>
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
                                                    <Box sx={{
                                                                zIndex:20,
                                                                position: 'absolute',
                                                                top:'50%',
                                                                left: 20,
                                                                right: 0,
                                                                }}
                                                                >
                                                                    <Grid 
                                                                    container
                                                                    >
                                                                          <Grid md={6} sx={{textAlign:'left'}}>
                                                                                <Button variant='contained' size="small" onClick={clkprv} disabled={idPos === 1 ? true : false}>
                                                                                    <ArrowBackIosIcon style={{color:"#fff"}} />
                                                                                </Button>
                                                                          </Grid>
                                                                          <Grid md={6} sx={{textAlign:'right'}}>
                                                                                 <Button variant='contained' size="small" style={{marginRight:'40px'}} onClick={clkNext}>
                                                                                    <ArrowForwardIosIcon style={{color:"#fff"}} />
                                                                                </Button>
                                                                          </Grid>


                                                                    </Grid>
                                                     </Box>
                                                <Grid 
                                                container
                                                direction="row"
                                                justifyContent="flex-end"
                                                alignItems="center"
                                                sx={{mb:1}}
                                                
                                                >
                                                 
                                                    <Grid xs={4} sx={{textAlign:'left'}}>
                                                      <Chip label={titlePage} sx={{fontSize:28}}/>
                                                      </Grid>
                                                    <Grid xs={8} sx={{textAlign:'right'}}>
                                                          <Button variant="contained" color="error" onClick={handleClose} sx={{fontSize:18}}> <DisabledByDefaultIcon /> ปิด</Button>
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
                     
                            <div id='boxmenuhead'></div>
                </Grid>
                
                <footer style={{background:"#3f51b5" ,color:'#fff' , textAlign:"center"}}>
                  <Typography variant="h6" sx={{p:1}}>Copy right Devphin 2024</Typography>
                </footer>
            </MainBlock>
            </>
        )
}

export default PortfolioDetail