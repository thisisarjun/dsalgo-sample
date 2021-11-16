class TrieNode{
  
  constructor(val){
    this.value = val;
    this.isWordEnd = false;
    this.children = {};
    this.parent = null;
  }
  
  getWord(){
    let ptr = this;
    let ch = [];
    while(ptr && ptr.value){
      ch.unshift(ptr.value);
      ptr = ptr.parent;
    }
    return ch.join('');
  }
  
}


class Trie{
  constructor(){
    this.root = new TrieNode(null);
  }

  insert(str){
    let ptr = this.root;
    for(let i = 0; i < str.length; i++){
      if(!ptr.children[str[i]]){
        
        let newNode = new TrieNode(str[i]);
        ptr.children[str[i]] = newNode;
        newNode.parent = ptr;
      }

      ptr = ptr.children[str[i]];

      if(i === str.length - 1){
        ptr.isWordEnd = true;
      }
    }
  }

  search(str){
    let ptr = this.root;
    let isFound = false;
    let i = 0;
    for( ;i< str.length; i++){
      
      if(!ptr.children[str[i]]){
        isFound = false;
        break;
      }else if(ptr.children[str[i]].isWordEnd){
        isFound = true;
        break;
      } else{
        ptr = ptr.children[str[i]];
      }      
    }
    
    return isFound;
  }

  getPrefixWords(prefix){
    let output = [];
    let ptr = this.root;
    for(let i = 0; i < prefix.length; i++){
      if(ptr.children[prefix[i]]){
        ptr = ptr.children[prefix[i]];
      }else{ // word is not present
        return output;
      }
    }
    getAllWords(ptr, output);
    return output;

    function getAllWords(node, arr){
      if(node.isWordEnd){
        return arr.unshift(node.getWord());
      }
      for(let i in node.children){
        getAllWords(node.children[i], arr);
      }
    }
  }






}

let tr = new Trie();
tr.insert('fuck');
console.log('tr :>> ', tr.root.children['f'].children['u'].children['c'].children['k']);