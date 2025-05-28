import html2pdf from 'html2pdf.js';
export function exportToPDF(elementId) {
  const element = document.getElementById(elementId);
  html2pdf().from(element).save('bilderbuch.pdf');
}