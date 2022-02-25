let cartData = JSON.parse(localStorage.getItem("projectData")) || [];

// console.log(cartData);

let products = document.getElementById("products");
var sumArr=[];

function showData(data){
    products.innerHTML =null;
    products.innerText = "";
    sumArr = [];

    let goods = document.createElement("p");
    goods.innerText = "Goods shipped from Strawberrynet";
    products.append(goods);

    data.map(function(el,index){

        let div = document.createElement("div");
        div.id = "card";

        let hr = document.createElement("hr");

        let div1 = document.createElement("div");
        div1.id = "cartImage";
        let image = document.createElement("img");
        image.src = el.image;  
        
        div1.append(image);

        let div2 = document.createElement("div");
    
    let title = document.createElement("p");
    title.innerText = el.title;
    let desc = document.createElement("p");
    desc.innerText = el.desc;
   
    div2.append(title,desc);

    let div3 = document.createElement("div");
    div3.id = "qty";

    let qty = 1;

    //div4 initialistion
    let div4 = document.createElement("div");
    // let qty = document.getElementById(`select${i}`).value 
    
    let prodPrice = document.createElement("p");
   
    prodPrice.setAttribute("class","price");

    let x = qty*el.price;
        sumArr[index] = x;

    showPrice(prodPrice,x);
    let div5 = document.createElement("div");
    let dlt = document.createElement("img");
    dlt.id = "delete";
    dlt.src = "/Project/images/icons8-delete-64.png";

    dlt.addEventListener("click",function (){
        data.splice(index,1);
        sumArr.splice(index,1);
        showSum(sumArr);
        localStorage.setItem("projectData",JSON.stringify(data))
        let cartData = JSON.parse(localStorage.getItem("projectData")) || [];
        
        products.innerHTML = null;
        showData(cartData);
        

    });
    div5.append(dlt);
    div4.append(prodPrice);
    //div4 completion

    let p10 = document.createElement("p");
    p10.innerText = ` ${qty} `;
    let b1 = document.createElement("button");
    b1.innerText = "+";
    b1.addEventListener("click",function(){
        if(qty<20){
            qty++;
            
            p10.innerText = `${qty}`;
            let val = qty * el.price;
            sumArr[index] = val;
            showPrice(prodPrice,val);
            showSum(sumArr);    
        }else{
            qty = 20;
        }
    });

    let b2 = document.createElement("button");
    b2.innerText = "-";
    b2.addEventListener("click",function(){
        if(qty>1){
            qty--;
            p10.innerText = ` ${qty} `;
            let val = qty * el.price;
            sumArr[index] = val;
            showPrice(prodPrice,val);
            showSum(sumArr);
        }else{
            qty = 1;
        }
    });
    

    div3.append(b2,p10,b1);
  
    div.append(div1,div2,div3,div4,div5);

    products.append(div);
  
    })
    let hr5=document.createElement("hr");
    products.append(hr5)
    showSum(sumArr);
};


showData(cartData);

function showPrice(parent,amount){
    parent.innerText="";
    parent.innerText = amount;
}


function showSum(sumArr){
    let sum =0;
    for(let i=0;i<sumArr.length;i++){
        sum +=sumArr[i];
    }
    let cartTotal = document.getElementById("cartTotal");
    cartTotal.innerHTML = null;
    

    //initialisation
    let div = document.createElement("div");
    div.id="cartValue";


    let div1 = document.createElement("div");
    let hr = document.createElement("hr");
    let h1 = document.createElement("h4");
    h1.innerText = `Item Total : ${sumArr.length} item(s)`;
    let h2 = document.createElement("h4");
    h2.innerText = `INR ${sum}`;

    div1.append(h1,h2);

    //div2 initialisation

    let div2 = document.createElement("div");
    div2.id = "redtext";
    
    let p1 = document.createElement("p");
    p1.innerText = `Extra 10% Off (New Customer)`
    let p2 = document.createElement("p");
    let temp = (sum*10)/100;
    temp.toFixed(2);
    p2.innerText =`-INR ${temp}`;
    sum = sum-temp;
    sum.toFixed(2);

    div2.append(p1,p2);

    //div3 starts

    let div3 = document.createElement("div");
    div3.id = "redtext"
    
    let p3 = document.createElement("p");
    p3.innerText = `Extra 8% Off (February Sale)`
    let p4 = document.createElement("p");
    temp = (sum*8)/100;
    temp = temp.toFixed(2);
    p4.innerText =`-INR ${temp}`;
    sum = sum-temp;

    div3.append(p3,p4);

    //div4 starts

    let div4 = document.createElement("div");
    if(sum<11582){

        
    
        let p5 = document.createElement("p");
        p5.innerText = `Standard Shipping (Signature)`
        let p6 = document.createElement("p");
        temp = 772.20;
        sum = sum+temp;
        p6.innerText =`INR ${temp}`;
    
        div4.append(p5,p6);


    }

    //div5 starts
    let div5 = document.createElement("div");

        let p7 = document.createElement("p");
        p7.innerText = `Freight Surcharge `
        let p8 = document.createElement("p");
        temp = 240.60;
        sum = sum+temp;
        p8.innerText =`INR ${temp}`;
        
        div5.append(p7,p8);

    //div6 starts

    let hr2 = document.createElement("hr");

    let div6 = document.createElement("div");
    let h3 = document.createElement("h2");
    h3.innerText = `Order Total: ${sumArr.length} item(s)`;
    let h4 = document.createElement("h2");
    sum = sum.toFixed(2);
    h4.innerText = `INR ${sum}`;
    div6.append(h3,h4);

    div.append(div1,div2,div3,div4,div5,hr2,div6);


    
    cartTotal.append(div);

    showSpend(sum);
}

function showSpend(sum){
    let parrent = document.getElementById("total");
    parrent.innerText ="";
    let de = document.querySelector("#del");


let spendbar = document.getElementById("spendbar");

if(sum<11582){
    let per = (sum/11582)*100;
    spendbar.style.width = `${per}%`;
    // parent.innerText = `Spend INR${1-sum} more for a reduced standard shipping fee at INR386.10.`;
    let sPend =11582-sum;
    sPend = sPend.toFixed(2);
    parrent.innerText = `Spend INR${sPend} more for a free shipping.`;
    de.innerText = "Free standard shipping for order above INR11,582.80."
}else{
    spendbar.style.width = `100%`;

    
    de.innerText = "Happy Shopping";
    
    
    parrent.innerText = `You're now eligible for FREE Standard shipping​`;

}


}


