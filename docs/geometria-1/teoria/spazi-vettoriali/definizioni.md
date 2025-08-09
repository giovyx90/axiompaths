# Definizioni e Proprietà

Introduciamo la definizione formale di spazio vettoriale e le proprietà che regolano le sue operazioni.

Uno **spazio vettoriale** è una struttura $(V,+,\cdot)$ definita su un campo $\mathbb{K}$
dotata di due operazioni:

\[
+ : V \times V \to V
\]

\[
\cdot : \mathbb{K} \times V \to V
\]

Le operazioni rispettano le seguenti proprietà:

!!! tip "Axio"
    Tieni a mente queste leggi: sono la base per comprendere tutti gli spazi vettoriali!

1. **Associatività della somma**: per ogni $u,v,w\in V$,

\[
    (u+v)+w = u+(v+w)
\]

2. **Elemento neutro della somma**: esiste $O\in V$ tale che

\[
    O+v = v+O = v
\]

3. **Inverso additivo**: per ogni $v\in V$ esiste $-v\in V$ con

\[
    v+(-v)=O
\]

4. **Commutatività della somma**: per ogni $v,w\in V$,

\[
    v+w=w+v
\]

5. **Distributività rispetto agli scalari**: per ogni $c\in\mathbb{K}$ e $u,v\in V$,

\[
    c(u+v)=cu+cv
\]

6. **Distributività degli scalari**: per ogni $a,b\in\mathbb{K}$ e $v\in V$,

\[
    (a+b)v=av+bv
\]

7. **Associatività del prodotto per scalare**: per ogni $a,b\in\mathbb{K}$ e $v\in V$,

\[
    (ab)v=a(bv)
\]

8. **Elemento neutro del prodotto per scalare**: per ogni $v\in V$,

\[
    1\cdot v = v
\]

### Esempio: $\mathbb{K}^n$

Le $n$-uple di elementi di $\mathbb{K}$ formano uno spazio vettoriale. Se

\[
A=(a_1,\dots,a_n), \qquad B=(b_1,\dots,b_n),
\]

allora

\[
A+B=(a_1+b_1,\dots,a_n+b_n), \qquad cA=(ca_1,\dots,ca_n).
\]

Il vettore nullo è $(0,\dots,0)$.

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-09
    **Breve descrizione:** Rimossi gli indent dei blocchi formula per il corretto rendering.

