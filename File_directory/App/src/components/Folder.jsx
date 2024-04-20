import React, { useState } from "react";

function Folder({data}){

    const [isToggle , setIsToggle] = useState(false);


    if(data.isFolder){

   return <div style={{ marginTop : 5, cursor: "pointer"}}>
        <div onClick={()=> setIsToggle(!isToggle)}>
        <span className="parent">📂{data.name}</span>
        </div>
     
        <div style={{paddingLeft : 15  , display: isToggle ? "block" : "none"}}>
            {data.items.map(child=>{

                return <Folder data={child}/>
            })}
        </div>
    
   </div>
    }
    else{
        return <span className="child">📄 {data.name}</span>
    }

}

export default Folder