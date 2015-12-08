/**
 * Created by nvind on 28/11/2015.
 */
(function ($, module) {
  var _ctrls = module.Controllers;
  _ctrls.buttonController = function () {
    var self = this;
    self.eventHandler = function(event){
      if(event.type === 'click'){
        _clickEvent(event);
      }
    };
    var _clickEvent = function (event) {
      console.log(event.data.model);
    };
  };
  _ctrls.ApomController = function () {
    var self = this;
    self.eventHandler = function(event){
      if(event.type === 'click'){
        _clickEvent(event);
      }
    };
    var _clickEvent = function (event) {
      console.log("modal click event");
    };
  };
})(jQuery,OXID.APOM);
