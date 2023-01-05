import { useState } from 'react';
import Number from './Number';
import Advice from './Advice';
import Button from './Button';
import img from '../images/pattern-divider-desktop.svg';

const Wrapper = () => {

    const [advice, setAdvice] = useState('Be yourself.');
    const [counter, setCounter] = useState('0');
    const [visibility, setVisibility] = useState(true);

    return (
        <section className="wrapper">
            <Number countAdvice={counter} visibility={visibility}/>
            <Advice adviceText={advice} visibility={visibility}/>
            <img className="img-line" src={img} alt="line" />
            <Button setAdvice={setAdvice} setCounter={setCounter} setVisibility={setVisibility}/>
        </section>
    );
}

export default Wrapper;