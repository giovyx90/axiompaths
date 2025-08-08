# Esercizio 2 – Indipendenza lineare di terne di vettori in $\mathbb{R}^4$

Dimostra che le seguenti terne di vettori in $\mathbb{R}^4$ sono linearmente indipendenti.

\[
\left\{
\begin{pmatrix}
1\\0\\3\\1
\end{pmatrix},\,
\begin{pmatrix}
3\\0\\4\\-2
\end{pmatrix},\,
\begin{pmatrix}
1\\1\\-1\\-1
\end{pmatrix}
\right\},\quad
\left\{
\begin{pmatrix}
2\\1\\-3\\1
\end{pmatrix},\,
\begin{pmatrix}
0\\0\\2\\-2
\end{pmatrix},\,
\begin{pmatrix}
3\\1\\-7\\-1
\end{pmatrix}
\right\}.
\]

## Soluzione

### Prima terna

Costruiamo la matrice $A$ con i vettori come colonne:

\[
A =
\begin{pmatrix}
1 & 3 & 1\\
0 & 0 & 1\\
3 & 4 & -1\\
1 & -2 & -1
\end{pmatrix}
\]

Applichiamo l'eliminazione di Gauss:

\[
\begin{aligned}
R_3 &\leftarrow R_3 - 3R_1 &&\Rightarrow (0\,-5\,-4)\\
R_4 &\leftarrow R_4 - R_1 &&\Rightarrow (0\,-5\,-2)\\
R_4 &\leftarrow R_4 - R_2 &&\Rightarrow (0\,0\,2)\\
R_4 &\leftarrow R_4 - 2R_3 &&\Rightarrow (0\,0\,0)
\end{aligned}
\]

La matrice ridotta ha tre pivot, quindi i vettori della prima terna sono linearmente indipendenti.

### Seconda terna

Costruiamo la matrice $B$:

\[
B =
\begin{pmatrix}
2 & 0 & 3\\
1 & 0 & 1\\
-3 & 2 & -7\\
1 & -2 & -1
\end{pmatrix}
\]

Applichiamo l'eliminazione di Gauss:

\[
\begin{aligned}
R_2 &\leftarrow R_2 - \tfrac{1}{2}R_1 &&\Rightarrow (0\,0\,0)\\
R_3 &\leftarrow R_3 + \tfrac{3}{2}R_1 &&\Rightarrow (0\,2\,-2)\\
R_4 &\leftarrow R_4 - \tfrac{1}{2}R_1 &&\Rightarrow (0\,-2\,-2)\\
R_4 &\leftarrow R_4 + R_2 &&\Rightarrow (0\,0\,-4)\\
R_4 &\leftarrow R_4 + \tfrac{4}{4}R_3 &&\Rightarrow (0\,0\,0)
\end{aligned}
\]

Anche qui la matrice ridotta presenta tre pivot, dunque i vettori della seconda terna sono linearmente indipendenti.

### Conclusione

\[
\boxed{\text{Entrambe le terne sono linearmente indipendenti}}
\]

