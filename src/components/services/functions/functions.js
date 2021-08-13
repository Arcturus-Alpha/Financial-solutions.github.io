import React from 'react'
import Function from './function'
import './functions.css'

function Functions(props){
    var i=0
    function services(){
        i++;
        if(i%2===1){
            document.getElementsByClassName("mobile-functions")[0].style.display="block";
        }
        else{
            document.getElementsByClassName("mobile-functions")[0].style.display="none";
        }
    }
    return <div className="functions">
                <button className="mobile-button" onClick={services}>
                    Select Service
                </button>
                <div className="mobile-functions">
                {props.functions.map((content,index)=>{
                    return <Function 
                        value={content}
                        id={index}
                        describe={props.describe}
                    />
                })}
                </div>
                </div>
}
export default Functions