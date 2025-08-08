# Come contribuire ad Axiom Paths

Grazie per voler migliorare questa raccolta aperta di appunti. Con queste regole chiunque, anche senza esperienza di programmazione, può partecipare in modo semplice.

Se non hai un account GitHub puoi inviare il materiale a [contributi@axiompaths.org](mailto:contributi@axiompaths.org).

## ✅ Passaggi per inviare un contributo
1. **Forka** o usa l’editor online di GitHub: non servono strumenti particolari.
2. **Crea o modifica** un file `.md` nella cartella corretta (`docs/…`).
3. **Scrivi in Markdown** usando [KaTeX](https://katex.org/) per la matematica.
4. **Esegui i controlli** prima della Pull Request:
   ```
   pytest
   ```
   Continua solo se tutti i test passano.
5. **Apri una Pull Request** con una breve descrizione del contenuto aggiunto.

---

## ✍️ Formattazione del materiale
- Organizza ogni sezione in modo didattico e conciso.
- Utilizza titoli gerarchici (`#`, `##`, `###`).
- Per le formule matematiche:
  - **Inline:** `$a^2+b^2=c^2`.
  - **Blocco:** lascia sempre una riga vuota sopra e sotto.

    ```

    $$
    \int_a^b f(x)\,dx
    $$

    ```

## 🗂️ Catalogazione degli esercizi
- Gli esercizi **non da esame** sono raccolti per argomento.
- Gli esercizi **da esame** usano uno o più di questi tag:
  - `Calcoloso` – molti calcoli.
  - `Teorico` – focus concettuale.
  - `Bomber` – calcolo e ragionamento avanzati.
  - `Trasversale` – combina vari argomenti.
  - `Lunga durata` – richiede oltre un’ora.

## 🧭 Aggiornare la navigazione
Quando aggiungi nuove sezioni, aggiorna `mkdocs.yml` e i sommari locali così da mantenere coerente la struttura del sito.

## 🐾 Axio, la mascotte
Inserisci **Axio** sporadicamente:
- offre motivazioni o domande extra negli esercizi;
- è sempre presente nelle hub di teoria con un consiglio breve e simpatico.

## 📚 Hub di teoria
Le hub devono includere spiegazioni chiare sui seguenti temi:

- Spazi vettoriali: combinazioni lineari, span, dipendenza e indipendenza.
- Basi e dimensione: formula di Grassmann.
- Applicazioni lineari e matrici.
- Autovalori e autovettori: teorema spettrale.
- Forme canoniche e di Jordan.
- Duali e forme bilineari.
- Prodotto scalare e ortonormalità.
- Teoremi classici della geometria proiettiva.

## 🎨 Stile del sito
Mantieni le pagine leggibili e piacevoli evitando eccessi grafici. Indici e homepage devono essere curate ma non sovraccariche.

## 🔗 Collegamenti utili
Quando può aiutare lo studio, inserisci link a teorie o esercizi correlati.

## ❓ Dubbi o problemi?
Apri una [Issue](https://github.com/username/Axiom-Paths/issues) oppure scrivi a [info@axiompaths.org](mailto:info@axiompaths.org).
