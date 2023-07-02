import React, { useState, useEffect } from 'react';
import {Preloader} from '../components/Preloader'
import {Card} from '../components/Card'
import '../App.css';
function Page() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    // console.log(items)
    

    useEffect(() => {
        const el = JSON.parse(localStorage.getItem('hyeta'));
        if (el) {
            setItems(el);
            setLoading(false);
        }
    }, []);


    return <div className='App'>
      {loading ? <Preloader /> : items.map(card => <Card key={card.el.id} {...card} />)  }
    </div>;
}
export { Page };
