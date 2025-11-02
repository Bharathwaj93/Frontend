let Users=JSON.parse(localStorage.getItem("Users")) || [{

    username:"bharath",
    password:"pass123"
},
{
    username:"bharathwaj",
    password:"bharath@93"
}
];
function saveUers() {
    localStorage.setItem("users",JSON.stringify(users));
}

let login = document.getElementById("loginform");
if(login){
login.addEventListener("submit",function(event){
    event.preventDefault();
    let formdata = new FormData(event.target);
    let userData=Object.fromEntries(formdata.entries());
    // console.log(userData.username);
    if(Users.find(user => user.username ===userData.username && user.password === userData.password)){
        // console.log("username already exist please login");
        window.location.replace("homepage.html");
    }else{
        window.location.replace("Registration.html");
    }
}
);}

let register  = document.getElementById("Registerform");
if(register){
register.addEventListener("submit",function(event){
    event.preventDefault();
    let registerform = new FormData(event.target);
    let registerData=Object.fromEntries(registerform.entries());
    console.log(registerData.username);
    if(!Users.find(user => user.username ===registerData.username && user.password === registerData.password)){
    let temp = {
        username:registerData.username,
        password:registerData.password
    }
    console.log(registerData.username);
    Users.push(temp);
    localStorage.setItem("Users", JSON.stringify(Users));
    window.location.replace("loginpage.html");
    }
}
);
}