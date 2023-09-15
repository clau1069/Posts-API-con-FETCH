//primero con fetch
const endpointPosts="https://jsonplaceholder.typicode.com/posts"
const endpointUsers = "https://jsonplaceholder.typicode.com/users"
printPosts()

async function getPosts(){
    try{
        const response= await fetch(endpointPosts)
    if (response.status == 200){
        const posts= await response.json()
        console.log("Posts:");
        console.log(posts);
        return posts
    }
    }catch(error){console.log(console.error())}
}

async function getUsers(){
    try{
        const response= await fetch(endpointUsers)
        if (response.status==200){
            const users= await response.json()
            console.log("Users:");
            console.log(users);
            return users
        }
    }catch(error){console.log(error)}
}

async function printPosts(){
    const posts = await getPosts()
    const users = await getUsers()
    const contenedor= document.getElementById("contenedor")
    let postsHTML=""
    posts.forEach((post)=>{
        //obtener el usuario
        const posterUser= users.find((user)=> user.id == post.userId)
        console.log(posterUser);
        //crear el html
        postsHTML+=`
        <div class="post">
            <h3 class="titulo">${post.title}</h3>
            <p>${post.description || ""}</p>
            <hr>
            <div>
                <p>User: </p>
                <h5>${posterUser.name}</h5>
            </div>
            <div>
                <p>Website: </p>
                <h5>${posterUser.website}</h5>
            </div>
            <div>
                <p>Email: </p>
                <h5>${posterUser.email}</h5>
            </div>
        </div>
        ` 
    })
    contenedor.innerHTML= postsHTML
}