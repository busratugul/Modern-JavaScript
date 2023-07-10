
//Step 1
function getCelsius(f) {
    const celcius = ((f - 32) * 5)/ 9;
    return celcius
}
console.log(getCelsius(32)); //0

//Arrow Function
 
const getCelsius1 =  f => ((f - 32) * 5) / 9 ;
console.log(`The tempature is ${getCelsius1(32)}\xB0C.`);


//Step 2

function minMax(arr) {

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    return{
        min, //eğer değişken adı ile aynı olursa direkt böyle    yazarız.
        max
    }
}
console.log(minMax([1,2,3,4,5,6,7,8,9])); //{min: 1, max: 9}

//Arrow Function
const minMax1 = (arr) => ({
    min: Math.min(...arr),
    max: Math.max(...arr)
});
 
console.log(minMax1([1, 2, 3, 4, 5]));


//Step 3
((length, width) => {
    const area = length * width ;

    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area} `

    console.log(output);
})(20,5)



