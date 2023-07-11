
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
    {img:"./onlineSeller Menpage/menClothes0.jpg",setNew:true,NewDivStyle:"circle",details:"Formal Suit",stars:5},
    {img:"./onlineSeller Menpage/menClothes8.jpg",setNew:true,NewDivStyle:"circle",details:"White Shirt",stars:3.5},
    {img:"./onlineSeller Menpage/menClothes7.jpg",setNew:true,NewDivStyle:"circle",details:"Te-Shirt",stars:3},
    {img:"./onlineSeller Menpage/menshoes4.jpg",setNew:true,NewDivStyle:"circle",details:"blue shoes",stars:2.5},
    {img:"./onlineSeller Menpage/menClothes11.jpg",setNew:true,NewDivStyle:"circle",details:"package fashion",stars:4},
    {img:"./onlineSeller Menpage/menClothes.jpg",setNew:true,NewDivStyle:"circle",details:"smart package fashion",stars:4},
    {img:"./onlineSeller Menpage/bag.jpg",setNew:true,NewDivStyle:"circle",details:"smart package fashion",stars:4.5},
    {img:"./onlineSeller Menpage/menshoes6.jpg",setNew:true,NewDivStyle:"circle",details:"smart package fashion",stars:4},
]
let womenProductList=[
    {img:"./veiled-fashion/icons-photos/dress6.jpg",setNew:true,NewDivStyle:"star",details:"pink dress fashion",stars:3},
    {img:"./veiled-fashion/icons-photos/dress7.jpg",setNew:true,NewDivStyle:"star",details:"green dress fashion",stars:4.5},
    {img:"./veiled-fashion/icons-photos/dress8.jpg",setNew:true,NewDivStyle:"star",details:"white dress fashion",stars:3},
    {img:"./veiled-fashion/icons-photos/femaleshoes2.jpg",setNew:true,NewDivStyle:"star",details:"gold shoes fashion",stars:4},
    {img:"./veiled-fashion/icons-photos/femaleshoes3.jpg",setNew:true,NewDivStyle:"star",details:"silver shoes fashion",stars:2.5},
    {img:"./veiled-fashion/icons-photos/dress10.jpg",setNew:true,NewDivStyle:"star",details:"sliver dress fashion",stars:4},
]
let childrenProductList =[
    {img:"./onlineSeller Childpage/photos/childDress4.jpg",setNew:true,NewDivStyle:"circle",details:"gril dress",stars:2},
    {img:"./onlineSeller Childpage/photos/childSet3.jpg",setNew:true,NewDivStyle:"circle",details:"stagger gray black",stars:3.5},
    {img:"./onlineSeller Childpage/photos/childSet4.jpg",setNew:true,NewDivStyle:"circle",details:"stagger all black",stars:7},
    {img:"./onlineSeller Childpage/photos/childShoes3.jpg",setNew:true,NewDivStyle:"circle",details:"shoes army",stars:4},
    {img:"./onlineSeller Childpage/photos/childBag4.jpg",setNew:true,NewDivStyle:"circle",details:"pink bag",stars:2.5},
    {img:"./onlineSeller Childpage/photos/childShoes2.jpg",setNew:true,NewDivStyle:"circle",details:"red shoes",stars:4},
    {img:"./onlineSeller Childpage/photos/childBag2.jpg",setNew:true,NewDivStyle:"circle",details:"yellow bag",stars:2.5},
]

let products="";
let product ;
let productContent;
let createTheNewDiv;
let img;
let details;
let divStars;
let link;
        
let leftBtn;
let rightBtn;;
let temp;

// -------- create Elements for view --------
function createElements(ele){
    product=document.createElement("div");
    productContent=document.createElement("div");
    createTheNewDiv=(ele.setNew) ? document.createElement("div") : "";
    img=document.createElement("img");
    details=document.createElement("p");
    divStars=document.createElement("div");
    link=document.createElement("a");
}
// -------- add content for Elements --------
function setContentForElement(ele,idTypeForPeople){
    img.src=`${ele.img}`;
    details.textContent=`${ele.details}`;
    link.textContent=` More >>`;
    link.href=(idTypeForPeople==="children")? "./onlineSeller Childpage/childpage.html" : (idTypeForPeople==="men")? "./onlineSeller Menpage/menpage.html" : "./veiled-fashion/index.html"
    if(createTheNewDiv != "") createTheNewDiv.textContent=` New`;
}
// -------- add classes for style --------
function addClassesForElement(ele,index,idTypeForPeople,productsAnimation){
    product.classList.add("col-sm-3","product")
    product.classList.add("col-sm-3","product", (index===0 && productsAnimation==="animation-right")? `${productsAnimation}` : ((index===3 && productsAnimation==="animation-left")? `${productsAnimation}`:"0"))
    productContent.classList.add("card")
    if(createTheNewDiv != "") createTheNewDiv.classList.add(`new-div-for-${idTypeForPeople}-${ele.NewDivStyle}`)
    details.classList.add(`details-${idTypeForPeople}`);
    link.classList.add("btn","btn-outline-info",`product-btn-color-${idTypeForPeople}`);
}
//------- create left and right buttons -------
function create_left_right_Btns(idTypeForPeople){
    leftBtn=document.createElement("button");
    rightBtn=document.createElement("button");
    leftBtn.addEventListener("click",change)
    rightBtn.addEventListener("click",change)
    leftBtn.id=`${idTypeForPeople}L`;
    rightBtn.id=`${idTypeForPeople}R`;
    leftBtn.textContent=`<`
    rightBtn.textContent=`>`
    leftBtn.classList.add("left-side-button",`${idTypeForPeople}ColorBtn`);
    rightBtn.classList.add("right-side-button",`${idTypeForPeople}ColorBtn`);
}
//------------------------ productsCreation function -----------------------
function productsCreation(ProductList,containerID,idTypeForPeople,productsAnimation){
        // get only frist products
        temp=[ProductList[0],ProductList[1],ProductList[2],ProductList[3]]
        temp.forEach(function (ele,index){
        // --------- get the container Div ----------
        products=document.getElementById(containerID); 
        // -------- create Elements for view --------
        createElements(ele);
        // -------- add content for Elements --------
        setContentForElement(ele,idTypeForPeople);
        // -------- add classes for style --------
        addClassesForElement(ele,index,idTypeForPeople,productsAnimation);
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
        if(createTheNewDiv != "") productContent.appendChild(createTheNewDiv)
        product.appendChild(productContent)
        products.appendChild(product)
    })
    //------- create left and right buttons -------
    create_left_right_Btns(idTypeForPeople)
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
































