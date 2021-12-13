//color change

let btnblue = document.querySelector(".blue");

let btngreen = document.querySelector(".green");

let btnwhite = document.querySelector(".yellow");

let btnred = document.querySelector(".red");

let reset = document.querySelector("button");


let circlebtn = document.querySelectorAll(".circles");
// let col1 = () => {
//     for(let i=0;i<circlebtn.length;i++){
//         circlebtn[i].style.background = "blue";
//     }
// };

// let col2 = () => {
//     for(let i=0;i<circlebtn.length;i++){
//         circlebtn[i].style.background="green";
//     }
// };


// let col3 = () => {
//     for(let i=0;i<circlebtn.length;i++){
//         circlebtn[i].style.background="white";
//     }
// };

// let col4 = () => {
//     for(let i=0;i<circlebtn.length;i++){
//         circlebtn[i].style.background="green";
//     }
// };


let colarr = ["blue","red","yellow","green"];

let getRandom = (min,max) => {
    return Math.floor((Math.random() *max) +min);
}
let itr = Math.floor((Math.random() * 4) + 0);


// //get random color
// let color = "";
// let getRandomCol = () => {
//     for(let i=0;i<colarr.length;i++){
//         color+= colarr[itr-1];
//     }
//     return color;
// };

//color fill logic
let colorfil = ()=> {
    for(let i=0;i<circlebtn.length;i++){
        circlebtn[i].style.background = colarr[getRandom(0,4)];
        //console.log(colarr[itr]);
    }
};

colorfil();

//button logic
let bnone = () => {
    for(let i=0;i<circlebtn.length;i++){
        if(circlebtn[i].style.background === "blue"){
            circlebtn[i].style.display = "block";
        }else{
            circlebtn[i].style.display = "none";
        }
    }
};

let gnone = () => {
    for(let i=0;i<circlebtn.length;i++){
        if(circlebtn[i].style.background === "green"){
            circlebtn[i].style.display = "block";
        }else{
            circlebtn[i].style.display = "none";
        }
    }
};


let rnone = () => {
    for(let i=0;i<circlebtn.length;i++){
        if(circlebtn[i].style.background === "red"){
            circlebtn[i].style.display = "block";
        }else{
            circlebtn[i].style.display = "none";
        }
    }
};

let ynone = () => {
    for(let i=0;i<circlebtn.length;i++){
        if(circlebtn[i].style.background === "yellow"){
            circlebtn[i].style.display = "block";
        }else{
            circlebtn[i].style.display = "none";
        }
    }
};

//color click logic
btnblue.addEventListener("click",bnone);
btnred.addEventListener("click",rnone);
btngreen.addEventListener("click",gnone);
btnwhite.addEventListener("click",ynone);



// let rcol = () => {
// for(let i=1;i<circlebtn.length;i++){
//     for(let j=1;j<itr;j++){
//         circlebtn[j].style.background = "blue";
//     }
// }
// };




// let rcol1 = () => {
//     for(let i=1;i<circlebtn.length;i++){
//         for(let j=1;j<itr;j++){
//             circlebtn[j].style.background = "green";
//         }
//     }
// };

// rcol();
// rcol1();

//mouse leave logic
let rst = () => {
    for(let i=0;i<circlebtn.length;i++){
        circlebtn[i].style.display = "block";
    }
};

//reset button logic
let rest = () => {
    colorfil();
    for(let i=0;i<circlebtn.length;i++){
        if(circlebtn[i].style.display === "none"){
            rst();
            colorfil();
        }
    }
};

//mouse leave logic
btnblue.addEventListener("mouseleave",rst);
btngreen.addEventListener("mouseleave",rst);
btnred.addEventListener("mouseleave",rst);
btnwhite.addEventListener("mouseleave",rst);
reset.addEventListener("click",rest);
