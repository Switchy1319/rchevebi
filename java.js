let kamateli = document.querySelector('.kamateli')
let noli = document.querySelector('.noli')
let h1 = document.querySelector('.es')
let loader = document.querySelector('.loader')


h1.innerHTML = getData();
noli.innerHTML = getData()


kamateli.addEventListener('click', () => {
    getData();
})



async function getData(){
    h1.innerHTML = ""
    loader.classList.add("my");
    noli.innerHTML = "wait"

    let res = await fetch("https://api.adviceslip.com/advice")
    let data = await res.json()
    loader.classList.remove("my");
    h1.innerHTML = data.slip.advice
    noli.innerHTML = data.slip.id


    console.log(data.slip.id)
}
