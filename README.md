# arabic-code-util

[![npm version](https://badge.fury.io/js/arabic-code-util.svg)](https://badge.fury.io/js/arabic-code-util)
[![npm module downloads](http://img.shields.io/npm/dt/arabic-code-util.svg)](https://www.npmjs.org/package/arabic-code-util)
[![Build Status](https://travis-ci.org/peshitta/arabic-code-util.svg?branch=master)](https://travis-ci.org/peshitta/arabic-code-util)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/arabic-code-util/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/arabic-code-util.svg)](https://david-dm.org/peshitta/arabic-code-util)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/arabic-code-util/badge.svg?branch=master)](https://coveralls.io/github/peshitta/arabic-code-util?branch=master)
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Arabic Unicode utilities - handling only Garshuni subset

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install arabic-code-util --save
```

Following bundles are available:
* `arabic-code-util.js` - UMD ES5 version for use in browser, node, etc.
* `arabic-code-util.min.js` - minified version of `arabic-code-util.js`
* `arabic-code-util.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/arabic-code-util/-/arabic-code-util-1.0.7.tgz](https://registry.npmjs.org/arabic-code-util/-/arabic-code-util-1.0.7.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/arabic-code-util/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/arabic-code-util/issues).

To read quick updates about the app or post questions or feedback, follow
[@peshittap](https://www.twitter.com/peshittap)
at [![@peshittap](http://i.imgur.com/wWzX9uB.png "@peshittap")](https://www.twitter.com/peshittap)or
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [arabicCodeUtil](#module_arabicCodeUtil)
    * [.consonantsByName](#module_arabicCodeUtil.consonantsByName) : <code>Object.&lt;string, string&gt;</code>
    * [.consonants](#module_arabicCodeUtil.consonants) : <code>Array.&lt;string&gt;</code>
    * [.extraConsonants](#module_arabicCodeUtil.extraConsonants) : <code>Array.&lt;string&gt;</code>
    * [.allConsonants](#module_arabicCodeUtil.allConsonants) : <code>Array.&lt;string&gt;</code>
    * [.vowelsByName](#module_arabicCodeUtil.vowelsByName) : <code>Object.&lt;string, string&gt;</code>
    * [.vowels](#module_arabicCodeUtil.vowels) : <code>Array.&lt;string&gt;</code>
    * [.diacriticsByName](#module_arabicCodeUtil.diacriticsByName) : <code>Object.&lt;string, string&gt;</code>
    * [.diacritics](#module_arabicCodeUtil.diacritics) : <code>Array.&lt;string&gt;</code>
    * [.punctuation](#module_arabicCodeUtil.punctuation) : <code>Array.&lt;string&gt;</code>
    * [.letterAsciiMap](#module_arabicCodeUtil.letterAsciiMap) : <code>Object.&lt;string, string&gt;</code>
    * [.dotting](#module_arabicCodeUtil.dotting) : <code>Array.&lt;string&gt;</code>
    * [.isConsonant](#module_arabicCodeUtil.isConsonant) ⇒ <code>boolean</code>
    * [.isVowel](#module_arabicCodeUtil.isVowel) ⇒ <code>boolean</code>
    * [.isDiacritic](#module_arabicCodeUtil.isDiacritic) ⇒ <code>boolean</code>
    * [.isPunctuation](#module_arabicCodeUtil.isPunctuation) ⇒ <code>boolean</code>
    * [.isDotting](#module_arabicCodeUtil.isDotting) ⇒ <code>boolean</code>
    * [.isDotted](#module_arabicCodeUtil.isDotted) ⇒ <code>boolean</code>
    * [.removeDotting](#module_arabicCodeUtil.removeDotting) ⇒ <code>string</code>
    * [.sort](#module_arabicCodeUtil.sort) ⇒ <code>number</code>

<a name="module_arabicCodeUtil.consonantsByName"></a>

### arabicCodeUtil.consonantsByName : <code>Object.&lt;string, string&gt;</code>
Arabic consonants by name

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
<a name="module_arabicCodeUtil.consonants"></a>

### arabicCodeUtil.consonants : <code>Array.&lt;string&gt;</code>
Arabic base 22 consonants common to other semitic languages

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
<a name="module_arabicCodeUtil.extraConsonants"></a>

### arabicCodeUtil.extraConsonants : <code>Array.&lt;string&gt;</code>
Garshuni extras

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
<a name="module_arabicCodeUtil.allConsonants"></a>

### arabicCodeUtil.allConsonants : <code>Array.&lt;string&gt;</code>
All Arabic consonants relevant to Syriac including Garshuni

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
<a name="module_arabicCodeUtil.vowelsByName"></a>

### arabicCodeUtil.vowelsByName : <code>Object.&lt;string, string&gt;</code>
Arabic/Garshuni vowels by name

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
<a name="module_arabicCodeUtil.vowels"></a>

### arabicCodeUtil.vowels : <code>Array.&lt;string&gt;</code>
Arabic/Garshuni vowels

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
<a name="module_arabicCodeUtil.diacriticsByName"></a>

### arabicCodeUtil.diacriticsByName : <code>Object.&lt;string, string&gt;</code>
Arabic/Garshuni diacritics by name

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
<a name="module_arabicCodeUtil.diacritics"></a>

### arabicCodeUtil.diacritics : <code>Array.&lt;string&gt;</code>
Arabic/Garshuni diacritics

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
<a name="module_arabicCodeUtil.punctuation"></a>

### arabicCodeUtil.punctuation : <code>Array.&lt;string&gt;</code>
Arabic punctuation relevant to Syriac

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
<a name="module_arabicCodeUtil.letterAsciiMap"></a>

### arabicCodeUtil.letterAsciiMap : <code>Object.&lt;string, string&gt;</code>
CAL to ordinal ASCII value. Used for sorting:
a b c d e f g h i j k l m n o p q r s t u v w x
y z { |

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
<a name="module_arabicCodeUtil.dotting"></a>

### arabicCodeUtil.dotting : <code>Array.&lt;string&gt;</code>
Vowels and diacritics: used for consonantal only mapping

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
<a name="module_arabicCodeUtil.isConsonant"></a>

### arabicCodeUtil.isConsonant ⇒ <code>boolean</code>
Is character c an Arabic consonant? Only Syriac relevant are considered.

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
**Returns**: <code>boolean</code> - true if c is Arabic consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_arabicCodeUtil.isVowel"></a>

### arabicCodeUtil.isVowel ⇒ <code>boolean</code>
Is character c a vowel?

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
**Returns**: <code>boolean</code> - true if c is a vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_arabicCodeUtil.isDiacritic"></a>

### arabicCodeUtil.isDiacritic ⇒ <code>boolean</code>
Is character c a diacritic.

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
**Returns**: <code>boolean</code> - true if c is a diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_arabicCodeUtil.isPunctuation"></a>

### arabicCodeUtil.isPunctuation ⇒ <code>boolean</code>
Is character c a punctuation character.

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
**Returns**: <code>boolean</code> - true if c is punctuation  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_arabicCodeUtil.isDotting"></a>

### arabicCodeUtil.isDotting ⇒ <code>boolean</code>
Returns true if c is dotting character

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
**Returns**: <code>boolean</code> - true if c is dotting  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_arabicCodeUtil.isDotted"></a>

### arabicCodeUtil.isDotted ⇒ <code>boolean</code>
Return true if input word has vowels or diacritics

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
**Returns**: <code>boolean</code> - true if word has vowels or diacritics  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input Arabic Unicode word |

<a name="module_arabicCodeUtil.removeDotting"></a>

### arabicCodeUtil.removeDotting ⇒ <code>string</code>
Remove dotting (vowels and diacritics), leaving consonantal word only.

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
**Returns**: <code>string</code> - consonantal word  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word to be processed |

<a name="module_arabicCodeUtil.sort"></a>

### arabicCodeUtil.sort ⇒ <code>number</code>
Comparator function to be used for sorting words

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
**Returns**: <code>number</code> - -1, 0, 1 depending on word sorting  

| Param | Type | Description |
| --- | --- | --- |
| word1 | <code>string</code> | first word to compare |
| word2 | <code>string</code> | second word to compare |

