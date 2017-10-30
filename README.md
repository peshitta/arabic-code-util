# arabic-code-util

[![npm version](https://badge.fury.io/js/arabic-code-util.svg)](https://badge.fury.io/js/arabic-code-util)
[![npm module downloads](http://img.shields.io/npm/dt/arabic-code-util.svg)](https://www.npmjs.org/package/arabic-code-util)
[![Build Status](https://travis-ci.org/peshitta/arabic-code-util.svg?branch=master)](https://travis-ci.org/peshitta/arabic-code-util)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/arabic-code-util/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/arabic-code-util.svg)](https://david-dm.org/peshitta/arabic-code-util)
[![devDependencies Status](https://david-dm.org/peshitta/arabic-code-util/dev-status.svg)](https://david-dm.org/peshitta/arabic-code-util?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/arabic-code-util/badge.svg?branch=master)](https://coveralls.io/github/peshitta/arabic-code-util?branch=master)

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
[https://registry.npmjs.org/arabic-code-util/-/arabic-code-util-1.0.5.tgz](https://registry.npmjs.org/arabic-code-util/-/arabic-code-util-1.0.5.tgz)

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
Thank you!

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [arabicCodeUtil](#module_arabicCodeUtil)
    * [.consonants](#module_arabicCodeUtil.consonants) : <code>Array.&lt;string&gt;</code>
    * [.extraConsonants](#module_arabicCodeUtil.extraConsonants) : <code>Array.&lt;string&gt;</code>
    * [.allConsonants](#module_arabicCodeUtil.allConsonants) : <code>Array.&lt;string&gt;</code>
    * [.vowels](#module_arabicCodeUtil.vowels) : <code>Array.&lt;string&gt;</code>
    * [.diacritics](#module_arabicCodeUtil.diacritics) : <code>Array.&lt;string&gt;</code>
    * [.punctuation](#module_arabicCodeUtil.punctuation) : <code>Array.&lt;string&gt;</code>
    * [.dotting](#module_arabicCodeUtil.dotting) : <code>Array.&lt;string&gt;</code>
    * [.isConsonant](#module_arabicCodeUtil.isConsonant) ⇒ <code>boolean</code>
    * [.isVowel](#module_arabicCodeUtil.isVowel) ⇒ <code>boolean</code>
    * [.isDiacritic](#module_arabicCodeUtil.isDiacritic) ⇒ <code>boolean</code>
    * [.isPunctuation](#module_arabicCodeUtil.isPunctuation) ⇒ <code>boolean</code>
    * [.isDotting](#module_arabicCodeUtil.isDotting) ⇒ <code>boolean</code>
    * [.isDotted](#module_arabicCodeUtil.isDotted) ⇒ <code>boolean</code>
    * [.removeDotting](#module_arabicCodeUtil.removeDotting) ⇒ <code>string</code>

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
<a name="module_arabicCodeUtil.vowels"></a>

### arabicCodeUtil.vowels : <code>Array.&lt;string&gt;</code>
Arabic/Garshuni vowels

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
<a name="module_arabicCodeUtil.diacritics"></a>

### arabicCodeUtil.diacritics : <code>Array.&lt;string&gt;</code>
Arabic/Garshuni diacritics

**Kind**: static constant of [<code>arabicCodeUtil</code>](#module_arabicCodeUtil)  
<a name="module_arabicCodeUtil.punctuation"></a>

### arabicCodeUtil.punctuation : <code>Array.&lt;string&gt;</code>
Arabic punctuation relevant to Syriac

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

