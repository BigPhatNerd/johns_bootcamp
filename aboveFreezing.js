function aboveFreezing(temperature){
    // I am using console.log with an object {} to log the result of the
    // temperature > 32 comparison. This is the same as console.log(temperature
    // >
    // 32) except the `aboveFreezing` property will be added to the log (kinda
    //     like a label)
    console.log({ aboveFreezing: temperature > 32})
    return temperature > 32
}

aboveFreezing(31)
aboveFreezing(32);
aboveFreezing(33);