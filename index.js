
// ------------------------- navLinks -------------------------
let navLinks=document.querySelectorAll("ul .nav-item");

navLinks.forEach(function (ele){
    ele.addEventListener('click',function(){
        navLinks.forEach(function (ele){
            ele.classList.remove("active")
        });
        this.classList.add("active");
    })
})
// ------------------------------------------------------------


// ------------------------- producs -------------------------
let menProductList=[
    {img:"./onlineSeller Menpage/menClothes0.jpg",details:"Formal Suit",stars:5},
    {img:"./onlineSeller Menpage/menClothes8.jpg",details:"White Shirt",stars:3.5},
    {img:"./onlineSeller Menpage/menClothes7.jpg",details:"Te-Shirt",stars:3},
    {img:"./onlineSeller Menpage/menshoes4.jpg",details:"blue shoes",stars:2.5},
    {img:"./onlineSeller Menpage/menClothes11.jpg",details:"package fashion",stars:4},
    {img:"./onlineSeller Menpage/menClothes.jpg",details:"smart package fashion",stars:4},
    {img:"./onlineSeller Menpage/bag.jpg",details:"smart package fashion",stars:4.5},
    {img:"./onlineSeller Menpage/menshoes6.jpg",details:"smart package fashion",stars:4},
]
let womenProductList=[
    {img:"./veiled-fashion/icons-photos/dress6.jpg",details:"pink dress fashion",stars:3},
    {img:"./veiled-fashion/icons-photos/dress7.jpg",details:"green dress fashion",stars:4.5},
    {img:"./veiled-fashion/icons-photos/dress8.jpg",details:"white dress fashion",stars:3},
    {img:"./veiled-fashion/icons-photos/femaleshoes2.jpg",details:"gold shoes fashion",stars:4},
    {img:"./veiled-fashion/icons-photos/femaleshoes3.jpg",details:"silver shoes fashion",stars:2.5},
    {img:"./veiled-fashion/icons-photos/dress10.jpg",details:"sliver dress fashion",stars:4},
]
let childrenProductList =[
    {img:"./onlineSeller Childpage/photos/childDress4.jpg",details:"gril dress",stars:2},
    {img:"./onlineSeller Childpage/photos/childSet3.jpg",details:"stagger gray black",stars:3.5},
    {img:"./onlineSeller Childpage/photos/childSet4.jpg",details:"stagger all black",stars:7},
    {img:"./onlineSeller Childpage/photos/childShoes3.jpg",details:"shoes army",stars:4},
    {img:"./onlineSeller Childpage/photos/childBag4.jpg",details:"pink bag",stars:2.5},
    {img:"./onlineSeller Childpage/photos/childShoes2.jpg",details:"red shoes",stars:4},
    {img:"./onlineSeller Childpage/photos/childBag2.jpg",details:"yellow bag",stars:2.5},
]

let leftBtn;
let rightBtn;;
let products="";

let temp;
function productsCreation(ProductList,containerID,idType,productsAnimation){
        // get only frist products
        temp=[ProductList[0],ProductList[1],ProductList[2],ProductList[3]]
        temp.forEach(function (ele,index){
        // --------- get the container Div ----------
        products=document.getElementById(containerID); 
        // -------- create Elements for view --------
        const product=document.createElement("div");
        const productContent=document.createElement("div");
        const theNewCircle=document.createElement("div");
        const img=document.createElement("img");
        const details=document.createElement("p");
        const divStars=document.createElement("div");
        const link=document.createElement("a");
        // -------- add content for Elements --------
        img.src=`${ele.img}`;
        details.textContent=`${ele.details}`;
        link.textContent=` More >>`;
        link.href=(idType==="children")? "./onlineSeller Childpage/childpage.html" : (idType==="men")? "./onlineSeller Menpage/menpage.html" : "./veiled-fashion/index.html"
        theNewCircle.textContent=` New`;
        // -------- add classes for style --------
        product.classList.add("col-sm-3","product")
        product.classList.add("col-sm-3","product", (index===0 && productsAnimation==="animation-right")? `${productsAnimation}` : ((index===3 && productsAnimation==="animation-left")? `${productsAnimation}`:"0"))
        productContent.classList.add("card")
        theNewCircle.classList.add(`new-div-for-${idType}`)
        details.classList.add(`details-${idType}`);
        link.classList.add("btn","btn-outline-info",`product-btn-color-${idType}`);
        // -------- append child the element --------
        productContent.appendChild(img,details)
        productContent.appendChild(details)
        let fullStar = Number.isInteger(ele.stars);
        for(let i=0;i<parseInt(ele.stars);i++){
            const star=document.createElement("li");
            star.classList.add("fa","fa-star","ml-2","star")
            divStars.appendChild(star)
            if(i==4) break;
        }
        if(!fullStar){
            const star=document.createElement("li");
            star.classList.add("fa","fa-star-half-o","ml-2","star")
            divStars.appendChild(star)
        }
        productContent.appendChild(divStars)
        productContent.appendChild(link)
        productContent.appendChild(theNewCircle)
        product.appendChild(productContent)
        products.appendChild(product)
    })
    //------- create left and right buttons -------
    leftBtn=document.createElement("button");
    rightBtn=document.createElement("button");
    leftBtn.addEventListener("click",change)
    rightBtn.addEventListener("click",change)
    leftBtn.id=`${idType}L`;
    rightBtn.id=`${idType}R`;
    leftBtn.textContent=`<`
    rightBtn.textContent=`>`
    leftBtn.classList.add("left-side-button",`${idType}ColorBtn`);
    rightBtn.classList.add("right-side-button",`${idType}ColorBtn`);
    products.appendChild(leftBtn)
    products.appendChild(rightBtn)
}
// ------ calling the productsCreation() function to create the products inside each container ------
productsCreation(menProductList,"menProducts","men");
productsCreation(womenProductList,"womenProducts","women");
productsCreation(childrenProductList,"childrenProducts","children");

// -------- delete products --------
function deleteProducts(containerID){
    const products=document.getElementById(containerID);
    while(products.hasChildNodes()){
        products.removeChild(products.firstChild);
    }
}
// -------- check which button clicked --------
function change(){
    let gender=this.id.split(""); // this.id  =>  refers to the id for the button clicked 
    left_OR_right=gender.pop();
    gender=gender.join("");
    if(left_OR_right=="L")
    changeLeft((gender==="children")? childrenProductList : (gender==="men")? menProductList : womenProductList,gender)
    else
    changeRight((gender==="children")? childrenProductList : (gender==="men")? menProductList : womenProductList,gender)
}
// -------- change & move products --------
function changeLeft(ProductList,gender){
    let deletedItem=ProductList.pop();
    deleteProducts(`${gender}Products`);
    ProductList.unshift(deletedItem);
    productsCreation(ProductList,`${gender}Products`,gender,"animation-right");
}
function changeRight(ProductList,gender){
    let deletedItem=ProductList.shift();
    deleteProducts(`${gender}Products`);
    ProductList.push(deletedItem);
    productsCreation(ProductList,`${gender}Products`,gender,"animation-left");
}
































