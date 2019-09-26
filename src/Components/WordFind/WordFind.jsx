import React, { Component } from 'react';
import WordOutput from './WordOutput';
import './WordFind.css'
import Button from '@material-ui/core/Button';


class WordFind extends Component {

    state = {
        displayPuzzle: false,
    }
    // let row = [];
    // let column = [];

    puzzleDisplay = (input) => {

        let puzzLength = input.length;
        let row = Math.floor(Math.sqrt(puzzLength));
        console.log('row', row);
        let column = Math.ceil(Math.sqrt(puzzLength));
        let k = 0
        console.log('column', column);
        // let l = input[i];
        
        // let s = new char[row][column]; 

        
        if (row * column < puzzLength) {
            row = column;
        }

        // Convert String into a two dimensional grid
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                
                if (k < puzzLength){
                    // s[i][j] = input.charAt(k);
                    input[i] = input[k]
                    input[j] = input[k]
                    
                    console.log('i is', input[i], 'at i', i, ';', 'j is', input[j], 'at j', j, ';');
                    console.log('k', k, ';', 'input[k]', input[k], ';' );
                    k++; 
                }
            }
        }

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; i++) {
                if (j == 0) {
                    break
                }
                if (i == 0) {
                    break
                }
                console.log('i', input[i], 'j', input[j]);
            }
            console.log('');
        }
        this.setState({ displayPuzzle: true, })
    } // end function puzzleDisplay

    switch () {
        this.setState({ displayPuzzle: false, })
    }

    render() {

        let puzzleData = "A T L L F U V D E Y O B Z V D W F B N E D X G H E A N P O R O T V B Y L A L G T D K E A A D O O W D R A H H E L A S P Z A P P E A K H R O F X W L X O W B R G A S O M M B R O K E R M C X G X O U I E O K M Y K W A O E F M R S L S N L R S I I S N P D B C E Q P R I U K U Q T E G R I P E B O Q U I Q S C B P A S D Q P E T X J P S E S B R K R R E U E T T D Z D K L L B J B C B B L E U B I U R F L N H S F H T K R K G H Y A M O J H D N Q A J S Q P L R M U";
        // let puzzleData = "A T L L F U V D E Y O B Z V D W";
        let puzzle = puzzleData.split(' ');
        // let puzzleSplice;

        if (this.state.displayPuzzle === false) {
            return (
                <p>
                    <Button
                        onClick={() => this.puzzleDisplay(puzzle)}
                        
                    >Run Program</Button>
                    {/* {puzzle} */}
                    <WordOutput
                        puzzle={puzzleData}
                    />

                </p>
            )
        }
        else {
            return (
                <p>
                    <Button
                        onClick={() => this.switch()}
                    >Hide</Button>
                    {this.puzzleDisplay}
                    {/* {puzzle} */}
                    <WordOutput
                        puzzle={puzzleData}
                    />

                </p>

            )
        }


        // puzzle.map((letter, i) => {

        //     if (i < Math.floor(Math.sqrt(puzzle.length))) {

        //         row.push({ letter })
        //         console.log('row', row)
        //     }
        //     if (i === Math.floor(Math.sqrt(puzzle.length))) {

        //         column.push(row);
        //         console.log('column', column);
        //         let puzzleSplice = puzzle.splice(0, Math.floor(Math.sqrt(puzzle.length)))
        //         console.log('spliced puzzle', puzzle)
        //         puzzleDisplay(puzzleSplice)
        //     }
        //     if (puzzle.length < Math.floor(Math.sqrt(puzzle.length))){
        //         row.push({letter})

        //     }



        // })



    }
}

export default WordFind;