import React, { useState } from 'react';
import './style.scss'
import logo from './img/donpacheco2.png'
import face from './img/face.png'
import insta from './img/insta.png'
import LeftSideBar from './leftsidebar/index.js'

function Layout() {
    return (
            <div class="image">
                <div class="content">
                    <LeftSideBar/>
                    <div className='info'>
                        <img src={logo}></img>
                        <p className='title'>STAKE HOUSE | SUSHI BAR</p>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    
                    <div className='social-media'>
                        <div>
                            <a><img src={face}></img></a>
                            <a><img src={insta}></img></a>
                        </div>
                        <p>
                            Rio de Janeiro - Casimiro de Abreu -<br/> 28860-000<br/>
                            Tel.: (22) 2778-8888
                        </p>
                    </div>
                   
                </div>
            </div>
        
    )
}

export default Layout;