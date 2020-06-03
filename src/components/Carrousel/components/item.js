import React, {useEffect} from 'react';


function ItemCarrusel(props){
  
  const classShow = {
    none: 'no-show fade item',
    block: 'show-block fade item'
  }


  return (<div className={props.i === props.item ? classShow.block: classShow.none} Style={`background-image:url(${props.urlImg}); `}>
        <div className="text-item">
          <h1>Mejores marcas</h1>
          <p>Obten descuentos en las mejores marcas</p>
        </div>
          </div>);
}

export default ItemCarrusel