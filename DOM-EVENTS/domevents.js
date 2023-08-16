//! -----------------DOM (EVENTS) ---------------//

//TODO | Başlıca Event Olayları

//! Mouse Events (Fare Olayları):

//  click
//  dblclick
//  mousedown
//  mouseup
//  mousemove
//  mouseover
//  mouseenter
//  mouseleave
//  mouseout

//! Keyboard Events (Klavye Olayları):

// keydown
// keyup
// keypress

//! Form Events (Form Olayları):

// submit
// reset
// focus
// blur
// change
// input

//! !Window Events (Pencere Olayları):

// load
// unload
// beforeunload
// resize
// scroll

//! Document Events (Belge Olayları):

// DOMContentLoaded
// readystatechange

//! Touch Events (Dokunmatik Olayları):

// touchstart
// touchmove
// touchend
// touchcancel

//! Animation Events (Animasyon Olayları):

// animationstart
// animationend
// animationiteration

//! Transition Events (Geçiş Olayları):

// transitionstart
// transitionend
// transitioncancel

//! Drag and Drop Events (Sürükle ve Bırak Olayları):

// drag
// dragstart
// dragend
// dragenter
// dragleave
// dragover
// drop




//? --------- MOUSE EVENT OLAYLARI ---------//


const btn = document.querySelector(".tikla");
const body = document.querySelector("body");

function Calistir(e){  //--> Geleneksel Kullanım.
    console.log(e.type)
}

//! click 
btn.addEventListener("click", Calistir); //--> EventDinleyiciEkle diyebiliriz ve şuan click etkinliğini yapıyoruz.


//! mouseUp
btn.addEventListener("mouseup", Calistir); // mouseup kullanımı | Elimizi buttonun üzerine basılı tutup bıraktığımız an mouseup olayını tetiklemiş oluruz.


//! dbclick
btn.addEventListener("dblclick", Calistir); // Double Click kullanımı


//! mouseout
btn.addEventListener("mouseout", Calistir); // mouseout kullanımı | Butonun üzerinden ayrıldığımız zaman tetiklenen event olayımız.


//! mouseleave
btn.addEventListener("mouseleave", Calistir); // mouseleave kullanımı | Butonun üzerinden ayrıldığımız zaman tetiklenen event olayımız.


//! mouseenter
btn.addEventListener("mouseleave", Calistir); // mouseevent kullanımı | Butonun üzerine geldiğimiz zaman tetiklenen event olayımız.


//! mousemove
// btn.addEventListener("mousemove", Calistir); // mousemove kullanımı | Butonun üzerine gerçekleşen her bir haraketi yakalayan event olayımız.
// function Calistir(e){
//     btn.innerHTML = "X: " + e.clientX + "Y: "+ e.clientY;    //? Gibi bir kullanımla daha iyi anlayabiliriz.
// }









// //?-----------KEYBOARD EVENTS---------//

//!keydown
document.addEventListener('keydown', function(event){ //--> Basılan tuş olayı
    console.log('Basılan tuşun kodu : ', event.keyCode) //--> Bize tuş kodunu verdi.
    console.log('Basılan tuş : ', event.key)

})

//!keyup
document.addEventListener('keyup', function(event){ //--> Keyup Kullanıcı bir tuşdan elini çektiğinde tetiklenen olaydır.
    console.log('Bırakılan tuşun kodu : ', event.keyCode) //--> Bize tuş kodunu verdi.
    console.log('Bırakılan tuş : ', event.key)

})

//!keypress
document.addEventListener('keypress', function(event){ //--> Bir karakter tuşuna basıldığında tetiklenir.
    console.log('Basılan karatker tuşun kodu : ', event.keyCode) //--> Bize tuş kodunu verdi.
    console.log('Basılan karakter tuşu : ', event.key)

})

//!input event

const input = document.getElementById('input');
input.addEventListener('input', ()=>{
    console.log('Girilen Metin : ', input.value); //-> input içine girilen değerleri gösterdik.
});

//! Aynanda basılan tuş örneği

document.body.addEventListener('keydown',function(event){
   if(event.key = 'control' && event.key =='c'){
    console.log("Ctrl + c Tuşlarına basıldı.");
     }
    else if(event.key = 'control' && event.key =='x'){
        console.log("Ctrl + X Tuşlarına basıldı.");
    }
    else{
        console.log("Hiçbir event çalışmadı")
    }
});








