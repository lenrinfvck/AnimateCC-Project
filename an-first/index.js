(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 640,
	height: 960,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"./resource/bg.jpg", id:"_54058338_p0"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._54058338_p0 = function() {
	this.initialize(img._54058338_p0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2420,1195);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAyAAQAAAUgPAPQgPAPgUAAQgTAAgPgPQgPgPAAgUQAAgTAPgPQAPgPATAAQAUAAAPAPQAPAPAAATg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,12,12);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text(" PLAY", "18px 'PingFang SC'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 100;
	this.text.setTransform(-0.6,-11.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoMDmIAAnLIQZAAIAAHLg");
	this.shape.setTransform(0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AoMDmIAAnLIQZAAIAAHLg");
	this.shape_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{scaleX:1,scaleY:1,x:-0.6,y:-11.9}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{scaleX:1,scaleY:1,x:-0.6,y:-11.9}}]},1).to({state:[{t:this.shape_1},{t:this.text,p:{scaleX:1.386,scaleY:1.386,x:-0.7,y:-17.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.6,-23,105.2,46);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._54058338_p0();
	this.instance.setTransform(0,159,0.352,0.352);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,159,851.8,420.6);


(lib.ItemStrip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0TCCIAAkDMAomAAAIAAEDg");
	this.shape.setTransform(5,-2.9,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-12.9,200,20);


(lib.con = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0)").s().p("EhDQAp4MAAAhTvMCGhAAAMAAABTvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-430.6,-268,861.2,536.1);


(lib.圈 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:2.61,scaleY:2.61},0).wait(1).to({scaleX:4.14,scaleY:4.14},0).wait(1).to({scaleX:5.58,scaleY:5.58},0).wait(1).to({scaleX:6.95,scaleY:6.95},0).wait(1).to({scaleX:8.24,scaleY:8.24},0).wait(1).to({scaleX:9.46,scaleY:9.46},0).wait(1).to({scaleX:10.61,scaleY:10.61},0).wait(1).to({scaleX:11.7,scaleY:11.7},0).wait(1).to({scaleX:12.72,scaleY:12.72},0).wait(1).to({scaleX:13.69,scaleY:13.69},0).wait(1).to({scaleX:14.61,scaleY:14.61},0).wait(1).to({scaleX:15.48,scaleY:15.48},0).wait(1).to({scaleX:16.3,scaleY:16.3},0).wait(1).to({scaleX:17.07,scaleY:17.07},0).wait(1).to({scaleX:17.81,scaleY:17.81},0).wait(1).to({scaleX:18.5,scaleY:18.5},0).wait(1).to({scaleX:19.16,scaleY:19.16},0).wait(1).to({scaleX:19.79,scaleY:19.79},0).wait(1).to({scaleX:20.38,scaleY:20.38},0).wait(1).to({scaleX:20.95,scaleY:20.95},0).wait(1).to({scaleX:21.48,scaleY:21.48},0).wait(1).to({scaleX:21.99,scaleY:21.99},0).wait(1).to({scaleX:22.48,scaleY:22.48},0).wait(1).to({scaleX:22.95,scaleY:22.95},0).wait(1).to({scaleX:23.39,scaleY:23.39},0).wait(1).to({scaleX:23.82,scaleY:23.82},0).wait(1).to({scaleX:24.23,scaleY:24.23},0).wait(1).to({scaleX:24.63,scaleY:24.63},0).wait(1).to({scaleX:25.01,scaleY:25.01},0).wait(1).to({scaleX:25.38,scaleY:25.38},0).wait(1).to({scaleX:25.74,scaleY:25.74},0).wait(1).to({scaleX:26.08,scaleY:26.08},0).wait(1).to({scaleX:26.42,scaleY:26.42},0).wait(1).to({scaleX:26.75,scaleY:26.75},0).wait(1).to({scaleX:27.07,scaleY:27.07},0).wait(1).to({scaleX:27.39,scaleY:27.39},0).wait(1).to({scaleX:27.7,scaleY:27.7},0).wait(1).to({scaleX:28,scaleY:28},0).wait(1).to({scaleX:28.3,scaleY:28.3},0).wait(1).to({scaleX:28.6,scaleY:28.6},0).wait(1).to({scaleX:28.89,scaleY:28.89,alpha:0.95},0).wait(1).to({scaleX:29.18,scaleY:29.18,alpha:0.9},0).wait(1).to({scaleX:29.46,scaleY:29.46,alpha:0.85},0).wait(1).to({scaleX:29.75,scaleY:29.75,alpha:0.8},0).wait(1).to({scaleX:30.03,scaleY:30.03,alpha:0.75},0).wait(1).to({scaleX:30.31,scaleY:30.31,alpha:0.7},0).wait(1).to({scaleX:30.59,scaleY:30.59,alpha:0.65},0).wait(1).to({scaleX:30.87,scaleY:30.87,alpha:0.6},0).wait(1).to({scaleX:31.15,scaleY:31.15,alpha:0.55},0).wait(1).to({scaleX:31.43,scaleY:31.43,alpha:0.5},0).wait(1).to({scaleX:31.7,scaleY:31.7,alpha:0.45},0).wait(1).to({scaleX:31.98,scaleY:31.98,alpha:0.4},0).wait(1).to({scaleX:32.26,scaleY:32.26,alpha:0.35},0).wait(1).to({scaleX:32.53,scaleY:32.53,alpha:0.3},0).wait(1).to({scaleX:32.81,scaleY:32.81,alpha:0.25},0).wait(1).to({scaleX:33.09,scaleY:33.09,alpha:0.2},0).wait(1).to({scaleX:33.37,scaleY:33.37,alpha:0.15},0).wait(1).to({scaleX:33.64,scaleY:33.64,alpha:0.1},0).wait(1).to({scaleX:33.92,scaleY:33.92,alpha:0.05},0).wait(1).to({scaleX:34.2,scaleY:34.2,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,12,12);


// stage content:



(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		this.stop();
		var girlHeight = 300;
		
		
		p_con = new createjs.Container();
		this.con.addChild(p_con);
		createjs.Ticker.on("tick", animLoop);
		
		this.btn_play.addEventListener('click', function(e) {
			_this.play();
			p_con.removeAllChildren();
			//addStrip(10);
		});
		
		function addStrip(count) {
			for(var i=count-1; i>=0; i--) {
				var strip = new lib.ItemStrip();
				strip.x = random(640, 960);
				strip.y = random(-200, girlHeight);
				p_con.addChild(strip);
			}
		}
		
		function animLoop(e) {
			for (var i=p_con.numChildren-1; i>=0; i--) {
				var strip = p_con.getChildAt(i);
				strip.x -= 50;
				if (strip.x < -200) {
					strip.x = random(640, 960);
					strip.y = random(-200, girlHeight);
				}
			}
		}
		
		function random(min, max) {
			return Math.floor(Math.random()*(max-min+1)+min);
		};
	}
	this.frame_119 = function() {
		p_con.removeAllChildren();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(119).call(this.frame_119).wait(1));

	// btn
	this.btn_play = new lib.Symbol6();
	this.btn_play.setTransform(319,774.5);
	new cjs.ButtonHelper(this.btn_play, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_play).wait(120));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg5pAreMAAAhUTIQ4AAMAAABUTgEAmSAqlMAAAhWCITYAAMAAABWCg");
	this.shape.setTransform(323.1,423.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(318.8,421.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(120));

	// 图层 6
	this.instance = new lib.圈();
	this.instance.setTransform(24,486.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).wait(66));

	// 图层 6
	this.instance_1 = new lib.圈();
	this.instance_1.setTransform(446.1,636.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(66));

	// 图层 6
	this.instance_2 = new lib.圈();
	this.instance_2.setTransform(66.1,540.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).wait(89));

	// 图层 5
	this.instance_3 = new lib.圈();
	this.instance_3.setTransform(489.1,320.2);

	this.instance_4 = new lib.圈();
	this.instance_4.setTransform(617.1,170.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},61).wait(59));

	// con
	this.con = new lib.con();
	this.con.setTransform(337.6,428.1);

	this.timeline.addTween(cjs.Tween.get(this.con).wait(120));

	// Layer 1
	this.item_bg = new lib.Symbol5();
	this.item_bg.setTransform(468.9,239.9,1.188,1.188,0,0,0,425.6,209.2);
	this.item_bg.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.item_bg).wait(1).to({regX:425.9,regY:369.3,x:466.7,y:430.1,alpha:0.053},0).wait(1).to({x:464,alpha:0.107},0).wait(1).to({x:461.4,alpha:0.159},0).wait(1).to({x:458.7,alpha:0.212},0).wait(1).to({x:456.1,alpha:0.264},0).wait(1).to({x:453.4,alpha:0.316},0).wait(1).to({x:450.7,alpha:0.368},0).wait(1).to({x:448.1,alpha:0.419},0).wait(1).to({x:445.4,alpha:0.47},0).wait(1).to({x:442.8,alpha:0.521},0).wait(1).to({x:440.1,alpha:0.571},0).wait(1).to({x:437.4,alpha:0.621},0).wait(1).to({x:434.8,alpha:0.671},0).wait(1).to({x:432.1,alpha:0.721},0).wait(1).to({x:429.5,alpha:0.77},0).wait(1).to({x:426.8,alpha:0.819},0).wait(1).to({x:424.1,alpha:0.867},0).wait(1).to({x:421.5,alpha:0.916},0).wait(1).to({x:418.8,alpha:0.964},0).wait(1).to({x:416.2,alpha:1},0).wait(1).to({x:413.5},0).wait(1).to({x:410.9},0).wait(1).to({x:408.2},0).wait(1).to({x:405.5},0).wait(1).to({x:402.9},0).wait(1).to({x:400.2},0).wait(1).to({x:397.6},0).wait(1).to({x:394.9},0).wait(1).to({x:392.2},0).wait(1).to({x:389.6},0).wait(1).to({x:386.9},0).wait(1).to({x:384.3},0).wait(1).to({x:381.6},0).wait(1).to({x:378.9},0).wait(1).to({x:376.3},0).wait(1).to({x:373.6},0).wait(1).to({x:371},0).wait(1).to({x:368.3},0).wait(1).to({x:365.7},0).wait(1).to({x:363},0).wait(1).to({x:360.3},0).wait(1).to({x:357.7},0).wait(1).to({x:355},0).wait(1).to({x:352.4},0).wait(1).to({x:349.7},0).wait(1).to({x:347},0).wait(1).to({x:344.4},0).wait(1).to({x:341.7},0).wait(1).to({x:339.1},0).wait(1).to({x:336.4},0).wait(1).to({x:333.7},0).wait(1).to({x:331.1},0).wait(1).to({x:328.4},0).wait(1).to({x:325.8},0).wait(1).to({x:323.1},0).wait(1).to({x:320.5},0).wait(1).to({x:317.8},0).wait(1).to({x:315.1},0).wait(1).to({x:312.5},0).wait(1).to({x:309.8},0).wait(1).to({x:307.2},0).wait(1).to({x:304.5},0).wait(1).to({x:301.8},0).wait(1).to({x:299.2},0).wait(1).to({x:296.5},0).wait(1).to({x:293.9},0).wait(1).to({x:291.2},0).wait(1).to({x:288.5},0).wait(1).to({x:285.9},0).wait(1).to({x:283.2},0).wait(1).to({x:280.6},0).wait(1).to({x:277.9},0).wait(1).to({x:275.3},0).wait(1).to({x:272.6},0).wait(1).to({x:269.9},0).wait(1).to({x:267.3},0).wait(1).to({x:264.6},0).wait(1).to({x:262},0).wait(1).to({x:259.3,alpha:0.99},0).wait(1).to({x:256.6,alpha:0.959},0).wait(1).to({x:254,alpha:0.928},0).wait(1).to({x:251.3,alpha:0.898},0).wait(1).to({x:248.7,alpha:0.868},0).wait(1).to({x:246,alpha:0.839},0).wait(1).to({x:243.3,alpha:0.81},0).wait(1).to({x:240.7,alpha:0.781},0).wait(1).to({x:238,alpha:0.752},0).wait(1).to({x:235.4,alpha:0.724},0).wait(1).to({x:232.7,alpha:0.696},0).wait(1).to({x:230.1,alpha:0.668},0).wait(1).to({x:227.4,alpha:0.641},0).wait(1).to({x:224.7,alpha:0.613},0).wait(1).to({x:222.1,alpha:0.587},0).wait(1).to({x:219.4,alpha:0.56},0).wait(1).to({x:216.8,alpha:0.534},0).wait(1).to({x:214.1,alpha:0.508},0).wait(1).to({x:211.4,alpha:0.483},0).wait(1).to({x:208.8,alpha:0.458},0).wait(1).to({x:206.1,alpha:0.433},0).wait(1).to({x:203.5,alpha:0.408},0).wait(1).to({x:200.8,alpha:0.384},0).wait(1).to({x:198.1,alpha:0.36},0).wait(1).to({x:195.5,alpha:0.336},0).wait(1).to({x:192.8,alpha:0.313},0).wait(1).to({x:190.2,alpha:0.29},0).wait(1).to({x:187.5,alpha:0.267},0).wait(1).to({x:184.9,alpha:0.245},0).wait(1).to({x:182.2,alpha:0.223},0).wait(1).to({x:179.5,alpha:0.201},0).wait(1).to({x:176.9,alpha:0.179},0).wait(1).to({x:174.2,alpha:0.158},0).wait(1).to({x:171.6,alpha:0.137},0).wait(1).to({x:168.9,alpha:0.117},0).wait(1).to({x:166.2,alpha:0.097},0).wait(1).to({x:163.6,alpha:0.077},0).wait(1).to({x:160.9,alpha:0.057},0).wait(1).to({x:158.3,alpha:0.038},0).wait(1).to({x:155.6,alpha:0.019},0).wait(1).to({x:152.9,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(227,623.3,1068.2,655.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;