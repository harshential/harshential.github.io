document.addEventListener('DOMContentLoaded', function() {
    // Setup an object containing info related to each individual
    const infoMap = {
        'images/Brittany.jpeg': 'Harsh Prasad - Your profile details here',
        'images/pembroke-welsh-corgi.jpg': 'Person 2 - More details about this person',
        'images/welsh-springer-spaniel.jpg': 'Person 3 - Additional information here',
        'images/Yorkshire%20terrier.jpeg': 'Person 4 - Some more details here'
    };

    // Select all images within the sidebar
    const images = document.querySelectorAll('.sidebar img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            // Decode the src to match keys in the infoMap
            const src = decodeURIComponent(img.getAttribute('src'));
            // Retrieve info based on the decoded image src attribute
            const info = infoMap[src] || 'No information available.';
            displayInfo(info);
        });
    });

    // Function to display information
    function displayInfo(info) {
        // Access or create the info display div
        let infoDisplay = document.getElementById('infoDisplay');
        if (!infoDisplay) {
            infoDisplay = document.createElement('div');
            infoDisplay.id = 'infoDisplay';
            infoDisplay.className = 'info-display';
            document.querySelector('.sidebar').appendChild(infoDisplay);
        }
        // Update the content of the info display div
        infoDisplay.textContent = info;
    }
});
