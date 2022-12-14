import React from 'react';
import Alphabet from '../component/alphabet';

function Rainbow() {
    return (
        <div>
            <h1>Rainbow</h1>
            <Alphabet color="violet">R</Alphabet>
            <Alphabet color="indigo">A</Alphabet>
            <Alphabet color="blue">I</Alphabet>
            <Alphabet color="purple">N</Alphabet>
            <Alphabet color="yellow">B</Alphabet>
            <Alphabet color="orange">O</Alphabet>
            <Alphabet color="red">W</Alphabet>
        </div>
    );
}

export default Rainbow;