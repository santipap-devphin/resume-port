import React , {useState , useContext} from 'react';
import DataContext from '../context/DataContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import SendIcon from '@mui/icons-material/Send';
import MessageIcon from '@mui/icons-material/Message';
import SweetAlert2 from 'react-sweetalert2';
import endpoint from '../api/endpoint';

const ContactMsg = () => {

  const[uName , setUname] = useState('');
  const[contactB , setContactB] = useState('');
  const[msg , setMsg] = useState('');
  const {language , codes} = useContext(DataContext);

  const[swalProps, setSwalProps] = useState({ 
    show: false,
    title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
    text: '',
    icon:"error",
    confirmButtonText: 'Close'});

  const frmContactSub = async (e) => {

        e.preventDefault();

         if(uName.trim().length === 0){
          setSwalProps({...swalProps , show:true , text:"ท่านไม่ได้กรอกชื่อ"});
          setTimeout(function(){ setSwalProps({...swalProps, show:false});}, 2000);
          
        }else if(contactB.trim().length === 0){
          setSwalProps({...swalProps , show:true , text:"ท่านไม่ได้กรอกช่องทางติดต่อกลับ"});
          setTimeout(function(){ setSwalProps({...swalProps, show:false});}, 2000);
         
        }
        else if(msg.trim().length === 0){
          setSwalProps({...swalProps , show:true , text:"ท่านไม่ได้กรอกข้อความ"});
          setTimeout(function(){ setSwalProps({...swalProps, show:false});}, 2000);
         
        }
        else{

               try {

                   const response = await endpoint.post("/insert_resume.php" , JSON.stringify({name:uName , contact:contactB, message:msg , code:codes}) 
                  ,{
                      headers : {
                        "Content-Type":"application/json"
                      } 
                     
                  });

                  if(response.data.code === 1){

                    setSwalProps({...swalProps , show:true ,title: 'บันทึกข้อมูลเรียบร้อย', text:"" , icon:"success"});
                    setTimeout(function(){ 
                      setSwalProps({...swalProps, show:false ,title: 'กรุณากรอกข้อมูลให้ครบถ้วน', text:"" , icon:"error"});
                      setUname('');
                      setContactB('');
                      setMsg('');
                    }, 2000);

                  }else{
                    setSwalProps({...swalProps , show:true , text:"เกิดข้อผิดพลาด"});
                    setTimeout(function(){ setSwalProps({...swalProps, show:false ,title: 'กรุณากรอกข้อมูลให้ครบถ้วน', text:"" , icon:"error"});}, 2000);
                  }

                 
                
               } catch (error) {
                    console.error(error);
                    setSwalProps({...swalProps , show:true , text:error});
                    setTimeout(function(){ setSwalProps({...swalProps, show:false ,title: 'กรุณากรอกข้อมูลให้ครบถ้วน', text:"" , icon:"error"});}, 2000);
               }
            

         }
  }
  return (<>
         <Box
         
            className="fontKanit" 
            sx={{
                
                background: "#f8f8f8" , 
                pt:"80px" , 
                pb:"60px" ,
                
                }}>
            <Container>
            <form onSubmit={frmContactSub}>
            <Grid 
            container
            spacing={{xs:1, md: 2}}
            sx={{
                boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" ,
                transformStyle: "preserve-3d" , 
                p : { xs: 1 , md: 2}
             }}
            >
                <Grid item xs={12} md={12}>
                    <Typography variant='h4' textAlign="center" sx={{mb:1}}>{language.contact}</Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{pr : { xs: 1 , md: 2}}}>
                    <TextField 
                        id="namecontact"
                        
                        InputProps={{
                            endAdornment: <InputAdornment position="end"> <AccountCircle /></InputAdornment>,
                          }}
                        name="frmname"
                        label={language.place[0]} 
                        variant="filled" 
                        sx={
                            {
                            
                            color:"#000",
                            '&:hover': {
                                backgroundColor: '#29ca8e1f',
                               
                              }
                            }
                        } 
                        value={uName}
                        onChange={(e) =>  setUname(e.target.value) }
                        fullWidth />
                </Grid>
                <Grid item xs={12} md={6} sx={{pr : { xs: 1 , md: 2}}}>
                <TextField 
                        id="contactback" 
                        name="frmmsgback"
                        label={language.place[1]} 
                        variant="filled" 
                        InputProps={{
                            endAdornment: <InputAdornment position="end"> <ContactEmergencyIcon /></InputAdornment>,
                          }}
                        sx={
                            {
                            color:"#fff",
                            fontFamily:"Kanit-light",
                            '&:hover': {
                                backgroundColor: '#29ca8e1f',
                               
                              }
                            }
                        } 
                        value={contactB}
                        onChange={(e) => setContactB(e.target.value)}
                        fullWidth />
                </Grid>
                 <Grid item xs={12} md={12} sx={{pr : { xs: 1 , md: 2}}}>
                 
                
                    <TextField
                            id="contactmsg"
                            name="frmmsg"
                            label={language.place[2]} 
                            multiline
                            rows={3}
                            variant="filled"
                            InputProps={{
                                endAdornment: <InputAdornment position="end"> <MessageIcon /></InputAdornment>,
                              }}
                            sx={
                                {
                               
                                color:"#fff",
                                '&:hover': {
                                    backgroundColor: '#29ca8e1f'
                                   
                                  }
                                }
                            } 
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            fullWidth
                    />
                    </Grid>
                    <Grid item xs={12} md={12} sx={{mb:3}}>
                        <Button 
                            variant="outlined" 
                            size='large'
                            type='submit'
                            sx={{
                                color:"#29ca8e",
                                borderColor:"#29ca8e",
                                '&:hover': {
                                    backgroundColor: '#3f51b5',
                                    opacity: [0.9, 0.8, 0.7],
                                }
                                }}
                        >
                           <SendIcon sx={{mr:0.5}} /> {language.place[3]}  
                        </Button>
                </Grid>
                </Grid>
              
                </form>
                <SweetAlert2 {...swalProps} /> 
            </Container>
            
          </Box>
          <Box sx={{background:"#3f51b5" , pt:1 , pb:1}}>
            <Container>
                <Grid 
                container
                spacing={0}>
                    <Grid item xs={12} md={12}>
                        <Typography variant='h6' sx={{color:"#fff"}} textAlign="center">COPYRIGHT © Devphin</Typography>            
                    </Grid>
                </Grid>
            </Container>    
          </Box>
           </>
        )
}

export default ContactMsg