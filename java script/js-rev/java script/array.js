const arr = [1, 2, 3, 4, 5];
//Packed SMI Elements

arr.push(6.0);
//Packed Double Elements

arr.push("3");
//Packed Elements

arr[10] = 11
//Hole Elements

console.log(arr);
console.log(arr.length);
console.log(arr[10]);

const arrTwo = [1, 2, 3, 4, 5];
console.log(arrTwo[2]);

//SMI > Double > Packed
//H_SMI > Hole_Double > Hole_Packed


const arrThree = new Array(3);
//just 3 holes. HOLEY_SMI-ELEMENTS

arrThree[0] = '1'; //HOLEY_ELEMENTS
arrThree[1] = '2'; //HOLEY_ELEMENTS
arrThree[2] = '3'; //HOLEY_ELEMENTS


const arrFour = []
arrFour.push(1);//Packed Elements
arrFour.push(2);//Packed Elements
arrFour.push(3);//Packed Elements