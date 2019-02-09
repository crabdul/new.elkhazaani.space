---
title: 'VS Code to Vim: Emmet'
cover: ''
date: '2019-02-09'
category: 'tech'
tags:
    - vim
---

This article is one of a 3-part series about plugins I have used to emulate
features I missed when making the transition from VS Code to Vim.

## Emmet

Emmet is indispensible when writing HTML or JSX. It gives you snippets that can
be expanded upon pressing a trigger key. Want to write a `p` tag? Write `p` then
hit the trigger key. Emmet will create the opening and closing tags, and place
your cursor inbetween. No more writing angle brackets.

First, install the plugin. I use [vim-plug](https://github.com/junegunn/vim-plug) as my plugin manager so
the examples will use the syntax specific to it.

```vim 
Plug 'mattn/emmet-vim'
```
Map the trigger key to whatever feels comfortable for you. I use commas as it is my default leader key.

```vim
let g:user_emmet_leader_key=','
```

In order to avoid triggering expansion in unwanted circumstances, emmet's use
can be limited only to scenarios where you require it. I only enable emmet
in INSERT mode on HTML, CSS, SCSS, JS and JSX files.

```vim
let g:user_emmet_install_global = 0
let g:user_emmet_settings = {'javascript.jsx': {'extends': 'jsx'}}
autocmd FileType html,css,javascript.jsx,scss EmmetInstall
let g:user_emmet_mode = 'i'
```

In VS Code, pressing the enter key when the cursor is between the start and end tag will place the cursor between the tags one indentation level in.

```html

<div>|</div>

```

```html

<div>
    |
</div>

```

Without any configuration in vim, pressing enter will leave the cursor in a less desirable position.

```html

<div>
|</div>
```

Let's change this.

A function can be used to detect whether the cursor is between two tags and 
return a command that will place the cursor in the desired positon.

```vim
function! Expander()

    let line   = getline(".")
    let col    = col(".")
    let first  = line[col-2]
    let second = line[col-1]
    let third  = line[col]

    if first ==# ">" && second ==# "<" && third ==# "/"
        return "\<CR>\<C-o>==\<C-o>O"
    else
        return "\<CR>"
    endif

endfunction
```

Now map this function to the carriage return key.

```vim
inoremap <expr> <CR> Expander()
```

Expand away! <span role="img" aria-label="fireworks">🎇🎆</span>
