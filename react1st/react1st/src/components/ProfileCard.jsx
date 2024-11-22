import React from 'react';

function Profile() {
    return (
        <>
            <h1>Profile Card</h1>
            <ProfileCard
                name="Alice"
                age={25}
                greetings={
                    <div>
                        <strong>Hi Alice, have a wonderful day!</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, Writing</p>
                <button>SUBMIT</button>
            </ProfileCard>
        </>
    );
}

export default Profile;

export function ProfileCard(props) {
    return (
        <section>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <div>{props.greetings}</div>
            <div>{props.children}</div>
        </section>
    );
}
