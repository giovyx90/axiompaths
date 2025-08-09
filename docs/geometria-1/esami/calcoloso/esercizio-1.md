# Esercizio 1 — Proiezioni ortogonali in \(\mathbb{R}^4\)

Per ripassare la teoria, consulta [Prodotto Scalare e Ortonormalità](../../teoria/prodotto-scalare-e-ortonormalita/index.md).

## Testo

In \(\mathbb{R}^4\) con prodotto scalare standard, sia

\[
W=\operatorname{span}\{v_1,v_2,v_3\},\quad
v_1=(1,1,0,0),\; v_2=(1,0,1,0),\; v_3=(1,0,0,1).
\]

1. Trova una base ortonormale di \(W\) con Gram–Schmidt.
2. Trova una base di \(W^{\perp}\) e la matrice \(P\) della proiezione ortogonale su \(W\).
3. Calcola \(\mathrm{proj}_W(u)\) e la distanza \(\mathrm{dist}(u,W)\) per \(u=(1,2,0,1)\).

## Soluzione

**1. Base ortonormale di \(W\).**

\[
u_1=v_1, \quad \|u_1\|^2=2, \quad e_1=\frac{1}{\sqrt{2}}(1,1,0,0).
\]

\[
u_2=v_2-\frac{v_2\cdot u_1}{\|u_1\|^2}u_1
=v_2-\tfrac12(1,1,0,0)
=\Big(\tfrac12,-\tfrac12,1,0\Big), \quad \|u_2\|^2=\tfrac32, \quad e_2=\sqrt{\tfrac{2}{3}}\Big(\tfrac12,-\tfrac12,1,0\Big).
\]

\[
u_3=v_3-\frac{v_3\cdot u_1}{\|u_1\|^2}u_1-\frac{v_3\cdot u_2}{\|u_2\|^2}u_2
=(1,0,0,1)-\tfrac12(1,1,0,0)-\tfrac13\Big(\tfrac12,-\tfrac12,1,0\Big)
=\Big(\tfrac13,-\tfrac13,-\tfrac13,1\Big).
\]

\[
e_3=\sqrt{\tfrac{3}{4}}\Big(\tfrac13,-\tfrac13,-\tfrac13,1\Big)=\Big(\tfrac{\sqrt{3}}{6},-\tfrac{\sqrt{3}}{6},-\tfrac{\sqrt{3}}{6},\tfrac{\sqrt{3}}{2}\Big).
\]

Quindi \(\{e_1,e_2,e_3\}\) è una base ortonormale di \(W\).

**2. Base di \(W^{\perp}\) e proiezione.**

Le condizioni \(y\cdot v_i=0\) portano a

\[
W^{\perp}=\operatorname{span}\{(1,-1,-1,-1)\}.
\]

La proiezione ortogonale su \(W\) è

\[
P=I-\frac{1}{4}
\begin{pmatrix}
1 & -1 & -1 & -1 \\
-1 & 1 & 1 & 1 \\
-1 & 1 & 1 & 1 \\
-1 & 1 & 1 & 1
\end{pmatrix}.
\]

**3. Proiezione e distanza di \(u=(1,2,0,1)\).**

\[
u_{\perp}=-\tfrac12(1,-1,-1,-1), \quad \mathrm{proj}_W(u)=\Big(\tfrac32,\tfrac32,-\tfrac12,\tfrac12\Big), \quad \mathrm{dist}(u,W)=1.
\]

!!! tip "Axio"
    Controlla sempre le componenti ortogonali: sono la chiave per non sbagliare!

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-09
    **Breve descrizione:** Pubblicato l'esercizio sulle proiezioni ortogonali in \(\mathbb{R}^4\).
