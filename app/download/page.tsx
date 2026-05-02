"use client";

export default function DownloadPage() {
  // Function to handle download ONLY when clicked
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Shivansh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Open in new tab too
    window.open("/resume.pdf", "_blank");

    // console.log(
    //   `[${new Date().toLocaleTimeString()}] ✅ User triggered resume download`,
    // );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white text-center p-4">
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
        Download Resume
      </h1>
      <p className="text-gray-400 mb-8 max-w-md">
        Click the button below to save my resume. This helps prevent unnecessary
        server requests.
      </p>

      <button
        onClick={handleDownload}
        className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-cyan-500/20"
      >
        Download PDF
      </button>

      <div className="mt-6 text-sm text-gray-500">
        File size: ~200KB • Format: PDF
      </div>
    </div>
  );
}
