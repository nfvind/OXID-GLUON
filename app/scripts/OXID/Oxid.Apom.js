/**
 * Created by Nicklas.Vind on 22-11-2015.
 */
OXID.APOM = OXID.APOM || {};
(function ($, module) {
  var _apom = module.APOM;
  var _models = module.APOM.Models;
  var _views = module.APOM.Views;
  var _controllers = module.APOM.Controllers;
  _models.ApomModel = function (sign, headline, body, buttons) {
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
  _views.ApomView = function (apomModel, apomController) {
    var self = this;
    var modalContainer = $('<div id="gluon-modal"></div>');
    var sign = $('<div class="gluon-sign"></div>');
    apomModel.changeSign("https://yt3.ggpht.com/-CTPhJpUxiWM/AAAAAAAAAAI/AAAAAAAAAAA/lBoB134FVSU/s900-c-k-no/photo.jpg");
    var img = $('<img src="'+apomModel.defaults.sign+'" width="25" height="25" alt="lala"/>');
    sign.append(img);
    var textContainer = $('<div class="gluon"></div>');
    var buttonContainer = $('<div class="gluon-buttons"></div>');
    var headline = $('<span class="emphasized-text"></span>');
    var bodytext = $('<span class="gluon-text"></span>');
    headline.html(apomModel.defaults.headline);
    bodytext.html(apomModel.defaults.body);
    textContainer.append(bodytext);
    textContainer.append(headline);
    var _btns = apomModel.defaults.buttons;
    var btnCtrl = new _controllers.buttonController();
    for(var i = 0; _btns.length > i; i+=1){
     var btnModel = _btns[i];
      var btnView = new _views.ButtonView(btnModel, btnCtrl);
      buttonContainer.append(btnView.button);
      // Don't know if this is the correct way?! Why have variable?
    }
    modalContainer.on('click',apomController.eventHandler);
    modalContainer.append(sign);
    modalContainer.append(textContainer);
    modalContainer.append(buttonContainer);
    self.modal = modalContainer;
  };
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
  }
})(jQuery, OXID);
