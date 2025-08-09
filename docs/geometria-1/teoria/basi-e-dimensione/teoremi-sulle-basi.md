# Teoremi sulle Basi

Raccogliamo alcuni risultati utili per manipolare le [basi](basi.md) e comprendere la dimensione.

## Insiemi massimali

Un insieme $\{v_1,\dots,v_r\}\subseteq V$ è **massimale** se ogni altro
$v_i$ con $i>r$ rende dipendente l'insieme $\{v_1,\dots,v_r,v_i\}$.

Per un ripasso su combinazioni lineari e span, vedi la sezione sugli [spazi vettoriali](../spazi-vettoriali/index.md).

!!! tip "Axio"
    Pensa a quali vettori sono davvero indispensabili: quelli superflui appesantiscono solo il bagaglio!

## Teorema

Se $\{v_1,\dots,v_n\}$ genera $V$ e $\{v_1,\dots,v_r\}$ è massimale e indipendente,
allora $\{v_1,\dots,v_r\}$ è una base di $V$.

**Dimostrazione.**

Poiché l'insieme è massimale e indipendente, per ogni $j>r$ l'insieme $\{v_1,\dots,v_r,v_j\}$ è dipendente. Esistono quindi coefficienti $\alpha_i$ tali che

$$
v_j = \sum_{i=1}^r \alpha_i v_i.
$$

Ogni $v_j$ con $j>r$ appartiene allo span dei primi $r$ vettori. Siccome $\{v_1,\dots,v_n\}$ genera $V$, ogni vettore $v\in V$ è combinazione lineare dei $v_j$ e dunque dei soli $v_1,\dots,v_r$. L'insieme $\{v_1,\dots,v_r\}$ genera quindi $V$ ed è una base.

## Dimensione

Ogni base di $V$ ha lo stesso numero di elementi. Perciò possiamo
definire la **dimensione** di $V$ come il numero di vettori di una qualunque base.

**Dimostrazione.**

Siano $B$ e $C$ due basi di $V$. L'insieme $B$ è indipendente e $C$ genera $V$, quindi la massimalità di $B$ implica

$$
\lvert B \rvert \leq \lvert C \rvert.
$$

Scambiando i ruoli, otteniamo anche

$$
\lvert C \rvert \leq \lvert B \rvert,
$$

e concludiamo

$$
\lvert B \rvert = \lvert C \rvert.
$$

### Dipendenza in spazi finiti

Se $\{w_1,\dots,w_n\}\subseteq V$ con $n>m$ e $\dim V = m$, allora i
$w_i$ sono dipendenti.

**Dimostrazione.** Un insieme indipendente non può avere più di $m$ elementi: altrimenti costituirebbe una base in contrasto con la definizione di dimensione. Pertanto l'insieme dato è dipendente.

### Lemma di scambio di Steinitz

Sia $V$ finito-dimensionale. Se $\{x_1,\dots,x_r\}$ è un insieme indipendente e $\{y_1,\dots,y_s\}$ genera $V$, allora $r\le s$ e, rietichettando se necessario, esistono indici distinti $j_1,\dots,j_r$ tali che

$$
\operatorname{Span}(x_1,\dots,x_r)\subseteq \operatorname{Span}(y_1,\dots,\widehat{y_{j_1}},\dots,\widehat{y_{j_r}},\dots,y_s,x_1,\dots,x_r).
$$

In altre parole, possiamo scambiare $r$ vettori del sistema generatore con gli $x_i$ mantenendo un insieme che genera $V$.

**Dimostrazione (breve).**

Procediamo per induzione su $r$. Per $r=0$ non c'è nulla da dimostrare. Supponiamo vero per $r-1$ e considera $x_1,\dots,x_r$ indipendenti e $Y=\{y_1,\dots,y_s\}$ che genera $V$. Per ipotesi induttiva possiamo sostituire in $Y$ i primi $r-1$ vettori con $x_1,\dots,x_{r-1}$ ottenendo un nuovo generatore $Y'$. Poiché $Y'$ genera $V$, scriviamo

