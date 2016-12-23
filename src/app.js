var HelloWorldLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var mainscene = ccs.load(res.MainScene_json);
        this.addChild(mainscene.node);


        var center_point = {
            x: size.width / 2,
            y: size.height / 2
        };

        this.sprite = new cc.Sprite(res.ball_png);
        this.addChild(this.sprite);

        this.sprite.setPosition(center_point);

        this.sprite.setScale(0.3, 0.3);


        var act_moveto = cc.MoveTo.create(2, cc.p(100, 100));

        var act_moby = cc.MoveBy.create(2, cc.p(100, 100));
        //this.sprite.runAction(act_moveto);

        //this.sprite.runAction(act_moby);

        var act_jumpTo = cc.JumpTo.create(2, cc.p(100, 200), 50, 4);
        //this.sprite.runAction(act_jumpTo);


        var act_rotateBy= cc.rotateBy(2,100, 0);

        var rotate_forever=  cc.repeatForever(act_rotateBy);

        this.sprite.runAction(rotate_forever);

        /* you can create scene with following comment code instead of using csb file.
         /////////////////////////////
         // 3. add your codes below...
         // add a label shows "Hello World"
         // create and initialize a label
         var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
         // position the label on the center of the screen
         helloLabel.x = size.width / 2;
         helloLabel.y = size.height / 2 + 200;
         // add the label as a child to this layer
         this.addChild(helloLabel, 5);

         // add "HelloWorld" splash screen"
         this.sprite = new cc.Sprite(res.HelloWorld_png);
         this.sprite.attr({
         x: size.width / 2,
         y: size.height / 2
         });
         this.addChild(this.sprite, 0);
         */

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

