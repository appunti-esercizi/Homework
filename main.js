let x= 1111;

let one= x/2
let restone = String(parseInt(x % 2));
console.log(one, restone);

let two= one/2;
let resttwo = String(parseInt(one % 2));
console.log(two, resttwo);

let three= two/2;
let restthree = String(parseInt(two % 2));
console.log(three, restthree);

let four= three/2;
let restfour = String(parseInt(three % 2));
console.log(four, restfour);

let five= four/2;
let restfive = String(parseInt(four % 2));
console.log(five, restfive);

let six= five/2;
let restsix = String(parseInt(five % 2));
console.log(six, restsix);

let seven= six/2;
let restseven = String(parseInt(six % 2));
console.log(seven, restseven);

let eight= seven/2;
let resteight = String(parseInt(seven % 2));
console.log(eight, resteight);

let nine= eight/2;
let restnine = String(parseInt(eight % 2));
console.log(nine, restnine);

let ten= nine/2;
let restten = String(parseInt(nine % 2));
console.log(ten, restten);

let eleven= ten/2;
let resteleven = String(parseInt(ten % 2));
console.log(eleven, resteleven);

let inbasetwo =  resteleven + restten + restnine + resteight + restseven + restsix + restfive + restfour + restthree + resttwo + restone;

console.log(inbasetwo);




