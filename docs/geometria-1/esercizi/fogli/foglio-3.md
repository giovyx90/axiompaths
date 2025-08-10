# Foglio 3

Terzo foglio di esercizi dedicato a matrici e sottospazi.

!!! warning "Axio ti avvisa"
    Questo foglio è una bozza: gli esercizi potrebbero essere rivisti e l'elenco non è completo.

## Prerequisiti

- [Definizioni e operazioni sulle matrici](../../teoria/matrici/definizioni.md)
- [Basi e dimensione degli spazi vettoriali](../../teoria/basi-e-dimensione/basi.md)
- [Sottospazi vettoriali](../../teoria/spazi-vettoriali/sottospazi.md)

## Esercizio 1
Determinare la dimensione dello spazio

\[
W=\{A\in M_{n\times n}(\mathbb{R}) : \mathrm{tr}(A)=0\}.
\]

**Soluzione**

!!! tip "Axio ti suggerisce"
    Usa le matrici canoniche \(E_{ij}\) per organizzare le tue idee: sono una base naturale di \(M_{n\times n}(\mathbb{R})\).

1. Le matrici canoniche \(E_{ij}\) (un \(1\) in \((i,j)\), zeri altrove) formano una base di \(M_{n\times n}(\mathbb{R})\).

2. Se \(i\neq j\), la matrice \(E_{ij}\) ha diagonale nulla, quindi \(\mathrm{tr}(E_{ij})=0\). Vi sono \(n^{2}-n\) di queste matrici e appartengono tutte a \(W\).

3. Le matrici diagonali sono combinazioni di \(E_{11},\dots,E_{nn}\). L'unico vincolo per essere in \(W\) è che la somma degli elementi diagonali sia zero, cioè

\[
a_{11}+a_{22}+\cdots+a_{nn}=0.
\]

   Questo vincolo lineare riduce di uno i gradi di libertà: lo spazio delle diagonali a somma zero ha dimensione \(n-1\).

4. Sommando i contributi otteniamo

\[
\dim W = (n^{2}-n)+(n-1)=n^{2}-1.
\]

5. Una base esplicita di \(W\) è data da tutte le \(E_{ij}\) con \(i\neq j\) insieme alle \(n-1\) matrici diagonali

\[ 
E_{11}-E_{nn},\;E_{22}-E_{nn},\;\dots,\;E_{n-1,n-1}-E_{nn}.
\]

---

## Esercizio 2
Nel vettoriale spazio \(\mathbb{R}^{3}\) siano

\[
v=\begin{pmatrix}1\\0\\1\end{pmatrix},\qquad
w_{1}=\begin{pmatrix}3\\1\\-1\end{pmatrix},\qquad
w_{2}=\begin{pmatrix}5\\2\\-3\end{pmatrix}.
\]

Siano \(W_{1}=L(v)\) e \(W_{2}=L(w_{1},w_{2})\). Calcolare:

1. \(\dim W_{1}\) e \(\dim W_{2}\);
2. \(\dim (W_{1}\cap W_{2})\);
3. \(\dim (W_{1}+W_{2})\).

**Soluzione**

!!! tip "Axio ti domanda"
    Riesci a stabilire subito se \(v\) appartiene a \(W_{2}\)?

1. Poiché \(v\neq 0\), \(\dim W_{1}=1\). I vettori \(w_{1},w_{2}\) sono L.I. perché l'unica soluzione di \(a w_{1}+b w_{2}=0\) è \(a=b=0\); quindi \(\dim W_{2}=2\).

2. Cerchiamo \(c,a,b\in\mathbb{R}\) tali che \(c v = a w_{1}+b w_{2}\):

\[
\begin{cases}
3a+5b=c,\\
a+2b=0,\\
-\,a-3b=c.
\end{cases}
\]

