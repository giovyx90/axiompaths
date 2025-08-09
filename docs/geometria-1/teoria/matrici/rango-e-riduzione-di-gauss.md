# Rango e Riduzione di Gauss

Approfondiamo come i sistemi lineari si risolvono tramite la riduzione di Gauss e come il concetto di rango descriva la dimensione dello spazio delle soluzioni.

!!! tip "Axio"
    Riduci passo dopo passo: ogni pivot ti avvicina alla soluzione!

## Dimensione dello Span

Dato un insieme di vettori $v_1,\dots,v_k\in\mathbb{R}^n$, la dimensione del loro span è pari al numero di vettori linearmente indipendenti. Disporre i $v_i$ come colonne di una matrice e ridurla a scala permette di individuarli tramite i pivot.

## Iperpiani

Un **iperpiano** in $\mathbb{R}^n$ è l'insieme

\[
W=\{x\in\mathbb{R}^n\mid a_1x_1+\dots+a_nx_n=0\}
\]

dove $a_1,\dots,a_n$ non sono tutti nulli. Questo spazio ha dimensione $n-1$. L'intersezione di più iperpiani si ottiene risolvendo il sistema lineare corrispondente e ha dimensione $n-r$, dove $r$ è il numero di pivot nella matrice a scala associata.

## Riduzione di Gauss

Per risolvere un sistema si applicano alla matrice completa le **operazioni elementari sulle righe**:

1. scambio di due righe;
2. addizione a una riga di un multiplo di un'altra;
3. moltiplicazione di una riga per un numero non nullo.

Queste operazioni non alterano l'insieme delle soluzioni. Applicandole si ottiene una **matrice a scala** (row echelon form, REF), in cui i pivot di ogni riga compaiono in colonne sempre più a destra. Proseguendo con le operazioni si possono annullare gli elementi sopra i pivot e normalizzare questi ultimi, ottenendo la **matrice a scala ridotta** (reduced row echelon form, RREF).

Una matrice ridotta a scala assume quindi la forma

\[
\begin{pmatrix}
\color{red}{1} & * & \dots & * & * \\
0 & \color{red}{1} & \dots & * & * \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
0 & 0 & \dots & \color{red}{1} & * \\
0 & 0 & \dots & 0 & 0
\end{pmatrix}
\]

dove i pivot sono evidenziati in rosso e gli $*$ rappresentano elementi arbitrari.

Esempio:

\[
\begin{pmatrix}
1 & 0 & 0 & 0 & 0\\
0 & 0 & -1 & 3 & 0\\
0 & 0 & 0 & 2 & \pi\\
0 & 0 & 0 & 0 & -1
\end{pmatrix}
\]

Risolvendo dal basso verso l'alto si ricavano $x_5=x_4=x_3=x_1=0$ lasciando $x_2$ libero. Lo spazio delle soluzioni ha quindi dimensione $1$.

## Rango per Righe e per Colonne

Per una matrice $A$ con righe $A_1,\dots,A_k\in\mathbb{R}^n$ il **rango per righe** è

\[
\operatorname{rk}_r(A)=\dim\operatorname{Span}(A_1,\dots,A_k).
\]

Se $C_1,\dots,C_n\in\mathbb{R}^k$ sono le colonne di $A$, il **rango per colonne** è

\[
\operatorname{rk}_c(A)=\dim\operatorname{Span}(C_1,\dots,C_n).
\]

Si dimostra che $\operatorname{rk}_r(A)=\operatorname{rk}_c(A)$; il valore comune è il **rango** di $A$.

Le operazioni elementari non modificano il rango, e la riduzione di Gauss produce una matrice a scala $S$ con lo stesso rango. Il numero di pivot di $S$ coincide con $\operatorname{rk}_r(A)$ e fornisce la dimensione dello spazio delle soluzioni del sistema omogeneo $AX=0$ come $n-r$.

## Sistemi non Omogenei e Teorema di Rouché-Capelli

Per un sistema $AX=b$ si considera la **matrice completa** $\widetilde{A}=(A\mid b)$ e la si riduce a scala tramite le operazioni elementari.

**Teorema (Rouché‑Capelli).** Il sistema è risolubile se e solo se

\[
\operatorname{rk}_r(\widetilde{A})=\operatorname{rk}_r(A).
\]

Quando esiste una soluzione $X_0$, tutte le soluzioni sono della forma

\[
X=X_0+Y, \qquad Y\in\ker A.
\]

### Dimostrazione

Se il sistema è risolubile esiste $X_0$ tale che $AX_0=b$. Il vettore $b$ è quindi combinazione lineare delle colonne di $A$ e l'aggiunta della colonna $b$ non aumenta il rango: $\operatorname{rk}_r(\widetilde{A})=\operatorname{rk}_r(A)$.

Viceversa, supponiamo $\operatorname{rk}_r(\widetilde{A})=\operatorname{rk}_r(A)=r$. Riducendo $\widetilde{A}$ a scala si ottiene

\[
\left(
\begin{array}{ccc|c}
\color{red}{1} & * & \dots & * \\
0 & \color{red}{1} & \dots & * \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & 0
\end{array}
\right)
\]

dove non compaiono righe del tipo $0\ \dots\ 0\mid 1$. L'assenza di tali righe implica che il sistema è compatibile e si possono determinare le variabili corrispondenti ai pivot in funzione delle variabili libere, ottenendo una soluzione $X_0$. Ogni altra soluzione è $X_0+Y$ con $Y\in\ker A$.
