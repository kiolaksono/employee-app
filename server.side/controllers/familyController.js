const {M_Family} = require("../models");

class FamilyController{

    static async postFamily(req,res,next){
        try {
            const {id} = await req.params
            const data = await M_Family.create({
                ...req.body, employee_id:id
            })

            res.status(201).json({
                data: data,
                message:`Family member for employee with id ${id} has been inputed`
            })
        } catch (error) {
            // console.log(error)
            next(error)
        }
    }

    static async getFamilies(req,res,next){
        try {
            const find = await M_Family.findAll()

            res.status(200).json(find)
        } catch (error) {
            next(error)
        }
    }

    static async getFamily(req,res,next){
        try {
            const {id} = req.params
            const find = await M_Family.findAll({
                where :{
                    employee_id : id
                }
            })
            
            if (!find) {
                throw { 
                    name: "NotFound", 
                    message: `Family for employee with id ${id} not found` };
            }

            res.status(200).json(find)
        } catch (error) {
            next(error)
        }
    }
    
    static async deleteMember(req,res,next){
        try {
            const {id} = req.params
            const find = await M_Family.findByPk(id)
            
            if(!find) {
                throw({name:"NotFound", message:`Family member with id ${id} not found`})
            }
            
            await find.destroy()

            res.status(200).json({ message: `Family member has been deleted` })
        } catch (error) {
            next(error)
        }
    }

    

}

module.exports = FamilyController