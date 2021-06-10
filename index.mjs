
import express from "express"

import { fileURLToPath } from "url"
import * as path from "path"
import * as fs from "fs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

app.set("views", path.join(__dirname, "templates"))
app.set("view engine", "pug")
app.use(express.static(path.join(__dirname, "static")))

app.get("/", (req, res) => {
    res.render("index.pug")
})

app.listen(8080)