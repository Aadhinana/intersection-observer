const body = document.querySelector("body");

const observer = new IntersectionObserver(handleChanges, { threshold: 0.5 });

const box = document.querySelector("#box");

observer.observe(box);

function handleChanges(entries, observer) {
  console.log(entries);
  console.log(entries[0].intersectionRatio);
  if (entries[0].intersectionRatio != 0) {
    console.log("Observer firing?");
  }
}
