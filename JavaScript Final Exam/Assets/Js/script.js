async function recipesData() {
    
    try {

        let link = await fetch("https://dummyjson.com/recipes");
        let recipes = await link.json();

        console.log(recipes.recipes[0])

    } catch (err) {
        console.log(err);
    }

}

recipesData();