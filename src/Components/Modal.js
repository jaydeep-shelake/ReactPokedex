import React ,{useEffect} from 'react';
const Modal = ({pokemon,img,detail}) => {
      useEffect(()=>{
    
      },[detail])
      
    return (
    
        <div className="detailCard">
            <img src="https://github.com/jaydeep-shelake/pokedexjs/blob/master/pokeball-2.png?raw=true" alt="ball" className="pokeball"/>
            <img src={detail?.sprites.front_default} alt=""/>
            <h1>{pokemon}</h1>
            <p>{detail!==null?detail.abilities[0].ability.name:''} , {detail!==null?detail.abilities[1].ability.name:''}</p>
            <p>Type: {detail!=null?detail.types[0].type.name:''} , {detail!==null&&detail.types[1]?detail.types[1].type.name:''}</p>
            <p>height: {detail!==null?detail.height:''}ft | Weight: {detail!==null?detail.weight:''}kg</p>
        </div>
    )
}

export default Modal;
