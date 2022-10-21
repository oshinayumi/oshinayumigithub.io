import React from 'react';
import Employee from '../component/employee';
import Myheader from '../component/header';
import LikeDislike from '../component/likedislike';
import Rainbow  from '../component/rainbow'


function RootComponent() {
    return (  
     <div>
            <Myheader company="IBM" years="80" ></Myheader>
            <Myheader company="AirAsia" years="46"></Myheader>
            <Myheader company="Sunway" years="24"></Myheader>
            <Myheader company="Evian" years="53"></Myheader>
            <Myheader company="Google" years="75"></Myheader>
        <Rainbow></Rainbow>
        <LikeDislike></LikeDislike>
        <Employee></Employee>
     </div>
    );
}

export default RootComponent;