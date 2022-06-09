import axios from 'axios'

// REST_DB_API_KEY must be submitted in ?apikey
// or headers: { 'x-apikey': apikey }
const REST_DB_API_KEY = '927070e142276a1edce544d5eec84fca748cf'
const BASE_URL = 'https://refeedsertifikasi-0abb.restdb.io/'

const restdb = axios.create({
  baseURL: BASE_URL,
  headers: { 'x-apikey': REST_DB_API_KEY }
})

export default function handler (req, res) {
  restdb
    .post('/rest/busorder', {
      ...req.body
    })
    .then(restdbRes => {
      console.log(restdbRes)
      if (restdbRes.status === 201) {
        res.status(200).json({ status: 'Order success' })
        return
      }
      res.status(500).json({ status: 'Order failed' })
    })
}
