# Esercizi sulle Applicazioni Lineari e Matrici

## Obiettivo della tematica

Allenare al calcolo di rango, nucleo e immagine di trasformazioni lineari mediante rappresentazioni matriciali.

## Metodo generale

Le soluzioni fanno uso di operazioni elementari di riga e colonna per studiare le proprietà della matrice associata.

## Indice

- [Esercizio 1](#esercizio-1)

## Esercizio 1

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

### Metodo 1 – Determinante

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

### Metodo 2 – Riduzione di Gauss

Applichiamo le operazioni elementari in funzione di \(k\) senza calcolare il determinante.

\[
\begin{aligned}
A &\xrightarrow{R_3-R_1}
\begin{pmatrix}
1 & 2 & k\\
0 & 1 & 3\\
0 & k-2 & 4-k
\end{pmatrix}
\xrightarrow{R_3-(k-2)R_2}
\begin{pmatrix}
1 & 2 & k\\
0 & 1 & 3\\
0 & 0 & 4-k-3(k-2)
\end{pmatrix}\\[2ex]
&=
\begin{pmatrix}
1 & 2 & k\\
0 & 1 & 3\\
0 & 0 & 10-4k
\end{pmatrix}.
\end{aligned}
\]

L'ultima riga è nulla solo per \(k=\tfrac{5}{2}\), caso in cui il rango è \(2\); altrimenti il rango è \(3\).
Per \(k=\tfrac{5}{2}\), scegliendo \(x_3=t\) otteniamo \(x_2=-3t\) e \(x_1=\tfrac{7}{2}t\), quindi una base del nucleo è \(\{(7,-6,2)\}\) e una base dell'immagine è data dalle prime due colonne.

> **Axio chiede:** sapresti costruire una trasformazione lineare diversa che abbia lo stesso nucleo?

