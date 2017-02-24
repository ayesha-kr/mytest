var app = require('express')();

app.get('/books/1', function(req, res) {
	var reply =
		{
		  "book_pages": 200,
		  "book_name": "worldwar2",
		  "book_shop": "shop1",
		  "book_color": "black",
		  "bookdetail": [
		    {
		      "book_size": "'43'"
		    }
		  ],
		  "book_size" : 4343
		};
   res.setHeader('content-Type', 'application/json');
   console.log(reply, '@@@');
   res.status(200).send(JSON.stringify(reply));

})

app.get('/books', function(req, res) {
	var reply = {
		  "books": [
		    {
		      "book_pages": 200,
		      "book_name": "worldwar2",
		      "book_shop": "shop1",
		      "book_color": "black"
		    },
		  {
		      "book_pages": 200,
		      "book_name": "worldwar2",
		      "book_shop": "shop1",
		      "book_color": "black"
		    }
		  ]
		};
   res.setHeader('content-Type', 'application/json');
   console.log(reply, '@@@');
   res.status(200).send(JSON.stringify(reply));

})
var server = app.listen(3000, function() {
    console.log(new Date().toISOString() + ": server started on port 3000");
});

// Extra agrs in actual api are not caught.