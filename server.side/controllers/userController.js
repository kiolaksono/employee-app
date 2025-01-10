const { comparePass } = require("../helpers/hash");
const { signToken } = require("../helpers/jwt");
const {M_User} = require("../models");

class UserController{
    static async postLogin(req, res, next) {
        try {
          const { username, password } = req.body;
    
          if (!username) throw { name: "BadRequest", message: "username is required" };
          if (!password)
            throw { name: "BadRequest", message: "Password is required" };
    
          const find = await M_User.findOne({ where: { username } });
        //   console.log(find.id)
          if (!find)
            throw { name: "Bad Request", message: "Invalid username/password" };
    
          // console.log(find)
    
          const isValidPassword = comparePass(password, find.password);
            // console.log(isValidPassword)
          if (!isValidPassword)
            throw { name: "Bad Request", message: "Invalid username/password" };
    
        const accessToken = signToken({ id: find.id });
        console.log("SDSD");
    
          res.status(200).json({ accessToken });
        } catch (error) {
          res.json(error);
          next(error)
        }
      }
}

module.exports = UserController