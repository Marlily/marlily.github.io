import { useState, useEffect, useRef } from "react";
import { motion, useAnimate   } from "framer-motion"

const Square = (props) => {

    const[sign, setSign] = useState('');
    const[active, setActive] = useState('');

    const [scope, animate] = useAnimate();



    useEffect( () => {
        if (props.clear) {
            animate('span', {opacity: 0}, {duration: 0.2});
            setTimeout(()=>{setSign('');}, 200)
            
            setActive('');
            
        }
    }, [props.clear])

    const action = () => {

        props.setClear(false);

        animate('span', {opacity: 1});

        if(props.winnerBtns.length >2) {
            return
        }

        if(props.moves > 0 && sign !== '') {
            return;
        } 
        
        if(props.player === "Player one") {
            setSign('X');
            props.setPlayerOneMoves( x => [...x, props.itemNum ] );

        }

        if(props.player === "Player two") {
            setSign('O');
            props.setPlayerTwoMoves( x => [...x, props.itemNum ] );
        }
     
        props.player === "Player one" ? props.setPlayer('Player two') : props.setPlayer('Player one');

        props.setMoves(props.moves +1 );
       
    }

    useEffect(()=> {
        for(let i of props.winnerBtns) {
            if(props.itemNum == i) {
                setActive('winner');
            }
        }
    }, [props.winnerBtns])

    return (
        <button ref={scope} className={`square ${active}`} onClick={ action } > 
            
                <span  >{sign}</span>


        </button>
    )
}

export default Square;
