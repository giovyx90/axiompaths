# Definizione e Proprietà

Le **applicazioni lineari** collegano spazi vettoriali preservando la struttura lineare. In questa sezione raccogliamo le proprietà operative fondamentali.

## Definizione di applicazione lineare

Un'applicazione $F: V \to W$ è lineare se per ogni $u, v \in V$ e $c \in \mathbb{K}$ vale

\[
F(u+v)=F(u)+F(v), \qquad F(cv)=c\,F(v).
\]

Da queste condizioni seguono immediatamente

\[
F\!\left(\sum_{i=1}^r a_i v_i\right)=\sum_{i=1}^r a_i F(v_i), \qquad F(0)=0, \qquad F(-v)=-F(v).
\]

### Esempi rapidi

- Somma, prodotto per scalare e composizione di applicazioni lineari sono ancora lineari.
- Funzionali lineari su $\mathbb{K}^n$: $L_A(x)=A\cdot x$ per $A\in (\mathbb{K}^n)^*$.
- Proiezioni: se $E=W\oplus Z$, la proiezione $P_W(w+z)=w$ soddisfa $\ker P_W=Z$ e $\operatorname{Im} P_W=W$.

## Determinazione su una base

Sia $B=\{v_1,\dots,v_n\}$ una base di $V$. Per ogni $w_1,\dots,w_n\in W$ esiste ed è unica un'applicazione lineare $F$ tale che $F(v_i)=w_i$. Se $v=\sum_{i=1}^n x_i v_i$, allora

\[
F(v)=\sum_{i=1}^n x_i w_i.
\]

## Mappa delle coordinate

Data la base $B=\{v_1,\dots,v_n\}$, la mappa delle coordinate

\[
\Phi_B\!\left(\sum_{i=1}^n x_i v_i\right)=(x_1,\dots,x_n)
\]

è un isomorfismo tra $V$ e $\mathbb{K}^n$.

## Matrice associata a $F$

Scelte basi $B$ di $V$ e $C$ di $W$, la matrice $[F]_C^B$ ha colonne date dalle coordinate di $F(v_j)$ in $C$. Se $X=[x]_B$, allora

\[
[F(x)]_C=[F]_C^B\,[x]_B.
\]

**Regole operative.**

\[
[F+G]_C^B=[F]_C^B+[G]_C^B, \qquad [aF]_C^B=a\,[F]_C^B, \qquad [G\circ F]_D^B=[G]_D^C\,[F]_C^B.
\]

## Immagine e nucleo

Per $F:V\to W$ lineare definiamo

\[
\ker F = \{v\in V : F(v)=0\}, \qquad \operatorname{Im} F = \{F(v) : v\in V\}.
\]

Con la matrice $A=[F]_C^B$ si ottiene $\operatorname{Im} F = \operatorname{Span}\{\text{colonne di }A\}$ e $\ker F=\{X\in \mathbb{K}^n : AX=0\}$. Il teorema rango–nullità afferma

\[
\dim V = \dim \ker F + \dim \operatorname{Im} F.
\]

### Iniettività e suriettività

- $F$ è iniettiva $\Leftrightarrow\ \ker F=\{0\}$.
- $F$ è suriettiva $\Leftrightarrow\ \dim \operatorname{Im} F = \dim W$.
- Se $\dim V = \dim W$, iniettività, suriettività e biiettività coincidono.

## Esempi

1. **Funzionale su $\mathbb{R}^3$.** Per $L(x,y,z)=3x-2y+z$, la matrice è $A=[3\ -2\ 1]$ e

   \[
   \operatorname{Im} L = \mathbb{R}, \qquad \ker L = \{(x,y,z) : 3x-2y+z=0\}.
   \]

2. **Mappa coordinate.** La mappa $\Phi_B$ è un isomorfismo e la sua matrice rispetto a $B$ ed alla base canonica di $\mathbb{K}^n$ è $I_n$.

3. **Proiezione.** Se $E=W\oplus Z$, la proiezione $P_W$ verifica $P_W^2=P_W$, con $\ker P_W=Z$ e $\operatorname{Im} P_W=W$.

## Verificare la linearità

Un'applicazione $T: \mathbb{K}^n \to \mathbb{K}^m$ definita da combinazioni lineari delle coordinate è lineare. Se compaiono prodotti tra variabili o termini non lineari come $x^2$, $xy$ o $|x|$, in genere non è lineare.

## Procedura pratica con Gauss

1. Costruisci la matrice $A=[F]_C^B$.
2. Per $\operatorname{Im} F$, riduci $A$ per righe e prendi le colonne pivot originali.
3. Per $\ker F$, risolvi $AX=0$ parametrizzando le variabili libere.
4. Verifica che $\dim \ker F + \dim \operatorname{Im} F = n$.

!!! tip "Axio"
    Ogni applicazione lineare ha il suo segreto: scopri come agisce sui vettori di una base!

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-09
    **Breve descrizione:** Prima stesura delle definizioni e proprietà delle applicazioni lineari.
