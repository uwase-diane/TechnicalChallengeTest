
import React, { useEffect, useState } from 'react';
import './Home.css'

const Objectives = () => {
    const [objectiveContent, setObjectiveContent] = useState(null);

    useEffect(() => {
        const fetchObjectiveContent = async () => {
          try {
            const response = await fetch('http://127.0.0.1:8000/api/page-content/');
            const data = await response.json();
            setObjectiveContent(data.objectives);
          } catch (error) {
            console.error('Error fetching objective content:', error);
          }
        };
    
        fetchObjectiveContent();
      }, []);


      if (!objectiveContent) {
        return <div>Loading objective content...</div>;
      }

    return(
        <div className="objective">
            <h1>OBJECTIVES</h1>
            <div className="divider"></div>
            <p>{objectiveContent}.</p>
        </div>
    );
};

export default Objectives