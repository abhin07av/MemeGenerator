import React from "react";
import MemeCard from "../components/card";
import { useEffect,useState } from "react";
import { Meme } from "../api/getmeme";


const Home = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        Meme().then(memes=>setData(memes.data.memes));
    },[])
    return (
        <div className="row">
            {data.map((el)=>(
                <MemeCard img={el.url} title={el.name} />
            ))}
        </div>
    )
}
export default Home;