const numbers =[1,2,3,4,5];

const double =numbers.map(num => num*2);
console.log(double);

const users=[
    {name:"bharath",location:"chennai",isactive: true},
    {name:"waj",location:"thiruvarur",isactive: true},
    {name:"Bharathwaj",location:"ttp",isactive: false},
]
const username = users.map(user => user.name);
console.log(username);

const sum = users.map(user => ({
    name: user.name,
    location:user.location
}))


console.log(sum);

const even = numbers.filter(num =>num%2 ===0);
console.log(even);
const sam =numbers.filter(num =>num>=5);
console.log(sam);

const filtered= users.filter(user => user.location === "chennai");
console.log(filtered);

const filtered2= users.filter(user => user.location === "chennai" && user.isactive);
console.log(filtered2);

const div =document.getElementById("samplediv");
div.innerHTML ='<p>new content added</p>';

const user ={
    name:"bharath", location:"chennai", isactive:true
}

div.innerHTML = `
<h2>${user.name}</h2>
<p>${user.location}</p>
<p>${user.isActive}</p>
`
const list = document.getElementById("samplelist");
list.innerHTML = users.map(userN => 

    `<ul>
    <li>${userN.name}</li>
    <li>${userN.location}</li>
    <li>${userN.isActive}</li>
    </ul>
    `
)

