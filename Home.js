function myFunction() {
    document.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementsByClassName("dropdown-content")[0];
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }


var arr= JSON.parse(localStorage.getItem("projectData"))||[];
function cartCountShow(cart){
    var count =  document.getElementsByClassName("cartCount")[0]
      count.textContent=cart.length;
  
  }
  

  var mask=[
    {
        img:"https://a.cdnsbn.com/images/products/250/23578880001.jpg",
        nam:"BORGHESE",
        des:"Fango Essenziali Energize Treatment Sheet Masks",
        price:"Rs .849.50",
    },

     {
        img:"https://a.cdnsbn.com/images/products/250/14820680401.jpg",
        nam:"CLINIQUE",
        des:"Moisture Surge Overnight Mask",
        price:"Rs .3,012.00",
    },
     {
        img:"https://a.cdnsbn.com/images/products/250/21945285901.jpg",
        nam:"DECLEOR",
        des:"Hydra Floral White Petal Neroli & Sweet Orange Skin Perfecting Hydrating Sleeping Mask",
        price:"Rs .3,475.00",
    },
     {
        img:"https://a.cdnsbn.com/images/products/250/26912299901.jpg",
        nam:"FRESH",
        des:"Rose Deep Hydration Sleeping Mask",
        price:"Rs .2,471.50",
    },
     {
        img:"https://b.cdnsbn.com/images/products/250/16760323701.jpg",
        nam:"LA MER",
        des:"The Lifting & Firming Mask",
        price:"Rs .22,780.00",
    },
     {
        img:"https://b.cdnsbn.com/images/products/250/26942813001.jpg",
        nam:"OLE HENRIKSEN",
        des:"Balance Cold Plunge Pore Mask",
        price:"Rs .3,166.00",
    },
     {
        img:"https://b.cdnsbn.com/images/products/250/25390996001.jpg",
        nam:"PREVAGE BY ELIZABETH ARDEN",
        des:"City Smart Double Action Detox Peel Off Mask",
        price:"Rs .4,826.50",
    },
      {
        img:"https://b.cdnsbn.com/images/products/250/25750781101.jpg",
        nam:"SK II",
        des:"Facial Treatment Mask (Box Slightly Damaged)",
        price:"Rs .6,795.50",
    },
   



]

mask.map(function(data){
    var div=document.createElement("div");

    var image=document.createElement("img");
    image.setAttribute("src",data.img);

    var nam=document.createElement("p");
    nam.textContent=data.nam;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.des;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
    btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        cartCountShow(arr)
    })

    div.append(image,nam,des,price,btn);
    
   

    document.querySelector(".mask").append(div);
})


var eye=[
       {
        img:"https://a.cdnsbn.com/images/products/250/23918626502.jpg",
        nam:"BOBBI BROWN",
        des:"Luxe Eye Shadow",
        price:"Rs .3,243.50",
    },
      {
        img:"https://a.cdnsbn.com/images/products/250/26410790602.jpg",
        nam:"CHARLOTTE TILBURY",
        des:"Hollywood Flawless Eye Filter Luxury Palette",
        price:"Rs .5,019.50",
    },
      {
        img:"https://a.cdnsbn.com/images/products/250/27175576201.jpg",
        nam:"DRUNK ELEPHANT",
        des:"C-Tango Multivitamin Eye Cream",
        price:"Rs .5,637.00",
    },
      {
        img:"https://a.cdnsbn.com/images/products/250/20239380602.jpg",
        nam:"ESTEE LAUDER",
        des:"Double Wear Infinite Waterproof Eyeliner",
        price:"Rs .1,930.50",
    },
      {
        img:"https://b.cdnsbn.com/images/products/250/18860956502.jpg",
        nam:"GRANDE COSMETICS (GRANDELASH)",
        des:"GrandeBrow (Brow Enhancing Serum)",
        price:"Rs .4,479.00",
    },
      {
        img:"https://b.cdnsbn.com/images/products/250/26496402602.jpg",
        nam:"NARS",
        des:"Voyageur Eyeshadow Palette (6x Eyeshadow)",
        price:"Rs .1,930.50",
    },
      {
        img:"https://b.cdnsbn.com/images/products/250/15853100802.jpg",
        nam:"RAPIDLASH",
        des:"Eyelash Enhancing Serum (With Hexatein 1 Complex)",
        price:"Rs .2,934.50",
    },
      {
        img:"https://b.cdnsbn.com/images/products/250/24714581301.jpg",
        nam:"TIMELESS SKIN CARE",
        des:"Hydrating Eye Cream W/ Hyaluronic Acid +Matrixyl 3000",
        price:"Rs .1,429.00",
    },
   
]

