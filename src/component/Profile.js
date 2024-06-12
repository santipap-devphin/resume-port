import React , {useState , useContext ,useEffect} from 'react';
import DataContext from '../context/DataContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import { Stack } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Profile = () => {

    const {scaleTablet , language} = useContext(DataContext);
    const [value, setValue] = useState(0);
    const [listData , setListData] = useState([]);
    const [loads , setLoads] = useState(false);

    useEffect(() => {


        setListData(language.experiencecontent)
        setLoads(true)


     },[language])

    const handleChange = (event, newValue) => {
        //console.log(newValue)
            setValue(newValue);
    };

  return (<Box sx={{ background:"#fff" }}>
            <Container>
                
                <Grid 
                 container
                 sx={{mt:"50px" , mb:"80px"}}
                 spacing={2}
                 >
                   
                    <Grid item xs={12} md={12}>
                            <Typography variant='h4' textAlign="center">{language.experience}</Typography>   
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                    <Box sx={{ width: '100%'}}>
                        <Tabs 
                            value={value} 
                            onChange={handleChange}
                            orientation={scaleTablet ? "vertical" : "horizontal"}
                            variant="scrollable"
                            allowScrollButtonsMobile
                            
                            sx={{ 
                                borderRight: 1, 
                                borderColor: 'divider',
                                color:"orange",
                                "& .MuiTab-root.Mui-selected": {
                                    color: '#fff',
                                    fontWeight:500
                                  }
                            }}
                            TabIndicatorProps={{
                                style: {
                                  backgroundColor: "#3f51b5",
                                  width:5
                                }
                            }}
                            
                          
                            >
                            <Tab label={language.expermenu[0]} sx={{fontSize:20 , boxShadow: value === 0 ? "0 0px 15px 0px rgb(0 0 0 / 15%)" : null , background:value === 0 ? "#29ca8e" : null}}  />
                            <Tab label={language.expermenu[1]} sx={{fontSize:20 , boxShadow: value === 1 ? "0 0px 15px 0px rgb(0 0 0 / 15%)" : null, background:value === 1 ? "#29ca8e" : null}} />
                            <Tab label={language.expermenu[2]} sx={{fontSize:20 , boxShadow: value === 2 ? "0 0px 15px 0px rgb(0 0 0 / 15%)" : null, background:value === 2 ? "#29ca8e" : null}} />
                            <Tab label={language.expermenu[3]} sx={{fontSize:20 , boxShadow: value === 3 ? "0 0px 15px 0px rgb(0 0 0 / 15%)" : null, background:value === 3 ? "#29ca8e" : null}} />
                            <Tab label={language.expermenu[4]} sx={{fontSize:20 , boxShadow: value === 4 ? "0 0px 15px 0px rgb(0 0 0 / 15%)" : null, background:value === 4 ? "#29ca8e" : null}} />
                        </Tabs>
                     </Box>
                    
                    </Grid>
                    <Grid item xs={12} sm={9} md={9} lg={9} xl={9}>
                        <Paper component={Stack} direction="column" justifyContent="center" 
                            style={{
                                backgroundColor:"#ffffff",
                                boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" ,
                                transformStyle: "preserve-3d" ,  
                                padding:5
                                }}>
                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="left"
                                spacing={2}
                            >
                                 {  
                                 loads ? 


                                        listData.map((ele , index) => {

                                            return ele.id === value ? 
                                                    <Stack key={index}  direction="column" spacing={2} sx={{pt:1 , pb:2 , pl:1}}>
                                                            <Typography variant='h6'>{ele.work} : {ele.start} - {ele.end} </Typography> 
                                                            <Typography variant='h5'> <Chip label={ele.company} sx={{fontSize:18}} /></Typography> 
                                                            {
                                                                ele.content.length > 0 ?

                                                                ele.content.map((itm , keys) => <Stack key={keys} direction="row"><ArrowRightIcon /><Typography variant='p' sx={{fontSize:16}}>{itm}</Typography></Stack>)
                                                                
                                                                : <Typography variant='p'>ไม่มีข้อมูล</Typography> 
                                                            }
                                                            
                                                    </Stack>
                                                    
                                                : null

                                        })

                                    : null

                                    }
                             
                                   
                            </Stack>
                        </Paper>
                    </Grid>
                   
                 </Grid>
            </Container>
          </Box>
  )
}

export default Profile