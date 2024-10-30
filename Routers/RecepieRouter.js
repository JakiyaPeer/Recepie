import express from 'express';
import { createRecepie, deleteRecipe, getAllReceipes, getRecipeById, updateRecipe } from '../Controllers/RecepieController.js';

const router =express.Router();
router.post("/create",createRecepie)
router.get("/getdata",getAllReceipes)
router.get("/getdata/:id",getRecipeById)
router.put("/update/:id",updateRecipe)
router.delete("/delete/id",deleteRecipe)
export default router;