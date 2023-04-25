const { Schema, model } = require("../database");

const charactersSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  alias: { type: String, required: true },
  height: { type: Number, required: true },
});

const Character = model("Character", charactersSchema);

module.exports = Character;
