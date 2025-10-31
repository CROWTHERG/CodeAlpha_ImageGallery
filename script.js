const galleryContainer = document.querySelector(".gallery");
const filterButtons = document.querySelectorAll(".filter-btn");

const images = [
  // 🌿 Nature
  { url: "https://www.istockphoto.com/photo/twilight-at-spirit-island-gm485371557-38624866", category: "nature", caption: "Twilight at Spirit Island" },
  { url: "https://www.istockphoto.com/photo/stream-in-the-forest-gm619963520-108182791", category: "nature", caption: "Stream in the Forest" },
  { url: "https://www.istockphoto.com/photo/deep-forest-waterfall-in-thailand-erawan-waterfall-national-park-kanjanaburi-thailand-gm1473666403-503736697", category: "nature", caption: "Forest Waterfall" },
  { url: "https://www.istockphoto.com/photo/a-view-up-into-the-trees-direction-sky-gm1317323736-404791748", category: "nature", caption: "Sky Through Trees" },
  { url: "https://www.istockphoto.com/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays-gm1419410282-465774617", category: "nature", caption: "Sun Rays in Forest" },
  { url: "https://www.istockphoto.com/photo/aerial-view-of-forest-at-sunset-on-the-background-of-mountains-in-dolomites-gm1696167872-538168023", category: "nature", caption: "Mountain Forest Sunset" },
  { url: "https://www.istockphoto.com/photo/trees-gm177034402-20136500", category: "nature", caption: "Trees Landscape" },
  { url: "https://www.istockphoto.com/photo/trekking-path-in-mountains-at-summer-sunset-gm2101175462-566405620", category: "nature", caption: "Mountain Path" },
  { url: "https://www.istockphoto.com/photo/high-angle-view-of-a-lake-and-forest-gm1337232523-418194736", category: "nature", caption: "Lake and Forest View" },
  { url: "https://www.istockphoto.com/photo/mountain-covered-with-a-coniferous-fir-tree-forest-scenic-landscape-from-carpathian-gm2153573059-574500944", category: "nature", caption: "Carpathian Mountains" },

  // 🏙️ City
  { url: "https://www.istockphoto.com/photo/modern-building-in-the-city-with-blue-sky-gm1696781145-538240475", category: "city", caption: "Modern Building" },
  { url: "https://www.istockphoto.com/photo/leiden-from-the-sky-at-night-night-gm1131102682-299382833", category: "city", caption: "City at Night" },
  { url: "https://www.istockphoto.com/photo/houston-texas-skyline-gm542727462-97231097", category: "city", caption: "Houston Skyline" },
  { url: "https://www.istockphoto.com/photo/panoramic-skyline-and-modern-commercial-office-buildings-with-empty-road-gm1357883180-431666569", category: "city", caption: "Panoramic City View" },
  { url: "https://www.istockphoto.com/photo/top-down-aerial-view-of-chicago-downtown-urban-grid-with-park-gm1250380933-364669347", category: "city", caption: "Chicago Downtown" },
  { url: "https://www.istockphoto.com/photo/modern-building-in-paris-gm1048358188-280419542", category: "city", caption: "Paris Modern Building" },
  { url: "https://www.istockphoto.com/photo/crowds-of-people-walking-across-a-busy-crosswalk-at-the-intersection-of-23rd-street-gm1367851585-437988387", category: "city", caption: "Busy Street" },
  { url: "https://www.istockphoto.com/photo/the-city-of-london-skyline-at-night-united-kingdom-gm1312550959-401326148", category: "city", caption: "London Skyline" },
  { url: "https://www.istockphoto.com/video/time-lapse-low-angle-of-tall-corporate-buildings-skyscraper-with-reflection-of-gm1453963806-489751468", category: "city", caption: "Corporate Towers" },
  { url: "https://www.istockphoto.com/photo/people-walking-through-the-busy-intersection-at-5th-avenue-and-23rd-street-in-new-gm2151971083-573019916", category: "city", caption: "New York Crosswalk" },

  // 🐾 Animals
  { url: "https://www.istockphoto.com/photo/group-of-cute-pets-on-white-background-banner-design-gm1445196818-483681301", category: "animals", caption: "Group of Pets" },
  { url: "https://www.istockphoto.com/photo/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-bird-fish-rodent-gm1296353202-389801058", category: "animals", caption: "Pets Group" },
  { url: "https://www.istockphoto.com/photo/red-eyed-tree-frog-gm108348088-14376031", category: "animals", caption: "Tree Frog" },
  { url: "https://www.istockphoto.com/photo/british-short-hair-cat-and-golden-retriever-gm992637094-268930508", category: "animals", caption: "Dog and Cat" },
  { url: "https://www.istockphoto.com/photo/cat-and-dog-sleeping-puppy-and-kitten-sleep-gm1168451046-322634406", category: "animals", caption: "Sleeping Pets" },
  { url: "https://www.istockphoto.com/photo/red-eyed-tree-frog-smile-gm1049028724-280573845", category: "animals", caption: "Smiling Frog" },
  { url: "https://www.istockphoto.com/photo/funny-burrowing-owl-athene-cunicularia-gm964611070-263328370", category: "animals", caption: "Burrowing Owl" },
  { url: "https://www.istockphoto.com/photo/koala-resting-and-sleeping-on-his-tree-gm530674261-54744072", category: "animals", caption: "Koala Resting" },
  { url: "https://www.istockphoto.com/photo/elephant-and-lion-gm1136053333-302441305", category: "animals", caption: "Elephant and Lion" },
  { url: "https://www.istockphoto.com/photo/laughing-horse-gm1160791767-317850269", category: "animals", caption: "Laughing Horse" }
];

// Display images
function renderGallery(category = "all") {
  galleryContainer.innerHTML = "";
  const filtered = category === "all" ? images : images.filter(img => img.category === category);
  filtered.forEach((img, i) => {
    const div = document.createElement("div");
    div.classList.add("gallery-item");
    div.dataset.index = i;
    div.innerHTML = `<img src="${img.url}" alt="${img.caption}"><div class="caption">${img.caption}</div>`;
    galleryContainer.appendChild(div);
  });
}
renderGallery();

// Filter buttons
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    renderGallery(btn.dataset.category);
  });
});

// Lightbox logic
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-image");
const lightboxCaption = document.querySelector(".lightbox-caption");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

galleryContainer.addEventListener("click", e => {
  const item = e.target.closest(".gallery-item");
  if (!item) return;
  currentIndex = parseInt(item.dataset.index);
  openLightbox();
});

function openLightbox() {
  const img = images[currentIndex];
  lightbox.style.display = "flex";
  lightboxImg.src = img.url;
  lightboxCaption.textContent = img.caption;
}

closeBtn.onclick = () => (lightbox.style.display = "none");
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openLightbox();
};
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  openLightbox();
};
