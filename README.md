## Bloc Frontend Project Starter

Bloc Jams is modeled after services such as Spotify and iTunes. The landing page highlights Bloc Jams' features in an enticing, attention-grabbing format, and features CSS elements such as text shadowing and transition animations. Bullet points are accompanied by graphics from the Ionicons font library. The header at the top provides a link to the Collection page, which displays the user's albums in an appealing grid-based organization scheme. Clicking an album links to the Album page, a which provides the album's songlist. Each line provides the song's track number, title and duration. By hovering over a song, the track number animates into a play or pause button, depending on if the song is currently playing or not. Finally, I incorporated a player bar at the bottom of the screen that provides a more user-friendly controller for music playback. Listeners are able to play, pause, skip forward or backward, and determine volume level.  The control also features an interactive slider bar that updates with each second of playback. 

I built the site using a real-time preview with Node. This helped facilitate a fluid trail-and-error development process.

## Technologies Used

Languages & libraries: HTML, CSS, JavaScript, Angular, jQuery, Buzz audio library (buzz.jaysalvat.com)

## How to Install

### Pull Down the Code

Start by cloning the repository:

```
$ git clone https://github.com/Bloc/bloc-frontend-project-starter.git <your-frontend-project-name>
```

### Reset Git

This will be your personal project. So all of the past commit history that we used to build this starter app aren't needed. Also you will want to be able to push/pull code from your personal remote (Github) repository and NOT Bloc's remote (Github) repository.

Remove the existing local Git repository:

```
$ rm -r -f .git
```

Initialize a new Git repository, add all of these existing files, and commit them:

```
$ git init
$ git add .
$ git commit -m "initial commit"
```

Go to Github and create a new repository. Add that new repository as the proper remote. Then push your initial commit.

```
$ git remote add origin <URL TO NEW GITHUB REPO>
$ git push origin master
```
