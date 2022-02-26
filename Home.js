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

 

    


var arr=JSON.parse(localStorage.getItem("projectData"))||[];
var arr1=JSON.parse(localStorage.getItem("wishlist"))||[];

  
  var mask=[
    {
        image:"https://a.cdnsbn.com/images/products/250/23578880001.jpg",
        brand:"BORGHESE",
        name:"Fango Essenziali Energize Treatment Sheet Masks",
        price:"Rs .849.50",
        
    },

     {
        image:"https://a.cdnsbn.com/images/products/250/14820680401.jpg",
        brand:"CLINIQUE",
        name:"Moisture Surge Overnight Mask",
        price:"Rs .3,012.00",
    },
     {
        image:"https://a.cdnsbn.com/images/products/250/21945285901.jpg",
        brand:"DECLEOR",
        name:"Hydra Floral White Petal Neroli & Sweet Orange Skin Perfecting Hydrating Sleeping Mask",
        price:"Rs .3,475.00",
    },
     {
        image:"https://a.cdnsbn.com/images/products/250/26912299901.jpg",
        brand:"FRESH",
        name:"Rose Deep Hydration Sleeping Mask",
        price:"Rs .2,471.50",
    },
     {
        image:"https://b.cdnsbn.com/images/products/250/16760323701.jpg",
        brand:"LA MER",
        name:"The Lifting & Firming Mask",
        price:"Rs .22,780.00",
    },
     {
        image:"https://b.cdnsbn.com/images/products/250/26942813001.jpg",
        brand:"OLE HENRIKSEN",
        name:"Balance Cold Plunge Pore Mask",
        price:"Rs .3,166.00",
    },
     {
        image:"https://b.cdnsbn.com/images/products/250/25390996001.jpg",
        brand:"PREVAGE BY ELIZABETH ARDEN",
        name:"City Smart Double Action Detox Peel Off Mask",
        price:"Rs .4,826.50",
    },
      {
        image:"https://b.cdnsbn.com/images/products/250/25750781101.jpg",
        brand:"SK II",
        name:"Facial Treatment Mask (Box Slightly Damaged)",
        price:"Rs .6,795.50",
    },
   



]

mask.map(function(data){
    var div=document.createElement("div");

    var image=document.createElement("img");
    image.setAttribute("src",data.image);
    image.setAttribute("class", "img")

    var nam=document.createElement("p");
    nam.textContent=data.brand;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.name;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

    var icon=document.createElement("i");
    icon.setAttribute("class","fa-solid fa-heart");
    icon.setAttribute("id","icon");
    icon.addEventListener("click", function(){
           if(icon.style.color =="rgb(62, 62, 165)"){
               icon.style.color ="grey"
           }
           else{
               icon.style.color="rgb(62, 62, 165)"
           }
         arr1.push(data);
           
        localStorage.setItem("wishlist" , JSON.stringify(arr1));
        console.log(arr1);
     });
        
   

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
    btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
    })

    div.append(icon,image,nam,des,price,btn);
    
   

    document.querySelector(".mask").append(div);
})

    

var eye=[
       {
        image:"https://a.cdnsbn.com/images/products/250/23918626502.jpg",
        brand:"BOBBI BROWN",
        name:"Luxe Eye Shadow",
        price:"Rs .3,243.50",
    },
      {
        image:"https://a.cdnsbn.com/images/products/250/26410790602.jpg",
        brand:"CHARLOTTE TILBURY",
        name:"Hollywood Flawless Eye Filter Luxury Palette",
        price:"Rs .5,019.50",
    },
      {
        image:"https://a.cdnsbn.com/images/products/250/27175576201.jpg",
        brand:"DRUNK ELEPHANT",
        name:"C-Tango Multivitamin Eye Cream",
        price:"Rs .5,637.00",
    },
      {
        image:"https://a.cdnsbn.com/images/products/250/20239380602.jpg",
        brand:"ESTEE LAUDER",
        name:"Double Wear Infinite Waterproof Eyeliner",
        price:"Rs .1,930.50",
    },
      {
        image:"https://b.cdnsbn.com/images/products/250/18860956502.jpg",
        brand:"GRANDE COSMETICS (GRANDELASH)",
        name:"GrandeBrow (Brow Enhancing Serum)",
        price:"Rs .4,479.00",
    },
      {
        image:"https://b.cdnsbn.com/images/products/250/26496402602.jpg",
        brand:"NARS",
        name:"Voyageur Eyeshadow Palette (6x Eyeshadow)",
        price:"Rs .1,930.50",
    },
      {
        image:"https://b.cdnsbn.com/images/products/250/15853100802.jpg",
        brand:"RAPIDLASH",
        name:"Eyelash Enhancing Serum (With Hexatein 1 Complex)",
        price:"Rs .2,934.50",
    },
      {
        image:"https://b.cdnsbn.com/images/products/250/24714581301.jpg",
        brand:"TIMELESS SKIN CARE",
        name:"Hydrating Eye Cream W/ Hyaluronic Acid +Matrixyl 3000",
        price:"Rs .1,429.00",
    },
   
]