eye.map(function(data){
    var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.img);

    var nam=document.createElement("p");
    nam.textContent=data.nam;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.des;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
        cartCountShow(arr)

    })
    div.append(image,nam,des,price,btn);
    
   

    document.querySelector(".eye").append(div);
})

var hair=[
       {
        img:"https://a.cdnsbn.com/images/products/250/13913408924.jpg",
        nam:"AGADIR ARGAN OIL",
        des:"Hair Treatment (Hydrates & Conditions - All Hair Types)",
        price:"Rs .1,544.50",
    },
        {
        img:"https://a.cdnsbn.com/images/products/250/14130874344.jpg",
        nam:"AVEDA",
        des:"Color Conserve Daily Color Protect Leave-In Treatment",
        price:"Rs .2,703.00",
    },
        {
        img:"https://a.cdnsbn.com/images/products/250/20090999944.jpg",
        nam:"CHI",
        des:"Keratin Leave-In Conditioner (Leave in Reconstructive Treatment)",
        price:"Rs .888.50",
    },
        {
        img:"https://a.cdnsbn.com/images/products/250/13611200444.jpg",
        nam:"KERASTASE",
        des:"Resistance Serum Therapiste Dual Treatment Fiber Quality Renewal Care (Extremely Damaged Lengths and Ends)",
        price:"Rs .3,784.00",
    },
        {
        img:"https://b.cdnsbn.com/images/products/250/20111299444.jpg",
        nam:"MOROCCANOIL",
        des:"Dry Scalp Treatment - Dry",
        price:"Rs .2,471.50",
    },
        {
        img:"https://b.cdnsbn.com/images/products/250/19300764344.jpg",
        nam:"REDKEN",
        des:"Frizz Dismiss Mask/ Masque Intense Smoothing Treatment",
        price:"Rs .1,930.50",
    },
        {
        img:"https://b.cdnsbn.com/images/products/250/19168260044.jpg",
        nam:"REGENEPURE",
        des:"Dr Hair & Scalp Treatment",
        price:"Rs .1,930.50",
    },
        {
        img:"https://b.cdnsbn.com/images/products/250/17932036444.jpg",
        nam:"WEN",
        des:"Cucumber Aloe Re Moist Intensive Hair Treatment",
        price:"Rs .1,930.50",
    },
     

]
hair.map(function(data){

    var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.img);

    var nam=document.createElement("p");
    nam.textContent=data.nam;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.des;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
                cartCountShow(arr)

    })
    div.append(image,nam,des,price,btn);
    
   

    document.querySelector(".hair").append(div);

})


