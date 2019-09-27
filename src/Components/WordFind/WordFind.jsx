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
        let k = 0;
        let l = 0;
        console.log('column', column);

        let matrix = [[]];
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
                    
                    if (i === 0 && j < puzzLength){
                        matrix[0].push(input[k])
                        console.log('if (i === 0 && j < puzzLength): matrix[0]', matrix[0]);
                        // continue
                    }
                    else if (i > 0 && j === 0){
                        matrix.push([])
                        l ++
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
                    console.log('k', k, ';', 'input[k]', input[k], ';' );
                    console.log('l', l, ';', 'matrix[l]', matrix[l], ';' );
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

        
        

        // for (let i = 0; i < row; i++) {
        //     for (let j = 0; j < column; j++) {
        //         if (j == 0 && i == 0) {
        //             return (
        //             <br />
        //             )
        //         }
        //         else {
        //             console.log('i', input[i], 'j', input[j]);
        //         }
                
        //     }
        //     // console.log('');
        // }
        
    } // end function puzzleDom

    switch () {
        this.setState({ displayPuzzle: false, })
    }

    // check to see if word is in matrix
    wordCheck (matrix) {
        console.log('matrix[5]', matrix[5]);
        let matrixString = matrix[5].join('');
        console.log('matrixString', matrixString);
        let arrayOfTestWords = ['BROKER', 'WBRG', 'GAS'];
        let match = matrixString.match('BROKER');
        console.log('match:', match);


        for (let i=0; i<arrayOfTestWords.length; i++){
            if (matrixString.match(arrayOfTestWords[i])){
                return (
                    console.log('arrayOfTestWords', arrayOfTestWords)
                )
            }
        }
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