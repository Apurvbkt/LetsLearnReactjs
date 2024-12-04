function Profile(){
    return(
        <div>
            <h1>Profile Card challenge</h1>
            <ProfileCard
            name = "Apurv"
            age = {23}
            greeting = {
                <div>
                    <strong>
                        Hii Apurv, Have a great day
                    </strong>
                </div>                
            }>
                <p>Hobbies:  Reading, tech</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    )
}

export default Profile

function ProfileCard(props){
    return(
        <>
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <>{props.greeting}</>
        {props.childrenpush 5}
        
        </>
    )
}