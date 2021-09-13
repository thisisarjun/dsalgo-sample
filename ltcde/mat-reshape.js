var matrixReshape = function(mat, r, c) {
    
  let n = mat[0].length;
  
  let m = mat.length;
  
  if((m*n) !== (r*c)){
      return mat;
  }
      
  let nrow = 0, ncol = 0, narr = [];
  for(let i = 0; i < m; i++){
      for(let j = 0; j<n; j++){        
          if(ncol === c){
              nrow++;
              ncol = 0;
          }
          if(!narr[nrow]){
            narr[nrow] = []  
          }
          narr[nrow][ncol] = mat[i][j]
          ncol++;
      }
  }
  
  return narr;
};

let op = matrixReshape(
  [[1,2],[3,4]], 1, 4);

  console.log('op :>> ', op);