import React, { Component } from 'react';

class WordOutput extends Component {
    render(){

        let puzzle = this.props.puzzle.split(' ');

        let PuzzleOut = puzzle.map((letter) => {

            if (letter == "A"){
                return (
                    <li>{letter}</li>
                )
            }
            else {
                return (
                    <li>"Not a"</li>
                )
            }
            
        });

        return(
            
            <ul>{PuzzleOut} </ul>
        )
    }
}

export default WordOutput;