Dalla seconda equazione otteniamo \(a=-2b\) e sostituendo ricaviamo \(c=-b\). Non essendo l'unica soluzione quella banale, \(W_{1}\cap W_{2}\) ha dimensione \(1\). In particolare \(v=2w_{1}-w_{2}\), quindi \(W_{1}\subseteq W_{2}\).

3. Poiché \(W_{1}\subseteq W_{2}\), si ha \(W_{1}+W_{2}=W_{2}\) e \(\dim(W_{1}+W_{2})=2\). Equivalentemente, per la [formula di Grassmann](../../teoria/basi-e-dimensione/teorema-di-grassmann.md):

\[
\dim(W_{1}+W_{2})=\dim W_{1}+\dim W_{2}-\dim(W_{1}\cap W_{2})=1+2-1=2.
\]

---

## Esercizio 3
Siano

\[
W_{1}=\{(x,y,z)\in\mathbb{R}^{3}: x+2y-3z=0\}, \qquad W_{2}=\{(x,y,z)\in\mathbb{R}^{3}: -x+y+2z=0\}.
\]

Calcolare \(\dim(W_{1}+W_{2})\).

**Soluzione**

!!! tip "Axio ti ricorda"
    La [formula di Grassmann](../../teoria/basi-e-dimensione/teorema-di-grassmann.md) può semplificare i conti se conosci le dimensioni dei sottospazi e della loro intersezione.

1. Dall'equazione di \(W_{1}\) si ricava \(x=-2y+3z\), quindi

\[
(x,y,z)=y(-2,1,0)+z(3,0,1)
\]

   e \(\dim W_{1}=2\).

2. Dall'equazione di \(W_{2}\) si ricava \(y=x-2z\), quindi

\[
(x,y,z)=x(1,1,0)+z(0,-2,1)
\]

   e \(\dim W_{2}=2\).

3. Risolvendo il sistema

\[
\begin{cases}
x+2y-3z=0,\\
-x+y+2z=0,
\end{cases}
\]

   si ottiene \(z=3y\) e \(x=7y\), per cui

\[
(x,y,z)=y(7,1,3)
\]

   e \(\dim(W_{1}\cap W_{2})=1\).

4. Per la formula di Grassmann

\[
\dim(W_{1}+W_{2})=\dim W_{1}+\dim W_{2}-\dim(W_{1}\cap W_{2})=2+2-1=3.
\]

   Quindi \(W_{1}+W_{2}=\mathbb{R}^{3}\).

---

## Esercizio 4
Siano

\[
v_{1}=\begin{pmatrix}1\\0\\1\\-1\end{pmatrix},\quad
v_{2}=\begin{pmatrix}1\\1\\1\\2\end{pmatrix},\qquad
u_{1}=\begin{pmatrix}0\\3\\0\\7\end{pmatrix},\quad
u_{2}=\begin{pmatrix}1\\0\\0\\1\end{pmatrix}.
\]

Sia \(W_{1}=\operatorname{span}(v_{1},v_{2})\) e \(W_{2}=\operatorname{span}(u_{1},u_{2})\). Calcolare:

1. \(\dim W_{1}\) e \(\dim W_{2}\);
2. \(W_{1}\cap W_{2}\);
3. \(\dim(W_{1}+W_{2})\).

**Soluzione**

!!! tip "Axio ti incoraggia"
    Controlla l'intersezione prima di applicare la [formula di Grassmann](../../teoria/basi-e-dimensione/teorema-di-grassmann.md)!

1. Le coppie \(\{v_{1},v_{2}\}\) e \(\{u_{1},u_{2}\}\) sono l.i., quindi \(\dim W_{1}=\dim W_{2}=2\).

2. Un vettore comune soddisfa

\[
a v_{1}+b v_{2}=c u_{1}+d u_{2}.
\]

   Il sistema associato è

\[
\begin{cases}
a+b=d,\\
b=3c,\\
a+b=0,\\
-a+2b=7c+d.
\end{cases}
\]

   Risolvendo si ottiene \(a=b=c=d=0\), per cui \(W_{1}\cap W_{2}=\{0\}\).

