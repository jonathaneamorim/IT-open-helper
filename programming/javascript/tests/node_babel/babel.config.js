module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            // Define os navegadores que você deseja suportar
          browsers: [
            'last 10 versions'           // Últimas 2 versões de cada navegador
          ]
          },
          useBuiltIns: 'usage', // Adiciona polyfills de acordo com o que o código usa.
          corejs: 3, // Define a versão do core-js.
        },
      ],
    ],
  };
  