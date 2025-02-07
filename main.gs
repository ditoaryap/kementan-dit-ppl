function spdForm() {
  var htmlForm = HtmlService.createTemplateFromFile('index')
  var html = htmlForm.evaluate()
  html.setWidth(1600).setHeight(1000)
  var ui = SpreadsheetApp.getUi()
  ui.showModalDialog(html, "Input Form SPD")
  doGet()
}

// function spdForm() {
//   var htmlForm = HtmlService.createTemplateFromFile('index');
//   var html = htmlForm.evaluate();
//   var width = Math.min(window.innerWidth * 0.8, 2304);  // Lebar maksimal 2304px (80% dari lebar MacBook)
//   var height = Math.min(window.innerHeight * 0.75, 1280); // Tinggi maksimal 1280px (75% dari tinggi MacBook)
//   html.setWidth(width).setHeight(height);
//   var ui = SpreadsheetApp.getUi();
//   ui.showModalDialog(html, "Input Form SPD");
//   doGet()
// }


function sptjmForm() {
  var htmlForm = HtmlService.createTemplateFromFile('sptjm')
  var html = htmlForm.evaluate()
  html.setWidth(500).setHeight(500)
  var ui = SpreadsheetApp.getUi()
  ui.showModalDialog(html, "Input Form SPD")
  doGet()
}

function createMenu_(){
  var ui = SpreadsheetApp.getUi()
  var menu = ui.createMenu("Input Berkas")
  menu.addItem("SPJ", "spdForm")
  menu.addItem("SPTJM", "sptjmForm")
  menu.addToUi()
}

function onOpen(){
  createMenu_()
}
