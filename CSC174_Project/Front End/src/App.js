import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {
  // Hospital
  const [NAME, setName] = useState("");
  const [ADDRESS, setAddress] = useState("");
  const [CITY, setCity] = useState("");

  // Patient
  const [PID, setPid] = useState("");
  const [FIRST_NAME, setFname] = useState("");
  const [LAST_NAME, setLname] = useState("");
  const [SEX, setSex] = useState("");
  const [HOSPITAL_NAME, setHospital] = useState("");

  
  const[hospitalList, setHospitalList] = useState([]);
  const[patientList, setPatientList] = useState([]);
  
 

  const addHospital = () => {
    Axios.post("https://csc174-hospital.herokuapp.com/create", {
      NAME: NAME, 
      ADDRESS: ADDRESS, 
      CITY: CITY,
    }).then(() => {
      console.log("Success");
    });
  };

  const addPatient = () => {
    Axios.post("https://csc174-hospital.herokuapp.com/createPatient", {
      PID: PID, 
      FIRST_NAME: FIRST_NAME, 
      LAST_NAME: LAST_NAME,
      SEX: SEX,
      HOSPITAL_NAME: HOSPITAL_NAME,
    }).then(() => {
      console.log("Success");
    });
  };


const getHospitals = () => {
  Axios.get("https://csc174-hospital.herokuapp.com/Hospitals").then((response) => {
    setHospitalList(response.data);
  });
};
const getPatients= () => {
  Axios.get("https://csc174-hospital.herokuapp.com/Patients").then((response) => {
    setPatientList(response.data);
  });
};


  return (
  <div className="App">
    <div className="information">
    <label>NAME (HOSPITAL NAME):</label>
    <input 
    type="text"
    onChange={(event) => {
      setName(event.target.value);
    }}
     />
    <label>ADDRESS:</label>
    <input 
    type="text"
    onChange={(event) => {
      setAddress(event.target.value);
    }}
     />
    <label>CITY:</label>
    <input 
    type="text"
    onChange={(event) => {
      setCity(event.target.value);
    }}
     />
    <button onClick={addHospital}>Add Hospital</button>
    </div>

    <div className="Hospitals">
  <button onClick={getHospitals}>Show Hospitals</button>

  {hospitalList.map((val,key) => {
    return(
      <div className="Hosp">
       <h3>Hospital Table - </h3>
       <h3>Name: {val.NAME}</h3>
       <h3>Address: {val.ADDRESS}</h3>
       <h3>City: {val.CITY}</h3>
      </div>
  );
})}
    </div>

  

    <div className="patientInfo">
    <label>PID:</label>
    <input 
    type="text"
    onChange={(event) => {
      setPid(event.target.value);
    }}
     />
    <label>FIRST_NAME:</label>
    <input 
    type="text"
    onChange={(event) => {
      setFname(event.target.value);
    }}
     />
    <label>LAST_NAME:</label>
    <input 
    type="text"
    onChange={(event) => {
      setLname(event.target.value);
    }}
     />
     <label>SEX:</label>
    <input 
    type="text"
    onChange={(event) => {
      setSex(event.target.value);
    }}
     />
     <label>HOSPITAL_NAME (Must reference hospital name entered above):</label>
    <input 
    type="text"
    onChange={(event) => {
      setHospital(event.target.value);
    }}
     />
    <button onClick={addPatient}>Add Patient</button>
    </div> 
  

    <div className="Patients">
  <button onClick={getPatients}>Show Patients</button>

  {patientList.map((val,key) => {
    return(
      <div className="Pat">
        <h3>Patient Table -</h3>
       <h3>PID: {val.PID}</h3>
       <h3>First Name: {val.FIRST_NAME}</h3>
       <h3>Last Name: {val.LAST_NAME}</h3>
       <h3>Sex: {val.SEX}</h3>
       <h3>Hospital Name: {val.HOSPITAL_NAME}</h3>
      </div>
  );
})}
    </div>
    

  </div>
  );
}

export default App;
