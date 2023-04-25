const express = require("express");
const router = express.Router();
const characterController = require("../controllers/characterController");
const Character = require("../models/characterModel");

// Basic features (CRUD)
// Create a character
router.post("/characters", characterController.CreateCharacter);
// Get all characters
router.get("/characters", characterController.GetAllCharacters);
// Get a character by id
router.get("/characters/:id", characterController.GetCharacter);
// Update a character by id
router.put("/characters/:id", characterController.UpdateCharacter);
// Delete a character by id
router.delete("/characters/:id", characterController.DeleteCharacter);
// Delete all characters
router.delete("/characters", characterController.DeleteAllCharacters);

// Optionals features
// Get a character by parameter
router.get("/search", characterController.GetCharacterByParameter);
//Sort characters by parameters (asc or desc)
router.get("/sort", characterController.SortCharacters);

module.exports = router;
