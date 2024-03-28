# Typescript Utilities


## Example Usage

```typescript
import { checks } from "@billy/tsu";

const values = [1, 2, undefined, 3, 4, null, 5];
const filteredValules = values.filter(checks.hasValue); // [1, 2, 3, 4, 5]
```

