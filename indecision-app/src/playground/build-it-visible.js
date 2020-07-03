class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle=this.handleToggle.bind(this);
        this.state={
            visible: false
        }
    }
    handleToggle(){
        this.setState((prevState)=>{
            return{
                visible: !(prevState.visible)
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Visibilty Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visible ? "Hide Detail" : "Show Detail"}</button>
                {this.state.visible && <p>Hey. These are some details you can now see!</p>}
            </div>
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById("app"));

// const appRoot = document.getElementById("app");

// let toggleText = {
//     status: false,
//     text : "Show Details",
//     display: ""
// };
// const toggleChange = ()=>{
//     toggleText.status = !toggleText.status;
//     if(toggleText.status){
//         toggleText.text= "Hide Details";
//         toggleText.display="Hey. These are some details you can now see!";
//     }
//     else{
//         toggleText.text= "Show Details";
//         toggleText.display="";
//     }
//     render();
// };

// const render = ()=>{
//     const app = (
//         <div>
//             <h1>Visibilty Toggle</h1>
//             <button onClick={toggleChange}>{toggleText.text}</button>
//             {toggleText.status && <p>{toggleText.display}</p>}
//         </div>
//     );        
//     ReactDOM.render(app,appRoot);
// };

// render();