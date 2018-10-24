(function borderGenerator() {
    const divBlock = document.querySelector('.block');
    const inputRangeArray = document.querySelectorAll('.inpRange');
  
    function setDataForVisualBlock() {
      const cornersArray = document.querySelectorAll('.corner');
      [...inputRangeArray].forEach((inputRange, index) => {
        if (cornersArray[index].getAttribute('data-corner') === inputRange.id) {
          cornersArray[index].textContent = inputRange.value + 'px';
        }
      });
    }
    function setDataForCopy() {
      const copyTextElement = document.querySelector('.dataValue');
      let copyText = '';
  
      [...inputRangeArray].forEach(inputRange => {
        copyText += inputRange.value + 'px ';
      });
      copyTextElement.textContent = copyText.slice(0, -1) + ';';
    }
  
    document.addEventListener('input', e => {
      const thisInput = e.target;
      const parentRow = thisInput.parentNode.parentNode;
      const inpRangeRow = parentRow.querySelector('.inpRange');
      const isInpText = thisInput.classList.contains('inpText');
      const isInpRange = thisInput.classList.contains('inpRange');
  
      if (isInpText) {
        const maxValue = 150;
        thisInput.value = thisInput.value.replace(/\D/, '');
        thisInput.value = thisInput.value > maxValue ? 10 : thisInput.value;
        inpRangeRow.value = thisInput.value === '' ? 0 : thisInput.value;
      } else if (isInpRange) {
        const inputText = parentRow.querySelector('.inpText');
        inputText.value = thisInput.value;
      }
      //set style visual block
      divBlock.style[inpRangeRow.id] = thisInput.value + 'px';
  
      setDataForVisualBlock();
      setDataForCopy();
    });
  })();