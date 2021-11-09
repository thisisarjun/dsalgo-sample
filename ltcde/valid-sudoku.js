/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
  let hash = {}, currVal;
  for(let i = 0; i < 9; i++){
      hash = {};        
      for(let j = 0; j < 9; j++){
          currVal = board[i][j]
          if(currVal <= 0 || currVal > 9){
              return false;
          }
          if(hash[currVal]){
              return false
          }
          if(currVal > 0 && currVal < 10){
              hash[currVal] = true;    
          }            
      }
  }
  
  for(let j = 0; j < 9; j++){
      hash = {};        
      for(let i = 0; i < 9; i++){
          currVal = board[i][j]
          if(currVal <= 0 || currVal > 9){
              return false;
          }
          if(hash[currVal]){
              return false
          }
          if(currVal > 0 && currVal < 10){
              hash[currVal] = true;    
          }
      }
  }  
  hash = {};        
  for(let i = 0; i < 9; i++){      
      for(let j = 0; j < 9; j++){
          currVal = board[i][j]
          let idx = Math.ceil( (i+1)/ 3  )
          let idy = Math.ceil( (j+1)/ 3  )
          if(!hash[idx + '_' + idy]){
              hash[idx + '_' + idy] = [];
          }          
          if(hash[idx + '_' + idy].indexOf(currVal) >= 0){
              return false
          }else{
              if(currVal > 0 && currVal < 10){
                hash[idx + '_' + idy].push(currVal);
              }
              
          }
      }
  }
  
  return true;
};

let board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
let op = isValidSudoku(board);
console.log('op :>> ', op);