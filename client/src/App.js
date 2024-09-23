import React, { useState } from "react";
import "./App.css";
import ServiceList from "./components/serviceList";
import AddServiceForm from "./components/AddServiceForm";

function App() {
  const [services, setServices] = useState([]);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const updateService = (updatedService, index) => {
    const updatedServices = services.map((service, i) =>
      i === index ? updatedService : service
    );
    setServices(updatedServices);
  };

  const deleteService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>Healthcare Services</h1>
      <AddServiceForm addService={addService} />
      <ServiceList
        services={services}
        handleEdit={updateService}
        handleDelete={deleteService}
      />
    </div>
  );
}

export default App;
