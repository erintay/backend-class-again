const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 3000

const myJars = [
  {
    id: '001',
    artist: 'Abby B'
    clay: 'reclaim',
    glaze: 'ben gareen',
    fire: 'high',
    cone: '6',
  },
  {
    id: '002',
    artist: 'Susan H'
    clay: 'little loafers',
    glaze: 'clear',
    fire: 'high',
    cone: '8',
  },
  {
    id: '003',
    artist: 'john f'
    clay: 'porcelain',
    glaze: 'celedon',
    fire: 'gas',
    cone: '10',
  },
  {
    id: '',
    clay: '',
    glaze: '',
    fire: '',
    cone: '',
  },
  {
    id: '',
    clay: '',
    glaze: '',
    fire: '',
    cone: '',
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