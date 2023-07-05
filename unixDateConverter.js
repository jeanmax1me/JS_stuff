const resetTimestamp = 1688543044; // Replace with your actual reset timestamp

// Convert the Unix timestamp to milliseconds
const resetTimeMs = resetTimestamp * 1000;

// Create a new Date object with the reset time
const resetDate = new Date(resetTimeMs);

// Extract the date and time components
const resetDateString = resetDate.toLocaleDateString();
const resetTimeString = resetDate.toLocaleTimeString();

console.log("Rate limit will reset on:", resetDateString, "at", resetTimeString);
