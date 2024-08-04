import React from 'react';

const Main_bg = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    height: '500px',
    backgroundColor: '#f0f0f0', // Light background for contrast
  };

  const textStyle = {
    color: '#333',
    textAlign: 'left',
    maxWidth: '600px',
  };

  const titleStyle = {
    fontSize: '2.5em',
    margin: '0',
    background: 'linear-gradient(to bottom right, lightblue, dodgerblue,blue)', // Gradient colors
    WebkitBackgroundClip: 'text', // Ensures the gradient is applied to text
    WebkitTextFillColor: 'transparent',
  };

  const subtitleStyle = {
    fontSize: '1.5em',
    marginTop: '10px',
  };

  const imageStyle = {
    width: '65%',
    height: 'auto', // Ensure the image retains its aspect ratio
    maxHeight: '800px', // Increase this value to make the image taller
    objectFit: 'contain',
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        <h1 style={titleStyle}>Vehicle Configurator</h1>
        <p style={subtitleStyle}>
          Drive Your Success, Fueled by Our Expertise, Business Soars 🚀
        </p>
      </div>
      <img src="/images/fleet2.png" alt="Vehicle Fleet" style={imageStyle} />
    </div>
  );
};

export default Main_bg;
