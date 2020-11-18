const messages = {
    name : ["Trevor", "Cal", "Serena", "Donovan", "Thomas", "Mark", "Lisa", "Chris", "Abbie", "Nick"],
    jokeBase : [["Adore"] ["Adore is between you and me so please open up!"], ["Hike"] ["I didn't know you liked Japanese poetry!"], 
                ["Ice cream soda"]["Ice scream soda people can hear me!"], ["Banana"] ["Orange you glad I didn't say banana?"]]
};

const joke = Math.floor(Math.random()) * messages.jokeBase.length;

console.log(joke);
