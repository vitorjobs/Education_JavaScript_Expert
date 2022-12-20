
/**
 * FIBONACCI = O próximo valor correspondente à soma dos dois valores anteriores
 * dado n° 3
 * 0,1,1
 * dado n° 5
 * 0,1,1,2,3
 */
class Fibonacci {
  *execute(input, current = 0, next = 1 ){
    // console.count('execute!')
    if(input === 0){
      return 0
    }

    // Returna o Valor
    yield current
    // Deleta a função, mais não retorna o valor
    yield* this.execute(input-1, next, current + next)
  }

}

module.exports = Fibonacci