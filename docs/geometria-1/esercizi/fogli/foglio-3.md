# Foglio 3

Terzo foglio di esercizi dedicato a matrici e sottospazi.

## Prerequisiti

- [Definizioni e operazioni sulle matrici](../../teoria/matrici/definizioni.md)
- [Basi e dimensione degli spazi vettoriali](../../teoria/basi-e-dimensione/basi.md)

## Esercizio 1
Determinare la dimensione dello spazio

\[
W=\{A\in M_{n\times n}(\mathbb{R}) : \mathrm{tr}(A)=0\}.
\]

**Soluzione**

!!! tip "Axio ti suggerisce"
    Usa le matrici canoniche \(E_{ij}\) per organizzare le tue idee: sono una base naturale di \(M_{n\times n}(\mathbb{R})\).

1. Le matrici canoniche \(E_{ij}\) (un \(1\) in \((i,j)\), zeri altrove) formano una base di \(M_{n\times n}(\mathbb{R})\).

2. Se \(i\neq j\), la matrice \(E_{ij}\) ha diagonale nulla, quindi \(\mathrm{tr}(E_{ij})=0\). Vi sono \(n^{2}-n\) di queste matrici e appartengono tutte a \(W\).

3. Le matrici diagonali sono combinazioni di \(E_{11},\dots,E_{nn}\). L'unico vincolo per essere in \(W\) è che la somma degli elementi diagonali sia zero, cioè

\[
a_{11}+a_{22}+\cdots+a_{nn}=0.
\]

   Questo vincolo lineare riduce di uno i gradi di libertà: lo spazio delle diagonali a somma zero ha dimensione \(n-1\).

4. Sommando i contributi otteniamo

\[
\dim W = (n^{2}-n)+(n-1)=n^{2}-1.
\]

5. Una base esplicita di \(W\) è data da tutte le \(E_{ij}\) con \(i\neq j\) insieme alle \(n-1\) matrici diagonali

\[
E_{11}-E_{nn},\;E_{22}-E_{nn},\;\dots,\;E_{n-1,n-1}-E_{nn}.
\]

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-09  
    **Breve descrizione:** Creato il foglio 3 con esercizio sulla dimensione delle matrici a traccia nulla.

