

import React, { useEffect, useState } from 'react';
import './Home.css'

const Mission = () => {
    const [missionContent, setMissionContent] = useState(null);

    console.log(missionContent);

    useEffect(() => {
        const fetchMissionContent = async () => {
          try {
            const response = await fetch('http://127.0.0.1:8000/api/page-content/');
            const data = await response.json();
            setMissionContent(data.mission);
          } catch (error) {
            console.error('Error fetching mission content:', error);
          }
        };
    
        fetchMissionContent();
      }, []);


      if (!missionContent) {
        return <div>Loading mission content...</div>;
      }

      
    return(
        <div className="mission">
            <h1>MISSION</h1>
            <div className="divider"></div>
            <p>{missionContent}</p>
        </div>
    );
};

export default Mission