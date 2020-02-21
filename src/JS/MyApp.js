
import React from "react"
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Js from "./CSS/Js.css"
function MyApp(){
    
    return(
        <div>
            <Header />
            <div className="todolist">
                <Main numer="1"/>
                <Main  numer="2"/>
                <Main  numer="3"/>
                <Main />
                <Main />
                <Main />
            </div>
            <Footer />
            
        </div>
        
    )
}
export default MyApp