var lips=[

       {
        img:"https://a.cdnsbn.com/images/products/250/20360626502.jpg",
        nam:"BOBBI BROWN",
        des:"Luxe Lip Color",
        price:"Rs .1,699.00",
    },
       {
        img:"https://a.cdnsbn.com/images/products/250/25751631002.jpg",
        nam:"GIORGIO ARMANI",
        des:"Lip Maestro Intense Velvet Color (Liquid Lipstick)",
        price:"Rs .2,239.50",
    },
       {
        img:"https://a.cdnsbn.com/images/products/250/23855277501.jpg",
        nam:"GROWN ALCHEMIST",
        des:"Lip Balm - Vanilla & Watermelon",
        price:"Rs .1,506.00",
    },
       {
        img:"https://a.cdnsbn.com/images/products/250/13226917901.jpg",
        nam:"JOHN MASTERS ORGANICS",
        des:"Lip Calm",
        price:"Rs .579.50",
    },
       {
        img:"https://b.cdnsbn.com/images/products/250/03308323701.jpg",
        nam:"LA MER",
        des:"Lip Balm",
        price:"Rs .6,100.50",
    },
       {
        img:"https://b.cdnsbn.com/images/products/250/18310702602.jpg",
        nam:"NARS",
        des:"Audacious Lipstick",
        price:"Rs .2,317.00",
    },
       {
        img:"https://b.cdnsbn.com/images/products/250/16553496301.jpg",
        nam:"SKIN CEUTICALS",
        des:"Antioxidant Lip Repair",
        price:"Rs .4,479.00",
    },
       {
        img:"https://b.cdnsbn.com/images/products/250/10003103902.jpg",
        nam:"YOUNGBLOOD",
        des:"Lipstick",
        price:"Rs .1,467.50",
    },
   

]

lips.map(function(data){

     var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.img);

    var nam=document.createElement("p");
    nam.textContent=data.nam;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.des;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
                cartCountShow(arr)

    })
    div.append(image,nam,des,price,btn);
    
   

    document.querySelector(".lips").append(div)

})


var men=[
    {
        img:"https://a.cdnsbn.com/images/products/250/10047076721.jpg",
        nam:"BIOTHERM",
        des:"Homme Toning Cleansing Gel (Normal Skin)",
        price:"Rs .2,471.50",
    },
    {
        img:"https://a.cdnsbn.com/images/products/250/02186435005.jpg",
        nam:"BVLGARI",
        des:"Extreme Eau De Toilette Spray",
        price:"Rs .5,019.50",
    },
    {
        img:"https://a.cdnsbn.com/images/products/250/26203180321.jpg",
        nam:"CLARINS",
        des:"Men Energizing Gel With Red Ginseng Extract",
        price:"Rs .4,247.50",
    },
    {
        img:"https://a.cdnsbn.com/images/products/250/12109533805.jpg",
        nam:"GUCCI",
        des:"Guilty Pour Homme Eau De Toilette Spray",
        price:"Rs .5,328.50",
    },
    {
        img:"https://b.cdnsbn.com/images/products/250/10042880921.jpg",
        nam:"LANCOME",
        des:"Men Ultimate Cleansing Gel",
        price:"Rs .2,471.50",
    },
    {
        img:"https://b.cdnsbn.com/images/products/250/04813476005.jpg",
        nam:"MONTBLANC",
        des:"Starwalker Eau De Toilette Spray",
        price:"Rs .2,934.50",
    },
    {
        img:"https://b.cdnsbn.com/images/products/250/10060491721.jpg",
        nam:"THE ART OF SHAVING",
        des:"Pre Shave Oil - Sandalwood Essential Oil (For All Skin Types)",
        price:"Rs .1,930.50",
    },
    {
        img:"https://b.cdnsbn.com/images/products/250/02231369505.jpg",
        nam:"TOMMY HILFIGER",
        des:"Tommy Eau De Toilette Spray",
        price:"Rs .2,780.00",
    },
   

]

men.map(function(data){
     var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.img);

    var nam=document.createElement("p");
    nam.textContent=data.nam;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.des;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
                cartCountShow(arr)

    })
    div.append(image,nam,des,price,btn);
    
   

    document.querySelector(".men").append(div)

})


