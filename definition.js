Blockly.Blocks['yolobit_ir_blaster_create'] = {
  init: function() {  
    this.jsonInit(
      {
          "type": "yolobit_ir_blaster_create",
          "message0": "IR blaster khởi tạo TX %1 RX %2",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "tx",
              "options": [
                [
                  "P0",
                  "pin0"
                ],
                [
                  "P1",
                  "pin1"
                ],
                [
                  "P2",
                  "pin2"
                ],
                [
                  "P3",
                  "pin3"
                ],
                [
                  "P4",
                  "pin4"
                ],
                [
                  "P5",
                  "pin5"
                ],
                [
                  "P6",
                  "pin6"
                ],
                [
                  "P7",
                  "pin7"
                ],
                [
                  "P8",
                  "pin8"
                ],
                [
                  "P9",
                  "pin9"
                ],
                [
                  "P10",
                  "pin10"
                ],
                [
                  "P11",
                  "pin11"
                ],
                [
                  "P12",
                  "pin12"
                ],
                [
                  "P13",
                  "pin13"
                ],
                [
                  "P14",
                  "pin14"
                ],
                [
                  "P15",
                  "pin15"
                ],
                [
                  "P16",
                  "pin16"
                ]
              ]
            },
            {
              "type": "field_dropdown",
              "name": "rx",
              "options": [
                [
                  "P0",
                  "pin0"
                ],
                [
                  "P1",
                  "pin1"
                ],
                [
                  "P2",
                  "pin2"
                ],
                [
                  "P3",
                  "pin3"
                ],
                [
                  "P4",
                  "pin4"
                ],
                [
                  "P5",
                  "pin5"
                ],
                [
                  "P6",
                  "pin6"
                ],
                [
                  "P7",
                  "pin7"
                ],
                [
                  "P8",
                  "pin8"
                ],
                [
                  "P9",
                  "pin9"
                ],
                [
                  "P10",
                  "pin10"
                ],
                [
                  "P11",
                  "pin11"
                ],
                [
                  "P12",
                  "pin12"
                ],
                [
                  "P13",
                  "pin13"
                ],
                [
                  "P14",
                  "pin14"
                ],
                [
                  "P15",
                  "pin15"
                ],
                [
                  "P16",
                  "pin16"
                ]
              ]
            }
          ],
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#6C3483",
          "tooltip": "",
          "helpUrl": ""
        }
    );
      }
  };

Blockly.Python['yolobit_ir_blaster_create'] = function(block) {
    var tx = block.getFieldValue('tx');
    var rx = block.getFieldValue('rx');
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_machine'] = 'from ir_blaster import IRBlaster';
    Blockly.Python.definitions_['import_utime'] = 'import utime';
    Blockly.Python.definitions_['ir_blaster_init'] = 'ir_blaster = IRBlaster(tx_pin ='+ tx + '.pin,' + 'rx_pin =' + rx +'.pin)\n';
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    return code;
};


Blockly.Blocks['yolobit_ir_blaster_scan'] = {
  init: function () {
    this.jsonInit({
      "type": "yolobit_ir_blaster_scan",
      "message0": "quét và lưu tín hiệu %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MESSAGE",
          "options": [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
            ["10", "10"],
            ["11", "11"],
            ["12", "12"],
            ["13", "13"],
            ["14", "14"],
            ["15", "15"],
            ["16", "16"],
            ["17", "17"],
            ["18", "18"],
            ["19", "19"],
            ["20", "20"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#6C3483",
      "tooltip": "Quét và lưu tín hiệu IR cho thiết bị được chọn",
      "helpUrl": "",
      "generator_async": true
    });
  }
};

Blockly.Python['yolobit_ir_blaster_scan'] = function (block) {
  var signal_number = block.getFieldValue('MESSAGE');  // Get the selected number (1-10)
  var code = 'ir_blaster.scan("' + signal_number + '")\n';  // Use the selected number as input
  return code;
};


Blockly.Blocks['yolobit_ir_blaster_send'] = {
  init: function () {
    this.jsonInit({
      "type": "yolobit_ir_blaster_send",
      "message0": "gửi tín hiệu %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MESSAGE",
          "options": [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
            ["10", "10"],
            ["11", "11"],
            ["12", "12"],
            ["13", "13"],
            ["14", "14"],
            ["15", "15"],
            ["16", "16"],
            ["17", "17"],
            ["18", "18"],
            ["19", "19"],
            ["20", "20"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#6C3483",
      "tooltip": "Gửi tín hiệu IR theo tên đã lưu",
      "helpUrl": "",
      "generator_async": true
    });
  }
};

Blockly.Python['yolobit_ir_blaster_send'] = function (block) {
  var signal_number = block.getFieldValue('MESSAGE');  // Get the selected number (1-10)
  var code = 'ir_blaster.send("' + signal_number + '")\n';  // Use the selected number as input
  return code;
};

Blockly.Blocks['yolobit_ir_blaster_delete'] = {
  init: function () {
    this.jsonInit({
      "type": "yolobit_ir_blaster_delete",
      "message0": "xóa tín hiệu %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MESSAGE",
          "options": [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
            ["10", "10"],
            ["11", "11"],
            ["12", "12"],
            ["13", "13"],
            ["14", "14"],
            ["15", "15"],
            ["16", "16"],
            ["17", "17"],
            ["18", "18"],
            ["19", "19"],
            ["20", "20"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#6C3483",
      "tooltip": "Xóa tín hiệu IR đã lưu theo tên thiết bị",
      "helpUrl": ""
    });
  }
};

Blockly.Python['yolobit_ir_blaster_delete'] = function (block) {
  var signal_name = block.getFieldValue('MESSAGE');
  var code = 'ir_blaster.delete_signal("' + signal_name + '")\n';
  return code;
};
