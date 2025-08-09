# Teorema di Grassmann

Siano $U$ e $V$ sottospazi di uno spazio vettoriale $W$ di dimensione finita.
Allora vale la **formula di Grassmann**

$$
\dim(U+V) + \dim(U \cap V) = \dim U + \dim V.
$$

Per un ripasso su somme e intersezioni di sottospazi, consulta la sezione sugli [spazi vettoriali](../spazi-vettoriali/index.md).

## Dimostrazione

Sia $\{w_1,\dots,w_r\}$ una base di $U \cap V$. Completiamola a basi di $U$ e $V$:

$$
\{w_1,\dots,w_r,u_{r+1},\dots,u_m\} \text{ base di } U,
$$

$$
\{w_1,\dots,w_r,v_{r+1},\dots,v_n\} \text{ base di } V.
$$

Mostriamo che

$$
\mathcal B = \{w_1,\dots,w_r,u_{r+1},\dots,u_m,v_{r+1},\dots,v_n\}
$$

è una base di $U+V$.

1. **Generazione.** Ogni vettore di $U+V$ si scrive come $u+v$ con $u\in U$, $v\in V$. I vettori di $U$ si esprimono tramite la base di $U$,
 quelli di $V$ tramite la base di $V$: dunque $\mathcal B$ genera $U+V$.
2. **Indipendenza.** Supponiamo

$$
\sum_{i=1}^r \alpha_i w_i + \sum_{i=r+1}^m \beta_i u_i + \sum_{j=r+1}^n \gamma_j v_j = 0.
$$

Separando le componenti in $U$ e in $V$ otteniamo

$$
\sum_{i=1}^r \alpha_i w_i + \sum_{i=r+1}^m \beta_i u_i = -\sum_{j=r+1}^n \gamma_j v_j \in U \cap V.
$$

Ma i $u_i$ con $i>r$ sono fuori da $U\cap V$, quindi $\beta_i=0$ per $i>r$. Analogamente $\gamma_j=0$ per $j>r$, e infine $\alpha_i=0$ per l'indipendenza dei $w_i$. Pertanto $\mathcal B$ è indipendente.

La cardinalità di $\mathcal B$ è $m+n-r$ e coincide con $\dim(U+V)$. Sostituendo $r=\dim(U\cap V)$, $m=\dim U$ e $n=\dim V$ otteniamo la formula dichiarata.

!!! tip "Axio"
    Prova a verificare la formula con due sottospazi distinti del piano: quanto può valere l'intersezione?
