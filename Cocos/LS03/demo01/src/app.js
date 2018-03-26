
var HelloWorldLayer = cc.Layer.extend({
    label:null,
    t:0,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var label=new cc.LabelTTF("玩家1:","",50);
        label.setAnchorPoint(0,1);
        label.x=0;
        label.y=size.height;
        this.label=label;
        this.addChild(this.label);

        this.schedule(this.myTimer,1,cc.REPEAT_FOREVER,0);

        return true;
    },
    update:function(dt){},
        myTimer:function(dt){
            this.t += dt;
        this.label.setString("玩家1:"+parseInt(this.t));
    }

});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

