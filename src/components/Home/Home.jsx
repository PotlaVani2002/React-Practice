import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Home() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetch("/ReactSyllabus.json") 
            .then(res => res.json()) 
            .then(json => setTopics(json.topics))
            .catch(error => console.error("Error fetching JSON:", error));
    }, []);

    return ( 
        <div className="links">
            <h2 style={{color:"red",fontSize:"20px",marginTop:"20px"}}>React Tutorial</h2>
            <ul className="list" style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                {topics.length > 0 ? (
                    topics.map(topic => (
                        <li key={topic.id}>
                            <Link to={`/firstpage/${topic.id}`}>{topic.title}</Link>
                        </li>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </ul>
        </div>
    );
}

export default Home;
