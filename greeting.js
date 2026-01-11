// Function to get time-based greeting
function getGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    
    let greeting;
    
    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Selamat Pagi";
    } else if (currentHour >= 12 && currentHour < 15) {
        greeting = "Selamat Siang";
    } else if (currentHour >= 15 && currentHour < 18) {
        greeting = "Selamat Sore";
    } else {
        greeting = "Selamat Malam";
    }
    
    return greeting;
}

// Function to update greeting on the page
function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = getGreeting();
    }
}

// Update greeting when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateGreeting();
    
    // Update greeting every minute (in case page is left open)
    setInterval(updateGreeting, 60000);
});