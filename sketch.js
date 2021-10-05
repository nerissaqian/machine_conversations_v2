var slide = -1;
var human;

// FOR INTRO
var intro_text;
var outro_text;

// FOR LANDING
var echo, eris, chiron, theend;
var stars = [];

var echoComplete = false;
var erisComplete = false;
var chironComplete = false;

var chiron_guide;
var echo_guide;
var eris_guide;
var eris_guide2;

// FOR outrotext
var reembark;
var download;

// FOR ECHO
var echo_stage = 1;
var echo_keyCounter = 0;
var echo_tester = 97;

var echo_keyInput = [];
var echo_keyInputX = [];
var echo_keyInputY = [];
var echo_keyOpacity = [];
var echo_keyStyle = [];

var poem01, poem2, poem3, poem4, poem5;
var echo_poem;

var p1_counter = 0;
var p2_counter = 0;
var p3_counter = 0;
var p4_counter = 0;
var p5_counter = 0;


// FOR ERIS
var eris_array1 = ["text", "world", "poetry", "sentence", "sound", "music", "paragraph", "phrase", ""];
var eris_array2 = ["pain", "hurt", "agony", "ache", "sorrow", "grief", "heartache", "burden", ""];
var eris_array3 = ["floating", "tumbling", "drifting", "falling", "plummeting", "crashing", "wandering", "sinking", ""];
var eris_array4 = ["clenched", "gripped", "wedged", "pressed", "clutched", "shattered", "grasped", "held", ""];

var eris_opacity_n;
var eris_n1, eris_n2, eris_n3, eris_n4;

var eris_DarkCounter = 100;
//****** NEWLEY ADDED****
var eris_speechToggle = false;

var eris_select1 = true;
var eris_select2 = false;
var eris_select3 = false;
var eris_select4 = false;

var eris_lock1 = 0;
var eris_lock2 = 0;
var eris_lock3 = 0;
var eris_lock4 = 0;

var eris_stage = 1;
var eris_colour;

// FOR CHIRON
var bootesX = [10, 11, 13, 16, 18, 17, 14, 11];
var bootesY = [14, 16, 18, 19, 18, 16, 17, 16];
var bootes = ["I", "am", "the", "master", "of", "my", "soul."];

var ursaX = [29, 29, 28, 27, 25, 26, 28, 27];
var ursaY = [10, 11, 12, 13, 14, 15, 14, 13];
var ursa = ["I", "am", "the", "stardust", "in", "my", "thoughts."];

var cassX = [31, 33, 34, 36, 36];
var cassY = [6, 6, 8, 7, 9];
var cass = ["and", "I", "hold", "your", "hopes."];

var andX = [33, 36, 38, 40, 39, 37, 34];
var andY = [2, 3, 4, 5, 3, 1, 0];
var and = ["I", "am", "a", "dancer", "for", "the", "stars."];

var leoX = [15, 15, 14, 13, 12, 14, 15, 16, 18, 18];
var leoY = [3, 2, 1, 4, 6, 5, 3, 3, 2, 1];

var leoX = [18, 18, 16, 15, 15, 14, 13, 12, 14, 15];
var leoY = [1, 2, 3, 3, 2, 1, 4, 6, 5, 3];
var leo = ["I", "am", "hiding", "from", "the", "angels", "in", "my", "mind."];

var chiron_name;
var chiron_text;

var chiron_clickcounter = 0;
var chiron_clickcheck = [true];
var chiron_dotColour;

var chiron_textupdown = [];
var chiron_texttester = 0;
var chiron_textDist = [];

var chiron_closestText = [];
var chiron_mouseA = [];
var chiron_mouseB = [];

var chiron_stage = 1;

var chiron_mappedX = [];
var chiron_mappedY = [];

//-------

function preload() {
  intro_text = loadStrings("introtext.txt");
  outro_text = loadStrings("outrotext.txt");

  // FOR ECHO
  poem01 = loadStrings("poem01.txt")
  poem02 = loadStrings("poem02.txt");
  poem03 = loadStrings("poem03.txt");
  poem04 = loadStrings("poem04.txt");
  poem05 = loadStrings("poem05.txt");;

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("mrs-eaves");
  colorMode(HSB, 360, 100, 100, 100);

  for (var i = 0; i < 600; i++) {
    stars.push(new Star());
  }

  echo = new Planet(0);
  eris = new Planet(0);
  chiron = new Planet(0);
  theend = new Planet(0);

  reembark = new Planet(height / 2);
  download = new Planet(height / 2);

  // FOR ERIS
  eris_opacity_n = random(1000);
  eris_n1 = random(1000);
  eris_n2 = random(1000);
  eris_n3 = random(1000);
  eris_n4 = random(1000);
}

