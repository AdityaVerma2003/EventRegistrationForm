
import React, {useState } from 'react';
import { useForm } from "../Hooks/useForm";
import { validate } from '../Hooks/validate';
import "./EventRegistration.css"

const EventRegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    age: '',
    isAttendingWithGuest: false,
    guestName: '',
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(initialValues, validate);

  const [submit,setSubmit] = useState(false)

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">  
        <h1 className="display-5 my-5 text-center">Event Registration Form</h1>
    <form onSubmit={handleSubmit}>
    <div className="loginsignup-fields">
      <div >
        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
        <input
          type="text"
          name="name"
          className="form-control" 
          id="exampleInputEmail1"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control" 
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          name="age"
          className="form-control" 
          value={values.age}
          onChange={handleChange}
        />
        {errors.age && <p>{errors.age}</p>}
      </div>
      <div className="loginsignup-agree">
        <label>Are you attending with a guest?</label>
        <input
          type="checkbox"
          name="isAttendingWithGuest"
          className="form-check-input"
          checked={values.isAttendingWithGuest}
          onChange={handleChange}
        />
      </div>
      {values.isAttendingWithGuest && (
        <div>
          <label>Guest Name</label>
          <input
            type="text"
            name="guestName"
            className="form-control" 
            value={values.guestName}
            onChange={handleChange}
          />
          {errors.guestName && <p>{errors.guestName}</p>}
        </div>
      )}
      </div>

      <button type="submit" value={submit} className="btn btn-primary " onClick={()=>{setSubmit(true)}} >Submit</button>
      {submit?(
        <div className='formData'>
          <h3>Form Data:</h3>
          <p>Name: {values.name}</p>
          <p>Email: {values.email}</p>
          <p>Age: {values.age}</p>
          <p>Attending with Guest: {values.isAttendingWithGuest ? 'Yes' : 'No'}</p>
          {values.isAttendingWithGuest && <p>Guest Name: {values.guestName}</p>}
        </div>
      ):" "}
    </form>
    </div>
    </div>
  );
};

export default EventRegistrationForm;
