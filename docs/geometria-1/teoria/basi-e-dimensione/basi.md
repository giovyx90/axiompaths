# Basi

Studiamo le basi degli [spazi vettoriali](../spazi-vettoriali/index.md) e come ogni vettore si rappresenta in modo unico.

Un insieme ordinato di vettori di $V$ è una **base** se è linearmente indipendente
e genera $V$.

## Teorema della rappresentazione unica

Se $v_1,\dots,v_n$ sono indipendenti e

\[
x_1v_1+\dots+x_nv_n = y_1v_1+\dots+y_nv_n,
\]

allora $x_i=y_i$ per ogni $i$.

### Dimostrazione

Sottraendo le due espressioni otteniamo

\[
(x_1-y_1)v_1+\dots+(x_n-y_n)v_n = 0.
\]

L'indipendenza dei $v_i$ implica che tutti i coefficienti siano nulli,
quindi $x_i = y_i$ per ogni $i$.

!!! tip "Axio"
    Ogni base rende i conti unici: controlla sempre l'indipendenza dei vettori!

### Coordinate

Dato $v\in V$, esistono unici scalari $x_1,\dots,x_n$ tali che

\[
v = x_1v_1+\dots+x_nv_n.
\]

La $n$-upla $(x_1,\dots,x_n)$ sono le **coordinate** di $v$ rispetto alla base.
