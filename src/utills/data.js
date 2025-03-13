async function getData(id) {
    let url = `https://api.jikan.moe/v4/anime/${id}/characters`;
    let data = await fetch(url);
    data = await data.json();
    data = data.data;
    data = data.sort((a, b) => a.favorites - b.favorites);
    data = data.splice(data.length - 16, 16);
    console.log(data);
}

export default getData