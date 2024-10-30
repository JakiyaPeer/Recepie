import recepies from '../Models/RecepieSchema.js';
export const createRecepie= async(req,res)=>{
  try{
const recepie=new recepies(req.body)
await recepie.save();
res.status(200).json({message:"product added suceesfully",data:recepie})
  }catch(error){
res.status(500).json({message:"internal server error is create product",data:error})
  }
}

export const getAllReceipes = async (req, res) => {
  try {
    const getrecepie = await recepies.find();
    res.status(200).json({message:"recepie are reterived suceeeflly",data:getrecepie});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getRecipeById = async (req, res) => {
  try {
    const recipeId = await recepies.findById(req.params.id);
    if (!recipeId) return res.status(404).json({ message: 'Recipe not found' });
    res.status(200).json(recipeId);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateRecipe = async (req, res) => {
  try {
    const recipe = await recepies.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await recepies.findByIdAndDelete(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