//?-----FORM EVENTS------//


//!Submit --> gönderme işlemi(kaydetme)

const formsubmit = document.getElementById("myForm");

formsubmit.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Sayfa yenilenmesi engellendi.")
})


//!Reset  --> Resetlemek adı üstünde sıfırlama

const formreset = document.getElementById("myForm");

formreset.addEventListener('reset', function(event){
    console.log("Bütün değerler silindi!");
})


//!Focus --> odaklanma işlemi


const myInput = document.getElementById("myInput")
myInput.addEventListener("focus", function(){
    console.log("İnput fokuslandı!");
});


//!blur  --> odaklanma işleminden ayrılması


const myInput2 = document.getElementById("myInput2")
myInput2.addEventListener("blur", function(){  //--> bir elementden ayrıldığımız an tetiklenir.
    console.log("Fokuslanma sonlandı!");
});


//! change --> değişim olduğunda tetiklenir.

const mySelect = document.getElementById("mySelect");

function TemaChange(bgcolor,color){
    mySelect.style.backgroundColor=`${bgcolor}`;
    mySelect.style.color=`${color}`;
}

mySelect.addEventListener("change", function(){  
    console.log("Seçilen yeni ürün : ",mySelect.value);  //--> Değişlik olduğu an Select elementinin mevcut değerini yakaladık. (mySelect.value)

    if(mySelect.value == "Muz"){
        TemaChange("yellow","black");
    }
    else if(mySelect.value == "Portakal"){
        TemaChange("orange","black");
    }
    else if(mySelect.value == "Elma"){
        TemaChange("red","white");
    }
    else if(mySelect.value == "Visne"){
        TemaChange("purple","white");
    }
    else if(mySelect.value == "Karpuz"){
        TemaChange("green","red");
    }
    //! gibi bir örnek yapılabilir.
})






//?-----WINDOWS EVENTS------//



//! load  --> Sayfamız yüklendiğinde meydana gelecek olay.

const section1 = document.getElementById("section1")
window.addEventListener("load",function(){ 
    console.log("Sayfa yüklendi.");
    section1.style.display="block"; //--> Sayfa yüklendiğinde section görünür hale gelecek.
})

//! Unload  --> Sayfayı terketmeye çalıştığında meydana gelen olay.

window.addEventListener('unload', function() {
    console.log('Sayfa terk ediliyor.');
    // Burada çerezlerinizi temizleme veya kullanıcıya veda mesajı gönderme gibi işlemler yapabilirsiniz.
});

//! Resize

window.addEventListener('resize', function() {
    console.log('Pencere boyutu değiştirildi.');
     // Yeniden boyutlandırmaya tepki olarak arayüzünüzü güncelleyebilirsiniz.
});

//! Beforeunload  --> Kullanıcı sayfadan ayrılmadan önce tetiklenir

window.addEventListener('beforeunload', function(event) {
    event.returnValue = 'Bu sayfadan ayrılmak istediğinizden emin misiniz?';
  
    // Kullanıcıya uyarı mesajı gösterebiliriz.
});

//! Scroll --> kaydırma olayıdır scroll ile ilgili birçok örnek yapılabilir.

window.addEventListener("scroll", ()=>{
    console.log("Sayfa kaydırıldı.")
} )







//? ---------------- Document Events-------------- //




//! DOMContentLoaded  -> Sayfa içeriği yükleme olayı

document.addEventListener("DOMContentLoaded", function(){
    console.log("Sayfa içeriği yüklendi.")
    // Sayfa içeriği (Resimler,metinler ve dahası) yüklendiği zaman yapılacak olan işlemleri yazabiliriz.
})



//! readystatechange  -> değişiklik durumu diyebiliriz.

document.addEventListener("DOMContentLoaded", function(){
    if(document.readyState === "complete"){ //todo:---> durum tamamlandı ise... 
        console.log("Sayfa içeriği başarıyla yüklendi. 100%")
        // Sayfa içeriği (Resimler,metinler ve dahası) yüklendiği zaman yapılacak olan işlemleri yazabiliriz.
    } 

    //todo|- ... -> loading(Yükleniyor),
    //todo|--> interactive(Etkileşime hazır ama hala inen materyaller olabilir),
    //todo|--> complete(İşlem tamam görseller,içerikler indirildi anlamında)

})




