import React from 'react'
import Nav from './nav/nav'
import Main from './main/main'
import  Deadlines from './deadlines/deadlines'
import services from '../../services'
import Deadline_ScrollBar from './Deadline_ScrollBar/Deadline_ScrollBar'
import GoToTop from './gototop/gototop'

function Services(){
    var [content,setContent]=React.useState(services[0])
    function mainContent(service){
        setContent(service);
    }
    return <div className="services">
        <Deadline_ScrollBar />
        <Nav 
            services={services}
            mainContent={mainContent}
        />
        <Main  service={content}/>
        <div className="sidebar">
            <Deadlines />
        </div>
        <GoToTop/>
    </div>
}
export default Services