var joy=[
 {
        img:"https://a.cdnsbn.com/images/products/250/27342293753.jpg",
        nam:"BAREMINERALS",
        des:"Smoothness Hydrating Cleansing Oil (Free: Natural Beauty r-PGA Deep Hydration Moisturizing Cushion Mask 6x 20ml)",
        price:"Rs .2,548.50",
    },
    {
        img:"https://a.cdnsbn.com/images/products/250/27343276753.jpg",
        nam:"BIOTHERM",
        des:"Aquasource Everplump Plumping Smoothing Moisturizing Treatment 125ml (Free: Natural Beauty Aromatic Cleaning Balm 125g)",
        price:"Rs .6,023.50",
    },
    {
        img:"https://a.cdnsbn.com/images/products/250/27342026553.jpg",
        nam:"BOBBI BROWN",
        des:"Soothing Cleansing Oil (Free: Natural Beauty BIO UP Treatment Essence 200ml)",
        price:"Rs .4,556.00",
    },
    {
        img:"https://a.cdnsbn.com/images/products/250/27338282553.jpg",
        nam:"DARPHIN",
        des:"Intral Daily Rescue Serum 50ml (Free: Natural Beauty Aromatic Cleaning Balm 125g)",
        price:"Rs .7,027.00",
    },
    {
        img:"https://b.cdnsbn.com/images/products/250/27342100053.jpg",
        nam:"ELEMIS",
        des:"Pro-Collagen Super Serum (Free: Natural Beauty BIO UP Treatment Essence 200ml)",
        price:"Rs .4,865.00",
    },
    {
        img:"https://b.cdnsbn.com/images/products/250/27338380553.jpg",
        nam:"ELIZABETH ARDEN",
        des:"Ceramide Vitamin C Capsules - Radiance Renewal Serum 60caps (Free: Natural Beauty BIO UP Treatment Essence 200ml)",
        price:"Rs .5,714.50",
    },
    {
        img:"https://b.cdnsbn.com/images/products/250/27338180953.jpg",
        nam:"LANCOME",
        des:"Confort Tonique 400ml (Free: Natural Beauty r-PGA Deep Hydration Moisturizing Cushion Mask 6x 20ml)",
        price:"Rs .4,015.50",
    },
    

]

joy.map(function(data){
var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.img);

    var nam=document.createElement("p");
    nam.textContent=data.nam;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.des;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
                cartCountShow(arr)

    })
    div.append(image,nam,des,price,btn);
    
   

    document.querySelector(".joy").append(div)


})


var daily=[
    {
        img:"https://a.cdnsbn.com/images/products/250/24304376739.jpg",
        nam:"BIOTHERM",
        des:"Homme Sensitive Force Recovering Balm",
        price:"Rs .2,934.50",
    },
    {
        img:"https://a.cdnsbn.com/images/products/250/27318584037.jpg",
        nam:"CALVIN KLEIN",
        des:"IN2U Eau De Toilette Spray",
        price:"Rs .1,699.00",
    },
    {
        img:"https://a.cdnsbn.com/images/products/250/27311990639.jpg",
        nam:"CHARLOTTE TILBURY",
        des:"Starry Eyes To Hypnotise Eyeshadow Palette (12x Eyeshadow) (Limited Edition)",
        price:"Rs .4,826.50",
    },
    {
        img:"https://a.cdnsbn.com/images/products/250/20587499937.jpg",
        nam:"FLORIS",
        des:"Edwardian Bouquet Eau De Toilette Spray",
        price:"Rs .5,174.00",
    },
    {
        img:"https://b.cdnsbn.com/images/products/250/27316731337.jpg",
        nam:"ISSEY MIYAKE",
        des:"L'Eau D'Issey Pure Petale De Nectar Eau De Toilette Spray",
        price:"Rs .4,093.00",
    },
    {
        img:"https://b.cdnsbn.com/images/products/250/21207803639.jpg",
        nam:"JANE IREDALE",
        des:"D2O Hydration Spray",
        price:"Rs .1,660.50",
    },
    {
        img:"https://b.cdnsbn.com/images/products/250/27093370639.jpg",
        nam:"REUZEL",
        des:"Red Pomade (Water Soluble, High Sheen)",
        price:"Rs .2,471.50",
    },
    {
        img:"https://b.cdnsbn.com/images/products/250/27319891837.jpg",
        nam:"NICOLAI",
        des:"New York Intense Eau De Parfum Spray",
        price:"Rs .3,977.00",
    },
   

]

