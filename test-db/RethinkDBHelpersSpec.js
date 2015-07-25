import chai from 'chai';
import rh from "../src/lib/rethinkDb/rethinkHelpers.js";
const assert = chai.assert;

describe('RethinkDB', function() {
    describe('connect', function() {
        it('successfully', (done) => {
            rh.connect((error, connection) => {
                assert.ok(connection);
                connection.close();
                done();
            });
        });
    });

});