function draw() {

  // INTRODUCTION
  if (slide == -1) {
    background(0, 0, 100);
    gridbackground(15, 0.2, 75, 100, height - 300, 100, 100, 30);

    eris.introdisplay();
    eris.move();
    echo.introdisplay();
    echo.move();
    chiron.introdisplay();
    chiron.move();

    textAlign(CENTER, CENTER);
    textStyle(ITALIC);
    fill(0, 0, 0, 40);
    textSize(16);
    text("AN INTRODUCTION TO", width / 2, height / 2 - 150);
    textSize(30);
    text("MACHINE CONVERSATIONS", width / 2, height / 2 - 120);

    fill(0, 0, 0, 20);
    textSize(16);
    text("Note: All poetry presented throughout this experience is machine-generated using GPT-2, an artificial intelligence language model by OpenAI.", width / 2, height - 50);
    text("Graphic and interactive elements are coded using p5.js, a Javascript library for creative coding created by Lauren Lee McCarthy.", width / 2, height - 35);

    for (var i = 0; i < intro_text.length; i++) {
      fill(0, 0, 0, 40);
      textSize(20);
      text(intro_text[i], width / 2, height / 2 - 30 + i * 25);
    }
  }

  // LANDING PAGE
  else if (slide == 0) {
    background(0, 0, 55);
    gridbackground(10, 0.2, 100, 500, height, 400, 0, 0);

    textAlign(CENTER, CENTER);
    textStyle(ITALIC);
    fill(0, 0, 100, 50);
    textSize(20);
    text("click on a circle to explore", width / 2, height - 50);

    // white stars
    for (var i = 0; i < stars.length / 2; i++) {
      stars[i].display(0);
    }
    // coloured stars
    for (var i = stars.length / 2; i < stars.length; i++) {
      stars[i].display(50);
    }

    if (echoComplete == false) echo.hover();
    echo.display("ECHO", "(non)reciprocal");
    echo.move();


    if (erisComplete == false) eris.hover();
    eris.display("(AN)ERIS", "concord & discord");
    eris.move();

    if (chironComplete == false) chiron.hover();
    chiron.display("CHIRON", "instructional");
    chiron.move();

    if (echoComplete == true && erisComplete == true && chironComplete == true) {
      theend.display("THE END", "");
      theend.hover();
      theend.move();
    }
  }

  //echo
  else if (slide == 1) {
    background(0, 0, 0);
    gridbackground(10, 0.1, 100, 100, height, 150, -300, 70);
    for (var i = 0; i < stars.length / 4; i++) {
      stars[i].display(0);
    }

    if (echoComplete == true) echo_stage == 4;

    if (echo_stage == 1) {
      textStyle(ITALIC);
      textAlign(CENTER, CENTER);
      textSize(20);
      fill(0, 0, 60);
      //if (echo_stage == 1)
      text("type into the void", width / 2, height - 50);
      if (echo_keyCounter > 5) {
        echo_guide.guideDisplay(1, "", "Echo, signing on.", "", "I, Echo, observe HUMAN#" + human, "typing nonsense into the void.", "");
        echo_guide.guideMove();
      }

      // fading letters
      for (var i = 0; i < echo_keyOpacity.length; i++) {
        echo_keyOpacity[i] -= 1;
      }
      // reducing arrays
      if (echo_keyOpacity[0] < 0) {
        echo_keyOpacity.splice(0, 1);
        echo_keyInput.splice(0, 1);
        echo_keyInputX.splice(0, 1);
        echo_keyInputY.splice(0, 1);
        echo_keyStyle.splice(0, 1);
      }
      // display letters
      for (var i = 0; i < echo_keyInput.length; i++) {
        fill(0, 0, 100, echo_keyOpacity[i]);
        textStyle(echo_keyStyle[i]);
        text(echo_keyInput[i], echo_keyInputX[i], echo_keyInputY[i]);
      }
    }

    // letters
    else if (echo_stage == 2 || echo_stage == 3) {
      textStyle(ITALIC);
      textAlign(CENTER, CENTER);
      textSize(20);
      fill(0, 0, 60);

      //echo_poem = poem01;
      for (var i = 0; i < echo_poem.length; i++) {
        for (var j = 0; j < echo_poem[i].length; j++) {
          if (/\W/.test(echo_poem[i][j])) {
            textStyle(ITALIC);
            fill(0, 0, 100);
            text(echo_poem[i][j], (j + width / 20) * 10, (i + 11) * 20);
          }
        }
      }

      if (echo_stage == 3) {
        if (echo_keyInput.includes(char(echo_tester))) echo_tester++;
        if (echo_tester == 113) echo_tester++;
        if (echo_poem == poem01) {
          if (echo_tester == 113 || echo_tester == 120) echo_tester++;
        } else if (echo_poem == poem02) {
          if (echo_tester == 106 || echo_tester == 113 || echo_tester == 122) echo_tester++;
        } else if (echo_poem == poem03 || echo_poem == poem04) {
          if (echo_tester == 106 || echo_tester == 113 || echo_tester == 120 || echo_tester == 122) echo_tester++;
        } else if (echo_poem == poem05) {
          if (echo_tester == 106 || echo_tester == 113 || echo_tester == 120) echo_tester++;
        }
        if (echo_tester > 122) echoComplete = true;

        for (var i = 0; i < echo_poem.length; i++) {
          for (var j = 0; j < echo_poem[i].length; j++) {
            for (var k = 0; k < echo_keyInput.length; k++) {
              if (echo_keyInput[k] == echo_poem[i][j].toLowerCase()) {
                fill(0, 0, 100, 60);
                textStyle(ITALIC);
                text(echo_poem[i][j].toLowerCase(), (j + width / 20) * 10, (i + 11) * 20);
              }
            }
          }
        }
      }

      if (echoComplete == false) {
        if (echo_keyInput.length <= 5) {
          echo_guide.guideDisplay(2, "MACHINE has churned through", "nonsensical inputs by HUMAN#" + human, "and generated a poem.", "", "I, Echo, cannot see the poem.", "HUMAN#" + human + " is to provide letters.");
        } else if (echo_keyInput.length > 5) {
          echo_guide.guideDisplay(3, "", "", "HUMAN#" + human + " is revealing the poem.", "I, Echo, am intrigued.", "", "");
        }
        echo_guide.guideMove();
      } else if (echoComplete == true) {
        echo_guide.guideDisplay(4, "", "HUMAN#" + human + " has revealed the poem.", "I, Echo, am awestruck.", "", "Echo, signing off.");
        echo_guide.guideMove();
        echo_guide.guidehover();
        text("click on the circle to return home", width / 2, height - 50);
      }
    }
  }
  //eris
  else if (slide == 2) {
    background(0, 0, 0);
    //  gridbackground(10, 0.1, 100, 300, 100, 500, -300, 50);
    for (var i = 0; i < stars.length / 2; i++) {
      stars[i].display(0);
    }

    var opacity = map(noise(eris_opacity_n), 0, 1, -10, 200);

    if (eris_stage == 1) {
      if (mouseX - pmouseX > width / 3.5 || mouseX - pmouseX < -(width / 3.5) ||
        mouseY - pmouseY > height / 3.5 || mouseY - pmouseY < -(height / 3.5)) eris_stage = 2;

      eris_opacity_n += 0.1;
      eris_n1 += 0.03;
      eris_n2 += 0.03;
      eris_n3 += 0.03;
      eris_n4 += 0.03;

      var arrayChoose = map(noise(eris_n1), 0, 1, 0, eris_array1.length);
      var arrayChoose2 = map(noise(eris_n2), 0, 1, 0, eris_array2.length);
      var arrayChoose3 = map(noise(eris_n3), 0, 1, 0, eris_array3.length);
      var arrayChoose4 = map(noise(eris_n4), 0, 1, 0, eris_array4.length);

      textStyle(NORMAL);
      textAlign(LEFT, CENTER);
      textSize(20);

      fill(0, 0, 255, opacity);



      text("i feel like i'm " + eris_array3[int(arrayChoose3)] + " through space,", width / 2 - 225, height / 2 - 175);
      text("between the pressure of two thumbs.", width / 2 - 225, height / 2 - 150);
      text("the " + eris_array1[int(arrayChoose)] + " is a blur—", width / 2 - 175, height / 2 - 125);
      text("the void bewteen my fingers—", width / 2 - 175, height / 2 - 100);

      text("a blur that obscures", width / 2 - 125, height / 2 + 50);
      text("like a sheet of ice " + eris_array4[int(arrayChoose4)], width / 2 - 75, height / 2 + 75);
      text("that is still present in me.", width / 2 - 75, height / 2 + 100);
      text("the " + eris_array2[int(arrayChoose2)] + " and suffering", width / 2 - 75, height / 2 + 125);

      if (eris_DarkCounter < 10) eris_speechToggle = true;
      //  if (eris_speechToggle == true) {
      eris_guide.guideDisplay(1, "Eris, signing on.", "", "MACHINE is attempting, poorly,", "to generate poetry. HUMAN#" + human + " is", "experiencing reading difficulties.", "Haha, Eris is amused.");
      eris_guide.guideMove()
      //  }

      if (eris_DarkCounter < 100) eris_DarkCounter += 1;
      background(0, 0, 0, eris_DarkCounter);
      gridbackground(10, 0.1, 100, 300, 100, 500, -300, 50);
      if (eris_DarkCounter >= 95) {
        textStyle(ITALIC);
        textAlign(CENTER, CENTER);
        fill(0, 0, 60);
        text("move mouse to wake", width / 2, height - 50);

        if (eris_speechToggle == true) {
          eris_guide2.anerisDisplay("", "Do not mind my sister, I am Aneris.", "Try larger and faster mouse movements", "when you are ready to proceed.");
          eris_guide2.guideMove();
        }
      }

    } else if (eris_stage == 2) {
      gridbackground(10, 0.1, 100, 300, 100, 500, -300, 50);
      eris_opacity_n += 0.03;

      textStyle(NORMAL);
      textAlign(LEFT, CENTER);
      if (eris_select1 == true) {
        fill(eris_colour, 40, 100);
        var leftRight = int(map(mouseX, 0, width, 0, eris_array3.length - 1));
        text("i feel like i'm " + eris_array3[leftRight] + " through space,", width / 2 - 225, height / 2 - 175);
        eris_lock3 = leftRight;
      } else {
        fill(255, opacity);
        text("i feel like i'm " + eris_array3[eris_lock3] + " through space,", width / 2 - 225, height / 2 - 175);
      }

      fill(255, opacity);
      text("between the pressure of two thumbs.", width / 2 - 225, height / 2 - 150);

      if (eris_select2 == true) {
        fill(eris_colour, 40, 100);
        var leftRight = int(map(mouseX, 0, width, 0, eris_array1.length - 1));
        text("the " + eris_array1[leftRight] + " is a blur—", width / 2 - 175, height / 2 - 125);
        eris_lock1 = leftRight;
      } else {
        fill(255, opacity);
        text("the " + eris_array1[eris_lock1] + " is a blur—", width / 2 - 175, height / 2 - 125);
      }

      fill(255, opacity);
      text("the void bewteen my fingers—", width / 2 - 175, height / 2 - 100);

      if (eris_select3 == true) {
        fill(eris_colour, 40, 100);
        var leftRight = int(map(mouseX, 0, width, 0, eris_array4.length - 1));
        text("like a sheet of ice " + eris_array4[leftRight], width / 2 - 75, height / 2 + 75);
        eris_lock4 = leftRight;
      } else {
        fill(255, opacity);
        text("like a sheet of ice " + eris_array4[eris_lock4], width / 2 - 75, height / 2 + 75);
      }

      fill(255, opacity);
      text("a blur that obscures", width / 2 - 125, height / 2 + 50);

      if (eris_select4 == true) {
        fill(eris_colour, 40, 100);
        var leftRight = int(map(mouseX, 0, width, 0, eris_array2.length - 1));
        text("the " + eris_array2[leftRight] + " and suffering", width / 2 - 75, height / 2 + 125);
        eris_lock2 = leftRight
      } else {
        fill(255, opacity);
        text("the " + eris_array2[eris_lock2] + " and suffering", width / 2 - 75, height / 2 + 125);
      }

      fill(255, opacity);
      text("that is still present in me.", width / 2 - 75, height / 2 + 100);

      eris_guide2.anerisDisplay("Move the mouse up & down to select a line,", "then left & right to select a word.", "", "Click anywhere when you are finished editing.");
      eris_guide2.guideMove();

      //    guide.guideDisplay(2, "", "HUMAN#" + human + " has calmed the machine", "monster. They must be a hacker.", "", "Perform background check.", "");
      eris_guide.guideDisplay(2, "", "HUMAN#" + human + " is editing the machine poem.", "", "Eris is pleasantly surprised by", "their literary prowess.", "");
      eris_guide.guideMove();
    } else if (eris_stage == 3) {
      eris_opacity_n += 0.03;

      textStyle(ITALIC);
      textAlign(CENTER, CENTER);
      fill(0, 0, 60);
      text("click on the circle to return home", width / 2, height - 50);


      textStyle(NORMAL);
      textAlign(LEFT, CENTER);
      fill(255, opacity);
      text("the " + eris_array1[int(eris_lock1)] + " is a blur—", width / 2 - 225, height / 2 - 175);
      text("a blur that obscures", width / 2 - 225, height / 2 - 150);
      text("the " + eris_array2[int(eris_lock2)] + " and suffering", width / 2 - 175, height / 2 - 125);
      text("that is still present in me.", width / 2 - 175, height / 2 - 100);

      text("i feel like i'm " + eris_array3[int(eris_lock3)] + " through space,", width / 2 - 125, height / 2 + 50);
      text("the void bewteen my fingers—", width / 2 - 75, height / 2 + 75);
      text("like a sheet of ice " + eris_array4[int(eris_lock4)], width / 2 - 75, height / 2 + 100);
      text("between the pressure of two thumbs.", width / 2 - 75, height / 2 + 125);

      eris_guide.guideDisplay(3, "A-HA! MACHINE has shuffled", "all of HUMAN#" + human + "’s hard work.", "Poem has been re-stacked.", "Eris is delighted!", "", "Eris, gleefully signing off.");
      eris_guide.guideMove();
      eris_guide.guidehover();

      if (eris_DarkCounter < 100) eris_DarkCounter += 0.5;
      background(0, 0, 0, eris_DarkCounter);
      gridbackground(10, 0.1, 100, 300, 100, 500, -300, 50);
      if (eris_DarkCounter > 95) {
        textStyle(ITALIC);
        textAlign(CENTER, CENTER);
        fill(0, 0, 60);
        text("move mouse to wake", width / 2, height - 50);

        eris_guide2.anerisDisplay("", "Thank you,", "for your help.", "");
        eris_guide2.guideMove();
      }

      erisComplete = true;

    }
  }
  //chiron
  else if (slide == 3) {
    background(0, 0, 0);
    gridbackground(15, 0.2, 100, 0, height, 150, -90, 200);
    for (var i = 0; i < stars.length / 2; i++) {
      stars[i].display(0);
    }

    if (chironComplete == true) chiron_stage == 4;

    constellation();

    if (chiron_stage == 1) {
      textStyle(ITALIC);
      textAlign(CENTER, CENTER);
      textSize(20);
      fill(0, 0, 60);
      text("click on the coloured dots as they appear", width / 2, height - 50);
      if (chiron_clickcounter > 1) {
        chiron_guide.guideDisplay(1, "", "Chiron, signing on.", "", "HUMAN#" + human + " is happily following", "machine instructions. Like a sheep.", "");
        chiron_guide.guideMove();
      }

    } else if (chiron_stage == 2) {
      textStyle(NORMAL);
      textAlign(CENTER, CENTER);
      textSize(20);
      fill(0, 0, 100);
      text(chiron_name, width / 2, 150);

      chiron_guide.guideDisplay(2, "HUMAN#" + human + " has discovered", "the " + chiron_name + " constellation!", "", "I await patiently for", "HUMAN#" + human + " to exhibit some", "autonomous decision-making.");
      chiron_guide.guideMove();

    } else if (chiron_stage == 3) {

      if (chiron_mouseA.length < 5) {
        chiron_guide.guideDisplay(3, "", "", "I am pleased to record that", "HUMAN#" + human + " is not, in fact, a sheep.", "", "");
      } else {
        chiron_guide.guideDisplay(4, "", "HUMAN#" + human + " continues their search", "for the remaining lost words,", "as MACHINE attempts to complete", "the lost story.", "");
      }
      chiron_guide.guideMove();

      textStyle(ITALIC);
      textAlign(CENTER, CENTER);
      textSize(20);
      fill(0, 0, 100);

      for (var i = 0; i < chiron_closestText.length; i++) {
        text(chiron_text[chiron_closestText[i]], chiron_mouseA[i], chiron_mouseB[i]);
      }

      if (chiron_closestText.includes(chiron_texttester)) chiron_texttester++;
      if (chiron_texttester == chiron_text.length) chiron_stage = 4;
    } else if (chiron_stage == 4) {

      chiron_guide.guideDisplay(5, "HUMAN#" + human + " has found all lost words", "for MACHINE to complete the lost story.", "", "I am deeply moved.", "", "Chiron, signing off.");
      chiron_guide.guideMove();


      for (var i = 0; i < chiron_mappedY.length; i++) {
        if (chiron_mappedY[i] > height / 2 + 5) {
          chiron_mappedY[i] -= 1
        } else if (chiron_mappedY[i] < height / 2 - 5) {
          chiron_mappedY[i] += 1
        }
      }

      for (var i = 0; i < chiron_mappedX.length; i++) {
        if (chiron_mappedX[i] > width / (chiron_mappedX.length + 1) * (i + 1) + 5) {
          chiron_mappedX[i] -= 1
        } else if (chiron_mappedX[i] < width / (chiron_mappedX.length + 1) * (i + 1) - 5) {
          chiron_mappedX[i] += 1
        }
      }

      textStyle(ITALIC);
      textAlign(CENTER, CENTER);
      textSize(20);
      fill(0, 0, 100);

      for (var i = 0; i < chiron_closestText.length; i++) {
        if (chiron_textupdown[i] < 0.5) {
          text(chiron_text[chiron_closestText[i]], chiron_mappedX[chiron_closestText[i]],
            chiron_mappedY[chiron_closestText[i]] + chiron_textDist[i]);
        } else {
          text(chiron_text[chiron_closestText[i]], chiron_mappedX[chiron_closestText[i]],
            chiron_mappedY[chiron_closestText[i]] - chiron_textDist[i]);
        }
      }

      //    console.log(chiron_mappedX[0], width / (chiron_mappedX.length + 2));

      if (chiron_mappedX[0] <= width / (chiron_mappedX.length + 1) + 5 &&
        chiron_mappedX[0] >= width / (chiron_mappedX.length + 1) - 5) {
        chironComplete = true;
        textStyle(ITALIC);
        textAlign(CENTER, CENTER);
        textSize(20);
        fill(0, 0, 60);
        text("click on the circle to return home", width / 2, height - 50);
        chiron_guide.guidehover();
      }
    }

  }

  // THE END
  else if (slide == 4 || slide == 5) {

    if (slide == 5) {
      var image = createCanvas(width, height);
      image.background(0, 0, 0);
      for (var i = 0; i < stars.length / 2; i++) {
        stars[i].display(0);
      }
      gridbackground(15, 0.2, 75, 100, height - 300, 100, 100, 30);
      textFont("mrs-eaves");

      noStroke();
      for (var i = 0; i < 10; i++) {
        fill(0, 0, 90, i + 8);
        ellipse(150, 180, 200 - i * 3);
      }
      for (var i = 0; i < 10; i++) {
        fill(0, 0, 90, i + 8);
        ellipse(240, 350, 300 - i * 3);
      }

      for (var i = 0; i < 10; i++) {
        fill(0, 0, 90, i + 8);
        ellipse(width - 175, height - 250, 250 - i * 3);
      }
      var x1 = random(width / 2, width - 25);
      var y1 = random(25, height - 25);
      var d1 = random(50, 100);
      var x2 = random(width / 2, width - 25);
      var y2 = random(25, height - 25);
      var d2 = random(50, 100);

      for (var i = 0; i < 10; i++) {
        fill(0, 0, 90, i + 8);
        ellipse(x1, y1, d1 - i * 3);
      }
      for (var i = 0; i < 10; i++) {
        fill(0, 0, 90, i + 8);
        ellipse(x2, y2, d2 - i * 3);
      }

      textStyle(ITALIC);
      textAlign(CENTER, CENTER);
      textSize(18);
      fill(0, 0, 100);
      text("Dearest HUMAN#" + human + ",", 150, 180);
      text("Thank you for contributing your wonderful", 240, 350 - 10);
      text("human-ness to these collaborative", 240, 350 + 10);
      text("machine conversations.", 240, 350 + 30);
      // text("In reciprocity, we offer you", 250, 350 + 10)
      // text("the wonderful poetry you helped", 250, 350 + 30 )
      // text("to discover and create.", 250, 350 + 50 )
      text("With great appreciation", width - 175, height - 270);
      text("and kindest regards,", width - 175, height - 250);
      text("Echo, (An)Eris, & Chiron.", width - 175, height - 230);


      //echo
      for (var i = 0; i < echo_poem.length; i++) {
        for (var j = 0; j < echo_poem[i].length; j++) {
          for (var k = 0; k < echo_keyInput.length; k++) {
            if (echo_keyInput[k] == echo_poem[i][j].toLowerCase()) {
              fill(0, 0, 100, 60);
              textSize(20);
              textStyle(ITALIC);
              text(echo_poem[i][j].toLowerCase(), (j + width * 1 / 30) * 10, (i + 7) * 20);
            }
          }
        }
      }

      // eris
      textStyle(NORMAL);
      textAlign(LEFT, CENTER);
      textSize(20);
      fill(255, 90);
      text("the " + eris_array1[int(eris_lock1)] + " is a blur—", width * 2 / 3 - 100, 140);
      text("a blur that obscures", width * 2 / 3 - 100, 165);
      text("the " + eris_array2[int(eris_lock2)] + " and suffering", width * 2 / 3 - 50, 190);
      text("that is still present in me.", width * 2 / 3 - 50, 215);

      text("i feel like i'm " + eris_array3[int(eris_lock3)] + " through space,", width * 2 / 3, 315);
      text("the void bewteen my fingers—", width * 2 / 3 + 50, 340);
      text("like a sheet of ice " + eris_array4[int(eris_lock4)], width * 2 / 3 + 50, 365);
      text("between the pressure of two thumbs.", width * 2 / 3 + 50, 395);

      // CHIRON
      for (var i = 0; i < chiron_mappedY.length; i++) {
        chiron_mappedY[i] = height - 150 + random(-5, 5);
      }

      for (var i = 0; i < chiron_mappedX.length; i++) {
        chiron_mappedX[i] = width / (chiron_mappedX.length + 2) * (i + 1) + random(-5, 5);
      }

      constellation();
      fill(0, 0, 100, 90);
      textStyle(ITALIC);
      textAlign(CENTER, CENTER);
      textSize(20);

      for (var i = 0; i < chiron_closestText.length; i++) {
        if (chiron_textupdown[i] < 0.5) {
          text(chiron_text[chiron_closestText[i]], chiron_mappedX[chiron_closestText[i]],
            chiron_mappedY[chiron_closestText[i]] + chiron_textDist[i]);
        } else {
          text(chiron_text[chiron_closestText[i]], chiron_mappedX[chiron_closestText[i]],
            chiron_mappedY[chiron_closestText[i]] - chiron_textDist[i]);
        }
      }
      save(image, "machine_conversations-" + year() + "_" + month() + "_" + day() + "-" + hour() + "_" + minute());
      slide = 4;
    }

    background(0, 0, 100);
    gridbackground(15, 0.2, 75, 100, height - 300, 100, 100, 30);

    reembark.display("re-embark", "");
    reembark.hover();
    reembark.move();

    download.display("download poetry", "");
    download.hover();
    download.move();

    textAlign(CENTER, CENTER);
    textStyle(ITALIC);
    fill(0, 0, 0, 40);
    textSize(30);
    text("THANK YOU", width / 2, 200);

    textAlign(CENTER, CENTER);
    textStyle(ITALIC);
    fill(0, 0, 0, 40);

    for (var i = 0; i < outro_text.length; i++) {
      textSize(20);
      text(outro_text[i], width / 2, 275 + i * 25);
    }
  }
}