eye.map(function(data){
    var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.image);

    var nam=document.createElement("p");
    nam.textContent=data.brand;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.name;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

     var icon=document.createElement("i");
    icon.setAttribute("class","fa-solid fa-heart");
    icon.setAttribute("id","icon");
    icon.addEventListener("click", function(){
           if(icon.style.color =="rgb(62, 62, 165)"){
               icon.style.color ="grey"
           }
           else{
               icon.style.color="rgb(62, 62, 165)"
           }
         arr1.push(data);
           
        localStorage.setItem("wishlist" , JSON.stringify(arr1));
        console.log(arr1);
     });
 

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
    })
    div.append(icon,image,nam,des,price,btn);
    
   

    document.querySelector(".eye").append(div);
})

var hair=[
       {
        image:"https://a.cdnsbn.com/images/products/250/13913408924.jpg",
        brand:"AGADIR ARGAN OIL",
        name:"Hair Treatment (Hydrates & Conditions - All Hair Types)",
        price:"Rs .1,544.50",
    },
        {
        image:"https://a.cdnsbn.com/images/products/250/14130874344.jpg",
        brand:"AVEDA",
        name:"Color Conserve Daily Color Protect Leave-In Treatment",
        price:"Rs .2,703.00",
    },
        {
        image:"https://a.cdnsbn.com/images/products/250/20090999944.jpg",
        brand:"CHI",
        name:"Keratin Leave-In Conditioner (Leave in Reconstructive Treatment)",
        price:"Rs .888.50",
    },
        {
        image:"https://a.cdnsbn.com/images/products/250/13611200444.jpg",
        brand:"KERASTASE",
        name:"Resistance Serum Therapiste Dual Treatment Fiber Quality Renewal Care (Extremely Damaged Lengths and Ends)",
        price:"Rs .3,784.00",
    },
        {
        image:"https://b.cdnsbn.com/images/products/250/20111299444.jpg",
        brand:"MOROCCANOIL",
        name:"Dry Scalp Treatment - Dry",
        price:"Rs .2,471.50",
    },
        {
        image:"https://b.cdnsbn.com/images/products/250/19300764344.jpg",
        brand:"REDKEN",
        name:"Frizz Dismiss Mask/ Masque Intense Smoothing Treatment",
        price:"Rs .1,930.50",
    },
        {
        image:"https://b.cdnsbn.com/images/products/250/19168260044.jpg",
        brand:"REGENEPURE",
        name:"Dr Hair & Scalp Treatment",
        price:"Rs .1,930.50",
    },
        {
        image:"https://b.cdnsbn.com/images/products/250/17932036444.jpg",
        brand:"WEN",
        name:"Cucumber Aloe Re Moist Intensive Hair Treatment",
        price:"Rs .1,930.50",
    },
     

]
hair.map(function(data){

    var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.image);

    var nam=document.createElement("p");
    nam.textContent=data.brand;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.name;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

     var icon=document.createElement("i");
    icon.setAttribute("class","fa-solid fa-heart");
    icon.setAttribute("id","icon");
    icon.addEventListener("click", function(){
           if(icon.style.color =="rgb(62, 62, 165)"){
               icon.style.color ="grey"
           }
           else{
               icon.style.color="rgb(62, 62, 165)"
           }
         arr1.push(data);
           
        localStorage.setItem("wishlist" , JSON.stringify(arr1));
        console.log(arr1);
     });


    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
    })
    div.append(icon,image,nam,des,price,btn);
    
   

    document.querySelector(".hair").append(div);

})


