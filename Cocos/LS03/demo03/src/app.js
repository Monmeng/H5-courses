
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.WHITE));
        var musicOnItem=new cc.MenuItemImage(res.MusicOnNormal_png,res.MusicOnSelected_png,function(){
        },this);
        var musicOffItem = new cc.MenuItemImage(res.MusicOffNormal_png,res.MusicOffSelected_png,function(){
        },this);
        var toggleItem = new cc.MenuItemToggle(musicOnItem,musicOffItem,function(){},this);
        var menu = new cc.Menu(toggleItem);
        this.addChild(menu);

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

