import React, { useEffect, useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/build/pdf";
import "pdfjs-dist/build/pdf.worker.mjs"; // Import the worker
const xlsx = require("xlsx");

// Set workerSrc dynamically (for PDF.js worker)
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${getDocument.version}/pdf.worker.min.js`;

// Function to remove empty rows
function removeEmptyRows(table) {
  return table.filter((row) =>
    row.some((cell) => cell !== null && cell !== "")
  );
}

// Function to merge scheme data
function mergeSchemeData(table, folioNumberColumnIndex, schemeColumnIndex) {
  for (let i = 1; i < table.length; i++) {
    const currentRow = table[i];
    const previousRow = table[i - 1];

    // Check if the 'Folio Number' column in the current row is empty
    if (!currentRow[folioNumberColumnIndex]) {
      // Merge 'Scheme Code - Scheme Name' with the previous row
      if (previousRow[schemeColumnIndex]) {
        previousRow[schemeColumnIndex] += currentRow[schemeColumnIndex] || "";
        currentRow[schemeColumnIndex] = null; // Clear the current row's Scheme Name
      }
    }
  }
  return table;
}

const PdfReader = () => {
  const [file, setFile] = useState(null); // Store the selected PDF file

  useEffect(() => {
    const loadAndExtractText = async (fileData) => {
      try {
        // Load the PDF
        const loadingTask = getDocument({
          data: fileData,
          password: "AQWPJ5872H",
        });
        const pdf = await loadingTask.promise;

        const numPages = pdf.numPages;
        console.log(`Number of pages: ${numPages}`);

        const allRows = [];
        // Loop through each page to extract text
        for (let i = 1; i <= numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();

          // Extract the text items into rows
          const rows = textContent.items.map((item) => item.str);

          // Group items into rows based on some expected structure (adjust as necessary)
          // Here we assume each row in the PDF ends with a line break.
          for (let j = 0; j < rows.length; j += 10) {
            // Replace with actual number of columns
            allRows.push(rows.slice(j, j + 10));
          }
        }

        // Process the table data
        let mergedTable = mergeSchemeData(allRows, 0, 2);
        let cleanedTable = removeEmptyRows(mergedTable);

        // Convert to Excel
        const worksheet = xlsx.utils.aoa_to_sheet(cleanedTable);
        const workbook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(workbook, worksheet, "Extracted Data");

        // Save to Excel file
        const outputExcel = "output_table.xlsx";
        xlsx.writeFile(workbook, outputExcel);
        console.log(`Data successfully written to ${outputExcel}`);
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };

    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const fileData = event.target.result;
        loadAndExtractText(fileData);
      };
      reader.readAsArrayBuffer(file); // Read the PDF file as an ArrayBuffer
    }
  }, [file]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div>
      <h1>PDF Reader</h1>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <p>Check the console for the extracted text!</p>
    </div>
  );
};

export default PdfReader;
