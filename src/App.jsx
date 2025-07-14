import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({title}) => {
const [hasLiked, setHasLiked] = useState(false);
useEffect (() => {
  console.log(`${title}has been liked: ${hasLiked}`)
})

  return(
    <div className='card'><h2>{title}</h2>

    <button onClick={() => setHasLiked(!hasLiked)}> {hasLiked ? 'liked' : 'like'}
    </button>
   
    </div>
  )
};

const App= () => {


  return(
    <div className='card-container'>
    <Card title="WWE RAW"/>
    <Card title="WWE SMACKDOWN"/>
    <Card title="WWE NXT"/>
    </div>
  )
}; 
  
  
export default App
