function eventsample(e){
    console.log(e);

}

let sample = document.getElementById("newdataform").addEventListener("submit",function(event){
    event.preventDefault();

    let formdata = new FormData(event.target);
    let newobj=Object.fromEntries(formdata.entries());
    console.log(formdata);
    console.log(newobj);
    if(newobj.username==="bharath"){
        console.log("username already exist please login");
        
    }else{
        console.log("registration completed.thanks!");
    }
}
);