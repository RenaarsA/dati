async function iegutDarglietasNoApi() {
let datiNoApi=await fetch('https://fakestoreapi.com/products')
let datiJson=datiNoApi.json;
        console.log(datiJson)
}