
export const Searh = (recipes, query) => {

    if(!query) return;

    return recipes.filter((recipe) => (
        recipe.name.toLowerCase().includes(query) ||
        recipe.cuisine.toLowerCase().includes(query) ||
        recipe.ingredients.some((ingredient) => ingredient.includes(query.toLowerCase()))
        
        
     

    ))

}