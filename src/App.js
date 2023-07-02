import React, { useState, useEffect } from 'react';
import { Item } from './components/Item';
import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [datarr, setdDatarr] = useState(()=> {
      const saved = localStorage.getItem("hyeta")
      const initialValue = JSON.parse(saved)
      return initialValue || []
    })

    function AddLocalSt(props) {
        setdDatarr((prev) => [...prev, { el: props }])
    }

    useEffect(() => {
        localStorage.setItem('hyeta', JSON.stringify(datarr))
    }, [datarr])

    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('items'));
    //     if (items) {
    //         setItems2(items2);
    //     }
    // }, [items2]);
    useEffect(() => {
        fetch('https://api.stavbers.site/city')
            .then((resp) => resp.json())
            .then((data) => setData(data));
    }, []);
    useEffect(() => {
        document.title = 'rjs-localStorage';
    }, []);

    return (
        <div className='App'>
            {data.map((el) => {
                return <Item key={el.id} {...el} AddLocalSt={AddLocalSt} />;
            })}
        </div>
    );
}

export default App;
