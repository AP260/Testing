import React, { useEffect, useState } from "react";
import './App.css';
import TutorBox from "./TutorBox";
import myjson from "./Sample.json";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


/*const tutor1 = {
    "Name": "Andrew",
    "Course": "CSE100",
    "Phone_Number": "928-234-1234",
    "Discord": "Someone#5432",
    "Pfp": "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
}*/
//const file = JSON.parse(myjson);

const App = () => {
    //const [tutors, setTutors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    //grab tutor from db
    /*const searchTutor = async(tutor) => {
        const response = await fetch(``);
        const data = await response.json();

        setTutors(data.Search)
    }

    useEffect(() => {
        searchTutor('')
    }, []);*/
    return (
        <div>
            <div class="pt-4 pb-4 text-center text-secondary">
                <h1>Tutors</h1>
            </div>
            <div className="search">
                {/*
                <input 
                placeholder="Search Course"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                /> 
                */}
            </div>
            <div class="row justify-content-center">
                {myjson.tutor.map((tutor) => (
                        <TutorBox tutor={tutor} />
                ))}
            </div>

        </div>
    );
}

export default App;