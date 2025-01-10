const express = require('express')
const EmployeeController = require('../controllers/employeeController')

const employee = express()

employee.get("/", EmployeeController.getEmployees)
employee.post("/", EmployeeController.postEmployee)
employee.get("/:id", EmployeeController.getEmployee)
employee.delete("/:id", EmployeeController.deleteEmployee)
employee.patch("/:id", EmployeeController.updateEmployee)

module.exports = employee