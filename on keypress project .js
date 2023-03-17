const images = ["C:\Users\Dell\Desktop\images\image1.jpg", 
              "C:\Users\Dell\Desktop\images\image2.jpg",
              "C:\Users\Dell\Desktop\images\image3.jpg",
              "C:\Users\Dell\Desktop\images\image4.jpg",
              "C:\Users\Dell\Desktop\images\image5.jpg",
              "C:\Users\Dell\Desktop\images\image6.jpg",
              "C:\Users\Dell\Desktop\images\image7.jpg",
              "C:\Users\Dell\Desktop\images\image8.jpg",
              "C:\Users\Dell\Desktop\images\image9.jpg",
              "C:\Users\Dell\Desktop\images\image10.jpg" ];

 const image = document.getElementById("img1");

 
document.addEventListener("keypress",function(event){
    var randomIndex = Math.floor(Math.random() * images.length);
    var image = document.getElementById("img1");
    image.src = images[randomIndex];
})