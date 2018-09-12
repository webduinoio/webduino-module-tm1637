+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(webduino || {});
  } else {
    module.exports = factory;
  }
}(function (scope) {
  'use strict';
  
  var self;
  var proto;
  var Module = scope.Module;

  function TM1637(board, clk, dio) {
    Module.call(this);
    this._board = board;
    self = this;
    self._clk = clk;
    self._dio = dio;  
    board.send([0xf0, 0x04, 0x44, 0x0, clk, dio, 0xf7]);
    board.on(webduino.BoardEvent.SYSEX_MESSAGE,
      function (event) {
        var m = event.message;
        sending = false;
      }); 
  }

  TM1637.prototype = proto = Object.create(Module.prototype, {
    constructor: {
      value: TM1637
    }
  });

  proto.brightness = function(num) { //num 0~8
    
    this._board.send([0xf0, 0x04, 0x44, 0x1, num, 0xf7]);
  }

//
//      1
//     ---
//  6 |   | 2
//     -7-
//  5 |   | 3
//     ---
//      4
// 7654321
  proto.setSegments = function(data) {
    console.log(data);
    for(var j = 0; j < 4; j++){
      if(data[j] != null){
        var StrData = data[j].toString();
        var total = 0;
        for(var i = 0; i < StrData.length; i++){
         var temp = 1 << (StrData.charAt(i) - 1 );    
         total |= temp;
        }
        data[j] = total;
      }else {
        data[j] = 0;
      }
    } 
    this._board.send([0xf0, 0x04, 0x44, 0x2, data[0], data[1], data[2], data[3], 0xf7]);
  }

  proto.showDec = function(num, colon, zero){
    colon = colon ? 0x40 : 0;
    var StrData = num.toString();
    for(var i = 0; i < StrData.length; i++){
      // console.log(parseInt(StrData.charAt(i)));
      this._board.send([0xf0, 0x04, 0x44, 0x3, parseInt(StrData.charAt(i)), 0xf7]);
    }
    this._board.send([0xf0, 0x04, 0x44, 0x4, colon, zero, 0xf7]);
  }

  proto.off = function(){
    this._board.send([0xf0, 0x04, 0x44, 0x5, 0xf7]);
  }

  scope.module.TM1637 = TM1637;
}));
