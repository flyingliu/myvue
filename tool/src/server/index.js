const express = require('express')

const app = express()

app.get('/some/path', function (req, res) {
  res.json([{ name: 'haohao', price: 100 }, { name: 'flying', price: 100 }])
})

app.listen(4000)