var lips=[

       {
        image:"https://a.cdnsbn.com/images/products/250/20360626502.jpg",
        brand:"BOBBI BROWN",
        name:"Luxe Lip Color",
        price:"Rs .1,699.00",
    },
       {
        image:"https://a.cdnsbn.com/images/products/250/25751631002.jpg",
        brand:"GIORGIO ARMANI",
        name:"Lip Maestro Intense Velvet Color (Liquid Lipstick)",
        price:"Rs .2,239.50",
    },
       {
        image:"https://a.cdnsbn.com/images/products/250/23855277501.jpg",
        brand:"GROWN ALCHEMIST",
        name:"Lip Balm - Vanilla & Watermelon",
        price:"Rs .1,506.00",
    },
       {
        image:"https://a.cdnsbn.com/images/products/250/13226917901.jpg",
        brand:"JOHN MASTERS ORGANICS",
        name:"Lip Calm",
        price:"Rs .579.50",
    },
       {
        image:"https://b.cdnsbn.com/images/products/250/03308323701.jpg",
        brand:"LA MER",
        name:"Lip Balm",
        price:"Rs .6,100.50",
    },
       {
        image:"https://b.cdnsbn.com/images/products/250/18310702602.jpg",
        brand:"NARS",
        name:"Audacious Lipstick",
        price:"Rs .2,317.00",
    },
       {
        image:"https://b.cdnsbn.com/images/products/250/16553496301.jpg",
        brand:"SKIN CEUTICALS",
        name:"Antioxidant Lip Repair",
        price:"Rs .4,479.00",
    },
       {
        image:"https://b.cdnsbn.com/images/products/250/10003103902.jpg",
        brand:"YOUNGBLOOD",
        name:"Lipstick",
        price:"Rs .1,467.50",
    },
   

]

lips.map(function(data){

     var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.image);

    var nam=document.createElement("p");
    nam.textContent=data.brand;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.name;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

     var icon=document.createElement("i");
    icon.setAttribute("class","fa-solid fa-heart");
    icon.setAttribute("id","icon");
    icon.addEventListener("click", function(){
           if(icon.style.color =="rgb(62, 62, 165)"){
               icon.style.color ="grey"
           }
           else{
               icon.style.color="rgb(62, 62, 165)"
           }
         arr1.push(data);
           
        localStorage.setItem("wishlist" , JSON.stringify(arr1));
        console.log(arr1);
     });
    

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
    })
    div.append(icon,image,nam,des,price,btn);
    
   

    document.querySelector(".lips").append(div)

})


var men=[
    {
        image:"https://a.cdnsbn.com/images/products/250/10047076721.jpg",
        brand:"BIOTHERM",
        name:"Homme Toning Cleansing Gel (Normal Skin)",
        price:"Rs .2,471.50",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/02186435005.jpg",
        brand:"BVLGARI",
        name:"Extreme Eau De Toilette Spray",
        price:"Rs .5,019.50",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/26203180321.jpg",
        brand:"CLARINS",
        name:"Men Energizing Gel With Red Ginseng Extract",
        price:"Rs .4,247.50",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/12109533805.jpg",
        brand:"GUCCI",
        name:"Guilty Pour Homme Eau De Toilette Spray",
        price:"Rs .5,328.50",
    },
    {
        image:"https://b.cdnsbn.com/images/products/250/10042880921.jpg",
        brand:"LANCOME",
        name:"Men Ultimate Cleansing Gel",
        price:"Rs .2,471.50",
    },
    {
        image:"https://b.cdnsbn.com/images/products/250/04813476005.jpg",
        brand:"MONTBLANC",
        name:"Starwalker Eau De Toilette Spray",
        price:"Rs .2,934.50",
    },
    {
        image:"https://b.cdnsbn.com/images/products/250/10060491721.jpg",
        brand:"THE ART OF SHAVING",
        name:"Pre Shave Oil - Sandalwood Essential Oil (For All Skin Types)",
        price:"Rs .1,930.50",
    },
    {
        image:"https://b.cdnsbn.com/images/products/250/02231369505.jpg",
        brand:"TOMMY HILFIGER",
        name:"Tommy Eau De Toilette Spray",
        price:"Rs .2,780.00",
    },
   

]

