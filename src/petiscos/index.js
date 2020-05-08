import React, {useState, useEffect} from 'react'
import './style.scss'
import logo from '../components/img/donpachecoBranco.png'
import LeftSideBar from '../components/leftsidebar/index'
import firebase from '../firebase'

/*
firebase.firestore().collection('times').add({
    title: 'Rubiks\'s Cube',
    time_seconds: 45
})
*/

function useItens() {
    const [itens, setItens] = useState([])

    useEffect(() => {
        firebase
        .firestore()
        .collection('petiscos')
        .onSnapshot((snapshot) => {
            const newItens = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            setItens(newItens)
        })
    }, [])

    return itens
}


function Petiscos() {
    const itens = useItens()

    return (
        <div>
            <LeftSideBar/>
            <div className='component-petiscos'>
                <img src={logo}></img>
                <p>PETISCOS</p>
                <div className='opcoes'>
                        {itens.map((itens) => 
                            <div key = {itens.id} className='item'>
                                <p className='item-nome'>{itens.item}</p>
                                <p className='item-preco'>{itens.item_preco}</p>
                            </div>
                        )}
                </div>
            </div>         
        </div>
    )
}

export default Petiscos;