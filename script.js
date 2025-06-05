const usercontainer=document.getElementById('userContainer');
const reloadbtn=document.getElementById('reloadbtn');
 
async function fetchusers(){
    usercontainer.innerHTML='<p> Loading users...</p>';
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok) throw new Error(`Status:${response.status}`);
        const users=await response.json();
        displayUsers(users);
    }catch(error){
        usercontainer.innerHTML=`<p style="color:red;">⚠️ Error: ${error.message}</p>`;
    }
    

}
function displayUsers(users){
    usercontainer.innerHTML='';
    users.forEach(user =>{
        const card=document.createElement('div');
        card.classList.add('user-card');
        card.innerHTML=`
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
    usercontainer.appendChild(card);
    });
}
reloadbtn.addEventListener('click',fetchusers);
fetchusers();