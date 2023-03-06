const marketing = require("../repositery/marketing");


module.exports = {
    addDetails: async function (req) {
        var response = await marketing.addDetails(req);
        return response;
    },
    updateDetails: async function (req) {
        var response = await marketing.updateDetails(req);
        return response;
    },
    deleteDetails: async function (req) {
        var response = await marketing.deleteDetails(req);
        return response;
    },
    listById: async function (req) {
        var response = await marketing.listById(req);
        return response;
    },
    allDetails: async function (req) {
        var response = await marketing.allDetails(req);
        return response;
    }
}