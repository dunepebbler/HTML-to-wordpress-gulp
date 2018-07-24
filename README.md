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
