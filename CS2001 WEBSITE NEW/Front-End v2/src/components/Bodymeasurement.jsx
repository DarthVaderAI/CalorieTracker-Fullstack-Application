import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import tabledata from "./../data/table.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import axios from "axios";


export const Bodymeasurement = (props) => {


  const [chest, setChest] = useState(String);
    const [thighs, setThigh] = useState(String);
    const [waist, setWaist] = useState(String);
    const [arms, setArms] = useState(String);
    const [calves, setCalves] = useState(String);
    const [notes, setNotes] = useState(String);
    const [weight, setWeight] = useState(String);



    const baseURL = "http://localhost:8080/save";


    const onSubmit = (event) => {
        event.preventDefault();

    axios.post(baseURL, {
        chest: chest,
        calves: calves,
        thighs: thighs,
        arms:arms,
        waist:waist,
        notes:notes,
        weight:weight
      })

    }

    const [contacts, setContacts] = useState(tabledata);
    const [addFormData, setAddFormData] = useState({
      date: "",
      chest: "",
      arms: "",
      waist: "",
      hips: "",
      thighs: "",
      calfs: "",
      weight: "",
      notes: "",
    });
  
    const [editFormData, setEditFormData] = useState({
      date: "",
      chest: "",
      arms: "",
      waist: "",
      hips: "",
      thighs: "",
      calfs: "",
      weight: "",
      notes: "",
    });
  
    const [editContactId, setEditContactId] = useState(null);
  
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newContact = {
        id: nanoid(),
        date:addFormData.date,
        chest:addFormData.chest,
        arms:addFormData.arms,
        waist:addFormData.waist,
        hips:addFormData.hips,
        thighs:addFormData.thighs,
        calfs:addFormData.calfs,
        weight:addFormData.weight,
        notes:addFormData.notes,
 
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedContact = {
        id: editContactId,
        date:editFormData.date,
        chest:editFormData.chest,
        arms:editFormData.arms,
        waist:editFormData.waist,
        hips:editFormData.hips,
        thighs:editFormData.thighs,
        calfs:editFormData.calfs,
        weight:editFormData.weight,
        notes:editFormData.notes,
      };
  
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === editContactId);
  
      newContacts[index] = editedContact;
  
      setContacts(newContacts);
      setEditContactId(null);
    };
  
    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.id);
  
      const formValues = {

        date:contact.date,
        chest:contact.chest,
        arms:contact.arms,
        waist:contact.waist,
        hips:contact.hips,
        thighs:contact.thighs,
        weight:contact.weight,
        notes:contact.notes,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };
  
    const handleDeleteClick = (contactId) => {
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === contactId);
  
      newContacts.splice(index, 1);
  
      setContacts(newContacts);
    };
  
    return (
      <div className="app-container">
        <form id="measurementtable"onSubmit={onSubmit}>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Chest (cm)</th>
                <th>Arms (cm)</th>
                <th>Waist (cm)</th>
                <th>Hips (cm)</th>
                <th>Thighs (cm)</th>
                <th>Calfs (cm)</th>
                <th>Weight (kg)</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
  
        
        <div className="bodymeasurementaddformcontainer">
        <h2>Add a Measurement</h2>
        <form id="measurementadd" onSubmit={onSubmit}>
          <input
            type="date"
            name="date"
            required="required"
            placeholder="Enter a date..."
            onChange={handleAddFormChange}
          />
          <input
            type="number"
            name="chest"
            required="required"
            placeholder="Chest measurement..."
            onChange ={e => setChest(e.target.value)}


          />
          <input
            type="number"
            name="arms"
            required="required"
            placeholder="Arms measurement..."
            onChange ={e => setArms(e.target.value)}
          />
          <input
            type="number"
            name="waist"
            required="required"
            placeholder="Waist measurement..."
            onChange ={e => setWaist(e.target.value)}
          />
          <input
            type="number"
            name="hips"
            required="required"
            placeholder="Hips measurement..."
            onChange={handleAddFormChange}
          />
          <input
            type="number"
            name="thighs"
            required="required"
            placeholder="Thighs measurement..."
            onChange ={e => setThigh(e.target.value)}
          />
          <input
            type="number"
            name="calfs"
            required="required"
            placeholder="Calfs measurement..."
            onChange ={e => setCalves(e.target.value)}
          />
           <input
            type="number"
            name="weight"
            required="required"
            placeholder="Your weight..."
            onChange ={e => setWeight(e.target.value)}
          />
           <input
            type="text"
            name="notes"
            required="required"
            placeholder="Notes..."
            onChange ={e => setNotes(e.target.value)}
          />
          <button type="submit" id="chupaboi" onSubmit ={onSubmit}>Add</button>
        </form>

        </div>
      
      </div>
    );
}
