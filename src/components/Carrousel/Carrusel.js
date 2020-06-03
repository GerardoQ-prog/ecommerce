import React, { useState,useEffect } from 'react'

import ItemCarrusel from './components/item.js'

import Background from '../img/slide.png';

 const imgs = [
    `"${Background}"`,
    "https://brand.assets.adidas.com/image/upload/f_auto,fl_lossy,q_1/esMX/Images/ZX710-teaser-DT_tcm217-498117.png",
    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esMX/Images/running-ss20-faster-than-launch-hp-teaser-large-family-d_tcm217-467675.jpg",
  ]
 
function Carousel(props)  {
   const [itemNow, setItemNow] = useState(0);
  useEffect(()=>{
    timeSetItem(); 
  },[])
  return <div className="slideshow-container">
    {imgs.map((im,key) => {
      return  <ItemCarrusel key={key} i={key} item={itemNow} urlImg={im}/>
  
    })}
    <div Style="text-align:center">
      {imgs.map((im,key) => {
      return   <span className="dot" onClick={()=>setItemNow(key)}></span> 
      })}
    </div>
  </div>

  function timeSetItem (){
    /*setInterval(()=> {
      if (itemNow > imgs.length){
        setItemNow(0)
      }else {
        setItemNow(itemNow + 1)
      }    
    },100)*/
  }
}

export default Carousel