---
title: "LP-SV-01 — Sottospazi, base e dimensione"
goal: "Dato W⊆V, decidere se è sottospazio e trovarne base e dimensione."
inputs: ["Spazio V su K", "Descrizione di W: span{v_i} oppure vincoli Ax=0"]
tags: ["Spazi vettoriali","Basi & Dimensione"]
path_expr: "ModelSpace > NormalizeW > SubspaceTest > (SpanRoute | ConstraintRoute) > BasisW > DimRead > Wrap"
links: ["/hub/spazi-vettoriali", "/hub/basi-dimensione", "/hub/matrici#rref"]
---

Mini percorso per verificare se un sottoinsieme è sottospazio e ricavarne base e dimensione.

!!! tip "Axio"
    Mettere ordine è il primo passo: normalizza sempre la descrizione di $W$.

**Lap**  
1) *ModelSpace*: fissa V, K, coordinate.  
2) *NormalizeW*: uniforma W (lista generatori **o** $A x=0$).  
3) *SubspaceTest*: $0\in W$ e chiusura? (altrimenti → "Non sottospazio").  
4) *SpanRoute* **oppure** *ConstraintRoute*: RREF su $[v_1\dots v_k]$ **oppure** su $A$.  
5) *BasisW*: estrai base (colonne pivot / parametri liberi).  
6) *DimRead*: $\dim(W) =$ #vettori di base.

```mermaid
flowchart TD
  A[NormalizeW] --> B{W=Span o Ax=0?}
  B -->|Span| C[RREF su [v1…vk]]
  B -->|Ax=0| D[RREF su A]
  C --> E[Base(W)]
  D --> E
  E --> F[dim(W)]
```

Errori comuni: confondere #equazioni con $\dim(W)$; contare pivot sulla matrice sbagliata.

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-10
    **Breve descrizione:** Aggiunto percorso LP-SV-01.
