export default class Snake {
    constructor(scene) {
        this.scene = scene;
        this.direction = Phaser.Math.Vector2.RIGHT;
        this.body = [];
        this.body.push(this.scene.add.rectangle(10, 10, 16, 16, 0xff0000).setOrigin(0));
        this.body.push(this.scene.add.rectangle(10, 10, 16, 16, 0x0000ff).setOrigin(0));
        scene.input.keyboard.on('keydown', e => {
            this.keydown(e);
        });
    }

    keydown(event) {
        switch (event.keyCode) {
            case 37: // left
                break;
            case 38: // up
                break;
            case 39: // right
                break;
            case 40: // down
                break;
        }
    }
    update(time) {
        this.body[0].x += this.direction.x;
        this.body[0].y += this.direction.y;


    }
}