import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  editEntreprise } from "../JS/actions/indexE";
import './EditProfil.css'
import { Link } from "react-router-dom";
    const EditProfileEntreprise = () => 
{
      const entreprise = useSelector((state) => state.entrepriseReducer.entreprise);
    //   const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [phoneNumber , setPhone] = useState()
    const [mobileNumber,setMobil] =useState()
    const [adress,setAdress]=useState() 
    const [raisonSocial,setRaisonSocial]= useState()
    const [logo,setLogo]=useState()
    const [nbreEmploye,setNbreEmploye]=useState()
    const [description,setDescription]=useState()
    const dispatch = useDispatch();
    const ent = {
        // name,
        email,
        phoneNumber,
        mobileNumber,
        adress,
        raisonSocial,
        logo,
        nbreEmploye,
        description,

    }

  // const entrepriseId = useSelector((state) => state.entrepriseId);
  // useEffect(() => {
  //     setentreprisetest(entrepriseId);
  // }, [entrepriseId]);

  return (
    <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
      <div className="col-md-3 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src="https://bootdey.com/img/Content/avatar/avatar7.png" /><span className="font-weight-bold">{entreprise.name}</span></div>
      </div>
      <div className="col-md-5 border-right">
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-right">Modifier Profile </h4>
          </div>
          <div className="row mt-3">
            <div className="col-md-12"><label className="labels">Raison Social</label><input type="text" className="form-control" onChange={(e)=>setRaisonSocial(e.target.value)} defaultValue={entreprise.raisonSocial} /></div>
            <div className="col-md-12"><label className="labels">Email</label><input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} defaultValue={entreprise.email} /></div>
            <div className="col-md-12"><label className="labels">Adresse</label><input type="text" className="form-control" onChange={(e)=> setAdress(e.target.value)} defaultValue={entreprise.adress} /></div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6"><label className="labels">Phone Number</label><input type="number" className="form-control" onChange={(e)=> setPhone(e.target.value)} defaultValue={entreprise.phoneNumber} /></div>
            <div className="col-md-6"><label className="labels">Mobile Number</label><input type="number" className="form-control" onChange={(e)=> setMobil(e.target.value)} defaultValue={entreprise.mobileNumber} /></div>
          </div>
                  
        </div>
      </div>
      <div className="col-md-4">
      <br/><br/><br/>
        <div className="row mt-3">
            {/* <div className="col-md-12"><label className="labels">Raison Social</label><input type="text" className="form-control" onChange={(e)=>setRaisonSocial(e.target.value)} defaultValue={entreprise.raisonSocial} /></div> <br /> */}
            <div className="col-md-12"><label className="labels">Nombre employé</label><input type="text" className="form-control" onChange={(e)=>setNbreEmploye(e.target.value)} defaultValue={entreprise.nbreEmploye} /></div>
            <div className="col-md-12"><label className="labels">Description</label><input type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)} defaultValue={entreprise.description} /></div>
        </div>
        <Link to="/ProfileEntreprise">
          <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={ dispatch(editEntreprise(entreprise._id, ent))}>Enregistrer</button></div>
        </Link>
        
      </div>
      

    </div>
  </div>



  );
};

export default EditProfileEntreprise;
