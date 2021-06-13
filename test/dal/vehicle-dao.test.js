/*
@author : Dhanusha Perera
@date : 12/06/2021
*/

const dotenv = require('dotenv').config({path: 'resources/.env'});

if (dotenv.error) {
    throw dotenv.error;
}

// jest.setTimeout(15000);

const VehicleDAO = require('../../src/dal/vehicle.dao');
// load database.util
require('../../src/util/database.util');

/* drop the collection after the test completed. */
afterAll( () => {
    VehicleDAO.dropTheCollection().then(console.log).catch(console.error)
});

const vehicleObject = {
    _id: 'ABC-4567',
    model: 'Toyota',
    type: 'sedan',
    name: 'Allion',
    categories: ['11111', '22222', '33333']
};

test('Test Case: Insert a new Vehicle', () => {
    return VehicleDAO.addVehicle(vehicleObject).then(data => {
        expect(data.insertedId).toBe(vehicleObject._id);
    });
});

test('Test Case: Get Inserted Vehicle Record', () => {
    return VehicleDAO.getVehicleByID(vehicleObject._id).then(data => {
        expect(data).toStrictEqual(vehicleObject);
    });
});
