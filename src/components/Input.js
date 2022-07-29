import React from 'react'
import { FaPlus } from 'react-icons/fa';
import {elementSlice} from '../redux/Reducer/elementsReducer';
import { useDispatch,useSelector } from 'react-redux/es/exports';
import { OpenInput,AddElement } from '../redux/Reducer/elementsReducer';
import '../App.css';
export default function Input() {
    
    const dispatch = useDispatch();
    const [AddingElement,setaddingElement] = React.useState("");
    const [iserrorMessage,setIsErrorMessage] = React.useState(false)
    const SetElement = (e) => {
        
        if(AddingElement.length>10){
          setIsErrorMessage(true)
        }
        else{
          setIsErrorMessage(false)
          
          

        }
        setaddingElement(e.target.value)
        // console.log(AddingElement.length)
    }
    const Submit = (e) => {
        e.preventDefault()
        dispatch(AddElement(AddingElement))



        // console.log(AddingElement)
    }
    
    const isOpened = useSelector((state)=>state.todo.isOpened)
  return (
    <form onSubmit={Submit} className='Input'>
      {iserrorMessage && <p style={{color:"red"}}>text must be less than 10 letter</p>}
        <div className='firs'>

        <FaPlus onClick={()=>dispatch(OpenInput())} className='add' />


        {isOpened && <input  onChange={SetElement} placeholder='add todo...' type="text" />}
        </div>

    </form>
  )
}
