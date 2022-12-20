const https = require ('https')

// import https from 'https'


class Service {
  /**
   * COMENTÁRIO 01:
   * @param {*} url 
   * @returns response dados da requisição na API
   * 
   * CONSOME API: "https://swapi.dev/api/planets/1/"
   * HTTP REQUEST: GET
   * RETORNA: Dados da requisição 
   */

  async mackeRequest(url) {
    return new Promise((resolve, reject) => {
      https.get(url, response =>{
        response.on("data", data => resolve(JSON.parse(data)))
        response.on("error", reject)
      })
    })
  }

  async getPlanets(url){
    const result = await this.mackeRequest(url)

    return {
      name: result.name,
      surfaceWater: result.surface_water,
      appearedIn: result.films.length
    }
  }

}

module.exports = Service