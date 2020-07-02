import axios from "axios";

const API_URL = "localhost:8000";

function GET_facilityListData() {
  //async
  var promise = axios.get(`${API_URL}/facilities/list`);
  console.log("GET_facilityListData");

  //return axios GET promise;
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

//async
function POST_newFacility(newFacility) {
  var promise = axios.post(`${API_URL}/facilities/list`, { data: newFacility });
  //return axios POST promise

  console.log("POST_newFacility()");
  return "done";
}

/* .then((res) => {
    const facilityListData = res.data;
    console.log("facilityList data", facilityListData);
  }); */

export { GET_facilityListData, POST_newFacility };
