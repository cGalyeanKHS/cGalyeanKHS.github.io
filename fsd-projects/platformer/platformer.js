$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "#D0114A"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
    // TODO 2 - Create Platforms
    var color = "#D0114A";
    var color2 = "#9C0D38";
    var color3 = "#B371EA";
    var color4 = "#DDF0FF";
    // createPlatform(x, y, width, height, "color")
    // drawPlatforms(color, x, y, width, height)
    createPlatform(100, 0, 20, 600, color2);
    createPlatform(105, 5, 10, 590, color);
    // platform 1
    createPlatform(400, 650, 100, 90, color2);
    createPlatform(405, 655, 90, 90, color);
    //platform 2
    createPlatform(600, 550, 100, 190, color2);
    createPlatform(605, 555, 90, 190, color);
    // platform 3
    createPlatform(800, 500, 100, 240, color2);
    createPlatform(805, 505, 90, 240, color);
    //platform 4
    createPlatform(1000, 500, 100, 240, color2);
    createPlatform(1005, 505, 90, 240, color);
    //platform 5
    createPlatform(1200, 400, 100, 340, color2);
    createPlatform(1205, 405, 90, 340, color);
    //platform 6
    createPlatform(1050, 280, 50, 20, color2);
    createPlatform(1055, 285, 40, 10, color);
    //platform 7
    createPlatform(800, 280, 50, 20, color2);
    createPlatform(805, 285, 40, 10, color);
    //platform 8
    createPlatform(600, 280, 50, 20, color2);
    createPlatform(605, 285, 40, 10, color);
    //platform 9
    createPlatform(300, 280, 50, 20, color2);
    createPlatform(305, 285, 40, 10, color);
    //platform 10
    createPlatform(120, 250, 50, 20, color2);
    createPlatform(115, 255, 50, 10, color);

    // TODO 3 - Create Collectables
    //colectable 1
    createCollectable("coin3", 125, 205, 0);
    createCollectable("coin2", 1230, 355, 0);
    createCollectable("coin1", 630, 505, 0);

    // TODO 4 - Create Cannons
    createCannon("bottom", 490, 1500);
    createCannon("bottom", 690, 1000);
    createCannon("bottom", 890, 1500);
    createCannon("bottom", 1090, 1000);
    createCannon("bottom", 1290, 1500);
    createCannon("right", 190, 1000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
