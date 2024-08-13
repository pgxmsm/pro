import React from 'react';

import styles from './NavBar.module.css'

function NavBar(){
    return(
        <>
        
        <nav className={styles.nav}>
            <div className={styles.left}>
           <Buttons btnName={"Home"}  /> 
           <Buttons btnName={"Contact Us"}  /> 
           <Buttons btnName={"About Us"}  /> 
            </div>
            <div className={styles.right}>
           <Buttons btnName={"More"} />
            </div>
           
        </nav>


        </>
    );
};


function Buttons({btnName , btnFunc}){
    
    return (
        <>
        <button onClick={ (e)=>{ alert(`${e.target.innerText} Button is Clicked. follow @pgxmsm` ); } } >{btnName}</button>
        </> 
    );
};




export default NavBar;