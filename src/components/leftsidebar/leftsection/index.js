import React, { useContext } from 'react'
import BurgerButton from '../BurgerButton/index.js'
import { LeftSideBarContext } from '../index.js'
import { Link } from 'react-router-dom'
import logo from '../../img/donpachecoBranco.png'
import './style.scss'

const LeftSection = () => {
    const {isShowSidebar, setIsShowSidebar} = useContext(LeftSideBarContext);

    return (
        <div className={`LeftSideBar__LeftSection LeftSideBar__LeftSection--${isShowSidebar ? 'show' : 'hide'}`}>
            <BurgerButton 
                onClick={() => setIsShowSidebar(false)} />
            <div className='logobranco'>
                <Link to="/"><img src={logo}></img></Link>
            </div>
            <div className='opcoes'>
                <ul className='LeftSideBar__LeftSection__menuwrapper'>
                    <Link to="/petiscos"><li>petiscos</li></Link>
                    <Link to="/"><li>sanduíches</li></Link>
                    <Link to="/"><li>carnes</li></Link>
                    <Link to="/"><li>especiais do don</li></Link>
                    <Link to="/"><li>guarnição</li></Link>
                    <Link to="/"><li>prato executivo</li></Link>
                    <Link to="/"><li>caldos</li></Link>
                    <Link to="/"><li>comida japonesa</li></Link>
                    <Link to="/"><li>bebidas</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default LeftSection;