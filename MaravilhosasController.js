const repository = require('./maravilhosasRepository')

const getAll = () => {
  return repository.maravilhosas
}

const add = (mulher) => {
  if (!mulher.id) {
    mulher.id = Math.random().toString(36).substr(-8)
  }
  getAll().content.push(mulher)

  return mulher
}

const remove = (id) => {
  let todasMaravilhosas = getAll()

  getAll().content = todasMaravilhosas.content.filter((mulher) => {
    return mulher.id !== id
  })
}

module.exports = {
  getAll,
  add,
  remove
}
