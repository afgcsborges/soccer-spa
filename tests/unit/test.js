/* eslint-disable no-magic-numbers */
const argv = process.argv.slice(2)

/*
 * Makes the script crash on unhandled rejections instead of silently
 * ignoring them. In the future, promise rejections that are not handled will
 * terminate the Node.js process with a non-zero exit code.
 */
process.on('unhandledRejection', err => {
    throw err
})

const { execSync } = require('child_process')
const path = require('path')

const unit = () => {
    const cleanArgv = argv.filter(arg => arg !== '--unit')

    const command = `npx jest --detectOpenHandles --forceExit -c ${path.join(
        process.cwd(),
        'jest.config.js'
    )} --bail --color ${cleanArgv.join(' ')}`

    execSync(command, {
        stdio: 'inherit'
    })
}

unit()
