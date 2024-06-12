import React , {useContext} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import DataContext from '../context/DataContext';

const MainBlock = ({children}) => {

  const {theme} = useContext(DataContext);

  return (<ThemeProvider theme={theme}>
             {children}  
          </ThemeProvider>
  )
}

export default MainBlock