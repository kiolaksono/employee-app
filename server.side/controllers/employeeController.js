const {M_Employee, M_Family} = require("../models");

class EmployeeController{
    static async getEmployees(req,res,next){
        try {
            const find = await M_Employee.findAll()
            res.status(200).json(find)
        } catch (error) {
            res.send(error)
        }
    }
    
    static async getEmployee(req,res, next){
        try {
            const {id} = req.params
            
            const find = await M_Employee.findByPk(id,{
                exclude: ["createdAt", "updatedAt"],
                include: [
                    {
                        model: M_Family,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        }
                    }
                ]
            })
            if (!find) {
                throw { 
                    name: "NotFound", 
                    message: `Employee with id ${id} not found` };
            }

            res.status(200).json(find)
        } catch (error) {
            next(error)
        }
    }

    static async postEmployee(req,res,next){
        try {
            const {id} = req.user
            // console.log(req.user/, "REQ USER")

            const data = await M_Employee.create({
                ...req.body,
                create_by: id
            })
            console.log(req.body)
            res.status(201).json({
                data: data,
                message : "New Employee has been inputed"
            })
        } catch (error) {
            console.log(error, "<<<")
            next(error)
        }
    }

    static async deleteEmployee(req,res,next){
        try {
            const {id} = req.params
            const find = await M_Employee.findByPk(id)
            
            if(!find) {
                throw({name:"NotFound", message:`Employee with id ${id} not found`})
            }
            
            const check = await M_Family.findOne({where:{employee_id:id}})

            if(check) {
                await check.destroy()
            }

            await find.destroy()

            res.status(200).json({ message: `Employee has been deleted` })

        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async updateEmployee(req,res,next){
        try {
            const {id} = req.params

            const data = await M_Employee.findByPk(id)

            if(!data) {
                throw({name:"NotFound", message:`Employee with id ${id} not found`})
            }

            console.log(req.body)

            await data.update(req.body)

            res.status(200).json({message:`Eployee with id ${id} has been updated`})
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

}

module.exports = EmployeeController