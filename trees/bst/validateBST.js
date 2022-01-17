
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/*
* @param {TreeNode} root
* @return {boolean}
*/
var isValidBST = function(root) {

  function validateBST(node, lb, rb){
    
    if(!node){      
          return true;
    }
      
    if(node.val > lb && node.val < rb){
      if(!validateBST(node.left, lb, node.val)){
          return false;
      }
      if(!validateBST(node.right, node.val, rb)){          
          return false;
      } 
      return true;
    }else{
        return false;
    }
  }
  return validateBST(root, -Infinity, +Infinity);
};

let nTree = new TreeNode(0, undefined, -1);
console.log('nTree :>> ', nTree);
let op = isValidBST(nTree);
console.log('op :>> ', op);