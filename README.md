# Chrome extension with typescript + react/antd + webpack bootstrap

This is a simple templare of a chrome extension with react and typescript.
There probably are better ways to make it work but this is how I made it work.
I used antd as a lib for react but this can easily be removed.

This simply displays a button in the popup, that sends a message to the background
that executes a script in the current page showing an alert. The options page is
empty.

## Install

Checkout the repository and go into it then run:

```
npm install
```

Update your extension "key" in static/manifest.json.

## Run in dev

```
npm run watch
```

This will automatically rebuild the files when a change happens.

## Create prod build

```
npm run build
```
