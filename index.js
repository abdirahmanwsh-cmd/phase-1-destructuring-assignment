const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
let moo, neigh, baa, oink, cluck;
let bessie, dolly, babe, little;
let blackAndWhite, black, pink;
let red, orange, yellow, green, blue, indigo, violet;
let r, o, y, g, b, v;
let indg;
let muppetName, color, song, job, partner;

// Strings
[moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
console.log(moo, neigh, baa, oink, cluck);

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
[bessie, dolly, babe, little] = [moo, baa, oink, cluck];
console.log(bessie, dolly, babe, little);

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
[blackAndWhite, black, pink] = [moo, baa, oink];
console.log(blackAndWhite, black, pink);

// Arrays
[red, orange, yellow, green, blue, indigo, violet] = colors;

// 4. Use destructuring to assign appropriate variables using the color names.
console.log(red, orange, yellow, green, blue, indigo, violet);

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
[r, o, y, g, b, v] = [red, orange, yellow, green, blue, violet];
console.log(r, o, y, g, b, v);

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
[indg] = [indigo];
console.log(indg);

// Objects
({ muppetName, color, song, job, partner } = muppet);

// 7. Use destructuring to assign all variables using the keys as the variable names
console.log(muppetName, color, song, job, partner);

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
const { nestedJob, nestedPartner } = nestedMuppet;
console.log(song2, song4, nestedJob, nestedPartner);
// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner