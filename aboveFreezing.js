function aboveFreezing(temperature){
    console.log({ aboveFreezing: temperature > 32})
    return temperature > 32
}

aboveFreezing(31)
aboveFreezing(32);
aboveFreezing(33);