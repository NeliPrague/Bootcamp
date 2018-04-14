//numbers 1 to 10
for (i=1; i<=10;i++)
{
  console.log(i);
}

//looping through array
var band = ["Abba", "Jimmy", "MamaMia", "Sweden"];
for (i=0; i<band.length; i++)
{
  console.log(band[i]);
}

//dividing by 3
for (i=1; i<=100;i++)
{
  if(i%3 == 0){
    console.log("number is divided by 3: " + i);
  } else {
    console.log("number is not divided by 3");
  }
}
