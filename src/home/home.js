import React from 'react'
import './home.scss'
import Layout from '../components/index.js'



function scrollToTop ()  {
    window.scrollTo(0, 0)
}

function Home() {
    return (
        <div>
            {scrollToTop()}           
            <Layout />
        </div>
    )
}

export default Home;