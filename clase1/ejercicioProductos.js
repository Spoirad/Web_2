let products = [
{
    nombre: "PC",
    marca: "Asus",
    precio : 1200
},
{
    nombre: "Tablet",
    marca: "Samsung",
    precio : 300
},
{
    nombre: "Canon",
    marca: "Canon",
    precio : 650
}
]

function getProduct(){
    return new Promise;
    setTimeout(() => {
        console.log("Promesa resuelta");
    },4000);
}

console.log(getProduct());