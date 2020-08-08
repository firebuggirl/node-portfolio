//NOTE: Don't use arrow functions here...using 'this' all over the place :-)

const socials = Array.from(document.querySelectorAll('.socialCerts'));
      const filtered = socials
        .filter(social => social.style.display ='none');

      let ps = document.querySelectorAll('[class*=boxes]');
      for (const boxes of ps) {
        boxes.addEventListener('click', function() {
          console.log(this.textContent);
          console.log('Hello');
          const socials = Array.from(document.querySelectorAll('.socialCerts'));
            const filtered = socials
             .filter(function(number, index, array) {
                 return index === array.indexOf(number);
                });
            console.log(filtered);
        });
          filtered[0].style.display = 'none';

      }

      const hideBoxesOnClick = Array.from(ps);
        const hiddenBoxes = hideBoxesOnClick
         .filter(function(number, index, array) {
             return index === array.indexOf(number);
            });
        console.log(hiddenBoxes);


////////////////////
// /////////////////
// First image => '0' index
      const secImg = document.getElementById('secImg');
      secImg.style.display = 'none';
      const box = document.querySelector('.box');
      box.style.display = 'flex';
      box.style.justifyContent = 'center';
      box.style.alignContent = 'center';
      box.style.alignItems = 'center';
      box.addEventListener('click', function() {
        let first = 'opening';
        let second = 'open';
        secImg.style.display = 'block';
        this.style.display = 'block';
        container.style.display = 'block';
        container.style.height = 'auto';
        filtered[0].style.display = 'block';
        filtered[0].style.marginBottom = '10px';

        //hiddenBoxes.forEach(node => node.style.display = "none");

        hiddenBoxes[1].style.display = 'none';
        hiddenBoxes[2].style.display = 'none';
        hiddenBoxes[3].style.display = 'none';
        hiddenBoxes[4].style.display = 'none';
        hiddenBoxes[5].style.display = 'none';
        hiddenBoxes[6].style.display = 'none';
        hiddenBoxes[7].style.display = 'none';
        hiddenBoxes[8].style.display = 'none';
        hiddenBoxes[9].style.display = 'none';
        hiddenBoxes[10].style.display = 'none';
        hiddenBoxes[11].style.display = 'none';

        if(this.classList.contains(first)) {
          // switch them
          [first, second] = [second, first];

          secImg.style.display = 'none';
          this.style.display = 'flex';
          this.style.justifyContent = 'center';
          this.style.alignContent = 'center';
          this.style.alignItems = 'center';

          container.style.display = 'flex';
          container.style.justifyContent = 'space-around';
          container.style.paddingTop = '50px';
          container.style.paddingBottom = '50px';

          filtered[0].style.display = 'none';

          hiddenBoxes.forEach(node => node.style.display = "flex");


        }

        this.classList.toggle(first);
          setTimeout(() => {
            this.classList.toggle(second);
          }, 250);
        });



//////////////////////////
////////////////////////// MongoDB Basics => Index 1

      const secImg2 = document.getElementById('secImg2');
      secImg2.style.display = 'none';
      const box2 = document.querySelector('.box2');
      box2.style.display = 'flex';
      box2.style.justifyContent = 'center';
      box2.style.alignContent = 'center';
      box2.style.alignItems = 'center';
      box2.addEventListener('click', function() {
        let first = 'opening2';
        let second = 'open2';
        secImg2.style.display = 'block';
        secImg2.style.marginTop = '10%';
        this.style.display = 'block';
        container.style.display = 'block';
        container.style.height = 'auto';
        filtered[1].style.display = 'block';

        //hiddenBoxes.forEach(node => node.style.display = "flex");

        hiddenBoxes[0].style.display = 'none';
        hiddenBoxes[2].style.display = 'none';
        hiddenBoxes[3].style.display = 'none';
        hiddenBoxes[4].style.display = 'none';
        hiddenBoxes[5].style.display = 'none';
        hiddenBoxes[6].style.display = 'none';
        hiddenBoxes[7].style.display = 'none';
        hiddenBoxes[8].style.display = 'none';
        hiddenBoxes[9].style.display = 'none';
        hiddenBoxes[10].style.display = 'none';
        hiddenBoxes[11].style.display = 'none';

        if(this.classList.contains(first)) {
          // switch them
          [first, second] = [second, first];

          secImg2.style.display = 'none';
          this.style.display = 'flex';
          this.style.justifyContent = 'center';
          this.style.alignContent = 'center';
          this.style.alignItems = 'center';

          container.style.display = 'flex';
          container.style.justifyContent = 'space-around';
          container.style.paddingTop = '50px';
          container.style.paddingBottom = '50px';

          filtered[1].style.display = 'none';

          hiddenBoxes.forEach(node => node.style.display = "flex");

        }

        this.classList.toggle(first);
          setTimeout(() => {
            this.classList.toggle(second);
          }, 250);
        });

