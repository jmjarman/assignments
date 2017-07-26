var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function printLyrics(lyrics) {
  var joinedLyrics = lyrics.join(" ");
console.log(joinedLyrics);
}

printLyrics(lyrics);

function revarray(rev){
  var revString=rev.reverse();
  var toJoin=revString.join(" ")
  return toJoin
  
}
console.log(revarray(lyrics))

function everyOther(param){
  for(i = 0, i < lyrics.length, i+2)