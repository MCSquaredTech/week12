# Week 12 Bookshelf Project 
## Improvements to week 10

## Requirements 
### - Create a full CRUD application of your choice using either an API or local Array.
### -	Use an existing API with AJAX to interact with it. 
### -	If you do not use an API, store the entities you will create, read, update, and delete in an array.
### -	Use a form to post new entities.
### -	Build a way for users to update or delete entities
### -	Use Bootstrap and CSS to style your project.

## MockAPI - Bookshelf for API Back-end Server

## Classes - 
- Book Class
	Handles the basic book - isbn number, publisher date, book title, a url to the amazon page, the description of the book, an image if available, and the current price. 
	
- Books Class 
	Books is a collection of books - it has an id, a collection of books, and the current book. 
	Methods - addObject (i.e. the information from the api). A addNew book object method.
	
- Book-Form Class 
	Currently the book-form is add-book-form.js it was expanded to include the edit functionality. 
	this.book is an instance of the a book. 
	three methods to handle add a new book and editing a new book - getBook returns the book on add, editBook populates the form field, and update creates the book object for the updates. 
	There is an over load class in Book, add-book-form, and book-display that is for the Base Element Class to append or prepend the DOM. 
	
- Book Display Class 
	The class formats and styles the display of the book data. The property this.book is the current book select - get title property returns the abbreviated book title. 
	
## CSS -
- Site-Style.css 
	+ Provide custom styles for the website. 
	
## Data Services 
-	Book Data Services 
	+	Basic CRUD Operations - Get, GetByID, Post, Put, Delete 
	
## Element 
- Base-Element 
	+ 
	

