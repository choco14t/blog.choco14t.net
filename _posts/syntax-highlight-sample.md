---
title: 'Syntax Highlight Sample'
excerpt: ''
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2022-05-04T05:35:07.322Z'
author:
  name: JJ Kasper
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

```typescript:sample.ts
import styled from '@emotion/styled'
import NordTheme from '../lib/nord-theme'

const CodeBlockWrapper = styled.div`
  position: relative;
`

const CodeBlockTitle = styled.div`
  background: ${NordTheme.nord3};
  display: table;
  color: ${NordTheme.nord4};
  padding: 0 0.5em;
`

const InlineCodeBloack = styled.code`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0;
  padding: 0 0.2em;
`
```
