interface AsciiProps {
  content: string,
  name: string
}

export default function AsciiBox({content, name} : AsciiProps) {

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
      <pre style={{marginTop: 'auto'}}>
        {content}
      </pre>
      <div style={{marginTop: 'auto', fontSize:'20px'}}>
        {name}
      </div>
    </div>
  );
}