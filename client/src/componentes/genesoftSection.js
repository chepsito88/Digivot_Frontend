import React from 'react'
import '../App.css'
import { Button } from './Button'
import '../Css/genesoftSection.css'

function genesoftSection() {
    return (
        <div className='genesoft-container'>
            <video src="videos/intro.mp4" autoPlay loop muted/>
            <h1 >GeneSoft S.A de C.V.</h1>
            <p >Compilando tus ideas...</p>
            <div className="genesoft-btns">
               <Button className='btns' buttonStyle='btn--outline'
               buttonSize='btn--large'>Empezar
               </Button> 
               <Button className='btns' buttonStyle='btn--primary'
               buttonSize='btn--large'>Ver Intro <i className='far fa-play-circle'/>
               </Button>
            </div>            
        </div>
    )
}

export default genesoftSection;
