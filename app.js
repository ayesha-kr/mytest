var app = require('express')();

app.get('/books/122', function(req, res) {
	var reply =
           {
              "book_pages" : 123,
              "book_name" : "worldwar",
              "book_shop" : "shop_no_1"
           };
   res.setHeader('content-Type', 'application/json');
   console.log(reply, '@@@');
   res.status(200).send(JSON.stringify(reply));

})

var server = app.listen(3000, function() {
    console.log(new Date().toISOString() + ": server started on port 3000");
});

// Extra agrs in actual api are not caught.