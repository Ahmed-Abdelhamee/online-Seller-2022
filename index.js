
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


// ------------------------- producs -------------------------    *************** Editable for new  ****************

let homeData= [{
    productsList:[
        {img:"./onlineSeller Menpage/photos/menClothes0.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#17a2b8",details:"Formal Suit",stars:5,link:"./onlineSeller Menpage/menpage.html"},
        {img:"./onlineSeller Menpage/photos/menClothes8.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#17a2b8",details:"White Shirt",stars:3.5,link:"./onlineSeller Menpage/menpage.html"},
        {img:"./onlineSeller Menpage/photos/menClothes7.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#17a2b8",details:"Te-Shirt",stars:3,link:"./onlineSeller Menpage/menpage.html"},
        {img:"./onlineSeller Menpage/photos/menshoes4.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#17a2b8",details:"blue shoes",stars:2.5,link:"./onlineSeller Menpage/menpage.html"},
        {img:"./onlineSeller Menpage/photos/menClothes11.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#17a2b8",details:"package fashion",stars:4,link:"./onlineSeller Menpage/menpage.html"},
        {img:"./onlineSeller Menpage/photos/menClothes.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#17a2b8",details:"smart package fashion",stars:2.5,link:"./onlineSeller Menpage/menpage.html"},
        {img:"./onlineSeller Menpage/photos/bag.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#17a2b8",details:"smart package fashion",stars:4.5,link:"./onlineSeller Menpage/menpage.html"},
        {img:"./onlineSeller Menpage/photos/menshoes6.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#17a2b8",details:"smart package fashion",stars:4,link:"./onlineSeller Menpage/menpage.html"},
    ],
    containerNumber:"container1",
    classAnimation:"0"
},
{
    productsList:[
        {img:"./veiled-fashion/icons-photos/dress6.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(255 110 133)",details:"pink dress fashion",stars:3,link:"./veiled-fashion/index.html"},
        {img:"./veiled-fashion/icons-photos/4.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(255 110 133)",details:"green dress fashion",stars:4.5,link:"./veiled-fashion/index.html"},
        {img:"./veiled-fashion/icons-photos/dress7.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(255 110 133)",details:"green dress fashion",stars:4.5,link:"./veiled-fashion/index.html"},
        {img:"./veiled-fashion/icons-photos/dress8.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(255 110 133)",details:"white dress fashion",stars:3,link:"./veiled-fashion/index.html"},
        {img:"./veiled-fashion/icons-photos/femaleshoes2.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(255 110 133)",details:"gold shoes fashion",stars:4,link:"./veiled-fashion/index.html"},
        {img:"./veiled-fashion/icons-photos/femaleshoes3.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(255 110 133)",details:"silver shoes fashion",stars:2.5,link:"./veiled-fashion/index.html"},
        {img:"./veiled-fashion/icons-photos/dress10.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(255 110 133)",details:"sliver dress fashion",stars:4,link:"./veiled-fashion/index.html"},
    ],
    containerNumber:"container2",
    classAnimation:"0"
},
{
    productsList:[
        {img:"./onlineSeller Childpage/photos/childDress4.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#cc00ff",details:"gril dress",stars:2,link:"./onlineSeller Childpage/childpage.html"},
        {img:"./onlineSeller Childpage/photos/childSet3.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#cc00ff",details:"stagger gray black",stars:3.5,link:"./onlineSeller Childpage/childpage.html"},
        {img:"./onlineSeller Childpage/photos/childSet4.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#cc00ff",details:"stagger all black",stars:7,link:"./onlineSeller Childpage/childpage.html"},
        {img:"./onlineSeller Childpage/photos/childShoes3.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#cc00ff",details:"shoes army",stars:4,link:"./onlineSeller Childpage/childpage.html"},
        {img:"./onlineSeller Childpage/photos/childBag4.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#cc00ff",details:"pink bag",stars:2.5,link:"./onlineSeller Childpage/childpage.html"},
        {img:"./onlineSeller Childpage/photos/childShoes2.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#cc00ff",details:"red shoes",stars:4,link:"./onlineSeller Childpage/childpage.html"},
        {img:"./onlineSeller Childpage/photos/childBag2.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#cc00ff",details:"yellow bag",stars:2.5,link:"./onlineSeller Childpage/childpage.html"},
    ],
    containerNumber:"container3",
    classAnimation:"0"
},
{
    productsList:[
        {img:"./accessiors/photos/1.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(182 196 61)",details:"gril dress",stars:2,link:""},
        {img:"./accessiors/photos/2.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(182 196 61)",details:"stagger gray black",stars:3.5,link:""},
        {img:"./accessiors/photos/3.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(182 196 61)",details:"stagger all black",stars:7,link:""},
        {img:"./accessiors/photos/4.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(182 196 61)",details:"stagger all black",stars:7,link:""},
        {img:"./accessiors/photos/5.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(182 196 61)",details:"stagger all black",stars:2,link:""},
        {img:"./accessiors/photos/6.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(182 196 61)",details:"stagger all black",stars:.5,link:""},
        {img:"./accessiors/photos/7.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(182 196 61)",details:"shoes army",stars:4,link:""},
        {img:"./accessiors/photos/8.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(182 196 61)",details:"pink bag",stars:2.5,link:""},
        {img:"./accessiors/photos/9.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(182 196 61)",details:"red shoes",stars:4,link:""},
        {img:"./accessiors/photos/10.jpg",setNew:true,NewDivShape:"star",NewDivShapeClass:"new-div-star",NewDivShapeClass_bgColor:"rgb(182 196 61)",details:"yellow bag",stars:2.5,link:""},
    ],
    containerNumber:"container4",
    classAnimation:"0"
},
// {
//     productsList:[
//         {img:"./onlineSeller Childpage/photos/childDress4.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#cc00ff",details:"gril dress",stars:2,link:"./onlineSeller Childpage/childpage.html"},
//         {img:"./onlineSeller Childpage/photos/childSet3.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#cc00ff",details:"stagger gray black",stars:3.5,link:"./onlineSeller Childpage/childpage.html"},
//         {img:"./onlineSeller Childpage/photos/childSet4.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#cc00ff",details:"stagger all black",stars:7,link:"./onlineSeller Childpage/childpage.html"},
//         {img:"./onlineSeller Childpage/photos/childShoes3.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#cc00ff",details:"shoes army",stars:4,link:"./onlineSeller Childpage/childpage.html"},
//         {img:"./onlineSeller Childpage/photos/childBag4.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#cc00ff",details:"pink bag",stars:2.5,link:"./onlineSeller Childpage/childpage.html"},
//         {img:"./onlineSeller Childpage/photos/childShoes2.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#cc00ff",details:"red shoes",stars:4,link:"./onlineSeller Childpage/childpage.html"},
//         {img:"./onlineSeller Childpage/photos/childBag2.jpg",setNew:true,NewDivShape:"circle",NewDivShapeClass:"new-div-circle",NewDivShapeClass_bgColor:"#cc00ff",details:"yellow bag",stars:2.5,link:"./onlineSeller Childpage/childpage.html"},
//     ],
//     containerNumber:"container5",
//     classAnimation:"0"
// },
]
 

