const express = require('express')
const FamilyController = require('../controllers/familyController')

const family = express()

family.get("/", FamilyController.getFamilies)
family.get("/:id", FamilyController.getFamily)
family.post("/:id", FamilyController.postFamily)
family.delete("/:id", FamilyController.deleteMember)

module.exports = family