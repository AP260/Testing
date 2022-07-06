import React from "react";

const TutorBox = ({ tutor }) => {
    return (
        <div className="tutor">
            <div>
                <h1>{tutor.Name}
                    <div className="pfp">
                        <img src={tutor.Pfp}></img>
                    </div>
                </h1>
            </div>
            <div>
                <h4>{tutor.Course}</h4>
                <p>{tutor.Phone_Number}</p>
                <p>{tutor.Discord}</p>
            </div>
        </div>
    )
}

export default TutorBox; 