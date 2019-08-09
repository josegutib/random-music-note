// const nota = ['A','B','C','D','E','F','G']; // 0 a 6 (*7)
// const bemososShow = ['','#','b']; // 0 a 2 (*3)
// const bemosos = ['', 'sos', 'b']

const notas = [
  {
    file: 'img/A.gif',
    show: 'A'
  },
  {
    file: 'img/Ab.gif',
    show: 'Ab'
  },
  {
    file: 'img/Asos.gif',
    show: 'A#'
  },
  {
    file: 'img/B.gif',
    show: 'B'
  },
  {
    file: 'img/Bb.gif',
    show: 'Bb'
  },
  {
    file: 'img/C.gif',
    show: 'C'
  },
  {
    file: 'img/Csos.gif',
    show: 'C#'
  },
  {
    file: 'img/D.gif',
    show: 'D'
  },
  {
    file: 'img/Db.gif',
    show: 'Db'
  },
  {
    file: 'img/Dsos.gif',
    show: 'D#'
  },
  {
    file: 'img/E.gif',
    show: 'E'
  },
  {
    file: 'img/Eb.gif',
    show: 'Eb'
  },
  {
    file: 'img/F.gif',
    show: 'F'
  },
  {
    file: 'img/Fsos.gif',
    show: 'F#'
  },
  {
    file: 'img/G.gif',
    show: 'G'
  },
  {
    file: 'img/Gb.gif',
    show: 'Gb'
  },
  {
    file: 'img/Gsos.gif',
    show: 'G#'
  },
]

const parrafoNota = document.getElementById('nota');
const parrafoRecord = document.getElementById('record');
const illustrationDiv = document.getElementById('illustration');
var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
let fontFamilys = ['cursive','fantasy','inherit','monospace','sans-serif','serif'];



const randomize = (n) => Math.floor(Math.random()*(n+1))


let backgroundColorChange = function(){
  document.body.style.backgroundColor = colorArray[randomize(49)];
}

let parraphColorChange = function(){
  parrafoNota.style.color = colorArray[randomize(49)];
}

let fontFamilyChange = function(){
  parrafoNota.style.fontFamily = fontFamilys[randomize(5)];
}

function calcularNota() {
  `${nota[randomize(6)]}${bemosos[randomize(2)]}`;
}

let popularP = function(nota){
  parrafoNota.innerHTML =  nota
}

let illustrationChange = function(notaArchivo){
  illustrationDiv.style.backgroundImage = `url('img/${notaArchivo}.gif')`;
}


function getRandomNote(notas) {
  return notas[randomize(notas.length - 1)]
}

setInterval(function() {
  const nota = getRandomNote(notas)
  parrafoNota.innerHTML =  nota.show
  illustrationDiv.style.backgroundImage = `url('${nota.file}')`;
}, 1000)
