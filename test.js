'use strict'

const test = require('tape')
const Upsert = require('./')

test('default key', function (t) {
  const array = []
  const hash = {}
  const upsert = Upsert(array, hash)

  upsert({id: 1})
  t.deepEqual(array, [{id: 1}])
  t.deepEqual(hash, {1: {id: 1}})

  upsert({id: 2})
  t.deepEqual(array, [{id: 1}, {id: 2}])
  t.deepEqual(hash, {1: {id: 1}, 2: {id: 2}})

  upsert({id: 1, foo: 'bar'})
  t.deepEqual(array, [{id: 1, foo: 'bar'}, {id: 2}])
  t.deepEqual(hash, {1: {id: 1, foo: 'bar'}, 2: {id: 2}})

  t.end()
})

test('custom key', function (t) {
  const array = []
  const hash = {}
  const upsert = Upsert(array, hash, 'name')

  upsert({name: 1})
  t.deepEqual(array, [{name: 1}])
  t.deepEqual(hash, {1: {name: 1}})

  upsert({name: 2})
  t.deepEqual(array, [{name: 1}, {name: 2}])
  t.deepEqual(hash, {1: {name: 1}, 2: {name: 2}})

  upsert({name: 1, foo: 'bar'})
  t.deepEqual(array, [{name: 1, foo: 'bar'}, {name: 2}])
  t.deepEqual(hash, {1: {name: 1, foo: 'bar'}, 2: {name: 2}})

  t.end()
})

test('ignore unexpected values', function (t) {
  const array = []
  const hash = {}
  const upsert = Upsert(array, hash)

  upsert({id: 1})
  upsert({foo: 1})
  upsert(null)
  upsert(1)
  upsert(undefined)

  t.deepEqual(array, [{id: 1}])
  t.deepEqual(hash, {1: {id: 1}})

  t.end()
})
