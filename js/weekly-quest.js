(function(){
  const quests = [
    {
      text: "Definisci uno spazio vettoriale e fornisci un esempio.",
      solution: "quest/soluzioni-axio-quest/#q001"
    },
    {
      text: "Spiega perché S={(x,y)∈ℝ² : x≥0} non è uno spazio vettoriale.",
      solution: "quest/soluzioni-axio-quest/#q002"
    },
    {
      text: "Trova una base del sottospazio x+2y−z=0.",
      solution: "quest/soluzioni-axio-quest/#q003"
    },
    {
      text: "I vettori (1,0,1),(0,1,1),(1,1,2) sono indipendenti?",
      solution: "quest/soluzioni-axio-quest/#q004"
    },
    {
      text: "Descrivi e determina una base delle matrici simmetriche 2×2.",
      solution: "quest/soluzioni-axio-quest/#q005"
    },
    {
      text: "Completa {(1,1,0,0),(0,1,1,0)} a base di ℝ⁴.",
      solution: "quest/soluzioni-axio-quest/#q006"
    },
    {
      text: "Enuncia la formula di Grassmann e dai un esempio.",
      solution: "quest/soluzioni-axio-quest/#q007"
    },
    {
      text: "Calcola U∩W per U=<(1,1,0,0),(0,1,1,0)> e W=<(1,0,1,0),(1,1,1,1)>.",
      solution: "quest/soluzioni-axio-quest/#q008"
    },
    {
      text: "Trova rango e nucleo della matrice [[1,2,3],[2,4,6],[1,0,1]].",
      solution: "quest/soluzioni-axio-quest/#q009"
    },
    {
      text: "Applica Rouché–Capelli al sistema con matrice [[1,1,0],[0,1,1],[1,0,1]] e b=(1,2,3).",
      solution: "quest/soluzioni-axio-quest/#q010"
    },
    {
      text: "Determina la matrice di f(x,y,z)=(x+z,y−z).",
      solution: "quest/soluzioni-axio-quest/#q011"
    },
    {
      text: "Trova le coordinate di v=(2,3,4) rispetto a B={(1,0,1),(0,1,1),(1,1,0)}.",
      solution: "quest/soluzioni-axio-quest/#q012"
    },
    {
      text: "Quando la composizione g∘f è l'identità se A è 3×2 e B è 2×3?",
      solution: "quest/soluzioni-axio-quest/#q013"
    },
    {
      text: "Mostra che f(a,b)=(a+b,a−2b) è un isomorfismo e calcola l'inversa.",
      solution: "quest/soluzioni-axio-quest/#q014"
    },
    {
      text: "Calcola la matrice di f(x,y)=(x+2y,3x+y) rispetto alle basi B e C.",
      solution: "quest/soluzioni-axio-quest/#q015"
    }
  ];

  const weekNumber = Math.floor(Date.now() / 604800000);
  const quest = quests[weekNumber % quests.length];

  const container = document.getElementById('weekly-quest');
  if (container && quest) {
    container.innerHTML = `<p>${quest.text}</p><p><a href="${quest.solution}">🔎 Vedi la soluzione</a></p>`;
  }
})();
