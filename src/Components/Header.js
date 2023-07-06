import React from 'react';

function Header() {
    return (
            <div>
                <header style={{display:"flex"}}>
                    <img src="./assets/comp_logo.png" alt="company logo" style={{height:70, width:90}}/>
                    <h1 style={{fontWeight:'bold',fontSize:48,marginTop:5}}
                    >Time Series Analysis</h1>
                </header>
                <hr style={{marginTop:0}}/>
            </div>
    );
}

export default Header;
