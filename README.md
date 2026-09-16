# alex-receipt-demo

Kuratiertes Beispiel-Repo für einen echten Nachweislauf des ALEX Receipt-System v1
(Policy-Profile, Vier-Zustände-Checks, Verdict-Objekt).

Enthält eine echte GitHub-Actions-CI (`.github/workflows/ci.yml`, führt `npm test` aus), damit
der von ALEX erzeugte Receipt-Verdict `VERIFIED · review · 6/6` sein kann — nicht nur `PARTIAL`,
wie beim ersten realen v1-Lauf gegen ein Repo ohne CI.

Kein Produkt, kein Marketing-Beispiel — ein kleines, ehrliches Testrepo, dessen einziger Zweck
ist, ALEX unter realistischen Bedingungen (echter PR, echte CI, echter GitHub-Check) arbeiten zu
lassen und das Ergebnis öffentlich nachprüfbar zu machen.
