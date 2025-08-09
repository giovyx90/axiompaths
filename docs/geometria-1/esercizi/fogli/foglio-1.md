# Geometria I – Foglio 1

Primo foglio di esercizi per mettere in pratica i concetti base dell'algebra lineare.

## Prerequisiti

- [Definizione di spazio vettoriale e sue proprietà](../../teoria/spazi-vettoriali/definizioni.md).
- [Operazioni tra vettori: somma, opposto e prodotto per scalare](../../teoria/spazi-vettoriali/definizioni.md).
- [Sottospazi vettoriali](../../teoria/spazi-vettoriali/sottospazi.md).
- [Combinazioni lineari, span e dipendenza lineare](../../teoria/spazi-vettoriali/combinazioni-lineari.md).
- Conoscenza di polinomi reali e [matrici \(2\times 2\)](../../teoria/matrici/definizioni.md).

!!! tip "Axio"
    Ripassa le definizioni con esempi concreti: ti renderà più sicuro negli esercizi!

## Esercizio 1
Dimostrare che in uno spazio vettoriale \(V\), abbiamo che \(0\cdot v = O\) per ogni \(v \in V\) (qui \(O \in V\) e \(0 \in \mathbb{R}\)) usando solo le altre proprietà della definizione di spazio vettoriale.

**Dimostrazione**

1. \(0=0\).   (Identità riflessiva nello scalare.)

2. \(0+0=0\).   (Proprietà dell’elemento neutro additivo in \((\mathbb{R},+)\).)

3. \((0+0)\cdot v=0\cdot v\).   (Moltiplicazione per scalare è un’operazione definita per ogni scalare e vettore.)

4. \(0\cdot v + 0\cdot v = 0\cdot v\).   (Distributività della moltiplicazione per scalare rispetto alla somma degli scalari.)

5. Poiché \(0\cdot v\in V\), esiste l’opposto \(-\big(0\cdot v\big)\). Sommo \(-\big(0\cdot v\big)\) ad ambo i membri:
   \((0\cdot v + 0\cdot v) + \big(-0\cdot v\big) = 0\cdot v + \big(-0\cdot v\big)\).   (Esistenza dell’opposto e cancellazione.)

6. Per associatività e definizione di opposto:
   \(0\cdot v + \big(0\cdot v + (-0\cdot v)\big) = O\) e dunque \(0\cdot v = O\).   (\(x+(-x)=O\).)



!!! warning "Errori comuni"
    - **Circolarità:** non assumere \(0\cdot v=O\) a metà dimostrazione.
    - **Notazione:** distinguere **\(0\)** (scalare) da **\(O\)** (vettore nullo).

---

## Esercizio 2
In uno spazio vettoriale provare che per ogni \(t \in \mathbb{R}\) abbiamo che \(t \cdot O = O\).

**Dimostrazione**

1. \(O=O\).   (Identità riflessiva in \(V\).)

2. \(O+O=O\).   (\(O\) è neutro additivo in \(V\).)

3. \(t\cdot (O+O)=t\cdot O\).   (Moltiplicazione per scalare ben definita.)

4. \(t\cdot O + t\cdot O = t\cdot O\).   (Distributività della moltiplicazione per scalare rispetto alla somma di vettori.)

5. Sommo \(-\big(t\cdot O\big)\) ad ambo i membri:
   \((t\cdot O + t\cdot O) + (-t\cdot O) = t\cdot O + (-t\cdot O)\).   (Oposto e associatività.)

6. Ottengo \(t\cdot O = O\).   (\(x+(-x)=O\).)



---

## Esercizio 3
Dedurre dall'esercizio 2 che se \(t \cdot v = O\), allora \(t = 0\) oppure \(v = O\).

**Dimostrazione**

1. Se \(t=0\), allora per l’Esercizio 1 \(0\cdot v=O\). Tesi verificata.   (Caso banale.)

2. Supponi \(t\neq 0\). Allora esiste l’inverso \(t^{-1}\in\mathbb{R}\) con \(t^{-1}t=1\).   (\((\mathbb{R}\setminus\{0\},\cdot)\) è un gruppo.)

3. Moltiplica l’uguaglianza \(t\cdot v=O\) per \(t^{-1}\):
   \(t^{-1}\cdot (t\cdot v) = t^{-1}\cdot O\).   (Operazione per scalare.)

4. Per associatività della moltiplicazione scalare e definizione di \(1\cdot v\):
   \((t^{-1}t)\cdot v = 1\cdot v = v\). Quindi \(v = t^{-1}\cdot O\).   (Proprietà di unità.)

5. Per l’Esercizio 2, \(t^{-1}\cdot O=O\). Dunque \(v=O\).   (Proposizione precedente.)

