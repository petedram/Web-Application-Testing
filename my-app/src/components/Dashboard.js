import React, { useEffect, useState } from "react";
import { Button, Header } from 'semantic-ui-react';
import Display from './Display';


export default function Dashboard(){

const [ballCount, setBallCount] = useState(0);
const [strikeCount, setStrikeCount] = useState(0);
const [foulCount, setFoulCount] = useState(0);
const [hitCount, setHitCount] = useState(0);


// useEffect(() => {
//     console.log('useEffect', ballCount);

//     }, [ballCount]);



const addBall = () => {
    console.log('add ball')
    if (ballCount === 3) {
        setBallCount(0)
        setStrikeCount(0)
    } else {
        setBallCount(ballCount + 1);
    };
    
}

const addStrike = () => {
    console.log('add strike')
    if(strikeCount === 2) {
        console.log('third strike!')
        setStrikeCount(0);
        setBallCount(0);
    } else {
        setStrikeCount(strikeCount +1);
    }
};

const addFoul = () => {
    console.log('add foul')
    setFoulCount(foulCount +1);

    if (strikeCount === 0) {
        setStrikeCount(1);
    } else if(strikeCount === 1) {
        setStrikeCount(2);
    }

};

const addHit = () => {
    console.log('add hit')
    setHitCount(hitCount +1);
    setStrikeCount(0);
    setBallCount(0);
}

return (
    <div>
        <Display ball={ballCount} strike={strikeCount} foul={foulCount} hit={hitCount}/>
        <br />
        <section className='dash_buttons'>
            <Header block>Dashboard</Header>
            <Button title='Ball' onClick={addBall}>Ball</Button>
            <Button title='Strike' onClick={addStrike}>Strike</Button>
            <Button title='Foul' onClick={addFoul}>Foul</Button>
            <Button title='Hit' onClick={addHit}>Hit</Button>
        </section>

    </div>

    );
}
