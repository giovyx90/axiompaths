
# Foglio 2
## Prerequisiti

- Basi e dimensione degli spazi vettoriali.
- Formula di Grassman.
- Applicazioni lineari elementari.

## Esercizio 1
Scrivere i seguenti sottospazi \(W\) nella forma \(W=L(v_{1},\dots,v_{k})\) per opportuni generatori \(v_{1},\dots,v_{k}\).

1. \(W=\{(x,y,z)^T\in\mathbb{R}^3 : x-3y+3z=0\}\)

2. \(W=\{(x,y,z)^T\in\mathbb{R}^3 : x+2y=0,\ z+3x=0\}\)

3. \(W=\{(x,y,z,t)^T\in\mathbb{R}^4 : x+y=0,\ z+t=0\}\)

4. \(W=\{(x,y,z,t)^T\in\mathbb{R}^4 : x+y=0,\ z+t=0,\ x+z+t=0\}\)

**Soluzione**

!!! tip "Axio ti consiglia"
    Per descrivere un sottospazio definito da equazioni lineari, esprimi il vettore generico in funzione delle variabili libere e raccogli i coefficienti per ottenere dei generatori. Verifica poi che siano linearmente indipendenti.

- Per (1) l'equazione impone \(x=3y-3z\). Quindi

\[
(x,y,z)^T = y\,(3,1,0)^T + z\,(-3,0,1)^T,
\]
 
  da cui \(W=L((3,1,0)^T,(-3,0,1)^T)\).

- Per (2) si ottiene \(x=-2y\) e \(z=6y\), perciò

\[
(x,y,z)^T = y\,(-2,1,6)^T,
\]
 
  e \(W=L((-2,1,6)^T)\).

- Per (3) dalle equazioni segue \(x=-y\) e \(z=-t\). Allora

\[
(x,y,z,t)^T = y\,(-1,1,0,0)^T + t\,(0,0,-1,1)^T,
\]

  quindi \(W=L((-1,1,0,0)^T,(0,0,-1,1)^T)\).

- Per (4) le prime due equazioni danno ancora \(x=-y\) e \(z=-t\). Sostituendo nella terza si ottiene \(-y=0\), dunque \(x=0\) e 

\[
(x,y,z,t)^T = t\,(0,0,-1,1)^T,
\]
 
  per cui \(W=L((0,0,-1,1)^T)\).

!!! warning "Errori comuni"
    Controlla sempre tutte le equazioni del sistema: nell'ultimo caso la terza equazione annulla una variabile che sembrava libera.

---

## Esercizio 2
Dati \(W_{1}=\{(x,y,z)^T\in\mathbb{R}^3 : x+y-3z=0\}\) e \(W_{2}=\{(x,y,z)^T\in\mathbb{R}^3 : y+z=0\}\), trovare una base di \(W_{1}\cap W_{2}\).

**Soluzione**

!!! tip "Axio ti ricorda"
    L'intersezione di sottospazi contiene i vettori che soddisfano simultaneamente tutte le equazioni.

Risolviamo il sistema

\[
\begin{cases}
x+y-3z=0,\\
y+z=0.
\end{cases}
\]

Dalla seconda equazione \(y=-z\); sostituendo nella prima si ha \(x-4z=0\), quindi \(x=4z\). Ogni vettore dell'intersezione è allora

\[
(4z,-z,z)^T = z\,(4,-1,1)^T,
\]

per cui una base è \(\{(4,-1,1)^T\}\).

---

## Esercizio 3
Dato \(W=\{A\in M_{2,2}(\mathbb{R}) : A=A^{T}\}\), trovare una base di \(W\).

**Soluzione**

Una matrice simmetrica è della forma

\[
A=\begin{pmatrix}a & b \\ b & d\end{pmatrix} = a\begin{pmatrix}1 & 0 \\ 0 & 0\end{pmatrix} + b\begin{pmatrix}0 & 1 \\ 1 & 0\end{pmatrix} + d\begin{pmatrix}0 & 0 \\ 0 & 1\end{pmatrix}.
\]

I tre coefficienti \(a,b,d\) sono liberi e le matrici indicate sono linearmente indipendenti; quindi costituiscono una base di \(W\).

---

## Esercizio 4
Dati i vettori \(v_{1}=(1,1,0)^T\), \(v_{2}=(0,1,-2)^T\), \(v_{3}=(1,0,0)^T\), dire se sono linearmente dipendenti. Posto poi \(v_{k}=(1,0,k)^T\), determinare per quali valori di \(k\) i vettori \(v_{1},v_{2},v_{k}\) sono linearmente indipendenti.

**Soluzione**

!!! tip "Axio ti guida"
    Per verificare l'indipendenza lineare, imposta la combinazione \(a v_{1}+b v_{2}+c v_{3}=0\) e studia il sistema ottenuto per i coefficienti.

