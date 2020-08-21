const target = "https://www.facebook.com/stforv2"
const axios = require("axios")
const cheerio = require("cheerio")

const getHtml = async () => {
    try{
        return await axios.get(target);
    }catch(e){
        console.log(e);
    }
}

getHtml().then(html => {
    
})