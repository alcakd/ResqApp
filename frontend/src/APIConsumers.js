import axios from "axios";

const api_url = "localhost:8000";

function GET_facilityListData() {
  axios.get(`http://localhost:8000/facilities/list`).then((res) => {
    const facilityListData = res.data;
    console.log("facilityList data", facilityListData);
  });
  console.log("GET_facilityListData");
  return [
    {
      id: 0,
      name: "Facility name 1",
      address: "123 Fake Street",
      size: "Small",
    },
    {
      id: 1,
      name: "Facility name 2",
      address: "456 Fake Street",
      size: "Medium",
    },
    {
      id: 2,
      name: "Facility name 3",
      address: "789 Toronto Street",
      size: "Large",
    },
    {
      id: 3,
      name: "Facility name 4",
      address: "101 Toronto Street",
      size: "Small",
    },
  ];
}

function POST_newFacility() {
  console.log("POST_newFacility()");
  return "done";
}

export { GET_facilityListData, POST_newFacility };
