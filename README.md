```
$ node --import=./import.mjs x.cjs

RESOLVE file:///Users/isaacs/dev/isaacs/node-main/require-esm-hook/x.cjs {
  conditions: [ 'node', 'import', 'node-addons' ],
  importAssertions: {},
  parentURL: undefined
}
resolve result [Object: null prototype] {
  url: 'file:///Users/isaacs/dev/isaacs/node-main/require-esm-hook/x.cjs',
  format: 'commonjs'
}
LOAD file:///Users/isaacs/dev/isaacs/node-main/require-esm-hook/x.cjs { format: 'commonjs', importAssertions: {} } x.cjs false
in x.cjs
in a.cjs
in b.cjs

$ node --version

v21.0.0-pre

node git sha: dc1c50b6e53b06b5d9ef2368dc0e356a2094614e
```
