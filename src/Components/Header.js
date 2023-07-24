import React from 'react';

function Header() {
    return (
            <div>
                <header style={{display:"flex"}}>
                    <img src=".\assets\TEE MUSIK LOGO.png" alt="company logo" style={{height:90, width:100}}/>
                    <h1 style={{fontWeight:'bold',fontSize:54,marginTop:25, marginLeft: 400, color: "green", fontFamily:"cursive"}}
                    >TEEMUSIK</h1>
                </header>
                <hr style={{marginTop:0}}/>
            </div>
    );
}

export default Header;
