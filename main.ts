scene.onOverlapTile(SpriteKind.Player, assets.image`myImage`, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c 5 5 5 5 c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    c 5 5 5 5 5 1 f 5 5 5 c . . . . 
    c 5 5 5 5 5 f f 5 5 5 5 c . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 d c . . 
    c 5 3 3 3 5 5 5 5 5 d d d c . . 
    . b 5 5 5 5 5 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c c . 
    . c b b c 5 5 b b d d d d c d c 
    . c c c c c c d d d d d d d d c 
    . . . c c c c d 5 5 b d d d c . 
    . . c c c c c b 5 5 b c c c . . 
    . . c b b b c d 5 5 b c . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level4`)
tiles.placeOnRandomTile(mySprite, img`
    . e e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e e . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
    . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
    . e 1 e e e e e e e e e e 1 e . 
    . e 1 e e e e e e e e e e 1 e . 
    . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
    . e 1 e e e e e e e e e e 1 e . 
    . e 1 e e e e e e e e e e 1 e . 
    . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
    . e e e e e e e e e e e e e e . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
