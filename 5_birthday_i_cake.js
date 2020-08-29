/**
 * It's your Birthday. Your colleagues buy you a cake. The numbers of candles on the cake is provided (x). 
 * Please note this is not reality, and your age can be anywhere up to 1,000. Yes, you would look a mess.

As a surprise, your colleagues have arranged for your friend to hide inside the cake and burst out. 
They pretend this is for your benefit, but likely it is just because they want to see you fall over covered in cake. Sounds fun!

When your friend jumps out of the cake, he/she will knock some of the candles to the floor. 
If the number of candles that fall is higher than 70% of total candles (x), the carpet will catch fire.

You will work out the number of candles that will fall from the provided string (y). 
You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in y, 
with the alphabetical position of each odd indexed character in y to give the string a total.

example: 'abc' --> a=97, b=2, c=99 --> y total = 198.

If the carpet catches fire, return 'Fire!', if not, return 'That was close!'.

 */

//https://www.ascii-code.com/

//let a = "abcde";
//console.log(a.charCodeAt());
//console.log(a.split(""));
let total;

// в этом варианте был баг если повторялись буквы т.к indexOf находит индекс первого вхождения и как следствие неверный индекс
// function cake(x, y){ 

//     let newY;
//     let total;
//     let asiiCode = [];
    
//     newY = y.split("");
//     console.log(newY);

//     for (let i of newY){
//          console.log(newY.indexOf(i));
        
//         newY.indexOf(i) % 2 == 1 ? asiiCode.push(i.charCodeAt()-96)
//         :
//         asiiCode.push(i.charCodeAt());               

//     }

//     total = asiiCode.reduce((total, amount) => total + amount);  //sum 
//     console.log("total=" + total);
//     console.log(asiiCode);   

//     console.log("x*0.7 =" + parseFloat(x*0.7));
//     return parseFloat((total))> parseFloat(x*0.7) ? 'Fire!' : 'That was close!';
    

//  }

function cake(x, y){

    let newY;
    let total;
    let asiiCode = [];
    
    newY = y.split(""); //разбивает объект String на массив строк путём разделения строки указанной подстрокой
    console.log(newY);

    for (let i = 0;i < newY.length; i++){ // проходим по всему массиву
         console.log(newY[i]);
        
        i % 2 == 1 ? asiiCode.push(newY[i].charCodeAt()-96) // если значение идекса нечетное, тогда вычисляем его буквенную позицию
        :
        asiiCode.push(newY[i].charCodeAt());    // иначе возращаем числовое значение из таблицы   ASCII        

    }

    total = asiiCode.reduce((total, amount) => total + amount);  //sum 

    console.log(asiiCode); 
    console.log("total=" + total);
    console.log("x*0.7 =" + parseFloat(x*0.7));
    return parseFloat((total))> parseFloat(x*0.7) ? 'Fire!' : 'That was close!';
    

 }


console.log(cake(679, "odddkllpsv"));


