    
export const getCategory = () => {
    return(
        fetch(`https://api.chucknorris.io/jokes/categories`)
        .then(res => res.json())
    )
}

export const getJoke = (name) => {
    return(
        fetch(`https://api.chucknorris.io/jokes/random?category=${name}`)
        .then(res => res.json())
    )
}