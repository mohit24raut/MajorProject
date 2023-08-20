import React, { useState ,useEffect} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import"../../node_modules/bootstrap/dist/js/bootstrap";
import axios from "axios";




export default function RetailerRegistration() {
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);
  
  const [shopkeeper,setShopkeeper] = useState({
    username:"",email:"",name:"",password:"",seedLicenseNo:"",fertilizerLicenseNo:"",pesticideLicenseNo:"",gstNo:"",shopAddress:""

  })
  let name,value;
  const handleChange =(e) => {
    name=e.target.name;
    value=e.target.value;
    setShopkeeper({ ...shopkeeper, [name] : value });

  }
  useEffect(() =>{
    console.log(formErrors);
    if(Object.keys(shopkeeper).length === 0 && isSubmit){
      console.log(shopkeeper);
      let url = "http://localhost:9292/add-shopkeeper";
      axios.post(url,shopkeeper).then(( response) => {
        console.log(response.data);
      })
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(shopkeeper));
    let url = "http://localhost:9292/add-shopkeeper";
      axios.post(url,shopkeeper).then(( response) => {
        console.log(response.data);
      })
   
  }
  const validate = (values) =>{
    const errors ={};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(!values.username){
      errors.username="Username is required";
    }
    if(!values.name){
      errors.name="Name is required";
    }
    if(!values.gstNo){
      errors.gstNo="License is required ";
    }
    if(!values.password){
      errors.password="Password is required";
    }  else if (!passwordRegex.test(values.password)){
      errors.password="Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    }
    if(!values.email){
      errors.email="Email is required";
    } else if (!emailRegex.test(values.email)){
      errors.email="Invalid email";
    }
    if(!values.pesticideLicenseNo){
      errors.pesticideLicenseNo="License is required";
    }
    if(!values.fertilizerLicenseNo){
      errors.fertilizerLicenseNo="License is required";
    }
    if(!values.seedLicenseNo){
      errors.seedLicenseNo="License is required";
    }
    if(!values.shopAddress){
      errors.shopAddress="Address is required";
    }
    return errors;
  }
 

  return (
    
      
        <div className="container py-5 h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100  ">
            <div className="col">
              <div className="card card-registration my-4 bg-dark-subtle ">
                <div className="row g-0 d-flex justify-content-center align-items-center">
                  {/**<div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://images.pexels.com/photos/4921185/pexels-photo-4921185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Sample "
                      className="img-fluid mt-5"
                    />
                  </div>
                   */}
                  
                  
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <form onSubmit={handleSubmit} >
                      <h3 className="mb-5 text-uppercase fw-bolder">
                        Shopkeeper registration
                      </h3>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                          <label className="form-label fw-bolder" >
                              Username
                            </label>
                            <input
                              type="text"
                              id="username"
                              name="username"
                              className="form-control form-control-lg"
                              value={shopkeeper.username}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.username}</p>
                            
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                          <label className="form-label fw-bolder" >
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control form-control-lg"
                              value={shopkeeper.name}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.name}</p>
                            
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                          <label className="form-label fw-bolder">
                              Seed License
                            </label>
                            <input
                              type="text"
                              name="seedLicenseNo"
                              id="seedLicenseNo"
                              className="form-control form-control-lg"
                              value={shopkeeper.seedLicenseNo}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.seedLicenseNo}</p>
                            
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                          <label className="form-label fw-bolder" >
                              Pesticide License
                            </label>
                            <input
                              type="text"
                              name="pesticideLicenseNo"
                              id="pesticideLicenseNo"
                              className="form-control form-control-lg"
                              value={shopkeeper.pesticideLicenseNo}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.pesticideLicenseNo}</p>
                            
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                          <label className="form-label fw-bolder">
                              Fertilizer License
                            </label>
                            <input
                              type="text"
                              id="fertilizerLicenseNo"
                              name="fertilizerLicenseNo"
                              className="form-control form-control-lg"
                              value={shopkeeper.fertilizerLicenseNo}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.fertilizerLicenseNo}</p>
                            
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                        <label className="form-label fw-bolder" >
                              GST No
                            </label>
                          <div className="form-outline">
                            <input
                              type="text"
                              id="gstNo"
                              name="gstNo"
                              className="form-control form-control-lg"
                              value={shopkeeper.gstNo}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.gstNo}</p>
                            
                          </div>
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                          <div className="form-outline">
                          <label className="form-label fw-bolder" >
                              Shop Address
                            </label>
                            <input
                              type="text"
                              id="shopAddress"
                              name="shopAddress"
                              className="form-control form-control-lg"
                              value={shopkeeper.shopAddress}
                              onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{formErrors.shopAddress}</p>
                           
                          </div>
                        </div>

                      <div className="form-outline mb-4">
                      <label className="form-label fw-bolder" >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control form-control-lg"
                          value={shopkeeper.email}
                          onChange={handleChange}
                        />
                        <p style={{color:'red'}}>{formErrors.email}</p>
                        
                      </div>
                      <div className="form-outline mb-4">
                      <label className="form-label fw-bolder" >
                         Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control form-control-lg"
                          value={shopkeeper.password}
                          onChange={handleChange}
                        />
                        <p style={{color:'red'}}>{formErrors.password}</p>
                        
                      </div>
                      <div className="d-flex justify-content-center pt-3">
                        <button type="button" class="btn btn-light btn-lg">
                          Reset all
                        </button>
                        
                        <button
                          type="submit"
                          name="submit"
                          className="btn btn-primary btn-lg ms-2"
                          
                        >
                          Register
                        </button>
                      </div>
                      </form>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      
   
  );
}


