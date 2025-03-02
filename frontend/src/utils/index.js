const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;
const USER_ID = import.meta.env.VITE_USER_ID;

export async function fetchRecipes(filter) {
    const { query, limit } = filter;
    // const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=${limit}`;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=${limit}&`;


    const response = await fetch(url, {
        headers: {
            'Edamam-Account-User': USER_ID,
        },
    });

    if (!response.ok) {
        console.error('Error:', response.statusText);
        return;
    }

    const data = await response.json();
    console.log(data);
    return data?.hits;
}

export async function fetchRecipe(id) {
    // const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${APP_ID}&app_key=${APP_KEY}`


    const response = await fetch(url, {
        headers: {
            'Edamam-Account-User': USER_ID,
        },
    });

    if (!response.ok) {
        console.error('Error:', response.statusText);
        return;
    }

    const data = await response.json();
    return data[0];
}
