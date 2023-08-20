import "./AddProductForm";
import React, { useState ,useEffect} from "react";
import {Field} from "formik";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import"../../node_modules/bootstrap/dist/js/bootstrap";
import axios from "axios";

export function AddProductForm()
{
    let [product, setProduct]=useState({
        productName:"", 
        chemicalName:"", 
        category:"", 
        companyName:"", 
        shortDescription:"", 
        description:"", 
        benefits:"", 
        targetedInsects:"",
    })
    let [weight1, setWeight1] = useState({weight:"1000", price:"", quantity:"", expirydate:""});
    let [weight2, setWeight2] = useState({weight:"500", price:"", quantity:"", expirydate:""});
    let [weight3, setWeight3] = useState({weight:"250", price:"", quantity:"", expirydate:""});

    let changeProductName=(e)=>{
        let newFname={...product, productName:e.target.value};
        setProduct(newFname);
    }
    let changeCompanyName=(e)=>{
        let newFname={...product, companyName:e.target.value};
        setProduct(newFname);
    }
    let changeChemicalName=(e)=>{
        let newFname={...product, chemicalName:e.target.value};
        setProduct(newFname);
    }
    /*
    let changeProductName=(e)=>{
        let newFname={...product, productName:e.target.value};
        setProduct(newFname);
    }*/
    let changeShortDescription=(e)=>{
        let newFname={...product, shortDescription:e.target.value};
        setProduct(newFname);
    }
    let changeDescription=(e)=>{
        let newFname={...product, description:e.target.value};
        setProduct(newFname);
    }
    let changeBenefits=(e)=>{
        let newFname={...product, benefits:e.target.value};
        setProduct(newFname);
    }
    let changeTargetedInsects=(e)=>{
        let newFname={...product, targetedInsects:e.target.value};
        setProduct(newFname);
    }

    /*weights */
    let changePrice1=(e)=>{
        let newFname={...weight1, price:e.target.value};
        setWeight1(newFname);
    }
    let changeQuantity1=(e)=>{
        let newFname={...weight1, quantity:e.target.value};
        setWeight1(newFname);
    }
    let changeExpirydate1=(e)=>{
        let newFname={...weight1, expirydate:e.target.value};
        setWeight1(newFname);
    }

    /*weights 2*/
    let changePrice2=(e)=>{
        let newFname={...weight2, price:e.target.value};
        setWeight2(newFname);
    }
    let changeQuantity2=(e)=>{
        let newFname={...weight2, quantity:e.target.value};
        setWeight2(newFname);
    }
    let changeExpirydate2=(e)=>{
        let newFname={...weight2, expirydate:e.target.value};
        setWeight2(newFname);
    }

    /*weights 3*/
    let changePrice3=(e)=>{
        let newFname={...weight3, price:e.target.value};
        setWeight3(newFname);
    }
    let changeQuantity3=(e)=>{
        let newFname={...weight3, quantity:e.target.value};
        setWeight3(newFname);
    }
    let changeExpirydate3=(e)=>{
        let newFname={...weight3, expirydate:e.target.value};
        setWeight3(newFname);
    }


    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };


    let addProductAction = () => {
        console.log(product);
        console.log(selectedImage);
        if (selectedImage) {
            // Create a FormData object to send the image
            const formData = new FormData();
            formData.append('productImage', selectedImage);


            let url = `http://localhost:9292/upload`;
            axios.post(url,formData, {
                headers: {
                  'Content-Type': 'multipart/form-data', // Important for file upload
                },
            }).then((response)=>{
            let newuser = {
                productName:"", 
                chemicalName:"", 
                category:"", 
                companyName:"", 
                shortDescription:"", 
                description:"", 
                benefits:"", 
                targetedInsects:"",
            };
            setProduct(newuser);
            if(response.data == "Exist")
            {
                alert("Already Register");
            }
            else{
                alert("Added Successfully");
            }
            })
        }
      };
    return(
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center h-100  ">
                    <div className="col-md-6">
                        <div className="card card-registration my-4 bg-dark-subtle ">
                            <div className="row g-0 d-flex justify-content-center align-items-center">
                            
                                <div className="col-sm-12 col-md-12">
                                    <div className="card-body p-md-5 text-black">
                                    
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <p id="h2feat">Add Product</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label htmlFor="productName" className="form-label fw-bolder" >
                                                    Product Name
                                                    </label>
                                                    <input
                                                    type="text"
                                                    placeholder="eg. Fame"
                                                    required
                                                    id="productName"
                                                    value={product.productName}
                                                    onChange={changeProductName}
                                                    className="form-control form-control-lg"
                                                    />
                                                    
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label htmlFor="companyName" className="form-label fw-bolder" >
                                                    Company Name
                                                    </label>
                                                    <input
                                                    type="text"
                                                    placeholder="eg. Bayer"
                                                    id="companyName"
                                                    value={product.companyName}
                                                    onChange={changeCompanyName}
                                                    className="form-control form-control-lg"
                                                    />
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                <label htmlFor="chemicalName" className="form-label fw-bolder">
                                                    Chemical Name
                                                    </label>
                                                    <input
                                                    type="text"
                                                    placeholder="eg. Fludendamide 50% SC"
                                                    id="chemicalName"
                                                    value={product.chemicalName}
                                                    onChange={changeChemicalName}
                                                    className="form-control form-control-lg"
                                                    />
                                                    
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label htmlFor="category" className="form-label fw-bolder" >
                                                    Category
                                                    </label>
                                                    <input
                                                    type="text"
                                                    placeholder="eg. "
                                                    id="category"
                                                    value={product.category}
                                                    className="form-control form-control-lg"
                                                    />
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label fw-bolder">
                                                    Expiry Date
                                                    </label>
                                                    <input
                                                    type="Date"
                                                    id="fertilizerLicenseNo"
                                                    name="fertilizerLicenseNo"
                                                    className="form-control form-control-lg"
                                                    />
                                                    
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label fw-bolder" >
                                                    Quantity
                                                    </label>
                                                    <input
                                                    type="text"
                                                    id="gstNo"
                                                    name="gstNo"
                                                    className="form-control form-control-lg"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <div className="form-outline">
                                                <label htmlFor="shortDescription" className="form-label fw-bolder" >
                                                Short Description
                                                </label>
                                                <textarea 
                                                    className="form-control form-control-lg" 
                                                    placeholder="Enter Short Description"
                                                    id="shortDescription"
                                                    value={product.shortDescription}
                                                    onChange={changeShortDescription}
                                                    rows="2" 
                                                    cols="50">
                                                    This is the initial text in the textarea.
                                                </textarea>
                                            
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label htmlFor="description" className="form-label fw-bolder" >
                                            Description
                                            </label>
                                            <textarea 
                                                className="form-control form-control-lg" 
                                                placeholder="Enter Description"
                                                id="description"
                                                value={product.description}
                                                onChange={changeDescription}
                                                rows="2" 
                                                cols="50"
                                            >
                                                This is the initial text in the textarea.
                                            </textarea>
                                            
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label htmlFor="benefits" className="form-label fw-bolder" >
                                            Benefits
                                            </label>
                                            <textarea 
                                                className="form-control form-control-lg" 
                                                placeholder="Enter Benefits"
                                                id="benefits"
                                                value={product.benefits}
                                                onChange={changeBenefits}
                                                rows="2" 
                                                cols="50"
                                            >
                                                This is the initial text in the textarea.
                                            </textarea> 
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label htmlFor="targetedInsects" className="form-label fw-bolder" >
                                            Targeted Insects
                                            </label>
                                            <textarea 
                                                className="form-control form-control-lg" 
                                                placeholder="Enter Benefits"
                                                id="targetedInsects"
                                                value={product.targetedInsects}
                                                onChange={changeTargetedInsects}
                                                rows="2" 
                                                cols="50"
                                            >
                                                This is the initial text in the textarea.
                                            </textarea> 
                                        </div>
                                        <div className="row">
                                            <h5>Weigths</h5>
                                            <div className="col">
                                                <div className="container">
                                                    <div className="row my-2">
                                                        <h6>1 kg Details</h6>
                                                        <div className="col-sm-4">
                                                            <input
                                                            type="text"
                                                            placeholder="Enter Price"
                                                            value={weight1.price}
                                                            onChange={changePrice1}
                                                            className="form-control form-control-lg"
                                                            /> 
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input
                                                            type="text"
                                                            placeholder="Enter Quantity"
                                                            value={weight1.quantity}
                                                            onChange={changeQuantity1}
                                                            className="form-control form-control-lg"
                                                            /> 
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input
                                                            type="Date"
                                                            placeholder="Enter Expiry Date"
                                                            value={weight1.expirydate}
                                                            onChange={changeExpirydate1}
                                                            className="form-control form-control-lg"
                                                            /> 
                                                        </div>
                                                    </div>
                                                    <div className="row my-2">
                                                        <h6>500 gm Details</h6>
                                                        <div className="col-sm-4">
                                                            <input
                                                            type="text"
                                                            placeholder="Enter Price"
                                                            value={weight2.price}
                                                            onChange={changePrice2}
                                                            className="form-control form-control-lg"
                                                            /> 
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input
                                                            type="text"
                                                            placeholder="Enter Quantity"
                                                            value={weight2.quantity}
                                                            onChange={changeQuantity2}
                                                            className="form-control form-control-lg"
                                                            /> 
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input
                                                            type="Date"
                                                            placeholder="Enter Expiry Date"
                                                            value={weight2.expirydate}
                                                            onChange={changeExpirydate2}
                                                            className="form-control form-control-lg"
                                                            /> 
                                                        </div>
                                                    </div>
                                                    <div className="row my-2">
                                                        <h6>250 gm Details</h6>
                                                        <div className="col-sm-4">
                                                            <input
                                                            type="text"
                                                            placeholder="Enter Price"
                                                            value={weight3.price}
                                                            onChange={changePrice3}
                                                            className="form-control form-control-lg"
                                                            /> 
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input
                                                            type="text"
                                                            placeholder="Enter Quantity"
                                                            
                                                            value={weight3.quantity}
                                                            onChange={changeQuantity3}
                                                            className="form-control form-control-lg"
                                                            /> 
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <input
                                                            type="Date"
                                                            placeholder="Enter Expiry Date"
                                                            
                                                            value={weight3.expirydate}
                                                            onChange={changeExpirydate3}
                                                            className="form-control form-control-lg"
                                                            /> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-outline mb-4 my-3">
                                            <form enctype="multipart/form-data">
                                                <label className="form-label fw-bolder" >
                                                Upload Image :-
                                                </label>
                                                <input  type="file" accept="image/*" onChange={handleImageChange} />
                                            </form>
                                        </div>
                                        <div class="btndiv">
                                            <input
                                                type="button"
                                                value="Add"
                                                className="btn btn-primary mt-2 w-50 fs-5"
                                                onClick={addProductAction}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}