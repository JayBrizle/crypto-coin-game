import * as Phaser from 'phaser';
import React from 'react';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
  };
  
  export class GameScene extends Phaser.Scene {
    private platforms: Phaser.Physics.Arcade.StaticGroup;
    constructor() {
      super(sceneConfig);
    }

    preload() {
        this.load.image('sky', '/sky.png');
        this.load.image('ground', '/platform.png');
        this.load.image('star', '/star.png');
        this.load.image('bomb', '/bomb.png');
        this.load.spritesheet('dude', 
            '/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );
    }
   
    create() {
        this.add.image(400, 300, 'sky');
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');
    }

   
   
    update() {
      // TODO
    }
  }

export default class Game extends React.Component {
    game: Phaser.Game;
    gameConfig: Phaser.Types.Core.GameConfig = {
        title: 'Sample',
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
          default: 'arcade',
          arcade: {
            debug: false,
            gravity: { y: 300 }
          },
        },
        scene:  GameScene,
      };
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.game = new Phaser.Game(this.gameConfig);
    }

    render() {
        return (
            <div id="content">
            </div>
        )
    }
}
 