import '@testing-library/jest-dom'

import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { configure } from 'enzyme'
import includes from 'lodash/includes'

configure({ adapter: new Adapter() })

global.fetch = jest.fn().mockImplementation(() => Promise.resolve({}))

Object.defineProperty(window, 'matchMedia', {
    writable: true
})

Object.defineProperty(window, 'matchMedia', {
    value: jest.fn().mockImplementation(query => ({
        addEventListener: jest.fn(),
        addListener: jest.fn(),
        dispatchEvent: jest.fn(),
        matches: false,
        media: query,
        onchange: null,
        removeEventListener: jest.fn(),
        removeListener: jest.fn()
    })),
    writable: true
})

window.subscribe = () => true
window.unsubscribe = () => true

const ignoreError = error => {
    let message = ''

    // eslint-disable-next-line lodash/prefer-lodash-typecheck
    if (error instanceof Error) {
        message = error?.message
    } else {
        message = error
    }

    if (
        // React Dom warning provoked by antd (waiting for fixes in the next releases)
        includes(message, 'Warning: validateDOMNesting(...)')
    ) {
        return true
    }

    return false
}

// eslint-disable-next-line prefer-destructuring
const error = console.error

console.error = function (message) {
    if (ignoreError(message)) return

    error.apply(console, arguments)
    // eslint-disable-next-line lodash/prefer-lodash-typecheck
    throw message instanceof Error ? message : new Error(message)
}

// eslint-disable-next-line prefer-destructuring
const warn = console.warn

console.warn = function (message) {
    if (ignoreError(message)) return

    warn.apply(console, arguments)
    // eslint-disable-next-line lodash/prefer-lodash-typecheck
    throw message instanceof Error ? message : new Error(message)
}