// elements variables
let products;
let product ;
let productContent;
let createTheNewDiv;
let img;
let details;
let divStars;
let link;
// left & right btns
let leftBtn;
let rightBtn;;
let temp;

// -------- create Elements for view --------
function createElements(ele){
    product=document.createElement("div");
    product.addEventListener("click",()=>{location.href=ele.link})
    productContent=document.createElement("div");
    createTheNewDiv=(ele.setNew) ? document.createElement("div") : "";
    img=document.createElement("img");
    details=document.createElement("p");
    divStars=document.createElement("div");
    link=document.createElement("a");
}
function createStars(ele){
    let fullStar = Number.isInteger(ele.stars);
        for(let i=0;i<parseInt(ele.stars);i++){
            const star=document.createElement("li");
            star.classList.add("bi","bi-star-fill","ml-2","star")
            star.style.float="left"
            divStars.appendChild(star)
            if(i==4) break;
        }
        if(!fullStar){
            const star=document.createElement("li");
            star.classList.add("bi","bi-star-half","ml-2","star")
            star.style.float="left"
            divStars.appendChild(star)
        }
}
// -------- add content for Elements --------
function setContentForElement(ele){
    img.src=`${ele.img}`;
    details.textContent=`${ele.details}`;
    link.textContent=` More >>`;
    link.href=ele.link;
    if(createTheNewDiv != "") createTheNewDiv.textContent=` New`;
}
// -------- add classes for style --------
function addClassesForElement(ele,index,productsAnimation){
    product.classList.add("col-sm-3","product", (index===0 && productsAnimation==="animation-right")? `${productsAnimation}` : ((index===3 && productsAnimation==="animation-left")? `${productsAnimation}`:"0"))
    productContent.classList.add("card");
    details.classList.add("details");
    details.style.color=ele.NewDivShapeClass_bgColor;
    if(createTheNewDiv != "" && ele.NewDivShape==="circle") {
        createTheNewDiv.classList.add(ele.NewDivShapeClass);
        createTheNewDiv.style.backgroundColor=ele.NewDivShapeClass_bgColor;
    }
    if(createTheNewDiv != "" && ele.NewDivShape==="star") {
        createTheNewDiv.classList.add(ele.NewDivShapeClass)
        createTheNewDiv.style.setProperty('--bgStarColor',ele.NewDivShapeClass_bgColor)
    };
    link.classList.add("btn","btn-outline-info",`product-btn-color`);
    link.style.setProperty('--linkBtnColor',ele.NewDivShapeClass_bgColor);
    divStars.classList.add("d-flex","justify-content-center","mb-2")
}
//------- create left and right buttons -------
function create_left_right_Btns(ProductList,idTypeForPeople){
    leftBtn=document.createElement("button");
    rightBtn=document.createElement("button");
    leftBtn.addEventListener("click",change)
    rightBtn.addEventListener("click",change)
    leftBtn.id=`${idTypeForPeople}L`;
    rightBtn.id=`${idTypeForPeople}R`;
    leftBtn.textContent=`<`;
    rightBtn.textContent=`>`;
    leftBtn.classList.add("left-side-button");
    rightBtn.classList.add("right-side-button");
    leftBtn.style.setProperty('--sideBtnBgColor',ProductList[0].NewDivShapeClass_bgColor);
    rightBtn.style.setProperty('--sideBtnBgColor',ProductList[0].NewDivShapeClass_bgColor);
}
//------------------------ productsCreation function -----------------------
function productsCreation(ProductList,idTypeForPeople,productsAnimation){
        // get only frist products
        temp=[ProductList[0],ProductList[1],ProductList[2],ProductList[3]]
        temp.forEach(function (ele,index){
        // --------- get the container Div ----------
        products=document.getElementById(`${idTypeForPeople}-Products`); 
        if(products.parentElement.classList.contains("hidden"))  products.parentElement.classList.remove("hidden") 
        // -------- create Elements for view --------
        createElements(ele);
        // -------- create stars --------
        createStars(ele);
        //------- create left and right buttons -------
        create_left_right_Btns(ProductList,idTypeForPeople)
        // -------- add content for Elements --------
        setContentForElement(ele,idTypeForPeople);
        // -------- add classes for style --------
        addClassesForElement(ele,index,productsAnimation);
        // -------- append child the element --------
        productContent.appendChild(img,details)
        productContent.appendChild(details)
        productContent.appendChild(divStars)
        productContent.appendChild(link)
        if(createTheNewDiv != "") productContent.appendChild(createTheNewDiv)
        product.appendChild(productContent)
        products.appendChild(product)
    })
    products.appendChild(leftBtn)
    products.appendChild(rightBtn)
}

