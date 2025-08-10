# Esercizi su Basi e Dimensione

Breve raccolta di esercizi per mettere in pratica i concetti di basi e dimensione degli spazi vettoriali.

!!! tip "Axio"
    Ogni base è un trampolino: con la giusta motivazione puoi raggiungere qualsiasi dimensione!

**Esercizio**
Verifica se i seguenti vettori di \(\mathbb{R}^3\) formano una base e determina la dimensione dello span che generano:

$$
v_1 = (1,0,1), \quad v_2 = (0,1,1), \quad v_3 = (1,1,2).
$$

**Soluzione**
Costruiamo la matrice con i vettori come colonne:

$$
A = \begin{pmatrix}
1 & 0 & 1\\
0 & 1 & 1\\
1 & 1 & 2
\end{pmatrix}.
$$

Calcoliamo il determinante:

$$
\det(A) = 1(1\cdot2 - 1\cdot1) - 0 + 1(0\cdot1 - 1\cdot1) = 0.
$$

Il determinante nullo indica che i vettori sono linearmente dipendenti. La dimensione dello spazio generato è quindi \(2\) e una possibile base è \(\{v_1, v_2\}\).

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-09
    **Breve descrizione:** Inizio tracciamento delle modifiche.

