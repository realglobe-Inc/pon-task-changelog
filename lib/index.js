/**
 * Pon task to generate CHANGELOG
 * @module pon-task-changelog
 * @version 2.0.2
 */

'use strict'

const define = require('./define')

const lib = define.bind(this)

Object.assign(lib, define, {
  define
})

module.exports = lib
