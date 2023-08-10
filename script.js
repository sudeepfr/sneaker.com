let wrapper=document.querySelector(".sliderwrapper")
const menuitem=document.querySelectorAll(".menuitem")

 const products=[
    {
    id:1,
    title:"Air Force",
     price:119,
     colors: [
        {
            code:"black",
            img:"air.png",
        },
        {
            code: "darkblue",
            img:"air2.png"
        },
     ],
     
    },

    {
    id:2,
    title:"Blazer",
     price:119,
     colors: [
        {
            code:"green",
            img:"blazer2.png",
        },
        {
            code:"rgb(165, 157, 157)" ,
            img:"blazer.png"
        },
     ],
     
    },

    {
    id:3,
    title:"crater",
     price:119,
     colors: [
        {
            code:"rgb(165, 157, 157)",
            img:"crater2.png",
        },
        {
            code: "black",
            img:"crater.png"
        },
     ],
     
    },

    {
    id:4,
    title:"jorden",
     price:119,
     colors: [
        {
            code:"green",
            img:"jordan2.png"
        },
        {
            code: "rgb(165, 157, 157)",
            img:"jordan.png"
        },
     ],
     
    },
    {
    id:5,
    title:"hippie",
     price:119,
     colors: [
        {
            code:"grey",
            img:"hippie2.png",
        },
        {
            code: "black",
            img:"hippie.png"
        },
     ],
     
    },
 ]

 let choosenProduct=products[0] 
 const currentproducttitle=document.querySelector(".producttitle");
 const currentproductprice=document.querySelector(".productprice");
 const currentproductsize=document.querySelectorAll(".size");
 const currentproductcolors=document.querySelectorAll(".color");
 const currentproductimg=document.querySelector(".productimg");


 menuitem.forEach((item,index) => {
     item.addEventListener("click",()=>{ 
         // slider change 
          wrapper.style.transform=`translateX(${-100 * index}vw)`;
         // product choose 

          choosenProduct=products[index]
           currentproducttitle.textContent=choosenProduct.title;
           currentproductprice.textContent="$" + choosenProduct.price;
           currentproductimg.src=choosenProduct.colors[0].img
           //assing new color 
           currentproductcolors.forEach((color,index)=>{
              color.style.backgroundColor=choosenProduct.colors[index].code
           });
         
      });
 });  
  
 currentproductcolors.forEach((color,index)=>{
        color.addEventListener("click",()=>{
             currentproductimg.src=choosenProduct.colors[index].img
        });
 });
  
currentproductsize.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentproductsize.forEach((size,index)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        })
        size.style.backgroundColor="black";
        size.style.color="white";      
    
    });
         
});
 
// target of buttom bye button 
let payment=document.querySelector(".payment")
let productpricebtn=document.querySelector(".productpricebtn")
productpricebtn.addEventListener("click",()=>{
    payment.style.display="flex"
})

let close=document.querySelector(".close")
close.addEventListener("click",()=>{
      payment.style.display="none"
})