var resource;

(function() {
    'use strict';
    
    resource = function(name, obj) {
        var str = JSON
            .stringify(obj)
            .replace(/>":/g, ' ')
            .replace(/~/g, '":');
            
        return name + ' ' + str;
    };
})();
