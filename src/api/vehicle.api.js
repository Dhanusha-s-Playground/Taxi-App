/*
@author : Dhanusha Perera
@date : 13/06/2021
*/

const VehicleDAO = require('../dal/vehicle.dao');

/* get all vehicles. */
const getAllVehicles = () => {
    return VehicleDAO.getAllVehicles();
};

/* get vehicle by ID. */
const getVehicleByID = (id) => {
    return VehicleDAO.getVehicleByID(id);
};

/* create a new vehicle. */
const addVehicle = (vehicleObject) => {
    return VehicleDAO.addVehicle(vehicleObject);
};

/* update a existing vehicle. */
// const updateVehicle = () => {
//
// };

/* delete a vehicle by ID. */
// const deleteVehicleByID = () => {
//
// };

/* exposing methods. */
module.exports = {
    getAllVehicles,
    getVehicleByID,
    addVehicle
};
