
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();
        var size=cc.winSize;
        var layer1=new cc.LayerColor(cc.color.RED,200,200);
        layer1.ignoreAnchor=false;
        layer1.x=size.width/6;
        layer1.y=size.height/2;
        this.addChild(layer1);

        var layer2=new cc.LayerColor(cc.color.BLUE,200,200);
        layer2.ignoreAnchor=false;
        layer2.x=size.width/2;
        layer2.y=size.height/2;
        this.addChild(layer2);

        var layer3=new cc.LayerColor(cc.color.YELLOW,200,200);
        layer3.ignoreAnchor=false;
        layer3.x=0;
        layer3.y=0;
        layer3.setPosition(0,0);
        layer3.setPosition(cc.p(0,0));
        layer2.addChild(layer3);
        layer2.runAction(cc.moveBy(5,200,0));
        cc.log(layer1.getPosition().x);
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

