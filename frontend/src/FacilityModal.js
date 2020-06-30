import React from "react";
import Modal from "react-modal";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";

function FacilityModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  function saveFacility() {
    //send save request
    //if save request is fine, close modal
    setIsOpen(false);
    //else error toaster
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>Enter facility details</div>
        <form>
          <div>
            <label>Name</label>
            <input placeholder="John Doe"></input>
          </div>
          <div>
            <label>Street Address</label>
            <input placeholder="123 Fake St"></input>
          </div>
          <div>
            <label>Size</label>
            <Form.Control as="select" defaultValue="Choose...">
              TODO fetch these options from DB
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </Form.Control>
          </div>
        </form>
        <button onClick={saveFacility}>Save</button>
      </Modal>
    </div>
  );
}

export default FacilityModal;
