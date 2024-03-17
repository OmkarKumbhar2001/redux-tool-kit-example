import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addTodo, updateTodo } from '../features/todo/todoSlice';
export const AddTodo = () => {
    const [input,setInput] = useState("")
    const [isUpdate,setIsUpdate]=useState(false)
    const [editId,setEditId]=useState("");
    const dispatch=useDispatch();
    const editTodo = useSelector(state=>state.editTodo)
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo?.text)
            setEditId(editTodo?.id)
            setIsUpdate(true)
        }else{
            setInput("")
            setIsUpdate(false)
        }

    },[editTodo])
    const addTodohandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }
    const chancelUpdate=()=>{
        setInput("")
        setIsUpdate(false)
    }
    const updateText = (editid,text)=>{
        dispatch(updateTodo({id:editid,text:text}))
        setInput("")
        setIsUpdate(false)
    }
  return (
        <form onSubmit={addTodohandler} className='my-10 flex flex-row gap-x-2 justify-center'>
            <input className='rounded border-2 outline-0 p-2 w-2/5' type='text' value={input} placeholder='Add Todo' onChange={(e)=>setInput(e.target.value)}/>
            {isUpdate ? 
            <>
                <button onClick={chancelUpdate} className='py-2 px-5 rounded bg-orange-500 text-white'>X</button>
                <button onClick={()=>updateText(editId,input)} className='py-2 px-5 rounded bg-orange-500 text-white'>U</button>
                </>
            :
            <button type='submit' className='py-2 px-5 rounded bg-orange-500 text-white'>+</button>}
            
        </form>
  )
}
