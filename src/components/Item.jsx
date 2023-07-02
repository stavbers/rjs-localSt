import React from 'react';
import { elmStyle, myBtn } from '../Style';
function Item(props) {
    const { id, img, name, population, info, AddLocalSt } = props;
    // const [elem, setElem] = useState([]);

    return (
        <div id={id} style={elmStyle} className='elem'>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{population}</p>
            <p>{info}</p>
            <button
                style={myBtn}
                onClick={() => {
                  AddLocalSt(props)
                }}
            >
                like
            </button>
        </div>
    );
}
export { Item };
