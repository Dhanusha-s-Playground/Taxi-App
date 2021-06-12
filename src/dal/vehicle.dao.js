/*
@author : Dhanusha Perera
@date : 12/06/2021
*/

const DatabaseService = require('../service/database.service');
const databaseService = new DatabaseService('vehicle');

/* get all vehicles. */
const getAllVehicles = () => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await databaseService.findAll());
        } catch (error) {
            reject(error);
        }
    });
};

/* get vehicle by ID. */
const getVehicleByID = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await databaseService.findById(id));
        } catch (error) {
            reject(error);
        }
    });
};

/* add new vehicle. */
const addVehicle = (vehicleObject) => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await databaseService.save(vehicleObject));
        } catch (error) {
            reject(error);
        }
    });
};

const dropTheCollection = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await databaseService.dropTheCollection();
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    getAllVehicles,
    getVehicleByID,
    addVehicle,
    dropTheCollection
};
