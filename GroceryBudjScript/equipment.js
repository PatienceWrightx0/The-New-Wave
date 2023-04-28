const menu = [
    {
      id: 1,
      title: "Cameras",
      category: "breakfast",
      price: 400,
      img: "./images/camera.jpg",
      desc: `One of the main advantages of film cameras is the unique and beautiful aesthetic of film photography. The texture and color of film photos are often highly sought after, and can give a certain character to your photos that digital images simply can't replicate.`,
    },
    {
      id: 2,
      title: "Lights",
      category: "lunch",
      price: 150,
      img: "./images/lights.jpg",
      desc: `Film lights are essential tools for any filmmaker looking to capture high-quality, professional-looking footage. These lights are designed to provide consistent, adjustable lighting for a variety of film and video applications.`,
    },
    {
      id: 3,
      title: "Microphones",
      category: "shakes",
      price: 50,
      img: "./images/microphones.jpg",
      desc: `Film microphones are a vital tool for capturing high-quality audio during film and video productions. These microphones are designed to provide clear and accurate sound recording, even in noisy or challenging environments. `,
    },
    {
      id: 4,
      title: "Lens",
      category: "breakfast",
      price: 100,
      img: "./images/lens.jpg",
      desc: `Film camera lenses are a crucial component of any film photographer's toolkit, and are responsible for capturing sharp, detailed images with stunning clarity and color. These lenses come in a variety of focal lengths and apertures, allowing photographers to choose the perfect lens for their specific needs.`,
    },
    {
      id: 5,
      title: "Drones",
      category: "lunch",
      price: 500,
      img: "./images/drones.jpg",
      desc: `Drones are unmanned aerial vehicles that have revolutionized the way we capture images and video from the sky. These high-tech devices are equipped with cameras and other advanced features that allow photographers and videographers to capture stunning aerial footage from unique perspectives.`,
    },
    {
      id: 6,
      title: "Bundle Package",
      category: "shakes",
      price: 1000,
      img: "./images/bundles.jpg",
      desc: `Film bundle packages are an excellent way for film photographers to stock up on all the essential tools they need to produce high-quality images with ease. These packages typically include a selection of film rolls, camera accessories, and other useful tools that are designed to make the film photography process more convenient and enjoyable.`,
    },
  ];
  
  const sectionCenter = document.querySelector(".section-center");
  
  window.addEventListener("DOMContentLoaded", function () {
    let displayMenu = menu.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  });