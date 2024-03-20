export function Button(props){
    return <button onClick={props.onClick}>{props.text}</button>
}

export function OnClickFunction(){
    return console.log("The onclick function associated with the button element has been called successfully!");
}