const categories = {
  nature: [
    "https://www.istockphoto.com/photo/twilight-at-spirit-island-gm485371557-38624866",
    "https://www.istockphoto.com/photo/stream-in-the-forest-gm619963520-108182791",
    "https://www.istockphoto.com/photo/deep-forest-waterfall-in-thailand-erawan-waterfall-national-park-kanjanaburi-thailand-gm1473666403-503736697",
    "https://www.istockphoto.com/photo/a-view-up-into-the-trees-direction-sky-gm1317323736-404791748",
    "https://www.istockphoto.com/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays-gm1419410282-465774617",
    "https://www.istockphoto.com/video/beautiful-summer-morning-in-the-forest-sun-rays-break-through-the-foliage-of-gm1253263447-365946416",
    "https://www.istockphoto.com/photo/aerial-view-of-forest-at-sunset-on-the-background-of-mountains-in-dolomites-gm1696167872-538168023",
    "https://www.istockphoto.com/photo/trees-gm177034402-20136500",
    "https://www.istockphoto.com/photo/trekking-path-in-mountains-at-summer-sunset-gm2101175462-566405620",
    "https://www.istockphoto.com/photo/high-angle-view-of-a-lake-and-forest-gm1337232523-418194736"
  ],
  animals: [
    "https://www.istockphoto.com/photo/group-of-cute-pets-on-white-background-banner-design-gm1445196818-483681301",
    "https://www.istockphoto.com/photo/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-bird-fish-rodent-gm1296353202-389801058",
    "https://www.istockphoto.com/photo/red-eyed-tree-frog-gm108348088-14376031",
    "https://www.istockphoto.com/photo/british-short-hair-cat-and-golden-retriever-gm992637094-268930508",
    "https://www.istockphoto.com/photo/cat-and-dog-sleeping-puppy-and-kitten-sleep-gm1168451046-322634406",
    "https://www.istockphoto.com/photo/red-eyed-tree-frog-smile-gm1049028724-280573845",
    "https://www.istockphoto.com/photo/funny-burrowing-owl-athene-cunicularia-gm964611070-263328370",
    "https://www.istockphoto.com/photo/koala-resting-and-sleeping-on-his-tree-gm530674261-54744072",
    "https://www.istockphoto.com/photo/elephant-and-lion-gm1136053333-302441305",
    "https://www.istockphoto.com/photo/laughing-horse-gm1160791767-317850269"
  ],
  city: [
    "https://www.istockphoto.com/photo/modern-building-in-the-city-with-blue-sky-gm1696781145-538240475",
    "https://www.istockphoto.com/photo/leiden-from-the-sky-at-night-night-gm1131102682-299382833",
    "https://www.istockphoto.com/photo/houston-texas-skyline-gm542727462-97231097",
    "https://www.istockphoto.com/photo/panoramic-skyline-and-modern-commercial-office-buildings-with-empty-road-gm1357883180-431666569",
    "https://www.istockphoto.com/photo/top-down-aerial-view-of-chicago-downtown-urban-grid-with-park-gm1250380933-364669347",
    "https://www.istockphoto.com/photo/modern-building-in-paris-gm1048358188-280419542",
    "https://www.istockphoto.com/photo/crowds-of-people-walking-across-a-busy-crosswalk-at-the-intersection-of-23rd-street-gm1367851585-437988387",
    "https://www.istockphoto.com/video/time-lapse-low-angle-of-tall-corporate-buildings-skyscraper-with-reflection-of-gm1453963806-489751468",
    "https://www.istockphoto.com/video/4k-aerial-view-day-to-night-hyper-lapse-footage-of-above-captain-cook-bridge-with-gm1480282371-508010558",
    "https://www.istockphoto.com/photo/the-city-of-london-skyline-at-night-united-kingdom-gm1312550959-401326148"
  ]
};

// Append images dynamically
Object.keys(categories).forEach(category => {
  const gallery = document.getElementById(category);
  categories[category].forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    gallery.appendChild(img);
  });
});
