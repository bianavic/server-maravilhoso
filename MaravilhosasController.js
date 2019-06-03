const repository = require('./MaravilhosasRepository')

const get = () => {
  return repository.maravilhosas
}

const add = (mulher) => {
  mulher.id = Math.random().toString(36).substr(-8)
  get().maravilhosas.push(mulher)
}

const remove = (id) => {
  let maravilhosasQueFicaram = get()

  get().maravilhosas = maravilhosasQueFicaram.comidas.filter((mulher) => {
    return mulher.id !== id
  })
}

module.exports = {
  get,
  add,
  remove
}
