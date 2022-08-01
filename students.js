import express from "express"
import cors from "cors"
const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

let students = ["Bob", "Samantha", "Lily", "Grace", "Jim"]

app.get("/", (req, res) => {
  let output = "<html><body><ul>" //start

  // output = output + "hello there html" //middle
  for (let i = 0; i < students.length; i++) {
    output = output + `<li><input type = "checkbox">` + students[i] + `</li>`
  }
  output = output + "</ul></body></html>" //end

  res.send(output)
})

app.listen(PORT, () => {
  console.log("I was needed")
})
