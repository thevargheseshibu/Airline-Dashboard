/**
* @class sampleController
* @description Define endpoints for system dashboard
*/

const system = require('../models/system')

module.exports = {
    //getall
    getAll: async (request, res) => {
        try {
            const systems = await system.find();
            return systems;
        } catch (err) {
            console.error(err);
        }
    },
    //Add or create
    create: async (request, res) => {
        try {
            const note = request.body;
            const newNote = await system.create(note);
            res.code(200).send(newNote);
        } catch (err) {
            console.error(err);
        }
    }

}