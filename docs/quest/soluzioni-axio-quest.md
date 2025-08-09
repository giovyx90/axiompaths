# Soluzioni Axio Quest – Fino ad Applicazioni Lineari

!!! tip "Axio ti sfida"
    Prova a risolvere ogni esercizio prima di guardare la soluzione!

<a id="q001"></a>
### q001 — Definizione di spazio vettoriale
Uno **spazio vettoriale** su un campo $\mathbb{K}$ è un insieme $V$ con due operazioni:
- somma $+: V\times V\to V$
- moltiplicazione per scalare $\cdot: \mathbb{K}\times V\to V$
che soddisfano gli otto assiomi: chiusura, commutatività, associatività, elemento neutro, inverso additivo, distributività in entrambe le variabili, compatibilità e identità moltiplicativa.
**Esempio:** $\mathbb{R}^n$ con somma e prodotto per scalare usuali.

<a id="q002"></a>
### q002 — Riconoscere uno spazio vettoriale
$S=\{(x,y)\in\mathbb{R}^2: x\ge0\}$ non è uno spazio vettoriale: non è chiuso rispetto alla moltiplicazione per scalare con scalari negativi (es: $(1,0)\in S$ ma $(-1)\cdot(1,0)=(-1,0)\notin S$).

<a id="q003"></a>
### q003 — Sottospazio definito da equazione
$W$ è il luogo delle soluzioni di $x+2y-z=0$, che è un’equazione lineare omogenea $\Rightarrow$ sottospazio. Parametrizzando: $(x,y,z)=(t,-\frac{t+z}{2},z)$, oppure più semplicemente: prendo variabili libere $y=s$, $z=t$, ottengo $x=-2s+t$.
Base: $\{(-2,1,0),(1,0,1)\}$, $\dim W=2$.

<a id="q004"></a>
### q004 — Indipendenza lineare
Scrivo $\alpha(1,0,1)+\beta(0,1,1)+\gamma(1,1,2)=(0,0,0)$.
Ottengo sistema:
$\alpha+\gamma=0$, $\beta+\gamma=0$, $\alpha+\beta+2\gamma=0$.
Dalle prime due $\alpha=-\gamma$, $\beta=-\gamma$, sostituendo nella terza: $(-\gamma)+(-\gamma)+2\gamma=0$ vero per ogni $\gamma$. Quindi $\gamma$ libero ⇒ dipendenti.

<a id="q005"></a>
### q005 — Matrici simmetriche $2\times 2$
Ogni matrice simmetrica è $\begin{pmatrix}a & b \\ b & c\end{pmatrix}$ con $a,b,c\in\mathbb{R}$.
Dimensione: $3$. Base: $\{ \begin{pmatrix}1&0\\0&0\end{pmatrix}, \begin{pmatrix}0&1\\1&0\end{pmatrix}, \begin{pmatrix}0&0\\0&1\end{pmatrix} \}$.

<a id="q006"></a>
### q006 — Completamento di una base
Vettori: $v_1=(1,1,0,0)$, $v_2=(0,1,1,0)$.
Completo scegliendo $v_3=(0,0,1,0)$ e $v_4=(0,0,0,1)$.
Verifica indipendenza ⇒ $\{v_1,v_2,v_3,v_4\}$ è base.

<a id="q007"></a>
### q007 — Formula di Grassmann
Dimostrazione: Considero $\dim(U+W)=\dim U + \dim W - \dim(U\cap W)$.
Idea: scelgo base di $U\cap W$, la completo a base di $U$ e a base di $W$, e unisco le basi.
**Esempio**: in $\mathbb{R}^3$, $U=\langle e_1,e_2\rangle$, $W=\langle e_2,e_3\rangle$, $\dim(U\cap W)=1$ ⇒ $\dim(U+W)=3$.

<a id="q008"></a>
### q008 — Intersezione di sottospazi
$U=\langle(1,1,0,0),(0,1,1,0)\rangle$, $W=\langle(1,0,1,0),(1,1,1,1)\rangle$.
Scrivo $(a,b,c,d)=\alpha(1,1,0,0)+\beta(0,1,1,0)=\gamma(1,0,1,0)+\delta(1,1,1,1)$.
Risolvendo, ottengo $U\cap W = \langle(1,1,1,0)\rangle$.

<a id="q009"></a>
### q009 — Rango e nucleo
$A=\begin{pmatrix}1&2&3\\2&4&6\\1&0&1\end{pmatrix}$.
$R_2-2R_1\to(0,0,0)$, $R_3-R_1\to(0,-2,-2)$.
Rango $=2$.
Nucleo: risolvo $x+2y+3z=0$, $-2y-2z=0\Rightarrow y=-z$, $x+2(-z)+3z=0\Rightarrow x=-z$.
Base nucleo: $\{(-1,-1,1)\}$.

<a id="q010"></a>
### q010 — Rouché–Capelli
$A=\begin{pmatrix}1&1&0\\0&1&1\\1&0&1\end{pmatrix}$, $b=(1,2,3)$.
Riduzione: $R_3-R_1\to(0,-1,1\;|\;2)$.
$R_2\leftrightarrow R_3$: sistema compatibile ⇒ $\mathrm{rank}(A)=\mathrm{rank}(A|b)=3$ ⇒ unica soluzione.

<a id="q011"></a>
### q011 — Matrice di un’applicazione
$f(x,y,z)=(x+z, y-z)$.
Rispetto a basi canoniche, le immagini di $e_1,e_2,e_3$ sono: $f(1,0,0)=(1,0)$, $f(0,1,0)=(0,1)$, $f(0,0,1)=(1,-1)$.
Matrice: $\begin{pmatrix}1&0&1\\0&1&-1\end{pmatrix}$.

<a id="q012"></a>
### q012 — Coordinate rispetto a una base
$B=\{(1,0,1),(0,1,1),(1,1,0)\}$, $v=(2,3,4)$.
Risolvo $a(1,0,1)+b(0,1,1)+c(1,1,0)=(2,3,4)$.
Sistema: $a+c=2$, $b+c=3$, $a+b=4$.
Soluzione: $a=1.5$, $b=2.5$, $c=0.5$.

<a id="q013"></a>
### q013 — Composizione di applicazioni
Se $A$ è $3\times 2$ e $B$ è $2\times 3$, $M_{g\circ f}=BA$ (matrice $2\times 2$).
$g\circ f$ è identità se $BA=I_2$.

<a id="q014"></a>
### q014 — Isomorfismo
$f(a,b)=(a+b,a-2b)$.
Rappresentazione come matrice: $\begin{pmatrix}1&1\\1&-2\end{pmatrix}$.
Determinante $=-3\neq0$ ⇒ invertibile.
Inversa: $f^{-1}(u,v)=\left(\frac{2u+v}{3}, \frac{u-v}{3}\right)$.

<a id="q015"></a>
### q015 — Cambi di base
$f(x,y)=(x+2y,3x+y)$.
Base $B$ in dominio, $C$ in codominio.
Calcolo $[f]_B^C = P_C^{-1} \cdot M_f \cdot P_B$, con $M_f$ rispetto alle basi canoniche.
Risultato: $\begin{pmatrix}3 & 1 \\ 2 & 1 \end{pmatrix}$.

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-09  
    **Breve descrizione:** Inizio tracciamento delle modifiche.

