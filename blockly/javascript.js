Blockly.JavaScript['tm1637_new'] = function (block) {

  var dropdown_dio_ = block.getFieldValue('dio');
  var dropdown_clk_ = block.getFieldValue('clk');
  var code = 'getTM1637(board, ' + dropdown_clk_ + ', ' + dropdown_dio_ + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['tm1637_brightness'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  var value_brightness_ = Blockly.JavaScript.valueToCode(block, 'brightness', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_var + '.brightness(' + value_brightness_ + ');\n';
  return code;
};

Blockly.JavaScript['tm1637_segments'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_list_ = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var varData = Blockly.JavaScript.variableDB_.getDistinctName(
    'varData', Blockly.Variables.NAME_TYPE);
  var code = 'var ' + varData + '=' + 
  value_list_ + ';\n'+
  variable_var + '.setSegments('+ 
  varData + ');\n';
  return code;
};

Blockly.JavaScript['tm1637_showdec'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  var value_decimal_ = Blockly.JavaScript.valueToCode(block, 'decimal', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_colon_ = block.getFieldValue('colon') == 'TRUE';
  var checkbox_zero_ = block.getFieldValue('zero') == 'TRUE';
  var code = variable_var + '.showDec(' + 
  value_decimal_ + ',' +
  checkbox_colon_ + ',' +
  checkbox_zero_ + ');\n';
  return code;
};

Blockly.JavaScript['tm1637_off'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  var code = variable_var + '.off();\n';
  return code;
};

