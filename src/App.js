import React ,{useState,useEffect}from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import Pokemons from './Components/Pokemons';
import Pagination from './Components/Pagination';
import CardSkeleton from './Components/Skeleton/CardSkeleton';
import './index.css';

const App = () => {
     const [pokemons,setPokemons]=useState([]);
     const [loading,setLoading]=useState(false);
     const [currentPage,setCurrentPage]=useState('https://pokeapi.co/api/v2/pokemon')
     const [prePage,setPrePage]=useState();
     const [nxtPage,setNxtPage]=useState();

     useEffect(()=>{
       let cancel;
       const search=async()=>{
         setLoading(true);
         const {data}=await axios.get(currentPage,{
           cancelToken: new axios.CancelToken(c=>cancel=c)
         });
         setLoading(false);
         console.log(data);
         setNxtPage(data.next);
         setPrePage(data.previous);
         setPokemons(data.results);
         
        }
        search();
        return()=>cancel();
     },[currentPage]);

     const goToNextPage=()=>{
       setCurrentPage(nxtPage);
     }

     const goToPreviousPage=()=>{
       setCurrentPage(prePage)
     }

     if(loading) return <div className="pokemon">{[1,2,3,4,5,6,7,8,9,10].map(n=><CardSkeleton key={n}/>)}</div>
    return (
        <>
        <Navbar/>
        <div className="pokedex">
         <Pokemons pokemons={pokemons} />
        </div>
        <div className="pagination">
          <Pagination goToNextPage={ nxtPage?goToNextPage :null} goToPreviousPage={ prePage?goToPreviousPage:null}/>
        </div>
        <footer className="footer">
          <img src="https://jaydeep-shelake.github.io/pokedexjs/pikachu-pokemon.png" alt=""/>
          <h3>Web App developed by <a href="https://jaydeep-shelake.github.io">Jaydeep Shelake</a></h3>
        </footer>
        </>
    )
}

export default App;
//https://pokeapi.co/api/v2/pokemon?limit=100