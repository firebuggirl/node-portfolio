
$('.dropdown-menu input').click(function(e) {
       e.stopPropagation();
   });


// if(window.innerWidth <= 769){
//  document.querySelector('.fullscreen').style.display = "none";
// }
//
// if(window.innerWidth >= 769){
//  document.querySelector('.accordion').style.display = "none";
// }
//
if(window.resize){
    window.location.reload(); //reload to view layouts according to viewport width
 }


 var details0 = document.querySelector( '.details0' );

 details0.addEventListener('click', function(e){
    e.preventDefault();

   details0.innerHTML = "close";

   details0.addEventListener('click', function(){
     modal0.style.display = "none";
     window.location.reload(); //reload to close modal completely
   });

 var modal0 = document.querySelector( '.modal0');
 var div1 = document.createElement( 'div' );
 var myArr0 = JSON.parse( jsonData );

    myFunction(myArr0);


    function myFunction(arr0) {
      var out = "";
        var i;


             out += '<p class="pEl">' + arr0[0].text + '</p>' + '<br>';

            // var content = document.querySelectorAll('modal-body');


     var showJSON0 = function()  {
      //  document.getElementById("jsontest2").innerHTML = out;
         div1.innerHTML = out;
         modal0.appendChild( div1 );
     };
     showJSON0();
    }



 });


///////////////////////////////////////
 // End 0 index JSON call
/////////////////////////////////////

  var details1 = document.querySelector( '.details1' );

  details1.addEventListener('click', function(e){
    e.preventDefault();

        details1.innerHTML = "close";

        details1.addEventListener('click', function(){
          modal2.style.display = "none";
          window.location.reload(); //reload to close modal completely
        });


      var modal2 = document.querySelector( '.modal1');
      var div1 = document.createElement( 'div' );
        var myArr1 = JSON.parse( jsonData );

         myFunction(myArr1);


         function myFunction(arr1) {
           var out = "";
             var i;


              out += '<p class="pEl">' + arr1[1].text + '</p>' + '<br>';

             // var content = document.querySelectorAll('modal-body');


      var showJSON2 = function()  {
       //  document.getElementById("jsontest2").innerHTML = out;
          div1.innerHTML = out;
          modal2.appendChild( div1 );
      };
      showJSON2();
     }



  });


  ///////////////////////////////////////
    // End 1st JSON call
  /////////////////////////////////////

  var details2 = document.querySelector( '.details2' );

  details2.addEventListener('click', function(e){
    e.preventDefault();

    details2.innerHTML = "close";

    details2.addEventListener('click', function(){
      modal2.style.display = "none";
      window.location.reload(); //reload to close modal completely
    });

  var modal2 = document.querySelector( '.modal2');
  var div1 = document.createElement( 'div' );
    var myArr2 = JSON.parse( jsonData );

     myFunction(myArr2);


     function myFunction(arr2) {
         var out = "";
         var i;


              out += '<p class="pEl">' + arr2[2].text + '</p>' + '<br>';

             // var content = document.querySelectorAll('modal-body');


      var showJSON2 = function()  {
       //  document.getElementById("jsontest2").innerHTML = out;
          div1.innerHTML = out;
          modal2.appendChild( div1 );
      };
      showJSON2();
     }



  });


///////////////////////////////////////
  // End 2nd JSON call
/////////////////////////////////////




  var details3 = document.querySelector( '.details3' );

  details3.addEventListener('click', function(e){
    e.preventDefault();


    details3.innerHTML = "close";

    details3.addEventListener('click', function(){
      modal3.style.display = "none";
      window.location.reload(); //reload to close modal completely
    });



  var modal3 = document.querySelector( '.modal3');
  var div1 = document.createElement( 'div' );
    var myArr2 = JSON.parse( jsonData );

     myFunction(myArr2);


     function myFunction(arr2) {
       var out = "";
         var i;


              out += '<p class="pEl">' + arr2[3].text + '</p>' + '<br>';

             // var content = document.querySelectorAll('modal-body');


      var showJSON2 = function()  {
       //  document.getElementById("jsontest2").innerHTML = out;
          div1.innerHTML = out;
          modal3.appendChild( div1 );
      };
      showJSON2();
     }



  });


///////////////////////////////////////
  // End 3rd JSON call
