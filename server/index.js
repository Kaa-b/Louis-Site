const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const pictureModel = require("./models/picturesInfo");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Ka_m:capsul67@cluster0.qr12onz.mongodb.net/louis-mscl-db?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {
  const url = req.body.url;
  const categorie = req.body.categorie;
  const public_id = req.body.public_id;

  const picture = new pictureModel({
    url: url,
    categorie: categorie,
    public_id: public_id,
  });

  try {
    await picture.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.get("/read", async (req, res) => {
  pictureModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.put("/update", async (req, res) => {
  const newCategorie = req.body.newCategorie;
  const id = req.body.id;

  try {
    await pictureModel.findById(id, (err, updatedCategorie) => {
      updatedCategorie.categorie = newCategorie;
      updatedCategorie.save();
      res.send("update");
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await pictureModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
