function Image({url, label}) {
  return (
    <>
      <h1>{label}</h1>
      <img  src={url} 
            alt={label} 
            width="350" 
            height="350"/>
    </>
  );
}

export default Image;
