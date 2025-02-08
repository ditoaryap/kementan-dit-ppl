function doGet() {
  return HtmlService.createHtmlOutputFromFile('index'); // Menampilkan HTML file
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getOptions() {
  var sheet = SpreadsheetApp.openById("14apFK4OYgvJWW8Euq-YouK6up7-sN_wSPusrCRm2cJk").getSheetByName("SBM_2025");
  var data = sheet.getRange("E2:E" + sheet.getLastRow()).getValues();
  
  // Konversi array 2D menjadi array 1D dan filter nilai kosong
  var options = data.flat().filter(String);
  
  return options;
}

function cariDataPegawai(nomorInput) {
  const SPREADSHEET_ID = "14apFK4OYgvJWW8Euq-YouK6up7-sN_wSPusrCRm2cJk";
  const SHEET_NAME = "NIP";

  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    const rows = sheet.getDataRange().getValues();

    if (rows.length < 2) {
      return "Data tidak ditemukan"; // Jika sheet hanya berisi header
    }

    const header = rows[0].map(h => h ? h.toString().trim() : ""); // Pastikan header valid

    // Filter hanya baris yang memiliki data valid di kolom pertama
    const dataPegawai = rows.slice(1).filter(row => row.length > 0 && row[0]);

    // Cari berdasarkan Nomor Pegawai
    const pegawai = dataPegawai.find(row => row[0] === nomorInput);

    if (!pegawai) {
      return "Data tidak ditemukan";
    }

    let pegawaiObj = {};
    header.forEach((key, index) => {
      if (key) { // Hindari header kosong
        pegawaiObj[key] = pegawai[index] !== undefined ? pegawai[index] : "null"; // Hindari undefined
      }
    });

    return pegawaiObj;

  } catch (error) {
    Logger.log("Error: " + error.message);
    return "Terjadi kesalahan dalam pencarian data";
  }
}

// Contoh penggunaan:
Logger.log(cariDataPegawai(238));



