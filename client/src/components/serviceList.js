import React from "react";
import ServiceItem from "./serviceItem";

const ServiceList = ({ services, handleEdit, handleDelete }) => {
  return (
    <div className="service-list">
      {services.length === 0 ? (
        <p>No services available. Add a new service.</p>
      ) : (
        services.map((service, index) => (
          <ServiceItem
            key={index}
            service={service}
            index={index}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default ServiceList;
