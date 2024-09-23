import React, { useState } from "react";

const ServiceItem = ({ service, index, handleEdit, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedService, setEditedService] = useState(service);

  const handleSave = () => {
    handleEdit(editedService, index);
    setIsEditing(false);
  };

  return (
    <div className="service-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedService.name}
            onChange={(e) =>
              setEditedService({ ...editedService, name: e.target.value })
            }
          />
          <input
            type="text"
            value={editedService.description}
            onChange={(e) =>
              setEditedService({
                ...editedService,
                description: e.target.value,
              })
            }
          />
          <input
            type="number"
            value={editedService.price}
            onChange={(e) =>
              setEditedService({ ...editedService, price: e.target.value })
            }
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <p>Price: ${service.price}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ServiceItem;
