import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
    const nodeRef = useRef(null); // Create a reference
    const [editmode,setEditMode]=useState(false);
    const [val,setVal]=useState("Double click to Change");
    return (
        <Draggable nodeRef={nodeRef}>
            <div className="Text" ref={nodeRef} >
        {
            editmode ? <input value={val} onChange={(e)=>setVal(e.target.value)} onDoubleClick={(e)=>setEditMode(false)}/> : 
            <h1 onDoubleClick={(e)=>setEditMode(true)}>{val}</h1>
        }
        </div>
        </Draggable>
    );
};

export default Text;
