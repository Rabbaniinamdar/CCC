import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import About from './About'
import ALL from './All';
import Contact from './Contact'
import Home from './Home'
import Error from './Error';
import Menu from './Menu';
import Covid from './Covid';
import Search from './Search';
import '..//../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Routers() {
    const Name = () => {
        return <h1>Name</h1>
    }
    return (
        <BrowserRouter>
            <Menu />
            <div className='s container '>
                <Routes>
                    <Route exact path='/' Component={() => {
                        return <ALL name="rabbani" />
                    }} />
                    <Route exact path='/Home' Component={Home} />
                    <Route exact path='/Home/Name' Component={Name} />
                    <Route path='/About' Component={About} />
                    <Route path='/Search' Component={Search} />
                    <Route path='/Contact' Component={Contact} />
                    <Route path='/Covid' Component={Covid} />
                    <Route path='*' Component={Error} />
                </Routes>
            </div >
        </BrowserRouter>
    )
}

