import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default function Navbar() {
    const {pathname}=useLocation()
    return (
        <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <nav class="navbar navbar-expand-lg navbar-light    ">
                        <div class="container-fluid">
                            <Link class="navbar-brand" to="/">Navbar</Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <Link class="nav-link" aria-current="page" to="#">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/Services">Services</Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <Link class={pathname === '/' ? "menu_active nav-link" : "nav-link"} to="/About">
                                            About
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/Contact" tabindex="-1" >Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
