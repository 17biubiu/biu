# biu
Biu.js is a utility-belt library for JavaScript that provides support for the usual functional suspects (isArray, isFunction) without extending any core JavaScript objects.
```javascript
npm install 17biu --save-dev
```
when you use es5, you can use it like this:
```javascript
<script type='text/javascript' src='/17biu/index.js'></script>
let arr = [1,2,{'a':3},7]
biu.isArray(arr)
```

when you use es6, you can use it like this:
```javascript
import biu from '17biu'
let arr = [1,2,{'a':3},7]
biu.isArray(arr)
```
