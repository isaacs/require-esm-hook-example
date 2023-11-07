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

$ node --import=./import.mjs a.cjs

RESOLVE file:///Users/isaacs/dev/isaacs/node-main/require-esm-hook/a.cjs {
  conditions: [ 'node', 'import', 'node-addons' ],
  importAssertions: {},
  parentURL: undefined
}
resolve result [Object: null prototype] {
  url: 'file:///Users/isaacs/dev/isaacs/node-main/require-esm-hook/a.cjs',
  format: 'commonjs'
}
LOAD file:///Users/isaacs/dev/isaacs/node-main/require-esm-hook/a.cjs { format: 'commonjs', importAssertions: {} } a.cjs true
returning commonjs source from load hook
load result {
  format: 'commonjs',
  source: <Buffer 63 6f 6e 73 6f 6c 65 2e 65 72 72 6f 72 28 27 69 6e 20 61 2e 63 6a 73 27 29 0a 72 65 71 75 69 72 65 28 27 2e 2f 62 2e 63 6a 73 27 29 0a>,
  shortCircuit: true
}
in a.cjs
node:internal/modules/esm/translators:103
  throw new ERR_INVALID_RETURN_PROPERTY_VALUE(
        ^

TypeError [ERR_INVALID_RETURN_PROPERTY_VALUE]: Expected array buffer, or typed array to be returned for the "source" from the "transformSource" function but got null.
    at assertBufferSource (node:internal/modules/esm/translators:103:9)
    at stringify (node:internal/modules/esm/translators:118:3)
    at createCJSModuleWrap (node:internal/modules/esm/translators:268:12)
    at ModuleLoader.<anonymous> (node:internal/modules/esm/translators:317:10)
    at callTranslator (node:internal/modules/esm/loader:285:14)
    at ModuleLoader.<anonymous> (node:internal/modules/esm/loader:289:24)
    at new ModuleJob (node:internal/modules/esm/module_job:65:26)
    at #createModuleJob (node:internal/modules/esm/loader:302:17)
    at ModuleLoader.getJobFromResolveResult (node:internal/modules/esm/loader:260:34)
    at ModuleLoader.getModuleJobSync (node:internal/modules/esm/loader:246:17) {
  code: 'ERR_INVALID_RETURN_PROPERTY_VALUE'
}

Node.js v21.0.0-pre
$ node --version

v21.0.0-pre

node git sha: dc1c50b6e53b06b5d9ef2368dc0e356a2094614e
```
