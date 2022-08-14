# tmp-pico-8-with-ts-poc

1. Optionally, in each terminal session below run `nvm i v16.16.0` to install same Node.js version as the one used by
   me (with use of [nvm](https://github.com/nvm-sh/nvm))
2. Make sure you have `pico8` available from the command line. In my case having it on `$PATH` resulted with an error,
   so I made an alias instead: `alias pico8="cd /Applications/PICO-8.app/Contents/MacOS && ./pico8"`.
3. Make sure you have https://github.com/tmountain/pico-8-typescript cloned and its `./node_modules/.bin` available
   on `$PATH`. In my case I did `export PATH="$HOME/Developer/pico-8-typescript/node_modules/.bin/:$PATH"`.
4. Make sure you run `nvm i v16.16.0` and then `npm i` in `pico-8-typescript` directory.

Then:

Run `./bin/tspico8.js run -d <path_to_this_project_here>` and see PICO-8 start, with a red circle drawn in the top-left corner, which you can move around with arrows.   