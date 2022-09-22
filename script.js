async function iegutDarglietasNoApi() {
let datiNoApi=await fetch('https://fakestoreapi.com/products')
let datiJson=datiNoApi.json;
        console.log(datiJson)
}

async function iegutWaifu() {
        let datiNoApi=await fetch('https://api.waifu.pics/many/type/category')
        let datiJson=datiNoApi.json;
                console.log(datiJson)
        }