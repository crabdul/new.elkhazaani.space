---
title: 'Git commands for a better workflow'
cover: ''
date: '2019-02-21'
category: 'tech'
tags:
    - git
---

I've collated some git commands which are an essential part of my workflow (interactive rebasing - where would I be without you 😋). Hopefully you'll find some nuggets of wisdom below.

As they are verbose, I've aliased them to save those precious seconds of typing. For aliasing, I use my `.gitconfig` file rather than aliasing in my `.bashrc` file. I prefer keeping my `.bashrc` file clutter free and I figured if Git gives me a place to put aliases, I should put them there 🤷🏻‍♂️.

Git has a quick and easy way of adding aliases to your `.gitconfig`.
Let's alias `checkout` to `co`.

```bash
git config --global alias.co checkout
```

The alias is added to your `.gitconfig` file.

```bash
[alias]
    co = checkout
```

## Git aliases

Want to quickly stage all your modified files

```bash
git ls-files | xargs git add
```

Want to use your re-use your last commit message when commiting staged changes

```bash
git commit -C HEAD@{1}
```

Want to edit the message of the last commit and squash both staged/unstaged changes into the same commit

```
git commit -a --amend
```

Want to interactively rebase your current branch only up to where it diverges with the remote master branch

```bash
git rebase -i HEAD~$(git rev-list --count origin/master..HEAD)
```

Want to time stamp your stashes

```bash
git stash save "$(date)"
```

Want to make sure you're not overwriting commits on the remote branch that you haven't pulled to your local branch when pushing? 

```bash
git push --force-with-lease
```

Want to rebase off remote master?

```bash
git pull --rebase origin master
```

Want to get rid of all uncommitted changes

```bash
git checkout -- .
```

Last but not least - 
want to view all your aliases?

```bash
git config -l | grep alias | cut -c 7-
```

## Bonus

Remembering aliases is hard. Luckily there's a [plugin for remembering forgotten aliases](https://github.com/djui/alias-tips)! If the Git command you're executing has an alias, the plugin will kindly remind you of this alias by printing it to the command line. The plugin also works with shell aliases.
