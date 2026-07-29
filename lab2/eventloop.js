// const f1= () => {
//     console.log("f1");
// }

// const f2= () => {
//     console.log("f2");
// }

// const f3= () => {
//     console.log("f3");
// }   

// const main = () => {
//     console.log("main");
//     f1();
//     f2();
//     f3();
//     console.log("end");
// }   

// main();







// const f1= () => {
//     f2();
//     console.log("f1");
// }

// const f2= () => {
//     f3();
//     console.log("f2");
// }

// const f3= () => {
//     console.log("f3");
// }   

// const main = () => {
//     console.log("main");
//     // f1();
//     setTimeout(f2, 0);
//     // setInterval(f2, 1000);
//     setImmediate(f3);
//     process.nextTick(f1);
//     console.log("end");
// }   

// main();









import {writeFile} from 'fs/promises'

const F1=  () => {
    F2();
    console.log('F1');
};
const F2= () => {
    F3();
    console.log('F2');
};
const F3= () => {
    console.log('F3');
};
const writeData = async()=> {
    await writeFile('note.txt', "I am fs module");
    console.log("file written")
}
const main = () => {
    console.log("main");
    writeData();
    // F1();
    setTimeout(F2, 0); //not counted in normal execution due to setTimeout
   // setInterval(F2, 1000); //ctrl+c for stopping the interval
   setImmediate(F3);
   process.nextTick(F1);
    console.log("end");
    new Promise((resolve, reject) => {
        console.log("I am promise1");
    });
    new Promise((resolve, reject) => {
        console.log("I am promise2");
    });
};

main();





