
function Profile(){
    return(
        <>
        <h1>Profile Card</h1>
        <ProfileCard
        name = 'Alice'
        age = {25}
        greetings = {
            <div>
                <strong>
                    Hi alice, have a wonderful day
                </strong>
            </div>
        }
        
        
        >

        <p> Hobbies : Reading, writing</p>
        <button>SUBMIT</button>
                    
        </ProfileCard>
        
        <ProfileCard
        name = 'RAM'
        age = {100}
        greetings = {
            <div>
                <strong>
                    Hi RAM, have a wonderful day
                    
                </strong>
            </div>
        }
        
        
        >

        <p> Hobbies : coading, talking</p>
        <button>SUBMIT</button>
                    
        </ProfileCard>
        
        
        
        <ProfileCard
        name = 'RAM'
        age = {100}
        greetings = {
            <div>
                <strong>
                    Hi RAM, have a wonderful day
                </strong>
            </div>
        }
        
        
        >

        <p> Hobbies : coading, talking</p>
        <button>SUBMIT</button>
                    
        </ProfileCard>
        
        <ProfileCard
        name = 'TEst'
        age = {100}
        greetings = {
            <div>
                <strong>
                    Hi test , have a wonderful day
                </strong>
            </div>
        }
        
        
        >

        <p> Hobbies : coading, talking</p>
        <button>SUBMIT</button>
                    
        </ProfileCard>
        
        
        
        </>
    )   
}
export default Profile


 
export function ProfileCard(props){
    
    return(
        <>
        
        
        <h2>name : {props.name}</h2>
        <p>Age : {props.age}</p>
        <p>{props.greetings} </p>
        <div>{props.children}</div>
        </>
    )
}
