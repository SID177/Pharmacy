function createMenu(page){
    var homeli=document.createElement("li");
    homeli.class="full-width";
    var homelink=document.createElement("a");
    homelink.href="home.html";
    //alert(homelink.class);
    homelink.innerHTML="Home";
    homeli.appendChild(homelink);
    document.getElementById('menu').appendChild(homeli);
    homelink.className=page=="home"?"active":"";


    homeli=document.createElement("li");
    homeli.class="full-width";
    homelink=document.createElement("a");
    homelink.href="product.html";
    homelink.innerHTML="Products";
    homeli.appendChild(homelink);
    document.getElementById('menu').appendChild(homeli);
    homelink.className=page=="product"?"active":"";

    homeli=document.createElement("li");
    homeli.class="full-width";
    homelink=document.createElement("a");
    homelink.href="cart.html";
    homelink.innerHTML="Cart";
    homeli.appendChild(homelink);
    document.getElementById('menu').appendChild(homeli);
    homelink.className=page=="cart"?"active":"";
}