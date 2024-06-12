import { createContext , useState} from "react";
import { createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import langss from '../data/language.json';

const DataContext = createContext({});


export const DataProvider = ({children}) => { 

    const [datas, setDatas] = useState([]);

    const [language , setLanguage] = useState(
              localStorage.getItem("langweb") === "null" ? langss["Th"] 
              : localStorage.getItem("langweb") === undefined ? langss["Th"] 
                : localStorage.getItem("langweb") === "Th" ? langss["Th"] 
                  :  localStorage.getItem("langweb") === "En" ? langss["En"] 
                    : langss["Th"] 
    );

     const theme = createTheme({
        root: {
          margin: "0px",
          padding: "0px"
        }
        , palette: {
          primary: {
            main: "#29ca8e",
          },
          action: {
            disabledBackground: '#696969',
            disabled: '#696969'
          },
          fontFamily: "Kanit"
          
        },
        typography: {
          fontFamily: "Kanit",
          fontWeightBold:100,
          fontWeightLight: 300,
        }
       
      });

    const styles = {
        paperContainer: {
            backgroundImage: `url(${'../../image/bgexam.webp'})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            transition: "all 150ms linear 0.3s",
            overflow: 'auto'
           
        },
    }
    const scaleTablet = useMediaQuery('(min-width:768px)');
    const matches = useMediaQuery('(max-width:899px)');

    var codes = "lSzT2MFRywq7beS3wR4fZZJg0zqzXmpkzk0u49nM82U=";

  

    return (
        <DataContext.Provider value={{datas , setDatas , theme , styles , scaleTablet , matches , codes , language , setLanguage}}>
            {children}
        </DataContext.Provider>
    )

}

export default DataContext;