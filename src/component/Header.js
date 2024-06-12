import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import UndoIcon from '@mui/icons-material/Undo';
import { Link } from 'react-router-dom';
const Header = () => {

return (<>
             <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                  
                    <Box sx={{background:"#29ca8e" , p:0.5 , ml:-2 , display: { xs: 'none', md: 'flex' } , position:"relative"}}>
                            <Link to={"/"}><img src="../../image/devphin.png" loading="lazy" alt="รูป logo devphin" /></Link>
                            <Typography variant="h6" sx={{justifyContent:'center' , alignContent:'center' , ml:1}} style={{fontFamily:'Kanit-Medium'}}>DEVPHIN</Typography>
                            
                    </Box>
                    <Box sx={{background:"#29ca8e" , p:0.5 , ml:-2 , display: { xs: 'flex', md: 'none' }}}>
                            <Link to={"/"}><img src="../../image/devphin.png" loading="lazy" alt="รูป logo mobile" /></Link>
                            <Typography variant="h5" sx={{justifyContent:'center' , alignContent:'center' , ml:1}} style={{fontFamily:'Kanit-light'}}>DEVPHIN</Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1 , display: { xs: 'flex', md: 'none' } }} justifyContent="flex-end" alignItems="center">
                       <Link to={"/"}>
                            <Button variant="contained" size="medium" style={{background:'#3f51b5',color:'#fff'}}> <UndoIcon /> กลับหน้าหลัก</Button>
                       </Link>
                    </Box>
                   
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent="center">
                            <Typography variant="h5">รายละเอียดงาน</Typography>
                    </Box>
                    
                    <Box sx={{ flexGrow: 0 , display: { xs: 'none', md: 'block' }   }}>
                       <Link to={"/"}>
                            <Button variant="contained" size="medium" style={{background:'#3f51b5',color:'#fff'}}> <UndoIcon /> กลับหน้าหลัก</Button>
                       </Link>
                    </Box>
                    </Toolbar>
                </Container>
                </AppBar>
               
            </>)


}

export default Header;