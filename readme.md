# array-hash-upsert [![Build Status](https://travis-ci.org/ajoslin/array-hash-upsert.svg?branch=master)](https://travis-ci.org/ajoslin/array-hash-upsert)

> Add or update a value in an array/hash pair

## Install

```
$ npm install --save array-hash-upsert
```


## Usage

```js
var Upsert = require('array-hash-upsert')

var array = []
var hash = {}

var upsert = Upsert(array, hash)

upsert({id: 1})
upsert({id: 2})
upsert({id: 1, foo: 'bar'})

console.log(hash) // => {1: {id: 1, foo: 'bar'}, 2: {id: 2}}
console.log(array) // => [{id: 1, foo: 'bar'}, {id: 2}]
```

## API

#### `ArrayHashUpsert(array, hash, [idKey])` -> `upsertFn`

##### array

*Required*
Type: `array`

##### hash

*Required*
Type: `object`

###### idKey

Type: `string`
Default: `'id'`

The key used to tell whether a value exists yet.

#### `upsert(value)`

##### value

*Required*
Type: `object`

Adds the value if its id is not in the hash.

Otherwise, mutates the existing object in the array/hash to match the passed in value.

### Related / Recommended

- [array-key-hash](https://github.com/ajoslin/array-key-hash)

## License

MIT © [Andrew Joslin](http://ajoslin.com)
