// ========== Navbar Visibility ===========

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 40) { // Change background on a little scroll
        navbar.style.backgroundColor = '#ffffffe2';
        navbar.style.color = '#000'; // Change text color to black
        navbar.style.boxShadow = '0 4px 5px rgba(0, 0, 0, 0.1)'; // Add shadow on scroll

        // Change link colors to black
        const links = navbar.querySelectorAll('a');
        links.forEach(link => {
            link.style.color = '#000'; // Change link color to black
        });
    } else {
        navbar.style.backgroundColor = '#0000006f';
        navbar.style.color = '#ffffffe2'; 
        navbar.style.boxShadow = 'none'; // Remove shadow

        // Reset link colors to white
        const links = navbar.querySelectorAll('a');
        links.forEach(link => {
            link.style.color = 'white'; // Reset link color to white
        });
    }
});

// ============ Side Bar =============

const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('closeButton');

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('open'); // Open the sidebar
    closeButton.classList.remove('rotate'); // Reset rotation when opening
});

closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open'); // Close the sidebar
    closeButton.classList.toggle('rotate'); // Rotate on close
    setTimeout(() => {
        closeButton.classList.remove('rotate'); // Reset rotation after close animation
    }, 500); // Duration should match the transition time
});


// ====================================

const container = document.querySelector('.snipts-container');
let scrollAmount = 0;
const scrollStep = 320; 
const pauseTime = 5000; 

// Function to handle automatic sudden scrolling
function autoScroll() {
    scrollAmount += scrollStep;
    
    // If we've scrolled past the content, reset to the start
    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
    }
    
    // Scroll to the calculated position instantly
    container.scrollTo({
        left: scrollAmount,
        behavior: "auto" // Instant jump scroll (no smooth scrolling)
    });
}

// Set up interval for auto-scrolling
setInterval(autoScroll, pauseTime);

// ====================================

document.addEventListener("DOMContentLoaded", function () {
  const loadingAnimation = document.getElementById("loadingAnimation");
  const videoDesktop = document.getElementById("videoDesktop");
  const videoMobile = document.getElementById("videoMobile");

  // Function to hide the loading animation
  function hideLoadingAnimation() {
    loadingAnimation.style.display = "none";
  }

  // Check if videos are ready to play
  videoDesktop.addEventListener("canplaythrough", hideLoadingAnimation);
  videoMobile.addEventListener("canplaythrough", hideLoadingAnimation);
});
  

