window.onload = function () {
  function generatePalette() {
    const palette = document.querySelector('#color-palette');

    const blackColorPalette = document.createElement('div');
    blackColorPalette.style.backgroundColor = 'black';
    blackColorPalette.className = 'color selected';
    palette.appendChild(blackColorPalette);

    for (let index = 1; index < 4; index += 1) {
      const colorsPallete = document.createElement('div');
      colorsPallete.className = 'color';
      colorsPallete.style.backgroundColor = generateColor();
      palette.appendChild(colorsPallete);
    }
  }
  generatePalette();

  function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function buttonRandom() {
    const buttonSection = document.getElementById('section-btn-all');
    const btnRandom = document.createElement('button');
    btnRandom.id = 'button-random-color';
    btnRandom.innerText = 'Cores aleatórias';
    buttonSection.appendChild(btnRandom);
    const colorsPallete = document.querySelectorAll('.color');
    btnRandom.addEventListener('click', () => {
      const arrayColors = [];
      for (let index = 0; index < colorsPallete.length; index += 1) {
        if (index !== 0) {
          colorsPallete[index].style.backgroundColor = generateColor();
        } else {
          colorsPallete[index].style.backgroundColor = 'black';
        }
        arrayColors.push(colorsPallete[index].style.backgroundColor);
      }
      localStorage.setItem('colorPalette', JSON.stringify(arrayColors));
    });
  }
  buttonRandom();

  function pixelBoard(sizeBord) {
    const boardPixels = document.querySelector('#pixel-board');

    for (let index = 0; index < sizeBord; index += 1) {
      const lineDiv = document.createElement('div');
      lineDiv.className = 'line';
      boardPixels.appendChild(lineDiv);
      for (let i = 0; i < sizeBord; i += 1) {
        const pixelDiv = document.createElement('div');
        pixelDiv.className = 'pixel';
        lineDiv.appendChild(pixelDiv);
      }
    }

  } pixelBoard(5);

  function selectColor() {
    const palette = document.getElementById('color-palette');
    const colorsPallete = document.querySelectorAll('.color');

    palette.addEventListener('click', (selectedColor) => {
      const selectedColorVar = selectedColor.target;

      if (selectedColorVar.className === 'color') {
        for (let i = 0; i < colorsPallete.length; i += 1) {
          colorsPallete[i].className = 'color';
          selectedColorVar.className = 'color selected';
        }
      } else if (selectedColorVar.className === 'selected color') {
        selectedColorVar.className = 'color';
      }
    });
  } selectColor();

  const boardAll = document.querySelectorAll('.pixel');

  function pixelInk() {
    const pixelBoard = document.getElementById('pixel-board');

    pixelBoard.addEventListener('click', (colorInk) => {
      const inkColor = colorInk.target;
      const color = document.getElementsByClassName('selected')[0];

      if (inkColor.className === 'pixel') {
        inkColor.style.backgroundColor = color.style.backgroundColor;
      }

      const pixelPainted = [];

      for (let index = 0; index < boardAll.length; index += 1) {
        pixelPainted.push(boardAll[index].style.backgroundColor);
      }
      localStorage.setItem('pixelBoard', JSON.stringify(pixelPainted));
    });
  } pixelInk();

  function clearBoard() {
    const buttonSection = document.querySelector('#section-btn-all');
    const clearButton = document.createElement('button');
    clearButton.id = 'clear-board';
    clearButton.innerText = 'Limpar';
    buttonSection.appendChild(clearButton);

    clearButton.addEventListener('click', () => {
      for (let index = 0; index < boardAll.length; index += 1) {
        boardAll[index].style.backgroundColor = 'white';
      }
    });
  } clearBoard();

  function boardSize() {
    const buttonSection = document.getElementById('section-btn-all');
    const input = document.createElement('input');
    input.id = 'board-size';
    input.min = '1';
    input.type = 'number';
    buttonSection.appendChild(input);

    const buttonInput = document.createElement('button');
    buttonInput.id = 'generate-board';
    buttonInput.innerText = 'VQV';
    buttonSection.appendChild(buttonInput);
  } boardSize();

  function resetBoard() {
    const line = document.querySelectorAll('.line');

    for (let index = 0; index < line.length; index += 1) {
      line[index].remove();
    }
  }

  function checkInput() {
    const inputButton = document.querySelector('#generate-board');

    inputButton.addEventListener('click', () => {
      const input = document.querySelector('#board-size');
      if (!input.value) {
        alert('Board Inválido!');
      } else if (input.value < 5) {
        resetBoard();
        pixelBoard(5);
      } else if (input.value > 50) {
        resetBoard();
        pixelBoard(50);
      } else {
        resetBoard();
        pixelBoard(input.value);
      }
      localStorage.setItem('boardSize', JSON.stringify(input.value));
    });
  } checkInput();

  function storagePalette() {
    const arrayColors = JSON.parse(localStorage.getItem('colorPalette'));

    if (arrayColors) {
      const colorsPallete = document.querySelectorAll('.color');

      for (let index = 0; index < colorsPallete.length; index += 1) {
        colorsPallete[index].style.backgroundColor = arrayColors[index];
      }
    }
  } storagePalette();

  function storagePaintedPixels() {
    const pixelPainted = JSON.parse(localStorage.getItem('pixelBoard'));

    if (pixelPainted) {
      for (let index = 0; index < boardAll.length; index += 1) {
        boardAll[index].style.backgroundColor = pixelPainted[index];
      }
    }
  } storagePaintedPixels();

  function storageBoard() {
    const board = JSON.parse(localStorage.getItem('boardSize'));

    if (board !== null) {
      resetBoard();
      pixelBoard(board);
      storagePaintedPixels();
    } else {
      checkInput();
      storagePaintedPixels();
    }
  }
  storageBoard();
};