var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while (currentGen <= 4) {
  
  totalMW = totalMW + 62;
  console.log("Generator #" + (currentGen) + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  currentGen++;
  
}

  for (currentGen <= 5; currentGen <= totalGen
       
       // it is extremely important to make sure the <= is pointing the right way, overlooking this mistake cost me 30 minutes of my life as I couldn't figure out why the program wouldn't run//; 
  currentGen++){
    
  totalMW = totalMW + 124;
  console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
  
}
