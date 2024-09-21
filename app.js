document.getElementById('downloadForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const videoUrl = document.getElementById('videoUrl').value;

  try {
    const response = await fetch('/api/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: videoUrl }),
    });

    const data = await response.json();
    const downloadLink = document.getElementById('downloadLink');
    
    if (data.downloadUrl) {
      downloadLink.innerHTML = `<a href="${data.downloadUrl}" target="_blank">Click here to download video</a>`;
    } else {
      downloadLink.innerHTML = `<p style="color:red;">Error: ${data.error}</p>`;
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to download the video');
  }
});
