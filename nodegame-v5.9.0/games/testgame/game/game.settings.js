/**
 * # Game settings definition file
 * Copyright(c) 2020 Jon Bowen <jbowen23@uwo.ca>
 * MIT Licensed
 *
 * The variables in this file will be sent to each client and saved under:
 *
 *   `node.game.settings`
 *
 * The name of the chosen treatment will be added as:
 *
 *    `node.game.settings.treatmentName`
 *
 * http://www.nodegame.org
 * ---
 */
module.exports = {

    // Variables shared by all treatments.

    // #nodeGame properties:

    /**
     * ### TIMER (object) [nodegame-property]
     *
     * Maps the names of the steps of the game to timer durations
     *
     * If a step name is found here, then the value of the property is
     * used to initialize the game timer for the step.
     */
    TIMER: {
        instructions: 60000
    },

    // # Game specific properties

    // Number of game rounds repetitions.
    REPEAT: 10,

    // In case an incoming offer does not pass validation, which indicates
    // cheating, re-set the dictator's offer to this value.
    defaultOffer: 100,

    wordset: ["ADORE","YARN","ANCHOR","BURGLAR","GIGGLE","OUTFIT","RUMOUR","DEPTH","ALGEBRA","WRITE","ANGRY","EXAM","INSTRUCTION","PEN","BETTER","LEAD","COUCH","ABNORMAL","BANDANA","VOID"],

    // # Treatments definition.

    // They can contain any number of properties, and also overwrite
    // those defined above.

    // If the `treatments` object is missing a treatment named _standard_
    // will be created automatically, and will contain all variables.

    treatments: {

        standard: {
            description: "Longer time",
            bidTime: 30000
        },

        pressure: {
            description: "Short times to take decisions",
            bidTime: 10000
        }

    }
};
