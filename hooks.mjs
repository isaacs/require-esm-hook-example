import { readFileSync } from 'fs'
import { basename } from 'path'

export const load = async (url, context, nextLoad) => {
  console.error(
    'LOAD',
    url,
    context,
    basename(url),
    basename(url) === 'a.cjs'
  )
  if (basename(url) === 'a.cjs') {
    console.error('returning commonjs source from load hook')
    const result = {
      format: 'commonjs',
      source: readFileSync('a.cjs'),
      shortCircuit: true,
    }
    console.error('load result', result)
    await new Promise(r => setTimeout(r, 1000))
    return result
  } else {
    console.error('default load')
    const result = await nextLoad(url, context)
    console.error('load result', result)
    return result
  }
}

export const resolve = async (url, context, nextResolve) => {
  console.error('RESOLVE', url, context)
  const result = await nextResolve(url, context)
  console.error('resolve result', result)
  return result
}
