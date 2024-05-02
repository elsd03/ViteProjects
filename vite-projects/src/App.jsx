import { useState } from 'react';
import './App.css'
import CustomButton from './CustomButton';



function App() {

  let [text, setText] = useState('Show modal')
  let [warnMessage, setWarnMessage] = useState('This is a warn')
  let [hint, setHint] = useState('Show modal')
  let [modalActive, setModalActive] = useState(false)
  let [popUp, setPopUp] = useState(false)

  return (
   
      <div className='App'> 
        <button
          className={`${modalActive && 'button'}`}
          onMouseLeave={()=>setPopUp(false)}
          onMouseOver={()=>setPopUp(true)}
          onClick={ ()=> setModalActive(!modalActive)}>
          {text}
          {popUp && <p>{hint}</p>}
        </button>

      {modalActive && <CustomButton warnMessage={warnMessage}/>}
      </div>
  )
}

export default App