//------ interactions ------

function mousePressed() {
  if (slide == -1) {
    resetvariables();
    slide++
  } else if (slide == 0) {
    //if (echoComplete == false)
    echo.clicked(1);
    eris.clicked(2);
    chiron.clicked(3);
    if (echoComplete == true && erisComplete == true && chironComplete == true) theend.clicked(4);
  } else if (slide == 1) {
    if (echoComplete == true) echo_guide.clicked(0);
  } else if (slide == 2) {
    if (eris_stage == 2) {
      eris_DarkCounter = 0;
      eris_stage++;
    }
    if (erisComplete == true) eris_guide.clicked(0);
  } else if (slide == 3) {
    if (chiron_stage == 2) chiron_stage++;
    if (chironComplete == true) chiron_guide.clicked(0);
  } else if (slide == 4) {
    reembark.clicked(-1);
    download.clicked(5);
  }

}

function mouseMoved() {
  if (slide == 2) {
    if (eris_stage == 1 || eris_stage == 3) {
      if (eris_DarkCounter > 0) {
        eris_DarkCounter -= 5;
      } else {
        eris_DarkCounter = 0;
      }
    }

    var upDown = map(mouseY, 0, height, 0, 1);
    if (upDown <= 0.25) {
      eris_select1 = true;
      eris_select2 = false;
      eris_select3 = false;
      eris_select4 = false;
    } else if (upDown > 0.25 && upDown <= 0.5) {
      eris_select1 = false;
      eris_select2 = true;
      eris_select3 = false;
      eris_select4 = false;
    } else if (upDown > 0.5 && upDown <= 0.75) {
      eris_select1 = false;
      eris_select2 = false;
      eris_select3 = true;
      eris_select4 = false;
    } else if (upDown > 0.75) {
      eris_select1 = false;
      eris_select2 = false;
      eris_select3 = false;
      eris_select4 = true;
    }
  }
}


