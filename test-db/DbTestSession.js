import rh from "../src/lib/rethinkDb/rethinkHelpers.js";
import constants from "./constants.js";

class DbTestSession {

    constructor() {
        this.connection = {};
    }

    /**
     * Sets up a test session
     * @param test
     */
    setupSession(before, after) {

        // calls 'before', creating a connection and a test database
        before((done) => {
            rh.connect((error, conn) => {
                if(error) {
                    throw error;
                }

                if(!this.connection) {
                    throw Error('UShudfshhdf');
                }

                this.connection = conn;
                rh.createDb(this.connection, constants.DB_TESTS, (error) => {
                    if(error) {
                        throw error;
                    }
                    done();
                });
            });
        });

        // calls 'after', closing the connection
        after((done) => {
            rh.dropDb(this.connection, constants.DB_TESTS, (error) => {
                if(error) {
                    throw error;
                }
                this.connection.close();
                done();
            })
        });
    }
}

export default DbTestSession;