3. Per la formula di Grassmann

\[
   \dim(W_{1}+W_{2})=\dim W_{1}+\dim W_{2}-\dim(W_{1}\cap W_{2})=2+2-0=4,
\]

   dunque \(W_{1}+W_{2}=\mathbb{R}^{4}\).

---

## Esercizio 5
In \(P_{3}\) (polinomi reali di grado \(\le 3\)) siano

\[
W_{1}=\{p\in P_{3}: p(1)=0\},\qquad W_{2}=\{p\in P_{3}: p(2)=0\}.
\]

Calcolare \(W_{1}+W_{2}\) e le dimensioni in gioco.

**Soluzione**

!!! tip "Axio ti provoca"
    Prova a risolvere l'esercizio con due strategie diverse: il punto di vista dei funzionali e quello dei coefficienti.

### Metodo A — Funzionali lineari

1. Le valutazioni \(\operatorname{ev}_{1}(p)=p(1)\) e \(\operatorname{ev}_{2}(p)=p(2)\) sono applicazioni lineari suriettive; dunque

   \[
   \dim W_{1}=\dim W_{2}=4-1=3.
   \]

2. Consideriamo \(T:P_{3}\to\mathbb{R}^{2}\) definita da \(T(p)=(p(1),p(2))\). Poiché

   \[
   T(1)=(1,1),\qquad T(x)=(1,2)
   \]

   sono vettori l.i. in \(\mathbb{R}^{2}\), \(\operatorname{rank}T=2\) e quindi

   \[
   \dim(W_{1}\cap W_{2})=4-2=2.
   \]

3. Per la [formula di Grassmann](../../teoria/basi-e-dimensione/teorema-di-grassmann.md)

   \[
   \dim(W_{1}+W_{2})=3+3-2=4.
   \]

   Dato che \(\dim P_{3}=4\), si ottiene

   \[
   W_{1}+W_{2}=P_{3}.
   \]

Una base di \(W_{1}\cap W_{2}\) è \(\{(x-1)(x-2),\; x(x-1)(x-2)\}\).

### Metodo B — Coefficienti

Identifichiamo \(p(x)=a_{0}+a_{1}x+a_{2}x^{2}+a_{3}x^{3}\) con \((a_{0},a_{1},a_{2},a_{3})\in\mathbb{R}^{4}\).

1. Le condizioni \(p(1)=0\) e \(p(2)=0\) si traducono in

   \[
   a_{0}+a_{1}+a_{2}+a_{3}=0,\qquad a_{0}+2a_{1}+4a_{2}+8a_{3}=0,
   \]

   da cui \(\dim W_{1}=\dim W_{2}=3\).

2. Risolvendo il sistema con entrambe le equazioni otteniamo

   \[
   (a_{0},a_{1},a_{2},a_{3})=s(2,-3,1,0)+t(6,-7,0,1),
   \]

   e quindi \(\dim(W_{1}\cap W_{2})=2\).

3. Ancora per Grassmann, \(\dim(W_{1}+W_{2})=4\), cioè l'intero \(P_{3}\).

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-09
    **Breve descrizione:** Creato il foglio 3 con esercizio sulla dimensione delle matrici a traccia nulla.

    **Data:** 2025-08-09
    **Breve descrizione:** Aggiunto esercizio sulla somma di sottospazi.

    **Data:** 2025-08-09
    **Breve descrizione:** Aggiunto esercizio sulla dimensione di \(W_{1}+W_{2}\).

    **Data:** 2025-08-09
    **Breve descrizione:** Aggiunto esercizio sulla somma di due sottospazi in \(\mathbb{R}^{4}\).

    **Data:** 2025-08-10
    **Breve descrizione:** Aggiunto esercizio sulla somma \(W_{1}+W_{2}\) in \(P_{3}\).

