import React from 'react'
import services from '../../../services'

function Service(props){
    function changeColor(id){
        var li=document.getElementsByClassName('service')
        for(var i=0;i<li.length;i++){
            if(id===Number(li[i].id)){
                li[i].style.color="#3F48CB"
            }
            else{
                li[i].style.color="rgb(157,156,161)"
            }
        }
        props.mainContent(services[props.id-1]);
    }
    return <li className="service" onClick={()=>{changeColor(props.id)}} id={props.id}>{props.title}</li>
}
export default Service