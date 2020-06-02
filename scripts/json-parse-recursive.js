/**
 * This script can be used to recursively parse a Bloom localForage file into readable json.
 *
 * Example, copy a local-forage.json file into the current directory and then run:
 * node json-parse-recursive.js local-forage.json local-forage-cleaned.json
 */

const fs = require('fs')
const path = require('path')

const infile = process.argv[2]
const outfile = process.argv[3]

if (!infile) {
  console.error('please provide an input filename')
  process.exit(1)
}

if (!outfile) {
  console.error('please provide an output filename')
  process.exit(1)
}

const parseJSON = target => {
  if (!target) {
    return target
  }
  if (typeof target === 'string') {
    try {
      const parsed = JSON.parse(target)
      if (typeof parsed !== 'string') {
        return parseJSON(parsed)
      } else {
        return parsed
      }
    } catch (ex) {
      return target
    }
  } else if (typeof target === 'object') {
    const keys = Object.keys(target)
    return keys.reduce((m, k) => {
      m[k] = parseJSON(target[k])
      return m
    }, {})
  } else {
    return target
  }
}

try {
  const fileContent = fs.readFileSync(path.join(process.cwd(), infile), { encoding: 'utf8' })
  const jsonContent = parseJSON(fileContent)
  fs.writeFileSync(path.join(process.cwd(), outfile), JSON.stringify(jsonContent, null, '  '))
} catch (ex) {
  console.error(ex)
}
