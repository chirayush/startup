#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";

//console.log("4 is primes: "+checkIfPrime(4));
//console.log("5 is primes: "+checkIfPrime(5));
//console.log("6 is primes: "+checkIfPrime(6));
//console.log("13 is primes: "+checkIfPrime(13));
//console.log("27 is primes: "+checkIfPrime(27));

printNPrimeNumbers(100);

function printNPrimeNumbers(n) {
    var primeNumbersFound=0;
    var primeNumbers = "";
    for(var i=2;primeNumbersFound!=n;i++) {
//        console.log("primeNumbersFound: "+primeNumbersFound);
        if(checkIfPrime(i)) {
            primeNumbersFound++;
            primeNumbers = primeNumbers + i + ",";
        }
    }
//    console.log(primeNumbers);
    fs.writeFileSync(outfile, primeNumbers);
    console.log("Script: " + __filename + "\nWrote: PrimeNumbers To: " + outfile);
}

function checkIfPrime(num) {
    var numHalf = num/2;
    for(var i=2;i<=numHalf;i++) {
          if(num%i == 0)
            return false;
    }
    return true;
}