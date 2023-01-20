const musicDirector = document.querySelector("#musicDirector");
const accompanist = document.querySelector("#accompanist");
const sopranos = document.querySelector("#sopranos");
const altos = document.querySelector("#altos");
const tenors = document.querySelector("#tenors");
const basses = document.querySelector("#basses");
const directorSelect = document.querySelector(".directorSelect")
const accompanistsSelect = document.querySelector(".accompanistsSelect")
const sopranosSelect = document.querySelector(".sopranosSelect")
const altosSelect = document.querySelector(".altosSelect")
const tenorsSelect = document.querySelector(".tenorsSelect")
const bassesSelect = document.querySelector(".bassesSelect")

musicDirector.addEventListener("click" , () => {
    directorSelect.classList.toggle("view"); 
})

accompanists.addEventListener("click" , () => {
    accompanistsSelect.classList.toggle("view"); 
})

sopranos.addEventListener("click" , () => {
    sopranosSelect.classList.toggle("view"); 
})

altos.addEventListener("click" , () => {
    altosSelect.classList.toggle("view"); 
})

tenors.addEventListener("click" , () => {
    tenorsSelect.classList.toggle("view"); 
})

basses.addEventListener("click" , () => {
    bassesSelect.classList.toggle("view"); 
})