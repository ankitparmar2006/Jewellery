const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});



// =============================== BUY ====================================
function buyNow(img, name, price, category) {
  // Data ko localStorage me save karenge
  localStorage.setItem('productImg', img);
  localStorage.setItem('productName', name);
  localStorage.setItem('productPrice', price);
  localStorage.setItem('category', category);


  // Dusre page pe redirect karenge
  window.location.href ="buy1.html";
}

// ======================== buy 1 ==================================================

// let product=document.querySelector("#product");
// let productName=document.querySelector("#productName");

// let dis=document.querySelector("#display");

// dis.innerHTML=productName;


// console.log()
let userInput=()=>
{
    let uma=document.querySelector("#user");
    let uma1=document.querySelector("#user1");
    uma1.style.display="none";
    uma.style.display="block";

}

let sim =()=>{ 

 let show =document.querySelector("#show");

 show.innerHTML=`



 <section id="gold">
 
     <div class="gold-earrings-main">
 
         <h2 style="margin-left: 350px; color:  rgba(116, 114, 7, 0.788) ;font-size: 40px; margin-bottom: 40px; margin-top: -20px;" id="category"> GOLD EARRINGS JEWELLERY</h2>
 
         <div class="gold-earring-div1" >
             <div class="gold-earrings-box1" data-aos="zoom-in" >
                 <p> <i class="fa-regular fa-star"></i> BEST SELLERS</p>
                 <h4 style="margin-top: 260px; margin-left: 30px;" class="name">Modish 22 Karat Yellow Gold Earrings
                     <br> <span style="font-size: 25px; margin-left: 0px;" class="price"> ₹ 31045</span> 
                     <button class="earring-buy-btn" onclick="buyNow( 'earrings/earring1.1.webp','Modish 22 Karat Yellow Gold Earrings', '₹ 31045' ,'GOLD EARRING' ,)" >Buy Now</button>
                 </h4> 
                 <div style="margin-left: 120px; margin-top: 10px; ">
 
                     <button class="earring-add-to-cart">Add to Cart</button>
                     <button class="earring-Similar" onclick="sim()">Similar</button>
                 </div>
 
                 </div>
              
 
             <div class="gold-earrings-box2" data-aos="zoom-in" >
                 <p> <i class="fa-regular fa-star"></i> BEST SELLERS</p>
                 <h4 style="margin-top: 260px; margin-left: 30px; " class="name">Flashy Floral Stud Earrings
                     <br> <span style="font-size: 25px; margin-left: 0px;" class="price"> ₹46999</span>    
                       <button class="earring-buy-btn"  onclick="buyNow( 'earrings/ear2.2.webp','Flashy Floral Stud Earrings', '₹ 46999', 'GOLD EARRING',  )"   >Buy Now</button>
                 </h4> 
                 <div style="margin-left: 120px; margin-top: 10px; ">
 
                     <button class="earring-add-to-cart">Add to Cart</button>
                     <button class="earring-Similar">Similar</button>
                 </div>
             </div>
 
             <div class="gold-earrings-box3" data-aos="zoom-in">
                 <p> <i class="fa-regular fa-star"></i> BEST SELLERS</p>
                 <h4 style="margin-top: 260px; margin-left: 30px;" class="earring-name">Arresting Yellow Gold Carved Lantern
                     <br> <span style="font-size: 25px; margin-left: 0px;" class="earring-price"> ₹ 36999</span> 
                     <button class="earring-buy-btn"  onclick="buyNow( 'earrings/ear2.webp','Arresting Yellow Gold Carved Lantern', '₹ 36999', 'GOLD EARRING',  )"   >Buy Now</button>
                 </h4> 
                 <div style="margin-left: 120px; margin-top: 10px; ">
 
                     <button class="earring-add-to-cart">Add to Cart</button>
                     <button class="earring-Similar">Similar</button>
                 </div>
             </div>
         </div>
 
        
         </div> <br> <br> <br> <br> <br> <br>
 <!-- ------------------------------ second seller line row------------------------------------------------- -->
      
 <div class="gold-earrings-main">
 
     <div class="gold-earring-div1">
         <div class="gold-earrings-box4" data-aos="zoom-in">
             <p> <i class="fa-regular fa-star"></i> BEST SELLERS</p>
             <h4 style="margin-top: 260px; margin-left: 30px;" class="earring-name">Bedazzling Rawa Work Gold Drop Earrings
                 <br> <span style="font-size: 25px; margin-left: 0px;" class="earring-price"> ₹ 23999</span> 
                 <button class="earring-buy-btn"  onclick="buyNow( 'earrings/ear6.webp','Bedazzling Rawa Work Gold Drop Earrings', '₹ 23999', 'GOLD EARRING',  )"   >Buy Now</button>
             </h4> 
             <div style="margin-left: 120px; margin-top: 10px; ">
 
                 <button class="earring-add-to-cart">Add to Cart</button>
                 <button class="earring-Similar">Similar</button>
             </div>
         </div>
 
 
         <div class="gold-earrings-box5" data-aos="zoom-in">
             <p> <i class="fa-regular fa-star"></i> BEST SELLERS</p>
             <h4 style="margin-top: 260px; margin-left: 30px;" class="earring-name">Tiered Gold Drop Earrings
                 <br> <span style="font-size: 25px; margin-left: 0px;" class="earring-price"> ₹ 29099</span> 
                 <button class="earring-buy-btn"  onclick="buyNow( 'earrings/ear7.1.webp','Tiered Gold Drop Earrings', '₹ 29099', 'GOLD EARRING',  )"   >Buy Now</button>
             </h4> 
             <div style="margin-left: 120px; margin-top: 10px; ">
 
                 <button class="earring-add-to-cart">Add to Cart</button>
                 <button class="earring-Similar">Similar</button>
             </div>
         </div>
 
         <div class="gold-earrings-box6" data-aos="zoom-in">
             <p> <i class="fa-regular fa-star"></i> BEST SELLERS</p>
             <h4 style="margin-top: 260px; margin-left: 30px;" class="earring-name">Contemporary Gold Drop Earrings
                 <br> <span style="font-size: 25px; margin-left: 0px;" class="earring-price"> ₹ 38999</span> 
                 <button class="earring-buy-btn"  onclick="buyNow( 'earrings/ear8.1.webp','Contemporary Gold Drop Earrings', '₹ 38999', 'GOLD EARRING',  )"   >Buy Now</button>
             </h4> 
             <div style="margin-left: 120px; margin-top: 10px; ">
 
                 <button class="earring-add-to-cart">Add to Cart</button>
                 <button class="earring-Similar">Similar</button>
             </div>
         </div>
     </div>
 
    
     </div>
     
 
    
 </section>
 
 `
}