function isBalanced(s) { // {[()]}
    // Write your code here
    let stk = [];
    for(let i =0; i<s.length; i++){
        if(stk.length ){ // element is there
            let lastElem = stk[stk.length - 1];
            if(s[i] === ')' && lastElem === '('){
                stk.pop();
                continue;
            }else if(s[i] === '}' && lastElem === '{'){
                stk.pop();
                continue;
            }else if(s[i] === ']' && lastElem === '['){
                stk.pop();
                continue;
            }else{
                stk.push(s[i]);
            }
        }else{
            stk.push(s[i]);
        }
    }
    if(stk.length){
        return 'YES';
    }else{
        return 'NO';
    }
}