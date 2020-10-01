document.addEventListener("DOMContentLoaded", ()=>{
    machineLaver = {
        type : "Machine à laver",
        marque : "Samsung",
        consommation : 116 + "kWh",
        capacite : 25 + " kg",
        prix : 599.99 + " €",
        image : "./asset/samsung.jpg"
    }
    
    const h1 = document.querySelector('h1')
    const element = document.querySelector("ul")
    element.innerHTML += `<li itemprop="name">${machineLaver.type}</li>`
    element.innerHTML += `<li itemprop="manufacturer">Marque ${machineLaver.marque}</li>`
    element.innerHTML += `<li itemprop="weight">Capacité ${machineLaver.capacite}</li>`
    element.innerHTML += `<li itemprop="hasEnergyConsumptionDetails">Consommation ${machineLaver.consommation}</li>`
    element.innerHTML += `<li itemprop="price">Prix ${machineLaver.prix}</li>`
    element.innerHTML += `<li itemprop="image"><p><img src="${machineLaver.image}" alt="Machine à laver grise"></p></li>`
    h1.addEventListener("click", ()=>{
    document.body.classList.toggle('gris')
    })
})