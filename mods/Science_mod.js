// Science mod for Sandboxels
// (Inspired by survival.js)
// By: Lucifer (@a_british_proto (Discord))
// If there is anything you want to suggest or there's a bug then just dm me on discord
// Todo:
// - Try to get the mod to work by making different ways to craft all the (116) elements in the mod
// - Make new substances that you can get after mixing different elements
// - Make a way to get the different substances by mixing different elements and different substances
// - Make a custom message for when you reset your savefile like in survival.js

if (!settings.Science_mod) {
    settings.Science_mod = {
        "Hydrogen": 9.223372036854776e+18,
        "Helium": 9.223372036854776e+18,
        "Lithium": 9.223372036854776e+18,
        "Beryllium": 9.223372036854776e+18,
        "Boron": 9.223372036854776e+18,
        "Carbon": 9.223372036854776e+18,
        "Oxygen": 9.223372036854776e+18,
        "Flourine": 9.223372036854776e+18,
        "Neon": 9.223372036854776e+18,
        "Sodium": 9.223372036854776e+18,
        "Magnesium": 9.223372036854776e+18,
        "Aluminum": 9.223372036854776e+18,
        "Silicon": 9.223372036854776e+18,
        "Phosphorus": 9.223372036854776e+18,
        "Sulphur": 9.223372036854776e+18,
        "Chlorine": 9.223372036854776e+18,
        "Argon": 9.223372036854776e+18,
        "Potassium": 9.223372036854776e+18,
        "Calcium": 9.223372036854776e+18,
        "Scandium": 9.223372036854776e+18,
        "Titanium": 9.223372036854776e+18,
        "Vanadium": 9.223372036854776e+18,
        "Chromium": 9.223372036854776e+18,
        "Manganese": 9.223372036854776e+18,
        "Iron": 9.223372036854776e+18,
        "Cobalt": 9.223372036854776e+18,
        "Nickel": 9.223372036854776e+18,
        "Copper": 9.223372036854776e+18,
        "Zinc": 9.223372036854776e+18,
        "Gallium": 9.223372036854776e+18,
        "Germanium": 9.223372036854776e+18,
        "Arsenic": 9.223372036854776e+18,
        "Selenium": 9.223372036854776e+18,
        "Bromine": 9.223372036854776e+18,
        "Krypton": 9.223372036854776e+18,
        "Rubidium": 9.223372036854776e+18,
        "Strontium": 9.223372036854776e+18,
        "Yttrium": 9.223372036854776e+18,
        "Zirconium": 9.223372036854776e+18,
        "Niobium": 9.223372036854776e+18,
        "Molybdenum": 9.223372036854776e+18,
        "Technetium": 9.223372036854776e+18,
        "Ruthenium": 9.223372036854776e+18,
        "Rhodium": 9.223372036854776e+18,
        "Palladium": 9.223372036854776e+18,
        "Silver": 9.223372036854776e+18,
        "Cadmium": 9.223372036854776e+18,
        "Indium": 9.223372036854776e+18,
        "Tin": 9.223372036854776e+18,
        "Antimony": 9.223372036854776e+18,
        "Tellurium": 9.223372036854776e+18,
        "Iodine": 9.223372036854776e+18,
        "Xenon": 9.223372036854776e+18,
        "Cesium": 9.223372036854776e+18,
        "Barium": 9.223372036854776e+18,
        "Lanthanum": 9.223372036854776e+18,
        "Cerium": 9.223372036854776e+18,
        "Praseodymium": 9.223372036854776e+18,
        "Neodymium": 9.223372036854776e+18,
        "Promethium": 9.223372036854776e+18,
        "Samarium": 9.223372036854776e+18,
        "Europium": 9.223372036854776e+18,
        "Gadolinium": 9.223372036854776e+18,
        "Terbium": 9.223372036854776e+18,
        "Dysprosium": 9.223372036854776e+18,
        "Holmium": 9.223372036854776e+18,
        "Erbium": 9.223372036854776e+18,
        "Thulium": 9.223372036854776e+18,
        "Ytterbium": 9.223372036854776e+18,
        "Lutetium": 9.223372036854776e+18,
        "Hafnium": 9.223372036854776e+18,
        "Tantalum": 9.223372036854776e+18,
        "Tungsten": 9.223372036854776e+18,
        "Rhenium": 9.223372036854776e+18,
        "Osmium": 9.223372036854776e+18,
        "Iridium": 9.223372036854776e+18,
        "Platinum": 9.223372036854776e+18,
        "Gold": 9.223372036854776e+18,
        "Mercury": 9.223372036854776e+18,
        "Thallium": 9.223372036854776e+18,
        "Lead": 9.223372036854776e+18,
        "Bismuth": 9.223372036854776e+18,
        "Polonium": 9.223372036854776e+18,
        "Astatine": 9.223372036854776e+18,
        "Radon": 9.223372036854776e+18,
        "Francium": 9.223372036854776e+18,
        "Radium": 9.223372036854776e+18,
        "Actinium": 9.223372036854776e+18,
        "Thorium": 9.223372036854776e+18,
        "Protactinium": 9.223372036854776e+18,
        "Uranium": 9.223372036854776e+18,
        "Neptunium": 9.223372036854776e+18,
        "Plutonium": 9.223372036854776e+18,
        "Americium": 9.223372036854776e+18,
        "Curium": 9.223372036854776e+18,
        "Berkelium": 9.223372036854776e+18,
        "Californium": 9.223372036854776e+18,
        "Einsteinium": 9.223372036854776e+18,
        "Fermium": 9.223372036854776e+18,
        "Mendelevium": 9.223372036854776e+18,
        "Nobelium": 9.223372036854776e+18,
        "Lawrencium": 9.223372036854776e+18,
        "Rutherfordium": 9.223372036854776e+18,
        "Dubnium": 9.223372036854776e+18,
        "Seaborgium": 9.223372036854776e+18,
        "Bohrium": 9.223372036854776e+18,
        "Hassium": 9.223372036854776e+18,
        "Meitnerium": 9.223372036854776e+18,
        "Darmstadtium": 9.223372036854776e+18,
        "Roentgenium": 9.223372036854776e+18,
        "Copernicium": 9.223372036854776e+18,
        "Nihonium": 9.223372036854776e+18,
        "Flerovium": 9.223372036854776e+18,
        "Moscovium": 9.223372036854776e+18,
        "Livermorium": 9.223372036854776e+18,
        "Tennessine": 9.223372036854776e+18,
        "Oganesson": 9.223372036854776e+18,
    }
}

element.Hydrogen = {
    behavior: behaviors.GAS,
    color:"D3D3D3",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Helium = {
    behavior: behaviors.GAS,
    color:"C0C0C0",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Lithium = {
    behavior: behaviors.WALL,
    color:"DADBDD",
    category:"land",
    state:"solid",
    hidden:false
}

element.Beryllium = {
    behavior: behaviors.WALL,
    color:"DADBDD",
    category:"land",
    state:"solid",
    hidden:false
}

element.Boron = {
    behavior: behaviors.WALL,
    color:"964B00",
    category:"land",
    state:"solid",
    hidden:false
}

element.Carbon = {
    behavior: behaviors.GAS,
    color:"000000",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Nitrogen = {
    behavior: behaviors.GAS,
    color:"0000FF",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Oxygen = {
    behavior: behaviors.GAS,
    color:"000000",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Fluorine = {
    behavior: behaviors.WALL,
    color:"FFFF00",
    category:"land",
    state:"solid",
    hidden:false
}

// adding more later
