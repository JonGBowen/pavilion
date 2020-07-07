/**
 * # Channel secret file
 * Copyright(c) 2020 Jon Bowen <jbowen23@uwo.ca>
 * MIT Licensed
 *
 * The file must return the administrator user name and password
 *
 * The secret key can be stored here directly or loaded asynchronously from
 * another source, e.g a remote service or a database.
 *
 * http://www.nodegame.org
 * ---
 */
module.exports = function(settings, done) {

    return {
        user: 'disi2020',
        pwd: 'ts6majfdTQ'
    };

    // Example: return key asynchronously

    // loadCredentialsFromDatabase(function(err, credentials) {
    //     done(err, credentials);
    // });
};
