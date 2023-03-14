// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));


import './styles/style.css'
import {base, list, frameworks,libs, result} from "./data/hbsData";
import taskOne from './template/taskOne.hbs';
import taskSecond from './template/taskSecond.hbs';
import taskThird from './template/taskThird.hbs';
import taskFourth from './template/taskFourth.hbs';
import taskHw from './template/taskHw.hbs';

const rootEl = document.querySelector('#root');

const markup = taskOne(base);
rootEl.insertAdjacentHTML('beforeend', markup);

const markupSecond = taskSecond(list);
rootEl.insertAdjacentHTML('beforeend', markupSecond);

const markupThird = taskThird(frameworks);
rootEl.insertAdjacentHTML('beforeend', markupThird);

const markupFourth = taskFourth(libs);
rootEl.insertAdjacentHTML('beforeend', markupFourth);


// -----------Homework-------------------------


const form = document.querySelector('#form');
const markupResult = taskHw(result);
form.insertAdjacentHTML('beforeend', markupResult);

// const markupHome = `<div> 
//                       <h2>Result</h2>
//                       <input type='text' id='result'></input> 
//                    </div>`;
// form.insertAdjacentHTML('beforeend', markupHome);
                   
const inputEl = document.querySelector('#input');
const btnEl = document.querySelector('button');
const resultEl = document.querySelector('#result');

inputEl.addEventListener('input', handleMakeSpan);
inputEl.addEventListener('focus', () => { resultEl.value = ""; inputEl.value = ""; })
btnEl.addEventListener('click', handleMakeSubmit);

function handleMakeSpan(e) {
    localStorage.setItem("input", e.currentTarget.value);
   }

function handleMakeSubmit(e) {
    e.preventDefault();
    resultEl.value = localStorage.getItem("input");
    localStorage.clear();
}

