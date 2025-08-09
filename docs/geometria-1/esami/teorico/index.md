# Esami Teorici

Esercizi d'esame incentrati sui concetti.

## Contenuti

- [Esercizio 1 — Forme bilineari, duale, aggiunto](#esercizio-1-teorico-puro-forme-bilineari-duale-aggiunto)

!!! tip "Axio"
    Capire la teoria è metà della battaglia!

## Esercizio 1 — Teorico Puro (forme bilineari, duale, aggiunto)

**Testo.**

Sia \(V\) uno spazio vettoriale reale di dimensione finita e \(B: V\times V\to\mathbb{R}\) una forma bilineare non degenerata.

1. Mostra che la mappa lineare

\[
\Phi: V\to V^*, \qquad \Phi(v)=B(v,\cdot)
\]

è un isomorfismo.

2. Per ogni sottospazio \(U\le V\), definisci \(U^\perp=\{x\in V:\;B(x,u)=0\;\forall u\in U\}\). Prova che

\[
\dim U+\dim U^\perp=\dim V\quad\text{e}\quad(U^\perp)^\perp=U.
\]

3. Scegliendo una base, sia \(S\) la matrice di \(B\). Sia \(T:V\to V\) lineare di matrice \(A\). Dimostra che esiste ed è unico \(T^\dagger\) tale che

\[
B(Tv,w)=B(v,T^\dagger w)\quad\forall v,w.
\]

Mostra che in matrice vale

\[
A^\dagger=S^{-1}A^\top S.
\]

**Soluzione.**

1. *Isomorfismo \(\Phi\).* La linearità è immediata. La non degenerazione di \(B\) equivale a \(\ker\Phi=\{0\}\): infatti, se \(B(v,w)=0\) per ogni \(w\), allora \(v=0\). In dimensione finita, una mappa lineare iniettiva è un isomorfismo.

2. *Dimensione e doppio ortogonale.* Poiché \(\Phi\) è un isomorfismo, l'annullatore \(\operatorname{Ann}(U)\) corrisponde a \(U^\perp\) via \(\Phi\). In dimensione finita \(\dim\operatorname{Ann}(U)=\dim V-\dim U\), per cui

\[
\dim U^\perp=\dim V-\dim U.
\]

Quindi \(\dim U+\dim U^\perp=\dim V\) e \((U^\perp)^\perp=U\).

3. *Aggiunto.* Scrivendo \(B(x,y)=x^\top S y\) e \(T(x)=Ax\), dalla relazione \(B(Tv,w)=B(v,T^\dagger w)\) segue

\[
A^\top S = S A^\dagger,
\]

da cui \(A^\dagger = S^{-1}A^\top S\). L'unicità discende dall'invertibilità di \(S\).

!!! tip "Axio"
    Riesci a trovare un esempio di forma bilineare degenerata e spiegare cosa non funziona nel procedimento?

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-09
    **Breve descrizione:** Inizio tracciamento delle modifiche.

    **Data:** 2025-08-09
    **Breve descrizione:** Inserito esercizio su forme bilineari, duale e aggiunto.

