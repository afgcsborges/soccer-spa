/* eslint-disable no-useless-escape */
'use strict'

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test'
process.env.NODE_ENV = 'test'
process.env.PUBLIC_URL = ''

const argv = process.argv.slice(2)
const args = require('yargs').argv

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
    throw err
})

const { execSync } = require('child_process')
const path = require('path')

const unit = () => {
    const cleanArgv = argv.filter(
        arg => arg !== '--e2e' && arg !== '--unit' && arg !== '--test' && arg !== '--feature' && arg !== '--silent'
    )

    let command = `npx jest --detectOpenHandles --forceExit -c ${path.join(
        process.cwd(),
        'jest.config.js'
    )} --bail --color ${cleanArgv.join(' ')}`

    /**
     * Runs a test file individually
     * https://jestjs.io/docs/cli
     *  */

    if (args.test) {
        command = `${command} ${args.test}`
    }

    execSync(command, {
        stdio: 'inherit'
    })
}

unit()