men.map(function(data){
     var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.image);

    var nam=document.createElement("p");
    nam.textContent=data.brand;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.name;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

     var icon=document.createElement("i");
    icon.setAttribute("class","fa-solid fa-heart");
    icon.setAttribute("id","icon");
    icon.addEventListener("click", function(){
           if(icon.style.color =="rgb(62, 62, 165)"){
               icon.style.color ="grey"
           }
           else{
               icon.style.color="rgb(62, 62, 165)"
           }
         arr1.push(data);
           
        localStorage.setItem("wishlist" , JSON.stringify(arr1));
        console.log(arr1);
     });

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
    })
    div.append(icon,image,nam,des,price,btn);
    
   

    document.querySelector(".men").append(div)

})


var joy=[
 {
        image:"https://a.cdnsbn.com/images/products/250/27342293753.jpg",
        brand:"BAREMINERALS",
        name:"Smoothness Hydrating Cleansing Oil (Free: Natural Beauty r-PGA Deep Hydration Moisturizing Cushion Mask 6x 20ml)",
        price:"Rs .2,548.50",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/27343276753.jpg",
        brand:"BIOTHERM",
        name:"Aquasource Everplump Plumping Smoothing Moisturizing Treatment 125ml (Free: Natural Beauty Aromatic Cleaning Balm 125g)",
        price:"Rs .6,023.50",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/27342026553.jpg",
        brand:"BOBBI BROWN",
        name:"Soothing Cleansing Oil (Free: Natural Beauty BIO UP Treatment Essence 200ml)",
        price:"Rs .4,556.00",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/27338282553.jpg",
        brand:"DARPHIN",
        name:"Intral Daily Rescue Serum 50ml (Free: Natural Beauty Aromatic Cleaning Balm 125g)",
        price:"Rs .7,027.00",
    },
    {
        image:"https://b.cdnsbn.com/images/products/250/27342100053.jpg",
        brand:"ELEMIS",
        name:"Pro-Collagen Super Serum (Free: Natural Beauty BIO UP Treatment Essence 200ml)",
        price:"Rs .4,865.00",
    },
    {
        image:"https://b.cdnsbn.com/images/products/250/27338380553.jpg",
        brand:"ELIZABETH ARDEN",
        name:"Ceramide Vitamin C Capsules - Radiance Renewal Serum 60caps (Free: Natural Beauty BIO UP Treatment Essence 200ml)",
        price:"Rs .5,714.50",
    },
    {
        image:"https://b.cdnsbn.com/images/products/250/27338180953.jpg",
        brand:"LANCOME",
        name:"Confort Tonique 400ml (Free: Natural Beauty r-PGA Deep Hydration Moisturizing Cushion Mask 6x 20ml)",
        price:"Rs .4,015.50",
    },
    

]

joy.map(function(data){
var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.image);

    var nam=document.createElement("p");
    nam.textContent=data.brand;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.name;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

     var icon=document.createElement("i");
    icon.setAttribute("class","fa-solid fa-heart");
    icon.setAttribute("id","icon");
    icon.addEventListener("click", function(){
           if(icon.style.color =="rgb(62, 62, 165)"){
               icon.style.color ="grey"
           }
           else{
               icon.style.color="rgb(62, 62, 165)"
           }
         arr1.push(data);
           
        localStorage.setItem("wishlist" , JSON.stringify(arr1));
        console.log(arr1);
     });

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
    })
    div.append(icon,image,nam,des,price,btn);
    
   

    document.querySelector(".joy").append(div)


})


var daily=[
    {
        image:"https://a.cdnsbn.com/images/products/250/24304376739.jpg",
        brand:"BIOTHERM",
        name:"Homme Sensitive Force Recovering Balm",
        price:"Rs .2,934.50",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/27318584037.jpg",
        brand:"CALVIN KLEIN",
        name:"IN2U Eau De Toilette Spray",
        price:"Rs .1,699.00",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/27311990639.jpg",
        brand:"CHARLOTTE TILBURY",
        name:"Starry Eyes To Hypnotise Eyeshadow Palette (12x Eyeshadow) (Limited Edition)",
        price:"Rs .4,826.50",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/20587499937.jpg",
        brand:"FLORIS",
        name:"Edwardian Bouquet Eau De Toilette Spray",
        price:"Rs .5,174.00",
    },
    {
        image:"https://b.cdnsbn.com/images/products/250/27316731337.jpg",
        brand:"ISSEY MIYAKE",
        name:"L'Eau D'Issey Pure Petale De Nectar Eau De Toilette Spray",
        price:"Rs .4,093.00",
    },
    {
        image:"https://b.cdnsbn.com/images/products/250/21207803639.jpg",
        brand:"JANE IREDALE",
        name:"D2O Hydration Spray",
        price:"Rs .1,660.50",
    },
    {
        image:"https://b.cdnsbn.com/images/products/250/27093370639.jpg",
        brand:"REUZEL",
        name:"Red Pomade (Water Soluble, High Sheen)",
        price:"Rs .2,471.50",
    },
    {
        image:"https://b.cdnsbn.com/images/products/250/27319891837.jpg",
        brand:"NICOLAI",
        name:"New York Intense Eau De Parfum Spray",
        price:"Rs .3,977.00",
    },
   

]

