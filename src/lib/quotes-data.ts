
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

export function getQuoteById(id: string): Quote | undefined {
  return quotes.find(q => q.id === id);
}

export const quotes: Quote[] = [
  // Motivation
  { id: "1", category: "motivation", text: "ಗೆಲುವಿನ ಹಾದಿಯಲ್ಲಿ ಸಾವಿರಾರು ಕಲ್ಲುಗಳು ಸಿಗಬಹುದು, ಆದರೆ ಅವುಗಳನ್ನು ಮೆಟ್ಟಿ ನಿಂತಾಗಲೇ ಶಿಖರ ತಲುಪಲು ಸಾಧ್ಯ." },
  { id: "2", category: "motivation", text: "ಸೋಲು ಎನ್ನುವುದು ಅಂತ್ಯವಲ್ಲ, ಅದು ಗೆಲುವಿನ ಮೊದಲ ಹೆಜ್ಜೆ." },
  { id: "3", category: "motivation", text: "ನಿಮ್ಮ ಗುರಿ ತಲುಪುವ ತನಕ ವಿಶ್ರಮಿಸಬೇಡಿ." },
  { id: "4", category: "motivation", text: "ಕನಸು ಕಾಣುವುದು ಸುಲಭ, ಆದರೆ ಅದನ್ನು ನನಸಾಗಿಸಲು ಪರಿಶ್ರಮ ಬೇಕು." },
  { id: "5", category: "motivation", text: "ನಿನಗೆ ನೀನೇ ಶಕ್ತಿ, ನಿನಗೆ ನೀನೇ ಸ್ಪೂರ್ತಿ." },
  { id: "6", category: "motivation", text: "ಕಾಲ ಯಾರಿಗಾಗಿಯೂ ಕಾಯುವುದಿಲ್ಲ, ಸಿಕ್ಕ ಅವಕಾಶವನ್ನು ಬಳಸಿಕೊ." },
  { id: "7", category: "motivation", text: "ಧೈರ್ಯವಾಗಿ ಮುನ್ನುಗ್ಗಿ, ಜಗತ್ತು ನಿನ್ನ ಹಿಂದೆ ಬರುತ್ತದೆ." },
  { id: "8", category: "motivation", text: "ನಿನ್ನ ವ್ಯಕ್ತಿತ್ವವೇ ನಿನ್ನ ಅಸ್ತಿತ್ವ." },
  { id: "9", category: "motivation", text: "ಕಷ್ಟಗಳು ಬಂದಾಗ ಕುಗ್ಗಬೇಡಿ, ಅವು ನಿಮ್ಮನ್ನು ಬಲಿಷ್ಠಗೊಳಿಸಲು ಬರುತ್ತವೆ." },
  { id: "10", category: "motivation", text: "ಸಾಧನೆಗೆ ಅಸಾಧ್ಯವಾದುದು ಯಾವುದೂ ಇಲ್ಲ." },
  { id: "11", category: "motivation", text: "ಪ್ರಯತ್ನ ಮಾಡದೆ ಸೋಲು ಒಪ್ಪಿಕೊಳ್ಳಬೇಡಿ." },
  { id: "12", category: "motivation", text: "ನಿಮ್ಮ ಮೇಲಿನ ನಂಬಿಕೆಯೇ ನಿಮ್ಮ ಅತಿ ದೊಡ್ಡ ಆಸ್ತಿ." },
  { id: "13", category: "motivation", text: "ಬದಲಾವಣೆ ಜಗದ ನಿಯಮ, ಆದರೆ ಯಶಸ್ಸು ನಿಮ್ಮ ನಿರ್ಧಾರ." },
  { id: "14", category: "motivation", text: "ಮೌನವಾಗಿ ಶ್ರಮಿಸಿ, ನಿಮ್ಮ ಯಶಸ್ಸು ಸದ್ದು ಮಾಡಲಿ." },
  { id: "15", category: "motivation", text: "ಪ್ರತಿ ದಿನವೂ ಹೊಸ ಆರಂಭಕ್ಕೆ ಅವಕಾಶ." },
  { id: "16", category: "motivation", text: "ನಿನ್ನನ್ನು ನೀನು ನಂಬಿದರೆ ಇಡೀ ಪ್ರಪಂಚ ನಿನ್ನನ್ನು ನಂಬುತ್ತದೆ." },
  { id: "17", category: "motivation", text: "ಆಲಸ್ಯವು ಮನುಷ್ಯನ ಅತಿ ದೊಡ್ಡ ಶತ್ರು." },
  { id: "18", category: "motivation", text: "ಓಟ ನಿಲ್ಲಿಸಬೇಡಿ, ಗಮ್ಯ ದೂರವಿಲ್ಲ." },
  { id: "19", category: "motivation", text: "ಗೆದ್ದಾಗ ಬೀಗಬೇಡಿ, ಸೋತಾಗ ಕುಗ್ಗಬೇಡಿ." },
  { id: "20", category: "motivation", text: "ಪರಿಶ್ರಮಕ್ಕೆ ತಕ್ಕ ಪ್ರತಿಫಲ ಖಂಡಿತ ಸಿಗುತ್ತದೆ." },

  // Life
  { id: "21", category: "life", text: "ಬದುಕು ಒಂದು ಸುಂದರ ಕವನ, ಅದನ್ನು ಓದುವ ಕಲೆ ನಮಗೆ ಗೊತ್ತಿರಬೇಕು ಅಷ್ಟೆ." },
  { id: "22", category: "life", text: "ನೆನ್ನೆ ನಡೆದ ಘಟನೆಗಳ ಬಗ್ಗೆ ಚಿಂತಿಸಬೇಡಿ, ಇಂದು ನಿಮ್ಮ ಕೈಯಲ್ಲಿದೆ." },
  { id: "23", category: "life", text: "ಜೀವನದಲ್ಲಿ ಸಂತೋಷವಾಗಿರಲು ದೊಡ್ಡ ಕಾರಣಗಳು ಬೇಕಿಲ್ಲ." },
  { id: "24", category: "life", text: "ಅನುಭವವೇ ಜೀವನದ ಅತ್ಯುತ್ತಮ ಶಿಕ್ಷಕ." },
  { id: "25", category: "life", text: "ಸರಳತೆಯೇ ಸೌಂದರ್ಯ, ತಾಳ್ಮೆಯೇ ಶಕ್ತಿ." },
  { id: "26", category: "life", text: "ಬದುಕಿನ ಹಾದಿಯಲ್ಲಿ ಬರುವ ಪ್ರತಿಯೊಬ್ಬರೂ ಏನಾದರೂ ಕಲಿಸುತ್ತಾರೆ." },
  { id: "27", category: "life", text: "ಯಾರನ್ನೂ ಅತಿಯಾಗಿ ನಂಬಬೇಡಿ, ನೆರಳು ಕೂಡ ಕತ್ತಲಲ್ಲಿ ನಿಮ್ಮನ್ನು ಬಿಟ್ಟು ಹೋಗುತ್ತದೆ." },
  { id: "28", category: "life", text: "ಜೀವನದಲ್ಲಿ ಹಣಕ್ಕಿಂತ ಗುಣ ಮುಖ್ಯ." },
  { id: "29", category: "life", text: "ಕಾಲ ಎಲ್ಲವನ್ನೂ ಕಲಿಸುತ್ತದೆ." },
  { id: "30", category: "life", text: "ನಗು ನಿಮ್ಮ ಮುಖದ ಮೇಲಿರಲಿ, ನೆಮ್ಮದಿ ನಿಮ್ಮ ಮನದಲ್ಲಿರಲಿ." },
  { id: "31", category: "life", text: "ಬದುಕು ಸುಂದರವಾಗಿರಬೇಕಾದರೆ ಆಲೋಚನೆಗಳು ಸುಂದರವಾಗಿರಬೇಕು." },
  { id: "32", category: "life", text: "ನನ್ನ ಬದುಕು ನನ್ನ ದಾರಿ." },
  { id: "33", category: "life", text: "ಮನುಷ್ಯತ್ವವೇ ಶ್ರೇಷ್ಠ ಧರ್ಮ." },
  { id: "34", category: "life", text: "ಕಷ್ಟ ಸುಖದ ಸಮನ್ವಯವೇ ಜೀವನ." },
  { id: "35", category: "life", text: "ಯಾರ ಮನಸ್ಸನ್ನು ನೋಯಿಸಬೇಡಿ, ಕಾಲ ಎಲ್ಲದಕ್ಕೂ ಉತ್ತರ ನೀಡುತ್ತದೆ." },
  { id: "36", category: "life", text: "ನಿನ್ನ ಅಂತರಾತ್ಮ ಹೇಳುವುದನ್ನು ಕೇಳು." },
  { id: "37", category: "life", text: "ಪರಿಸ್ಥಿತಿ ಹೇಗಿದ್ದರೂ ಹೊಂದಿಕೊಳ್ಳುವುದೇ ಬದುಕು." },
  { id: "38", category: "life", text: "ಜೀವನದಲ್ಲಿ ಏನನ್ನಾದರೂ ಸಾಧಿಸಬೇಕಾದರೆ ಒಂದಷ್ಟು ಕಳೆದುಕೊಳ್ಳಲೇಬೇಕು." },
  { id: "39", category: "life", text: "ಯಾರ ಜೊತೆಗೂ ನಿಮ್ಮನ್ನು ಹೋಲಿಸಿಕೊಳ್ಳಬೇಡಿ." },
  { id: "40", category: "life", text: "ಪ್ರತಿ ಕ್ಷಣವನ್ನೂ ಆನಂದಿಸಿ." },

  // Love
  { id: "41", category: "love", text: "ಪ್ರೀತಿ ಎಂದರೆ ಕೇವಲ ಒಟ್ಟಿಗೆ ಇರುವುದಲ್ಲ, ಒಬ್ಬರನ್ನೊಬ್ಬರು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು." },
  { id: "42", category: "love", text: "ಮನಸಾರೆ ಪ್ರೀತಿಸುವ ಮನಸ್ಸಿಗೆ ಸಾವಿಲ್ಲ." },
  { id: "43", category: "love", text: "ನಿನ್ನ ನೆನಪುಗಳೇ ನನ್ನ ಬದುಕಿನ ಆಸರೆ." },
  { id: "44", category: "love", text: "ಪ್ರೀತಿ ಎಂಬುದು ನಂಬಿಕೆಯ ಮೇಲೆ ನಿಂತಿರುತ್ತದೆ." },
  { id: "45", category: "love", text: "ಕಣ್ಣಿನ ಭಾಷೆ ಪ್ರೀತಿಗೆ ಸಾಕ್ಷಿ." },
  { id: "46", category: "love", text: "ನಿನ್ನ ಜೊತೆಗಿನ ಮಾತುಗಳೇ ನನಗೆ ಹಬ್ಬ." },
  { id: "47", category: "love", text: "ಪ್ರೀತಿಗೆ ಬೆಲೆ ಕಟ್ಟಲಾಗದು." },
  { id: "48", category: "love", text: "ಒಮ್ಮೆ ಪ್ರೀತಿಸಿದರೆ ಅದು ಜೀವನಪೂರ್ತಿ ಇರಲಿ." },
  { id: "49", category: "love", text: "ನಿನ್ನ ನಗು ನನ್ನ ಪ್ರಪಂಚ." },
  { id: "50", category: "love", text: "ಮಾತಿಗಿಂತ ಭಾವನೆಗಳು ಪ್ರೀತಿಯಲ್ಲಿ ಮುಖ್ಯ." },
  { id: "51", category: "love", text: "ಪ್ರೇಮವೇ ದೈವತ್ವ." },
  { id: "52", category: "love", text: "ನಿನ್ನ ಪ್ರೀತಿಯೇ ನನ್ನ ಶಕ್ತಿ." },
  { id: "53", category: "love", text: "ಸದಾ ನಿನ್ನ ಜೊತೆ ಇರಬೇಕೆಂಬ ಆಸೆ." },
  { id: "54", category: "love", text: "ಪ್ರೀತಿ ಮೌನವಾಗಿದ್ದರೂ ಸುಂದರ." },
  { id: "55", category: "love", text: "ನನ್ನ ಹೃದಯದ ಮಿಡಿತ ನೀನು." },
  { id: "56", category: "love", text: "ನಂಬಿಕೆ ಇಲ್ಲದ ಪ್ರೀತಿ ಗಾಳಿಪಟದಂತೆ." },
  { id: "57", category: "love", text: "ನಿನ್ನ ನೋಟದಲ್ಲಿದೆ ಏನೋ ಮೋಡಿ." },
  { id: "58", category: "love", text: "ಪ್ರೀತಿಗೆ ಜಾತಿ ಧರ್ಮಗಳ ಹಂಗಿಲ್ಲ." },
  { id: "59", category: "love", text: "ಸಾವಿರಾರು ಜನರ ಮಧ್ಯೆ ನೀನು ನನಗೊಬ್ಬಳೇ." },
  { id: "60", category: "love", text: "ಪ್ರೀತಿ ಎಂಬುದು ಒಂದು ಮಧುರ ಭಾವ." },

  // Success
  { id: "61", category: "success", text: "ಶ್ರಮ ಪಡದೆ ಸಿಗುವ ಯಶಸ್ಸು ನೆಮ್ಮದಿ ನೀಡುವುದಿಲ್ಲ." },
  { id: "62", category: "success", text: "ಯಶಸ್ಸು ಎಂದರೆ ಸೋಲನ್ನು ಗೆಲ್ಲುವುದು." },
  { id: "63", category: "success", text: "ಸತತ ಪ್ರಯತ್ನವೇ ಯಶಸ್ಸಿನ ಗುಟ್ಟು." },
  { id: "64", category: "success", text: "ಸಾಧಕನಿಗೆ ಸಾವು ಅಂತ್ಯವಲ್ಲ." },
  { id: "65", category: "success", text: "ಯಶಸ್ಸು ಎಂಬುದು ಅದೃಷ್ಟವಲ್ಲ, ಅದು ಹಾರ್ಡ್ ವರ್ಕ್." },
  { id: "66", category: "success", text: "ಸಮಯದ ಸದ್ಬಳಕೆಯೇ ಯಶಸ್ಸಿನ ಮೂಲ." },
  { id: "67", category: "success", text: "ದೊಡ್ಡ ಗುರಿ ಇರಲಿ, ಅದಕ್ಕಾಗಿ ಶ್ರಮಿಸಿ." },
  { id: "68", category: "success", text: "ಟೀಕೆಗಳಿಗೆ ನಿಮ್ಮ ಯಶಸ್ಸೇ ಉತ್ತರವಾಗಿರಲಿ." },
  { id: "69", category: "success", text: "ಹಿಂದೆ ಸರಿಯಬೇಡಿ, ಯಶಸ್ಸು ಹತ್ತಿರದಲ್ಲಿದೆ." },
  { id: "70", category: "success", text: "ಜ್ಞಾನವೇ ಯಶಸ್ಸಿನ ಮೆಟ್ಟಿಲು." },
  { id: "71", category: "success", text: "ಪ್ಲಾನ್ ಮಾಡಿ ಕೆಲಸ ಮಾಡಿ." },
  { id: "72", category: "success", text: "ನಿಮ್ಮ ಮೇಲೆ ನಂಬಿಕೆ ಇಡಿ." },
  { id: "73", category: "success", text: "ಯಶಸ್ಸಿಗೆ ಯಾವುದೇ ಶಾರ್ಟ್‌ಕಟ್ ಇಲ್ಲ." },
  { id: "74", category: "success", text: "ಒಳ್ಳೆಯ ಆಲೋಚನೆಗಳೇ ಯಶಸ್ಸಿನ ಅಡಿಪಾಯ." },
  { id: "75", category: "success", text: "ಸೋಲಿನಿಂದ ಕಲಿಯುವುದು ಬಹಳಷ್ಟಿದೆ." },
  { id: "76", category: "success", text: "ನಿಮ್ಮ ಕೆಲಸವೇ ನಿಮ್ಮ ಗುರುತು." },
  { id: "77", category: "success", text: "ಗುರಿ ಮುಟ್ಟುವ ತನಕ ಶ್ರಮ ನಿಲ್ಲದಿರಲಿ." },
  { id: "78", category: "success", text: "ಕನಸು ಕಾಣಿ, ಅದನ್ನು ಸಾಧಿಸಿ ತೋರಿಸಿ." },
  { id: "79", category: "success", text: "ಯಶಸ್ಸು ಒಂದು ಪ್ರಯಾಣ, ಗಮ್ಯವಲ್ಲ." },
  { id: "80", category: "success", text: "ಸದಾ ಕಲಿಯುತ್ತಾ ಇರಿ." },

  // Friendship
  { id: "81", category: "friendship", text: "ಒಳ್ಳೆಯ ಸ್ನೇಹಿತರು ಸಿಗುವುದು ಅದೃಷ್ಟ, ಅವರನ್ನು ಉಳಿಸಿಕೊಳ್ಳುವುದು ನಮ್ಮ ಸಂಸ್ಕಾರ." },
  { id: "82", category: "friendship", text: "ಸ್ನೇಹಕ್ಕೆ ಸಾವಿಲ್ಲ, ಅದರ ಪ್ರೀತಿಗೆ ಬೆಲೆಯಿಲ್ಲ." },
  { id: "83", category: "friendship", text: "ಕಷ್ಟ ಕಾಲದಲ್ಲಿ ಕೈ ಹಿಡಿಯುವವನೇ ನಿಜವಾದ ಗೆಳೆಯ." },
  { id: "84", category: "friendship", text: "ಗೆಳೆತನ ಎಂಬುದು ರಕ್ತ ಸಂಬಂಧಕ್ಕಿಂತ ಮಿಗಿಲು." },
  { id: "85", category: "friendship", text: "ಒಳ್ಳೆಯ ಗೆಳೆಯ ಸಾವಿರ ಸಂಬಂಧಗಳಿಗೆ ಸಮ." },
  { id: "86", category: "friendship", text: "ಸ್ನೇಹದಲ್ಲಿ ಮುಚ್ಚುಮರೆ ಇರಬಾರದು." },
  { id: "87", category: "friendship", text: "ನಗು ಹಂಚಿಕೊಳ್ಳುವವನಿಗಿಂತ ಕಣ್ಣೀರು ಒರೆಸುವವನು ನಿಜವಾದ ಗೆಳೆಯ." },
  { id: "88", category: "friendship", text: "ನನ್ನ ಗೆಳೆಯನೇ ನನ್ನ ಶಕ್ತಿ." },
  { id: "89", category: "friendship", text: "ಸ್ನೇಹವೆಂಬ ಹೂವು ಎಂದಿಗೂ ಬಾಡದಿರಲಿ." },
  { id: "90", category: "friendship", text: "ನಿನ್ನ ಯಶಸ್ಸನ್ನು ಸಂಭ್ರಮಿಸುವವನೇ ಗೆಳೆಯ." },
  { id: "91", category: "friendship", text: "ಗೆಳೆತನಕ್ಕೆ ಜಾತಿ ಹಂಗಿಲ್ಲ." },
  { id: "92", category: "friendship", text: "ನಿಜವಾದ ಸ್ನೇಹಕ್ಕೆ ಮೌನವೂ ಅರ್ಥವಾಗುತ್ತದೆ." },
  { id: "93", category: "friendship", text: "ಸ್ನೇಹಿತರ ದಿನಾಚರಣೆ ಪ್ರತಿದಿನವೂ ಹೌದು." },
  { id: "94", category: "friendship", text: "ಗೆಳೆಯನ ತಪ್ಪುಗಳನ್ನು ತಿದ್ದುವವನೇ ಶ್ರೇಷ್ಠ." },
  { id: "95", category: "friendship", text: "ಬದುಕಿನ ಹಾದಿಯಲ್ಲಿ ಜೊತೆಯಾಗುವವನೇ ಗೆಳೆಯ." },
  { id: "96", category: "friendship", text: "ಸ್ನೇಹ ಎಂಬುದು ಒಂದು ಪವಿತ್ರ ಬಂಧ." },
  { id: "97", category: "friendship", text: "ಯಾರೇ ಬಂದ್ರೂ ಗೆಳೆಯನ ಸ್ಥಾನ ತುಂಬಲಾಗದು." },
  { id: "98", category: "friendship", text: "ಜೀವನಪೂರ್ತಿ ಜೊತೆ ಇರುವ ಗೆಳೆತನ ಬೇಕು." },
  { id: "99", category: "friendship", text: "ಗೆಳೆಯನೇ ನೀನೆ ನನ್ನ ಪ್ರಪಂಚ." },
  { id: "100", category: "friendship", text: "ಸ್ನೇಹದ ಸವಿ ಎಂದಿಗೂ ಮಾಸದು." }
];
