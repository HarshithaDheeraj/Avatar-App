import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

const Avatar =(props) => {
    const avatarlistarray = [
        {
            id:1,
            name:"Harshu",
            work:"Web developer"
        },
        {
            id:2,
            name:"fareed",
            work:"Programmer"
        },
        {
            id:3,
            name:"Zara",
            work:"Database"
        },
        {
            id:4,
            name:"Jesse",
            work:"Back-end"
        }
    ]

    const arrayavatarcard = avatarlistarray.map( (avatarcard, i) => {
        return <Avatarlist id={avatarlistarray[i].name} name={avatarlistarray[i].name} work={avatarlistarray[i].work} />
    })

    return ( <div className="outline">
        <h1>Welcome to Avatar World</h1>
           {arrayavatarcard}
        <button>Choose </button>
        </div>
    )

}

export default Avatar;