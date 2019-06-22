import * as MaxAPI from 'max-api'

export const Log = (...text: string[]) => {
  console.log(...text)
  MaxAPI.post(...text)
}