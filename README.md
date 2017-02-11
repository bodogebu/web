# Project Name

Carcassonne-like Boardgame Tournament Website

## Installation

1. get Node.js version 6.9.1
2. clone the repository
3. `npm install`
4. gulp
5. open the index.html file

## Usage

This is an template for an easy Carcassonne-like website.

To modify the contents, modify the josn files, and the images.

###-tile.json
Where all the tile datas are stored.
```
{
  "type": "TYPE OF THE TILE",
  "text": "THE TITLE SHOWN ON THE TILE",
  "image": "IMAGE USED",
  "position": "POSITION ON THE 4x4 TILE",
  "direction": "ROTATION OF THE TILE"
}
```
For type `wait`, it will show an image.

The position is set within the 4x4, where starts from the left top tile, counts up when it goes right, and right bottom tile being the last tile.

###-msg.json
Where all the messages are stored.

The keys are tile.json `type`.
```
{
  "type": "TYPE OF THE TEXT",
  "text": "TEXT",
  "link": "OPTIONAL - WHEN TYPE LINK, IF LINK IS USED, THEN WILL MAKE AN LINK WITH THE TEXT GIVEN."
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

0.1.0 created template of the site

## Credits

Author: akiHERO

Images: google image

Information: www

React: facebook

## License

CA_Boradgame_Club
