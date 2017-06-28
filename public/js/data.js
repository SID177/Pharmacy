function callWs(obj,cb){
    var xhttp;
    if(window.XMLHttpRequest)
        xhttp=new XMLHttpRequest();
    else
        xhttp=new ActiveXObject('Microsoft.XMLHTTP');
    xhttp.onreadystatechange=function(){
        if(xhttp.readyState==4 && xhttp.status==200){
            cb(xhttp.responseText);
        }
    };
    xhttp.open()
}
function getProductList(cb){
    var products=[
        {
            img:'img/product-minimal-1.jpg',
            img1:'img/product-minimal-2.jpg',
            name:'product1',
            category:'category1',
            prevPrice:'$199.99',
            newPrice:'&nbsp;&nbsp;$119.99',
            tags:['S / Dirty pink','Zigzag Clothing'],
            qty:'1',
            desc:'Description about product',
            ratings:3,
            reviews:100,
        },
        {
            img:'img/product-minimal-1.jpg',
            img1:'img/product-minimal-2.jpg',
            name:'product1',
            category:'category1',
            prevPrice:'$199.99',
            newPrice:'&nbsp;&nbsp;$119.99',
            tags:['S / Dirty pink','Zigzag Clothing'],
            qty:'1',
            desc:'Description about product',
            ratings:6,
            reviews:100,
        },
        {
            img:'img/product-minimal-1.jpg',
            img1:'img/product-minimal-2.jpg',
            name:'product1',
            category:'category1',
            prevPrice:'$199.99',
            newPrice:'&nbsp;&nbsp;$119.99',
            tags:['S / Dirty pink','Zigzag Clothing'],
            qty:'1',
            desc:'Description about product',
            ratings:5,
            reviews:100,
        },
        {
            img:'img/product-minimal-1.jpg',
            img1:'img/product-minimal-2.jpg',
            name:'product1',
            category:'category1',
            prevPrice:'$199.99',
            newPrice:'&nbsp;&nbsp;$119.99',
            tags:['S / Dirty pink','Zigzag Clothing'],
            qty:'1',
            desc:'Description about product',
            ratings:1,
            reviews:14,
        },
        {
            img:'img/product-minimal-1.jpg',
            img1:'img/product-minimal-2.jpg',
            name:'product1',
            category:'category1',
            prevPrice:'$199.99',
            newPrice:'&nbsp;&nbsp;$119.99',
            tags:['S / Dirty pink','Zigzag Clothing'],
            qty:'1',
            desc:'Description about product',
            ratings:1,
            reviews:14,
        },
    ];
    cb(null,products);
}
function getBranches(cb){
    var branches=[
        {
            img:'img/blog-thumbnail-4.jpg',
            name:'Branch 1',
            timing:'10 AM to 10 PM',
            desc:'Description',
        },
        {
            img:'img/blog-thumbnail-4.jpg',
            name:'Branch 1',
            timing:'10 AM to 10 PM',
            desc:'Description',
        },
        {
            img:'img/blog-thumbnail-4.jpg',
            name:'Branch 1',
            timing:'10 AM to 10 PM',
            desc:'Description',
        },
        {
            img:'img/blog-thumbnail-4.jpg',
            name:'Branch 1',
            timing:'10 AM to 10 PM',
            desc:'Description',
        },
        {
            img:'img/blog-thumbnail-4.jpg',
            name:'Branch 1',
            timing:'10 AM to 10 PM',
            desc:'Description',
        },
        {
            img:'img/blog-thumbnail-4.jpg',
            name:'Branch 1',
            timing:'10 AM to 10 PM',
            desc:'Description',
        },
    ];
    cb(null,branches);
}
function getCategories(cb){
    var categories=[
        {name:'Category 1'},
        {name:'Category 2'},
        {name:'Category 3'},
        {name:'Category 4',selected:true},
        {name:'Category 5'},
        {name:'Category 6'},
        {name:'Category 7'},
    ];
    cb(null,categories);
}

function loadScripts(){
    var jquery=document.createElement('script');
    jquery.src="js/jquery.js";
    jquery.onload=function(){
        var swiper=document.createElement('script');
        swiper.src="js/swiper.js";
        swiper.onload=function(){
            var global=document.createElement('script');
            global.src="js/scroll.js";
            global.onload=function(){
                var mouse=document.createElement('script');
                mouse.src="js/jquery.mousewheel.js";
                mouse.onload=function(){
                    var scroll=document.createElement('script');
                    scroll.src="js/global.js";
                    document.body.appendChild(scroll);

                    // initSwiper();
                    resizeCall();
                };
                document.body.appendChild(mouse);
            };
            document.body.appendChild(global);
        };
        document.body.appendChild(swiper);
    };
    document.body.appendChild(jquery);
}