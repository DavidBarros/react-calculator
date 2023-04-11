import React, {Component} from 'react'
import './calculator.css'
import Button from './button'
import Display from './diplsay'
export default class Calcuator extends Component{

    constructor(props){
        super();
        this.clearMem = this.clearMem.bind(this);
        this.setDigit = this.setDigit.bind(this);
        this.setOperation = this.setOperation.bind(this);
    }
    
     clearMem(){
    
        console.log("Limpo!");
    }

    setDigit(digit){
        console.log(digit);
    }

    setOperation(operator){
        console.log(operator);
    }


    render(){
       return( 
        <div className = "calculator">
            <Display value={"1000"}/>
            <Button label="0" click={this.setDigit}/>    
            <Button label="1"/>    
            <Button label="2"/>    
            <Button label="3"/>    
            <Button label="4"/>    
            <Button label="5"/>    
            <Button label="6"/>    
            <Button label="7"/>    
            <Button label="8"/>    
            <Button label="9"/>    
            <Button label="+" isOperation={true}/>    
            <Button label="-" isOperation={true}/>    
            <Button label="/" isOperation={true}/>    
            <Button label="*" isOperation={true}/>    
            <Button label="AC" click={this.clearMem}/>    
            <Button label="."/>    
            <Button label="=" isOperation={true}/>    
                
        </div>
       )
    }





}