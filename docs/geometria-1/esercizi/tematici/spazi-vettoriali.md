# Esercizi sugli Spazi Vettoriali

Breve raccolta di esercizi per consolidare le nozioni sugli spazi vettoriali.

!!! tip "Axio"
    Sperimenta strategie diverse: ogni esercizio è un'opportunità per scoprire nuovi collegamenti.

**Esercizio**
Dimostra che le seguenti terne di vettori in $\mathbb{R}^4$ sono [linearmente indipendenti](../../teoria/spazi-vettoriali/combinazioni-lineari.md):

$$
\left\{
\begin{pmatrix}
1\\
0\\
3\\
1
\end{pmatrix},
\begin{pmatrix}
3\\
0\\
4\\
-2
\end{pmatrix},
\begin{pmatrix}
1\\
1\\
-1\\
-1
\end{pmatrix}
\right\},
\qquad
\left\{
\begin{pmatrix}
2\\
1\\
-3\\
1
\end{pmatrix},
\begin{pmatrix}
0\\
0\\
2\\
-2
\end{pmatrix},
\begin{pmatrix}
3\\
1\\
-7\\
-1
\end{pmatrix}
\right\}
$$

**Soluzione**

*Prima terna.*

Costruiamo la [matrice](../../teoria/matrici/definizioni.md) $A$ con i vettori come colonne:

$$
A = \begin{pmatrix}
1 & 3 & 1\\
0 & 0 & 1\\
3 & 4 & -1\\
1 & -2 & -1
\end{pmatrix}
$$

Applichiamo il metodo di Gauss:

$$
\begin{aligned}
R_3 &\leftarrow R_3 - 3R_1,\\
R_4 &\leftarrow R_4 - R_1,\\
R_4 &\leftarrow R_4 - R_2,\\
R_4 &\leftarrow R_4 - 2R_3.
\end{aligned}
$$

Otteniamo tre pivot, quindi la terna è linearmente indipendente.

*Seconda terna.*

Costruiamo la matrice $B$:

$$
B = \begin{pmatrix}
2 & 0 & 3\\
1 & 0 & 1\\
-3 & 2 & -7\\
1 & -2 & -1
\end{pmatrix}
$$

Applichiamo Gauss:

$$
\begin{aligned}
R_2 &\leftarrow R_2 - \tfrac{1}{2}R_1,\\
R_3 &\leftarrow R_3 + \tfrac{3}{2}R_1,\\
R_4 &\leftarrow R_4 - \tfrac{1}{2}R_1,\\
R_4 &\leftarrow R_4 + R_2,\\
R_4 &\leftarrow R_4 + R_3.
\end{aligned}
$$

Anche qui compaiono tre pivot, dunque la terna è linearmente indipendente.

Pertanto, entrambe le terne sono linearmente indipendenti.

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-09  
    **Breve descrizione:** Inizio tracciamento delle modifiche.

