import React , {useState ,useContext , useEffect} from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import DataContext from '../context/DataContext';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Switch from '@mui/material/Switch';
import { Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import langss from '../data/language.json';

const Home = () => {

  const {language , setLanguage , styles}  = useContext(DataContext);

  const [expanded, setExpanded] = useState(false);
  const [langWeb , setLangWeb]= useState(localStorage.getItem("langweb") === "null" ? "Th" : localStorage.getItem("langweb") === undefined ? "Th" : localStorage.getItem("langweb") === "Th" ? "Th" : localStorage.getItem("langweb") === "En" ? "En" : "Th");
  const label = { inputProps: { 'aria-label': 'Switch language' } };
  const handleChange = (panel) => (event, isExpanded) => {

  setExpanded(isExpanded ? panel : false);
  };
  const switChange =  (e) => {

      setLangWeb(e.target.checked ? "Th" : 'En');
      setLanguage(e.target.checked ? langss["Th"] : langss["En"]);
     
  }

  useEffect(() => {
       localStorage.setItem("langweb" , langWeb);
  } ,[langWeb])

  

  return (<Grid sx={{ flexGrow: 1  , pt:0}}>
                    <Box
                        sx={
                           {
                            display: 'flex',
                            flexWrap: 'wrap',
                           }
                        }
                    >
                        <Paper style={styles.paperContainer} component={Grid} sx={{justifyContent:{xs: 'center' , sm: 'center' , md: 'center'} , alignContent:{xs: 'flex-start' , sm: 'center' , md: 'center'} }}>
                        
                       
                         <Container>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={4}>  
                                        <Card sx={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 15px 0px', transformStyle: 'preserve-3d' , mt:{xs: 2 , md:0}  }}>
                                                 <div style={{
                                                        position:"absolute" ,
                                                        top: '0',
                                                        right:'10px',
                                                    
                                                        Zindex:30
                                                     }}>
                                                        <Switch {...label} 
                                                        checked={langWeb === "Th" ? true : false} 
                                                        style={{color:"#29ca8e" }}
                                                        onChange={switChange} />

                                                        <Chip label={langWeb.toUpperCase()} color={langWeb === "Th" ? "info" : "secondary"} />
                                                      
                                                    </div>
                                                <CardMedia
                                                    sx={{ height: 350 }}
                                                    image="../image/me.webp"
                                                    title="imgprofile"
                                                    loading="lazy"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                     {language.pre} {language.name}
                                                    </Typography>
                                                    <Typography variant="h6" color="text.secondary">
                                                        FULLSTACK DEVELOPER
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                    {language.tel} : 089-182-8178
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                    {language.email} : S.PONSUPEE@GMAIL.COM
                                                    </Typography>
                                                </CardContent>
                                       </Card>
                                     
                                </Grid>
                                <Grid item xs={12} sm={12} md={8} sx={{display: { xs: 'none' , sm: 'flex'}}}>
                                            <Card sx={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 15px 0px', transformStyle: 'preserve-3d' , width:'100%'}}>
                                               
                                                <CardContent>
                                                    <Stack direction="column" spacing={1}>
                                                    <Chip label={language.perinfo} sx={{fontSize:24}} />
                                                    <Typography variant="p" color="text.secondary">
                                                     {language.sex} :  {language.vsex}
                                                    </Typography>
                                                    <Typography variant="p" color="text.secondary">
                                                    {language.dob} : {language.vdob}
                                                    </Typography>
                                                    <Typography variant="p" color="text.secondary">
                                                    {language.age} : {language.vage} 
                                                    </Typography>
                                                    <Typography variant="p" color="text.secondary">
                                                    {language.military} : {language.vmilitary}
                                                    </Typography>
                                                    <Typography variant="p" color="text.secondary">
                                                    {language.addr} : {language.vaddr}
                                                    </Typography>
                                                    <Chip label={language.education} sx={{fontSize:24}} />
                                                    <Typography variant="p" color="text.secondary">
                                                    {language.degree} : {language.vdegree}
                                                   </Typography>
                                                   <Typography variant="p" color="text.secondary">
                                                   {language.major} : {language.vmajor}
                                                   </Typography>
                                                   <Typography variant="p" color="text.secondary">
                                                    GPA : 2.01
                                                   </Typography>
                                                   <Typography variant="p" color="text.secondary">
                                                   {language.SecondarySchool} : {language.vSecondarySchool}
                                                   </Typography>
                                                   <Typography variant="p" color="text.secondary">
                                                   {language.program} : {language.vprogram}
                                                   </Typography>
                                                   <Typography variant="p" color="text.secondary">
                                                    GPA : 2.96
                                                   </Typography>
                                                    </Stack>
                                                   
                                                   
                                                </CardContent>
                                                <CardActions sx={{justifyContent:'center'}}>
                                                <Link to="https://www.facebook.com/kok.kop.9" target="_blank" rel="noopener noreferrer" ><Button size="large" style={{background:'#3b5998' , color:'#fff'}}><FacebookIcon sx={{mr:0.5}} /> FACEBOOK</Button></Link>
                                                <Link to="https://github.com/santipap-devphin" target="_blank" rel="noopener noreferrer" >  <Button size="large" style={{background:'#cc2127' , color:'#fff'}}><GitHubIcon sx={{mr:0.5}} /> GITHUB</Button></Link>
                                                <Link to="https://devphin.tech/" target="_blank" rel="noopener noreferrer" >   <Button size="large" style={{background:'#4aaaec' , color:'#fff'}}><LanguageIcon sx={{mr:0.5}} /> WEBSITE</Button></Link>
                                                </CardActions>
                                            
                                                </Card>
                                            

                                </Grid>
                                <Grid item xs={12} sm={12} md={12} sx={{display: { xs: 'flex' , sm: 'none'}}}>
                                    
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{width:'100%'}}>
                                        <AccordionSummary
                                         expandIcon={<ExpandMoreIcon sx={{color:"#29ca8e"}} />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        >
                                       <Chip label={language.perinfo} sx={{fontSize:20}} />
                                         
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Stack direction="column" spacing={1}>
                                               
                                                    <Typography variant="p" color="text.secondary">
                                                    {language.sex} : {language.vsex}
                                                    </Typography>
                                                    <Typography variant="p" color="text.secondary">
                                                    {language.dob} : {language.vdob}
                                                    </Typography>
                                                    <Typography variant="p" color="text.secondary">
                                                    {language.age} : {language.vage} 
                                                    </Typography>
                                                    <Typography variant="p" color="text.secondary">
                                                    {language.military}: {language.vmilitary}
                                                    </Typography>
                                                    <Typography variant="p" color="text.secondary">
                                                    {language.addr} :  {language.vaddr}
                                                    </Typography>
                                                
                                                    </Stack>
                                        </AccordionDetails>
                                    </Accordion>
                                    
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} sx={{display: { xs: 'flex' , sm: 'none'}}}>
                                     <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{mb:2 , width:'100%'}}>
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon sx={{color:"#29ca8e"}} />}
                                            aria-controls="panel2bh-content"
                                            id="panel2bh-header"
                                            >
                                         
                                            <Chip label={language.education} sx={{fontSize:20}} />
                                            
                                            </AccordionSummary>
                                            <AccordionDetails>
                                            <Stack direction="column" spacing={1}>
                                         
                                                    <Typography variant="p" color="text.secondary">
                                                    {language.degree} : {language.vdegree}
                                                   </Typography>
                                                   <Typography variant="p" color="text.secondary">
                                                   {language.major} : {language.vmajor}
                                                   </Typography>
                                                   <Typography variant="p" color="text.secondary">
                                                    GPA : 2.01
                                                   </Typography>
                                                   <Typography variant="p" color="text.secondary">
                                                   {language.SecondarySchool} :  {language.vSecondarySchool}
                                                   </Typography>
                                                   <Typography variant="p" color="text.secondary">
                                                   {language.program} : {language.vprogram}
                                                   </Typography>
                                                   <Typography variant="p" color="text.secondary">
                                                    GPA : 2.96
                                                   </Typography>
                                                   </Stack>
                                            </AccordionDetails>
                                        </Accordion>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} sx={{mb:3, display: { xs: 'flex' , sm: 'none'}}} justifyContent="center" alignItems="center">
                                    <Stack 
                                            direction="row" 
                                            spacing={{ xs: 1 , sm: 2 }} 
                                            >
                                            <Button size="small" style={{background:'#3b5998' , color:'#fff'}}><FacebookIcon sx={{mr:0.5}} /></Button>
                                            <Button size="small" style={{background:'#cc2127' , color:'#fff'}}><GitHubIcon sx={{mr:0.5}} /></Button>
                                            <Button size="small" style={{background:'#4aaaec' , color:'#fff'}}><LanguageIcon sx={{mr:0.5}} /></Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                         </Container>

                        </Paper>
                       
                    
                    </Box>

                </Grid>
           )
}

export default Home