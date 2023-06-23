
import React, { useEffect, useState } from 'react';
import './Home.css'

const Vission = () => {
    const [visionContent, setVisionContent] = useState(null);

    useEffect(() => {
        const fetchVissionContent = async () => {
          try {
            const response = await fetch('http://127.0.0.1:8000/api/page-content/');
            const data = await response.json();
            setVisionContent(data.vision);
          } catch (error) {
            console.error('Error fetching vission content:', error);
          }
        };
    
        fetchVissionContent();
      }, []);


      if (!visionContent) {
        return <div>Loading vision content...</div>;
      }


    return(
        <div className="vision">
            <h1>VISSION</h1>
            <div className="divider"></div>
            <p>{visionContent}.</p>
        </div>
    );
};

export default Vission