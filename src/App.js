import React, { useState, useEffect } from 'react';
import {Item} from './components/Item'
import './App.css';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.stavbers.site/city')
            .then((resp) => resp.json())
            .then((data) => setData(data));
    }, []);
    useEffect(()=>{document.title = 'rjs-localStorage'},[])

    return (

        <div className='App'>
            {data.map((el) => {
              return  <Item key={el.id} {...el}/>
            })}
        </div>
    );
}

export default App;
