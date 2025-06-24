
document.addEventListener('DOMContentLoaded', () => {
    const savedLightMode = localStorage.getItem('lightMode') === 'true';
    if (savedLightMode) {
        enableLightMode();
    }
});

document.getElementById('light-mode-toggle').addEventListener('click', () => {
    const isLightMode = document.body.classList.contains('light-mode');
    if (isLightMode) {
        disableLightMode();
    } else {
        enableLightMode();
    }
});

function enableLightMode() {
    document.body.classList.add('light-mode');
    localStorage.setItem('lightMode', 'true');
    document.getElementById('light-mode-toggle').textContent = '🌑';
    document.querySelectorAll('.container, button, .buttonselect, .tab button, .minion-buttons button, .toggle-button, h1, h2, h3, label, .tab, .result, .roman-numerals, .roman-numerals span')
        .forEach(el => el.classList.add('light-mode'));
}

function disableLightMode() {
    document.body.classList.remove('light-mode');
    localStorage.setItem('lightMode', 'false');
    document.getElementById('light-mode-toggle').textContent = '☀️';
    document.querySelectorAll('.container, button, .buttonselect, .tab button, .minion-buttons button, .toggle-button, h1, h2, h3, label, .tab, .result, .roman-numerals, .roman-numerals span')
        .forEach(el => el.classList.remove('light-mode'));
}

function toggleButton(buttonId, selectionKey) {
  const button = document.getElementById(buttonId);
  const currentValue = button.getAttribute("data-value");
  const newValue = currentValue === "yes" ? "no" : "yes"; // Toggle between 'yes' and 'no'

  button.setAttribute("data-value", newValue);
  button.classList.toggle("selected", newValue === "yes"); // Highlight if enabled
  selections[selectionKey] = newValue; // Update the selections object
}

// Add event listeners for both buttons
document.getElementById("diamondSpreadingToggle").addEventListener("click", function () {
  toggleButton("diamondSpreadingToggle", "diamondSpreading");
});

document.getElementById("superCompactorToggle").addEventListener("click", function () {
  toggleButton("superCompactorToggle", "superCompactor");
});


window.onload = () => showCategory('Farming');  
function showCategory(category) {
  const tabs = document.querySelectorAll('.minion-buttons');
  tabs.forEach(tab => tab.classList.remove('active'));

  const activeTab = document.getElementById(category);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  const tabButtons = document.querySelectorAll('.tab button');
  tabButtons.forEach(button => button.classList.remove('active'));

  document.querySelector(`[data-category="${category}"]`).classList.add('active');
}

function selectMinion(button) {
  const allButtons = document.querySelectorAll('.minion-buttons button');
  allButtons.forEach(btn => btn.classList.remove('selected'));

  button.classList.add('selected');
}

