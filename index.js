// Write your code in this file!
const currentUser = 'Grace Hopper';
//const WelcomeMessage = 'Welcome to Flatbook,'+currentUser;
const welcomeMessage = 'WELCOME TO FLATBOOK,${Grace Hopper}!';
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
//const shortGreeting ="";
//const shortGreeting = 'Welcome,';
//const shortGreetiing = 'Welcome, ${currentUser}!';
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;