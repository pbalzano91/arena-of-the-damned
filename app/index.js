let app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight, antialias: true });

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

PIXI.utils.sayHello('Using Pixi!');

document.body.appendChild(app.view);

PIXI.loader
  .add([{
    name: "background",
    url: "sand_bg.jpg",
    crossOrigin: false
  }])
  .load(setup);

function setup() {
  let BG = new PIXI.Sprite(PIXI.loader.resources.background.texture);
  app.stage.addChild(BG);
}