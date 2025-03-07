
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 

function Firstpage() {
    const { id } = useParams();
    const [topic, setTopic] = useState(null);

    useEffect(() => {
        fetch("/ReactSyllabus.json")
            .then((res) => res.json())
            .then((json) => {
                const selectedTopic = json.topics.find((t) => t.id.toString() === id);
                setTopic(selectedTopic);
            })
            .catch((error) => console.error("Error fetching JSON:", error));
    }, [id]);

    return (
        <> 
        {/* <Navbar /> */}
        <div style={{ margin: "auto", padding: "20px 60px" }}>
            {topic ? (
                <>
                    <h2 style={{ color: "red", margin: "20px 0px" }}>{topic.title}</h2>

                    {/* Display Content */}
                    {topic.content && topic.content.length > 0 ? (
                        topic.content.map((con, i) => (
                            <p key={i} style={{ margin: "10px" }}>{con}</p>
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                    {/* {Display Image} */}
                    {
                        topic.image && (
                            <div>
                                <img style={{width:"500px" , height:"400px"}} src={topic.image} alt="Image Loading"/>
                            </div>
                        )
                    }

                    {/* Display Example */}
                    {topic.example && (
                        <div>
                            <h3 style={{ marginBottom: "5px" }}>Example:</h3>
                            <p>{topic.example.description}</p>
                            <pre style={{ background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
                                <code>{topic.example.code}</code>
                            </pre>
                        </div>
                    )}
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
        </>
    );
}

export default Firstpage;
