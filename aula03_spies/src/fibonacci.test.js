const Fibonacci = require('./fibonacci')
const sinon = require('sinon')
const assert = require('assert')

 ;
  (async () => {

    /**
     * COMENTÁRIO 01:
     * A Função do SPY é analisar o comportamento da função
     */
    {
      const fibonacci = new Fibonacci()
      const spy = sinon.spy(fibonacci, fibonacci.execute.name)

      // Generators retornam uma função que tem o método .next de três formas: 
      // - Função .next | For Await | rest/spread
      // Código antigo = fibonacci.execute(3)

      for await(const i of fibonacci.execute(3)){}

      // VAI SEMPRE COMEÇAR DO ZERO !
      const expectedCallCount = 4   

      // FAZ A CONTAGEM DAS CHAMADAS
      // console.log("callcount", spy.callCount)
      assert.deepStrictEqual(spy.callCount, expectedCallCount)
    }

    {
      const fibonacci = new Fibonacci()
      const spy = sinon.spy(fibonacci, fibonacci.execute.name)
      const [...results] = fibonacci.execute(5)

      const {args} = spy.getCall(2)
      const expectedResult = [0, 1, 1, 2, 3]
      const expectedParams = Object.values({
        input: 3,
        current: 1,
        next: 2
      })

      assert.deepStrictEqual(args, expectedParams)
      assert.deepStrictEqual(results, expectedResult)

    }
  })()