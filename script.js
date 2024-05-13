function displayCurrentTime(elementId) {
    // Get the current date and time
    const now = new Date();

    // Extract hours and minutes from the current time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    // Construct the time string in 12-hour format
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const timeString = `${formattedHours}:${minutes}`;

    // Display the formatted time in the specified element
    const timeDisplayElement = document.getElementById(elementId);
    if (timeDisplayElement) {
        timeDisplayElement.textContent = `${timeString}`;
    } else {
        console.error(`Element with ID '${elementId}' not found.`);
    }
}

// Call the function to display current time in different elements
displayCurrentTime('timeDisplay1');
displayCurrentTime('timeDisplay2');
displayCurrentTime('timeDisplay3');
displayCurrentTime('timeDisplay4');
displayCurrentTime('timeDisplay5');
displayCurrentTime('timeDisplay6');


// Update the time every minute (60000 milliseconds)
setInterval(() => {
    displayCurrentTime('timeDisplay1');
    displayCurrentTime('timeDisplay2');
}, 60000); // Update time every minute















