##MakeDev Mobile##

Building of project is managed with **grunt**

## How to start (*nix)
* `git clone https://github.com/evheniy/MakeDevMobile YOUR_PROJECT_DIRECTORY`
* `cd YOUR_PROJECT_DIRECTORY`
* `sh install-env.sh` *Requires root access*, if you have bower, grunt and grunt-cli installed, skip it.
* `sh install-deps.sh` *Should work without root access.*
* `grunt` - Should run do some work on building examples, run tests in Chrome(Chrome window will blink once) and open working examples in your default browser.
* `git remote remove origin` and `git remote add origin YOUR_REPO_URL` - change origin from this repo to your one.
* `git push origin master --set-upstream` 

## Implemented grunt commands
* `grunt`, `grunt serve` - start connect server and rebuild project on every change.
* `grunt lint` - check code style of .js and .jsx files.
* `grunt clean` - remove all build results.
* `grunt build` - build project(clean, then lint, then compile less and jsx, then run all tests).
* `grunt test` - run project tests in chrome browser. *PhantomJS doesn't work yet.*
