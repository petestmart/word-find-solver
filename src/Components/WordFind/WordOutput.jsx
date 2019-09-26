import React, { Component } from 'react';

class WordOutput extends Component {

    // puzzleGrid = (x) => {
    //     for (let i = 0; i < 15; i++) {
    //         <li>"PuzzleGrid"</li>
    //     }
    // }

    render() {

        let puzzle = this.props.puzzle.split(' ');

        let searchTerm = 'A';

        // let PuzzleGrid = this.puzzleGrid(puzzle);

        let PuzzleOut = puzzle.map((letter) => {
            return (
                <li>{letter}</li>
            )
            
            // if (letter === searchTerm){
            //     return (
            //         <li>{letter}</li>
            //     )
            // }
            // else {
            //     return (
            //         <li>.</li>
            //     )
            // }

        });

        

        // let PuzzleOut = puzzle.join('').includes(searchTerm);

        // let PuzzleOut = 

        return (

            <div>
                {/* <ul>{PuzzleGrid}</ul> */}
                <ul>{PuzzleOut}</ul>
            </div>
        )
    }
}

export default WordOutput;