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

function ProfileCard(){
    return(
        <>
        <p>Name : {Props.name}</p>
        <p>Age : {Props.age}</p>
        
        </>
    )
}