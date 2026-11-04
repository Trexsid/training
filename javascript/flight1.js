let flight={
    flightId : 1234,
    airline : "IndianAir",
    origination : "Delhi",
    destination : "Mumbai",
    depatureDate : "2023-10-15",
    depatureTime : "10:00 AM"
}

flight.origination ="NewDelhi";
console.log(`flight:${JSON.stringify(flight)}`);
console.log(`flightId:${flight.flightId}`);