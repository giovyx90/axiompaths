# Teoremi sulle Basi

Raccogliamo alcuni risultati utili per manipolare le basi e comprendere la dimensione.

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

\[
v_j = \sum_{i=1}^r \alpha_i v_i.
\]

Ogni $v_j$ con $j>r$ appartiene allo span dei primi $r$ vettori. Siccome $\{v_1,\dots,v_n\}$ genera $V$, ogni vettore $v\in V$ è combinazione lineare dei $v_j$ e dunque dei soli $v_1,\dots,v_r$. L'insieme $\{v_1,\dots,v_r\}$ genera quindi $V$ ed è una base.

## Dimensione

Ogni base di $V$ ha lo stesso numero di elementi. Perciò possiamo
definire la **dimensione** di $V$ come il numero di vettori di una qualunque base.

**Dimostrazione.**

Siano $B$ e $C$ due basi di $V$. L'insieme $B$ è indipendente e $C$ genera $V$, quindi la massimalità di $B$ implica $|B|\leq|C|$. Scambiando i ruoli, otteniamo anche $|C|\leq|B|$ e concludiamo $|B|=|C|$.

### Dipendenza in spazi finiti

Se $\{w_1,\dots,w_n\}\subseteq V$ con $n>m$ e $\dim V = m$, allora i
$w_i$ sono dipendenti.

**Dimostrazione.** Un insieme indipendente non può avere più di $m$ elementi: altrimenti costituirebbe una base in contrasto con la definizione di dimensione. Pertanto l'insieme dato è dipendente.

### Lemma di scambio

Data una base $B=\{b_1,\dots,b_n\}$ e un vettore $v\notin \operatorname{Span}(B)$,
l'insieme $B\cup\{v\}$ è dipendente. Esiste $b_j\in B$ tale che

\[
(B\setminus\{b_j\})\cup\{v\}
\]

è ancora una base di $V$.

**Dimostrazione.**

Essendo $B\cup\{v\}$ dipendente, esistono coefficienti non tutti nulli tali che

\[
\alpha v + \sum_{i=1}^n \beta_i b_i = 0.
\]

Il coefficiente $\alpha$ non può essere nullo, altrimenti avremmo una relazione tra i soli $b_i$. Isolando $v$ otteniamo

\[
v = -\frac{1}{\alpha}\sum_{i=1}^n \beta_i b_i.
\]

Almeno un $\beta_j$ è non nullo; sostituendo $b_j$ con $v$ otteniamo un insieme di $n$ vettori che genera $V$ e rimane indipendente, quindi è una base.
