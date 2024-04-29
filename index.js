const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.listen(3000, () => {
  console.log("App listening on port 3000")
})

app.set("view engine", "handlebars")

app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: __dirname + '/views'
  })
)

app.use("/bootstrap", express.static(__dirname + '/node_modules/bootstrap/dist'))
app.use("/popper", express.static(__dirname + "/node_modules/@popperjs/core/dist/umd"))
app.use(express.static("assets"))

app.get('/', (req, res) => {
  res.render(
    "dashboard",
    {
      frutas: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"]
    }
)
})

