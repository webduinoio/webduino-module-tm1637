Blockly.Blocks['tm1637_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_TM1637, "七段顯示器 ( TM1637 ) ")
      .appendField(Blockly.Msg.WEBDUINO_TM1637_CLK, "CLK")
      .appendField(new Blockly.FieldDropdown(Code.getPinDropdown), "clk")
      .appendField(Blockly.Msg.WEBDUINO_TM1637_DIO, "DIO")
      .appendField(new Blockly.FieldDropdown(Code.getPinDropdown), "dio");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://webduinoio.github.io/demo/max7219/');
  }
};


Blockly.Blocks['tm1637_brightness'] = {
  init: function() {
    this.appendValueInput("brightness")
        .setCheck("Number")
        .appendField(Blockly.Msg.WEBDUINO_TM1637_SET, "設定")
        .appendField(new Blockly.FieldVariable("tm1637"), "var")
        .appendField(Blockly.Msg.WEBDUINO_TM1637_BRIGHTNESS, "亮度 (0~7)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['tm1637_segments'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("tm1637"), "var")
        .appendField(Blockly.Msg.WEBDUINO_TM1637_SHOW_FOUR_DIGITS, "顯示四位數 (由左而右）");
    this.appendValueInput("list")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("https://lh3.googleusercontent.com/qBQqa0xGAZ8abZAzgeia7zADGYlszfq0g1c57cha8fINgC7dVXLTw_uANk-6qSugo9SYQsLF7Yv0nVvOCmdaC1Kq_YU1g9aCYTsiXXfDTy8f5SyH9Saj0fOX-kaoJxpsrnWaMkSEEg=w2400", 150, 100, "*"))
        .appendField(Blockly.Msg.WEBDUINO_TM1637_CODE_ORDER , "代碼依序 (列表)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};  

Blockly.Blocks['tm1637_showdec'] = {
  init: function() {
    this.appendValueInput("decimal")
        .setCheck("Number")
        .appendField(new Blockly.FieldVariable("tm1637"), "var")
        .appendField(Blockly.Msg.WEBDUINO_TM1637_SHOW_NUMBER, "顯示數字 (0~9999)");
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_TM1637_COLON, "冒號")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "colon")
        .appendField(Blockly.Msg.WEBDUINO_TM1637_LEADING_ZERO, "  前面補零")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "zero");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');  
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['tm1637_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_TM1637_OFF, "關閉")
        .appendField(new Blockly.FieldVariable("tm1637"), "var");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};