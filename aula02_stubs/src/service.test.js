const Service = require ('./service')
const BASE_URL_1 = "https://swapi.dev/api/planets/1/"
const BASE_URL_2 = "https://swapi.dev/api/planets/2/"




;(async () => {

    /**
     * FAZ O CONSUMO DA API DIRETO PELA INTERNET - NÃO RECOMENDADOS
     * ao consumir a API e retornar os dados POPULA OS arquivos totooine.json e alderaan.json | node service.test.js > mocks/alderaan.json
     */
    const service = new Service()
    const withoutStub = await service.mackeRequest(BASE_URL_2)
    console.log(JSON.stringify(withoutStub))

})()
