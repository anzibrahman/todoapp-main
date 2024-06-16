import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const Home = () => {
   const [input, setInput]= useState([]);
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDataFromDatabase();
  }, []);

  const fetchDataFromDatabase = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/viewalluser"
        // "/api/viewalluser"
      );
      const data = response.data; 

      if (data) {
        setInput(data);
        setLoading(false); 
      } else {
       
        console.error("Data not found in the API response.");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };
  // eslint-disable-next-line
  const deleteClicked = (id) => {
    axios
      .delete(`http://localhost:5000/api/deleteuser/${id}`)
      // .delete(`/api/deletetask/${id}`)

      .then((response) => {
        if (response.data.message === "user deleted successfully") {
          alert(response.data.message);
          fetchDataFromDatabase();
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  // eslint-disable-next-line
  const handleCheckboxChange = (e, val) => {
    if (e.target.checked) {
      val.status = "Complete"; // Change to "Completed"

      try {
        axios
          .put(`http://localhost:5000/api/updateuser/${val._id}`, val)
          // .put(`/api/updateTask/${val._id}`, val)

          .then((response) => {
            if (response.data.message === "user Updated successfully") {
              alert(response.data.message);
              fetchDataFromDatabase();
            } else {
              alert(response.data.message);
              fetchDataFromDatabase();
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
      }
    } 

      try {
        axios
          .put(`http://localhost:5000/api/updateuser/${val._id}`, val)
          // .put(`/api/updateTask/${val._id}`, val)

          .then((response) => {
            if (response.data.message === "user Updated successfully") {
              alert(response.data.message);
              fetchDataFromDatabase();
            } else {
              alert(response.data.message);
              fetchDataFromDatabase();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const viewClicked = (val) => {
    navigate("/adduser", {
      state: { updateData: val },
    });
  


  return (
    <>
      <Navbar />

      <div className="container mt-3 text-center">
        <div className="row">
          <div className="col col-sm-12 col-md-9 col-lg-9 mx-auto ">
            <table className="table table-striped-columns">
              <thead>
                <tr>
                  <th scope="col">Sl no</th>
                  <th scope="col">username</th>
                 
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4">Loading...</td>
                  </tr>
                ) : (
                  input.map((val, i) => (
                    <tr className="" key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{val.title}</td>
                      <td>
                        <EditIcon onClick={() => viewClicked(val)} />
                        <DeleteIcon onClick={() => delete(val._id)} />
                      </td>
                    
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
  };
export default Home;