daily.map(function(data){
    var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.img);

    var nam=document.createElement("p");
    nam.textContent=data.nam;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.des;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
                cartCountShow(arr)

    })
    div.append(image,nam,des,price,btn);
    
   

    document.querySelector(".daily").append(div)
})


var best=[
     {
        img:"https://a.cdnsbn.com/images/products/250/20079465901.jpg",
        nam:"ELTAMD",
        des:"UV Clear Facial Sunscreen SPF 46 - For Skin Types Prone To Acne, Rosacea & Hyperpigmentation",
        price:"Rs .3,320.50",
    },
    {
        img:"https://a.cdnsbn.com/images/products/250/10057281421.jpg",
        nam:"SHISEIDO",
        des:"Men Cleansing Foam",
        price:"Rs .2,124.00",
    },
    {
        img:"https://a.cdnsbn.com/images/products/250/23954980501.jpg",
        nam:"ELIZABETH ARDEN",
        des:"Ceramide Retinol Capsules - Line Erasing Night Serum",
        price:"Rs .4,401.50",
    },
    {
        img:"https://a.cdnsbn.com/images/products/250/19168260044.jpg",
        nam:"REGENEPURE",
        des:"Dr Hair & Scalp Treatment",
        price:"Rs .1,930.50",
    },


]

 best.map(function(data){
 var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.img);

    var nam=document.createElement("p");
    nam.textContent=data.nam;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.des;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
    div.append(image,nam,des,price,btn);
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
                cartCountShow(arr)

    })
      document.querySelector(".best").append(div);
})

var deal=[
    {
        img:"https://a.cdnsbn.com/images/products/250/04741780301.jpg",
        nam:"CLARINS",
        des:"Silky smooth, oil free skin perfector",
        price:"Rs .2,510.00",
    },
    {
        img:"https://a.cdnsbn.com/images/products/250/04258931606.jpg",
        nam:"DKNY",
        des:"Be Delicious Eau De Parfum Spray",
        price:"Rs .6,023.50",
    },
     {
        img:"https://a.cdnsbn.com/images/products/250/00794133706.jpg",
        nam:"JEAN PAUL GAULTIER",
        des:"Classique Eau De Toilette Spray",
        price:"Rs .7,259.00",
    },
     {
        img:"https://a.cdnsbn.com/images/products/250/04807024702.jpg",
        nam:"LAURA MERCIER",
        des:"Loose Setting Powder",
        price:"Rs .3,668.00",
    },
    
]

deal.map(function(data){
var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.img);

    var nam=document.createElement("p");
    nam.textContent=data.nam;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.des;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
    div.append(image,nam,des,price,btn);
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
                cartCountShow(arr)

    })
      document.querySelector(".deals").append(div)
})

var wen=[
  {
        img:"https://a.cdnsbn.com/images/products/250/26930926105.jpg",
        nam:"ACQUA DI PARMA",
        des:"Signatures Of The Sun Oud & Spice Eau De Parfum Spray",
        price:"Rs .21,428.50",
    },
     {
        img:"https://a.cdnsbn.com/images/products/250/26589888705.jpg",
        nam:"CARTIER",
        des:"Rivieres Luxuriance Eau De Toilette Spray",
        price:"Rs .8,533.00",
    },
     {
        img:"https://a.cdnsbn.com/images/products/250/26824738406.jpg",
        nam:"TRUSSARDI",
        des:"Trussardi Eau de Parfum Spray",
        price:"Rs .7,645.00",
    },
     {
        img:"https://a.cdnsbn.com/images/products/250/26623878602.jpg",
        nam:"WINKY LUX",
        des:"Chandelier Sparkling Lip Gloss",
        price:"Rs .1,622.00",
    },
]

wen.map(function(data){
    var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.img);

    var nam=document.createElement("p");
    nam.textContent=data.nam;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.des;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
    div.append(image,nam,des,price,btn);
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
                cartCountShow(arr)

    })
      document.querySelector(".new").append(div)
})