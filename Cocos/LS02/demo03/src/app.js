
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();
        var size = cc.winSize;
        var layer1=new cc.LayerColor(cc.color.RED,200,200);
        var layer2=new cc.LayerColor(cc.color.BLUE,50,50);
        layer1.ignoreAnchor=false;
        layer2.ignoreAnchor=false;
        layer2.setAnchorPoint(0.5,0.5);   //设置锚点
        layer1.setAnchorPoint(1,1);
        layer1.setPosition(size.width/3,size.height/2);
        layer2.setPosition(2*size.width/7,2*size.height/3);
        this.addChild(layer1);
        this.addChild(layer2);
        //世界坐标系转换本地坐标系
        var point1=layer1.convertToNodeSpaceAR(layer2.getPosition()); //将layer1世界坐标系转到以layer2为原点的本地坐标系
        cc.log(point1.x);

        var layer3=new cc.LayerColor(cc.color.YELLOW,100,100);
        var layer4=new cc.LayerColor(cc.color.GREEN,50,50);
        layer3.ignoreAnchor=false;
        layer4.ignoreAnchor=false;
        layer3.setAnchorPoint(0.5,0.5);   //设置锚点
        layer4.setAnchorPoint(1,1);
        layer3.setPosition(5*size.width/7,size.height/2);
        layer4.setPosition(2*size.width/3,1*size.height/6);
        this.addChild(layer3);
        layer1.addChild(layer4);
        //本地坐标系转换世界坐标系
        var point2=layer3.convertToWorldSpaceAR(layer4.getPosition());
        cc.log(point2.x);
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

