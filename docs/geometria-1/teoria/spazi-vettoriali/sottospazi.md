# Sottospazi Vettoriali

Vediamo come individuare i sottospazi di uno spazio vettoriale e perché ne preservano la struttura.

!!! tip "Axio"
    Pensa ai sottospazi come a piccoli mondi con le stesse regole del grande universo $V$!

Un sottoinsieme $W \subseteq V$ è un **sottospazio** se:

1. $v,w\in W \implies v+w \in W$.
2. $v\in W$, $c\in\mathbb{K} \implies cv\in W$.
3. $O \in W$.

Anche $W$ con queste operazioni è uno spazio vettoriale.

## Esempi

### Spazi di funzioni

Sia $S$ un insieme. L'insieme di tutte le funzioni $f:S\to\mathbb{K}$ è uno spazio vettoriale con

\[
(f+g)(x)=f(x)+g(x), \qquad (cf)(x)=c\,f(x).
\]

L'elemento neutro è la funzione zero $f(x)=0$.

### Intersezione di sottospazi

Se $U$ e $W$ sono sottospazi di $V$, allora $U\cap W$ è un sottospazio di $V$.

### Somma di sottospazi

Per $U$ e $W$ sottospazi di $V$ definiamo

\[
U+W=\{u+w\mid u\in U,\,w\in W\},
\]

che è ancora un sottospazio di $V$.
