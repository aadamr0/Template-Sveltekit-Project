# Clone project

Duplicate the files

# Initialise project

`pnpm i`

# Styling

Define the design theme in src/styles/globals.css

Only deal with each style in the div root of the component, not outside. so layout for it only.

# Content

Ready to be written in src/routes with pages & layouts as normal.

# Deployment

See deloyment and adapter options [here](https://kit.svelte.dev/docs/adapters)

# Navigation explained

Page transition function takes URL, manually changes opacity of TransitionScreen Component (literally a screen), and manually changes the url. Need custom functions to replace normal behaviour of anchors etc. Can pass colours to change colour of transition screen.
