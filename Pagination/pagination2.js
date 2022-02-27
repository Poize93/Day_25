





function createUser({name , avatar, createdAt ,id}){

    document.querySelector(".user-list").innerHTML +=`<div class="user-container">
<img class="user-pic" src="${avatar} alt="profile pic">
<div class=""details>
<h3 class="user-name">${name}</h3>
<h3 class="user-join-date">${createdAt}</h3>
<button onclick="deleteUser(${id})">Delete😌</button>
<button onclick="showEditForm(${id})">✏ EDIT</button>
<div class="user-edit-container user-edit-container-${id}">
    <input value="${name}" class="edit-user-name-${id}" placeholder="Name">
    <input value="${avatar}" class="edit-user-pic-${id}" placeholder="Pic">
    <button onclick="editUser(${id})">Save</button>
    
    </div>
</div>

</div>`;
}
//editing the details
async function editUser(id){
    console.log("edit user")
    const userName= document.querySelector(`.edit-user-name-${id}`).value;
    const userPic=document.querySelector(`.edit-user-pic-${id}`).value;
    console.log(userName, userPic)
    
    const data= await fetch("https://62152ebccdb9d09717b0e6f5.mockapi.io/list/${id}",{method:"PUT",
    body:JSON.stringify({name:userName, avatar:userPic}),
    headers: { 'Content-Type': 'application/json'}
    })
    const result= await data.json()
    console.log(result)
    getUser()
 }


function showEditForm(id){
    console.log("editForm", id)
    document.querySelector(`.user-edit-container-${id}`).style.display="flex"
}



//after deleting refersh the data
async function deleteUser(id){
const data= await fetch(`https://62152ebccdb9d09717b0e6f5.mockapi.io/list/${id}`,{method:"DELETE"})
const result= await data.json()

getUser()
console.log(result)
}

// function getUser(){
//     fetch("https://62152ebccdb9d09717b0e6f5.mockapi.io/list")
// .then((data)=>data.json())
// .then((userList)=>{
//     userList.forEach((user)=>createUser(user))
// })
// }

 // Example of Async in Promise
async function getUser(){

const data= await fetch("https://62152ebccdb9d09717b0e6f5.mockapi.io/list",{method:"GET"})
const userList= await data.json()
//clearing the "user-list" conatiner
document.querySelector(".user-list").innerHTML="" //it clear old data

const pagination =document.querySelector(".pagination");
const noOfPages=Math.ceil(userList.length/10)
console.log(noOfPages,userList.length)



for(let i=1;i<=noOfPages;i++){
    console.log(i)
    const page=document.createElement("button")
    page.innerText=i;
    pagination.append(page)
    page.onclick =()=>{

       const pageUser=userList.slice((i-1)*10,(i*10)-1)
       document.querySelector(".user-list").innerHTML=""
       pageUser.forEach((user)=>createUser(user));
    }
}

const firstTenUsers=userList.slice(0,10)
firstTenUsers.forEach((user)=>createUser(user));
//userList.forEach((list)=>createUser(list))
}
 getUser()


 //adding the user
 async function addUser(){
    const userName= document.querySelector(".add-user-name").value;
    const userPic=document.querySelector(".add-user-pic").value;
   
    console.log(userName, userPic);


    //create user
    const data= await fetch("https://62152ebccdb9d09717b0e6f5.mockapi.io/list",{method:"POST",
body:JSON.stringify({name:userName, avatar:userPic}),
headers: { 'Content-Type': 'application/json'}
})
    const result= await data.json()
    console.log(result)
    getUser()
  
 }
