import robotB from "../assets/robot.png";
import robotA from "../assets/hands.png";
import floorImg from "../assets/floor.png";

const images: Record<string, HTMLImageElement> = {
  floor: new Image(),
  player: new Image(),
  playerArms: new Image(),
};

let totalImages = Object.keys(images).length,
  imagesLoaded = 0;

export function loadAssets(): Promise<Record<string, HTMLImageElement>> {
  return new Promise((resolve, reject) => {
    for (let key in images) {
      images[key].onload = () =>
        ++imagesLoaded === totalImages && resolve(images);

      images[key].onerror = reject;
    }

    images.floor.src = floorImg;
    images.player.src = robotB;
    images.playerArms.src = robotA;
  });
}

export default images;