const minionProduction = {
  "Wheat Minion": {
    "1": { Wheat: 2880, "Wheat Seeds": 4320 },
    "2": { Wheat: 2880, "Wheat Seeds": 4320 },
    "3": { Wheat: 3323, "Wheat Seeds": 4985 },
    "4": { Wheat: 3323, "Wheat Seeds": 4985 },
    "5": { Wheat: 3927, "Wheat Seeds": 5891 },
    "6": { Wheat: 3927, "Wheat Seeds": 5891 },
    "7": { Wheat: 4320, "Wheat Seeds": 6480 },
    "8": { Wheat: 4320, "Wheat Seeds": 6480 },
    "9": { Wheat: 4800, "Wheat Seeds": 7200 },
    "10": { Wheat: 4800, "Wheat Seeds": 7200 },
    "11": { Wheat: 5400, "Wheat Seeds": 8100 }
  },
  "Carrot Minion": {
    "1": { Carrot: 6480 },
    "2": { Carrot: 6480 },
    "3": { Carrot: 7200 },
    "4": { Carrot: 7200 },
    "5": { Carrot: 8100 },
    "6": { Carrot: 8100 },
    "7": { Carrot: 9257 },
    "8": { Carrot: 9257 },
    "9": { Carrot: 10800 },
    "10": { Carrot: 10800 },
    "11": { Carrot: 12960 }
  },
  "Potato Minion": {
    "1": { Potato: 6480 },
    "2": { Potato: 6480 },
    "3": { Potato: 7200 },
    "4": { Potato: 7200 },
    "5": { Potato: 8100 },
    "6": { Potato: 8100 },
    "7": { Potato: 9257 },
    "8": { Potato: 9257 },
    "9": { Potato: 10800 },
    "10": { Potato: 10800 },
    "11": { Potato: 12960 }
  },
  "Pumpkin Minion": {
    "1": { Pumpkin: 1350 },
    "2": { Pumpkin: 1350 },
    "3": { Pumpkin: 1440 },
    "4": { Pumpkin: 1440 },
    "5": { Pumpkin: 1600 },
    "6": { Pumpkin: 1600 },
    "7": { Pumpkin: 1800 },
    "8": { Pumpkin: 1800 },
    "9": { Pumpkin: 2160 },
    "10": { Pumpkin: 2160 },
    "11": { Pumpkin: 2700 }
  },
  "Melon Minion": {
    "1": { "Melon Piece": 9000 },
    "2": { "Melon Piece": 9000 },
    "3": { "Melon Piece": 9599 },
    "4": { "Melon Piece": 9599 },
    "5": { "Melon Piece": 10285 },
    "6": { "Melon Piece": 10285 },
    "7": { "Melon Piece": 11675 },
    "8": { "Melon Piece": 11675 },
    "9": { "Melon Piece": 13500 },
    "10": { "Melon Piece": 13500 },
    "11": { "Melon Piece": 16615 }
  },
  "Mushroom Minion": {
    "1": { "Mushroom (Red/Brown)": 1440 },
    "2": { "Mushroom (Red/Brown)": 1440 },
    "3": { "Mushroom (Red/Brown)": 1542 },
    "4": { "Mushroom (Red/Brown)": 1542 },
    "5": { "Mushroom (Red/Brown)": 1660 },
    "6": { "Mushroom (Red/Brown)": 1660 },
    "7": { "Mushroom (Red/Brown)": 1878 },
    "8": { "Mushroom (Red/Brown)": 1878 },
    "9": { "Mushroom (Red/Brown)": 2160 },
    "10": { "Mushroom (Red/Brown)": 2160 },
    "11": { "Mushroom (Red/Brown)": 2700 }
  },
  "Cocoa Beans Minion": {
    "1": { "Cocoa Beans": 4800 },
    "2": { "Cocoa Beans": 4800 },
    "3": { "Cocoa Beans": 5183 },
    "4": { "Cocoa Beans": 5183 },
    "5": { "Cocoa Beans": 5634 },
    "6": { "Cocoa Beans": 5634 },
    "7": { "Cocoa Beans": 6171 },
    "8": { "Cocoa Beans": 6171 },
    "9": { "Cocoa Beans": 7200 },
    "10": { "Cocoa Beans": 7200 },
    "11": { "Cocoa Beans": 8640 }
  },
  "Sugar Cane Minion": {
    "1": { "Sugar Cane": 5890 },
    "2": { "Sugar Cane": 5890 },
    "3": { "Sugar Cane": 6480 },
    "4": { "Sugar Cane": 6480 },
    "5": { "Sugar Cane": 7200 },
    "6": { "Sugar Cane": 7200 },
    "7": { "Sugar Cane": 8100 },
    "8": { "Sugar Cane": 8100 },
    "9": { "Sugar Cane": 8937 },
    "10": { "Sugar Cane": 8937 },
    "11": { "Sugar Cane": 10800 }
  },
  "Chicken Minion": {
    "1": { "Raw Chicken": 1661, Feather: 1661 },
    "2": { "Raw Chicken": 1661, Feather: 1661 },
    "3": { "Raw Chicken": 1800, Feather: 1800 },
    "4": { "Raw Chicken": 1800, Feather: 1800 },
    "5": { "Raw Chicken": 1963, Feather: 1963 },
    "6": { "Raw Chicken": 1963, Feather: 1963 },
    "7": { "Raw Chicken": 2160, Feather: 2160 },
    "8": { "Raw Chicken": 2160, Feather: 2160 },
    "9": { "Raw Chicken": 2400, Feather: 2400 },
    "10": { "Raw Chicken": 2400, Feather: 2400 },
    "11": { "Raw Chicken": 2880, Feather: 2880 }
  },
  "Cow Minion": {
    "1": { "Raw Beef": 1661, Leather: 1661 },
    "2": { "Raw Beef": 1661, Leather: 1661 },
    "3": { "Raw Beef": 1800, Leather: 1800 },
    "4": { "Raw Beef": 1800, Leather: 1800 },
    "5": { "Raw Beef": 1963, Leather: 1963 },
    "6": { "Raw Beef": 1963, Leather: 1963 },
    "7": { "Raw Beef": 2160, Leather: 2160 },
    "8": { "Raw Beef": 2160, Leather: 2160 },
    "9": { "Raw Beef": 2400, Leather: 2400 },
    "10": { "Raw Beef": 2400, Leather: 2400 },
    "11": { "Raw Beef": 2880, Leather: 2880 }
  },
  "Pig Minion": {
    "1": { "Raw Porkchop": 1661 },
    "2": { "Raw Porkchop": 1661 },
    "3": { "Raw Porkchop": 1800 },
    "4": { "Raw Porkchop": 1800 },
    "5": { "Raw Porkchop": 1963 },
    "6": { "Raw Porkchop": 1963 },
    "7": { "Raw Porkchop": 2160 },
    "8": { "Raw Porkchop": 2160 },
    "9": { "Raw Porkchop": 2400 },
    "10": { "Raw Porkchop": 2400 },
    "11": { "Raw Porkchop": 2880 }
  },
  "Sheep Minion": {
    "1": { "Raw Mutton": 1800, "White Wool": 1800 },
    "2": { "Raw Mutton": 1800, "White Wool": 1800 },
    "3": { "Raw Mutton": 1963, "White Wool": 1963 },
    "4": { "Raw Mutton": 1963, "White Wool": 1963 },
    "5": { "Raw Mutton": 2160, "White Wool": 2160 },
    "6": { "Raw Mutton": 2160, "White Wool": 2160 },
    "7": { "Raw Mutton": 2400, "White Wool": 2400 },
    "8": { "Raw Mutton": 2400, "White Wool": 2400 },
    "9": { "Raw Mutton": 2700, "White Wool": 2700 },
    "10": { "Raw Mutton": 2700, "White Wool": 2700 },
    "11": { "Raw Mutton": 3600, "White Wool": 3600 }
  },
  "Cactus Minion": {
    "1": { "Green Dye": 4800 },
    "2": { "Green Dye": 4800 },
    "3": { "Green Dye": 5183 },
    "4": { "Green Dye": 5183 },
    "5": { "Green Dye": 5634 },
    "6": { "Green Dye": 5634 },
    "7": { "Green Dye": 6171 },
    "8": { "Green Dye": 6171 },
    "9": { "Green Dye": 7200 },
    "10": { "Green Dye": 7200 },
    "11": { "Green Dye": 8640 }
  },
  "Beetroot Minion": {
    "1": { Beetroot: 3927, "Beetroot Seeds": 8835 },
    "2": { Beetroot: 3927, "Beetroot Seeds": 8835 },
    "3": { Beetroot: 4320, "Beetroot Seeds": 9720 },
    "4": { Beetroot: 4320, "Beetroot Seeds": 9720 },
    "5": { Beetroot: 4800, "Beetroot Seeds": 10800 },
    "6": { Beetroot: 4800, "Beetroot Seeds": 10800 },
    "7": { Beetroot: 5400, "Beetroot Seeds": 12150 },
    "8": { Beetroot: 5400, "Beetroot Seeds": 12150 },
    "9": { Beetroot: 6171, "Beetroot Seeds": 13885 },
    "10": { Beetroot: 6171, "Beetroot Seeds": 13885 },
    "11": { Beetroot: 7200, "Beetroot Seeds": 16200 }
  },
  "Rabbit Minion": {
    "1": { "Raw Rabbit": 1661, "Rabbit Foot": 581, "Rabbit Hide": 581 },
    "2": { "Raw Rabbit": 1661, "Rabbit Foot": 581, "Rabbit Hide": 581 },
    "3": { "Raw Rabbit": 1800, "Rabbit Foot": 630, "Rabbit Hide": 630 },
    "4": { "Raw Rabbit": 1800, "Rabbit Foot": 630, "Rabbit Hide": 630 },
    "5": { "Raw Rabbit": 1963, "Rabbit Foot": 687, "Rabbit Hide": 687 },
    "6": { "Raw Rabbit": 1963, "Rabbit Foot": 687, "Rabbit Hide": 687 },
    "7": { "Raw Rabbit": 2160, "Rabbit Foot": 755, "Rabbit Hide": 755 },
    "8": { "Raw Rabbit": 2160, "Rabbit Foot": 755, "Rabbit Hide": 755 },
    "9": { "Raw Rabbit": 2541, "Rabbit Foot": 889, "Rabbit Hide": 889 },
    "10": { "Raw Rabbit": 2541, "Rabbit Foot": 889, "Rabbit Hide": 889 },
    "11": { "Raw Rabbit": 3323, "Rabbit Foot": 1163, "Rabbit Hide": 1163 }
  },
  "Duck Minion": {
    "1": { "Raw Duck": 1542, Feather: 1542, "Duck Egg": 1542 },
    "2": { "Raw Duck": 1542, Feather: 1542, "Duck Egg": 1542 },
    "3": { "Raw Duck": 1661, Feather: 1661, "Duck Egg": 1661 },
    "4": { "Raw Duck": 1661, Feather: 1661, "Duck Egg": 1661 },
    "5": { "Raw Duck": 1800, Feather: 1800, "Duck Egg": 1800 },
    "6": { "Raw Duck": 1800, Feather: 1800, "Duck Egg": 1800 },
    "7": { "Raw Duck": 1963, Feather: 1963, "Duck Egg": 1963 },
    "8": { "Raw Duck": 1963, Feather: 1963, "Duck Egg": 1963 },
    "9": { "Raw Duck": 2160, Feather: 2160, "Duck Egg": 2160 },
    "10": { "Raw Duck": 2160, Feather: 2160, "Duck Egg": 2160 },
    "11": { "Raw Duck": 2400, Feather: 2400, "Duck Egg": 2400 }
  },
  "Cobblestone Minion": {
    "1": { Cobblestone: 3086 },
    "2": { Cobblestone: 3086 },
    "3": { Cobblestone: 3600 },
    "4": { Cobblestone: 3600 },
    "5": { Cobblestone: 4320 },
    "6": { Cobblestone: 4320 },
    "7": { Cobblestone: 4800 },
    "8": { Cobblestone: 4800 },
    "9": { Cobblestone: 5400 },
    "10": { Cobblestone: 5400 },
    "11": { Cobblestone: 6171 }
  },
  "Coal Minion": {
    "1": { Coal: 2880 },
    "2": { Coal: 2880 },
    "3": { Coal: 3323 },
    "4": { Coal: 3323 },
    "5": { Coal: 3600 },
    "6": { Coal: 3600 },
    "7": { Coal: 4320 },
    "8": { Coal: 4320 },
    "9": { Coal: 4800 },
    "10": { Coal: 4800 },
    "11": { Coal: 6171 }
  },
  "Iron Minion": {
    "1": { "Iron Ingot": 2541 },
    "2": { "Iron Ingot": 2541 },
    "3": { "Iron Ingot": 2880 },
    "4": { "Iron Ingot": 2880 },
    "5": { "Iron Ingot": 3085 },
    "6": { "Iron Ingot": 3085 },
    "7": { "Iron Ingot": 3600 },
    "8": { "Iron Ingot": 3600 },
    "9": { "Iron Ingot": 4320 },
    "10": { "Iron Ingot": 4320 },
    "11": { "Iron Ingot": 5400 }
  },
  "Gold Minion": {
    "1": { "Gold Ingot": 1963 },
    "2": { "Gold Ingot": 1963 },
    "3": { "Gold Ingot": 2160 },
    "4": { "Gold Ingot": 2160 },
    "5": { "Gold Ingot": 2400 },
    "6": { "Gold Ingot": 2400 },
    "7": { "Gold Ingot": 2700 },
    "8": { "Gold Ingot": 2700 },
    "9": { "Gold Ingot": 3085 },
    "10": { "Gold Ingot": 3085 },
    "11": { "Gold Ingot": 3927 }
  },
  "Diamond Minion": {
    "1": { Diamond: 1489 },
    "2": { Diamond: 1489 },
    "3": { Diamond: 1600 },
    "4": { Diamond: 1600 },
    "5": { Diamond: 1728 },
    "6": { Diamond: 1728 },
    "7": { Diamond: 1963 },
    "8": { Diamond: 1963 },
    "9": { Diamond: 2273 },
    "10": { Diamond: 2273 },
    "11": { Diamond: 2880 }
  },
  "Lapis Lazuli Minion": {
    "1": { "Lapis Lazuli": 8937 },
    "2": { "Lapis Lazuli": 8937 },
    "3": { "Lapis Lazuli": 9600 },
    "4": { "Lapis Lazuli": 9600 },
    "5": { "Lapis Lazuli": 10367 },
    "6": { "Lapis Lazuli": 10367 },
    "7": { "Lapis Lazuli": 11269 },
    "8": { "Lapis Lazuli": 11269 },
    "9": { "Lapis Lazuli": 12342 },
    "10": { "Lapis Lazuli": 12342 },
    "11": { "Lapis Lazuli": 14400 }
  },
  "Emerald Minion": {
    "1": { Emerald: 1542 },
    "2": { Emerald: 1542 },
    "3": { Emerald: 1661 },
    "4": { Emerald: 1661 },
    "5": { Emerald: 1800 },
    "6": { Emerald: 1800 },
    "7": { Emerald: 2057 },
    "8": { Emerald: 2057 },
    "9": { Emerald: 2400 },
    "10": { Emerald: 2400 },
    "11": { Emerald: 3085 }
  },
  "Redstone Minion": {
    "1": { "Redstone Dust": 6703 },
    "2": { "Redstone Dust": 6703 },
    "3": { "Redstone Dust": 7200 },
    "4": { "Redstone Dust": 7200 },
    "5": { "Redstone Dust": 7775 },
    "6": { "Redstone Dust": 7775 },
    "7": { "Redstone Dust": 8452 },
    "8": { "Redstone Dust": 8452 },
    "9": { "Redstone Dust": 9257 },
    "10": { "Redstone Dust": 9257 },
    "11": { "Redstone Dust": 10800 }
  },
  "Obsidian Minion": {
    "1": { Obsidian: 960 },
    "2": { Obsidian: 960 },
    "3": { Obsidian: 1028 },
    "4": { Obsidian: 1028 },
    "5": { Obsidian: 1107 },
    "6": { Obsidian: 1107 },
    "7": { Obsidian: 1234 },
    "8": { Obsidian: 1234 },
    "9": { Obsidian: 1440 },
    "10": { Obsidian: 1440 },
    "11": { Obsidian: 1880 }
  },
  "Ice Minion": {
    "1": { Ice: 3086 },
    "2": { Ice: 3086 },
    "3": { Ice: 3600 },
    "4": { Ice: 3600 },
    "5": { Ice: 4320 },
    "6": { Ice: 4320 },
    "7": { Ice: 4800 },
    "8": { Ice: 4800 },
    "9": { Ice: 5400 },
    "10": { Ice: 5400 },
    "11": { Ice: 6171 }
  },
  "Zombie Minion": {
    "1": { "Rotten Flesh": 1662 },
    "2": { "Rotten Flesh": 1662 },
    "3": { "Rotten Flesh": 1800 },
    "4": { "Rotten Flesh": 1800 },
    "5": { "Rotten Flesh": 1964 },
    "6": { "Rotten Flesh": 1964 },
    "7": { "Rotten Flesh": 2160 },
    "8": { "Rotten Flesh": 2160 },
    "9": { "Rotten Flesh": 2541 },
    "10": { "Rotten Flesh": 2541 },
    "11": { "Rotten Flesh": 3323 }
  },
  "Skeleton Minion": {
    "1": { Bone: 1662 },
    "2": { Bone: 1662 },
    "3": { Bone: 1800 },
    "4": { Bone: 1800 },
    "5": { Bone: 1964 },
    "6": { Bone: 1964 },
    "7": { Bone: 2160 },
    "8": { Bone: 2160 },
    "9": { Bone: 2541 },
    "10": { Bone: 2541 },
    "11": { Bone: 3323 }
  },
  "Spider Minion": {
    "1": { String: 1662, "Spider Eye": 831 },
    "2": { String: 1662, "Spider Eye": 831 },
    "3": { String: 1800, "Spider Eye": 900 },
    "4": { String: 1800, "Spider Eye": 900 },
    "5": { String: 1964, "Spider Eye": 982 },
    "6": { String: 1964, "Spider Eye": 982 },
    "7": { String: 2160, "Spider Eye": 1080 },
    "8": { String: 2160, "Spider Eye": 1080 },
    "9": { String: 2541, "Spider Eye": 1271 },
    "10": { String: 2541, "Spider Eye": 1271 },
    "11": { String: 3323, "Spider Eye": 1662 }
  },
  "Cave Spider Minion": {
    "1": { "Spider Eye": 1662, String: 831 },
    "2": { "Spider Eye": 1662, String: 831 },
    "3": { "Spider Eye": 1800, String: 900 },
    "4": { "Spider Eye": 1800, String: 900 },
    "5": { "Spider Eye": 1964, String: 982 },
    "6": { "Spider Eye": 1964, String: 982 },
    "7": { "Spider Eye": 2160, String: 1080 },
    "8": { "Spider Eye": 2160, String: 1080 },
    "9": { "Spider Eye": 2541, String: 1271 },
    "10": { "Spider Eye": 2541, String: 1271 },
    "11": { "Spider Eye": 3323, String: 1662 }
  },
  "Creeper Minion": {
    "1": { Gunpowder: 1600 },
    "2": { Gunpowder: 1600 },
    "3": { Gunpowder: 1728 },
    "4": { Gunpowder: 1728 },
    "5": { Gunpowder: 1878 },
    "6": { Gunpowder: 1878 },
    "7": { Gunpowder: 2057 },
    "8": { Gunpowder: 2057 },
    "9": { Gunpowder: 2400 },
    "10": { Gunpowder: 2400 },
    "11": { Gunpowder: 3086 }
  },
  "Slime Minion": {
    "1": { Slimeball: 2991 },
    "2": { Slimeball: 2991 },
    "3": { Slimeball: 3240 },
    "4": { Slimeball: 3240 },
    "5": { Slimeball: 3535 },
    "6": { Slimeball: 3535 },
    "7": { Slimeball: 4093 },
    "8": { Slimeball: 4096 },
    "9": { Slimeball: 4860 },
    "10": { Slimeball: 4860 },
    "11": { Slimeball: 6480 }
  },
  "Blaze Minion": {
    "1": { "Blaze Rod": 1309 },
    "2": { "Blaze Rod": 1309 },
    "3": { "Blaze Rod": 1394 },
    "4": { "Blaze Rod": 1394 },
    "5": { "Blaze Rod": 1516 },
    "6": { "Blaze Rod": 1516 },
    "7": { "Blaze Rod": 1728 },
    "8": { "Blaze Rod": 1728 },
    "9": { "Blaze Rod": 2057 },
    "10": { "Blaze Rod": 2057 },
    "11": { "Blaze Rod": 2618 }
  },
  "Magma Cube Minion": {
    "1": { "Magma Cream": 2430 },
    "2": { "Magma Cream": 2430 },
    "3": { "Magma Cream": 2592 },
    "4": { "Magma Cream": 2592 },
    "5": { "Magma Cream": 2777 },
    "6": { "Magma Cream": 2777 },
    "7": { "Magma Cream": 3110 },
    "8": { "Magma Cream": 3110 },
    "9": { "Magma Cream": 3535 },
    "10": { "Magma Cream": 3535 },
    "11": { "Magma Cream": 4320 }
  },
  "Revenant Minion": {
    "1": { "Rotten Flesh": 4469, Diamond: 298 },
    "2": { "Rotten Flesh": 4469, Diamond: 298 },
    "3": { "Rotten Flesh": 4985, Diamond: 332 },
    "4": { "Rotten Flesh": 4985, Diamond: 332 },
    "5": { "Rotten Flesh": 5635, Diamond: 376 },
    "6": { "Rotten Flesh": 5635, Diamond: 376 },
    "7": { "Rotten Flesh": 6821, Diamond: 455 },
    "8": { "Rotten Flesh": 6821, Diamond: 455 },
    "9": { "Rotten Flesh": 8938, Diamond: 596 },
    "10": { "Rotten Flesh": 8938, Diamond: 596 },
    "11": { "Rotten Flesh": 12960, Diamond: 864 }
  },
  "Oak Minion": {
    "1": { "Oak Log": 3600 },
    "2": { "Oak Log": 3600 },
    "3": { "Oak Log": 3840 },
    "4": { "Oak Log": 3840 },
    "5": { "Oak Log": 4114 },
    "6": { "Oak Log": 4114 },
    "7": { "Oak Log": 4547 },
    "8": { "Oak Log": 4547 },
    "9": { "Oak Log": 5236 },
    "10": { "Oak Log": 5236 },
    "11": { "Oak Log": 6400 }
  },
  "Spruce Minion": {
    "1": { "Spruce Log": 3600 },
    "2": { "Spruce Log": 3600 },
    "3": { "Spruce Log": 3840 },
    "4": { "Spruce Log": 3840 },
    "5": { "Spruce Log": 4114 },
    "6": { "Spruce Log": 4114 },
    "7": { "Spruce Log": 4547 },
    "8": { "Spruce Log": 4547 },
    "9": { "Spruce Log": 5236 },
    "10": { "Spruce Log": 5236 },
    "11": { "Spruce Log": 6400 }
  },
  "Birch Minion": {
    "1": { "Birch Log": 3600 },
    "2": { "Birch Log": 3600 },
    "3": { "Birch Log": 3840 },
    "4": { "Birch Log": 3840 },
    "5": { "Birch Log": 4114 },
    "6": { "Birch Log": 4114 },
    "7": { "Birch Log": 4547 },
    "8": { "Birch Log": 4547 },
    "9": { "Birch Log": 5236 },
    "10": { "Birch Log": 5236 },
    "11": { "Birch Log": 6400 }
  },
  "Dark Oak Minion": {
    "1": { "Dark Oak Log": 3600 },
    "2": { "Dark Oak Log": 3600 },
    "3": { "Dark Oak Log": 3840 },
    "4": { "Dark Oak Log": 3840 },
    "5": { "Dark Oak Log": 4114 },
    "6": { "Dark Oak Log": 4114 },
    "7": { "Dark Oak Log": 4547 },
    "8": { "Dark Oak Log": 4547 },
    "9": { "Dark Oak Log": 5236 },
    "10": { "Dark Oak Log": 5236 },
    "11": { "Dark Oak Log": 6400 }
  },
  "Acacia Minion": {
    "1": { "Acacia Log": 3600 },
    "2": { "Acacia Log": 3600 },
    "3": { "Acacia Log": 3840 },
    "4": { "Acacia Log": 3840 },
    "5": { "Acacia Log": 4114 },
    "6": { "Acacia Log": 4114 },
    "7": { "Acacia Log": 4547 },
    "8": { "Acacia Log": 4547 },
    "9": { "Acacia Log": 5236 },
    "10": { "Acacia Log": 5236 },
    "11": { "Acacia Log": 6400 }
  },
  "Jungle Minion": {
    "1": { "Jungle Log": 3600 },
    "2": { "Jungle Log": 3600 },
    "3": { "Jungle Log": 3840 },
    "4": { "Jungle Log": 3840 },
    "5": { "Jungle Log": 4114 },
    "6": { "Jungle Log": 4114 },
    "7": { "Jungle Log": 4547 },
    "8": { "Jungle Log": 4547 },
    "9": { "Jungle Log": 5236 },
    "10": { "Jungle Log": 5236 },
    "11": { "Jungle Log": 6400 }
  },
};

