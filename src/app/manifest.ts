export default function manifest() {
    return {
      name: "Kannada Quotes Studio",
      short_name: "Kannada Studio",
      description: "Create and share beautiful Kannada quotes for your status",
      start_url: "/",
      display: "standalone",
      background_color: "#000000",
      theme_color: "#FF9500",
      orientation: "portrait",
      icons: [
        {
          src: "/icon-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon-512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    };
  }