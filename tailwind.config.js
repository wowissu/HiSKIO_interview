
module.exports = {
  theme: {
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      2: '2 2 0%',
      '1/3': '1 1 33%',
      '1/4': '1 1 25%'
    },
    extend: {
      height: {
        '50px': '50px'
      },
      width: {
        '320px': '320px',
        '140px': '140px'
      },
      colors: {
        'hi-brand': '#308eac',
        'hi-white': '#bfbfbf',
        'hi-gray': '#8c8c8c',
        'hi-price': '#454545',
        'input-gray': '#fafafa',
        'title-gray': '#454545'
      },
      inset: {
        '30px': '30px'
      },
      boxShadow: {
        'inner-b': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.6)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
    // ...
  ]
};