/////////////////////////////
///////////////////////////// MongoDB for Node.js => Index 2

      const secImg3 = document.getElementById('secImg3');
      secImg3.style.display = 'none';
      const box3 = document.querySelector('.box3');
      box3.style.display = 'flex';
      box3.style.justifyContent = 'center';
      box3.style.alignContent = 'center';
      box3.style.alignItems = 'center';
      box3.addEventListener('click', function() {
        let first = 'opening3';
        let second = 'open3';
        secImg3.style.display = 'block';
        secImg3.style.paddingBottom = '5%';
        this.style.display = 'block';
        container.style.display = 'block';
        container.style.height = 'auto';
        filtered[2].style.display = 'block';
        filtered[2].style.marginBottom = '0px';

        //hiddenBoxes.forEach(node => node.style.display = "flex");

        hiddenBoxes[0].style.display = 'none';
        hiddenBoxes[1].style.display = 'none';
        hiddenBoxes[3].style.display = 'none';
        hiddenBoxes[4].style.display = 'none';
        hiddenBoxes[5].style.display = 'none';
        hiddenBoxes[6].style.display = 'none';
        hiddenBoxes[7].style.display = 'none';
        hiddenBoxes[8].style.display = 'none';
        hiddenBoxes[9].style.display = 'none';
        hiddenBoxes[10].style.display = 'none';
        hiddenBoxes[11].style.display = 'none';

        if(this.classList.contains(first)) {
          // switch them
          [first, second] = [second, first];

          secImg3.style.display = 'none';
          this.style.display = 'flex';
          this.style.justifyContent = 'center';
          this.style.alignContent = 'center';
          this.style.alignItems = 'center';

          container.style.display = 'flex';
          container.style.justifyContent = 'space-around';
          container.style.paddingTop = '50px';
          container.style.paddingBottom = '50px';
          filtered[2].style.display = 'none';

          hiddenBoxes.forEach(node => node.style.display = "flex");

        }

        this.classList.toggle(first);
          setTimeout(() => {
            this.classList.toggle(second);
          }, 250);
        });

/////////////////////// Index 3
/////////////////////// Treehouse Front End Tech Degree

        const secImg4 = document.getElementById('secImg4');
        secImg4.style.display = 'none';
        const box4 = document.querySelector('.box4');
         box4.style.display = 'flex';
         box4.style.justifyContent = 'center';
         box4.style.alignContent = 'center';
         box4.style.alignItems = 'center';


      box4.addEventListener('click', function() {
        let first = 'opening4';
        let second = 'open4';

        secImg4.style.display = 'block';
        secImg4.style.marginTop = '20%';
        this.style.display = 'block';
        container.style.display = 'block';
        container.style.height = 'auto';
        filtered[3].style.display = 'block';

        //hiddenBoxes.forEach(node => node.style.display = "none");
        hiddenBoxes[0].style.display = 'none';
        hiddenBoxes[1].style.display = 'none';
        hiddenBoxes[2].style.display = 'none';
        hiddenBoxes[4].style.display = 'none';
        hiddenBoxes[5].style.display = 'none';
        hiddenBoxes[6].style.display = 'none';
        hiddenBoxes[7].style.display = 'none';
        hiddenBoxes[8].style.display = 'none';
        hiddenBoxes[9].style.display = 'none';
        hiddenBoxes[10].style.display = 'none';
        hiddenBoxes[11].style.display = 'none';

        if(this.classList.contains(first)) {
          // switch them
          [first, second] = [second, first];

          secImg4.style.display = 'none';
          this.style.display = 'flex';
          this.style.justifyContent = 'center';
          this.style.alignContent = 'center';
          this.style.alignItems = 'center';

          container.style.display = 'flex';
          container.style.justifyContent = 'space-around';
          container.style.paddingTop = '50px';
          container.style.paddingBottom = '50px';

          filtered[3].style.display = 'none';

          // if(hiddenBoxes !== hiddenBoxes[3]){
          //   hiddenBoxes.style.display = 'flex';
          // }

          hiddenBoxes.forEach(node => node.style.display = "flex");

        }

        this.classList.toggle(first);
          setTimeout(() => {
            this.classList.toggle(second);
          }, 250);
        });


