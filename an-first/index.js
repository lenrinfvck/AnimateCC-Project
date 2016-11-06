(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._54058338_p0 = function() {
	this.initialize(img._54058338_p0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2420,1195);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAyAAQAAAVgPAOQgOAPgVAAQgUAAgPgPQgOgOAAgVQAAgUAOgPQAPgOAUAAQAVAAAOAOQAPAPAAAUg");

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
	this.text.parent = this;
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
	this.instance.parent = this;
	this.instance.setTransform(0,159,0.352,0.352);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,159,851.8,420.6), null);


(lib.ItemStrip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0TCCIAAkDMAonAAAIAAEDg");
	this.shape.setTransform(5,-2.9,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ItemStrip, new cjs.Rectangle(-95,-12.9,200,20), null);


(lib.con = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0)").s().p("EhDRAp4MAAAhTvMCGjAAAMAAABTvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.con, new cjs.Rectangle(-430.6,-268,861.2,536.1), null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// viewfinder
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.圈 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间1("synched",0);
	this.instance.parent = this;

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

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(319,480);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(55).to({x:313.3},0).wait(1).to({x:301},0).wait(1).to({x:288.9},0).wait(1).to({x:276.9},0).wait(1).to({x:265.2},0).wait(1).to({x:253.7},0).wait(1).to({x:242.3},0).wait(1).to({x:231.1},0).wait(1).to({x:220.1},0).wait(1).to({x:209.3},0).wait(1).to({x:198.5},0).wait(1).to({x:188},0).wait(1).to({x:177.5},0).wait(1).to({x:167.2},0).wait(1).to({x:157},0).wait(1).to({x:146.9},0).wait(1).to({x:136.9},0).wait(1).to({x:127},0).wait(1).to({x:117.2},0).wait(1).to({x:107.5},0).wait(1).to({x:97.8},0).wait(1).to({x:88.2},0).wait(1).to({x:78.7},0).wait(1).to({x:69.3},0).wait(1).to({x:59.9},0).wait(1).to({x:50.6},0).wait(1).to({x:41.3},0).wait(1).to({x:32.1},0).wait(1).to({x:22.9},0).wait(1).to({x:13.8},0).wait(1).to({x:4.7},0).wait(1).to({x:-4.3},0).wait(1).to({x:-13.4},0).wait(1).to({x:-22.4},0).wait(1).to({x:-31.4},0).wait(1).to({x:-40.3},0).wait(1).to({x:-49.2},0).wait(1).to({x:-58.2},0).wait(1).to({x:-67},0).wait(1).to({x:-75.9},0).wait(1).to({x:-84.8},0).wait(1).to({x:-93.6},0).wait(1).to({x:-102.5},0).wait(1).to({x:-111.3},0).wait(1).to({x:-120.1},0).wait(1).to({x:-128.9},0).wait(1).to({x:-137.8},0).wait(1).to({x:-146.6},0).wait(1).to({x:-155.4},0).wait(1).to({x:-164.2},0).wait(1).to({x:-173},0).wait(1).to({x:-181.8},0).wait(1).to({x:-190.6},0).wait(1).to({x:-199.3},0).wait(1).to({x:-208.1},0).wait(1).to({x:-216.9},0).wait(1).to({x:-225.7},0).wait(1).to({x:-234.5},0).wait(1).to({x:-243.3},0).wait(1).to({x:-252.1},0).wait(1).to({x:-260.9},0).wait(1).to({x:-269.6},0).wait(1).to({x:-278.4},0).wait(1).to({x:-287.2},0).wait(1).to({x:-296},0).wait(1));

	// btn
	this.btn_play = new lib.Symbol6();
	this.btn_play.parent = this;
	this.btn_play.setTransform(319,774.5);
	new cjs.ButtonHelper(this.btn_play, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_play).wait(120));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhVego0MBIhgAEMAAABUVMhIhAAEgEBCHAqkMAAAhWEITYAAMAAABWEg");
	this.shape.setTransform(145.1,423.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg5qArfMAAAhUVIQ4AAMAAABUVgEAmTAqmMAAAhWEITYAAMAAABWEg");
	this.shape_1.setTransform(323.1,423.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},119).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(318.8,421.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(120));

	// 图层 6
	this.instance = new lib.圈();
	this.instance.parent = this;
	this.instance.setTransform(24,486.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).wait(66));

	// 图层 6
	this.instance_1 = new lib.圈();
	this.instance_1.parent = this;
	this.instance_1.setTransform(446.1,636.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(66));

	// 图层 6
	this.instance_2 = new lib.圈();
	this.instance_2.parent = this;
	this.instance_2.setTransform(66.1,540.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).wait(89));

	// 图层 5
	this.instance_3 = new lib.圈();
	this.instance_3.parent = this;
	this.instance_3.setTransform(489.1,320.2);

	this.instance_4 = new lib.圈();
	this.instance_4.parent = this;
	this.instance_4.setTransform(617.1,170.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},61).wait(59));

	// con
	this.con = new lib.con();
	this.con.parent = this;
	this.con.setTransform(337.6,428.1);

	this.timeline.addTween(cjs.Tween.get(this.con).wait(120));

	// Layer 1
	this.item_bg = new lib.Symbol5();
	this.item_bg.parent = this;
	this.item_bg.setTransform(468.9,239.9,1.188,1.188,0,0,0,425.6,209);
	this.item_bg.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.item_bg).wait(1).to({regX:425.9,regY:369.3,x:466.7,y:430.3,alpha:0.053},0).wait(1).to({x:464,alpha:0.107},0).wait(1).to({x:461.4,alpha:0.159},0).wait(1).to({x:458.7,alpha:0.212},0).wait(1).to({x:456.1,alpha:0.264},0).wait(1).to({x:453.4,alpha:0.316},0).wait(1).to({x:450.7,alpha:0.368},0).wait(1).to({x:448.1,alpha:0.419},0).wait(1).to({x:445.4,alpha:0.47},0).wait(1).to({x:442.8,alpha:0.521},0).wait(1).to({x:440.1,alpha:0.571},0).wait(1).to({x:437.4,alpha:0.621},0).wait(1).to({x:434.8,alpha:0.671},0).wait(1).to({x:432.1,alpha:0.721},0).wait(1).to({x:429.5,alpha:0.77},0).wait(1).to({x:426.8,alpha:0.819},0).wait(1).to({x:424.1,alpha:0.867},0).wait(1).to({x:421.5,alpha:0.916},0).wait(1).to({x:418.8,alpha:0.964},0).wait(1).to({x:416.2,alpha:1},0).wait(1).to({x:413.5},0).wait(1).to({x:410.9},0).wait(1).to({x:408.2},0).wait(1).to({x:405.5},0).wait(1).to({x:402.9},0).wait(1).to({x:400.2},0).wait(1).to({x:397.6},0).wait(1).to({x:394.9},0).wait(1).to({x:392.2},0).wait(1).to({x:389.6},0).wait(1).to({x:386.9},0).wait(1).to({x:384.3},0).wait(1).to({x:381.6},0).wait(1).to({x:378.9},0).wait(1).to({x:376.3},0).wait(1).to({x:373.6},0).wait(1).to({x:371},0).wait(1).to({x:368.3},0).wait(1).to({x:365.7},0).wait(1).to({x:363},0).wait(1).to({x:360.3},0).wait(1).to({x:357.7},0).wait(1).to({x:355},0).wait(1).to({x:352.4},0).wait(1).to({x:349.7},0).wait(1).to({x:347},0).wait(1).to({x:344.4},0).wait(1).to({x:341.7},0).wait(1).to({x:339.1},0).wait(1).to({x:336.4},0).wait(1).to({x:333.7},0).wait(1).to({x:331.1},0).wait(1).to({x:328.4},0).wait(1).to({x:325.8},0).wait(1).to({x:323.1},0).wait(1).to({x:320.5},0).wait(1).to({x:317.8},0).wait(1).to({x:315.1},0).wait(1).to({x:312.5},0).wait(1).to({x:309.8},0).wait(1).to({x:307.2},0).wait(1).to({x:304.5},0).wait(1).to({x:301.8},0).wait(1).to({x:299.2},0).wait(1).to({x:296.5},0).wait(1).to({x:293.9},0).wait(1).to({x:291.2},0).wait(1).to({x:288.5},0).wait(1).to({x:285.9},0).wait(1).to({x:283.2},0).wait(1).to({x:280.6},0).wait(1).to({x:277.9},0).wait(1).to({x:275.3},0).wait(1).to({x:272.6},0).wait(1).to({x:269.9},0).wait(1).to({x:267.3},0).wait(1).to({x:264.6},0).wait(1).to({x:262},0).wait(1).to({x:259.3,alpha:0.99},0).wait(1).to({x:256.6,alpha:0.959},0).wait(1).to({x:254,alpha:0.928},0).wait(1).to({x:251.3,alpha:0.898},0).wait(1).to({x:248.7,alpha:0.868},0).wait(1).to({x:246,alpha:0.839},0).wait(1).to({x:243.3,alpha:0.81},0).wait(1).to({x:240.7,alpha:0.781},0).wait(1).to({x:238,alpha:0.752},0).wait(1).to({x:235.4,alpha:0.724},0).wait(1).to({x:232.7,alpha:0.696},0).wait(1).to({x:230.1,alpha:0.668},0).wait(1).to({x:227.4,alpha:0.641},0).wait(1).to({x:224.7,alpha:0.613},0).wait(1).to({x:222.1,alpha:0.587},0).wait(1).to({x:219.4,alpha:0.56},0).wait(1).to({x:216.8,alpha:0.534},0).wait(1).to({x:214.1,alpha:0.508},0).wait(1).to({x:211.4,alpha:0.483},0).wait(1).to({x:208.8,alpha:0.458},0).wait(1).to({x:206.1,alpha:0.433},0).wait(1).to({x:203.5,alpha:0.408},0).wait(1).to({x:200.8,alpha:0.384},0).wait(1).to({x:198.1,alpha:0.36},0).wait(1).to({x:195.5,alpha:0.336},0).wait(1).to({x:192.8,alpha:0.313},0).wait(1).to({x:190.2,alpha:0.29},0).wait(1).to({x:187.5,alpha:0.267},0).wait(1).to({x:184.9,alpha:0.245},0).wait(1).to({x:182.2,alpha:0.223},0).wait(1).to({x:179.5,alpha:0.201},0).wait(1).to({x:176.9,alpha:0.179},0).wait(1).to({x:174.2,alpha:0.158},0).wait(1).to({x:171.6,alpha:0.137},0).wait(1).to({x:168.9,alpha:0.117},0).wait(1).to({x:166.2,alpha:0.097},0).wait(1).to({x:163.6,alpha:0.077},0).wait(1).to({x:160.9,alpha:0.057},0).wait(1).to({x:158.3,alpha:0.038},0).wait(1).to({x:155.6,alpha:0.019},0).wait(1).to({x:152.9,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.1,479,1377.2,962);
// library properties:
lib.properties = {
	width: 640,
	height: 960,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_54058338_p0.png", id:"_54058338_p0"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;