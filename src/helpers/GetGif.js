
export const GetGif = async(categoria) =>{        

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria) }'&limit=10&api_key=sG01SRQntkhcN3h2JZbpoQyKGeYSjhmB`
    
    const respuesta = await fetch(url);

    const {data} = await respuesta.json();
   
    const gifs = data.map(img =>{
        return{
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }
    })
   return gifs
}