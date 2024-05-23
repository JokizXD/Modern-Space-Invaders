class Player {
  constructor() {
    this.velocity = {
      x: 0,
      y: 0
    };
    this.rotation = 0;
    this.opacity = 1;
    const image = new Image();
    image.src = "./images/player.png";
    image.onload = () => {
      const scale = 0.15;
      this.image = image;
      this.width = image.width * scale;
      this.height = image.height * scale;
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height / 2 - this.height / 2
      };
    };
    this.particle = [];
    this.frames = 0;
  }

  draw() {
    c.save();
    c.globalAlpha = this.opacity;
    c.translate(
      player.position.x + player.width / 2,
      player.position.y + player.height / 2
    );
    c.drawImage(
      this.image,
      player.position.x,
      player.position.y,
      player.width,
      player.height
    );
    c.restore();
  }
}