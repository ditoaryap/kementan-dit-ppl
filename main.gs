function spdForm() {
  var htmlForm = HtmlService.createTemplateFromFile('index')
  var html = htmlForm.evaluate()
  html.setWidth(1600).setHeight(1000)
  var ui = SpreadsheetApp.getUi()
  ui.showModalDialog(html, "Input Form SPD")
  doGet()
}



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