// ------ calling the productsCreation() function to create the products inside each container ------

function homeCreate(){
    homeData.forEach((ele)=>{
        productsCreation(ele.productsList,ele.containerNumber,ele.classAnimation);
    })
}
homeCreate();



// -------- check which button clicked --------  
function change(){
    let containerNumber=this.id.split(""); // this.id  =>  refers to the id for the button clicked 
    left_OR_right=containerNumber.pop();
    containerNumber=containerNumber.join("");
    // *************** Editable for new  ****************
    if(left_OR_right=="L")
    changeLeft(homeData.find(ele => containerNumber === ele.containerNumber).productsList , containerNumber)
    else
    changeRight(homeData.find(ele => containerNumber === ele.containerNumber).productsList , containerNumber)
}

// -------- change & move products --------
function changeLeft(ProductList,gender){
    let deletedItem=ProductList.pop();
    deleteProducts(`${gender}-Products`);
    ProductList.unshift(deletedItem);
    productsCreation(ProductList,gender,"animation-right");
}
function changeRight(ProductList,gender){
    let deletedItem=ProductList.shift();
    deleteProducts(`${gender}-Products`);
    ProductList.push(deletedItem);
    productsCreation(ProductList,gender,"animation-left");
}
// -------- delete products --------
function deleteProducts(containerID){
    const products=document.getElementById(containerID);
    while(products.hasChildNodes()){
        products.removeChild(products.firstChild);
    }
}

// ---------------- buttpn UP ----------------




























