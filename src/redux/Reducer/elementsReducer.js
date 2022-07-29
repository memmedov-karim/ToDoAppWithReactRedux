import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    value:0,
    isOpened:false,
    data:{
        Elements:[],
        ElementsOrg:[],
        isClicked:false
    },
    EditingElem:"test"
}

export const elementSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        OpenInput: (state,action) => {
            state.isOpened=!state.isOpened

        },
        increment: (state,action) => {
            state.value+=1
        },
        AddElement: (state,action) => {
            state.data.Elements=[...state.data.Elements,action.payload]
            state.data.ElementsOrg = [...state.data.ElementsOrg,action.payload]
        },
        DeleteElement: (state,action) => {
            const neww = state.data.Elements.filter((item,index)=>{
                return parseInt(action.payload) !== index
            })
            state.data.Elements = neww
            console.log(action.payload)
            console.log(state.data.Elements)
        },
        SortTodo: (state,action) => {
            state.data.isClicked = !state.data.isClicked
            const DataUse = state.data.isClicked ? state.data.Elements.sort() : state.data.ElementsOrg
            state.data.Elements = DataUse

            
            
            
            
        },
        Ed: (state,action) => {
            const val = action.payload.split(",")[0]
            const indx = action.payload.split(",")[1]
            const EdEelement = action.payload.split(",")[2]
            // console.log(val,indx)
            state.data.Elements[indx] = val
            console.log(EdEelement)
            state.data.ElementsOrg[state.data.ElementsOrg.indexOf(EdEelement)] = val
        }
        
    }

})

export const {increment,OpenInput,AddElement,DeleteElement,SortTodo,Ed } = elementSlice.actions
export default elementSlice