daily.map(function(data){
    var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.image);

    var nam=document.createElement("p");
    nam.textContent=data.brand;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.name;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

     var icon=document.createElement("i");
    icon.setAttribute("class","fa-solid fa-heart");
    icon.setAttribute("id","icon");
    icon.addEventListener("click", function(){
           if(icon.style.color =="rgb(62, 62, 165)"){
               icon.style.color ="grey"
           }
           else{
               icon.style.color="rgb(62, 62, 165)"
           }
         arr1.push(data);
           
        localStorage.setItem("wishlist" , JSON.stringify(arr1));
        console.log(arr1);
     });

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
    })
    div.append(icon,image,nam,des,price,btn);
    
   

    document.querySelector(".daily").append(div)
})


var best=[
     {
        image:"https://a.cdnsbn.com/images/products/250/20079465901.jpg",
        brand:"ELTAMD",
        name:"UV Clear Facial Sunscreen SPF 46 - For Skin Types Prone To Acne, Rosacea & Hyperpigmentation",
        price:"Rs .3,320.50",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/10057281421.jpg",
        brand:"SHISEIDO",
        name:"Men Cleansing Foam",
        price:"Rs .2,124.00",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/23954980501.jpg",
        brand:"ELIZABETH ARDEN",
        name:"Ceramide Retinol Capsules - Line Erasing Night Serum",
        price:"Rs .4,401.50",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/19168260044.jpg",
        brand:"REGENEPURE",
        name:"Dr Hair & Scalp Treatment",
        price:"Rs .1,930.50",
    },
     {
        image:"https://a.cdnsbn.com/images/products/250/21945285901.jpg",
        brand:"DECLEOR",
        name:"Hydra Floral White Petal Neroli & Sweet Orange Skin Perfecting Hydrating Sleeping Mask",
        price:"Rs .3,475.00",
    },
     {
        image:"https://a.cdnsbn.com/images/products/250/26912299901.jpg",
        brand:"FRESH",
        name:"Rose Deep Hydration Sleeping Mask",
        price:"Rs .2,471.50",
    },
     {
        image:"https://b.cdnsbn.com/images/products/250/16760323701.jpg",
        brand:"LA MER",
        name:"The Lifting & Firming Mask",
        price:"Rs .22,780.00",
    },
     {
        image:"https://b.cdnsbn.com/images/products/250/26942813001.jpg",
        brand:"OLE HENRIKSEN",
        name:"Balance Cold Plunge Pore Mask",
        price:"Rs .3,166.00",
    },


]

 best.map(function(data){
 var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.image);

    var nam=document.createElement("p");
    nam.textContent=data.brand;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.name;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

     var icon=document.createElement("i");
    icon.setAttribute("class","fa-solid fa-heart");
    icon.setAttribute("id","icon");
    icon.addEventListener("click", function(){
           if(icon.style.color =="rgb(62, 62, 165)"){
               icon.style.color ="grey"
           }
           else{
               icon.style.color="rgb(62, 62, 165)"
           }
         arr1.push(data);
           
        localStorage.setItem("wishlist" , JSON.stringify(arr1));
        console.log(arr1);
     });

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
  
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
    })

      div.append(icon,image,nam,des,price,btn);
  
      document.querySelector(".best").append(div);
})

var deal=[
    {
        image:"https://a.cdnsbn.com/images/products/250/04741780301.jpg",
        brand:"CLARINS",
        name:"Silky smooth, oil free skin perfector",
        price:"Rs .2,510.00",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/04258931606.jpg",
        brand:"DKNY",
        name:"Be Delicious Eau De Parfum Spray",
        price:"Rs .6,023.50",
    },
     {
        image:"https://a.cdnsbn.com/images/products/250/00794133706.jpg",
        brand:"JEAN PAUL GAULTIER",
        name:"Classique Eau De Toilette Spray",
        price:"Rs .7,259.00",
    },
     {
        image:"https://a.cdnsbn.com/images/products/250/04807024702.jpg",
        brand:"LAURA MERCIER",
        name:"Loose Setting Powder",
        price:"Rs .3,668.00",
    },
    
]

