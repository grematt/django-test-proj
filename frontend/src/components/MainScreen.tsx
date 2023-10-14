import React from 'react';
import AsciiBox from './AsciiBox';
import NewAsciiForm from './NewAsciiForm';

export default function MainScreen(data: any) {
  const renderBoxes = (data: any) => {
    data = data.data
    console.log(data)
    let boxes = []
    for (let i = 0; i < data.length; i++) {
      boxes.push(<AsciiBox content={data[i].content} name={data[i].title} key={i}/>);
    }
    return boxes;
  }

  return (
    <div className='row' style={{justifyContent:'center'}}>
      <NewAsciiForm/>
    </div>
  );
}