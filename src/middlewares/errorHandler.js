const { constants } = require('../../constants');

const errorHandler = (err, req, res, next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.UNATHORIZED:
            res.status(401).json({error: "Unathorized"});
            break;
        case constants.FORBIDDEN:
            res.status(403).json({error: "Forbidden"});
            break;
        case constants.NOT_FOUND:
            res.status(404).json({error: "Not Found"});
            break;
        default:
            res.status(500).json({error: "Server Error"});
            break;
    }

};

module.exports = errorHandler;