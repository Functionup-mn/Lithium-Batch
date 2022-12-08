const axios = require("axios")
const coinModel = require("../Models/coinModel")

const getCoins = async function(req, res){
try{    
    let options = {
        method: "get",
        url: "https://api.coincap.io/v2/assets",
    
         Headers:{'Authorization':'Bearer d0c3dff5-c77f-45c3-acfc-51d6bfa1b264'}
    }
    let results = await axios(options)
    console.log(results);
    let getData = results.data
  for(let i=0; i<getData.data.length; i++){
    let data = {}
    data.symbol = getData.data[i].symbol
    data.name = getData.data[i].name
    data.marketCapUsd = getData.data[i].marketCapUsd
    data.priceUsd = getData.data[i].priceUsd

    let createData = await coinModel.findOneAndUpdate(
        {symbol: data.symbol, name: data.name},
        {
         symbol: data.symbol,
         name: data.name,
         marketCapUsd: data.marketCapUsd,
         priceUsd: data.priceUsd
        } ,{upsert: true})

    }
    let sortData = getData.data.sort(function(a, b){
        return a.changePercent24Hr - b.changePercent24Hr
    })
    res.status(200).send({status: true, data: sortData})
}catch(err){
    res.status(500).send({status: false, message: err.message})
}
}


//Your key: d0c3dff5-c77f-45c3-acfc-51d6bfa1b264

module.exports.getCoins = getCoins
