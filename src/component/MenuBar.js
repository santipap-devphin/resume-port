import React , {useState , useContext} from 'react';
import DataContext from '../context/DataContext';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MenuBar = ({clkref}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [refActive , setRefActive] = useState('Home');
    const {language} = useContext(DataContext);

    const options = [
        {id:1 , label: "Port" , page:language.menu[1]},
        {id:2 , label: "About" , page:language.menu[2]},
        {id:3 , label: "Etcskill" , page:language.menu[3]},
        {id:4 , label: "Contact" , page:language.menu[4]}
    ];
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
   const ITEM_HEIGHT = 48;
   const handleClkMenu = (val) => {
    setRefActive(val);
    clkref(val);
    setAnchorEl(null);
  };
   const handleClk = (val) => {

        clkref(val)
    }
    const closeMenu = () => {
        setAnchorEl(null);
    }

return (<AppBar position='fixed' sx={{background:"#fff" , color:"#000"}}>
                <Container>
                    <Grid 
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}>
                    <Grid item xs={4}>
                            <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            sx={{ml:{ xs: 6, md: 2}}}
                            >
                                <img src="../../image/devphin.png" alt="รูป logo Devphin" />
                                <Typography variant='p' sx={{fontSize:22 , pt:{ xs: 0.2, md: 0.5} , pl:{ xs:0 , md: 0.1}}}>DEVPHIN</Typography>
                      
                            </Stack>
                     </Grid>
                     <Grid item xs={8} sx={{mt:{ xs: 0, md: 1}}}>
                            <Stack
                                direction="row"
                                justifyContent="center"
                                /*alignItems="center"*/
                                spacing={2}
                                sx={{display:{xs:"none" , md:"flex"}}}
                            >
                            <Typography variant='p' sx={{fontSize:22 , cursor:"pointer"}} onClick={() => handleClk("Home")}>{language.menu[0]}</Typography>
                            <Typography variant='p' sx={{fontSize:22 , cursor:"pointer"}} onClick={() => handleClk("Port")}>{language.menu[1]}</Typography>
                            <Typography variant='p' sx={{fontSize:22 , cursor:"pointer"}} onClick={() => handleClk("About")}> {language.menu[2]} </Typography>
                            <Typography variant='p' sx={{fontSize:22 , cursor:"pointer"}} onClick={() => handleClk("Etcskill")}>{language.menu[3]}</Typography>
                            <Typography variant='p' sx={{fontSize:22 , cursor:"pointer"}} onClick={() => handleClk("Contact")}>{language.menu[4]}</Typography>
                            
                            </Stack>
                            <Stack
                        direction="row"
                        justifyContent="right"
                        sx={{display:{xs:"flex" , md:"none"}}}
                        >
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            color="primary"
                            
                            >
                            <MoreVertIcon color="#3f51b5" />
                            </IconButton>
                            <Menu
                            id="long-menu"
                            
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={closeMenu}
                            PaperProps={{
                                style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '50ch',
                                marginTop:"20px"
                                },
                            }}
                            >
                            {
                           
                            options.map((option) => (
                                <MenuItem key={option.id} selected={option.label === refActive} onClick={() => handleClkMenu(option.label)}>
                                    {option.page}
                                </MenuItem>
                            ))
                         
                            }
                            </Menu>
                        </Stack>
                         

                     </Grid>

                    </Grid>
                

               
                </Container>
            </AppBar>
    )
}

export default MenuBar