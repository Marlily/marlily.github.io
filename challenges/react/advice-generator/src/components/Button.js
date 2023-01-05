import img from '../images/icon-dice.svg';

const Button = (props) => {

    const action = () => {
        props.setVisibility(false);

        fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((data) => {
            props.setCounter(data.slip.id);
            props.setAdvice(data.slip.advice);
            setTimeout(() => {
                props.setVisibility(true);
            }, 500);
            
        });


    }

    return (
        <button className="btn" onClick={action}>
            <img src={img} alt="icon"/>
        </button>
    );
}

export default Button;