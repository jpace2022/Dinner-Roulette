<!DOCTYPE html>
<html>
<head>
  <title>Dinner Roulette</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; margin-top: 100px; }
    #result { font-size: 24px; margin-top: 30px; font-weight: bold; }
    button { padding: 10px 20px; font-size: 18px; }
  </style>
</head>
<body>
  <h1>Dinner Roulette</h1>
  <button onclick="spinWheel()">Spin the Wheel</button>
  <div id="result"></div>

  <script>
    const options = [
      "Italian",
      "Mexican",
      "Thai",
      "Indian",
      "Mediterranean",
      "Comfort Food",
      "Breakfast for Dinner",
      "Vegan/Vegetarian",
      "5-Ingredient Meal",
      "Use What’s in the Fridge"
    ];

    function spinWheel() {
      const randomIndex = Math.floor(Math.random() * options.length);
      const choice = options[randomIndex];
      document.getElementById('result').innerText = "Tonight’s dinner: " + choice;
    }
  </script>
</body>
</html>
