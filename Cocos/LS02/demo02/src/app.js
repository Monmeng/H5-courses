
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();
        var size = cc.winSize;
        var layer1=new cc.LayerColor(cc.color.RED,200,200);
        var layer2=new cc.LayerColor(cc.color.BLUE,200,200);
        layer1.ignoreAnchor=false;
        layer2.ignoreAnchor=false;
        //layer1.setAnchorPoint(0.5,0.5);   //设置锚点
        layer1.setAnchorPoint(1,1);
        layer1.setPosition(size.width/2,size.height/2);
        layer2.setPosition(size.width/2,size.height/2);
        //旋转
        layer1.rotation=45;
        //layer1.setRotationY(30);
        //缩放
        layer1.scale=0.5;
        //layer1.setScale(1.5,1.2);
        this.addChild(layer1);
        this.addChild(layer2);

        //根据设置锚点位置，来定位图片位置
        var layer3=new cc.LayerColor(cc.color.YELLOW,100,60);
        layer3.ignoreAnchor=false;
        layer3.setAnchorPoint(1,1);
        layer3.setPosition(size.width-40,size.height-40);
        layer3.setScale(1,2);   //坐标系改变，锚点位置不变
        layer3.runAction(cc.rotateBy(15,180).repeatForever());
        layer3.runAction(cc.scaleBy(0.5,0.5).repeatForever());
        this.addChild(layer3);


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