//?------------------ Touch Events (Dokunmatik Olayları) Dokunmatik cihazlar önplan da-------



//! Touchstart   --> Dokunmaya başlama olayı

element.addEventListener('touchstart', function(event) {
    console.log('Dokunma başladı.');
  });


//! Touchmove    --> Hareket olduğu zaman meydana gelen olay

element.addEventListener('touchmove', function(event) {
    console.log('Parmak sürüklendi.');
  });


  //! Touchend   --> Dokunmaya işlenmi sonlandırıldığında meydana gelen olay

  element.addEventListener('touchend', function(event) {
    console.log('Dokunma sonlandı.');
  }); 


  //! Touchcancel --> Herhangi bir sebebten ötürü dokunma işlemi iptal olduğunda
  element.addEventListener('touchcancel', function(event) {
    console.log('Dokunma iptal edildi.');
  });



  //?---------------- Animation Events (Animasyon Olayları)------------------------:


  //! animationstart --> Anismasyon ilk defa başladığında tetiklenir

  element.addEventListener('animationstart', function(event) {
    console.log('Animasyon başladı.');
  });

  //! animationsend --> Anismasyon bittiği zaman tetiklenen olay.
  
  element.addEventListener('animationend', function(event) {
    console.log('Animasyon tamamlandı.');
  });

//! animationiteration  --> Bu olay, bir CSS animasyonunun bir yinelemesinin tamamlandığında tetiklenir.

 element.addEventListener("animationiteration", function(event){
    console.log("Animasyon yinelemesi tamamlandı.")
 })


 

 //? --------------Transition Events (Geçiş Olayları)-------------: 

 //! transitionstarts  --> geçiş başladığında

 element.addEventListener('transitionstart', function(event) {
    console.log('Geçiş başladı.');
  });

//! transitionend -> geçiş bittiğinde
  element.addEventListener('transitionend', function(event) {
    console.log('Geçiş tamamlandı.');
  });

//! transitioncancel -> transition iptal olduğunda
  element.addEventListener('transitioncancel', function(event) {
    console.log('Geçiş iptal edildi.');
  });
  

//? ------- DRAG VE DROP OLAYLARI ---------//


//! Drag and Drop Events (Sürükle ve Bırak Olayları):

// Sürükle ve bırak olayları (Drag and Drop Events), kullanıcıların bir öğeyi sürükleyip başka bir öğeye bırakması gibi sürükleme işlemlerini yakalamak ve bu işlemlere tepki vermek için kullanılan olaylardır.

// drag: Bu olay, öğe sürüklendiğinde sürekli olarak tetiklenir.

// dragstart: Bu olay, öğe sürükleme işlemi başladığında tetiklenir.

// dragend: Bu olay, öğe sürükleme işlemi sona erdiğinde tetiklenir.

// dragenter: Bu olay, sürüklenen öğenin bir hedef öğenin üzerine getirildiğinde tetiklenir.

// dragleave: Bu olay, sürüklenen öğenin bir hedef öğenin üzerinden çıktığında tetiklenir.

// dragover: Bu olay, sürüklenen öğenin bir hedef öğenin üzerindeyken sürekli olarak tetiklenir.

// drop: Bu olay, sürüklenen öğe bir hedef öğeye bırakıldığında tetiklenir.

const draggableElement = document.querySelector('.draggable');
const droppableElement = document.querySelector('.droppable');

draggableElement.addEventListener('dragstart', function(event) {
  event.dataTransfer.setData('text/plain', 'Bu öğeyi sürükle');
});

droppableElement.addEventListener('dragenter', function(event) {
  console.log('Öğe hedef öğenin üzerine getirildi.');
});

droppableElement.addEventListener('drop', function(event) {
  event.preventDefault(); //! Tarayıcının varsayılan işlemi engelliyoruz
  const data = event.dataTransfer.getData('text/plain'); //! taşıma işlemi için seçmemiz gerek değerler .dataTransfer.getData('text/plain')
  console.log('Öğe bırakıldı:', data);
});
//Todo: Bu olayları, özellikle sürükleyip bırakma işlemleri gibi kullanıcı etkileşimlerini yakalamak ve bu etkileşimlere uygun tepkiler vermek için kullanırız.





//!by Hamza Dogan
//! github = HamzaDogann