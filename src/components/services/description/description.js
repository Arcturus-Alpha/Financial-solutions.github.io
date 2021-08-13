import React from 'react'
import './description.css'
function Description(props){
    return <div className="description">
    {props.description}
    </div>
}
export default Description