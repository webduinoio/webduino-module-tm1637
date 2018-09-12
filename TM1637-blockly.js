+(function (window, webduino) {

  'use strict';

  window.getTM1637 = function (board, clk, dio) {
    return new webduino.module.TM1637(board, clk, dio);
  };

}(window, window.webduino));
