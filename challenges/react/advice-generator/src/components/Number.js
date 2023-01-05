const Number = (props) => {
    return (
            <h1 className="advice-num">Advice #<span style={ props.visibility ? {opacity: 1} : {opacity: 0} }>{props.countAdvice}</span></h1>
    );
}

export default Number;