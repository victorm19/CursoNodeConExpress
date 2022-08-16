

const customHeader = (req, res, next) => {

    try {
        const apiKey = req.headers.api;
        if(apiKey === 'api-publica-123') {
            next();
        } else {
            res.status(403);
            res.send({error: "EL API KEY NO ES CORRECTA"});
        }
    } catch(err) {
        res.status(403);
        res.send({error: "ALGO OCURRIO CON EL CUSTOM HEADER"});
    }
}

module.exports = customHeader;