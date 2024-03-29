# express-template

A template for new [Express](http://expressjs.com/) projects, with [connect-assets](https://github.com/TrevorBurnham/connect-assets), i18n support, and [Bootstrap](http://twitter.github.com/bootstrap/).

## Installation

First, clone the project from GitHub, replace the origin remote with your repo, install dependencies, and get rolling.

    git clone git@github.com:garbados/express-template.git $your_project_name
    cd $your_project_name
    git remote rm origin
    git remote add origin $your_repo_url
    npm install
    node app

## i18n

express-template comes with simple i18n support. When the server gets requests, the `i18n` middleware checks for `lang` in the request's query string, and checks if we have a language file for it. So, if someone wants to view your page in French, they pass in `?lang=fr` as the query string, and we check for `fr.js` in the `/locales` folder. If we have the desired language file, we use it. If we don't, we fall back to English.

Language files are written as javascript files as `[language code].js` in this format:

    exports.i18n = {
      welcome: "Bienvenue!" 
    }
    
Then, in your templates, you can access i18n like this:

    h1= i18n.welcome
    
That would return `<h1>Bienvenue!</h1>` if it used the aforementioned language file.

## Vendor Assets and Asset Pipeline

By default, express-template comes with the following scripts:

* jquery.js
* lodash.js
* bootstrap.js
* backbone.js

In `public/javascripts/build.js`, these are minified and concatenated, and then served up to the client in one big bundle. To add your own scripts, list them there as `//= require [path_to_your_script]`, so that they're also minified and concatenated.

As for CSS, `public/stylesheets/style.css` imports Bootstrap by default. To add your own styles, modify `style.css`.

## License

Copyright (c) 2012 Max Thayer

Some rights reserved.

Redistribution and use of this software and associated documentation (the "Software") in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

The names of the contributors may not be used to endorse or promote products derived from this software without specific prior written permission.

If the Author of the Software (the "Author") needs a place to crash and you have a sofa available, you should maybe give the Author a break and let him sleep on your couch.

If you are caught in a dire situation wherein you only have enough time to save one person out of a group, and the Author is a member of that group, you must save the Author.