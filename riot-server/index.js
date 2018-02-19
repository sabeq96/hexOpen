const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios')

const riot_api = require ('./JSONIK.json')
const champs = require('./CHAMPIONS.json')

app.use(cors())

// setInterval(()=>{
//     var url = 'https://eun1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&champListData=skins&tags=skins&dataById=true&api_key='
//     var key = ''
//     axios.get(url + key)
//         .then(res => console.log(res.data))
//         .catch(err => console.log(err))

// },1000*60*60*24)

//http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg
console.log(champs.champions.length)


app.get('/champions', function (req, res) {
    res.send(champs)
})

app.get('/skins', function (req, res) {
    res.send(riot_api)
})
  

app.listen(3001,()=>console.log('Listening on 3001'))
