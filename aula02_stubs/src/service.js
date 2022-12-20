const https = require ('https')

// import https from 'https'


class Service {
  // http://swapi.dev/api/planets/1/

  async mackeRequest(url) {
    return new Promise((resolve, reject) => {
      https.get(url, response =>{
        response.on("data", data => resolve(JSON.parse(data)))
        response.on("error", reject)
      })
    })

  }
}

module.exports = Service