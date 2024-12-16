// JavaScript to handle the click event and load the iframe
document.addEventListener('DOMContentLoaded', function() {
    const youtubeFacade = document.querySelector('.youtube-facade');
    const youtubeVideoId = 'https://www.youtube.com/embed/AZG1mgpKIg0?si=XeY8V7siy-Z934cy&amp;controls=1';
  
    youtubeFacade.addEventListener('click', function() {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/AZG1mgpKIg0?si=XeY8V7siy-Z934cy&amp;controls=1?autoplay=1`;
      iframe.width = '560';
      iframe.height = '315';
      iframe.allowFullscreen = true;
  
      // Clear the placeholder content and append the iframe
      youtubeFacade.innerHTML = '';
      youtubeFacade.appendChild(iframe);
    });
  });
  