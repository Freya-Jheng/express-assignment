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
  const content = {
    title: '首頁',
  }
  res.render('index', {content: content.title})
})

app.get('/:content', (req, res)=> {
  const title = 'show page'
  res.render('show', {content: title})
})


// set up express listener
app.listen(port, ()=>{
  console.log(`Express is running on http://localhost:${port}`)
})