function keyTyped() {
  if (keyCode != 27) {
    if (slide == 1) {
      if (echo_stage == 1) {
        echo_keyCounter++;
        echo_keyInput.push(key);
        echo_keyInputX.push(random(width));
        echo_keyInputY.push(random(height));
        echo_keyOpacity.push(255);
        var choose = random(1);
        if (choose < 0.5) {
          echo_keyStyle.push(ITALIC);
        } else {
          echo_keyStyle.push(NORMAL);
        }
        p1_counter += echo_counting(0, poem01);
        p2_counter += echo_counting(0, poem02);
        p3_counter += echo_counting(0, poem03);
        p4_counter += echo_counting(0, poem04);
        p5_counter += echo_counting(0, poem05);

        var sum = p1_counter + p2_counter + p3_counter + p4_counter + p5_counter;
        var p1 = p1_counter / join(poem01, "").length;
        var p2 = p2_counter / join(poem02, "").length;
        var p3 = p3_counter / join(poem03, "").length;
        var p4 = p4_counter / join(poem04, "").length;
        var p5 = p5_counter / join(poem05, "").length;

        if (sum > 1000) {
          if (p1 > p2 && p1 > p3 && p1 > p4 && p1 > p5) {
            echo_poem = poem01;
          } else if (p2 > p1 && p2 > p3 && p2 > p4 && p2 > p5) {
            echo_poem = poem02;
          } else if (p3 > p2 && p3 > p1 && p3 > p4 && p3 > p5) {
            echo_poem = poem03;
          } else if (p4 > p2 && p4 > p3 && p4 > p1 && p4 > p5) {
            echo_poem = poem04;
          } else if (p5 > p2 && p5 > p3 && p5 > p4 && p5 > p1) {
            echo_poem = poem05;
          }
          echo_stage = 2;
        }
      } else if (echo_stage == 2) {
        echo_keyInput = [];
        echo_stage = 3;
      } else if (echo_stage == 3) {
        echo_keyInput.push(key.toLowerCase());
      }
    }
  }
}

