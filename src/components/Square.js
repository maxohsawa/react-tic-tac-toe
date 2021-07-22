import {useState} from 'react';

const Square = ({id, player, newState}) => {

    const [color, setColor] = useState(null);
    const [status, setStatus] = useState(null);

    const xo = ['O','X'];
    const colors = ['red','yellow'];

    const handleClick = (e) => {
        setColor(colors[player]);
        e.target.style.background = colors[player];
        newState(id);
        e.target.value = e.target.id;
        setStatus(xo[player]);
    }

    return (
        <button onClick={handleClick}>
        <h1>{status}</h1>
        </button>
    );
}

export default Square;