import html2pdf from 'html2pdf.js';
export function exportToPDF(id) {
  const el = document.getElementById(id);
  html2pdf().from(el).save('bilderbuch.pdf');
}