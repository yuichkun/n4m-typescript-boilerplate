import * as MaxAPI from 'max-api'
import * as fs from 'fs'
import { say } from 'cowsay'
import { Log } from './utils'

enum actionTypes {
  LIST_FILES = 'list-files',
  SAY = 'say'
}

MaxAPI.addHandler(actionTypes.LIST_FILES, () => {
  fs.readdir(process.cwd(), (err, files) => {
    if (err) {
      MaxAPI.post(err.message, "error")
    }
    const text = say({
      text: 'Node for Max is Awesome!'
    });

    Log(...files)
    MaxAPI.outlet(...files, text)
  })
})

MaxAPI.addHandler(actionTypes.SAY, (...whatever: string[]) => {
  const text = say({
    text: whatever.join(' ')
  })
  Log(text)
  MaxAPI.outlet(text)
})