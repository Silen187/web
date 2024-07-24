import React, { useEffect, useRef } from 'react';
import './PowerBIContainer.css'; // Import CSS for styling

function PowerBIContainer(props) {
  const jobListRef = useRef(null);
  useEffect(() => {
    if (jobListRef.current) {
      jobListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  const { link } = props;
  return (
    <div className="powerbi-container" ref = {jobListRef}>
      <iframe
        className="powerbi-iframe"
        src={link}
        title="PowerBI Report"
      ></iframe>
    </div>
  );
};

export default PowerBIContainer;