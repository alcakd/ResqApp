import { createStore, combineReducers } from "redux";

//ACTION ->
const openModal = () => {
  return {
    type: "OPEN_MODAL",
  };
};

const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
  };
};

//REDUCER -> How do actions change from one state to another
const modalStateReducer = (state = false, action) => {
  console.log("modalStateReducer got state, action: ", state, action);
  switch (action.type) {
    case "OPEN_MODAL":
      return true;
    case "CLOSE_MODAL":
      return false;
    default:
      return state;
  }
};

const updateFacilityListData = (data) => {
  return {
    type: "UPDATE_DATA",
    data: data,
  };
};

const facilityListDataReducer = (state = [], action) => {
  console.log("facilityListDataReducer got state, action", state, action);
  switch (action.type) {
    case "UPDATE_DATA":
      return action.data;
    default:
      return state;
  }
};

//REDUX STORE -> GLOBALIZED STATE
const allReducers = combineReducers({
  modalState: modalStateReducer,
  facilityListData: facilityListDataReducer,
});

const store = createStore(allReducers);
store.subscribe(() => {
  console.log("Store state has changed: ", store.getState());
});

export { store, closeModal, openModal, updateFacilityListData };
