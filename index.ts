import * as MaxAPI from 'max-api'
import * as fs from 'fs'
import { say } from 'cowsay'

MaxAPI.addHandler('list-files', () => {
  fs.readdir(__dirname, (err, files) => {
    if (err) {
      MaxAPI.post(err.message, "error")
    }
    const text = say({
      text: 'Node for Max is Awesome!'
    });
    console.log(text);
    MaxAPI.outlet(...files, text)
  })
})