import React from "react";
import { FaTrash, FaPenSquare } from "react-icons/fa";
import "../App.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  DeleteElement,
  SortTodo,
  Edittodo,
  Ed
} from "../redux/Reducer/elementsReducer";
export default function TodoList(props) {
  const [editingElement,setEditingElment] = React.useState("");
  const [SendNewValue,setSendNewValue] = React.useState(editingElement)
  const [IndexOfEditingElement,setIndexOfEditingElement] = React.useState("")
  const [isEditing,setIsEditing] = React.useState(false)
  const dispatch = useDispatch();
  const datam = useSelector((state) => state.todo.data.Elements);

 
  const DeleteTodo = (e) => {
    const DeletingElementId =
      e.target.parentElement.parentElement.parentElement.id;
    dispatch(DeleteElement(DeletingElementId));
    console.log(DeletingElementId);
  };
  const EditTodo = (e,index) => {
    const Element = e.target.parentElement.parentElement.parentElement.firstChild.innerText
    setEditingElment(Element)
    setIsEditing(true)
    setIndexOfEditingElement(index)
    
    console.log(Element,index)
  };
  const HandleChange = (e) => {
    setSendNewValue(e.target.value)

  }
  const Submit = (e) => {
    setIsEditing(false)
    e.preventDefault()

    dispatch(Ed(`${SendNewValue},${IndexOfEditingElement},${editingElement}`))

    // console.log(editingElement,SendNewValue)


  }

  const DataElements = datam.map((item, index) => {
    return (
      
      
      <li key={index} id={index}>
        <span>{item}</span>

        <div className="settings">
          <p onClick={(e)=>EditTodo(e,index)} className="editt">
            <strong>edit</strong>
          </p>

          <FaTrash onClick={DeleteTodo} className="delete" />
        </div>
      </li>
      
    );
  });

  return (
    <div className="list">
      {isEditing && <form onSubmit={Submit}><input onChange={HandleChange} type="text" /></form>}
      <ul className="listm">{DataElements}</ul>
    </div>
  );
}
