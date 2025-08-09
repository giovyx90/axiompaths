window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  },
  options: {
    processHtmlClass: 'arithmatex',
    ignoreHtmlClass: '.*'
  }
};

document$.subscribe(() => {
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise();
  }
});
