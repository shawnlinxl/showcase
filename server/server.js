const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

website = [
        {
            name: "Programmers' showcase",
            imgsrc: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            updateDate: "2016-01-01",
            description: "This is a page for showcasing a programmer's work.",
            likecount: 20,
            viewcount: 200,
            url: "https://www.google.com"
        },
        {
            name: "Stock picker",
            imgsrc: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
            updateDate: "2018-01-01",
            description: "Rem quidem quam sunt suscipit nisi illo temporibus et laborum.",
            likecount: 18,
            viewcount: 180,
            url: "https://www.microsoft.com"
        },
        {
            name: "Stock picker",
            imgsrc: "https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg",
            updateDate: "2018-01-01",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            likecount: 0,
            viewcount: 1,
            url: "https://www.amazon.com"
        }
    ];

app.get('/api/hello', (req, res) => {
  res.send({ websites: website });
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));