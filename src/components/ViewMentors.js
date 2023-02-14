import React from 'react'
import MentorsCard from './MentorsCard';
import useFetch from "./../hooks/useFetch";

const ViewMentors = () => {
    const { data, loading } = useFetch("http://localhost:8000/mentors");
    return ( 
        <div style={{display: "flex", }}>
            
           {loading ? "Loading" : data.map((item) => (
             
        <MentorsCard data={item} />
            ))} 
        </div>
        
     );
}
 
export default ViewMentors;