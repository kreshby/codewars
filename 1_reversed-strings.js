let newA;

function reversedStrings (b) {

    if (b.length == 0) {
        newA = b;
    } else {
        for (let i = (b.length -1); i >=0 ; i--) {

        
       
            if (i == (b.length -1)) {
                newA = b[i];
             
            } else {
                newA = newA + b[i];
                
            }
            
        }

    }
   
    return newA
}


//console.log(reversedStrings(a));

console.log(reversedStrings(""));

