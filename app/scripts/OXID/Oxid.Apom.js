/**
 * Created by Nicklas.Vind on 22-11-2015.
 */
OXID.APOM = OXID.APOM || {};
(function ($, module) {
  var _apom = module.APOM;
  _apom.Models.apomModel = function (sign, headline, body, buttons) {
    var self = this;
    var defaults = {
      sign:sign || 'default.png',
      headline:headline || 'This is my default headline',
      body:body || 'This my default body text',
      buttons:buttons || []
    };
    self.defaults = defaults;

    self.changeSign = function (sign) {
      defaults.sign = sign;
    };
    self.changeHeadline = function (heading) {
      defaults.heading = heading;
    };
    self.changeBody = function (body) {
      defaults.body = body;
    };
    return self;
  };
  _apom.Models.GenericButton = function (buttonText, buttonId) {
    var self = this;
    var defaults = {
      buttonId:buttonId,
      buttonTxt:buttonText
    };
    self.defaults = defaults;
    return self;
  };
})(jQuery, OXID);
