# Inversa di una Matrice

In questa pagina introduciamo il concetto di **inversa di una matrice**, vedendo quando esiste, come si calcola e quali sono le sue principali proprietà.

## 1. Quando esiste l'inversa
Una matrice quadrata \(A \in M_{n \times n}(\mathbb{K})\) è invertibile se esiste una matrice \(A^{-1}\) tale che

\[
A \cdot A^{-1} = I_n \quad \text{e} \quad A^{-1} \cdot A = I_n
\]

La condizione necessaria e sufficiente per l'esistenza dell'inversa è

\[
\det(A) \neq 0
\]

## 2. Calcolo esplicito
Consideriamo

\[
A =
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
\]

Il determinante è

\[
\det(A) = 1 \cdot 4 - 2 \cdot 3 = -2 \neq 0
\]

Quindi l'inversa esiste ed è

\[
A^{-1} = \frac{1}{-2}
\begin{pmatrix}
4 & -2 \\
-3 & 1
\end{pmatrix}
=
\begin{pmatrix}
-2 & 1 \\
\tfrac{3}{2} & -\tfrac{1}{2}
\end{pmatrix}
\]

Verifica:

\[
A \cdot A^{-1} =
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
\begin{pmatrix}
-2 & 1 \\
\tfrac{3}{2} & -\tfrac{1}{2}
\end{pmatrix}
=
\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}
\]

## 3. Proprietà dell'inversa
- L'inversa è unica.
- \((A^{-1})^{-1} = A\).
- Se \(A\) e \(B\) sono invertibili, \((AB)^{-1} = B^{-1}A^{-1}\).

!!! tip "Axio"
    Quando il determinante non ti dà problemi, l'inversa appare come per magia. Continua così!

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-10
    **Breve descrizione:** Creata la pagina dedicata all'inversa delle matrici.
