# Moltiplicazione tra Matrici

## 1. Definizione
Siano  

\[
A \in M_{m \times n}(\mathbb{K}), \quad B \in M_{n \times p}(\mathbb{K})
\]

due matrici tali che **il numero di colonne di \(A\)** coincida con **il numero di righe di \(B\)**.  
Allora il **prodotto**  

\[
C = A \cdot B
\]

è definito come la matrice  

\[
C \in M_{m \times p}(\mathbb{K})
\]

i cui elementi sono:

\[
c_{ij} = \sum_{k=1}^{n} a_{ik} \, b_{kj}
\]

per ogni \( i = 1, \dots, m \) e \( j = 1, \dots, p \).

---

## 2. Interpretazione

- Ogni elemento \( c_{ij} \) è ottenuto **moltiplicando riga \(i\) di \(A\)** per **colonna \(j\) di \(B\)** e sommando i prodotti.
- In generale **non è commutativa**: \(A \cdot B \neq B \cdot A\) nella maggior parte dei casi.
- Visto come composizione di applicazioni lineari: se \(A\) rappresenta \(f: \mathbb{K}^n \to \mathbb{K}^m\) e \(B\) rappresenta \(g: \mathbb{K}^p \to \mathbb{K}^n\), allora \(A \cdot B\) rappresenta \(f \circ g\).

!!! tip "Axio"
    Ogni elemento \(c_{ij}\) è il **prodotto scalare** tra la riga \(i\) di \(A\) e la colonna \(j\) di \(B\):

    \[
    c_{ij} = \langle \text{riga}_i(A), \, \text{colonna}_j(B) \rangle
    \]

    Tuttavia, la moltiplicazione di matrici **nel suo insieme** non è un unico prodotto scalare, ma un insieme organizzato di tanti prodotti scalari.

---

!!! tip "Axio"
    Se \(A\) è una matrice \(m \times n\) e vale

    \[
    A X = 0 \quad \forall\, X \in \mathbb{K}^n
    \]

    allora \(A = 0\).

    💡 *Dimostrazione rapida*: prova \(X = e_j\) (base canonica), ottieni che ogni colonna di \(A\) è nulla ⇒ \(A\) è nulla.

    Il caso duale: se

    \[
    Y^\top A = 0 \quad \forall\, Y \in \mathbb{K}^m
    \]

    allora \(A\) è nulla (tutte le righe nulle).

---

!!! tip "Axio"
    Nella moltiplicazione di matrici non vale:

    \[
    A \cdot B = 0 \ \Rightarrow\ A=0 \ \text{o}\ B=0
    \]

    Esempio:

    \[
    A =
    \begin{pmatrix}
    1 & -1 \\
    1 & -1
    \end{pmatrix},
    \quad
    B =
    \begin{pmatrix}
    1 & 1 \\
    1 & 1
    \end{pmatrix}
    \]

    entrambi non nulli, ma \(A \cdot B = 0\).

---

## 3. Esempio di moltiplicazione

Siano  

\[
A =
\begin{pmatrix}
2 & 1 & 0 \\
-1 & 3 & 2
\end{pmatrix},
\quad
B =
\begin{pmatrix}
1 & 4 \\
0 & -1 \\
2 & 3
\end{pmatrix}
\]

\(A\) è \(2 \times 3\), \(B\) è \(3 \times 2\) ⇒ il prodotto è \(2 \times 2\).

Calcolo:

\[
\begin{aligned}
 c_{11} &= 2\cdot 1 + 1\cdot 0 + 0\cdot 2 = 2 \\
 c_{12} &= 2\cdot 4 + 1\cdot (-1) + 0\cdot 3 = 7 \\
 c_{21} &= (-1)\cdot 1 + 3\cdot 0 + 2\cdot 2 = 3 \\
 c_{22} &= (-1)\cdot 4 + 3\cdot (-1) + 2\cdot 3 = -1
\end{aligned}
\]

Risultato:

\[
A \cdot B =
\begin{pmatrix}
2 & 7 \\
3 & -1
\end{pmatrix}
\]

---

## 4. Invertibilità e inversa

Una matrice quadrata \(A \in M_{n \times n}(\mathbb{K})\) è **invertibile** se esiste \(A^{-1}\) tale che:

\[
A \cdot A^{-1} = I_n \quad \text{e} \quad A^{-1} \cdot A = I_n
\]

dove \(I_n\) è la matrice identità.

📌 **Proprietà**:
- \(A\) è invertibile ⇔ \(\det(A) \neq 0\).
- L’inversa è unica.
- Se \(A\) e \(B\) sono invertibili, \((AB)^{-1} = B^{-1}A^{-1}\).

💡 **Esempio**

Sia  

\[
A =
\begin{pmatrix}
2 & 1 \\
5 & 3
\end{pmatrix}
\]

\(\det(A) = 2\cdot 3 - 5\cdot 1 = 1 \neq 0\) ⇒ \(A\) è invertibile.  
L’inversa è:

\[
A^{-1} =
\begin{pmatrix}
3 & -1 \\
-5 & 2
\end{pmatrix}
\]

Verifica:

\[
A \cdot A^{-1} =
\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}
\]

!!! tip "Axio"
    Se vuoi invertire una matrice, assicurati che il suo determinante non sia zero. È come voler dividere: se dividi per zero, sei nei guai!

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-09  
    **Breve descrizione:** Aggiunta pagina sulla moltiplicazione tra matrici.

