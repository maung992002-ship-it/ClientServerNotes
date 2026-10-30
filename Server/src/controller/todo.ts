import { Request, Response } from "express";
import { todo } from "../models/todo.js";

export const createNewTodo = async (req:Request,res:Response) =>{
  const title = req.body.title
  try{
    const newtodo = await todo.create({
      title,
    })
    res.status(201).json({message:"add new todo",todo: newtodo})
  }catch(err){
      res.status(500).json({message:" No new todo add Error", err})
  }
}

export const allgetTodo = async (req:Request,res:Response) =>{
  try{
    const alltodo = await todo.find();
    res.status(200).json({message:"all todo list", todo:alltodo})
  }catch(err){
      res.status(500).json({message:"seen all todo error", err})
  }
}

export const OnlyOnetodo = async (req:Request,res:Response) =>{
  try{
     const{todoId} = req.params;
    const onetodo = await todo.findById(todoId);
    res.status(200).json({message:"one todo", todo :onetodo})
  }catch(err){
      res.status(500).json({message:"seen only todo error", err})
  }
}


export const deleteTodo = async (req:Request,res:Response) =>{
  try{
     const{todoId} = req.params;
    const deletetodo = await todo.findByIdAndDelete(todoId);
    if(!deletetodo){
      res.status(200).json({message:"not found todo"})
    }
    res.status(200).json({message:"this todo is delete", todo :deletetodo})
  }catch(err){
      res.status(500).json({message:"delete error", err})
  }
}

export const UpdateTodo = async (req:Request,res:Response) =>{
  try{
     const{todoId} = req.params;
     const{title} = req.body;
    const updatetodo = await todo.findByIdAndUpdate(todoId,{
      title,
    });
    res.status(200).json({message:"this todo is update",todo:updatetodo})
  }catch(err){
      res.status(500).json({message:"update todo error", err})
  }
}