/**
 * 
 * DOM - Document Object Model
 * 
 * Document
 *    |----------->RootElement (<html>)
 *                      |---------->Element(<head>)--><title>----->Text("My Text")
 *                      |
 *                      |---------->Element(<body>)---> <h1>
 *                      |---------->Element (<a>)----->Attribute(href)
 *                                         |----->Text("Linked Text")
 * 
 * 
 * in console we write this to accessing particular class and we try to make changer on temporary basis
 * document.getElementsByClassName("classNameHere")[no.].style.color="red"
 */