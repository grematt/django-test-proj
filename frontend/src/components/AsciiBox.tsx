import axios from "axios";
import { data_url } from "../App";

interface AsciiProps {
  content: string,
  name: string
  id: number
}

export default function AsciiBox({content, name, id} : AsciiProps) {
  const handleClick = async() => {
    await axios.delete(data_url + id + '/', {
      // reload after request
    }).then(() => window.location.reload());
  }

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
      <button style={{marginBottom: '10px', marginLeft:'auto'}} 
        type='button' className="btn btn-outline-dark btn-sm" onClick={handleClick}>Delete</button>
      <pre style={{marginTop: 'auto'}}>
        {content}
      </pre>
      <div style={{marginTop: 'auto', fontSize:'20px', display:'flex'}}>
        {name}
      </div>
    </div>
  );
}