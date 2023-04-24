const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 3000

const myPhones = [
  {
    id: '1',
    make: 'iPhone',
    model: '14 pro',
    os: 'iOS',
    color: 'black',
  },
  {
    id: '2',
    make: 'Samsung',
    model: 'galaxy',
    os: 'android',
    color: 'red',
  },
]

app.get('/phone/:id', (req, res) => {
  const phoneId = req.params.id

  // Look through my phones, for the phone with the correct id
  const phone = myPhones.find((phone) => phone.id === phoneId)

  if (!phone) {
    return res.send('no phone found')
  }
  res.send(phone)
})

app.listen(port, () => {
  console.log(`API example app listening on port ${port}`)
})