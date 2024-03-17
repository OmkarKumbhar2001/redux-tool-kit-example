import { createSlice,nanoid } from "@reduxjs/toolkit";
//nanoid create unique id

const initialState = {
    todos : [{id:1,text:"Hello World"}],
    editTodo: null, 
}
function sayHello(){
    console.log("hello")
}
export const todoSlice = createSlice({
    name:"todo",//in chrome extension
    initialState,
    reducers:{
        // addTodo:sayHello,
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
            
        },//syntax we need to pass two parameter state menas current data action is some values 
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>{
               return todo.id !== action.payload
            })
        },
        setEditTodo:(state,action)=>{
            state.editTodo= state.todos.find(todo=>todo.id===action.payload)
        },
        updateTodo:(state,action)=>{
            const { id, text } = action.payload;
          
            const todoToUpdate = state.todos.find(todo => todo.id === id);
           
            if (todoToUpdate) {
                todoToUpdate.text = text;
                state.editTodo = null;
            }
        }
    } 
})
export const {addTodo,removeTodo,setEditTodo,updateTodo} = todoSlice.actions;
export default todoSlice.reducer;