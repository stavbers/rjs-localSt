import React, { useState, useEffect } from 'react';
import { Item } from '../components/Item';
function Home() {
    const [data, setData] = useState([]);
    const [datarr, setdDatarr] = useState(() => {
        const saved = localStorage.getItem('hyeta');
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    function AddLocalSt(props) {
        setdDatarr((prev) => [...prev, { el: props }]);
    }

    useEffect(() => {
        localStorage.setItem('hyeta', JSON.stringify(datarr));
    }, [datarr]);
    useEffect(() => {
        fetch('https://api.stavbers.site/city')
            .then((resp) => resp.json())
            .then((data) => setData(data));
    }, []);
    return (
        <div className='App'>
            {data.map((el) => {
                return <Item key={el.id} {...el} AddLocalSt={AddLocalSt} />;
            })}
        </div>
    );
}
export { Home };
