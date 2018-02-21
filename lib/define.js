/**
 * Define task
 * @function define
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
'use strict'

const conventionalChangelogCore = require('conventional-changelog-core')
const amkdirp = require('amkdirp')
const path = require('path')
const fs = require('fs')

/** @lends define */
function define (options = {}) {
  const {
    filename = 'CHANGELOG.md',
    releaseCount = 5
  } = options

  async function task (ctx) {
    const {logger} = ctx
    await amkdirp(path.dirname(filename))
    await new Promise((resolve, reject) => {
      const write = fs.createWriteStream(filename)
      conventionalChangelogCore({releaseCount})
        .pipe(write)
      write.on('close', resolve)
      write.on('error', reject)
    })
    logger.debug(`File generated: ${filename}`)

  }

  return Object.assign(task,
    // Define sub tasks here
    {}
  )
}

module.exports = define
