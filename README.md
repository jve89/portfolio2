# __The Number Guessing Game__

Welcome to the Number Guessing Game website! This website is specially designed to be easy to use, intuitive and fun! This website has been written using the 3 main pillars of the web, namely HTML, CSS and Javascript. The game takes a random number between 1 and 500. To you the task to figure out which number it is! You only have 10 attempts though.... Good luck!

![Am I responsive?](TO BE FINISHED!)


## __Features__

In this chapter, I will go over the Number Guessing Game existing features and future features that still need to be implemented.

### __Existing features__

- __The Number Guessing Game logo and heading__
  
Featured at the top center of the page, the Number Guessing Game logo and heading are easy to read due to the larger font size and it describes in just 3 words what the website is about. The logo itself is positioned left of the header text and was found on google using the search term: 'numbers'.

![NGG logo](assets/IMG/logo.png)

- __The Game area__
  
Just below the header and logo of the Number Guessing Game website, you'll find the actual game area of the website. It's just like the header and logo positioned in the center of the website and consists of 3 areas.
 - The text label asking you to 'guess a number
 - The input area asking you to fill in a number between 1 and 500
 - The submit button to check your number. The submit button is both operable by clicking it using your mouse as well as using the 'enter' key on your keyboard.

![Game area](assets/IMG/game-area.png)

- __The result area__

The result area is initially not visible on the website, although the space for this area is already reserved just below the game area. The result area becomes visual after submitting your first attempt. The result area consists of the following 3 elements:
  - Information area, that shows you if your answer was wrong or right. The wrong answer is colored red, and the right answer is colored green. 
  - Hint area, that shows you whether your guessed number is too low or to high. Using this information, you can narrow down the range of possible right answers.
  - The attempted numbers area. This area shows you your previous attempted numbers, so you won't forget the numbers you already used so far.

  ![Results area](assets/IMG/results-area.png)

- __The reset area__

The reset area only becomes visible after your game is over. The game is over after not guessing the right number within 10 attempts or after succeeding to guess the right number. Your input field and submit button will both be disabled when the reset area becomes visible. The reset area consists of the following 3 elements:
  - Information area, that shows you this time whether the game is over unsuccesfully (in red) or succesfully (in green).
  - The attempted numbers area. Your previously attempted numbers will still be visible.
  - The reset button. A new button will appear to reset the game and start right at the beginning. This button is clickable by mouse as well as by pressing the enter key on your keyboard.

  ![Reset area right](assets/IMG/resetbutton.right.png)
  ![Reset area wrong](assets/IMG/resetbutton.wrong.png)
  


  




To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

------

## Release History

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**September 1 2021:** Remove `PGHOSTADDR` environment variable.

**July 19 2021:** Remove `font_fix` script now that the terminal font issue is fixed.

**July 2 2021:** Remove extensions that are not available in Open VSX.

**June 30 2021:** Combined the P4 and P5 templates into one file, added the uptime script. See the FAQ at the end of this file.

**June 10 2021:** Added: `font_fix` script and alias to fix the Terminal font issue

**May 10 2021:** Added `heroku_config` script to allow Heroku API key to be stored as an environment variable.

**April 7 2021:** Upgraded the template for VS Code instead of Theia.

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

------

## FAQ about the uptime script

**Why have you added this script?**

It will help us to calculate how many running workspaces there are at any one time, which greatly helps us with cost and capacity planning. It will help us decide on the future direction of our cloud-based IDE strategy.

**How will this affect me?**

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.

It is not possible for us or anyone else to trace the random ID back to an individual, and no personal data is being captured. It will not slow down the workspace or affect your work.

**So….?**

We want to tell you this so that we are being completely transparent about the data we collect and what we do with it.

**Can I opt out?**

Yes, you can. Since no personally identifiable information is being captured, we'd appreciate it if you let the script run; however if you are unhappy with the idea, simply run the following commands from the terminal window after creating the workspace, and this will remove the uptime script:

```
pkill uptime.sh
rm .vscode/uptime.sh
```

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!
