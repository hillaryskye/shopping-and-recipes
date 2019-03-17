# ShoppingAndRecipes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



### How to fix npm and permission issues
What are you going to need to reinstall?
Before you begin, I suggest you get a list of your globally installed packages so you know what to reinstall later:

npm list -g --depth=0
Sample output:

/usr/lib
├── bower@1.3.12
├── grunt-cli@0.1.13
├── gulp@3.8.10
├── npm@1.4.28
└── yo@1.3.3
Tell npm to install packages to home
By default, npm installs packages under /usr/lib/node_modules or /usr/local/lib/node_modules depending on your OS / distribution.
If you’re curious, you can check like this:

npm config get prefix
Your install path is the output of the above command plus /node_modules.
So if the command outputs /usr/lib then your install path is /usr/lib/node_modules.

The first step is to get it to install to your home directory instead.

npm config set prefix ~/npm
Fix your paths
Next, you need to add the appropriate paths to your environment variables…

# open your .bashrc (Linux) or .bash_profile (Mac) file for editing:
nano ~/.bashrc # for Linux
# or...
nano ~/.bash_profile # for Mac if you haven't created a .bashrc file

# add these lines:
export PATH="$PATH:$HOME/npm/bin"
export NODE_PATH="$NODE_PATH:$HOME/npm/lib/node_modules"

# save the file and then enter this command to make the changes take effect:
. ~/.bashrc
# or...
. ~/.bash_profile
Take ownership
Now you need to take ownership of everything that has previously been installed in ~/.npm.
Anything that was previously installed using sudo npm install will be owned by root and will cause problems later.

# optionally check to see if anything is owned by root:
ls -la ~/.npm

# take ownership of everything in your ~/.npm directory (must be run with sudo):
sudo chown -R $USER:`id -g -n $USER` ~/.npm
Reinstall your global packages
Finally, reinstall all your global packages (the ones you checked for in the first step)… this time without sudo!

# no sudo necessary :)
npm install -g bower
npm install -g grunt-cli
npm install -g gulp
npm install -g yo

npm uninstall -g angular-cli @angular/cli
npm cache clean --force
npm install -g @angular/cli


. ~/.bashrc
sudo chown -R $USER:`id -g -n $USER` ~/.npm
npm install -g @angular/cli