// Celsius to Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
    
}

// Kelvin to Celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Celsius to Rankine
function celsiusToRankine(celsius) {
    return (celsius / 1.8) + 491.67;
}

// Rankine to Celsius
function rankineToCelsius(rankine) {
    return (rankine - 491.67) / 1.8;
}

// Celsius to Réaumur
function celsiusToReaumur(celsius) {
    return celsius * 4/5;
}

// Réaumur to Celsius
function reaumurToCelsius(reaumur) {
    return reaumur * 5/4;
}

// Kelvin to Réaumur
function kelvinToReaumur(kelvin) {
    return (kelvin - 273.15) * 0.8;
}

// Réaumur to Kelvin
function reaumurToKelvin(reaumur) {
    return (reaumur * 1.25) + 273.15;
}

// Kelvin to Rankine
function kelvinToRankine(kelvin) {
    return kelvin * 1.8;
}

// Rankine to Kelvin
function rankineToKelvin(rankine) {
    return rankine / 1.8;
}

// Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

// Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

// Fahrenheit to Réaumur
function fahrenheitToReaumur(fahrenheit) {
    return (fahrenheit - 32) * 4/9;
}

// Réaumur to Fahrenheit
function reaumurToFahrenheit(reaumur) {
    return (reaumur * 9/4) + 32;
}

// Fahrenheit to Rankine
function fahrenheitToRankine(fahrenheit) {
    return fahrenheit + 459.67;
}

// Rankine to Fahrenheit
function rankineToFahrenheit(rankine) {
    return rankine - 459.67;
}

// Réaumur to Rankine
function reaumurToRankine(reaumur) {
    return (reaumur * 9/4) + 491.67;
}

// Rankine to Réaumur
function rankineToReaumur(rankine) {
    return (rankine - 491.67) * 4/9;
}

    
const bsunit = document.getElementById("bsunit");
const trunit = document.getElementById("trunit");
const temperatureInput = document.getElementById("temperatureInput");
const resultOutput = document.getElementById("result");
const convertBtn = document.getElementById("convertBt");
const clearBtn = document.getElementById("clearBt");


if (clearBtn) {
    clearBtn.addEventListener("click", () => {
   document.getElementById("temperatureInput").value = "";
   document.getElementById("result").textContent = "";
   document.getElementById("bsunit").selectedIndex = 0;
   document.getElementById("trunit").selectedIndex = 0;
   
});
}
// Convert button functionality
if (convertBtn) {
convertBtn.addEventListener("click", () => {
    const inputTemperature = parseFloat(document.getElementById("temperatureInput").value);
    const sourceUnit = bsunit.value;
    const targetUnit = trunit.value;
    let convertedTemperature;
    
    
    if (sourceUnit === "Celsius" && targetUnit === "Fahrenheit") {
    convertedTemperature = celsiusToFahrenheit(inputTemperature);
    } else if (sourceUnit === "Fahrenheit" && targetUnit === "Celsius") {
    convertedTemperature = fahrenheitToCelsius(inputTemperature);
  

    }
    
    if (sourceUnit === "Celsius" && targetUnit === "Kelvin") {
    convertedTemperature = celsiusToKelvin(inputTemperature);
    } else if (sourceUnit === "Kelvin" && targetUnit === "Celsius") {
    convertedTemperature = kelvinToCelsius(inputTemperature);
    }
    
    if (sourceUnit === "Celsius" && targetUnit === "Reaumur") {
    convertedTemperature = celsiusToReaumur(inputTemperature);
    } else if (sourceUnit === "Reaumur" && targetUnit === "Celsius") {
    convertedTemperature = reaumurToCelsius(inputTemperature);
    }
    
    if (sourceUnit === "Celsius" && targetUnit === "Rankine") {
    convertedTemperature = celsiusToRankine(inputTemperature);
    } else if (sourceUnit === "Rankine" && targetUnit === "Celsius") {
    convertedTemperature = rankineToCelsius(inputTemperature);
    }
    
    if (sourceUnit === "Kelvin" && targetUnit === "Fahrenheit") {
    convertedTemperature = kelvinToFahrenheit(inputTemperature);
    } else if (sourceUnit === "Fahrenheit" && targetUnit === "Kelvin") {
    convertedTemperature = fahrenheitToKelvin(inputTemperature);
    }
    if (sourceUnit === "Kelvin" && targetUnit === "Reaumur") {
    convertedTemperature = kelvinToReaumur(inputTemperature);
    } else if (sourceUnit === "Reaumur" && targetUnit === "Kelvin") {
    convertedTemperature = reaumurToKelvin(inputTemperature);
    }
    if (sourceUnit === "Kelvin" && targetUnit === "Rankine") {
    convertedTemperature = kelvinToRankine(inputTemperature);
    } else if (sourceUnit === "Rankine" && targetUnit === "Kelvin") {
    convertedTemperature = rankineToKelvin(inputTemperature);
    }
    if (sourceUnit === "Fahrenheit" && targetUnit === "Rankine") {
    convertedTemperature = fahrenheitToRankine(inputTemperature);
    } else if (sourceUnit === "Rankine" && targetUnit === "Fahrenheit") {
    convertedTemperature = rankineToFahrenheit(inputTemperature);
    }
    if (sourceUnit === "Fahrenheit" && targetUnit === "Reaumur") {
    convertedTemperature = fahrenheitToReaumur(inputTemperature);
    } else if (sourceUnit === "Reaumur" && targetUnit === "Fahrenheit") {
    convertedTemperature = reaumurToFahrenheit(inputTemperature);
    }
    
    if (sourceUnit === "Rankine" && targetUnit === "Reaumur") {
    convertedTemperature = rankineToReaumur(inputTemperature);
    } else if (sourceUnit === "Reaumur" && targetUnit === "Rankine") {
    convertedTemperature = reaumurToRankine(inputTemperature);
    }
    
    if (!isNaN(convertedTemperature)) {
    document.getElementById("result").textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${targetUnit}`;
    } else {
    document.getElementById("result").textContent = "Invalid input";
    }

});
    


}