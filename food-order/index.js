const loader = $("#loading");
const restaurantLayout = $("#restaurants-row");
const inputBox = document.getElementById("search-box");
let restaurants = []
document.querySelector("#search").addEventListener('click',()=>{
    searchRestaurant()
})

const getData = () => {
    toggleLoader(true)
    // api call
    fetch("https://run.mocky.io/v3/e78bacfa-8edd-425e-bc53-051bf0274967")
        .then(resp => resp.json()).then(resp => {
            // console.log(JSON.stringify(resp));
            toggleLoader(false)
            restaurants = resp;
            buildList(resp)

        }).catch(e => {
            toggleLoader(false)
            console.log(e)
            alert("Restaurants can't be fetched. Please try again later.")
        })
}

const buildCard = (restaurant) => {
    // build single card for restaurant
    return '<div class="restaurant"> <div class="restaurant-image"><img src="' + restaurant.imageUrl + '" alt=""></div><div class="restaurant-title restaurant-text">' + restaurant.title + '</div><div class="restaurant-description restaurant-text">' + restaurant.description + '</div><div class="restaurant-details restaurant-text"><p>Price: Rs ' + restaurant.price + '</p><p>Ratings: ' + restaurant.rating + '</p> </p> </div></div>';
}

const buildList = (restaurants) => {
    // debugger
    restaurantLayout.empty();
    restaurants.forEach(restaurant => {
        restaurantLayout.append(buildCard(restaurant))
    })
}

const searchRestaurant = () => {
    let query = inputBox.value;
    if(!query) {buildList(restaurants); return;}

    
    
    query = query.toLowerCase();
    let filteredList = restaurants.filter(restaurant =>restaurant.title.toLowerCase().includes(query) || restaurant.description.toLowerCase().includes(query))
    buildList(filteredList)
}

const addToFavorite = (restaurant) => {

}

const toggleLoader = (flag) => {
    if(flag){
        loader.show();
        restaurantLayout.hide();
    }else{
        loader.hide();
        restaurantLayout.show();
    }
}

const initPage = () => {
    getData()
}


(function onWindowLoad() {
    initPage()
})()




