const middleware = (req, res, next) => {
        const method = req.method
        const url = req.url
        const time = new Date().getFullYear()

        console.log(method, url, time);

        // //* MUST to pass the next middleware
        next();

        // //* no need to pass the next middleware if we are returning the res here
        // res.send("Test")
}



module.exports = middleware;