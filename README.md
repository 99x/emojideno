# emojideno

[![GitHub license](https://img.shields.io/github/license/99xt-incubator/emojideno)](https://github.com/99xt-incubator/emojideno/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/99xt-incubator/emojideno)](https://github.com/99xt-incubator/emojideno/issues)
[![GitHub stars](https://img.shields.io/github/stars/99xt-incubator/emojideno)](https://github.com/99xt-incubator/emojideno/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/99xt-incubator/emojideno)](https://github.com/99xt-incubator/emojideno/network)
[![GitHub last commit](https://img.shields.io/github/last-commit/99xt-incubator/emojideno)](https://img.shields.io/github/last-commit/99xt-incubator/emojideno)

Emoji :smile: for deno developers :+1:

This will convert emoji codes in strings to unicode emojis. 


```typescript
emojize("Emoji :laptop_computer: for deno :+1:") 
```

**Output string**


> Emoji 💻 for deno 👍


**Sample program**

```typescript
import { emojize }  from "https://raw.githubusercontent.com/99xt-incubator/emojideno/master/mod.ts"

console.log(emojize("Emoji :laptop_computer: for deno :+1:"));
```

**How to run sample?**
```
$ deno run https://raw.githubusercontent.com/99xt-incubator/emojideno/master/example.ts
```

## Roadmap

See the [open issues](https://github.com/99xt-incubator/emojideno/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
