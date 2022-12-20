const Service = require ('./service')
const sinon = require ('sinon')
const BASE_URL_1 = "https://swapi.dev/api/planets/1/"
const BASE_URL_2 = "https://swapi.dev/api/planets/2/"
const mocks = {
    totooine: require('./mocks/tatooine.json'),
    alderaan: require('./mocks/alderaan.json'),
}

;(async () => {

    /**
     * COMENTÁRIO 01:
     * FAZ O CONSUMO DA API DIRETO PELA INTERNET - NÃO RECOMENDADOS
     * ao consumir a API e retornar os dados POPULA OS arquivos totooine.json e alderaan.json | node service.test.js > mocks/alderaan.json
     */
    // COMENTÁRIO 01:
    // const service = new Service()
    // const withoutStub = await service.mackeRequest(BASE_URL_2)
    // console.log(JSON.stringify(withoutStub))

    /**
     * COMENTÁRIO 02:
     * UTILIZAÇÃO DE MOCKS
     * Toda Vez que a URL x for chamadada
     * Deve resolver com o conteúdo de X arquivo
     */

    // COMENTÁRIO 02:    
    const service = new Service()
    const stub    = sinon.stub(service, service.mackeRequest.name)

    stub 
      .withArgs(BASE_URL_1)
      .resolves(mocks.totooine)
    stub 
      .withArgs(BASE_URL_2)
      .resolves(mocks.alderaan)

    
      {
        const response = await service.mackeRequest(BASE_URL_1)
        console.log('response', response)
      }


})()
