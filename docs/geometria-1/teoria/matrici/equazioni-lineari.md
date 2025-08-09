# Equazioni Lineari

Studiamo i sistemi di equazioni lineari e il ruolo delle matrici nella loro rappresentazione.

Un sistema di $m$ equazioni lineari in $n$ incognite con coefficienti in $\mathbb{K}$ ha la forma

\[
\begin{cases}
a_{11}x_1 + \dots + a_{1n}x_n = b_1 \\
\vdots \\
a_{m1}x_1 + \dots + a_{mn}x_n = b_m
\end{cases}
\]

e si rappresenta mediante la matrice dei coefficienti $A=(a_{ij})$.

Il sistema è **omogeneo** se $b_1=\dots=b_m=0$; possiede sempre la soluzione banale $x_1=\dots=x_n=0$.

## Soluzioni

Se $n>m$, il sistema omogeneo ammette sempre una soluzione non banale, cioè esistono $x_i$ non tutti nulli tali che $Ax=0$.

Se $m=n$ e le colonne di $A$ sono [linearmente indipendenti](../spazi-vettoriali/combinazioni-lineari.md), allora il sistema $Ax=b$ ha una soluzione unica.

!!! tip "Axio"
    Ogni sistema lineare è un enigma: cerca la chiave nascosta nelle sue colonne!

Per la riduzione di Gauss e il concetto di rango, consulta [Rango e Riduzione di Gauss](rango-e-riduzione-di-gauss.md).