Per \(v_{1},v_{2},v_{3}\) il sistema diventa

\[
\begin{cases}
a+c=0,\\
a+b=0,\\
-2b=0,
\end{cases}
\]

da cui \(a=b=c=0\). I tre vettori sono quindi linearmente indipendenti.

Sostituendo \(v_{3}\) con \(v_{k}\), il sistema è

\[
\begin{cases}
a+c=0,\\
a+b=0,\\
-2b+kc=0.
\end{cases}
\]

Dalle prime due equazioni segue \(b=c\); sostituendo nella terza otteniamo \((k-2)c=0\). Se \(k=2\) esiste una soluzione non banale e i vettori sono dipendenti; per \(k\neq 2\) l'unica soluzione è quella nulla e i vettori sono indipendenti.

---

## Esercizio 5
In \(\mathbb{R}^{4}\) si considerino i vettori \(v_{1}=(1,0,2,1)^T\), \(v_{2}=(2,-1,0,1)^T\), \(v_{3}=(0,2,4,1)^T\). Stabilire se \(v_{3}\in L(v_{1},v_{2})\).

**Soluzione**

Cerchiamo \(a,b\in\mathbb{R}\) tali che \(v_{3}=a v_{1}+b v_{2}\). Il sistema associato è

\[
\begin{cases}
a+2b=0,\\
-b=2,\\
2a=4,\\
a+b=1.
\end{cases}
\]

Dalle seconde e terze equazioni si ricava \(b=-2\) e \(a=2\). Sostituendo nella prima e nella quarta otteniamo \(-2\neq 0\) e \(0\neq 1\), quindi il sistema è incompatibile e \(v_{3}\notin L(v_{1},v_{2})\).

---

## Esercizio 6
Provare che i vettori \(v_{1}=(1,1,1)^T\), \(v_{2}=(1,1,0)^T\), \(v_{3}=(1,0,0)^T\) formano una base di \(\mathbb{R}^{3}\) e trovare le coordinate di \((2,-1,1)^T\) rispetto a tale base.

**Soluzione**

La combinazione \(a v_{1}+b v_{2}+c v_{3}=0\) porta al sistema

\[
\begin{cases}
a+b+c=0,\\
a+b=0,\\
a=0,
\end{cases}
\]

che implica \(a=b=c=0\); i tre vettori sono quindi una base di \(\mathbb{R}^{3}\).

!!! tip "Axio ti suggerisce"
    Le coordinate di un vettore rispetto a una base sono gli scalari che compaiono nella sua espressione come combinazione lineare dei vettori della base.

Per trovare le coordinate di \((2,-1,1)^T\) imponiamo

\[
a v_{1}+b v_{2}+c v_{3}=(2,-1,1)^T.
\]

Il sistema corrispondente è

\[
\begin{cases}
a+b+c=2,\\
a+b=-1,\\
a=1,
\end{cases}
\]

da cui si ricava \(a=1\), \(b=-2\), \(c=3\). Le coordinate cercate sono quindi \((1,-2,3)\).

---

## Esercizio 7
Dati \(v_{1}=(1,1,1)^T\) e \(v_{2}=(1,0,-1)^T\) vettori di \(\mathbb{R}^{3}\):

a) Trovare \(a,b,c\in\mathbb{R}\) tali che \(L(v_{1},v_{2})\subseteq W\) con \(W=\{(x,y,z)^T\in\mathbb{R}^{3} : ax+by+cz=0\}\).

b) Provare che \(L(v_{1},v_{2})=W\).

**Soluzione**

Per la parte (a) imponiamo che ogni combinazione lineare di \(v_{1}\) e \(v_{2}\) appartenga a \(W\). Un generico elemento di \(L(v_{1},v_{2})\) è

\[
\lambda v_{1}+\mu v_{2}=(\lambda+\mu,\lambda,\lambda-\mu)^T.
\]

Richiedendo \(a(\lambda+\mu)+b\lambda+c(\lambda-\mu)=0\) per tutti \(\lambda,\mu\) otteniamo le condizioni

\[
a+b+c=0,\qquad a-c=0,
\]

ossia \(a=c\) e \(b=-2a\). Scegliendo \(a=1\) si ha \(b=-2\), \(c=1\) e l'equazione di \(W\) è \(x-2y+z=0\).

Per la parte (b) mostriamo che ogni vettore di \(W\) è combinazione di \(v_{1}\) e \(v_{2}\). Se \(w=(x,y,z)^T\in W\), le equazioni

\[
\lambda+\mu=x,\qquad \lambda=y,\qquad \lambda-\mu=z
\]

hanno soluzione \(\lambda=y\), \(\mu=x-y\). Sostituendo nell'ultima equazione si ottiene \(x-2y+z=0\), condizione già soddisfatta. Quindi \(w=\lambda v_{1}+\mu v_{2}\) e \(W=L(v_{1},v_{2})\).

---