6. Concludiamo: se \(t\neq 0\) allora \(v=O\); quindi in generale \(t=0\) **oppure** \(v=O\).  
   

---

## Esercizio 4
Sia \(\mathcal{P}\) lo spazio dei polinomi reali e

\[
W=\{p\in\mathcal{P}: p(1)=p(2)=0\}.
\]

**Tesi.** \(W\) è un sottospazio vettoriale di \(\mathcal{P}\).

**Dimostrazione**

1. **Zero in \(W\).** Il polinomio nullo \(p_0(x)\equiv 0\) soddisfa \(p_0(1)=0\) e \(p_0(2)=0\).   (Valutazione diretta.)

2. **Chiusura per somma.** Se \(p_1,p_2\in W\), allora  
   \((p_1+p_2)(1)=p_1(1)+p_2(1)=0+0=0\) e  
   \((p_1+p_2)(2)=p_1(2)+p_2(2)=0+0=0\).  

3. **Chiusura per scalare.** Se \(p\in W\) e \(\lambda\in\mathbb{R}\), allora  
   \((\lambda p)(1)=\lambda p(1)=\lambda\cdot 0=0\) e analogamente per \(x=2\).  

4. Sono verificate le tre condizioni: \(W\) è un s.s.v.  
   

!!! example "Schema rapido per i s.s.v."
    1) \(O\in W\) — 2) chiusura per somma — 3) chiusura per scalare.

---

## Esercizio 5* 
Per quali \(p\in\mathcal{P}\) il grafico \(\Gamma=\{(x,p(x)) : x\in\mathbb{R}\}\subset\mathbb{R}^2\) è un sottospazio?

**Tesi.** Esattamente per \(p(x)=ax\) (\(a\in\mathbb{R}\)) o \(p\equiv 0\).

**Dimostrazione (passi chiave)**

1. **Origine.** Se \(\Gamma\) è s.s.v., allora \((0,0)\in\Gamma\), quindi \(p(0)=0\).   (Un s.s.v. contiene il vettore nullo.)

2. **Somma.** Se \((x_1,p(x_1))\) e \((x_2,p(x_2))\) sono in \(\Gamma\), la loro somma
   \((x_1+x_2,\; p(x_1)+p(x_2))\) deve stare in \(\Gamma\).
   Quindi **per ogni** \(x_1,x_2\):
   
\[
p(x_1+x_2)=p(x_1)+p(x_2).
\]

3. **Scalari.** Per ogni \(\lambda\in\mathbb{R}\), \(\lambda(x,p(x))=(\lambda x,\lambda p(x))\in\Gamma\) implica
   
\[
p(\lambda x)=\lambda\,p(x)\quad\text{per ogni }x,\lambda.
\]

4. **Conclusione.** Un polinomio che è additivo e omogeneo di grado 1 è necessariamente lineare **senza termine noto**: \(p(x)=ax\).  
   Polinomi di grado \(\ge 2\) violano l’additività (es. \(x^2\): \(1^2+3^2\neq (1+3)^2\)).  
   
---

## Esercizio 6
In $M_{2,2}(\mathbb{R})$ si consideri

\[
W=\{A\in M_{2,2}(\mathbb{R}) : A=-A^{T}\}.
\]

**Tesi.** $W$ è un sottospazio di $M_{2,2}(\mathbb{R})$.

**Dimostrazione**

1. **Forma generale.** Se $A=-A^T$ con $A=\begin{pmatrix}a&b\\ c&d\end{pmatrix}$, allora dai coefficienti diagonali $a=-a$ e $d=-d$ segue $a=d=0$. Inoltre $c=-b$.
   Quindi ogni $A\in W$ è del tipo

\[
A=\begin{pmatrix}0&b\\ -b&0\end{pmatrix},\quad b\in\mathbb{R}.
\]

2. **Chiusura per somma.** Siano $A_1,A_2\in W$. Allora $A_1=-A_1^T$ e $A_2=-A_2^T$.

\[
(A_1+A_2)^T=A_1^T+A_2^T=-(A_1+A_2).
\]

   Quindi $A_1+A_2\in W$.

3. **Chiusura per scalare.** Per $\lambda\in\mathbb{R}$ e $A\in W$:

\[
(\lambda A)^T=\lambda A^T=\lambda(-A)=-(\lambda A),
\]

   dunque $\lambda A\in W$.

4. **Zero in $W$.** La matrice nulla $0$ verifica $0=-0^T$.   (Trasposta di zero è zero.)

5. Verificate le tre condizioni, $W$ è un s.s.v. di $M_{2,2}(\mathbb{R})$. 

---

## Esercizio 7
In $\mathbb{R}^3$:

\[
W=\{(x,y,z)\in\mathbb{R}^3: x+y+z=0\},\qquad U_k=L\big((1,k,2)\big).
\]

