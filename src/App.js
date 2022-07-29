import "./App.css";
import React from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { DeleteElement, SortTodo,Edittodo,EditTodoItem } from "./redux/Reducer/elementsReducer";
function App() {
  const datam = useSelector((state) => state.todo.data.Elements);
  const dispatch = useDispatch();
  const isClicked = useSelector((state) => state.todo.data.isClicked);
  const editingElement = useSelector((state)=>state.todo.EditingElem)
  const [isClickEdit,setIsClickEdit] = React.useState(false);
  const [editingitem,seteditingitem] = React.useState("")
  
  const IsSortButtonDisplay = datam.length>=2 ? true : false

  const Sort = () => {
    
    dispatch(SortTodo())
  }
 

  

  

  
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <div className="FoRm">
        <Input />
        <TodoList/>
        { IsSortButtonDisplay && <button className="sort" onClick={Sort}>
        <strong>{isClicked ? "Sorted" : "Sort"}</strong>
      </button>}
      </div>
      
    </div>
  );
}

export default App;
