import type { Note } from "../Types/todo";

let API_URL = "";
if(import.meta.env.VITE_MODE === "development"){
  API_URL = import.meta.env.VITE_LOCAL_API_URL;
}

if(import.meta.env.VITE_MODE === "production"){
  API_URL = import.meta.env.VITE_API_URL!;
}

console.log("api url",API_URL); 
  
export const getNote = async () :Promise<Note[]> =>{
  const response = await fetch(`${API_URL}/todos`)
  const data = await response.json();
  return  data.todo
}
  

export const CreateNotes = async (title : string):Promise<Note> =>{
  const response = await fetch(`${API_URL}/create`,{
    method:"post",
    headers:{"Content-Type" : "application/json"},
    body:JSON.stringify({title})
  })
  const data = await response.json();
  return data.todo
}

export const deleteNote = async (id:string) =>{
  await fetch(`${API_URL}/todos/${id}`, {
    method: "delete"
  })
}

export const UpdateNote = async (title : string,id:string)=>{
   const response =  await fetch(`${API_URL}/todos/${id}`,{
    method:"put",
    headers:{"Content-Type" : "application/json"},
    body:JSON.stringify({title})
  })
  const data = await response.json();
  return data.todo
}
