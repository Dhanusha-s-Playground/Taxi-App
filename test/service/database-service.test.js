/*
@author : Dhanusha Perera
@date : 12/06/2021
*/

const dotenv = require('dotenv').config({path: 'resources/.env'});

if (dotenv.error) {
    throw dotenv.error;
}

require('../../src/util/database.util'); // load database.util
const DatabaseService = require('../../src/service/database.service');

const databaseService = new DatabaseService('category');

const category1 = {
    name: 'Short Trip',
    minKM: 0,
    maxKM: 10,
    perKMCharge: 50.00
};

test('Test Case: Insert a new category ', () => {
    return databaseService.save(category1).then(data => {
        expect(data.insertedId).toBe(category1._id);
    });
});

/* duplicate ID error should be thrown here because same category is entered here again.
* MongoError: E11000 duplicate key error collection:
* */
// test('Test Case: Insert the same category again', () => {
//         return databaseService.save(category1).catch(mongoDBError => {
//             expect(mongoDBError.message).toMatch(/E11000\b/);
//         });
//     }
// );

test('Test Case: Get Inserted Category', () => {
    return databaseService.findById(category1._id).then(data => {
        expect(data).toStrictEqual(category1);
    });
});
