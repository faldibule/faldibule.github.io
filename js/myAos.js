//gallery
const imgGallery = document.querySelectorAll(".img-gallery");
for (let i = 0; i < imgGallery.length; i++) {
  imgGallery[i].setAttribute("data-aos", "fade-up");
  imgGallery[i].setAttribute("data-aos-offset", "400");
}

//project
const projectAnimation = document.querySelectorAll(".project-animation");
for (let i = 0; i < projectAnimation.length; i++) {
  projectAnimation[i].setAttribute("data-aos-offset", "400");
}

AOS.init({ once: true });
