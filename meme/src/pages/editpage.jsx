import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Text from "../components/text";

const Editpage=() =>{
    const [params]=useSearchParams();
    const [count,setcount]=useState(0);
    const Addtext=() => {
        setcount(count+1);
    }
    return (
        <div className="edit">
            <div><img src={`${params.get("url")}`}width="400px"/>
            </div>
            {
                Array(count).fill(0).map((e)=><Text/>)
            }
            <Button onClick={Addtext}>Add Text</Button>
        </div>
    )
};
export default Editpage;