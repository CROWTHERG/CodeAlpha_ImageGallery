/* ======================================================
   Polished gallery script
   - 10 images per category (Nature / City / Animals)
   - filters, lightbox with prev/next, keyboard navigation
   ====================================================== */

const galleryEl = document.getElementById('gallery');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lbImage = document.querySelector('.lb-image');
const lbCaption = document.querySelector('.lb-caption');
const lbClose = document.querySelector('.lb-close');
const lbPrev = document.querySelector('.lb-prev');
const lbNext = document.querySelector('.lb-next');

const images = [
  // 10 Nature images (Unsplash queries - curated to match nature)
  { src: "https://source.unsplash.com/collection/190727/1200x800?sig=1", cat: "nature", title:"Mountain reflection" },
  { src: "https://source.unsplash.com/collection/190727/1200x800?sig=2", cat: "nature", title:"Misty forest" },
  { src: "https://source.unsplash.com/collection/190727/1200x800?sig=3", cat: "nature", title:"Waterfall gorge" },
  { src: "https://source.unsplash.com/collection/190727/1200x800?sig=4", cat: "nature", title:"Sunrise over hills" },
  { src: "https://source.unsplash.com/collection/190727/1200x800?sig=5", cat: "nature", title:"Rocky coastline" },
  { src: "https://source.unsplash.com/collection/190727/1200x800?sig=6", cat: "nature", title:"Autumn valley" },
  { src: "https://source.unsplash.com/collection/190727/1200x800?sig=7", cat: "nature", title:"Conifer forest" },
  { src: "https://source.unsplash.com/collection/190727/1200x800?sig=8", cat: "nature", title:"Desert dunes" },
  { src: "https://source.unsplash.com/collection/190727/1200x800?sig=9", cat: "nature", title:"Lake & trees" },
  { src: "https://source.unsplash.com/collection/190727/1200x800?sig=10",cat: "nature", title:"Snowy peaks" },

  // 10 City images (Unsplash queries matching bustling city / skyline)
  { src: "https://source.unsplash.com/collection/190728/1200x800?sig=1", cat:"city", title:"Skyline at dusk" },
  { src: "https://source.unsplash.com/collection/190728/1200x800?sig=2", cat:"city", title:"Busy downtown" },
  { src: "https://source.unsplash.com/collection/190728/1200x800?sig=3", cat:"city", title:"Neon night city" },
  { src: "https://source.unsplash.com/collection/190728/1200x800?sig=4", cat:"city", title:"Skyscraper reflection" },
  { src: "https://source.unsplash.com/collection/190728/1200x800?sig=5", cat:"city", title:"City bridge" },
  { src: "https://source.unsplash.com/collection/190728/1200x800?sig=6", cat:"city", title:"Aerial city grid" },
  { src: "https://source.unsplash.com/collection/190728/1200x800?sig=7", cat:"city", title:"Evening streets" },
  { src: "https://source.unsplash.com/collection/190728/1200x800?sig=8", cat:"city", title:"Crowded crosswalk" },
  { src: "https://source.unsplash.com/collection/190728/1200x800?sig=9", cat:"city", title:"Urban rooftops" },
  { src: "https://source.unsplash.com/collection/190728/1200x800?sig=10",cat:"city", title:"City lights" },

  // 10 Animals images (Unsplash queries matching animals/wildlife)
  { src: "https://source.unsplash.com/collection/190726/1200x800?sig=1", cat:"animals", title:"Lion portrait" },
  { src: "https://source.unsplash.com/collection/190726/1200x800?sig=2", cat:"animals", title:"Elephant herd" },
  { src: "https://source.unsplash.com/collection/190726/1200x800?sig=3", cat:"animals", title:"Colorful bird" },
  { src: "https://source.unsplash.com/collection/190726/1200x800?sig=4", cat:"animals", title:"Polar penguin" },
  { src: "https://source.unsplash.com/collection/190726/1200x800?sig=5", cat:"animals", title:"Giraffe close-up" },
  { src: "https://source.unsplash.com/collection/190726/1200x800?sig=6", cat:"animals", title:"Fox in grass" },
  { src: "https://source.unsplash.com/collection/190726/1200x800?sig=7", cat:"animals", title:"Eagle mid-flight" },
  { src: "https://source.unsplash.com/collection/190726/1200x800?sig=8", cat:"animals", title:"Underwater fish" },
  { src: "https://source.unsplash.com/collection/190726/1200x800?sig=9", cat:"animals", title:"Cute puppy" },
  { src: "https://source.unsplash.com/collection/190726/1200x800?sig=10",cat:"animals", title:"Wild tiger" }
];

// render gallery (default: show all)
let currentList = [];
function render(cat='all'){
  galleryEl.innerHTML = '';
  currentList = cat === 'all' ? images : images.filter(i=>i.cat===cat);
  currentList.forEach((img, idx) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.index = idx;
    card.dataset.cat = img.cat;
    card.innerHTML = `
      <img loading="lazy" src="${img.src}" alt="${img.title}">
