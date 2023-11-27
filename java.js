let kamateli = document.querySelector('.kamateli')
let noli = document.querySelector('.noli')
let asd = 1
let h1 = document.querySelector('.es')
let gif = document.querySelector('.gif')


kamateli.addEventListener('click', () => {
    noli.innerHTML = asd++
    getData();
})


async function getData(){
    h1.innerHTML = "loading..."



    let res = await fetch("https://api.adviceslip.com/advice")
    let data = await res.json()

    h1.innerHTML = data.slip.advice
    


    console.log(data.slip.advice)
}