console.log("App.js is running");

var app= {
    title: "Indecision App",
    substitle: "This is more info",
    options: ["One", "Two"]
};

var template = (
    <div> 
        <h1>{app.title}</h1>
        { app.substitle && <p>{app.substitle}</p>}
        {app.options.length > 0 ? <p>Here are your options</p>: <p>No Options</p>}
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user={
    name : "Bryan Lara",
    age :  21,
    location : "Houston, Texas"
};
function getLocation(location){
    if(location){
        return <p>Location: {location}</p> ;
    }

};
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {( user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);


var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot); 