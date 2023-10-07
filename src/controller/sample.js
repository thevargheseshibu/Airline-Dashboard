
/**
* @class sampleController
* @description A sample controller
*/

module.exports = {
    get: async (request, res) => {
        try {
            res.send("airline Dashboard Project !");
        } catch (err) {
            console.error(err);
        }
    }
}