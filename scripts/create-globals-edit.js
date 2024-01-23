const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

const CWD = process.cwd()
const CSS_ROOT = `src/styles`

const original = readFileSync(path.join(CWD, CSS_ROOT, 'globals.css'), {
  encoding: 'utf-8',
})

const editable = original.replaceAll(
  /(.*--.+:)[ ]*(.+[ ]+.+%[ ]+.+%);/g,
  '$1 hsl($2);'
)

writeFileSync(path.join(CWD, CSS_ROOT, 'globals.edit.css'), editable)

console.log('Created globals.edit.css! Please edit it instead of globals.css.')
