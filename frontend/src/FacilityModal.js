import React /*, { useState, useEffect }*/ from "react";
import Modal from "react-modal";
import Form from "react-bootstrap/Form";
import { closeModal } from "./Redux.js";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { POST_newFacility } from "./APIConsumers.js";

function FacilityModal() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => {
    // console.log("What is useSelector state?", state);
    return state.modalState;
  });

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModalClickHandler() {
    console.log("closeModal() inside facilityModal");
    dispatch(closeModal());
  }

  function saveFacility() {
    console.log("saveFacility()");
    POST_newFacility();
    //send save request POST_newFacility
    //data

    //if save request is fine, close modal
    // if (promise)
    //else error toaster
    dispatch(closeModal());
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModalClickHandler}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <Button
          className="my-1"
          variant="dark"
          onClick={closeModalClickHandler}
        >
          Close
        </Button>
        <Alert variant="primary">Enter facility details</Alert>
        <form>
          <div>
            <label for="nameInputId">Name</label>
            <input
              id="nameInputId"
              class="form-control"
              placeholder="John Doe"
            ></input>
          </div>
          <div>
            <label for="streetAddressId">Street Address</label>
            <input
              id="streetAddressId"
              class="form-control"
              placeholder="123 Fake St"
            ></input>
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
        <Button className="my-1" variant="success" onClick={saveFacility}>
          Save
        </Button>
      </Modal>
    </div>
  );
}

export default FacilityModal;
