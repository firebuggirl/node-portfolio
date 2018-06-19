const socials = Array.from(document.querySelectorAll('.socialCerts'));
      const filtered = socials
        .filter(social => social.style.display ="none");

      let ps = document.querySelectorAll("[class*=boxes]");
      for (const boxes of ps) {
        boxes.addEventListener('click', function() {
          console.log(this.textContent);
          console.log("Hello");
          const socials = Array.from(document.querySelectorAll('.socialCerts'));
            const filtered = socials
             .filter(function(number, index, array) {
                 return index === array.indexOf(number);
                });
            console.log(filtered);
        });
          filtered[0].style.display = "none";

      }

      const hideBoxesOnClick = Array.from(ps);
        const hiddenBoxes = hideBoxesOnClick
         .filter(function(number, index, array) {
             return index === array.indexOf(number);
            });
        console.log(hiddenBoxes);

      const secImg = document.getElementById('secImg');
      secImg.style.display = "none";
      const box = document.querySelector('.box');
      box.style.display = "flex";
      box.style.justifyContent = "center";
      box.style.alignContent = "center";
      box.style.alignItems = "center";
      box.addEventListener('click', function() {
        let first = 'opening';
        let second = 'open';
        secImg.style.display = "block";
        this.style.display = "block";
        container.style.display = "block";
        container.style.height = "auto";
        filtered[0].style.display = "block";

        hiddenBoxes[1].style.display = "none";
        hiddenBoxes[2].style.display = "none";
        hiddenBoxes[3].style.display = "none";
        hiddenBoxes[4].style.display = "none";
        hiddenBoxes[5].style.display = "none";
        hiddenBoxes[6].style.display = "none";
        // socials.style.display = "block";
        // const filtered = socials
        //   .map(social => social.style.display ="block");

        if(this.classList.contains(first)) {
          // switch them
          [first, second] = [second, first];

          secImg.style.display = "none";
          this.style.display = "flex";
          this.style.justifyContent = "center";
          this.style.alignContent = "center";
          this.style.alignItems = "center";

          container.style.display = "flex";
          container.style.justifyContent = "space-around";
          container.style.paddingTop = "50px";
          container.style.paddingBottom = "50px";

          filtered[0].style.display = "none";


          hiddenBoxes[1].style.display = "flex";
          hiddenBoxes[2].style.display = "flex";
          hiddenBoxes[3].style.display = "flex";
          hiddenBoxes[4].style.display = "flex";
          hiddenBoxes[5].style.display = "flex";
          hiddenBoxes[6].style.display = "flex";
        //  hiddenBoxes[0].style.display = "block";
        }

        this.classList.toggle(first);
        setTimeout(() => {
          this.classList.toggle(second);
        }, 250);
      });



//////////////////////////
////////////////////////// MongoDB Basics

      const secImg2 = document.getElementById('secImg2');
      secImg2.style.display = "none";
      const box2 = document.querySelector('.box2');
      box2.style.display = "flex";
      box2.style.justifyContent = "center";
      box2.style.alignContent = "center";
      box2.style.alignItems = "center";
      box2.addEventListener('click', function() {
        let first = 'opening2';
        let second = 'open2';
        secImg2.style.display = "block";
        secImg2.style.marginTop = "10%";
        this.style.display = "block";
        container.style.display = "block";
        container.style.height = "auto";
        filtered[1].style.display = "block";
        // socials.style.display = "block";
        hiddenBoxes[0].style.display = "none";
        hiddenBoxes[2].style.display = "none";
        hiddenBoxes[3].style.display = "none";
        hiddenBoxes[4].style.display = "none";
        hiddenBoxes[5].style.display = "none";
        hiddenBoxes[6].style.display = "none";

        if(this.classList.contains(first)) {
          // switch them
          [first, second] = [second, first];

          secImg2.style.display = "none";
          this.style.display = "flex";
          this.style.justifyContent = "center";
          this.style.alignContent = "center";
          this.style.alignItems = "center";

          container.style.display = "flex";
          container.style.justifyContent = "space-around";
          container.style.paddingTop = "50px";
          container.style.paddingBottom = "50px";

          filtered[1].style.display = "none";

          hiddenBoxes[0].style.display = "flex";
          hiddenBoxes[2].style.display = "flex";
          hiddenBoxes[3].style.display = "flex";
          hiddenBoxes[4].style.display = "flex";
          hiddenBoxes[5].style.display = "flex";
          hiddenBoxes[6].style.display = "flex";
          //hiddenBoxes[1].style.display = "block";
        }

        this.classList.toggle(first);
        setTimeout(() => {
          this.classList.toggle(second);
        }, 250);
      });

