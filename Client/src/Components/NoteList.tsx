import { useEffect, useState } from "react"
import type { Note } from "../Types/todo"
import { CreateNotes, deleteNote, getNote, UpdateNote } from "../Service/NoteApi"

function NoteList() {
  
  const [get,setAllget] =useState<Note[]>([])
  const [msg,setmsg] =useState("")
  const [edit,setEdit] =useState(false)
  const [editId,setEditId] =useState("")
  const [ref,setRef] =useState(false)


 const makeRefresh = () =>{
  setRef(!ref);
 }

    useEffect(()=>{
    const fetchNote = async ()=>{
   try{
       const data = await getNote()
       console.log(data)
      setAllget(data)
   }catch(err){
    console.log(err)
   }
    }
    fetchNote();
  },[ref])
  
  
  const deleteTodo = async (id :string) =>{
    try{
      await deleteNote(id);
      makeRefresh();
    }catch(err){
      console.log(err)
      throw new Error("delete error")
      
    }
  }
  
  const handModeChange = (title:string, id:string) =>{
    setEditId(id)
    setmsg(title)
    setEdit(true)
  }
  
  const submitNote = async (e:React.FormEvent) =>{
    e.preventDefault()
    if(msg.trim().length=== 0) return
    try{
      
      if(edit){
         await UpdateNote(msg,editId)
         setEdit(false) 
        setEditId("")
      }else{
        await CreateNotes(msg)
      }
      setmsg('')
      makeRefresh()
      
    }catch(err){
      console.log(err)
      throw new Error("submit error")
    }
  }
  
  return (
    <div>NoteList
      
      <ul >
         {
          get.map((note,index) =>(
            <div  key={index} >
                <li>{note.title}</li>
            <button onClick={() =>deleteTodo(note._id)}>delete</button>
            <button onClick={()=>handModeChange(note.title,note._id)}>edit</button>
            </div>
          ))
         }
      </ul>
      
      <form onSubmit={submitNote}>
        <input type="text" value={msg} onChange={(e) => setmsg(e.target.value)}></input>
        <button type="submit"> {edit? "update" : "create"}</button>
      </form>
      
    </div>
  )
}

export default NoteList