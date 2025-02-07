function getSheetById(spreadsheetId, sheetName) {
  var ss = SpreadsheetApp.openById(spreadsheetId);
  var sheet = ss.getSheetByName(sheetName);
  return sheet;
}

function getOptions_v1() {
  var sheet = getSheetById("14apFK4OYgvJWW8Euq-YouK6up7-sN_wSPusrCRm2cJk", "SBM_2025");
  var lastRow = sheet.getLastRow();
  
  var data = sheet.getRange("D2:D" + lastRow).getValues();
  console.log(data)
  return data.flat().filter(String); // Menghapus nilai kosong
}
