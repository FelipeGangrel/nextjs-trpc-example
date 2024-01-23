const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

const CWD = process.cwd()
const CSS_ROOT = 'src/styles'

const file = readFileSync(path.join(CWD, CSS_ROOT, 'globals.edit.css'), {
  encoding: 'utf-8',
})

const fixed = file.replaceAll(/(.*--.+:).*hsl\((.+)\);/g, '$1 $2;')

writeFileSync(path.join(CWD, CSS_ROOT, 'globals.css'), fixed)
