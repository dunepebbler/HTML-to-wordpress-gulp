
Om je html template om te zetten naar een goed ingerichte wordpress theme, moeten we een aantal handelingen verrichten. Volg dit stappenplan zorgvuldig.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

# Stap 1 - Download bestanden
Download de converteer bestanden en zet deze bestanden <span style="color: #44bcc3;">(behalve de readme)</span> in je HTML template map.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

# Stap 2 - Template split
Om je footer.php, header.php en page.php te krijgen moeten we gulp een html_split taak uit laten voeren. Deze taak zoekt naar een onderstaande comments en maakt dan van het door in jou aangegeven bestand een footer, page en header aan.

Zet onderstaande comments in je index.html template:

**Boven je header gedeelte:**
```
<!-- split header.php -->
```
**Boven je page / body gedeelte:** 
```
<!-- split index.php -->
```
**Boven je footer gedeelte:** 
```
<!-- split footer.php -->
```
**Mocht je nog een extra pagina hebben met een andere body vormgeving, kan je een custom template aanmaken door het volgende te plaatsen:**

**Boven je body gedeelte:** 
```
<!-- split template_naam.php -->
```
**Onder je body gedeelte:** 
```
<!-- split stop -->
```
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

# Stap 3 - installeer gulp taken
Ga in je terminal naar je html templates map en type onderstaande commands om gulp taken te installeren. Deze taken zorgen dat het converteren wordt gedaan.

> $ npm install gulp
> $ npm install gulp-header
> $ npm install run-sequence
> $ npm install gulp-notify
> $ npm install gulp-insert
> $ npm install gulp-replace
> $ npm install gulp-htmlsplit

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

# Stap 4 - converteren
Voordat we gaan converteren gaan we eerst het project een naam geven:

> $ npm init (geef naam project op bij package name, de rest doorklikken met enter)

Voer de conversie uit door het volgende command uit te voeren in je html template map:

> $ gulp start

Na de conversie is er een wordpress map aangemaakt buiten je html map, hier zit namelijk je nieuwe template in. In **beide mappen** staan nog een aantal mappen die verwijderd moeten worden:
```
 - src
 - assets
 - tmp
```
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
