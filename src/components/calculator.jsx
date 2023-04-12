import React, {Component} from 'react'
import './calculator.css'
import Button from './button'
import Display from './diplsay'
export default class Calcuator extends Component{

    constructor(props){
        super(props);
        this.state = {
            value:"0",
            operator:null,
            previousValue:null
        }
        this.clearMem = this.clearMem.bind(this);
        this.addDigit = this.addDigit.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.calcResult = this.calcResult.bind(this);
    }
    
     clearMem(){
        this.setState({
            value: "0",
            operator: null,
            previousValue: null
          });
    }

    addDigit(digit){
       
        if(digit==="0" && this.state.value==="0" && !this.state.value.includes('.')){
            return;
        }
        if(this.state.value==="0" && digit!=='.'){
            this.setState( {value: ''});
             
        }
        if (digit==='.' && this.state.value.includes('.')){
            return;
        }
        
        try {
            this.setState(prevState => ({
            
                value: prevState.value + digit
              }))  
        } catch (error) {
            console.log(error);
        }
        
    }

    setOperation(operator){
        
        if(this.state.operator!=null){
            return;
        }
        
        try {
                this.setState(prevState => ({
                    operator,
                    previousValue: prevState.value,
                    value: ""
                    }));
        }      
        catch (error) {
            console.log(error);    
        }
    }    

    calcResult(){
        
        const { value, operator, previousValue } = this.state;
        if (operator === "+") {
            this.setState({
            value: (Number(previousValue) + Number(value)).toString(),
            operator: null,
            previousValue: null
            });
        } else if (operator === "-") {
            this.setState({
            value: (Number(previousValue) - Number(value)).toString(),
            operator: null,
            previousValue: null
            });
        } else if (operator === "*") {
            this.setState({
            value: (Number(previousValue) * Number(value)).toString(),
            operator: null,
            previousValue: null
            });
        } else if (operator === "/") {
            this.setState({
            value: (Number(previousValue) / Number(value)).toString(),
            operator: null,
            previousValue: null
            });
        }
    }    


    render(){
       return( 
        <div className = "calculator">
            <Display value={this.state.value}/>
            <Button label="0" click={this.addDigit}/>    
            <Button label="1" click={this.addDigit}/>    
            <Button label="2" click={this.addDigit}/>    
            <Button label="3" click={this.addDigit}/>    
            <Button label="4" click={this.addDigit}/>    
            <Button label="5" click={this.addDigit}/>    
            <Button label="6" click={this.addDigit}/>    
            <Button label="7" click={this.addDigit}/>    
            <Button label="8" click={this.addDigit}/>    
            <Button label="9" click={this.addDigit}/>    
            <Button label="+" isOperation={true} click={this.setOperation}/>    
            <Button label="-" isOperation={true} click={this.setOperation}/>    
            <Button label="/" isOperation={true} click={this.setOperation}/>    
            <Button label="*" isOperation={true} click={this.setOperation}/>    
            <Button label="AC" click={this.clearMem} />    
            <Button label="." click={this.addDigit}/>    
            <Button label="=" isOperation={true} click={this.calcResult}/>    
                
        </div>
       )
    }

}