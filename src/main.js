/** @module arabicCodeUtil */
import { hasDotting, clearDotting } from 'aramaic-mapper';

/**
 * Arabic consonants by name
 * @constant
 * @type { Object.<string, string> }
*/
export const consonantsByName = Object.freeze(
  Object.create(null, {
    alef: { value: '\u0627', enumerable: true }, // ا ARABIC LETTER ALEF
    beh: { value: '\u0628', enumerable: true }, // ب ARABIC LETTER BEH
    jeem: { value: '\u062C', enumerable: true }, // ج ARABIC LETTER JEEM - Egyptian pronunciation
    dal: { value: '\u062F', enumerable: true }, // د ARABIC LETTER DAL

    heh: { value: '\u0647', enumerable: true }, // ه ARABIC LETTER HEH
    waw: { value: '\u0648', enumerable: true }, // و ARABIC LETTER WAW
    zain: { value: '\u0632', enumerable: true }, // ز ARABIC LETTER ZAIN

    hah: { value: '\u062D', enumerable: true }, // ح ARABIC LETTER HAH
    tah: { value: '\u0637', enumerable: true }, // ط ARABIC LETTER TAH
    yeh: { value: '\u064A', enumerable: true }, // ي ARABIC LETTER YEH

    kaf: { value: '\u0643', enumerable: true }, // ك ARABIC LETTER KAF
    lam: { value: '\u0644', enumerable: true }, // ل ARABIC LETTER LAM
    meem: { value: '\u0645', enumerable: true }, // م ARABIC LETTER MEEM
    noon: { value: '\u0646', enumerable: true }, // ن ARABIC LETTER NOON

    seen: { value: '\u0633', enumerable: true }, // س ARABIC LETTER SEEN
    ain: { value: '\u0639', enumerable: true }, // ع ARABIC LETTER AIN
    feh: { value: '\u0641', enumerable: true }, // ف ARABIC LETTER FEH
    sad: { value: '\u0635', enumerable: true }, // ص ARABIC LETTER SAD

    qaf: { value: '\u0642', enumerable: true }, // ق ARABIC LETTER QAF
    reh: { value: '\u0631', enumerable: true }, // ر ARABIC LETTER REH
    sheen: { value: '\u0634', enumerable: true }, // ش ARABIC LETTER SHEEN
    teh: { value: '\u062A', enumerable: true }, // ت ARABIC LETTER TEH

    theh: { value: '\u062B', enumerable: true }, // ث ARABIC LETTER THEH
    khah: { value: '\u062E', enumerable: true }, // خ ARABIC LETTER KHAH
    thal: { value: '\u0630', enumerable: true }, // ذ ARABIC LETTER THAL
    dad: { value: '\u0636', enumerable: true }, // ض ARABIC LETTER DAD
    zah: { value: '\u0638', enumerable: true }, // ظ ARABIC LETTER ZAH
    ghain: { value: '\u063A', enumerable: true } // غ ARABIC LETTER GHAIN
  })
);

