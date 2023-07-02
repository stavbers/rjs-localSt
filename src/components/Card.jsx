function Card(props){
  const {id, name, imgFull, country_code, population, info} = props.el
  const cardStyle = {
    width: '300px',
    padding: '10px',
    margin: '5px',
    border: '2px solid #000',
    borderRadius: '5px'
  }

  return  (
    <div id={id}  className="card" style={cardStyle}>
    <img src={imgFull} alt={name} style={{width: '100%'}}/>
        <p>{name}</p>
        <p>{country_code}</p>
        <p>{population}</p>
        <p>{info}</p>
    </div>
  )
}

export {Card}