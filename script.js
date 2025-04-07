function convert() {
    const from = document.getElementById('convertFrom').value;
    const to = document.getElementById('convertTo').value;
    let value = document.getElementById('convertInput').value.trim();
    let decimal;

    try {
      if (from === 'decimal') {
        decimal = parseInt(value, 10);
      } else if (from === 'binary') {
        decimal = parseInt(value, 2);
      } else if (from === 'octal') {
        decimal = parseInt(value, 8);
      } else if (from === 'hex') {
        decimal = parseInt(value, 16);
      }

      if (isNaN(decimal)) {
        throw new Error('Invalid input');
      }

      let result;
      if (to === 'decimal') {
        result = decimal.toString(10);
      } else if (to === 'binary') {
        result = decimal.toString(2);
      } else if (to === 'octal') {
        result = decimal.toString(8);
      } else if (to === 'hex') {
        result = decimal.toString(16).toUpperCase();
      }

      document.getElementById('convertResult').innerText = result;
    } catch (err) {
      document.getElementById('convertResult').innerText = 'Input tidak valid';
    }
  }

  function binaryArithmetic() {
    const bin1 = document.getElementById('bin1').value;
    const bin2 = document.getElementById('bin2').value;
    const op = document.getElementById('binOperator').value;

    try {
      let dec1 = parseInt(bin1, 2);
      let dec2 = parseInt(bin2, 2);

      if (isNaN(dec1) || isNaN(dec2)) {
        throw new Error('Invalid input');
      }

      let result;

      switch(op) {
        case '+': result = dec1 + dec2; break;
        case '-': result = dec1 - dec2; break;
        case '*': result = dec1 * dec2; break;
        case '/':
          if (dec2 === 0) {
            throw new Error('Division by zero');
          }
          result = Math.floor(dec1 / dec2);
          break;
        default: result = 'Error';
      }

      document.getElementById('binaryResult').innerText = result.toString(2);
    } catch (err) {
      document.getElementById('binaryResult').innerText = err.message === 'Division by zero' ?
        'Error: bagi 0' : 'Input tidak valid';
    }
  }

  function octalArithmetic() {
    const oct1 = document.getElementById('oct1').value;
    const oct2 = document.getElementById('oct2').value;
    const op = document.getElementById('octOperator').value;

    try {
      let dec1 = parseInt(oct1, 8);
      let dec2 = parseInt(oct2, 8);

      if (isNaN(dec1) || isNaN(dec2)) {
        throw new Error('Invalid input');
      }

      let result;

      switch(op) {
        case '+': result = dec1 + dec2; break;
        case '-': result = dec1 - dec2; break;
        case '*': result = dec1 * dec2; break;
        case '/':
          if (dec2 === 0) {
            throw new Error('Division by zero');
          }
          result = Math.floor(dec1 / dec2);
          break;
        default: result = 'Error';
      }

      document.getElementById('octalResult').innerText = result.toString(8);
    } catch (err) {
      document.getElementById('octalResult').innerText = err.message === 'Division by zero' ?
        'Error: bagi 0' : 'Input tidak valid';
    }
  }

  function hexArithmetic() {
    const hex1 = document.getElementById('hex1').value;
    const hex2 = document.getElementById('hex2').value;
    const op = document.getElementById('hexOperator').value;

    try {
      let dec1 = parseInt(hex1, 16);
      let dec2 = parseInt(hex2, 16);

      if (isNaN(dec1) || isNaN(dec2)) {
        throw new Error('Invalid input');
      }

      let result;

      switch(op) {
        case '+': result = dec1 + dec2; break;
        case '-': result = dec1 - dec2; break;
        case '*': result = dec1 * dec2; break;
        case '/':
          if (dec2 === 0) {
            throw new Error('Division by zero');
          }
          result = Math.floor(dec1 / dec2);
          break;
        default: result = 'Error';
      }

      document.getElementById('hexResult').innerText = result.toString(16).toUpperCase();
    } catch (err) {
      document.getElementById('hexResult').innerText = err.message === 'Division by zero' ?
        'Error: bagi 0' : 'Input tidak valid';
    }
  }
