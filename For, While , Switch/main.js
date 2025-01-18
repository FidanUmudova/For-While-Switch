// 1ci
let a = -5;
let b = 0;
let c = 7;
if ( a> b && a>c) {
    console.log('ənBöyükƏdəd', a);
}else if (b>a && b>c) { 
    console.log('ənBöyükƏdəd', b); 
} else{
    console.log('ənBöyükƏdəd', c);
}


// 2ci
let year=2024;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log("Artıq il");
} else {
    console.log("Adi il");
}


// 3cu
let bal=45
if (bal>90) {
    console.log('A');
}else if(bal> 80 && bal<89){
    console.log('B');
}else if(bal> 70 && bal<79){
    console.log('C');
}else if(bal> 60 && bal<69){
    console.log('D');
}else if(bal<60){
    console.log('F');
}


// 4cu
let eded=0;
if(eded % 2 === 0){
    console.log('eded cutdur');
}else {
    console.log('eded tekdir');
    
}


//5ci
for(let i=0; i <=50; i++){
    if(i% 3 === 0 && i%5 ===0){
        console.log(`${i} FizzBuzz`);
    }
    else if(i % 5 === 0){
        console.log(`${i} Buzz`);
    }
    else if(i% 3 === 0){
        console.log(`${i} Fizz`)
    }
}


//6ci
// let ededdd=7;
// for(let i=1; i<=10; i++){
//     console.log(ededdd*i)
// }
let ededdd=7;
for(let i=1; i<=10; i++){
    switch (i){
        case 1:
            console.log(ededdd*1);
            break;
        case 2:
            console.log(ededdd*2);
            break;
        case 3:
            console.log(ededdd*3);
            break;   
        case 4:
            console.log(ededdd*4);
            break;   
        case 5:
            console.log(ededdd*5);
            break;
        case 6:
            console.log(ededdd*6);
            break;
        case 7:
            console.log(ededdd*7);
            break;
        case 8:
            console.log(ededdd*8);
            break;   
        case 9:
            console.log(ededdd*9);
            break;   
        case 10:
            console.log(ededdd*10);
            break;          
        default:
            break;
    }
}



//7ci
let ededd=5
let sum=0;
for(let i=1; i<=ededd; i++) {
    switch (true) {
        case (i > 0):
            sum += i;
            break;
        default:
            break;
    }
}
console.log(sum);


//8ci
let m=6;
let n=5;
let emeliyyat='bolme'
switch (emeliyyat) {
    case 'toplama':
        console.log('toplama',m+n);
        break;
    case 'cixma':
        console.log('cixma',m-n);
        break;
    case 'vurma':
        console.log('vurma',m*n);
        break;
    case 'bolme':
        console.log('bolme',m/n);
        break;            
    default:
        break;
}
