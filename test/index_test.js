const test = require('assert');
const sut = require('../build/arabic-code-util');

describe('Util', () => {
  it('Is Consonant', () => {
    test.ok(sut.isConsonant('ا'), 'ا isConsonant');
    test.ok(sut.isConsonant('ع'), 'ع isConsonant');
    test.ok(sut.isConsonant('ب'), 'ب isConsonant');
    test.ok(sut.isConsonant('ش'), 'ش isConsonant');
    test.ok(sut.isConsonant('ت'), 'ت isConsonant');
    test.ok(sut.isConsonant('ج'), 'ج isConsonant');
    test.ok(sut.isConsonant('ق'), 'ق isConsonant');
    test.ok(!sut.isConsonant('ܩ'), '!ܩ isConsonant');
    test.ok(!sut.isConsonant('b'), '! b isConsonant');
    test.ok(!sut.isConsonant('X'), '! X isConsonant');
  });
  it('Is Vowel', () => {
    test.ok(sut.isVowel('َ'), 'َܲ fatha isVowel');
    test.ok(sut.isVowel('ِ'), 'ِ kasra isVowel');
    test.ok(sut.isVowel('ُ'), 'ܵ damma isVowel');
    test.ok(sut.isVowel('ً'), 'ُ fathatan isVowel');
    test.ok(sut.isVowel('ٍ'), 'ً kasratan isVowel');
    test.ok(sut.isVowel('ٌ'), 'ٍ dammatan isVowel');
    test.ok(sut.isVowel('ٰ'), 'ٌ superscript alef isVowel');
    test.ok(!sut.isVowel('a'), 'a isVowel');
    test.ok(!sut.isVowel('ܺ'), 'ܺ isVowel');
    test.ok(!sut.isVowel('ܻ'), 'ܻ isVowel');
    test.ok(!sut.isVowel('ܼ'), 'ܼ isVowel');
    test.ok(!sut.isVowel('ܽ'), 'ܽ isVowel');
    test.ok(!sut.isVowel('U'), 'U isVowel');
    test.ok(!sut.isVowel(':'), ': isVowel');
    test.ok(!sut.isVowel(''), "! '' isVowel");
  });
  it('Is Diacritic', () => {
    test.ok(sut.isDiacritic('ٓ'), 'maddah isDiacritic');
    test.ok(sut.isDiacritic('ٔ'), 'hamza above isDiacritic');
    test.ok(sut.isDiacritic('ّ'), 'shadda isDiacritic');

    test.ok(!sut.isDiacritic('̈'), '̈ isDiacritic');
    test.ok(!sut.isDiacritic('̄'), '̄ isDiacritic');
    test.ok(!sut.isDiacritic("'"), "! ' isDiacritic");
    test.ok(!sut.isDiacritic(','), '! , isDiacritic');
    test.ok(!sut.isDiacritic('*'), '! * isDiacritic');
    test.ok(!sut.isDiacritic('_'), '! _ isDiacritic');
    test.ok(!sut.isDiacritic(''), "! '' isDiacritic");
    test.ok(!sut.isDiacritic(' '), "! ' ' isDiacritic");
  });
  it('Is Punctuation', () => {
    test.ok(sut.isPunctuation('؟'), '؟ isPunctuation');
    test.ok(sut.isPunctuation('!'), '! isPunctuation');
    test.ok(sut.isPunctuation('؛'), "؛ '' isPunctuation");
    test.ok(!sut.isPunctuation(' '), "! ' ' isPunctuation");
    test.ok(!sut.isPunctuation('&'), '! & isPunctuation');
    test.ok(!sut.isPunctuation('.'), '! . isPunctuation');
    test.ok(!sut.isPunctuation('`'), '! ` isPunctuation');
    test.ok(!sut.isPunctuation('~'), '! ~ isPunctuation');
    test.ok(!sut.isPunctuation(','), '! , isPunctuation');
  });
  it('Is Dotting', () => {
    test.ok(sut.isDotting('َ'), 'َܲ fatha isDotting');
    test.ok(sut.isDotting('ِ'), 'ِ kasra isDotting');
    test.ok(sut.isDotting('ُ'), 'ܵ damma isDotting');
    test.ok(sut.isDotting('ً'), 'ُ fathatan isDotting');
    test.ok(sut.isDotting('ٍ'), 'ً kasratan isDotting');
    test.ok(sut.isDotting('ٌ'), 'ٍ dammatan isDotting');
    test.ok(sut.isDotting('ٰ'), 'ٌ superscript alef isDotting');
    test.ok(sut.isDotting('ٓ'), 'maddah isDotting');
    test.ok(sut.isDotting('ٔ'), 'hamza above isDotting');
    test.ok(sut.isDotting('ّ'), 'shadda isDotting');

    test.ok(!sut.isDotting("'"), "! ' isDotting");
    test.ok(!sut.isDotting(','), '! , isDotting');
    test.ok(!sut.isDotting('*'), '! * isDotting');
    test.ok(!sut.isDotting('_'), '! _ isDotting');
    test.ok(!sut.isDotting(''), "! '' isDotting");
    test.ok(!sut.isDotting(' '), "! ' ' isDotting");
  });
  it('Remove Dotting', () => {
    let word = 'أَبْجَدِي';
    let expected = 'أبْجدي';
    test.strictEqual(
      sut.removeDotting(word),
      expected,
      'أَبْجَدِي removeDotting'
    );
    word = 'أَلِفْبَائِي';
    expected = 'ألفْبائي';
    test.strictEqual(
      sut.removeDotting(word),
      expected,
      'أَلِفْبَائِي removeDotting'
    );

    word = 'الأَبْجَدِيَّة العَرَبِيَّة';
    expected = 'الأبْجدية العربية';
    test.strictEqual(
      sut.removeDotting(word),
      expected,
      'الأَبْجَدِيَّة العَرَبِيَّة removeDotting'
    );

    word = 'رسالة';
    expected = 'رسالة';
    test.strictEqual(sut.removeDotting(word), expected, 'رسالة removeDotting');

    test.strictEqual(sut.removeDotting("'"), "'", "' removeDotting");
    test.strictEqual(sut.removeDotting(','), ',', ', removeDotting');
    test.strictEqual(sut.removeDotting('*'), '*', '* removeDotting');
    test.strictEqual(sut.removeDotting('_'), '_', '_ removeDotting');
    test.strictEqual(sut.removeDotting(''), '', "'' removeDotting");
    test.strictEqual(sut.removeDotting(' '), ' ', "' ' removeDotting");
  });
});
