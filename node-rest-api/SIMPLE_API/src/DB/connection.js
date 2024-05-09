const mongoose = require("mongoose");
// No longer necessary:

try {
  mongoose.connect("mongodb://localhost:27017/Test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected");
} catch (err) {
  console.log(err);
}
