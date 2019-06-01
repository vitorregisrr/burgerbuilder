let FIREBASE_KEY = '';

try{
    FIREBASE_KEY = require('../config').FIREBASE_KEY;

}catch(e){
    FIREBASE_KEY = process.env.FIREBASE_KEY;
}

export default FIREBASE_KEY;