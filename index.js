// index.js

// Function to calculate charges based on distance
function scuberGreetingForFeet(feet) {
  let result;
  if (feet <= 400) {
      result = 'This one is on me!';
  } else if (feet > 400 && feet <= 2000) {
      result = 'That will be twenty bucks.';
  } else if (feet > 2000 && feet <= 2500) {
      result = 'I will gladly take your thirty bucks.';
  } else {
      result = 'No can do.';
  }
  return result;
}

// Function to check city and return message
function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Function to switch on charm based on tip
function switchOnCharmFromTip(tip) {
  switch (tip) {
      case 'generous':
          return 'Thank you so much.';
      case 'not as generous':
          return 'Thank you.';
      default:
          return 'Bye.';
  }
}

module.exports = { scuberGreetingForFeet, ternaryCheckCity, switchOnCharmFromTip };
