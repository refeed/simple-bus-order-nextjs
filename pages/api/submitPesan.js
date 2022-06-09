import axios from "axios";

// REST_DB_API_KEY must be submitted in ?apikey
// or headers: { 'x-apikey': apikey }
const REST_DB_API_KEY = "927070e142276a1edce544d5eec84fca748cf";
const BASE_URL = "https://refeedsertifikasi-0abb.restdb.io/"


export default function handler(req, res) {
  axios.post('')


  res.status(200).json({ name: "John Doe" });
}
