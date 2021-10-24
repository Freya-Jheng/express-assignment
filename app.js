// set up express relative variables 
const express = require('express')
const app = express()
const port = 3000

// set up partial templates
// exphbs = express handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// set up static files(css, js, img ...)
app.use(express.static('public'))

// set up root
app.get('/', (req, res) => {
  const pageName = 'Welcome to visit our homepage !'
  res.render('index', {pageName})
})

app.get('/:pageName', (req, res) => {
  const pageName = req.params.pageName

  res.render('index', { pageName })
})

// set up express listener
app.listen(port, ()=>{
  console.log(`Express is running on http://localhost:${port}`)
})