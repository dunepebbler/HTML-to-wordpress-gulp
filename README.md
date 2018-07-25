# Gulp Yeoman HTML Webapp --> Wordpress Template

Before you start running Gulp, there are a few steps you need to follow...

Step 1.

index.html:

Add these comments so gulp will recognize you want to split-up your index file to create a header.php and footer.php:


`<!-- split header.php -->`

`<!-- split index.php -->`

`<!-- split footer.php -->`

)

Step 2.

To all your other files you need to wrap your content "without header and footer" with these comments:

(

`<!-- split "filename".php -->`

`<!-- split stop -->`

)

Step 3.
When you are done with this you can start working in your cmd...

Run $ npm install

Run $ npm init - to change project name and version etc. (dirty, I know!)

Run $ gulp start - to initialize templating


Om je html template om te zetten naar een goed ingerichte wordpress theme, moeten we een aantal handelingen verrichten. Volg dit stappenplan zorgvuldig.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

=== Stap 1 - Download bestanden ===
Download de converteer bestanden op de Dunepebbler github: '''[https://github.com/dunepebbler/ github.com/dunepebbler/]'''. Zet deze bestanden <span style="color: #44bcc3;">''(behalve de readme)''</span> in je HTML template map.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

=== Stap 2 - Template split ===
Om je footer.php, header.php en page.php te krijgen moeten we gulp een html_split taak uit laten voeren. Deze taak zoekt naar een onderstaande comments en maakt dan van het door in jou aangegeven bestand een footer, page en header aan.

Zet onderstaande comments in je index.html template:

'''Boven je header gedeelte:'''
 <nowiki><!-- split header.php --></nowiki>

'''Boven je page / body gedeelte:'''
 <nowiki><!-- split index.php --></nowiki>

'''Boven je footer gedeelte:'''
 <nowiki><!-- split footer.php --></nowiki>

<span style="color: #44bcc3;">'''Mocht je nog een extra pagina hebben met een andere body vormgeving, kan je een custom template aanmaken door het volgende te plaatsen:'''</span>

'''Boven je body gedeelte:'''
 <nowiki><!-- split template_naam.php --></nowiki>

'''Onder je body gedeelte:'''
 <nowiki><!-- split stop --></nowiki>

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

=== Stap 3 - installeer gulp taken ===
Ga in je terminal naar je html templates map en type onderstaande commands om gulp taken te installeren. Deze taken zorgen dat het converteren wordt gedaan.

 <span style="color: #44bcc3;">$</span> npm install gulp
 <span style="color: #44bcc3;">$</span> npm install gulp-header
 <span style="color: #44bcc3;">$</span> npm install run-sequence
 <span style="color: #44bcc3;">$</span> npm install gulp-notify
 <span style="color: #44bcc3;">$</span> npm install gulp-insert
 <span style="color: #44bcc3;">$</span> npm install gulp-replace
 <span style="color: #44bcc3;">$</span> npm install gulp-htmlsplit


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

=== Stap 4 - converteren ===
Voordat we gaan converteren gaan we eerst het project een naam geven:

 <span style="color: #44bcc3;">$</span> npm init (geef naam project op bij package name, de rest doorklikken met enter)

Voer de conversie uit door het volgende command uit te voeren in je html template map:

 <span style="color: #44bcc3;">$</span> gulp start

Na de conversie is er een wordpress map aangemaakt buiten je html map, hier zit namelijk je nieuwe template in. In '''beide mappen''' staan nog een aantal mappen die verwijderd moeten worden:

 - src
 - assets
 - tmp

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

=== Stap 5 - Wordpress installeren ===
Allereerst moet er gezorgd worden dat er een testdomein wordt aangemaakt op de .pebbler.be.

Dan staat in de templates map een  map '''wordpress starter''', upload deze naar de .pebbler.be

Maak een nieuwe map aan in de wp-content/themes map met de naam van je project. Login in de wordpress omgeving en ga naar weergave -> themes en activeer jou theme.

