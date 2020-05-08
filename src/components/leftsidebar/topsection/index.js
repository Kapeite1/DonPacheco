import React, { useContext} from 'react'
import BurgerButton from '../BurgerButton/index.js'
import { LeftSideBarContext } from '../index.js'
import './style.scss'


const TopSection = () =>  {
    const {isShowSidebar, setIsShowSidebar} = useContext(LeftSideBarContext);
    return (
        <div className={`LeftSideBar__TopSection LeftSideBar__Active--${isShowSidebar ? 'show' : 'hide'}`}>
            <BurgerButton
                onClick={() => setIsShowSidebar(true)}/>
        </div>
    );
}

export default TopSection;