/**
 * Arabic base 22 consonants common to other semitic languages
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
  consonantsByName.alef, // ا ARABIC LETTER ALEF
  consonantsByName.beh, // ب ARABIC LETTER BEH
  consonantsByName.jeem, // ج ARABIC LETTER JEEM - Egyptian pronunciation
  consonantsByName.dal, // د ARABIC LETTER DAL

  consonantsByName.heh, // ه ARABIC LETTER HEH
  consonantsByName.waw, // و ARABIC LETTER WAW
  consonantsByName.zain, // ز ARABIC LETTER ZAIN

  consonantsByName.hah, // ح ARABIC LETTER HAH
  consonantsByName.tah, // ط ARABIC LETTER TAH
  consonantsByName.yeh, // ي ARABIC LETTER YEH

  consonantsByName.kaf, // ك ARABIC LETTER KAF
  consonantsByName.lam, // ل ARABIC LETTER LAM
  consonantsByName.meem, // م ARABIC LETTER MEEM
  consonantsByName.noon, // ن ARABIC LETTER NOON

  consonantsByName.seen, // س ARABIC LETTER SEEN
  consonantsByName.ain, // ع ARABIC LETTER AIN
  consonantsByName.feh, // ف ARABIC LETTER FEH
  consonantsByName.sad, // ص ARABIC LETTER SAD

  consonantsByName.qaf, // ق ARABIC LETTER QAF
  consonantsByName.reh, // ر ARABIC LETTER REH
  consonantsByName.sheen, // ش ARABIC LETTER SHEEN
  consonantsByName.teh // ت ARABIC LETTER TEH
]);

/**
 * Garshuni extras
 * @constant
 * @type { string[] }
*/
export const extraConsonants = Object.freeze([
  consonantsByName.theh, // ث ARABIC LETTER THEH
  consonantsByName.khah, // خ ARABIC LETTER KHAH
  consonantsByName.thal, // ذ ARABIC LETTER THAL
  consonantsByName.dad, // ض ARABIC LETTER DAD
  consonantsByName.zah, // ظ ARABIC LETTER ZAH
  consonantsByName.ghain, // غ ARABIC LETTER GHAIN

  '\u0629', // ة ARABIC LETTER TEH MARBUTA
  '\u0621', // ء Arabic Letter Hamza  - Garshuni hamzah
  '\u0622', // آ ARABIC LETTER ALEF WITH MADDA ABOVE
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
 * Arabic/Garshuni vowels by name
 * @constant
 * @type { Object.<string, string> }
 */
export const vowelsByName = Object.freeze(
  Object.create(null, {
    fatha: { value: '\u064E', enumerable: true }, //  َ Arabic fatha - Garshuni: a
    superscriptAlef: { value: '\u0670', enumerable: true }, //  ٰ Arabic letter superscript alef - Garshuni: long a
    kasra: { value: '\u0650', enumerable: true }, //  ِ Arabic kasra - Garshuni: i
    damma: { value: '\u064F', enumerable: true }, //  ُ Arabic damma - Garshuni: u

    fathatan: { value: '\u064B', enumerable: true }, //  ً Arabic fathatan - Garshuni: an
    kasratan: { value: '\u064D', enumerable: true }, //  ٍ Arabic kasratan - Garshuni: in
    dammatan: { value: '\u064C', enumerable: true } //  ٌ Arabic dammatan - Garshuni: un
  })
);

/**
 * Arabic/Garshuni vowels
 * @constant
 * @type { string[] }
 */
export const vowels = Object.freeze([
  vowelsByName.fatha, //  َ Arabic fatha - Garshuni: a
  vowelsByName.superscriptAlef, //  ٰ Arabic letter superscript alef - Garshuni: long a
  vowelsByName.kasra, //  ِ Arabic kasra - Garshuni: i
  vowelsByName.damma, //  ُ Arabic damma - Garshuni: u

  vowelsByName.fathatan, //  ً Arabic fathatan - Garshuni: an
  vowelsByName.kasratan, //  ٍ Arabic kasratan - Garshuni: in
  vowelsByName.dammatan //  ٌ Arabic dammatan - Garshuni: un
]);

/**
 * Arabic/Garshuni diacritics by name
 * @constant
 * @type { Object.<string, string> }
*/
export const diacriticsByName = Object.freeze(
  Object.create(null, {
    shadda: { value: '\u0651', enumerable: true }, //  ّ Arabic shadda - Garshuni
    sukun: { value: '\u0652', enumerable: true }, //  ْ Arabic sukun
    maddahAbove: { value: '\u0653', enumerable: true }, //  ٓ Arabic maddah above - Garshuni
    hamzaAbove: { value: '\u0654', enumerable: true }, //  ٔ Arabic hamza above - Garshuni
    hamzaBelow: { value: '\u0655', enumerable: true } //  َ Arabic hamza below - Garshuni
  })
);

/**
 * Arabic/Garshuni diacritics
 * @constant
 * @type { string[] }
*/
export const diacritics = Object.freeze([
  diacriticsByName.shadda, //  ّ Arabic shadda - Garshuni
  diacriticsByName.sukun, //  ْ Arabic sukun
  diacriticsByName.maddahAbove, //  ٓ Arabic maddah above - Garshuni
  diacriticsByName.hamzaAbove, //  ٔ Arabic hamza above - Garshuni
  diacriticsByName.hamzaBelow //  َ Arabic hamza below - Garshuni
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
export const isDotted = hasDotting(isDotting);

/**
 * Remove dotting (vowels and diacritics), leaving consonantal word only.
 * @param { string } word input word to be processed
 * @returns { string } consonantal word
 */
export const removeDotting = clearDotting(isDotting);
