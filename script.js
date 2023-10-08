document.getElementById("start").addEventListener("click", function() {
    var text = document.getElementById("text").innerHTML.trim();
    var input = document.getElementById("input").value.trim();
  
    if (input === "") {
      alert("Пожалуйста, введите текст");
      return;
    }
  
    var words = text.split(" ");
    var inputWords = input.split(" ");
  
    var correctWords = 0;
    for (var i = 0; i < words.length; i++) {
      if (words[i] === inputWords[i]) {
        correctWords++;
      }
    }
  
    var accuracy = (correctWords / words.length) * 100;
    var speed = (words.length / 5) / 1; // Предполагаем, что в среднем человек набирает 1 слово за 5 секунд
  
    var result = "Точность: " + accuracy.toFixed(2) + "%\n";
    result += "Скорость: " + speed.toFixed(2) + " слов в минуту";
  
    document.getElementById("result").innerHTML = result;
  });
  