---
title: "LP-KI-05 — Ker, Im, Rank–Nullity e classificazione"
goal: "Dalla matrice di T: Ker, Im, rango/nullità; decidere iniettiva/suriettiva/isomorfismo."
inputs: ["[T]_{B,B’} oppure definizione di T + basi"]
tags: ["Applicazioni lineari","Basi & Dimensione"]
path_expr: "MatrixRep > KernelSolve > ImageBasis > RankNullityCheck > Classify > (InvertIfIso?) > Wrap"
links: ["/hub/applicazioni-lineari#ker-im", "/hub/basi-dimensione#teorema-rango-nullita"]
---

Usa la matrice di un'applicazione per studiarne nucleo, immagine e proprietà di iniettività o suriettività.

!!! tip "Axio"
    Se trovi tutti pivot possibili, stai forse osservando un isomorfismo!

**Lap**  
1) *KernelSolve*: $Tx=0$ → base(Ker), $\dim(\ker T)$.  
2) *ImageBasis*: RREF($[T]$) → colonne pivot = base(Im), $\operatorname{rk}(T)$.  
3) *RankNullityCheck*: $\dim(V)=\operatorname{rk}+\text{null}$.  
4) *Classify*: null=0 ⇒ iniettiva; rk=dim W ⇒ suriettiva; se $\dim V=\dim W$ e bijettiva ⇒ isomorfismo (calcola $T^{-1}$ con Gauss su $[T|I]$).

Errori comuni: leggere pivot nella matrice sbagliata; non esprimere Im(T) nella base del codominio.

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-10
    **Breve descrizione:** Aggiunto percorso LP-KI-05.
