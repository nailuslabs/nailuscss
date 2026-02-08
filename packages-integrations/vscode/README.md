<p align="center" style="background-color: #FFFF99; padding: 15px; border-radius: 5px;">
  <strong>⚠️ nailus CSS is Sunsetting ⚠️</strong><br>
  We are sunsetting nailus CSS and we recommend new projects to seek for alternatives. Read the <a href="https://nailuscss.org/posts/sunsetting.html">full blog post</a>.
</p>

<hr>

# nailus CSS Intellisense

nailus CSS IntelliSense enhances the nailus development experience by providing Visual Studio Code users with advanced features such as autocomplete, syntax highlighting, code folding, and building.

## Installation

**[Install via the Visual Studio Code Marketplace →](https://marketplace.visualstudio.com/items?itemName=voorjaar.nailuscss-intellisense)**

**[Install via the Open VSX Registry →](https://open-vsx.org/extension/voorjaar/nailuscss-intellisense)**

This plugin packs a nailuscss compiler, so you can use it without installing nailuscss, and it also supports the configuration file `(tailwind|nailus).config.(js|cjs|ts)`.

## Configuration

> By default VS Code will not trigger completions when editing "string" content. Updating the `editor.quickSuggestions` setting may improve your experience:

```json
"editor.quickSuggestions": {
  "strings": true
}
```

> Vscode css validation may display errors when using nailus syntax, such as @apply. You can disable this with the `css.validate setting:

```json
"css.validate": false
```

## Features

### Autocomplete

Intelligent suggestions for utilities and variants.

<img src="https://raw.githubusercontent.com/nailuscss/nailuscss-intellisense/main/screenshots/completion.png" alt="Auto Complete"/>

### Hover Preview

See the complete CSS for a class name by hovering over it.

<img src="https://raw.githubusercontent.com/nailuscss/nailuscss-intellisense/main/screenshots/hover.png" alt="Hover Preview"/>

### Syntax Highlighting

Highlight utilities, variants and importants.

<img src="https://raw.githubusercontent.com/nailuscss/nailuscss-intellisense/main/screenshots/highlight.png" alt="Syntax Highlighting"/>

### Color Preview

Preview color and spectrum.

<img src="https://raw.githubusercontent.com/nailuscss/nailuscss-intellisense/main/screenshots/color.png" alt="Color Preview"/>

### Code Folding

> disabled by default, activate with "nailuscss.enableCodeFolding"

Fold overly long classes to increase readability.

<img src="https://raw.githubusercontent.com/nailuscss/nailuscss-intellisense/main/screenshots/highlight.png" alt="Code Folding"/>

### Compile Commands

Built-in commands, one-key operation.

<img src="https://raw.githubusercontent.com/nailuscss/nailuscss-intellisense/main/screenshots/commands.png" alt="Compile Commands"/>

### Visual Analyzer

Browse your utilities usages, have an overview of your design system, identify "bad practices", and more!

<img src="https://raw.githubusercontent.com/nailuscss/nailuscss-intellisense/main/screenshots/analyzer.png" alt="Visual Analyzer"/>

## Extension Settings

| Settings                           | type    | default  | description                                                  |
| :--------------------------------- | :------ | :------- | :----------------------------------------------------------- |
| `nailuscss.enableColorDecorators`   | boolean | true     | Enable Color Decorators.                                     |
| `nailuscss.enableHoverPreview`      | boolean | true     | Enable hover className to show preview of CSS.               |
| `nailuscss.enableCodeCompletion`    | boolean | true     | Enable/Disable all code completions.                         |
| `nailuscss.enableUtilityCompletion` | boolean | true     | Enable Utility Completion.                                   |
| `nailuscss.enableVariantCompletion` | boolean | true     | Enable Variant Completion.                                   |
| `nailuscss.enableDynamicCompletion` | boolean | true     | Enable Dynamic Utilities Completion like p-{int}.           |
| `nailuscss.enableBracketCompletion` | boolean | true     | Enable Square Bracket Utilities Completion like bg-[#ff0].           |
| `nailuscss.enableAttrUtilityCompletion` | boolean | true | Enable Utility Completion For Attributify Mode.              |
| `nailuscss.enableAttrVariantCompletion` | boolean | true | Enable Variant Completion For Attributify Mode.              |
| `nailuscss.enableRemToPxPreview`    | boolean | true     | Enable Rem to Px Preview.                                    |
| `nailuscss.rootFontSize`            | number  | 16       | Used to convert rem CSS values to their px equivalents.      |
| `nailuscss.enableEmmetCompletion`   | boolean | false    | Enable . trigger for emmet.                                  |
| `nailuscss.enableCodeFolding`       | boolean | false    | Enable ClassNames Code Folding.                              |
| `nailuscss.colorDecoratorsType`     | string  | 'cube'   | Configure the type of color decorations, optional ['border', 'bg', 'cube', 'picker'], default is 'cube'. |
| `nailuscss.foldByLength`            | boolean | false    | Folding code by length. Default option is false, will fold by utility count. |
| `nailuscss.foldCount`               | number  | 3        | Used by foldByCount.                                         |
| `nailuscss.foldLength`              | number  | 25       | Used by foldByLength                                         |
| `nailuscss.hiddenText`              | string  | ` ...`   | Placeholder used when folding code.                          |
| `nailuscss.hiddenTextColor`         | string  | \#AED0A4 | Placeholder Color.                                           |
| `nailuscss.sortOnSave`              | boolean | false    | Runs class sorting on file save.                             |
| `nailuscss.includeLanguages`        | object  | {}       | Add additional file types.                                   |

Give an example of `nailuscss.includeLanguages`

```js
"nailuscss.includeLanguages": {
  "abc": "html", // css, js
  "def": {
    "type": "css"
  },
  "ghi": {
    "type": "js",
    "patterns": ["@apply\s+\S+$", "..." ],
  },
}
```

## For more information

* [nailus CSS](https://github.com/nailuscss/nailuscss)
* [Documentation](https://nailuscss.org)
* [Discussions](https://github.com/nailuscss/nailuscss/discussions)
* [Issues](https://github.com/nailuscss/nailuscss-intellisense/issues)
