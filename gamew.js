// Get the game ID from the URL query parameters
const params = new URLSearchParams(window.location.search);
const gameId = params.get('gameId');

// Load the corresponding game content based on the game ID
if (gameId === '1') {
  // Load game content for game ID 1
  document.querySelector('.game-content').innerHTML = '<iframe class="game-iframe" src="play/1/index.html"></iframe>';
} else if (gameId === '2') {
  // Load game content for game ID 2
  document.querySelector('.game-content').innerHTML = '<iframe class="game-iframe" src="play/1v1/index.html"></iframe>';
} else {
  // Invalid game ID
  alert('Invalid game ID');
}

// Handle click events for game controls
document.querySelector('.game-control.fullscreen').addEventListener('click', function() {
    // Toggle fullscreen mode for the game window
    const gameWindow = document.querySelector('.game-window');
    if (gameWindow.requestFullscreen) {
      gameWindow.requestFullscreen();
    } else if (gameWindow.webkitRequestFullscreen) {
      gameWindow.webkitRequestFullscreen();
    } else if (gameWindow.msRequestFullscreen) {
      gameWindow.msRequestFullscreen();
    }
  
    // Add the fullscreen class to the game window
    gameWindow.classList.add('fullscreen');
  });
  
document.querySelector('.game-control.minimize').addEventListener('click', function() {
    // Exit fullscreen mode and minimize the game window
    const gameWindow = document.querySelector('.game-window');
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  
    // Remove the fullscreen class from the game window
    gameWindow.classList.remove('fullscreen');
    
    // Display the game window at its default size
    gameWindow.style.display = 'block';
  });
  
  document.querySelector('.game-control.home').addEventListener('click', function() {
    // Navigate back to the homepage
    window.location.href = '/';
  });
