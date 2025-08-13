---
title: "LP-AL-04 — Definire T: linearità e matrice"
goal: "Verificare linearità e costruire [T]_{B,B′}; applicare T a un vettore."
inputs: ["Definizione di T (formula o valori su base)", "Basi B di V e B' di W"]
tags: ["Applicazioni lineari"]
path_expr: "(GivenOnBasis | GivenByFormula) > LinearityCheck > ColumnsFromImages > MatrixAssemble > ActionOnVector > Wrap"
links: ["/hub/applicazioni-lineari#linearita", "/hub/applicazioni-lineari#rappresentazione-matriciale"]
---

Costruisci la matrice di un'applicazione lineare e verifica che sia davvero lineare.

!!! tip "Axio"
    Una matrice è la foto di $T$ in due basi: assicurati che le immagini siano nella base del codominio.

**Lap**  
1) *LinearityCheck*: additività + omogeneità.  
2) *ColumnsFromImages*: esprimi $T(b_i)$ in $B'$ ⇒ colonne.  
3) *MatrixAssemble*: monta $[T]_{B,B'}$.  
4) *ActionOnVector*: $[T(x)]_{B'} = [T] \cdot [x]_B$.

Errori comuni: immagini non espresse nella base del codominio; usare vettori non di base per definire colonne.

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-10
    **Breve descrizione:** Aggiunto percorso LP-AL-04.
