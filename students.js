import express from "express"
import cors from "cors"
const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

let students = ["Bob", "Samantha", "Lily", "Grace", "Jim"]

app.get("/movies/:movietitle/:director",  (req,res)=> {   // for http://localhost:4000/movie/matrix ... If i'm searching in the mongoDB database
  const movietitle = req.params.movietitle // get the actual movie title (everything to the right of "/movies/"
  const director = req.params.director
  console.log(`Looking for movie ${movietitle}`) // Show me (to prove the obvios) what the user passed to me.
  const query = {title: {'$regex': movietitle, '$options': 'i'}}}); 

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