function mouseReleased() {
  if (slide == 3) {
    if (chiron_stage == 1) {
      if (dist(mouseX, mouseY, chiron_mappedX[chiron_clickcounter], chiron_mappedY[chiron_clickcounter]) < 15) {
        chiron_clickcheck.push(true);
        chiron_clickcounter += 1;
        if (chiron_clickcounter == chiron_mappedX.length) chiron_stage++;
      }

    } else if (chiron_stage == 3) {
      var distanceArray = [];
      for (var i = 0; i < chiron_mappedX.length; i++) {
        var distance = dist(mouseX, mouseY, chiron_mappedX[i], chiron_mappedY[i]);
        //  if (distance > 15) \
        distanceArray.push(distance);
      }
      chiron_closestText.push(
        distanceArray.indexOf(Math.min.apply(Math, distanceArray))
      );

      chiron_textDist.push(Math.min.apply(Math, distanceArray));
      chiron_mouseA.push(mouseX);
      chiron_mouseB.push(mouseY);
      chiron_textupdown.push(random(1));
    }
  }
}


// to esc to main screen
function keyPressed() {
  if (keyCode == 27) {
    echoComplete = true;
    erisComplete = true;
    chironComplete = true;
  };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ----- subroutines -------

function gridbackground(gaps, thick, colour, pos1, pos2, pos3, l1, l2) {
  for (var i = 0; i < width; i += gaps) {
    stroke(0, 0, 75);
    strokeWeight(thick);
    line(i, 0, i, height);
  }
  for (var j = 0; j < height; j += gaps) {
    line(0, j, width, j);
  }

  noFill();
  stroke(0, 0, colour);
  ellipse(width - pos1, 200, 450);
  ellipse(100, pos2, 300);
  ellipse(100, height - pos3, 150);
  line(width / 2 - l1, 100, width, 100);
  line(width - 100, 0, width - 100, height - l2);
  line(100, height / 2 - 200, 100, height);
  line(0, height - 100, width / 2 - 200, height - 100);
}

function resetvariables() {
  echoComplete = false;
  erisComplete = false;
  chironComplete = false;
  human = int(random(10000, 99999));

  chiron_guide = new Planet(0, "", "");;
  echo_guide = new Planet(0, "", "");
  eris_guide = new Planet(0, "", "");
  eris_guide2 = new Planet(0, "", "");


  // FOR ECHO
  echo_stage = 1;
  echo_keyCounter = 0;
  echo_tester = 97;
  echo_end = false;

  echo_keyInput = [];
  echo_keyInputX = [];
  echo_keyInputY = [];
  echo_keyOpacity = [];
  echo_keyStyle = [];

  echo_poem = "";

  p1_counter = 0;
  p2_counter = 0;
  p3_counter = 0;
  p4_counter = 0;
  p5_counter = 0;

  // FOR ERIS
  eris_opacity_n;

  eris_DarkCounter = 100;
  eris_speechToggle = false;

  eris_select1 = true;
  eris_select2 = false;
  eris_select3 = false;
  eris_select4 = false;

  eris_lock1 = 0;
  eris_lock2 = 0;
  eris_lock3 = 0;
  eris_lock4 = 0;

  eris_stage = 1;
  eris_colour = random(150, 325);


  // FOR CHIRON
  chiron_clickcounter = 0;
  chiron_clickcheck = [true];
  chiron_dotColour = random(150, 325);

  chiron_textupdown = [];
  chiron_texttester = 0;
  chiron_textDist = [];

  chiron_closestText = [];
  chiron_mouseA = [];
  chiron_mouseB = [];

  chiron_stage = 1;

  chiron_mappedX = [];
  chiron_mappedY = [];

  var r = random(1);

  if (r < 0.2) {
    mapCoords(bootesX, bootesY);
    chiron_name = "Boötes";
    chiron_text = bootes;
  } else if (r >= 0.2 && r < 0.4) {
    mapCoords(ursaX, ursaY);
    chiron_name = "Ursa Minor";
    chiron_text = ursa;
  } else if (r >= 0.4 && r < 0.6) {
    mapCoords(cassX, cassY);
    chiron_name = "Cassiopeia";
    chiron_text = cass;
  } else if (r >= 0.6 && r < 0.8) {
    mapCoords(andX, andY);
    chiron_name = "Andromeda";
    chiron_text = and;
  } else if (r > 0.8) {
    mapCoords(leoX, leoY);
    chiron_name = "Leo";
    chiron_text = leo;
  }
}

// FOR ECHO
function echo_counting(x, poem) {
  for (var i = 0; i < poem.length; i++) {
    for (var j = 0; j < poem[i].length; j++) {
      if (key.toLowerCase() == poem[i][j].toLowerCase()) {
        x++;
      }
    }
  }
  return x;
}

// FOR CHIRON
function mapCoords(arrayX, arrayY) {
  for (var i = 0; i < arrayX.length; i++) {
    chiron_mappedX.push(
      map(
        arrayX[i],
        Math.min.apply(Math, arrayX),
        Math.max.apply(Math, arrayX),
        width / 2 - 200,
        width / 2 + 200
      )
    );
    chiron_mappedY.push(
      map(
        arrayY[i],
        Math.min.apply(Math, arrayY),
        Math.max.apply(Math, arrayY),
        height / 2 + 250,
        height / 2 - 150
      )
    );
  }
}

function constellation() {
  for (var i = 0; i < chiron_mappedX.length; i++) {
    if (chiron_clickcheck[i] == true) {
      if (i > 0) {
        stroke(255, 80);
        strokeWeight(1);
        line(chiron_mappedX[i], chiron_mappedY[i], chiron_mappedX[i - 1], chiron_mappedY[i - 1]);
      }

      if (chiron_clickcounter == i && chiron_stage == 1) {
        fill(chiron_dotColour, 40, 100);
      } else {
        fill(0, 0, 100);
      }
      noStroke();
      ellipse(chiron_mappedX[i], chiron_mappedY[i], 9, 9);

    }
  }
}


//----- OBJECTS -------

class Planet {
  constructor(heigh) {
    this.d = random(300, 500);
    this.dsmall = 320;
    this.x = random(this.d / 2, width - this.d / 2);
    this.y = random(this.d / 2 + heigh, height - this.d / 2);

    //  this.title = title;
    //  this.description = description;

    this.spx = random(0.3, 1);
    this.spy = random(0.3, 1);

    this.hue = random(150, 325);
    this.sat = 0;
    this.textbright = 50;

  }

  clicked(x) {
    if (dist(mouseX, mouseY, this.x, this.y) < this.d / 2) {
      slide = x;
    }
  }

  hover() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.d / 2) {
      this.sat = 25;
      this.textbright = 100;
    } else {
      this.sat = 0;
      this.textbright = 50;
    }
  }

  move() {
    this.x += this.spx;
    this.y += this.spy;
    if (this.x >= (width - this.d / 2) || this.x <= this.d / 2) this.spx *= -1;
    if (this.y >= (height - this.d / 2) || this.y <= this.d / 2) this.spy *= -1;
  }

  display(title, description) {
    noStroke();
    for (var i = 0; i < 10; i++) {
      fill(this.hue, this.sat, 90, i + 8);
      ellipse(this.x, this.y, this.d - i * 3);
    }

    textSize(20);
    textAlign(CENTER, CENTER);
    textStyle(ITALIC);
    fill(0, 0, this.textbright, 75);
    text(title, this.x, this.y);
    text(description, this.x, this.y + 25);
  }

  introdisplay() {
    noStroke();
    for (var i = 0; i < 7; i++) {
      fill(this.hue, 25, 90, i + 0.1);
      ellipse(this.x, this.y, this.d - i * 3);
    }
  }

  guidehover() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.dsmall / 2) {
      this.sat = 25;
      this.textbright = 100;
    } else {
      this.sat = 0;
      this.textbright = 50;
    }
  }

  guideMove() {
    this.x += this.spx;
    this.y += this.spy;
    if (this.x >= (width - this.dsmall / 2) || this.x <= this.dsmall / 2) this.spx *= -1;
    if (this.y >= (height - this.dsmall / 2) || this.y <= this.dsmall / 2) this.spy *= -1;
  }

  guideDisplay(number, info1, info2, info3, info4, info5, info6) {
    noStroke();
    for (var i = 0; i < 10; i++) {
      fill(this.hue, this.sat, 90, i + 3);
      ellipse(this.x, this.y, this.dsmall - i * 3);
    }

    var hr, min, sec;

    if (hour() < 10) {
      hr = "0" + hour();
    } else {
      hr = hour();
    }

    if (minute() < 10) {
      min = "0" + minute();
    } else {
      min = minute();
    }

    if (second() < 10) {
      sec = "0" + second();
    } else {
      sec = second();
    }


    textSize(18);
    textAlign(CENTER, CENTER);
    textStyle(ITALIC);
    fill(0, 0, 90, 75);
    text("Entry #0" + number, this.x, this.y - 80);
    text(hr + ":" + min + ":" + sec, this.x, this.y - 60);
    // - 40 is the gap
    text(info1, this.x, this.y - 20);
    text(info2, this.x, this.y);
    text(info3, this.x, this.y + 20);
    text(info4, this.x, this.y + 40);
    text(info5, this.x, this.y + 60);
    text(info6, this.x, this.y + 80);
  }

  anerisDisplay(info1, info2, info3, info4) {
    noStroke();
    for (var i = 0; i < 10; i++) {
      fill(this.hue, 10, 90, i + 6);
      ellipse(this.x, this.y, this.dsmall - i * 3);
    }


    textSize(18);
    textAlign(CENTER, CENTER);
    textStyle(ITALIC);
    fill(0, 0, 100, 75);
    text(info1, this.x, this.y - 30);
    text(info2, this.x, this.y - 10);
    text(info3, this.x, this.y + 10);
    text(info4, this.x, this.y + 30);
  }
}


class Star {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.d = random(0.3, 1.5);

    this.n = random(1000);
    this.n2 = random(1000);
    this.hue = random(366);
    this.sat = 0;
  }

  display(saturation) {
    this.n += 0.01;
    this.n2 += 0.01;
    fill(this.hue, saturation, 100);
    ellipse(map(noise(this.n), 0, 1, this.x - 10, this.x + 10), map(noise(this.n2), 0, 1, this.y - 10, this.y + 10), this.d);
  }
}
