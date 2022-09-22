async function iegutDarglietasNoApi() {
let datiNoApi=await fetch('adrese')
let datiJson=datiNoApi.json;
        console.log(datiJson)
}