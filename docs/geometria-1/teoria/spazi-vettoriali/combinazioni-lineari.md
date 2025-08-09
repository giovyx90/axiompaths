# Combinazioni Lineari e Dipendenza

Scopriamo come combinare vettori e distinguere tra dipendenza e indipendenza lineare.

!!! tip "Axio"
    Prova a giocare con esempi concreti: aiutano a intuire quando i vettori collaborano o si annullano!

Dati vettori $v_1,\dots,v_n\in V$ e scalari $x_1,\dots,x_n\in\mathbb{K}$,
una **combinazione lineare** è

\[
x_1v_1+\dots+x_nv_n.
\]

I vettori $v_1,\dots,v_n$ sono **linearmente dipendenti** se esistono scalari
$a_1,\dots,a_n$, non tutti nulli, tali che

\[
a_1v_1+\dots+a_nv_n = O.
\]

Sono **linearmente indipendenti** se la relazione precedente implica
$a_1=\dots=a_n=0$.

## Esempio

Le funzioni $e^t$ ed $e^{2t}$ sono indipendenti. Supponendo

\[
ae^{t}+be^{2t}=0,
\]

derivando otteniamo

\[
ae^{t}+2be^{2t}=0.
\]

Sottraendo le due relazioni:

\[
2be^{2t}=0 \Rightarrow b=0,
\]

e quindi $a=0$.

---

!!! info "Aggiornamenti"
    **Data:** 2025-08-09  
    **Breve descrizione:** Inizio tracciamento delle modifiche.

