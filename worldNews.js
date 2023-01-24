

// Showing data on side navbar
function showOnSidebar(){
    let userData = JSON.parse(localStorage.getItem("user"));

    if(userData!=null){
    
        let img = document.createElement("img");
        img.src = userData.image;
    
        let name = document.createElement("h4");
        name.innerText = userData.name;
    
        let email = document.createElement("p");
        email.innerText = userData.email;
    
        let country = document.createElement("p");
        country.innerText = userData.country;
        showDefaultnews(userData.country)
    
        document.getElementById("sidebar").append(img, name, email, country);
    }
};
showOnSidebar();


// Search functioinality

async function searchNews(){
    try{
        let qu = document.getElementById("search").value;

        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news?q=${qu}`);

        let data = await res.json();
        console.log(data.articles);
        let newsArticle = data.articles;
        showingArticles(newsArticle)
    }catch(err){
        console.log("err:", err);
    }

}

// search results displau

function showingArticles(newsArticle){
    document.getElementById("news_container").innerHTML = null;

    newsArticle.forEach((el)=>{
        let card = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.urlToImage;

        let title = document.createElement("h4");
        title.innerText = el.title;

        let author = document.createElement("p");
        author.innerText = el.author;

        card.append(img, title, author);

        // Clikcing on news to got to in detail
        card.addEventListener("click", function(){
            localStorage.setItem("newsdet", JSON.stringify(el));
            window.location.href = "news.html"
        })

        document.getElementById("news_container").append(card);


    })
};


// Showing Default News
async function showDefaultnews(country){
    try{

        let res = await fetch (`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${country}`);

        let data = await res.json();

        console.log("defaut", data);

        showingArticles(data.articles)
    }catch(err){
        console.log("err:", err)
    }
}


// clicking on country link
function searchCountry(country){
    showDefaultnews(country)
}
