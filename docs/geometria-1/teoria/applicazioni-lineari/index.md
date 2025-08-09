# Applicazioni

Le **applicazioni** sono relazioni che associano a ogni elemento del dominio uno e un solo elemento del codominio. In questa pagina presentiamo il concetto in modo generale; in seguito approfondiremo le applicazioni lineari in una pagina dedicata.

## Notazioni comuni

- \(f: S \to T\) indica che \(f\) è definita su \(S\) a valori in \(T\).
- L'immagine di \(s \in S\) si scrive \(f(s)\).
- \(S\) è il **dominio** di \(f\) e \(T\) il **codominio**.
- L'insieme \(\{ f(s) \mid s \in S \} \subseteq T\) è l'**immagine** di \(f\).

## Esempi

1. \(f: \mathbb{R} \to \mathbb{R}\), \(f(x) = x^2 + 1\)  
   Dominio: \(\mathbb{R}\)  
   Codominio: \(\mathbb{R}\)  
   Immagine: \([1, +\infty)\)

2. \(g: \mathbb{R}^2 \to \mathbb{R}\), \(g(x,y) = x + y\)  
   Dominio: \(\mathbb{R}^2\)  
   Codominio: \(\mathbb{R}\)  
   Immagine: \(\mathbb{R}\)

## Composizione di applicazioni

Se \(f: S \to T\) e \(g: T \to U\), la composizione \(g \circ f: S \to U\) è definita da

\[
(g \circ f)(x) = g(f(x))
\]

con proprietà:

- associatività: \(h \circ (g \circ f) = (h \circ g) \circ f\)
- esistenza dell'identità: \(\mathrm{Id}_S \circ f = f\) e \(f \circ \mathrm{Id}_T = f\)

## Iniettività, suriettività, biiettività

- \(f\) è **iniettiva** se \(f(x_1) = f(x_2) \Rightarrow x_1 = x_2\)
- \(f\) è **suriettiva** se \(\mathrm{Im}(f) = T\)
- \(f\) è **biiettiva** se è sia iniettiva che suriettiva.

## Applicazione inversa

Se \(f: S \to T\) è biiettiva, esiste \(f^{-1}: T \to S\) tale che

\[
f^{-1}(f(x)) = x, \qquad f(f^{-1}(y)) = y
\]

## Coordinate di un'applicazione

In uno spazio vettoriale con base \(\{e_1, \dots, e_n\}\), un'applicazione lineare \(f: V \to W\) può essere descritta tramite le immagini dei vettori di base:

\[
f(e_j) = \sum_{i=1}^m a_{ij} w_i
\]

dove \(\{w_1, \dots, w_m\}\) è una base di \(W\) e \(a_{ij} \in \mathbb{R}\) sono le **coordinate** di \(f\).

!!! tip "Axio"
    Ogni funzione traccia un sentiero: segui l'immagine per scoprire dove ti porta!

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-09
    **Breve descrizione:** Aggiunta introduzione generale alle applicazioni e corretta un'autoreferenzialità.