/////////////////////////////
///////////////////////////// MongoDB for Node.js

      const secImg3 = document.getElementById('secImg3');
      secImg3.style.display = "none";
      const box3 = document.querySelector('.box3');
      box3.style.display = "flex";
      box3.style.justifyContent = "center";
      box3.style.alignContent = "center";
      box3.style.alignItems = "center";
      box3.addEventListener('click', function() {
        let first = 'opening3';
        let second = 'open3';
        secImg3.style.display = "block";
        secImg3.style.paddingBottom = "5%";
        this.style.display = "block";
        container.style.display = "block";
        container.style.height = "auto";
        filtered[2].style.display = "block";
        // socials.style.display = "block";
        hiddenBoxes[0].style.display = "none";
        hiddenBoxes[1].style.display = "none";
        hiddenBoxes[3].style.display = "none";
        hiddenBoxes[4].style.display = "none";
        hiddenBoxes[5].style.display = "none";
        hiddenBoxes[6].style.display = "none";

        if(this.classList.contains(first)) {
          // switch them
          [first, second] = [second, first];

          secImg3.style.display = "none";
          this.style.display = "flex";
          this.style.justifyContent = "center";
          this.style.alignContent = "center";
          this.style.alignItems = "center";

          container.style.display = "flex";
          container.style.justifyContent = "space-around";
          container.style.paddingTop = "50px";
          container.style.paddingBottom = "50px";
          filtered[2].style.display = "none";

          hiddenBoxes[0].style.display = "flex";
          hiddenBoxes[1].style.display = "flex";
          hiddenBoxes[3].style.display = "flex";
          hiddenBoxes[4].style.display = "flex";
          hiddenBoxes[5].style.display = "flex";
          hiddenBoxes[6].style.display = "flex";
          //hiddenBoxes[2].style.display = "block";
        }

        this.classList.toggle(first);
        setTimeout(() => {
          this.classList.toggle(second);
        }, 250);
      });

///////////////////////
/////////////////////// Treehouse Front End Tech Degree

        const secImg4 = document.getElementById('secImg4');
        secImg4.style.display = "none";
        const box4 = document.querySelector('.box4');
         box4.style.display = "flex";
         box4.style.justifyContent = "center";
         box4.style.alignContent = "center";
         box4.style.alignItems = "center";


      box4.addEventListener('click', function() {
        let first = 'opening4';
        let second = 'open4';

        secImg4.style.display = "block";
        secImg4.style.marginTop = "20%";
        this.style.display = "block";
        container.style.display = "block";
        container.style.height = "auto";
        filtered[3].style.display = "block";

        hiddenBoxes[0].style.display = "none";
        hiddenBoxes[1].style.display = "none";
        hiddenBoxes[2].style.display = "none";
        hiddenBoxes[4].style.display = "none";
        hiddenBoxes[5].style.display = "none";
        hiddenBoxes[6].style.display = "none";

        if(this.classList.contains(first)) {
          // switch them
          [first, second] = [second, first];

          secImg4.style.display = "none";
          this.style.display = "flex";
          this.style.justifyContent = "center";
          this.style.alignContent = "center";
          this.style.alignItems = "center";

          container.style.display = "flex";
          container.style.justifyContent = "space-around";
          container.style.paddingTop = "50px";
          container.style.paddingBottom = "50px";
          filtered[3].style.display = "none";

          hiddenBoxes[0].style.display = "flex";
          hiddenBoxes[1].style.display = "flex";
          hiddenBoxes[2].style.display = "flex";
          hiddenBoxes[4].style.display = "flex";
          hiddenBoxes[5].style.display = "flex";
          hiddenBoxes[6].style.display = "flex";
        //  hiddenBoxes[3].style.display = "block";
        }

        this.classList.toggle(first);
        setTimeout(() => {
          this.classList.toggle(second);
        }, 250);
      });


