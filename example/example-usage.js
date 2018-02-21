'use strict'

const pon = require('pon')
const ponTaskChangelog = require('pon-task-changelog')

;(async () => {
  let run = pon({
    changelog: ponTaskChangelog()
  })

  run('changelog')
}).catch((err) => console.error(err))
