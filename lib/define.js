/**
 * Define task
 * @function define
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
'use strict'

const {spawn: {npx}} = require('pon-task-command')

/** @lends define */
function define (options = {}) {
  const {
    filename = 'CHANGELOG.md',
  } = options
  return npx(
    ...[
      'auto-changelog', '--package', '--output', filename
    ].filter(Boolean)
  )
}

module.exports = define
