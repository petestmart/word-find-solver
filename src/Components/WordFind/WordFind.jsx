import React, { Component } from 'react';
import WordOutput from './WordOutput';
import './WordFind.css'
import Button from '@material-ui/core/Button';


class WordFind extends Component {

    state = {
        displayPuzzle: false,
    }

    puzzleDisplay = (input) => {

        let puzzLength = input.length;
        let row = Math.floor(Math.sqrt(puzzLength));
        console.log('row', row);
        let column = Math.ceil(Math.sqrt(puzzLength));
        let k = 0;
        let l = 0;
        console.log('column', column);

        let matrix = [[]];
        
        if (row * column < puzzLength) {
            row = column;
        }

        // Convert String into a two dimensional grid
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {

                if (k < puzzLength) {
                    // s[i][j] = input.charAt(k);

                    input[i] = input[k]
                    input[j] = input[k]

                    if (i === 0 && j < puzzLength) {
                        matrix[0].push(input[k])
                        console.log('if (i === 0 && j < puzzLength): matrix[0]', matrix[0]);
                        // continue
                    }
                    else if (i > 0 && j === 0) {
                        matrix.push([])
                        l++
                        matrix[l].push(input[k])
                        console.log('else if (i > 0 && j === 0): matrix[l]', matrix[l]);
                        // continue
                    }
                    else {
                        matrix[l].push(input[k])
                        console.log('else matrix[l].push(input[k]): matrix[l]', matrix[l]);
                        // continue
                    }

                    console.log('letter is', input[i], 'at (', i, ',', j, '); Check (input[j]:', input[j], ';');
                    console.log('k', k, ';', 'input[k]', input[k], ';');
                    console.log('l', l, ';', 'matrix[l]', matrix[l], ';');
                    console.log('matrix', matrix);
                    k++;
                    console.log('_________________________________')
                }
            }

        }
        this.setState({ displayPuzzle: true, });
        this.puzzleDom(matrix);
        this.wordCheck(matrix);
    } // end function puzzleDisplay

    puzzleDom = (matrix) => {
        console.log('puzzleDom', matrix);

        matrix.map((letter, i) => {
            return (
                <span key={i}>letter</span>
            )

        })


    } // end function puzzleDom

    switch() {
        this.setState({ displayPuzzle: false, })
    }

    // check to see if word is in matrix
    wordCheck(matrix) {
        console.log('matrix', matrix);
        let arrayOfTestWords = ['GAS', 'SAG', 'BROKER', 'RIPE', 'BLEU', 'BOY', 'WOOD', 'GARAGE'];
 
        for (let i = 0; i < matrix.length; i++) {
            let matrixString = matrix[i].join('');
            console.log('matrixString[i]', matrixString);
            let stringReverse = matrixString.split('').reverse().join('')
            console.log('stringReverse', stringReverse);
            console.log('arrayOfTestWords.length', arrayOfTestWords.length);
            console.log('i loop#', i, 'a');

            for (let j = 0; j < arrayOfTestWords.length; j++) {
                if (matrixString.match(arrayOfTestWords[j])) {
                    console.log('i loop#', i, 'b');
                    console.log('j loop#', j, 'c');
                    console.log('loop match:', matrixString.match(arrayOfTestWords[j]))

                }
                if (stringReverse.match(arrayOfTestWords[j])) {
                    console.log('i loop#', i, 'd');
                    console.log('j loop#', j, 'e');
                    console.log('reverse loop match', stringReverse.match(arrayOfTestWords[j]))
                }
            }
            console.log('_________________________________________');
        }
    }

    render() {

        let puzzleData = "A T L L F U V D E Y O B Z V D W F B N E D X G H E A N P O R O T V B Y L A L G T D K E A A D O O W D R A H H E L A S P Z A P P E A K H R O F X W L X O W B R G A S O M M B R O K E R M C X G X O U I E O K M Y K W A O E F M R S L S N L R S I I S N P D B C E Q P R I U K U Q T E G R I P E B O Q U I Q S C B P A S D Q P E T X J P S E S B R K R R E U E T T D Z D K L L B J B C B B L E U B I U R F L N H S F H T K R K G H Y A M O J H D N Q A J S Q P L R M U";
        let puzzle = puzzleData.split(' ');

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
                    {this.puzzleDom}
                    {/* {puzzle} */}
                    <WordOutput
                        puzzle={puzzleData}
                    />

                </p>

            )
        }
    }
}

export default WordFind;