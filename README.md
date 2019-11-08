# Repro for http://crbug.com/944406

```
yarn install
yarn start
```

Expected:
The button should be clicked and the red square should turn green.

Actual:
The button does not appear to get clicked.

If the iframe uses a page hosted from the local server on an http:// origin then the button does get clicked.
