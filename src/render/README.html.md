# scotch-hop2

This is the web site for the annual Linlithgow Scotch Hop - 
Scottish Dancing For All, in Linlithgow Palace, the birthplace of Mary Queen of Scots.

The development files, and the resulting files to be copied to the live site, 
are maintained in GitHub (https://github.com/RoryDavies/scotch-hop/).

## Files for the Website
Directory/folder "out/" contains all the files to be uploaded to the live website
(http://www.scotchhop.org.uk/) including this one.

## Development Files

```
(root of filesystem, as stored in GitHub etc)
|
|- .gitignore
|- .gitattributes
|- .git/ (in a cloned git repo)
|
|-  docpad.coffee
|-  package.json
|   node_modules/ (when docpad installed as described)
|
|-  src/
|    |-  render/   # previously named "documents"
|    |-  static/   # previously named "files"
|    |-  layouts/
|    |-  partials/
|
|-  out/
|
|- README.md
```

Some files (.gitignore, .gitattributes) control how git handles the remaining files.
Folder .git is created when the repository is cloned, it is not in GitHub.

Files docpad.coffee and package.json relate to the Docpad build environment (see below). 

The bulk of the source files etc (used to build the files in "out/") are in directory/folder "src/".

File README.md is essentially this file, which you are reading. 
It is also symlinked into src/documents/ (as README.html.md) 
to make it visible in the live website, and testable in the development environment.

## Build Environment - Docpad

The html file(s) in out/, and the content of the other folders there,
are derived or copied from files in the src/ tree, using Docpad (http://docpad.org/) version 6.78.4.
To continue development in the same way, you will need to have Docpad on your machine,
and a few extra modules (as defined in package.json).
Docpad also requires Node.js (https://nodejs.org/) to be installed.

We hope that the description here will help future developers, 
whether they continue to use Docpad or choose to use something else.

## Standing on the Shoulders of Giants

There is no point in re-inventing the wheel. So we make use of several freely available resources.  

Bootstrap (http://getbootstrap.com/) version 3.3.6 is used extensively for the main layout features.
FontAwesome (http://fontawesome.io/) version 4.6.3 is used to provide some of the graphics used in the site.  
Rather than maintain our own copy of the Bootstrap and FontAwesome files, 
the site sources them both from https://maxcdn.bootstrapcdn.com/ 

The Google Maps API (https://google.com) is used to display local maps.
Google Analytics (https://support.google.com/analytics/) 
is used to capture minimal data about the users of the live website.

The APIs for Twitter (https://twitter.com) and Facebook (https://facebook.com)
are used to link to our places there (if these don't make our pages too heavy).

## From Source Files to Final HTML etc

Docpad, running on your development machine, does the main work
to combine the various source files together.
Here is an overview of how the main files in src work together in docpad.

The file(s) in **src/render** define each html file in out/ - 
Docpad processes the files in documents (e.g. index.html.eco) 
in a series of passes to convert to html (e.g. index.html),
pulling in content from other files as it goes, under the control of data in each file.
We also place CSS files there, in folder **styles/**,
 so that pre-processors such as LESS can be used.

Each file in src/documents/ references a file in **src/layouts** 
which establishes the overall html + head + body structure,
linking to external packages of CSS, Javascript etc 
(e.g. Bootstrap, FontAwesome, Google, Twitter, Facebook).

Files in **src/partials/** are referenced by those in documents to form the complete page,
for easier development (and re-use) of the separate partials.
These too can be processed by Docpad to augment their content.

Files in **src/static/** are copied unmodified to out/ by Docpad.
This includes images, CSS and Javascript.


## Main file - render/index.html.eco
This is the primary file for the site -
it implements the major tabs of the user interface,
allowing fast switches between the content panels without referring back to the server. 

Here we describe the relationship of the various other files (mostly in partials)
to the resulting page layout.

The **header** defines our tartan, plus our organisation name.
The **Navigation area** uses Bootstrap-style classes and ids to show/hide the various tab panels.
The tab panels and their classes/ids are defined in index.html.eco,
wrapped around the content of each panel, which is in separate **partials** (one or two per tab).

Google Analytics code is contained in a further partial.

The overall page layout uses Bootstrap CSS classes etc to implement a series of nested tables.
The layout changes at various standard Bootstrap sizes to accommodate devices from mobile phones to large screens.
In a few cases (mainly to do with our tartan logo, and the background image), 
the break is controlled by explicit CSS outside of Bootstrap.

In a few cases, we have found additional CSS (in folder myCSS) 
is needed to cope with interactions between Bootstrap and other technologies (Facebook/Twitter/Google).

 
