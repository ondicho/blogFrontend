export const base_url="https://moringablogbackend.herokuapp.com/posts/"
// export const base_url="http://127.0.0.1:8000/posts/"


export const posts =() =>{
    return fetch(base_url, {
        method: "GET"
    }).then((res) => res.json())
};

export const postForm =(body:any) =>{
    return fetch(base_url, {
        method: "POST",
        body: body
    }).then((res) => res.json())
};


export const postDetail =(id:string) =>{
    return fetch(base_url +id, {
        method: "GET"
    }).then((res) => res.json())
};

export const updatePostDetail =(id:string,body:any)=>{
    return fetch(base_url + id, {
        method:"PUT",
        body:body
    }).then((res) => res.json());
}


export const deletepost =(id:string) =>{
    return fetch(base_url +id, {
        method: "DELETE"
    }).then((res) => res.json())
};