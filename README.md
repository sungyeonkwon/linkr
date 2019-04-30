# L-i-n-k-r

A client-side JavaScript web app which maintains a list of bookmarks. 

Live website: https://linkr-phantom.firebaseapp.com
Source code: https://github.com/sungyeonkwon/linkr
Submitted by: Sung Kwon http://www.sungkwon.info/

### Features
* User can enter new bookmarks, edit their name, and remove them. 
* Stores / manages the data in localStorage therefore persists browser session.
* The order of the bookmarks is chronological. When a bookmark is edited, it will automatically be moved to the first in order.
* Each bookmark is assigned a random colour when created.
* Has pagination that shows 20 bookmarks per page.

### How to run project
As the core project is written in vanilla JavaScript, the project consists of static files and simply opening the index.html file in a browser should suffice.

### File structure
All development JavaScript files including test are inside of the ‘js’ folder. ‘public’ folder contains all css and html files with (manually) minified JavaScript files.

### Technologies used
* Core: Pure JavaScript / CSS3 / HTML5
* Testing: Jest
* Formatting: Prettier (default + single quote)
* Dependencies*: Cors Anywhere API(https://github.com/Rob--W/cors-anywhere/)

