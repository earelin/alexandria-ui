'use strict'

const { series } = require('gulp')
const util = require( 'util' )

const exec = util.promisify( require( 'child_process' ).exec )

const BUILD_COMMAND = "npm run build"
const BUILD_CI_COMMAND = "npm ci"
const CLEAN_COMMAND = "npm run clean"
const TEST_COMMAND = "npm test"

function build() {
  return applyCommandToAllSubprojects(BUILD_COMMAND)
}

function buildCi() {
  return applyCommandToAllSubprojects(BUILD_CI_COMMAND)
}

function clean() {
  return applyCommandToAllSubprojects(CLEAN_COMMAND)
}

function test() {
  const environment = process.env
  environment.CI = 'true'

  return applyCommandToAllSubprojectsWithEnv(TEST_COMMAND, environment)
}

function applyCommandToAllSubprojects(command) {
  return Promise.all([
    exec(command, {cwd: `${process.cwd()}/admin`}),
    exec(command, {cwd: `${process.cwd()}/site`})
  ])
}

function applyCommandToAllSubprojectsWithEnv(command, environment) {
  return Promise.all([
    exec(command, {cwd: `${process.cwd()}/admin`, env: environment}),
    exec(command, {cwd: `${process.cwd()}/site`, env: environment})
  ])
}

exports.build = build
exports.ci = buildCi
exports.clean = clean
exports.test = test
exports.default = series(clean, build)
