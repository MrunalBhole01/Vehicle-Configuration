import React from 'react';
import "../styles/Services.css";

const Services = () => {
  const services = [
    {
      icon: '🚗',
      title: 'Wide Vehicle Selection',
      description: 'Choose from a wide range of vehicles to suit your needs and budget.'
    },
    {
        icon: '🛠️', 
        title: 'Highly Customizable',
        description: 'Customize your rental experience to meet your needs. Choose from a variety of options.',
    },
    {
      icon: '🕒',
      title: 'Flexible Rental Periods',
      description: 'Rent vehicles for a day, a week, or even longer with flexible plans.'
    }
  ];

  return (
    <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