////////////////////////// Index 4
////////////////////////// MongoDB Performance

       const secImg5 = document.getElementById('secImg5');
       secImg5.style.display = 'none';
       const box5 = document.querySelector('.box5');
       box5.style.display = 'flex';
       box5.style.justifyContent = 'center';
       box5.style.alignContent = 'center';
       box5.style.alignItems = 'center';


    box5.addEventListener('click', function() {
      let first = 'opening5';
      let second = 'open5';

      secImg5.style.display = 'block';
      secImg5.style.marginTop = '10%';
      this.style.display = 'block';
      container.style.display = 'block';
      container.style.height = 'auto';
      filtered[4].style.display = 'block';
      filtered[4].style.marginBottom = '10px';

      //hiddenBoxes.forEach(node => node.style.display = "none");
      hiddenBoxes[0].style.display = 'none';
      hiddenBoxes[1].style.display = 'none';
      hiddenBoxes[2].style.display = 'none';
      hiddenBoxes[3].style.display = 'none';
      hiddenBoxes[5].style.display = 'none';
      hiddenBoxes[6].style.display = 'none';
      hiddenBoxes[7].style.display = 'none';
      hiddenBoxes[8].style.display = 'none';
      hiddenBoxes[9].style.display = 'none';
      hiddenBoxes[10].style.display = 'none';
      hiddenBoxes[11].style.display = 'none';

      if(this.classList.contains(first)) {
        // switch them
        [first, second] = [second, first];

        secImg5.style.display = 'none';
        this.style.display = 'flex';
        this.style.justifyContent = 'center';
        this.style.alignContent = 'center';
        this.style.alignItems = 'center';

        container.style.display = 'flex';
        container.style.justifyContent = 'space-around';
        container.style.paddingTop = '50px';
        container.style.paddingBottom = '50px';

        filtered[4].style.display = 'none';

        hiddenBoxes.forEach(node => node.style.display = "flex");

      }

      this.classList.toggle(first);
        setTimeout(() => {
          this.classList.toggle(second);
        }, 250);
      });



    /////////////////////////////
    ///////////////////////////// Index 5
    ///////////////////////////// KUBERNETES


     const secImg6 = document.getElementById('secImg6');
     secImg6.style.display = 'none';
     const box6 = document.querySelector('.box6');
     box6.style.display = 'flex';
     box6.style.justifyContent = 'center';
     box6.style.alignContent = 'center';
     box6.style.alignItems = 'center';


  box6.addEventListener('click', function() {
    let first = 'opening6';
    let second = 'open6';

    secImg6.style.display = 'block';
    secImg6.style.marginTop = '10%';
    this.style.display = 'block';
    container.style.display = 'block';
    container.style.height = 'auto';
    filtered[5].style.display = 'block';

    //hiddenBoxes.forEach(node => node.style.display = "none");
    hiddenBoxes[0].style.display = 'none';
    hiddenBoxes[1].style.display = 'none';
    hiddenBoxes[2].style.display = 'none';
    hiddenBoxes[3].style.display = 'none';
    hiddenBoxes[4].style.display = 'none';
    hiddenBoxes[6].style.display = 'none';
    hiddenBoxes[7].style.display = 'none';
    hiddenBoxes[8].style.display = 'none';
    hiddenBoxes[9].style.display = 'none';
    hiddenBoxes[10].style.display = 'none';
    hiddenBoxes[11].style.display = 'none';

    if(this.classList.contains(first)) {
      // switch them
      [first, second] = [second, first];

      secImg6.style.display = 'none';
      this.style.display = 'flex';
      this.style.justifyContent = 'center';
      this.style.alignContent = 'center';
      this.style.alignItems = 'center';

      container.style.display = 'flex';
      container.style.justifyContent = 'space-around';
      container.style.paddingTop = '50px';
      container.style.paddingBottom = '50px';

      filtered[5].style.display = 'none';


      hiddenBoxes.forEach(node => node.style.display = "flex");

    }

    this.classList.toggle(first);
      setTimeout(() => {
        this.classList.toggle(second);
      }, 250);
    });


  /////////////////////////////
  ///////////////////////////// Index 6
  ///////////////////////////// DOCKER

   const secImg7 = document.getElementById('secImg7');
   secImg7.style.display = 'none';
   const box7 = document.querySelector('.box7');
   box7.style.display = 'flex';
   box7.style.justifyContent = 'center';
   box7.style.alignContent = 'center';
   box7.style.alignItems = 'center';


