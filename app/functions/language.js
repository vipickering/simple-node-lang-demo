var language = function(langSelected) {
    switch (langSelected) {
        case 'en':
            return require('../content/en.json');
            break;
        case 'fr' :
            return require('../content/fr.json');
            console.log("French");
            break;
        default :
            return require('../content/en.json');
            break;
    }


};
module.exports = language;
