import React , {useEffect, useRef, useState} from "react";
import { DataProvider } from './context/DataContext';
import {BrowserRouter , Routes, Route } from 'react-router-dom';
import MainBlock from './pages/MainBlock'
import Home from "./pages/Home";
import PortfolioDetail from "./pages/PortfolioDetail";
import NotFound from "./pages/NotFound";
import MenuDev from "./component/MenuDev";
import MenuBar from "./component/MenuBar";
import Intro from "./component/Intro";
import Service from "./component/Service";
import Portfolio from "./component/Portfolio";
import Profile from "./component/Profile";
import About from "./component/About";
import Contact from "./component/Contact";
import ContactMsg from "./component/ContactMsg";
import Program from "./component/Program";
import ScrollTop from "./component/ScrollTop";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "./assets/css/styles.css";
import 'photoswipe/dist/photoswipe.css'


const App = () => {

  const [refs, setRefs] = useState('');

  const portRef = useRef(null);
  const profileRef = useRef(null);
  const additional = useRef(null);
  const contactRef = useRef(null);
 

  const [posMenu , setPosMenu] = useState(false);
  const [pos , setPos] = useState(false);

  const handleScroll = (val) => {
  
    //console.log(val)
    var element = document.getElementById("boxmenuhead");

    var rect = element.getBoundingClientRect();

    if(Object.keys(rect).length === 0){

       //console.log(rect)
      //alert(rect.y)
       var newval = parseInt(rect.y) + window.scrollY;
       //console.log(rect.y +' //' + window.scrollY)
       //rect.y คือตำแหน่ง position ของ div เมื่อโหลดหน้าเว็บ หลังจากนั้นเมื่อ scroll ลงมาเรื่อยๆ ค่าจะเริ่มลดลงตามระยะห่างของหน้าจอกับ DIV boxmenuhead (วัดจาก ระยะห่างระหว่าง scroll กับ div)
       //window.scrollY คือตำแหน่ง position mouse scroll ตามแนวแกน y เมื่อเลือน mouse ลง  ค่า position จะตามแกนแนว Y
       //หากเอาสองค่านี้มาบวกกัน จะได้ตำแหน่ง Div ในหน้า website ตามขนาดหน้าจอ 
       // เราต้องการหาตำแหน่งของ DIV boxmenuhead ว่าอยู่ตำแหน่งที่เท่าไหร่ เพื่อเลื่อน mouse ลงมา พอถึงตำแหน่ง boxmenuhead จะทำการ Show MenuBar position fixed 
      if (window.scrollY > newval) {
              setPos(true);
              setPosMenu(true);
      }
      else {
              setPos(false);
              setPosMenu(false);
      }

    }
   //console.log(val)
  };
  

  useEffect(() => {

      if(refs === "Home"){
          window.scrollTo({top:0 , behavior: 'smooth'})
      }
      if(refs === "Port"){
        portRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
      else if(refs === "About"){
        profileRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
      else if(refs === "Etcskill"){
        additional.current?.scrollIntoView({ behavior: 'smooth' });
      }
      else if(refs === "Contact"){
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
      

      setRefs('')


  },[refs])

  useEffect(() => {
   
    
        //const header = document.querySelector(".boxmenuhead");
       
        //console.log(rect.y)
        //setHeaderTop(header.offsetTop);
        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    
   
  }, []);



  return (<DataProvider>
                <BrowserRouter>
                <Routes>
                      <Route path="/" exact element={
                        <MainBlock>
                      
                        <Home />
                       
                        <MenuDev clkref={setRefs}  />
                        {
                          posMenu  ?  <MenuBar clkref={setRefs} /> : null
                        }
                       
                        <Intro />
                        <Service />
                        <div ref={portRef} ><Portfolio /></div>
                        <div ref={profileRef} ><Profile /></div>
                        <Program />
                        <div ref={additional} ><About /></div>
                        <div ref={contactRef} ><Contact /></div>
                        <ContactMsg />
                        {
                          pos ?  <ScrollTop  /> : null
                        }
                     
                      </MainBlock>
                      } />
                      <Route path="/portfolio-detail/:slug/:id"  element={<PortfolioDetail />} />
                    
                      <Route path="*" element={<NotFound/>} />
                </Routes>
                
                </BrowserRouter>
          </DataProvider>
  );
}

export default App;
