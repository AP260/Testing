import React, { useEffect, useState } from "react";
import './App.css';
import TutorBox from "./TutorBox";
import myjson from "./Sample.json";


/*const tutor1 = {
    "Name": "Andrew",
    "Course": "CSE100",
    "Phone_Number": "928-234-1234",
    "Discord": "Someone#5432",
    "Pfp": "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
}*/

const App = () => {
    const [tutors, setTutors] = useState([]);
    const [searchTerm, setSearchTerm] = '';

    //grab tutor from db
    const searchTutor = async(tutor) => {
        const response = await fetch(``);
        const data = await response.json();

        setTutors(data.Search)
    }

    useEffect(() => {
        searchTutor('')
    }, []);
    return (
        <div className="title">
            <h1>Tutors</h1>
        
            <div className="search">
                <input 
                placeholder="Search Course"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={() => searchTutor(searchTerm)}>Search</button>
            </div>

            <div className="container">
                <TutorBox tutor={myjson.tutor1} />
                <TutorBox tutor={myjson.tutor2} />
                <TutorBox tutor={myjson.tutor3} />
                <TutorBox tutor={myjson.tutor4} />
                <TutorBox tutor={myjson.tutor5} />
            </div>
        </div>
    );
}

export default App;