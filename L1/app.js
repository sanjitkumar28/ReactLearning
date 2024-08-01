const heading=React.createElement("h1",{},"Welcome To ReactJS");

const header=React.createElement("div",{
    className:"parent"
},[React.createElement("div",{
    className:"child1"
},React.createElement("h1",{},
    "This is H1"
)),React.createElement("div",{
    className:"child2"
},React.createElement("h2",{},
    "This is H2"
))]);

console.log('header',header);

const root=ReactDOM.createRoot(document.getElementById("root"));
console.log('root',root);
root.render(header);
