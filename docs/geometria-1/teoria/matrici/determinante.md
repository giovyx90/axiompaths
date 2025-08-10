# Determinante

Introduciamo il **determinante**, un numero associato a ogni matrice quadrata che misura orientamento e volume.

## Proprietà fondamentali

- Il determinante è multilineare rispetto alle righe e cambia segno scambiando due righe.
- Se due righe sono proporzionali, il determinante è nullo.
- Il determinante di una matrice triangolare è il prodotto degli elementi sulla diagonale.

\[
\det(A) = a_{11} \cdots a_{nn}
\]

## Calcolo

Per una matrice \(2 \times 2\) il determinante è

\[
\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc
\]

Per una matrice \(3 \times 3\) possiamo usare la regola di Sarrus:

\[
\det \begin{pmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{pmatrix} = aei + bfg + cdh - ceg - bdi - afh
\]

Più in generale, lo sviluppo di Laplace lungo la riga \(i\) fornisce

\[
\det(A) = \sum_{j=1}^{n} (-1)^{i+j} a_{ij} \det(M_{ij})
\]

dove \(M_{ij}\) è la matrice ottenuta eliminando la riga \(i\) e la colonna \(j\).

!!! tip "Axio"
    Scomponi la matrice con qualche zero: il calcolo del determinante diventa un gioco da ragazzi!

---

!!! info "Aggiornamenti"
    **Data:** 2024-10-06
    **Breve descrizione:** Creata pagina introduttiva sul determinante.

