import { Router } from "express";
import { allgetTodo, createNewTodo, deleteTodo, OnlyOnetodo, UpdateTodo } from "../controller/todo.js";

 export const router = Router()

router.post("/create", createNewTodo)
router.get("/todos", allgetTodo)
router.get("/todos/:todoId",OnlyOnetodo)
router.delete("/todos/:todoId",deleteTodo)
router.put("/todos/:todoId",UpdateTodo)

