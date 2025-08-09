# Definizioni e Operazioni

Introduciamo il concetto di matrice e le principali operazioni che possiamo eseguire su di essa.

Una **matrice** $A$ a coefficienti in un campo $\mathbb{K}$ è una tabella rettangolare di elementi di $\mathbb{K}$ disposta in $m$ righe e $n$ colonne:

\[
A = (a_{ij}), \quad i = 1,\dots,m, \; j = 1,\dots,n.
\]

La colonna $j$-esima si indica con $A^j$ mentre la riga $i$-esima con $A_i$.

## Operazioni

Date due matrici $A,B \in M_{m,n}(\mathbb{K})$ possiamo sommarle componente a componente:

\[
(A+B)_{ij} = a_{ij} + b_{ij}.
\]

Per ogni scalare $c\in\mathbb{K}$, la matrice $cA$ si ottiene moltiplicando tutte le entrate di $A$ per $c$.

Queste operazioni rendono $M_{m,n}(\mathbb{K})$ uno [spazio vettoriale](../spazi-vettoriali/index.md).

## Tipi di Matrici

- **Matrice quadrata**: $m=n$.
- **Matrice zero**: tutte le entrate sono nulle.
- **Trasposta** $A^T$: si ottiene scambiando righe e colonne.
- **Simmetrica**: $A=A^T$.
- **Diagonale**: tutti gli elementi fuori dalla diagonale principale sono zero. La matrice identità $I_n$ è un esempio diagonale con $1$ sulla diagonale.

!!! tip "Axio"
    Riconoscere il tipo di matrice è il primo passo per usarla al meglio!

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-09  
    **Breve descrizione:** Inizio tracciamento delle modifiche.

