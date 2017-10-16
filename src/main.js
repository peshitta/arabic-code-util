/** @module arabicCodeUtil */

/**
 * Arabic base 22 consonants common to other semitic languages
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
  '\u0627', // ا ARABIC LETTER ALEF
  '\u0628', // ب ARABIC LETTER BEH
  '\u062C', // ج ARABIC LETTER JEEM - Egyptian pronunciation
  '\u062F', // د ARABIC LETTER DAL
  '\u0647', // ه ARABIC LETTER HEH
  '\u0648', // و ARABIC LETTER WAW
  '\u0632', // ز ARABIC LETTER ZAIN
  '\u062D', // ح ARABIC LETTER HAH
  '\u0637', // ط ARABIC LETTER TAH
  '\u064A', // ي ARABIC LETTER YEH
  '\u0643', // ك ARABIC LETTER KAF
  '\u0644', // ل ARABIC LETTER LAM
  '\u0645', // م ARABIC LETTER MEEM
  '\u0646', // ن ARABIC LETTER NOON
  '\u0633', // س ARABIC LETTER SEEN
  '\u0639', // ع ARABIC LETTER AIN
  '\u0641', // ف ARABIC LETTER FEH
  '\u0635', // ص ARABIC LETTER SAD
  '\u0642', // ق ARABIC LETTER QAF
  '\u0631', // ر ARABIC LETTER REH
  '\u0634', // ش ARABIC LETTER SHEEN
  '\u062A' // ت ARABIC LETTER TEH
]);

/**
 * Garshuni extras
 * @constant
 * @type { string[] }
*/
export const extraConsonants = Object.freeze([
  '\u062B', // ث ARABIC LETTER THEH
  '\u062E', // خ ARABIC LETTER KHAH
  '\u0630', // ذ ARABIC LETTER THAL
  '\u0636', // ض ARABIC LETTER DAD
  '\u0638', // ظ ARABIC LETTER ZAH
  '\u063A', // غ ARABIC LETTER GHAIN
  '\u0629', // ة ARABIC LETTER TEH MARBUTA
  '\u0621', // ء Arabic Letter Hamza  - Garshuni hamzah
  '\u0622', // آ ARABIC LETTER ALEF WITH MADDA ABOVE
  '\u0623', // أ ARABIC LETTER ALEF WITH HAMZA ABOVE
  '\u0623', // أ ARABIC LETTER ALEF WITH HAMZA ABOVE
  '\u0624', // ؤ ARABIC LETTER WAW WITH HAMZA ABOVE
  '\u0625', // إ ARABIC LETTER ALEF WITH HAMZA BELOW
  '\u0626' // ئ ARABIC LETTER YEH WITH HAMZA ABOVE
]);

/**
 * All Arabic consonants relevant to Syriac including Garshuni
 * @constant
 * @type { string[] }
 */
export const allConsonants = Object.freeze(consonants.concat(extraConsonants));

/**
 * Arabic/Garshuni vowels
 * @constant
 * @type { string[] }
 */
export const vowels = Object.freeze([
  '\u064E', //  َ Arabic fatha - Garshuni: a
  '\u0670', //  ٰ Arabic letter superscript alef - Garshuni: long a
  '\u0650', //  ِ Arabic kasra - Garshuni: i
  '\u064F', //  ُ Arabic damma - Garshuni: u
  '\u064B', //  ً Arabic fathatan - Garshuni: an
  '\u064D', //  ٍ Arabic kasratan - Garshuni: in
  '\u064C' //  ٌ Arabic dammatan - Garshuni: un
]);

/**
 * Arabic/Garshuni diacritics
 * @constant
 * @type { string[] }
*/
export const diacritics = Object.freeze([
  '\u0651', //  ّ Arabic shadda - Garshuni
  '\u0652', //  ْ ARABIC SUKUN
  '\u0653', //  ٓ Arabic maddah above - Garshuni
  '\u0654', //  ٔ Arabic hamza above - Garshuni
  '\u0655' //  َ Arabic hamza below - Garshuni
]);

/**
 * Arabic punctuation relevant to Syriac
 * @constant
 * @type { string[] }
*/
export const punctuation = Object.freeze([
  '\u060C', // ، Arabic COMMA - also used with Thaana and Syriac in modern text
  '\u061B', // ؛ Arabic Semicolon - also used with Thaana and Syriac in modern text
  '\u061F', // ؟ Arabic Question Mark - also used with Thaana and Syriac in modern text
  '\u0021' // ! Exclamation Mark - regular ASCII exclamation mark
]);

/**
 * Vowels and diacritics: used for consonantal only mapping
 * @constant
 * @type { Array.<string> }
 */
export const dotting = Object.freeze(vowels.concat(diacritics));

/**
 * Is character c an Arabic consonant? Only Syriac relevant are considered.
 * @param { string } c input character
 * @returns { boolean } true if c is Arabic consonant
 */
export const isConsonant = c => allConsonants.indexOf(c) > -1;

/**
 * Is character c a vowel?
 * @param { string } c input character
 * @returns { boolean } true if c is a vowel
 */
export const isVowel = c => vowels.indexOf(c) > -1;

/**
 * Is character c a diacritic.
 * @param { string } c input character
 * @returns { boolean } true if c is a diacritic
 */
export const isDiacritic = c => diacritics.indexOf(c) > -1;

/**
 * Is character c a punctuation character.
 * @param { string } c input character
 * @returns { boolean } true if c is punctuation
 */
export const isPunctuation = c => punctuation.indexOf(c) > -1;

/**
 * Returns true if c is dotting character
 * @param { string } c input character
 * @returns { boolean } true if c is dotting
 */
export const isDotting = c => dotting.indexOf(c) > -1;

/**
 * Return true if input word has vowels or diacritics
 * @param { string } word input Arabic Unicode word
 * @returns { boolean } true if word has vowels or diacritics
 */
export const isDotted = word => {
  if (!word) {
    return false;
  }
  for (let i = 0, len = word.length; i < len; i++) {
    const c = word.charAt(i);
    if (isDotting(c)) {
      return true;
    }
  }
  return false;
};

/**
 * Remove dotting (vowels and diacritics), leaving consonantal word only.
 * @param { string } word input word to be processed
 * @returns { string } consonantal word
 */
export const removeDotting = word => {
  if (!word) {
    return word;
  }

  let hasDotting = false;
  const stack = [];
  for (let i = 0, len = word.length; i < len; i++) {
    const c = word.charAt(i);
    if (isDotting(c)) {
      hasDotting = true;
    } else {
      stack.push(c);
    }
  }
  return hasDotting ? stack.join('') : word;
};
