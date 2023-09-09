const users=[]
const memberdiv=document.querySelector(".profile");
const addIcon=document.querySelector("#add");
const userIcons =() =>{
    users.map((curElement) => 
    {
        memberdiv.insertAdjacentHTML('afterbegin',
    '<button class="btn"><span>${curElement}</span></button>'
        );
    }
    )

};
addIcon.addEventListener('click', () => {
    let username=prompt("enter name");
    if(username != null)
    {
users.push(username);
confirm("hello "+ username);

    }
    else{
        alert("must enter a name")
    }
})
userIcons();