Determinare $k\in\mathbb{R}$ per cui $W\cup U_k$ è un s.s.v.

**Soluzione**

1. $\dim W=2$ (vincolo lineare $x=-y-z$: due variabili libere $y,z$).   (Parametrizzazione: $(x,y,z)=y(-1,1,0)+z(-1,0,1)$.)

2. $\dim U_k=1$ per ogni $k$ (è lo span di un vettore non nullo).   (Un solo generatore non nullo $\Rightarrow$ base.)

3. **Fatto chiave.** $W\cup U_k$ è s.s.v. $\Rightarrow$ uno è contenuto nell’altro.  
   Poiché $\dim U_k=1<2=\dim W$, l’unico caso possibile è $U_k\subseteq W$.  

4. Condizione di inclusione: il generatore $(1,k,2)$ deve soddisfare l’equazione di $W$:
   
\[
1+k+2=0\ \Longrightarrow\ k=-3.
\]

5. Con $k=-3$, $U_k\subseteq W$ e dunque $W\cup U_k=W$, che è un s.s.v.  
   Con $k\neq -3$, l’unione non è chiusa per somma. 

---

## Esercizio 8
Per $v_1,v_2\in V$, provare che

\[
L(v_1,v_2)=L(v_1)+L(v_2).
\]

**Dimostrazione (per doppia inclusione)**

1. **$\subseteq$** Sia $x\in L(v_1,v_2)$. Allora $x=\alpha v_1+\beta v_2$ per qualche $\alpha,\beta\in\mathbb{R}$.  
   Scrivo $x=(\alpha v_1)+(\beta v_2)$ con $\alpha v_1\in L(v_1)$ e $\beta v_2\in L(v_2)$.  
   Quindi $x\in L(v_1)+L(v_2)$.  

2. **$\supseteq$** Sia $y\in L(v_1)+L(v_2)$. Allora $y=a+b$ con $a\in L(v_1)$, $b\in L(v_2)$.  
   Esistono $\alpha,\beta$ con $a=\alpha v_1$, $b=\beta v_2$, dunque $y=\alpha v_1+\beta v_2\in L(v_1,v_2)$.  

3. Le due inclusioni danno l’uguaglianza: $L(v_1,v_2)=L(v_1)+L(v_2)$. 

---

## Esercizio 9
Sia $V$ uno spazio vettoriale. Se $v_1,v_2\in L(w_1,\dots,w_n)$, provare che

\[
L(v_1,v_2)\subseteq L(w_1,\dots,w_n).
\]

**Dimostrazione**

1. Poiché $v_1,v_2\in L(w_1,\dots,w_n)$, esistono coefficienti $(\alpha_i),(\beta_i)$ tali che
   
\[
v_1=\sum_{i=1}^n \alpha_i w_i,\qquad v_2=\sum_{i=1}^n \beta_i w_i.
\]

2. Sia $x\in L(v_1,v_2)$. Allora $x=a v_1+b v_2$ per qualche $a,b\in\mathbb{R}$. Sostituendo:
   
\[
x=a\sum_{i=1}^n \alpha_i w_i+b\sum_{i=1}^n \beta_i w_i
=\sum_{i=1}^n (a\alpha_i+b\beta_i)\,w_i \in L(w_1,\dots,w_n).
\]

3. Quindi $L(v_1,v_2)\subseteq L(w_1,\dots,w_n)$. 

---

## Esercizio 10*
Siano $W_1,W_2\subseteq V$ s.s.v. Se $W_1\cup W_2$ è un s.s.v., mostrare che

\[
W_1\subseteq W_2\quad\text{oppure}\quad W_2\subseteq W_1.
\]

**Dimostrazione (per assurdo)**

1. Supponiamo **non** valga nessuna inclusione: $W_1\nsubseteq W_2$ e $W_2\nsubseteq W_1$.   (Negazione della tesi.)

2. Esistono allora

\[
w\in W_1\setminus W_2,\qquad u\in W_2\setminus W_1.
\]

3. Poiché $W_1\cup W_2$ è s.s.v., è **chiuso per somma**, dunque $w+u\in W_1\cup W_2$.   (Proprietà dei sottospazi.)

4. **Caso A:** $w+u\in W_1$. Allora $u=(w+u)-w\in W_1$ (chiusura di $W_1$ per opposto e somma), ma questo contraddice $u\notin W_1$.

5. **Caso B:** $w+u\in W_2$. Allora $w=(w+u)-u\in W_2$, contraddicendo $w\notin W_2$.

6. Entrambi i casi sono impossibili: l’assunzione iniziale è falsa.  
   Dunque necessariamente $W_1\subseteq W_2$ **oppure** $W_2\subseteq W_1$. 
