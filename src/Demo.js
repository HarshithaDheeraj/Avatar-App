import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './Demo.css';

const Demo = (props) => {
    return <div className="maindiv_style">
    <h1>Hello {props.name}</h1>
    <p>welcome to my app</p>
    </div>

}



export default Demo;