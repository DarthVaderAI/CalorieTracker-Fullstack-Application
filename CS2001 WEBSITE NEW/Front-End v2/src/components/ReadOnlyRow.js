import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.date}</td>
      <td>{contact.chest}</td>
      <td>{contact.arms}</td>
      <td>{contact.waist}</td>
      <td>{contact.hips}</td>
      <td>{contact.thighs}</td>
      <td>{contact.calfs}</td>
      <td>{contact.weight}</td>
      <td>{contact.notes}</td>
      <td>
        <button type="button" id="chupaboi" onClick={(event) => handleEditClick(event, contact)}> Edit </button>
        <button type="button" id="chupaboi" onClick={() => handleDeleteClick(contact.id)}> Delete </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;