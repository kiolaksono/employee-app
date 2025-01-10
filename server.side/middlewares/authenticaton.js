const { verifyToken } = require("../helpers/jwt")
const { M_User } = require('../models')

async function authentication(req, res, next) {
    const bearerToken = req.headers["authorization"]
    // console.log(bearerToken)
    if (!bearerToken) {
        next({ name: "Unauthorized", message: "Invalid Token" })
        return
    }

    const [_, token] = bearerToken.split(" ")

    if (!token) {
        next({ name: "Unauthorized", message: "Invalid Token" })
        return
    }

    try {
        const data = verifyToken(token)
        
        const find = await M_User.findByPk(data.id)

        if (!find) {
            next({ name: "Unauthorized", message: "Invalid Token" })
            return
        }

        req.user = find
        next()
    } catch (error) {
        // console.log(error,)
        next(error)
    }
}

module.exports = authentication