box7.addEventListener('click', function() {
  let first = 'opening7';
  let second = 'open7';

  secImg7.style.display = 'block';
  secImg7.style.marginTop = '10%';
  this.style.display = 'block';
  container.style.display = 'block';
  container.style.height = 'auto';
  filtered[6].style.display = 'block';

  //hiddenBoxes.forEach(node => node.style.display = "none");

  hiddenBoxes[0].style.display = 'none';
  hiddenBoxes[1].style.display = 'none';
  hiddenBoxes[2].style.display = 'none';
  hiddenBoxes[3].style.display = 'none';
  hiddenBoxes[4].style.display = 'none';
  hiddenBoxes[5].style.display = 'none';
  hiddenBoxes[7].style.display = 'none';
  hiddenBoxes[8].style.display = 'none';
  hiddenBoxes[9].style.display = 'none';
  hiddenBoxes[10].style.display = 'none';
  hiddenBoxes[11].style.display = 'none';

  if(this.classList.contains(first)) {
    // switch them
    [first, second] = [second, first];

    secImg7.style.display = 'none';
    this.style.display = 'flex';
    this.style.justifyContent = 'center';
    this.style.alignContent = 'center';
    this.style.alignItems = 'center';

    container.style.display = 'flex';
    container.style.justifyContent = 'space-around';
    container.style.paddingTop = '50px';
    container.style.paddingBottom = '50px';

    filtered[6].style.display = 'none';

    hiddenBoxes.forEach(node => node.style.display = "flex");

  }

  this.classList.toggle(first);
    setTimeout(() => {
      this.classList.toggle(second);
    }, 250);
  });


  /////////////////////////////
  ///////////////////////////// Index 7
  ///////////////////////////// MongoDB Basic Cluster Administration



