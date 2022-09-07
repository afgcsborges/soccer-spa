/* eslint-disable no-magic-numbers */
import { act } from 'react-dom/test-utils'

// eslint-disable-next-line no-promise-executor-return
export const waitStateUpdate = () => act(() => new Promise(resolve => setTimeout(resolve, 50)))
