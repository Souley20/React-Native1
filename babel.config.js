module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./app/components",
            "@hooks": "./app/hooks",
            "@screens": "./app/screens",
            "@navigation": "./app/naviggation",
          }
        }]
    ]
  }
};
};
