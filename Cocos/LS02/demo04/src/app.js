
var HelloWorldLayer = cc.Layer.extend({
    layer1:null,
    speed:0,
    num:0, // 计数器设置
    ctor:function () {
    
        this._super();
        var size = cc.winSize;
        var layer1=new cc.LayerColor(cc.color.RED,100,100);
        layer1.ignoreAnchor=false;
        layer1.setAnchorPoint(0.5,0.5);
        layer1.x=size.width/2;
        layer1.y=600;
        this.layer1=layer1;
        this.addChild(this.layer1);
        
        // this.scheduleUpdate();
        this.layer1.setLocalZOrder(3);//设置Z轴顺序

        this.schedule(this.myCallback,0.02,cc.REPEAT_FOREVER,0);
        
        return true;
    },
    update:function(dt){
        // cc.log(dt);
        // this.layer1.x+=1;
        // 计数器设置
        this.num++;
        if(this.num > 1000){this.unscheduleUpdate()}
    },
    myCallback:function(){
        // this.layer1.x+=20;
        // if(this.layer1.x>400){
        //     this.unschedule(this.myCallback);
        // }
        this.layer1.y-=this.speed;
        if(this.layer1.y<0){
            this.speed=-this.speed;

        }else{
            this.speed+=0.2;

        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

