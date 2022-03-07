export const base_url="https://moringablogbackend.herokuapp.com/posts/"


export const posts =() =>{
    return fetch(base_url, {
        method: "GET"
    }).then((res) => res.json())
};