export const MENU = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLyJL_N7hFPDuwv0wo7U2xhx5998SMhEf654WJnD6D8eGws_JtVapvsqYifFYs80ZSUzpu0sm8Pslm8yWHDJQbhLiO9T04nDkf-3qajTekjHqcWgXIQw-UIiqxuT-_nlAScdrQZxCbDNU4dfKe7bvdGUjIBYF0CUV7-qqOLvBehFgmhzLUJ2ePYBxzCkfh__0T0wEt1W61AAZZ737ynLwyewhFmW_fi_9Al4qD6Ws",
    slug: "flat-white",
    name: "Flat White",
    price: 4.75,
    desc: "Double ristretto with micro-textured milk.",
    tone: "a",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUCvNFN0RnGAM_05n-jiYxQ8f-T_qscD7jlvGLx-y_6kT7Ewnccj8QugeLAfr2FxmSubYcSfp035zOnMBxcrz4ZKFHTcTQhN37wDWyXeKtbCcUdXKziy6Nm-TUCydlZKoUxWQwnFLlS7v9wI_dsjsZdbrCCzc9pZF4mZoQpvClF57ek32cwT7HOY9pXgHvU6IWSh6bdV9MrwbrPAbR2C3tc8Y_OZBXmJY1C6vDNcY",
    slug: "slow-pour-over",
    name: "Slow Pour-Over",
    price: 6.0,
    desc: "Single origin pour-over, Japanese filter brew.",
    tone: "b",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDox5sCoZMzZiVRU_3ZTtVmTY876qJ2ko0WGtlCHxpeNVGhS8tj57NZL2pQKTjaGAuurpkjmTueHrz_3T4ovJmeaYAtK1nEvqePxnV6AQhb81dyLoBeGXQcyqIAW8buPQ2b4WWcPTb6dvP6Z-gfXahMEAOvVMYypejT-w8HtoIVq6TAeF7Y-z3nruz2xgNCRZa6TjIHPRVBqP6fKlFmeEsB7Ubipc5PTd-LAX3zTtI",
    slug: "batch-brew",
    name: "Batch Brew",
    price: 4.0,
    desc: "Light roast batch brew on daily rotation.",
    tone: "d",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLyJL_N7hFPDuwv0wo7U2xhx5998SMhEf654WJnD6D8eGws_JtVapvsqYifFYs80ZSUzpu0sm8Pslm8yWHDJQbhLiO9T04nDkf-3qajTekjHqcWgXIQw-UIiqxuT-_nlAScdrQZxCbDNU4dfKe7bvdGUjIBYF0CUV7-qqOLvBehFgmhzLUJ2ePYBxzCkfh__0T0wEt1W61AAZZ737ynLwyewhFmW_fi_9Al4qD6Ws",
    slug: "iced-tonic-espresso",
    name: "Iced Tonic Espresso",
    price: 6.5,
    desc: "Espresso over artisan tonic and ice.",
    tone: "b",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUCvNFN0RnGAM_05n-jiYxQ8f-T_qscD7jlvGLx-y_6kT7Ewnccj8QugeLAfr2FxmSubYcSfp035zOnMBxcrz4ZKFHTcTQhN37wDWyXeKtbCcUdXKziy6Nm-TUCydlZKoUxWQwnFLlS7v9wI_dsjsZdbrCCzc9pZF4mZoQpvClF57ek32cwT7HOY9pXgHvU6IWSh6bdV9MrwbrPAbR2C3tc8Y_OZBXmJY1C6vDNcY",
    slug: "ceremonial-matcha",
    name: "Ceremonial Matcha",
    price: 7.0,
    desc: "First-harvest stone ground Uji matcha.",
    tone: "c",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoWkxvsIgER8gT4NNOGBlcAnSLzckFbHYIxbT5o59f9d9TuEIYjvrO_qKwH2TF4sHiy2HRyKucNaFa19i6xROxMIbTCpIGfndrsyIlUEZwpACAuUtJ29WzNlQ5bBLzh-FnWPjFpfWOMbJRhyWJqGGz7ULEEWlSrQftXhIWfHoec7emJP1MinYtW1jDdxKt5gvX1KaVWipkTbOBUQeedj9y6nLKx_wRL1TugYdhK4o",
    slug: "cardamom-brioche",
    name: "Cardamom Brioche",
    price: 5.0,
    desc: "Laminated sourdough knot with fresh cardamom.",
    tone: "e",
  },
];
export const money = (v) => `$${v.toFixed(2)}`;
export const findItem = (slug) => MENU.find((m) => m.slug === slug);
