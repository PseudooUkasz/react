
import React from "react"

function Header(){
    const date =new Date();
    const hours =date.getSeconds();
    let time
    if (hours < 10) {
        time =" <10"
    } else if (hours >10 && hours < 30){
        time ="10 < time < 30"
    }else { time =" time > 30"
    }
    
    
    return(
        <div>
        <header className="navbar"> navbar {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</header>
             
    <h1 className="h1"> if === { time }</h1>
        </div>
        
     
    )
}
export default Header
