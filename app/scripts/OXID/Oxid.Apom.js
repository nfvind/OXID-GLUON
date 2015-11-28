/**
 * Created by Nicklas.Vind on 22-11-2015.
 */
OXID.APOM = OXID.APOM || {};
(function ($, module) {
  var _apom = module.APOM;
  var _models = module.APOM.Models;
  var _views = module.APOM.Views;
  _models.apomModel = function (sign, headline, body, buttons) {
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
    //return self; // uneeded!
  };
  _models.GenericButtonModel = function (buttonText,buttonId, btnLink, btnAttr) {
    var self = this;
    var defaults = {
      buttonId:buttonId,
      buttonTxt:buttonText,
      attributes: btnAttr || {},
      link: btnLink || '#'
    };
    self.defaults = defaults;
    //return self; // uneeded!
  };
  _views.obj = {b:'se'};
  _views.ButtonView = function (btnModel, btnController) {
    var self = this;
    self.button = $('<a href=""></a>');
    var btn = self.button;
    var attrs = btnModel.defaults.attributes || {};
    if(attrs.length !== 0){
    for(var key in attrs){
      if(attrs.hasOwnProperty(key)){
        btn.attr(key, attrs[key]);
      }
    }
    }
    btn.attr('href',btnModel.defaults.link);
    btn.attr('id',btnModel.defaults.buttonId);
    btn.html(btnModel.defaults.buttonTxt);
    btn.on('click',{model:btnModel.defaults}, btnController.eventHandler);
    $('#fakelake').append(btn);
  }
})(jQuery, OXID);
