import React from 'react';
import axios from "axios";
import { data_url } from '../App';

export default function NewAsciiForm() {
  let [image, setImage] = React.useState('');
  let [name, setName] = React.useState('');

  const handleSubmit = async() => {
    try {
      await axios.post(data_url, {
        title: name,
        content: image
      });
    } catch (error) {
      console.error('Error submitting new ASCII art:', error);
    }
  };
  const handleImgChange = (event: any) => {
    setImage(event.target.value);
  };

  const handleNameChange = (event: any) => {
    setName(event.target.value)
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      margin: '10px',
      border: '2px solid black',
      borderRadius: '10px',
      padding: '15px',
      flexDirection: 'column'
      }}>
      <h2 style={{marginBottom: 'auto'}}>Add ASCII Image</h2>
      <form style={{marginBottom: 'auto'}}>
        <div className="form-group">
          <label>ASCII Image</label>
          <textarea className="form-control" value={image} onChange={handleImgChange}></textarea>
        </div>
        <div className="form-group">
          <label>Image Name</label>
          <input className="form-control" placeholder="Enter Name" value={name} onChange={handleNameChange}/>
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}