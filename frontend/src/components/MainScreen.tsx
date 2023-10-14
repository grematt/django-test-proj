import React from 'react';
import AsciiBox from './AsciiBox';
import NewAsciiForm from './NewAsciiForm';

export default function MainScreen(data: any) {
  

  return (
    <div className='row' style={{justifyContent:'center'}}>
      <NewAsciiForm/>
    </div>
  );
}