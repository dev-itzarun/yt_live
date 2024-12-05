export function generateIframe(id, width, height, options = {}) {
  // Destructure options with default values
  const {
    pictureInPicture = true, // Default is true
    webShare = true, // Default is true
    allowFullscreen = true, // Default is true
  } = options;

  // Construct the `allow` attribute based on the options
  const allowAttributes = [
    pictureInPicture ? "picture-in-picture" : null,
    webShare ? "web-share" : null,
    "accelerometer", // Always allowed
    "autoplay",
    "clipboard-write",
    "encrypted-media",
    "gyroscope",
  ]
    .filter(Boolean) // Remove null values
    .join("; "); // Join with semicolons

  return `<iframe 
                width="${width}" 
                height="${height}" 
                src="https://www.youtube.com/embed/live_stream?channel=${id}" 
                frameborder="0" 
                allow="${allowAttributes}" 
                style="border: 0; margin: 0; padding: 0; overflow: hidden;" 
                ${allowFullscreen ? "allowfullscreen" : ""}>
            </iframe>`;
}

// For browsers without module support (UMD-style export)
if (typeof window !== "undefined") {
  window.generateIframe = generateIframe;
}
