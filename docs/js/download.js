document.addEventListener('DOMContentLoaded', () => {
  const article = document.querySelector('article.md-typeset');
  if (!article) return;

  const btn = document.createElement('button');
  btn.textContent = '⬇︎ Scarica PDF';
  btn.className = 'md-button';
  const h1 = article.querySelector('h1');
  (h1?.parentNode || article).insertBefore(btn, h1?.nextSibling || article.firstChild);

  btn.addEventListener('click', () => {
    const opt = {
      margin: 10,
      filename: (document.title || 'axiompaths') + '.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
      .set(opt)
      .from(article)
      .toPdf()
      .get('pdf')
      .then(pdf => {
        const totalPages = pdf.getNumberOfPages();
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(8);
        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);
          pdf.text('Axiom Paths - PDF Edition', 10, 10);
        }
      })
      .save();
  });
});
