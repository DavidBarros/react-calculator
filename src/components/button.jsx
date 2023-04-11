import React from 'react'
import './button.css'

const button = (props) =>{

    const handleClick = () => {
        if (props.click) {
          props.click(props.label);
        }
    };
   
   
    return(<button className={`button 
    
         ${props.label==="AC"?'AC':''}       
         ${props.label==="0"?'zero':''}
         ${props.label==="1"?'um':''}
         ${props.label==="2"?'dois':''}
         ${props.label==="3"?'tres':''}   
         ${props.label==="4"?'quatro':''}
         ${props.label==="5"?'cinco':''}
         ${props.label==="6"?'seis':''}
         ${props.label==="7"?'sete':''}
         ${props.label==="8"?'oito':''}
         ${props.label==="9"?'nove':''}
         ${props.label==="+"?'ad':''}
         ${props.label==="-"?'sub':''}
         ${props.label==="*"?'mult':''}
         ${props.label==="/"?'divisao':''}
         ${props.label==="="?'result':''}
         ${props.label==="."?'ponto':''}
         ${props.isOperation?'operation':''}

        `}
        
        onClick = {handleClick}
        
        >{props.label}</button>
    )
        
} 

export default button;