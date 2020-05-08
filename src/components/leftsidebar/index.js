import React, { useState } from 'react';
import TopSection from './topsection/index.js'
import LeftSection from './leftsection/index.js'
import './style.scss'

export const LeftSideBarContext = React.createContext({})

const LeftSideBar = () => {
    const [isShowSidebar, setIsShowSidebar] = useState(false);
        
        return (
            <LeftSideBarContext.Provider
                value = {{isShowSidebar, setIsShowSidebar}}
            >
                <div className='LeftSideBar_container'>
                    <div className={`LeftSideBar_container__overlay LeftSideBar_container__overlay--${isShowSidebar? 'show' : 'hide'}`}></div>
                    <TopSection />
                    <LeftSection />
                </div>
            </LeftSideBarContext.Provider>
        );
    
}

export default LeftSideBar;