//////////////////////////
////////////////////////// MongoDB Performance

      const secImg5 = document.getElementById('secImg5');
      secImg5.style.display = "none";
      const box5 = document.querySelector('.box5');
       box5.style.display = "flex";
       box5.style.justifyContent = "center";
       box5.style.alignContent = "center";
       box5.style.alignItems = "center";


    box5.addEventListener('click', function() {
      let first = 'opening5';
      let second = 'open5';

      secImg5.style.display = "block";
      secImg5.style.marginTop = "10%";
      this.style.display = "block";
      container.style.display = "block";
      container.style.height = "auto";
      filtered[4].style.display = "block";

      hiddenBoxes[0].style.display = "none";
      hiddenBoxes[1].style.display = "none";
      hiddenBoxes[2].style.display = "none";
      hiddenBoxes[3].style.display = "none";
      hiddenBoxes[5].style.display = "none";
      hiddenBoxes[6].style.display = "none";

      if(this.classList.contains(first)) {
        // switch them
        [first, second] = [second, first];

        secImg5.style.display = "none";
        this.style.display = "flex";
        this.style.justifyContent = "center";
        this.style.alignContent = "center";
        this.style.alignItems = "center";

        container.style.display = "flex";
        container.style.justifyContent = "space-around";
        container.style.paddingTop = "50px";
        container.style.paddingBottom = "50px";
        filtered[4].style.display = "none";

        hiddenBoxes[0].style.display = "flex";
        hiddenBoxes[1].style.display = "flex";
        hiddenBoxes[2].style.display = "flex";
        hiddenBoxes[3].style.display = "flex";
        hiddenBoxes[5].style.display = "flex";
        hiddenBoxes[6].style.display = "flex";
        //hiddenBoxes[4].style.display = "block";
      }

      this.classList.toggle(first);
      setTimeout(() => {
        this.classList.toggle(second);
      }, 250);
    });



    /////////////////////////////
    /////////////////////////////
    ///////////////////////////// KUBERNETES


    const secImg6 = document.getElementById('secImg6');
    secImg6.style.display = "none";
    const box6 = document.querySelector('.box6');
     box6.style.display = "flex";
     box6.style.justifyContent = "center";
     box6.style.alignContent = "center";
     box6.style.alignItems = "center";


  box6.addEventListener('click', function() {
    let first = 'opening6';
    let second = 'open6';

    secImg6.style.display = "block";
    secImg6.style.marginTop = "10%";
    this.style.display = "block";
    container.style.display = "block";
    container.style.height = "auto";
    filtered[5].style.display = "block";

    hiddenBoxes[0].style.display = "none";
    hiddenBoxes[1].style.display = "none";
    hiddenBoxes[2].style.display = "none";
    hiddenBoxes[3].style.display = "none";
    hiddenBoxes[4].style.display = "none";
    hiddenBoxes[6].style.display = "none";

    if(this.classList.contains(first)) {
      // switch them
      [first, second] = [second, first];

      secImg6.style.display = "none";
      this.style.display = "flex";
      this.style.justifyContent = "center";
      this.style.alignContent = "center";
      this.style.alignItems = "center";

      container.style.display = "flex";
      container.style.justifyContent = "space-around";
      container.style.paddingTop = "50px";
      container.style.paddingBottom = "50px";
      filtered[5].style.display = "none";

      hiddenBoxes[0].style.display = "flex";
      hiddenBoxes[1].style.display = "flex";
      hiddenBoxes[2].style.display = "flex";
      hiddenBoxes[3].style.display = "flex";
      hiddenBoxes[4].style.display = "flex";
      hiddenBoxes[6].style.display = "flex";
    }

    this.classList.toggle(first);
    setTimeout(() => {
      this.classList.toggle(second);
    }, 250);
  });


  /////////////////////////////
  /////////////////////////////
  ///////////////////////////// DOCKER

  const secImg7 = document.getElementById('secImg7');
  secImg7.style.display = "none";
  const box7 = document.querySelector('.box7');
   box7.style.display = "flex";
   box7.style.justifyContent = "center";
   box7.style.alignContent = "center";
   box7.style.alignItems = "center";


box7.addEventListener('click', function() {
  let first = 'opening7';
  let second = 'open7';

  secImg7.style.display = "block";
  secImg7.style.marginTop = "10%";
  this.style.display = "block";
  container.style.display = "block";
  container.style.height = "auto";
  filtered[6].style.display = "block";

  hiddenBoxes[0].style.display = "none";
  hiddenBoxes[1].style.display = "none";
  hiddenBoxes[2].style.display = "none";
  hiddenBoxes[3].style.display = "none";
  hiddenBoxes[4].style.display = "none";
  hiddenBoxes[5].style.display = "none";

  if(this.classList.contains(first)) {
    // switch them
    [first, second] = [second, first];

    secImg7.style.display = "none";
    this.style.display = "flex";
    this.style.justifyContent = "center";
    this.style.alignContent = "center";
    this.style.alignItems = "center";

    container.style.display = "flex";
    container.style.justifyContent = "space-around";
    container.style.paddingTop = "50px";
    container.style.paddingBottom = "50px";
    filtered[6].style.display = "none";

    hiddenBoxes[0].style.display = "flex";
    hiddenBoxes[1].style.display = "flex";
    hiddenBoxes[2].style.display = "flex";
    hiddenBoxes[3].style.display = "flex";
    hiddenBoxes[4].style.display = "flex";
    hiddenBoxes[5].style.display = "flex";
  }

  this.classList.toggle(first);
  setTimeout(() => {
    this.classList.toggle(second);
  }, 250);
});
