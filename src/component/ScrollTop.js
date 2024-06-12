import React  from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollTop = () => {

   const topElement = () => {

    setTimeout(function(){ window.scrollTo({top:0 , behavior: 'smooth'})  }, 50);
   }

  return ( <Box sx={{
                    p:1.5,
                    position:"fixed",
                    bottom:"24px",
                    right:"24px",
                    zIndex:10 , 
                    cursor:"pointer"
                 }}
                 onClick={topElement}
                 >
                  <Fab sx={{background:"#29ca8e"}} size="small" aria-label="up">
                      <ArrowUpwardIcon />
                  </Fab>
           </Box>
  )
}

export default ScrollTop