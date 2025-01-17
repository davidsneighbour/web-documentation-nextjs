---
title: Additional configuration
slug: content-creation/additional-config
description: null
date: 2022-03-14T08:42:21.626Z
lastmod: 2022-03-14T08:42:22.364Z
weight: 200.4
---

## Preview path

When you want to show the live site/page previews in Visual Studio Code, you can specify a custom preview path/prefix. For instance, if you create blog articles, and you want to prefix it with `blog/2021/11`, you can set this with the `previewPath` property.

There are two ways to set this:

1. Via the global [frontMatter.preview.pathName](https://frontmatter.codes/docs/settings#frontmatter.preview.pathname) setting. This will be used as the default value for all content types.
2. Define a path per content type can be done via the `previewPath` property. Once set, it will ignore the `frontMatter.preview.pathName` setting.

> **Important**: As the value will be formatted with the article's date, it will try to convert all characters you enter. In case you wan to skip some characters or all of them, you need to wrap that part between **two single quotes**. Example: `"'blog/'yyyy/MM"` will result in: `blog/2021/11`.

```json
"frontMatter.taxonomy.contentTypes": [
  {
    "name": "default",
    "previewPath": "'blog/'yyyy/MM",
    "pageBundle": false,
    "fields": [
      ...
    ]
  }
]
```

## Page and leaf bundles

The page or leaf bundles, are a way to group your pages and resources together in a single folder.

```
content/
├── about
│   ├── index.md
├── posts
│   ├── leaf-bundle
│   │   ├── image1.jpg
│   │   ├── image2.png
│   │   └── index.md
│   └── leaf-bundle
│       └── index.md
│
└── another-section
    ├── ..
    └── leaf-bundle
        └── index.md
```

In the above section you can see the `leaf-bundle` folders. These bundles consist of a `index.md` file and possibly also the resouces related to it like images.

By default, Front Matter will create individual Markdown files, but you can also create a leaf bundle. In order to do so, you need to set the `pageBundle` property in your content type to `true`.

Here is an example of configuring the page bundles for the `default` content type:

```json
"frontMatter.taxonomy.contentTypes": [
  {
    "name": "default",
    "pageBundle": true,
    "fields": [
      ...
    ]
  }
]
```

## Creating a template

To make sure that your type of content is already defined when creating a new Markdown file. It will be easier to set the type of content within a template.

You can create Markdown templates in your project's `.frontmatter/templates` folder (or defined differently).

```markdown
---
title: 
slug: 
description: 
date: 2019-08-22T15:20:28.000Z
lastmod: 2019-08-22T15:20:28.000Z
weight: 1
type: documentation
---
```

If you already have an existing page, you can automatically create a template from it by running the `Front Matter: Create a template from the current file` command.

The create template command will ask you the template's name and if you want to include the content. The front matter data is included by default.

## Preserve casing of file names

When you create a new page, the file name will be created based on the sanitized `title` property. During the sanitization, the `title` property will be converted to lowercase and all spaces will be replaced with dashes.

If you want to preserve the casing of the file name, you can set the `frontMatter.file.preserveCasing` setting to `true`.

```json
{
  "frontMatter.file.preserveCasing": true
}
```