
function conversorCelsius(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFarenheit").innerHTML = (valNum*1.8) + 32;
    document.getElementById("outputKelvin").innerHTML = valNum+273.15;
  }
  