const characterModel = require("../models/characterModel");

async function CreateCharacter(req, res) {
  try {
    const characters = req.body;
    const createdCharacters = [];

    for (let i = 0; i < characters.length; i++) {
      const { id, first_name, last_name, alias, height } = characters[i];
      const newCharacter = new characterModel({
        id: id,
        first_name: first_name,
        last_name: last_name,
        alias: alias,
        height: height,
      });
      await newCharacter.save();
      createdCharacters.push(newCharacter);
    }
    res.json(createdCharacters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function GetAllCharacters(req, res) {
  try {
    const characters = await characterModel.find({});
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function GetCharacter(req, res) {
  try {
    const character = await characterModel.findOne({ id: req.params.id });
    if (!character) {
      return res.status(404).json({ message: "Character not found" });
    }
    res.json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function UpdateCharacter(req, res) {
  try {
    const character = await characterModel.findOne({ id: req.params.id });
    if (!character) {
      return res.status(404).json({ message: "Character not found" });
    }

    const { first_name, last_name, alias, height } = req.body;

    if (first_name !== undefined) {
      character.first_name = first_name;
    }
    if (last_name !== undefined) {
      character.last_name = last_name;
    }
    if (alias !== undefined) {
      character.alias = alias;
    }
    if (height !== undefined) {
      character.height = height;
    }

    await character.save();

    res.json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function DeleteCharacter(req, res) {
  try {
    const character = await characterModel.findOne({ id: req.params.id });
    if (!character) {
      return res.status(404).json({ message: "Character not found" });
    }

    await character.deleteOne(character._id);

    res.json({ message: "Character successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function DeleteAllCharacters(req, res) {
  try {
    const characters = await characterModel.deleteMany({});
    if (!characters) {
      return res.status(404).json({ message: "Characters not found" });
    }

    res.json({ message: "All characters successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function GetCharacterByParameter(req, res) {
  try {
    const { type, value } = req.query;
    let character;

    switch (type) {
      case "first_name":
        character = await characterModel.findOne({ first_name: value });
        break;
      case "last_name":
        character = await characterModel.findOne({ last_name: value });
        break;
      case "alias":
        character = await characterModel.findOne({ alias: value });
        break;
      default:
        return res.status(400).json({ message: "Invalid search parameter" });
    }

    if (!character) {
      return res.status(404).json({ message: "Character not found" });
    }

    return res.status(200).json({ character });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function SortCharacters(req, res) {
  try {
    const { type, sort } = req.query;
    let characters;

    switch (type) {
      case "first_name":
        characters = await characterModel
          .find({})
          .sort({ first_name: sort === "asc" ? 1 : -1 });
        break;
      case "last_name":
        characters = await characterModel
          .find({})
          .sort({ last_name: sort === "asc" ? 1 : -1 });
        break;
      case "alias":
        characters = await characterModel
          .find({})
          .sort({ alias: sort === "asc" ? 1 : -1 });
        break;
      default:
        characters = await characterModel.find({});
        break;
    }

    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  CreateCharacter,
  GetAllCharacters,
  GetCharacter,
  UpdateCharacter,
  DeleteCharacter,
  DeleteAllCharacters,
  GetCharacterByParameter,
  SortCharacters,
};
