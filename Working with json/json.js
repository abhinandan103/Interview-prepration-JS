const newspresponse={
    "articles": [
        {
         "source": {
            "id": null,
            "name": "Acecomments.mu.nu"
            },
            "author": "Pixy Misa",
            "title": "Daily Tech News 5 February 2023",
            "description": "Top Story The US Air Force shot down that errant balloon. (CNBC) But not until after Democrats spent several days accusing Republicans of racism for wanting to shoot down that errant balloon, and not until after that errant balloon had...",
            "url": "https://acecomments.mu.nu/?post=403044",
            "urlToImage": null,
            "publishedAt": "2023-02-05T09:00:00Z",
            "content": "<li>The 4TB Crucial P3 offers great value and not terrible performance at $250. (WCCFTech)That sale price is due to expire about - well, about now - but it always seems to be on sale at about that pr… [+2270 chars]"
        },
        {
            "source": {
               "id": null,
               "name": "Acecomments.mu.nu"
               },
               "author": "Abhinandan Misa",
               "title": "javascript news February 2023",
               "description": "Json  The US Air Force shot down that errant balloon. (CNBC) But not until after Democrats spent several days accusing Republicans of racism for wanting to shoot down that errant balloon, and not until after that errant balloon had...",
               "url": "https://acecomments.mu.nu/?post=403044",
               "urlToImage": null,
               "publishedAt": "2023-02-05T09:00:00Z",
               "content": "<li>The 4TB Crucial P3 offers great value and not terrible performance at $250. (WCCFTech)That sale price is due to expire about - well, about now - but it always seems to be on sale at about that pr… [+2270 chars]"
        }
    ]
}

const articles=newspresponse.articles;
// console.log(articles[0].author);
// console.log(articles[1].author);

for (let index = 0; index < articles.length; index++) {
    const {author,title} = articles[index];
    console.log(author,title);
}

// creating new object using map
const newobj=articles.map((article)=> {
    return {
        "name":article.author,
        "title":article.title,
    };
});

console.log("*********************");
console.log(newobj);