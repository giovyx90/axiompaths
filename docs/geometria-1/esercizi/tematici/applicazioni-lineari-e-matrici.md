# Esercizi sulle Applicazioni Lineari e Matrici

**Esercizio**

Sia
\[
A=\begin{pmatrix}
1 & 2 & k\\
0 & 1 & 3\\
1 & k & 4
\end{pmatrix}, \qquad k\in\mathbb{R}.
\]
Determina i valori di \(k\) per cui \(\operatorname{rank}(A)=3\) e quelli per cui \(\operatorname{rank}(A)<3\).
Per i valori con \(\operatorname{rank}(A)<3\) trova una base del nucleo.
Per tutti i valori di \(k\), individua una base dell'immagine.

**Soluzione**

Il determinante di \(A\) è

\[
\det(A)=10-4k.
\]

Se \(k\neq \tfrac{5}{2}\), il determinante è non nullo e quindi \(\operatorname{rank}(A)=3\).
In questo caso l'applicazione associata è invertibile, il nucleo è banale e l'immagine coincide con \(\mathbb{R}^3\); una base dell'immagine è data dalle tre colonne di \(A\).

Per \(k=\tfrac{5}{2}\) il determinante si annulla e il rango scende a \(2\).
Riducendo la matrice otteniamo

\[
\begin{pmatrix}
1 & 2 & \tfrac{5}{2} \\
0 & 1 & 3 \\
0 & 0 & 0
\end{pmatrix}.
\]

Ponendo \(x_3=t\), si ricava \(x_2=-3t\) e \(x_1=\tfrac{7}{2}t\).
Una base del nucleo è quindi \(\{(7,-6,2)\}\).
Le prime due colonne formano invece una base dell'immagine:

\[
\{(1,0,1),\ (2,1,\tfrac{5}{2})\}.
\]

> **Axio consiglia:** prova a verificare come cambia il nucleo se aggiungi una riga o una colonna alla matrice!

