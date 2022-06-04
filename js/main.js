const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');

let a1 = parseInt(b1.innerHTML);
let a2 = parseInt(b2.innerHTML);
let a3 = parseInt(b3.innerHTML);

let ta;

let first = new Promise((resolve, reject) => {
    setTimeout( () => {
            ta = a1;
            a1 = a2;
            a2 = ta;
            resolve(console.log(a2));
    }, 3000)
})
first.then(() => {
    setTimeout( () => {
        b1.innerHTML = a1;
        b2.innerHTML = a2;
        ta = a1;
        a1 = a2;
        a2 = ta;
        resolve(console.log(a2));
    }, 3000)
})
first.then(()=>{
    console.log("done")
    resolve();
})