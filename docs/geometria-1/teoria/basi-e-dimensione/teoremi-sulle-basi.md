# Teoremi sulle Basi

## Insiemi massimali

Un insieme $\{v_1,\dots,v_r\}\subseteq V$ è **massimale** se ogni altro
$v_i$ con $i>r$ rende dipendente l'insieme $\{v_1,\dots,v_r,v_i\}$.

## Teorema

Se $\{v_1,\dots,v_n\}$ genera $V$ e $\{v_1,\dots,v_r\}$ è massimale e indipendente,
allora $\{v_1,\dots,v_r\}$ è una base di $V$.

## Dimensione

Ogni base di $V$ ha lo stesso numero di elementi. Perciò possiamo
definire la **dimensione** di $V$ come il numero di vettori di una qualunque base.

### Dipendenza in spazi finiti

Se $\{w_1,\dots,w_n\}\subseteq V$ con $n>m$ e $\dim V = m$, allora i
$w_i$ sono dipendenti.

### Lemma di scambio

Data una base $B=\{b_1,\dots,b_n\}$ e un vettore $v\notin \operatorname{Span}(B)$,
l'insieme $B\cup\{v\}$ è dipendente. Esiste $b_j\in B$ tale che

\[
(B\setminus\{b_j\})\cup\{v\}
\]

è ancora una base di $V$.
