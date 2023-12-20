import React, { useReducer, useState } from "react";
import './CreateService.scss'
import Header from '../../components/header/Header'

import golf from '../../images/golf.svg'
import { serviceReducer, INITIAL_STATE } from "../../reducers/serviceReducer";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from '../../../utils/newRequest.js'
import upload from "../../../utils/upload.js";

function CreateService() {

  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(serviceReducer, INITIAL_STATE);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { images } });
      setSuccessMessage("Images uploaded successfully!");
      setErrorMessage(null);
    } catch (err) {
      console.log(err);
      setUploading(false);
      setErrorMessage("Error uploading images. Please try again.");
      setSuccessMessage(null);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (service) => {
      return newRequest.post("/services", service);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myServices"]);
      setSuccessMessage("Service created successfully!");
      setErrorMessage(null);
    },
    onError: (error) => {
      console.error(error);
      setErrorMessage("Error creating service. Please try again.");
      setSuccessMessage(null);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    // navigate("/")
  };


  return (

    

    <div className='create-service'>
      <Header showSearch={false}/>
      <div className="header-create">
        Creat new service
      </div>
      <p className='red-notice'>Each question is a chance to connect warmly and inspire customers to consider your services</p>

      <div className="section-container">
        <div className="section-1">

          <div className="create-contianer">
              <p className='create-title'>Name of your Service</p>
              <input 
                  type="text"
                  name="title"
                  onChange={handleChange}
                  placeholder='e.g iphone repair technicain, make up artist' className='create-input'/>

          </div>


          <p htmlFor="" className='create-title2'>Category</p>

          <select name="cat" id="cat" onChange={handleChange}  className="create-contianer">

           
              <option value="">Select a category</option>
              <option value="Graphic & Logo Design">Graphic & Logo Design</option>
              <option value="Driver & transportation">Driver & Transportation</option>
              <option value="Chef">Chef</option>
              <option value="Event Decor & Planning">Event Decor & Planning</option>
              <option value="Makeup & Gele Artist">Makeup & Gele Artist</option>
              <option value="DJs & Sound Engineers">DJs & Sound Engineers</option>
              <option value="Phone, Tablet & Laptop repair">Phone, Tablet & Laptop Repair</option>
              <option value="Plumber">Plumber</option>
              <option value="Electrician">Electrician</option>
              <option value="Photography & Videography">Photography & Videography</option>
              <option value="Instrumentalists">Instrumentalists</option>
              <option value="Cleaning Services">Cleaning Services</option>
              <option value="Fashion Design">Fashion Design</option>
              <option value="Lash & Brow Experts">Lash & Brow Experts</option>
              <option value="Real Estate Agency">Real Estate Agency</option>
              <option value="Personal Shopping & Errands">Personal Shopping & Errands</option>
              <option value="Carpentry">Carpentry</option>
              <option value="Research Project Assistant">Research Project Assistant</option>

          </select>

          <div className="create-contianer">
              <p className='create-title'> About your Company/Brand (Describe your service)</p>
              <input 
                type="text"
                name="desc"
                onChange={handleChange}
              placeholder='Please describe in details what your service is all about' className='create-input2'/>

          </div>


          
          <div className="create-contianer">
              <p className='create-title'>Why are you unique? (Please in 1-2 sentences)</p>
              <input
                type="text"
                name="shortDesc"
                onChange={handleChange}
              placeholder='e.g Capture your wedding beautifully with my stunning photos' className='create-input'/>

          </div>

          <div className="create-contianer">
              <p className='create-title'>Starting Price </p>
              <input
                type="number"
                name="price"
                onChange={handleChange}
              placeholder='What is your minimum price for your service' className='create-input'/>

          </div>
          
         

         
        </div>

        <div className="section-2">
{/* 
        <div className="create-contianer2">
              <p className='create-title2'>Upload Cover </p>

              <div className="create-img-container">
                <img className='create-img' src={upload}/>

              </div>
             <img/>

          </div> */}

             
          
          <div className="create-contianer">
              <p className='create-title'>Certifications (Mininum certification required- WAEC) </p>
              <input 
              type="text"
              name="certification"
              onChange={handleChange}
              placeholder='A certification related to your field will be more encouraged.' className='create-input'/>

          </div>

          <div className="create-contianer">
              <p className='create-title'>Years of expereince </p>

              <input 
              type="text"
              name="yearsOfExperience"
              onChange={handleChange}
              placeholder='e.g 5 years' className='create-input'/>

          </div>






          <div className="create-contianer2">
              <label htmlFor="" className='create-title2'>Upload Images (please upload multiple images) </label>

              {/* <div className="create-img-container">
                <img className='create-img' src={upload}/>
                
              </div>
             <img/> */}

              <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />

              {successMessage && <p className="success-box">{successMessage}</p>}

              <button onClick={handleUpload}>
                {uploading ? "uploading" : "Uploaded"}
              </button>

          </div>

          <div onClick={handleSubmit} className='button2'>
          Create Service
          <img src={golf}className='golf' />
          </div>
          
     
      {errorMessage && <p className="error-box">{errorMessage}</p>}
        </div>
      </div>
     
      <div className='space'></div>
    </div>
  )
}

export default CreateService