deal.map(function(data){
var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.image);

    var nam=document.createElement("p");
    nam.textContent=data.brand;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.name;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

     var icon=document.createElement("i");
    icon.setAttribute("class","fa-solid fa-heart");
    icon.setAttribute("id","icon");
    icon.addEventListener("click", function(){
           if(icon.style.color =="rgb(62, 62, 165)"){
               icon.style.color ="grey"
           }
           else{
               icon.style.color="rgb(62, 62, 165)"
           }
         arr1.push(data);
           
        localStorage.setItem("wishlist" , JSON.stringify(arr1));
        console.log(arr1);
     });

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
  
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
    })

      div.append(icon,image,nam,des,price,btn);
      document.querySelector(".deals").append(div)
})

var wen=[
  {
        image:"https://a.cdnsbn.com/images/products/250/26930926105.jpg",
        brand:"ACQUA DI PARMA",
        name:"Signatures Of The Sun Oud & Spice Eau De Parfum Spray",
        price:"Rs .21,428.50",
    },
     {
        image:"https://a.cdnsbn.com/images/products/250/26589888705.jpg",
        brand:"CARTIER",
        name:"Rivieres Luxuriance Eau De Toilette Spray",
        price:"Rs .8,533.00",
    },
     {
        image:"https://a.cdnsbn.com/images/products/250/26824738406.jpg",
        brand:"TRUSSARDI",
        name:"Trussardi Eau de Parfum Spray",
        price:"Rs .7,645.00",
    },
     {
        image:"https://a.cdnsbn.com/images/products/250/26623878602.jpg",
        brand:"WINKY LUX",
        name:"Chandelier Sparkling Lip Gloss",
        price:"Rs .1,622.00",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/27342293753.jpg",
        brand:"BAREMINERALS",
        name:"Smoothness Hydrating Cleansing Oil (Free: Natural Beauty r-PGA Deep Hydration Moisturizing Cushion Mask 6x 20ml)",
        price:"Rs .2,548.50",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/27343276753.jpg",
        brand:"BIOTHERM",
        name:"Aquasource Everplump Plumping Smoothing Moisturizing Treatment 125ml (Free: Natural Beauty Aromatic Cleaning Balm 125g)",
        price:"Rs .6,023.50",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/27342026553.jpg",
        brand:"BOBBI BROWN",
        name:"Soothing Cleansing Oil (Free: Natural Beauty BIO UP Treatment Essence 200ml)",
        price:"Rs .4,556.00",
    },
    {
        image:"https://a.cdnsbn.com/images/products/250/27338282553.jpg",
        brand:"DARPHIN",
        name:"Intral Daily Rescue Serum 50ml (Free: Natural Beauty Aromatic Cleaning Balm 125g)",
        price:"Rs .7,027.00",
    },
]

wen.map(function(data){
    var div=document.createElement("div");

   var image=document.createElement("img");
    image.setAttribute("src",data.image);

    var nam=document.createElement("p");
    nam.textContent=data.brand;
    nam.setAttribute("class","nam");

    var des=document.createElement("p");
    des.textContent=data.name;
    des.setAttribute("class","des");

    var price=document.createElement("p");
    price.textContent=data.price;
    price.setAttribute("class","price");

     var icon=document.createElement("i");
    icon.setAttribute("class","fa-solid fa-heart");
    icon.setAttribute("id","icon");
    icon.addEventListener("click", function(){
           if(icon.style.color =="rgb(62, 62, 165)"){
               icon.style.color ="grey"
           }
           else{
               icon.style.color="rgb(62, 62, 165)"
           }
         arr1.push(data);
           
        localStorage.setItem("wishlist" , JSON.stringify(arr1));
        console.log(arr1);
     });

    var btn=document.createElement("button");
    btn.textContent="Add to bag";
    btn.setAttribute("id","btn");
   
     btn.addEventListener("click",function(){
        arr.push(data);

        localStorage.setItem("projectData" , JSON.stringify(arr));
        console.log(arr);
    })

     div.append(icon,image,nam,des,price,btn);
      document.querySelector(".new").append(div)
})