const fuelMultipliers = {
  "None": 1,
  "Coal (5%)": 1.05,
  "Coal Block (5%)": 1.05,
  "Enchanted Bread (5%)": 1.05,
  "Enchanted Coal (10%)": 1.10,
  "Enchanted Charcoal (20%)": 1.20,
  "Enchanted Lava Bucket (25%)": 1.25,
  "Hamster Wheel (40%)": 1.40,
  "Foul Flesh (80%)": 1.80,
};

let selections = {
  minion: null,
  tier: null,
  fuel: null,
  diamondSpreading: null,
  superCompactor: null,
};

function handleButtonClick(group, value) {
  const buttons = document.querySelectorAll(`#${group} button`);
  const selectedButton = document.querySelector(`#${group} button.selected`);

  if (selectedButton && selectedButton.getAttribute('data-value') === value) {
    selectedButton.classList.remove('selected');
    selections[group.replace('Buttons', '')] = null;
  } else {
    buttons.forEach(button => button.classList.remove('selected'));
    document.querySelector(`#${group} button[data-value='${value}']`).classList.add('selected');
    selections[group.replace('Buttons', '')] = value;
  }
}


document.querySelectorAll('.button-group').forEach(group => {
  group.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
      handleButtonClick(group.id, event.target.getAttribute('data-value'));
    }
  });
});

