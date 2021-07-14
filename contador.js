let letterCounts = {};
  let wordsCounts = {};
  
  //o exercicio ja fornece o código, tarefa = completá-lo
  function divsName(){
     document.getElementById('wordsDiv').innerText = ''
     document.getElementById('lettersDiv').innerText = ''
     typedText = ''
  }
  const button = document.getElementById("countButton");
  button.addEventListener("click", function() {  
    divsName();
     let typedText = document.getElementById("textInput").value;
     typedText = typedText.toLowerCase();
     typedText = typedText.replace(/[^a-z'\s]+/g, "");
     let words = typedText.split(/\s/);
     // Isto muda todas as letras para minúsculas
     // Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos. 
// Iremos aprender mais sobre como usar a função replace numa lição mais à frente.
     for (let i = 0; i < typedText.length; i++) {
      currentLetter = typedText[i];
      // faça algo com cada letra 
      if (letterCounts[currentLetter] === undefined) {
          letterCounts[currentLetter] = 1; 
       } else { 
          letterCounts[currentLetter]++; 
       }
   }
  //contou letras!!! replicar para contar palavras
   for (let i = 0; i < words.length; i++){
     currentWord = words[i]
     // faça algo com cada letra 
     if(wordsCounts[currentWord] === undefined){
        wordsCounts[currentWord] = 1;
    } else {
        wordsCounts[currentWord]++
    }
   }
  //palavras contadas!!! 
  //quantas vezes cada letra apareceu, acrescentar código já deixado no exercício para achar espaços
   for (let letter in letterCounts) { 
      const span = document.createElement("span");
      let textContent = `"${letter}": ${letterCounts[letter]}, `;
      if(letterCounts[letter] === ''){
        textContent = ''
     }
      letterCounts[letter] = ''
      span.innerText = textContent; 
      const letters = document.getElementById("lettersDiv");
      letters.appendChild(span); 
   }
  //quantas vezes cada letra e espaço apareceram!!! replicar para palavras
   for (let word in wordsCounts){
      const span = document.createElement("span");
      let wordsContent = `"${word}": ${wordsCounts[word]}, `;
      if(wordsCounts[word] === ''){
        wordsContent = ''
     }
      wordsCounts[word] = ''
      span.innerText = wordsContent;
      const words = document.getElementById("wordsDiv");
      words.appendChild(span);
    }
});
//quantas vezes cada letra e espaço apareceram!!! retirar minhas anotações.