

const ShareButton = () => {

    const handleFacebookShare = () => {
        window.open('https://www.facebook.com/sharer/sharer.php?u=https://www.example.com/contact', '_blank');
      };
    
      // Function to handle Twitter share
      const handleTwitterShare = () => {
        window.open('https://twitter.com/intent/tweet?url=https://www.example.com/contact&text=Check out this contact page!', '_blank');
      };
    
      // Function to handle Email share
      const handleEmailShare = () => {
        window.location.href = `mailto:?subject=Check out this contact page!&body=I thought you might be interested in this contact page: https://www.example.com/contact`;
      };
    
      // Function to handle Copy link
      const handleCopyLink = () => {
        const url = 'http://localhost:5173';
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      };    return (
        <div>
        {/* Button to share on Facebook */}
        <button onClick={handleFacebookShare} className="btn btn-sm bg-blue-300 font-bold">Share on Facebook</button>
        {/* Button to share on Twitter */}
        <button onClick={handleTwitterShare}  className="btn btn-sm bg-blue-300 font-bold">Share on Twitter</button>
        {/* Button to share via Email */}
        <button onClick={handleEmailShare}  className="btn btn-sm bg-blue-300 font-bold">Share via Email</button>
        {/* Button to copy the link */}
        <button onClick={handleCopyLink}  className="btn btn-sm bg-blue-300 font-bold">Copy Link</button>
      </div>
  )
}

export default ShareButton