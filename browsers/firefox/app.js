// random in [min, max]
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

(async ({ baseURL, dataURL, imagesBaseDirectory, dom: { imageID } }) => {
  let data = await fetch(dataURL);
  data = await data.json();
  const { title, source, image } = data[random(0, data.length - 1)];

  document
    .getElementById(imageID)
    .setAttribute("src", `${baseURL}/${imagesBaseDirectory}/${image}`);
})({
  baseURL: "https://callmephilip.com/midwit",
  dataURL: "https://callmephilip.com/midwit/images/index.json",
  imagesBaseDirectory: "images",
  dom: {
    imageID: "image",
  },
});
