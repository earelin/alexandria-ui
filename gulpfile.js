'use strict'

const { series, parallel } = require('gulp')
const util = require( 'util' )

const exec = util.promisify( require( 'child_process' ).exec )

const BUILD_COMMAND = "npm run build"
const CLEAN_COMMAND = "npm run clean"

function build() {
  return Promise.all([
    exec(BUILD_COMMAND, {cwd: `${process.cwd()}/admin`}),
    exec(BUILD_COMMAND, {cwd: `${process.cwd()}/site`})
  ])
}

function clean() {
  return Promise.all([
    exec(CLEAN_COMMAND, {cwd: `${process.cwd()}/admin`}),
    exec(CLEAN_COMMAND, {cwd: `${process.cwd()}/site`})
  ])
}

exports.build = build
exports.clean = clean
exports.default = series(clean, build)
