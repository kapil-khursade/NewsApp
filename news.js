
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
    
        document.getElementById("sidebar").append(img, name, email, country);
    }
};
showOnSidebar();

// showingdetail news
showInDetail();
function showInDetail(){
    document.getElementById("news_container").innerHTML = null;

    let detailNews = JSON.parse(localStorage.getItem("newsdet"))||{};

    let card = document.createElement("div")

    let img = document.createElement("img");
    img.src = detailNews.urlToImage;

    let title = document.createElement("h1");
    title.innerText = detailNews.title;

    let desc = document.createElement("h4");
    desc.innerText = detailNews.description;

    card.append(img, title, desc)

    document.getElementById("news_container").append(card);
}


