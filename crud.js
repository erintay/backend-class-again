const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 3000

const myArt = [
  {
    id: '001',
    student: 'E Taylor',
    class: 'BW-AII',
    clay: 'little loafers',
    glaze: 'clear',
  },
  {
    id: '002',
    student: 'E Hopper',
    class: 'BW-CII',
    clay: 'speckled',
    glaze: 'ben gareen',
  },
  {
    id: '003',
    student: 'S Hughes',
    class: 'AW-C',
    clay: 'porcelain',
    glaze: 'celedon',
  },
]

app.get('/art/:id', (req, res) => {
  const artId = req.params.id

  // Look through my phones, for the phone with the correct id
  const art = myPhones.find((art) => art.id === artId)

  if (!art) {
    return res.send('no phone found')
  }
  res.send(art)
})

app.listen(port, () => {
  console.log(`API example app listening on port ${port}`)
})