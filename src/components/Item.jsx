import React from 'react'

function Item(props){
const {id, img, name, population, info} = props
  const elmStyle = {
    border: '1px solid #000',
    width: '300px',
    padding: '10px',
    margin: '5px'
  }
  const myBtn = {
    with: '100px',
    padding: '5px',
    textTransform: 'upperCase',
    color: '#fff',
    backgroundColor: 'red'
  }

return (
  <div id={id} style={elmStyle}  className="elem">
  <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{population}</p>
      <p>{info}</p>
      <button style={myBtn} onClick={(event)=> {console.log(id, name, population, info)}}>like</button>
  </div>
)
}

export {Item}