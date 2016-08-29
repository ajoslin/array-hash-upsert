'use strict'

var assign = require('xtend/mutable')

module.exports = function arrayHashUpsert (array, hash, idKey) {
  idKey = idKey || 'id'

  return function upsert (value) {
    if (!value) return

    var id = value[idKey]
    if (id == null) return

    if (id in hash) {
      assign(hash[id], value)
    } else {
      array.push(value)
      hash[id] = value
    }
  }
}