function calculateProduction() {
  const { minion, tier, diamondSpreading, superCompactor } = selections;
  const fuel = selections.fuel || "None"; // Default to "None" if no fuel is selected

  // Validate inputs
  if (!minion || !tier) {
    document.getElementById("result").textContent = "Please select a minion and tier.";
    return;
  }

  // Get production data for the selected minion and tier
  const production = minionProduction[minion] && minionProduction[minion][tier];
  if (!production) {
    document.getElementById("result").textContent = "Invalid minion or tier.";
    return;
  }

  // Apply the fuel multiplier (default is 1 for "None")
  const fuelMultiplier = fuelMultipliers[fuel] || 1;

  // Calculate total production
  let totalProduction = {};
  let diamondBonus = 0;
  let enchantedItems = {};

  for (let item in production) {
    totalProduction[item] = production[item] * fuelMultiplier;
    if (diamondSpreading === "yes") {
      diamondBonus += totalProduction[item];
    }
  }

  // Handle Super Compactor logic
  if (superCompactor === "yes") {
    const enchantedNameMapping = {
      "Wheat": "Enchanted Bread",
      "Sugar Cane": "Enchanted Sugar",
      "Green Dye": "Enchanted Cactus Green",
      "Blaze Rod": "Enchanted Blaze Powder",
    };

    for (let item in totalProduction) {
      const baseAmount = totalProduction[item];
      const enchantedName = enchantedNameMapping[item] || `Enchanted ${item}`;
      const divisionFactor = item === "String" ? 192 : item === "Leather" ? 576 : item === "Wheat" ? 60 : 160;
      const enchantedAmount = baseAmount / divisionFactor;

      if (enchantedAmount > 0) {
        enchantedItems[enchantedName] = parseFloat(enchantedAmount.toFixed(2));
      }
    }
  }

  // Handle Diamond Spreading logic
  if (diamondSpreading === "yes") {
    diamondBonus = (diamondBonus / 10).toFixed(2);
  }

  // Build the result HTML
  let resultHTML = `<strong>Tier ${tier} ${minion}<br></strong>`;

  // Display fuel
  if (fuel !== "None") {
    resultHTML += `<span style="color: green;">✔</span> Fuel: ${fuel}<br>`;
  } else {
    resultHTML += `<span style="color: red;">✘</span> Fuel<br>`;
  }

  // Display Super Compactor status
  resultHTML += superCompactor === "yes"
    ? `<span style="color: green;">✔</span> Super Compactor 3000<br>`
  : `<span style="color: red;">✘</span> Super Compactor 3000<br>`;

  // Display Diamond Spreading status
  resultHTML += diamondSpreading === "yes"
    ? `<span style="color: green;">✔</span> Diamond Spreading<br>`
  : `<span style="color: red;">✘</span> Diamond Spreading<br>`;

  if (minion === "Iron Minion" || minion === "Gold Minion" || minion === "Cactus Minion") {
    resultHTML += `<span style="color: green;">✔</span> Auto Smelter<br>`;
  }
  else {
    resultHTML += `<span style="color: red;">✘</span> Auto Smelter<br>`;
  }

  if (minion === "Duck Minion") {
    resultHTML += `<span style="color: green;">✔</span> Enchanted Duck Egg<br>`;
  }
  else {
    resultHTML += `<span style="color: red;">✘</span> Enchanted Duck Egg<br>`;
  }

  resultHTML += `<br><strong>Production for 24 hours:</strong><br>`;

  // Show enchanted items if Super Compactor is enabled, otherwise show regular production
  if (superCompactor === "yes" && Object.keys(enchantedItems).length > 0) {
    for (let item in enchantedItems) {
      resultHTML += `${enchantedItems[item]}x ${item}<br>`;
    }
  } else {
    for (let item in totalProduction) {
      const value = totalProduction[item];
      const displayValue = value % 1 === 0 ? Math.floor(value) : value.toFixed(2);
      resultHTML += `${displayValue}x ${item}<br>`;
    }
  }
  if (superCompactor === "yes") {
    diamondBonus = (diamondBonus / 160).toFixed(2);
  }
  if (diamondSpreading === "yes") {
    resultHTML += `${diamondBonus}x`;
    if (superCompactor === "yes") {
      resultHTML += ` Enchanted`;
    }
    else {
      resultHTML += ``;
    }
    resultHTML += ` Diamond</strong>`;
    if (minion === "Diamond Minion" || minion === "Revenant Minion") {
      resultHTML += ` (Diamond Spreading)`;
    }
    else {
      resultHTML += ``;
    }

  }


  // Display diamond bonus if applicable


  // Display the result
  document.getElementById("result").innerHTML = resultHTML;
}


document.getElementById("tierSlider").addEventListener("input", function () {
  selections.tier = this.value;
});