/////////////////////////////////////



  var details4 = document.querySelector( '.details4' );

  details4.addEventListener('click', function(e){
    e.preventDefault();

    details4.innerHTML = "close";

    details4.addEventListener('click', function(){
      modal4.style.display = "none";
      window.location.reload(); //reload to close modal completely
    });


  var modal4 = document.querySelector( '.modal4');
  var div1 = document.createElement( 'div' );
    var myArr2 = JSON.parse( jsonData );

     myFunction(myArr2);


     function myFunction(arr2) {
       var out = "";
         var i;


              out += '<p class="pEl">' + arr2[4].text + '</p>' + '<br>';

             // var content = document.querySelectorAll('modal-body');


      var showJSON2 = function()  {
       //  document.getElementById("jsontest2").innerHTML = out;
          div1.innerHTML = out;
          modal4.appendChild( div1 );
      };
      showJSON2();
     }



  });


///////////////////////////////////////
  // End 4th JSON call
/////////////////////////////////////



  var details5 = document.querySelector( '.details5' );

  details5.addEventListener('click', function(e){
    e.preventDefault();


    details5.innerHTML = "close";

    details5.addEventListener('click', function(){
      modal5.style.display = "none";
      window.location.reload(); //reload to close modal completely
    });

  var modal5 = document.querySelector( '.modal5');
  var div1 = document.createElement( 'div' );
    var myArr2 = JSON.parse( jsonData );

     myFunction(myArr2);


     function myFunction(arr2) {
       var out = "";
         var i;


              out += '<p class="pEl">' + arr2[5].text + '</p>' + '<br>';

             // var content = document.querySelectorAll('modal-body');


      var showJSON2 = function()  {
       //  document.getElementById("jsontest2").innerHTML = out;
          div1.innerHTML = out;
          modal5.appendChild( div1 );
      };
      showJSON2();
     }



  });


///////////////////////////////////////
  // End 5th JSON call
/////////////////////////////////////



  var details6 = document.querySelector( '.details6' );

  details6.addEventListener('click', function(e){
    e.preventDefault();


    details6.innerHTML = "close";

    details6.addEventListener('click', function(){
      modal6.style.display = "none";
      window.location.reload(); //reload to close modal completely
    });

  var modal6 = document.querySelector( '.modal6');
  var div1 = document.createElement( 'div' );
    var myArr2 = JSON.parse( jsonData );

     myFunction(myArr2);


     function myFunction(arr2) {
       var out = "";
         var i;


              out += '<p class="pEl">' + arr2[6].text + '</p>' + '<br>';

             // var content = document.querySelectorAll('modal-body');


      var showJSON2 = function()  {
       //  document.getElementById("jsontest2").innerHTML = out;
          div1.innerHTML = out;
          modal6.appendChild( div1 );
      };
      showJSON2();
     }



  });


///////////////////////////////////////
  // End 6th JSON call
/////////////////////////////////////




  var details7 = document.querySelector( '.details7' );

  details7.addEventListener('click', function(e){
    e.preventDefault();


    details7.innerHTML = "close";

    details7.addEventListener('click', function(){
      modal7.style.display = "none";
      window.location.reload(); //reload to close modal completely
    });


  var modal7 = document.querySelector( '.modal7');
  var div1 = document.createElement( 'div' );
    var myArr2 = JSON.parse( jsonData );

     myFunction(myArr2);


     function myFunction(arr2) {
       var out = "";
         var i;


              out += '<p class="pEl">' + arr2[7].text + '</p>' + '<br>';

             // var content = document.querySelectorAll('modal-body');


      var showJSON2 = function()  {
       //  document.getElementById("jsontest2").innerHTML = out;
          div1.innerHTML = out;
          modal7.appendChild( div1 );
      };
      showJSON2();
     }



  });


///////////////////////////////////////
  // End 7th JSON call
/////////////////////////////////////



  var details8 = document.querySelector( '.details8' );

  details8.addEventListener('click', function(e){
    e.preventDefault();


    details8.innerHTML = "close";

    details8.addEventListener('click', function(){
      modal8.style.display = "none";
      window.location.reload(); //reload to close modal completely
    });


  var modal8 = document.querySelector( '.modal8');
  var div1 = document.createElement( 'div' );
    var myArr2 = JSON.parse( jsonData );

     myFunction(myArr2);


     function myFunction(arr2) {
       var out = "";
         var i;


              out += '<p class="pEl">' + arr2[8].text + '</p>' + '<br>';

             // var content = document.querySelectorAll('modal-body');


      var showJSON2 = function()  {
       //  document.getElementById("jsontest2").innerHTML = out;
          div1.innerHTML = out;
          modal8.appendChild( div1 );
      };
      showJSON2();
     }



  });


