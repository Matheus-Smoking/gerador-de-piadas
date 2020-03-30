export const getCategory = async () => {
  const categoriesRes = await fetch(
    "https://api.chucknorris.io/jokes/categories"
  );
 
  if (categoriesRes.err) {
    throw new Error('Verifique sua conexão com a internet e tente novamente.')
  }

  return await categoriesRes.json();
};

export const getJoke = async (name) => {
  const categoriesRes = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${name}`
  );
 
  if (categoriesRes.err) {
    throw new Error('Verifique sua conexão com a internet e tente novamente.')
  }

  return await categoriesRes.json();
};