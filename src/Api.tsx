export const base_url="https://moringablogbackend.herokuapp.com/posts/"
// const cors=require("cors")
// cors.use(cors({
//     origin:'https://moringablogbackend.herokuapp.com/posts/1'
// }))

export const posts =() =>{
    return fetch(base_url, {
        method: "GET"
    }).then((res) => res.json())
};

export const postDetail =(id:string) =>{
    return fetch(base_url +id, {
        method: "GET"
    }).then((res) => res.json())
};