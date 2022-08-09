import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>


      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter a date..."
          name="date"
          value={editFormData.date}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Chest measurement..."
          name="chest"
          value={editFormData.chest}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Arms measurement..."
          name="arms"
          value={editFormData.arms}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Waist measurement..."
          name="waist"
          value={editFormData.waist}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Hips measurement..."
          name="hips"
          value={editFormData.hips}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Thighs measurement..."
          name="thighs"
          value={editFormData.thighs}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Calfs measurement..."
          name="calfs"
          value={editFormData.calfs}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Your weight..."
          name="weight"
          value={editFormData.weight}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Notes..."
          name="notes"
          value={editFormData.notes}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" id="chupaboi" > Save </button>
        <button type="button" id="chupaboi" onClick={handleCancelClick}> Cancel </button>
      </td>
    </tr>
  );
};

export default EditableRow;
