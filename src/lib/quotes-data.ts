
export type Quote = {
  id: string;
  text: string;
  category: string;
  author?: string;
};

export const categories = [
  { id: "all", label: "ಎಲ್ಲಾ", icon: "✨" },
  { id: "life", label: "ಜೀವನ", icon: "🌱" },
  { id: "motivation", label: "ಸ್ಪೂರ್ತಿ", icon: "🚀" },
  { id: "love", label: "ಪ್ರೀತಿ", icon: "❤️" },
  { id: "success", label: "ಯಶಸ್ಸು", icon: "🏆" },
  { id: "friendship", label: "ಸ್ನೇಹ", icon: "🤝" }
];

export const quotes: Quote[] = [
  {
    id: "1",
    category: "motivation",
    text: "ಗೆಲುವಿನ ಹಾದಿಯಲ್ಲಿ ಸಾವಿರಾರು ಕಲ್ಲುಗಳು ಸಿಗಬಹುದು, ಆದರೆ ಅವುಗಳನ್ನು ಮೆಟ್ಟಿ ನಿಂತಾಗಲೇ ಶಿಖರ ತಲುಪಲು ಸಾಧ್ಯ.",
    author: "Unknown"
  },
  {
    id: "2",
    category: "life",
    text: "ಬದುಕು ಒಂದು ಸುಂದರ ಕವನ, ಅದನ್ನು ಓದುವ ಕಲೆ ನಮಗೆ ಗೊತ್ತಿರಬೇಕು ಅಷ್ಟೆ.",
    author: "Unknown"
  },
  {
    id: "3",
    category: "love",
    text: "ಪ್ರೀತಿ ಎಂದರೆ ಕೇವಲ ಒಟ್ಟಿಗೆ ಇರುವುದಲ್ಲ, ಒಬ್ಬರನ್ನೊಬ್ಬರು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು.",
    author: "Unknown"
  },
  {
    id: "4",
    category: "success",
    text: "ಶ್ರಮ ಪಡದೆ ಸಿಗುವ ಯಶಸ್ಸು ನೆಮ್ಮದಿ ನೀಡುವುದಿಲ್ಲ.",
    author: "Unknown"
  },
  {
    id: "5",
    category: "friendship",
    text: "ಒಳ್ಳೆಯ ಸ್ನೇಹಿತರು ಸಿಗುವುದು ಅದೃಷ್ಟ, ಅವರನ್ನು ಉಳಿಸಿಕೊಳ್ಳುವುದು ನಮ್ಮ ಸಂಸ್ಕಾರ.",
    author: "Unknown"
  },
  {
    id: "6",
    category: "motivation",
    text: "ಸೋಲು ಎನ್ನುವುದು ಅಂತ್ಯವಲ್ಲ, ಅದು ಗೆಲುವಿನ ಮೊದಲ ಹೆಜ್ಜೆ.",
    author: "Unknown"
  },
  {
    id: "7",
    category: "life",
    text: "ನೆನ್ನೆ ನಡೆದ ಘಟನೆಗಳ ಬಗ್ಗೆ ಚಿಂತಿಸಬೇಡಿ, ಇಂದು ನಿಮ್ಮ ಕೈಯಲ್ಲಿದೆ.",
    author: "Unknown"
  }
];