$$
x_r=\sum_{i=1}^{r-1}\alpha_i x_i+\sum_j\beta_j y'_j.
$$

Se tutti i $\beta_j$ fossero nulli, avremmo $x_r\in\operatorname{Span}(x_1,\dots,x_{r-1})$, in contrasto con l'indipendenza. Esiste quindi qualche $\beta_{j_0}\ne0$: sostituendo $y'_{j_0}$ con $x_r$ otteniamo un generatore che contiene tutti gli $x_i$, e in particolare $r\le s$.

### Teorema del completamento

Sia $V$ uno spazio vettoriale su $K$ con $\dim V=n<\infty$ e sia $L=\{v_1,\dots,v_k\}\subseteq V$ un insieme indipendente con $k\le n$. Allora esistono vettori $w_{k+1},\dots,w_n\in V$ tali che

$$
\mathcal B=\{v_1,\dots,v_k,w_{k+1},\dots,w_n\}
$$

è una base di $V$.

**Idea in una riga.** Se $L$ non genera ancora $V$, scegli un vettore fuori dallo span e aggiungilo; l'indipendenza si conserva e il processo termina in al più $n-k$ passi.

**Dimostrazione.**

Se $\operatorname{Span}(L)=V$, l'insieme è già una base. Altrimenti scegli $w_{k+1}\in V\setminus\operatorname{Span}(L)$. L'insieme $\{v_1,\dots,v_k,w_{k+1}\}$ resta indipendente. Iteriamo: se $\operatorname{Span}(v_1,\dots,v_k,w_{k+1},\dots,w_m)\ne V$, scegliamo $w_{m+1}$ fuori dallo span attuale. Il processo deve terminare prima di ottenere più di $n$ vettori totali, altrimenti esisterebbe un insieme indipendente con più di $n$ elementi, impossibile per il lemma di scambio di Steinitz. Al termine otteniamo una base che contiene $L$.

### Versione duale

Se $G=\{u_1,\dots,u_m\}$ genera $V$ con $m\ge n=\dim V$, allora esiste un sottoinsieme $B\subseteq G$ di $n$ elementi che è una base di $V$.

**Dimostrazione (per riduzione).** Se $G$ è indipendente con $m=n$ è già una base. Se $m>n$, esiste una relazione non banale $\sum_{i=1}^m\lambda_i u_i=0$. Un $u_j$ coinvolto nella relazione è combinazione degli altri e può essere rimosso senza perdere la proprietà di generare. Ripetendo l'operazione otteniamo un generatore minimale, che è necessariamente indipendente, quindi una base.

### Corollari utili

1. **Cardinalità degli insiemi indipendenti.** Ogni insieme indipendente ha al più $n$ elementi.
2. **Cardinalità dei sistemi generatori.** Ogni sistema generatore ha almeno $n$ elementi.
3. **Unicità della dimensione.** Qualunque base di $V$ contiene esattamente $n$ vettori.

### Nota costruttiva (algoritmo di completamento)

Dato $L=\{v_1,\dots,v_k\}$ indipendente:

1. Poni $W_0=\operatorname{Span}(L)$.
2. Se $W_0=V$ fermati. Altrimenti scegli $w_{k+1}\in V\setminus W_0$ e poni $W_1=\operatorname{Span}(W_0\cup\{w_{k+1}\})$.
3. Ripeti: al passo $t$, se $W_t\ne V$ scegli $w_{k+t+1}\notin W_t$.

La dimensione cresce di uno a ogni passo e dopo al più $n-k$ iterazioni otteniamo una base.

!!! tip "Axio"
    Cerchi un modo per allenarti? Prendi due vettori nello spazio delle matrici $2\times2$, completa l'insieme a una base e confronta il risultato con un amico!

