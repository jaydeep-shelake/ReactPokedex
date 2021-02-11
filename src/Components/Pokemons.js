import axios from 'axios';
import React,{useState}from 'react';
import Modal from './Modal';

const Pokemons = ({pokemons}) => {
    const [modal,setModal]=useState(false);
    const [pokemon,setPokemon]=useState({});
    const [detail,setDetail]=useState(null);
    
    document.body.addEventListener('click',(e)=>{
       if(e.target.classList.contains('modal')){
           setModal(false);
       }
    });

    

    const onClick=(pokemon,url)=>{
        const getDetail=async()=>{
            const {data}=await axios.get(url);
            
            setDetail(data)
          }
         getDetail();
       setModal(true)
       setPokemon(pokemon);
       
    }

    const renderPokemons = pokemons.map((pokemon,index)=>{

     return(
         <div className="card" key={index} onClick={()=>onClick(pokemon.name,pokemon.url)}>
             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.slice(34,pokemon.url.lastIndexOf())}.png`} alt={pokemon.name}/>
             <p>{pokemon.name}</p>
         </div>
     )
    });
    return (
        <>
        <div className="pokemon">
            {renderPokemons}
        </div>
         <div className={modal?'modal':''}>
             {modal?<Modal pokemon={pokemon}  detail={detail}/>:null}
         </div>
        </>
    )
}

export default Pokemons;
