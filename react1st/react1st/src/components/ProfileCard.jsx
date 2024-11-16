
export function Profile(){
    return(
        <>
        <h1>Profile Card</h1>
        
        </>
    )   
}



function ProfileCard(props){
    
    return(
        <>
        <h2>name : {props.name}</h2>
        <p>Age : {props.age}</p>
        <p>{props.greetings} </p>
        <div></div
        >
        </>
    )
}

{/* export default ProfileCard */}