///////////////////////////////////////
  // End 8th JSON call
/////////////////////////////////////



  var details9 = document.querySelector( '.details9' );

  details9.addEventListener('click', function(e){
    e.preventDefault();

    details9.innerHTML = "close";

    details9.addEventListener('click', function(){
      modal9.style.display = "none";
      window.location.reload(); //reload to close modal completely
    });

  var modal9 = document.querySelector( '.modal9');
  var div1 = document.createElement( 'div' );
    var myArr2 = JSON.parse( jsonData );

     myFunction(myArr2);


     function myFunction(arr2) {
       var out = "";
         var i;


              out += '<p class="pEl">' + arr2[9].text + '</p>' + '<br>';

             // var content = document.querySelectorAll('modal-body');


      var showJSON2 = function()  {
       //  document.getElementById("jsontest2").innerHTML = out;
          div1.innerHTML = out;
          modal9.appendChild( div1 );
      };
      showJSON2();
     }



  });


///////////////////////////////////////
  // End 9th JSON call
/////////////////////////////////////



  var details10 = document.querySelector( '.details10' );

  details10.addEventListener('click', function(e){
    e.preventDefault();


    details10.innerHTML = "close";

    details10.addEventListener('click', function(){
      modal10.style.display = "none";
      window.location.reload(); //reload to close modal completely
    });


  var modal10 = document.querySelector( '.modal10');
  var div1 = document.createElement( 'div' );
    var myArr2 = JSON.parse( jsonData );

     myFunction(myArr2);


     function myFunction(arr2) {
       var out = "";
         var i;


              out += '<p class="pEl">' + arr2[9].text + '</p>' + '<br>';

             // var content = document.querySelectorAll('modal-body');


      var showJSON2 = function()  {
       //  document.getElementById("jsontest2").innerHTML = out;
          div1.innerHTML = out;
          modal10.appendChild( div1 );
      };
      showJSON2();
     }



  });


///////////////////////////////////////
  // End 10th JSON call
/////////////////////////////////////



  var details11 = document.querySelector( '.details11' );

  details11.addEventListener('click', function(e){
    e.preventDefault();

    details11.innerHTML = "close";

    details11.addEventListener('click', function(){
      modal11.style.display = "none";
      window.location.reload(); //reload to close modal completely
    });

  var modal11 = document.querySelector( '.modal11');
  var div1 = document.createElement( 'div' );
    var myArr2 = JSON.parse( jsonData );

     myFunction(myArr2);


     function myFunction(arr2) {
       var out = "";
         var i;


              out += '<p class="pEl">' + arr2[10].text + '</p>' + '<br>';

             // var content = document.querySelectorAll('modal-body');


      var showJSON2 = function()  {
       //  document.getElementById("jsontest2").innerHTML = out;
          div1.innerHTML = out;
          modal11.appendChild( div1 );
      };
      showJSON2();
     }



  });


///////////////////////////////////////
  // End 11th JSON call
/////////////////////////////////////


  //
  // var details12 = document.querySelector( '.details12' );
  //
  // details12.addEventListener('click', function(e){
  //   e.preventDefault();
  //
  //   details12.innerHTML = "close";
  //
  //   details12.addEventListener('click', function(){
  //     modal12.style.display = "none";
  //     window.location.reload(); //reload to close modal completely
  //   });
  //
  // var modal12 = document.querySelector( '.modal12');
  // var div1 = document.createElement( 'div' );
  //   var myArr2 = JSON.parse( jsonData );
  //
  //    myFunction(myArr2);
  //
  //
  //    function myFunction(arr2) {
  //      var out = "";
  //        var i;
  //
  //
  //             out += '<p class="pEl">' + arr2[11].text + '</p>' + '<br>';
  //
  //            // var content = document.querySelectorAll('modal-body');
  //
  //
  //     var showJSON2 = function()  {
  //      //  document.getElementById("jsontest2").innerHTML = out;
  //         div1.innerHTML = out;
  //         modal12.appendChild( div1 );
  //     };
  //     showJSON2();
  //    }
  //
  //
  //
  // });

///////////////////////////////////////
// End 12th JSON call
/////////////////////////////////////


var localStorage = {};

/**
 * Initialize localStorage
 *
 */
localStorage.init = function() {

  localStorage.updateLocalStore( jsonData );

};
