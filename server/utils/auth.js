require("dotenv").config();
const jwt = require('jsonwebtoken');
const expiration = "2h";
const secret = process.env.TOKEN_SECRET;

module.exports = {
    authmiddleware: function({ req }) {
        // allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // console.log(req.headers.authorization);
        if(req.headers.authorization) {
            token = token.split(" ").pop().trim();
            // console.log(token);
        }

        if(!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            // console.log(jwt.verify(token, secret, { maxAge: expiration }));
            req.user = data;
            // console.log(req.user);
        } catch {
            console.log("Invalid token");
        }

        return req;
    },

    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
}