const secImg8 = document.getElementById('secImg8');
secImg8.style.display = 'none';
const box8 = document.querySelector('.box8');
box8.style.display = 'flex';
box8.style.justifyContent = 'center';
box8.style.alignContent = 'center';
box8.style.alignItems = 'center';
box8.addEventListener('click', function() {
  let first = 'opening8';
  let second = 'open8';
  secImg8.style.display = 'block';
  secImg8.style.marginTop = '10%';
  this.style.display = 'block';
  container.style.display = 'block';
  container.style.height = 'auto';
  filtered[7].style.display = 'block';

  //hiddenBoxes.forEach(node => node.style.display = "none");

  hiddenBoxes[0].style.display = 'none';
  hiddenBoxes[1].style.display = 'none';
  hiddenBoxes[2].style.display = 'none';
  hiddenBoxes[3].style.display = 'none';
  hiddenBoxes[4].style.display = 'none';
  hiddenBoxes[5].style.display = 'none';
  hiddenBoxes[6].style.display = 'none';
  hiddenBoxes[8].style.display = 'none';
  hiddenBoxes[9].style.display = 'none';
  hiddenBoxes[10].style.display = 'none';
  hiddenBoxes[11].style.display = 'none';

  if(this.classList.contains(first)) {
    // switch them
    [first, second] = [second, first];

    secImg8.style.display = 'none';
    this.style.display = 'flex';
    this.style.justifyContent = 'center';
    this.style.alignContent = 'center';
    this.style.alignItems = 'center';

    container.style.display = 'flex';
    container.style.justifyContent = 'space-around';
    container.style.paddingTop = '50px';
    container.style.paddingBottom = '50px';

    filtered[7].style.display = 'none';

    hiddenBoxes.forEach(node => node.style.display = "flex");

  }

  this.classList.toggle(first);
    setTimeout(() => {
      this.classList.toggle(second);
    }, 250);
  });

  ///////////////////////////// Index 8
  ///////////////////////////// Image 9
  ///////////////////////////// Docker for Node.js Developers


  const secImg9 = document.getElementById('secImg9');
  secImg9.style.display = 'none';
  const box9 = document.querySelector('.box9');
  box9.style.display = 'flex';
  box9.style.justifyContent = 'center';
  box9.style.alignContent = 'center';
  box9.style.alignItems = 'center';
  box9.addEventListener('click', function() {
    let first = 'opening9';
    let second = 'open9';
    secImg9.style.display = 'block';
    secImg9.style.marginTop = '20%';
    this.style.display = 'block';
    container.style.display = 'block';
    container.style.height = 'auto';
    filtered[8].style.display = 'block';

    //hiddenBoxes.forEach(node => node.style.display = "none");
    hiddenBoxes[0].style.display = 'none';
    hiddenBoxes[1].style.display = 'none';
    hiddenBoxes[2].style.display = 'none';
    hiddenBoxes[3].style.display = 'none';
    hiddenBoxes[4].style.display = 'none';
    hiddenBoxes[5].style.display = 'none';
    hiddenBoxes[6].style.display = 'none';
    hiddenBoxes[7].style.display = 'none';
    hiddenBoxes[9].style.display = 'none';
    hiddenBoxes[10].style.display = 'none';
    hiddenBoxes[11].style.display = 'none';

    if(this.classList.contains(first)) {
      // switch them
      [first, second] = [second, first];

      secImg9.style.display = 'none';
      this.style.display = 'flex';
      this.style.justifyContent = 'center';
      this.style.alignContent = 'center';
      this.style.alignItems = 'center';

      container.style.display = 'flex';
      container.style.justifyContent = 'space-around';
      container.style.paddingTop = '50px';
      container.style.paddingBottom = '50px';

      filtered[8].style.display = 'none';

      hiddenBoxes.forEach(node => node.style.display = "flex");
    }

    this.classList.toggle(first);
      setTimeout(() => {
        this.classList.toggle(second);
      }, 250);
    });

    /////////////////////////////
  /////////////////////////////
  ///////////////////////////// Image 10 - MongoDB Data Modeling
  ///////////////////////////// Index 9
  /////////////////////////////

  const secImg10 = document.getElementById('secImg10');
  secImg10.style.display = 'none';
  const box10 = document.querySelector('.box10');
  box10.style.display = 'flex';
  box10.style.justifyContent = 'center';
  box10.style.alignContent = 'center';
  box10.style.alignItems = 'center';
  box10.addEventListener('click', function() {
    let first = 'opening10';
    let second = 'open10';
    secImg10.style.display = 'block';
    secImg10.style.marginTop = '20%';
    this.style.display = 'block';
    container.style.display = 'block';
    container.style.height = 'auto';

    filtered[9].style.display = 'block';//index 9

    //hiddenBoxes.forEach(node => node.style.display = "none");
    hiddenBoxes[0].style.display = 'none';
    hiddenBoxes[1].style.display = 'none';
    hiddenBoxes[2].style.display = 'none';
    hiddenBoxes[3].style.display = 'none';
    hiddenBoxes[4].style.display = 'none';
    hiddenBoxes[5].style.display = 'none';
    hiddenBoxes[6].style.display = 'none';
    hiddenBoxes[7].style.display = 'none';
    hiddenBoxes[8].style.display = 'none';
    hiddenBoxes[10].style.display = 'none';
    hiddenBoxes[11].style.display = 'none';

    if(this.classList.contains(first)) {
      // switch them
      [first, second] = [second, first];

      secImg10.style.display = 'none';
      this.style.display = 'flex';
      this.style.justifyContent = 'center';
      this.style.alignContent = 'center';
      this.style.alignItems = 'center';

      container.style.display = 'flex';
      container.style.justifyContent = 'space-around';
      container.style.paddingTop = '50px';
      container.style.paddingBottom = '50px';

      filtered[9].style.display = 'none';//index 9

      // if(hiddenBoxes !== hiddenBoxes[9]){
      //   hiddenBoxes.style.display = 'flex';
      // }

      hiddenBoxes.forEach(node => node.style.display = "flex");

    }

    this.classList.toggle(first);
      setTimeout(() => {
        this.classList.toggle(second);
      }, 250);
    });

  ///////////////////////////// Image 11- MongoDB Diagnostics and debugging
  ///////////////////////////// Index 10


  const secImg11 = document.getElementById('secImg11');
  secImg11.style.display = 'none';
  const box11 = document.querySelector('.box11');
  box11.style.display = 'flex';
  box11.style.justifyContent = 'center';
  box11.style.alignContent = 'center';
  box11.style.alignItems = 'center';
  box11.addEventListener('click', function() {
    let first = 'opening11';
    let second = 'open11';
    secImg11.style.display = 'block';
    secImg11.style.marginTop = '20%';
    this.style.display = 'block';
    container.style.display = 'block';
    container.style.height = 'auto';

    filtered[10].style.display = 'block';//index 10

    //hiddenBoxes.forEach(node => node.style.display = "none");

    hiddenBoxes[0].style.display = 'none';
    hiddenBoxes[1].style.display = 'none';
    hiddenBoxes[2].style.display = 'none';
    hiddenBoxes[3].style.display = 'none';
    hiddenBoxes[4].style.display = 'none';
    hiddenBoxes[5].style.display = 'none';
    hiddenBoxes[6].style.display = 'none';
    hiddenBoxes[7].style.display = 'none';
    hiddenBoxes[8].style.display = 'none';
    hiddenBoxes[9].style.display = 'none';
    hiddenBoxes[11].style.display = 'none';

    if(this.classList.contains(first)) {
      // switch them
      [first, second] = [second, first];

      secImg11.style.display = 'none';
      this.style.display = 'flex';
      this.style.justifyContent = 'center';
      this.style.alignContent = 'center';
      this.style.alignItems = 'center';

      container.style.display = 'flex';
      container.style.justifyContent = 'space-around';
      container.style.paddingTop = '50px';
      container.style.paddingBottom = '50px';

      filtered[10].style.display = 'none';//index 10

      hiddenBoxes.forEach(node => node.style.display = "flex");

    }

    this.classList.toggle(first);
      setTimeout(() => {
        this.classList.toggle(second);
      }, 250);
    });


  ///////////////////////////// Image 12- Kodekloud Linux Basics
  ///////////////////////////// Index 11

  const secImg12 = document.getElementById('secImg12');
  secImg12.style.display = 'none';
  const box12 = document.querySelector('.box12');
  box12.style.display = 'flex';
  box12.style.justifyContent = 'center';
  box12.style.alignContent = 'center';
  box12.style.alignItems = 'center';
  box12.addEventListener('click', function() {
    let first = 'opening12';
    let second = 'open12';
    secImg12.style.display = 'block';
    secImg12.style.marginTop = '0';
    secImg12.style.marginBottom = '10%';
    this.style.display = 'block';
    container.style.display = 'block';
    container.style.height = 'auto';



    filtered[11].style.display = 'block';//index 11

    //hiddenBoxes.forEach(node => node.style.display = "none");

    hiddenBoxes[0].style.display = 'none';
    hiddenBoxes[1].style.display = 'none';
    hiddenBoxes[2].style.display = 'none';
    hiddenBoxes[3].style.display = 'none';
    hiddenBoxes[4].style.display = 'none';
    hiddenBoxes[5].style.display = 'none';
    hiddenBoxes[6].style.display = 'none';
    hiddenBoxes[7].style.display = 'none';
    hiddenBoxes[8].style.display = 'none';
    hiddenBoxes[9].style.display = 'none';
    hiddenBoxes[10].style.display = 'none';

    if(this.classList.contains(first)) {
      // switch them
      [first, second] = [second, first];

      secImg12.style.display = 'none';
      this.style.display = 'flex';
      this.style.justifyContent = 'center';
      this.style.alignContent = 'center';
      this.style.alignItems = 'center';

      container.style.display = 'flex';
      container.style.justifyContent = 'space-around';
      container.style.paddingTop = '50px';
      container.style.paddingBottom = '50px';

      filtered[11].style.display = 'none';//index 11

      hiddenBoxes.forEach(node => node.style.display = "flex");

    }

    this.classList.toggle(first);
      setTimeout(() => {
        this.classList.toggle(second);
      }, 250);
    });
