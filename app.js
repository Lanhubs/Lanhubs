const app = require("express")();
const path = require("path");
const __dirname1 = path.resolve("./dist");
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname1));

  app.get("/", () => {
    res.sendFile(path.join(__dirname1, "index.html"));
  });
}
app.listen(4040, console.log("connected to port:", 4040))