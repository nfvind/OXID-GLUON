/**
 * Created by Nicklas.Vind on 22-11-2015.
 */
OXID.CORE = OXID.CORE ||{};
(function ($, module) {
  var _core = module.CORE;
  _core.Cookies = (function () {

  });
  _core.Helpers = (function () {
    var init = function () {
      _createObj();
      _createNS();
    };
    /**
     * Douglas Crockford Object.create(o);
     * http://javascript.crockford.com/prototypal.html
     * */
    var _createObj = function () {
      if (typeof Object.create !== 'function') {
        Object.create = function (o) {
          function F() {}
          F.prototype = o;
          return new F();
        };
      }
    };
    /**
     * Addy Osmani reference to Stoyan Stefanov method of Nesting namespacing
     * http://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailnamespacing
     * */
    var _createNS = function () {
      function extend( ns, ns_string ) {
        var parts = ns_string.split("."),
          parent = ns,
          pl;

        pl = parts.length;

        for ( var i = 0; i < pl; i++ ) {
          // create a property if it doesn't exist
          if ( typeof parent[parts[i]] === "undefined" ) {
            parent[parts[i]] = {};
          }

          parent = parent[parts[i]];
        }

        return parent;
      }
      module.attachNS = extend;
    };
    return {
      init:init
    }
  });
})(jQuery, OXID);
