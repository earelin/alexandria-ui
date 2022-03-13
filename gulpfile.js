'use strict'

const { series } = require('gulp')
const util = require( 'util' )

const exec = util.promisify( require( 'child_process' ).exec )

const BUILD_COMMAND = "npm run build"
const CLEAN_COMMAND = "npm run clean"
const TEST_COMMAND = "npm test"

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

function test() {
  const environment = process.env
  environment.CI = true

  return Promise.all([
    exec(TEST_COMMAND, {cwd: `${process.cwd()}/admin`, env: environment}),
    exec(TEST_COMMAND, {cwd: `${process.cwd()}/site`, env: environment})
  ])
}

exports.build = build
exports.clean = clean
exports.test = test
exports.default = series(clean, build)
