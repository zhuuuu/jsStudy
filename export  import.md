## export import 用法
```
//foo.js
export default foo => import foo from 'foo'
export default function foo(){} => import foo from 'foo'

export {foo} => import {foo} from 'foo'
export function foo(){} => import {foo} from 'foo'
export {foo as _foo} => import {_foo} from 'foo'

```
