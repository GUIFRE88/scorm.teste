(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgNeutro = function() {
	this.initialize(img.bgNeutro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1129,635);


(lib.man_body = function() {
	this.initialize(img.man_body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,80);


(lib.man_boot = function() {
	this.initialize(img.man_boot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,11);


(lib.man_eyebrow = function() {
	this.initialize(img.man_eyebrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,19);


(lib.man_hair = function() {
	this.initialize(img.man_hair);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,117);


(lib.man_hand = function() {
	this.initialize(img.man_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,118);


(lib.man_head = function() {
	this.initialize(img.man_head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,187);


(lib.man_pants = function() {
	this.initialize(img.man_pants);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,65);


(lib.woman_body = function() {
	this.initialize(img.woman_body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,90);


(lib.woman_hair = function() {
	this.initialize(img.woman_hair);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,84);


(lib.woman_hand = function() {
	this.initialize(img.woman_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,123);


(lib.woman_head = function() {
	this.initialize(img.woman_head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,224);


(lib.woman_pants = function() {
	this.initialize(img.woman_pants);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,93);// helper functions:

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


(lib.wefdwefwefwef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAdIAAg5IA5AAIAAA5g");
	this.shape.setTransform(14.425,14.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(13).to({_off:false},0).to({_off:true},42).wait(5));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBWIAAg5IA5AAIAAA5gAgcgcIAAg5IA5AAIAAA5g");
	this.shape_1.setTransform(8.675,14.4);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(7).to({_off:false},0).to({_off:true},42).wait(11));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcCQIAAg5IA5AAIAAA5gAgchWIAAg5IA5AAIAAA5g");
	this.shape_2.setTransform(2.9,14.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},42).wait(17));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AhWCQIAAg5IA6AAIAAA5gAgcBWIAAg5IA5AAIAAA5gAAdAdIAAg5Ig5AAIAAg6IA5AAIAAA6IA5AAIAAA5gAAdAdgAhWhWIAAg5IA6AAIAAA5g");
	this.shape_3.setTransform(8.65,14.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.3,28.9);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF0B14").s().p("An/GBIGNsBIJyAAImNMBg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-51.2,-38.5,102.5,77), null);


(lib.Symbol3copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		TweenMax.fromTo([this], .5, {y: this.y + 50}, {y: this.y,ease: Back.easeOut.config(1.7)});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.text = new cjs.Text("Parabéns! Você foi APROVADO!", "bold 20px 'EDP Preon Thin'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 624;
	this.text.parent = this;
	this.text.setTransform(0,-25.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy3, new cjs.Rectangle(-313.9,-27.2,627.9,32), null);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		TweenMax.fromTo([this], .5, {y: this.y + 50}, {y: this.y,ease: Back.easeOut.config(1.7)});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.text = new cjs.Text("Realize novamente a avaliação e, caso\ntenha dúvidas, reveja o conteúdo completo.", "bold 20px 'EDP Preon Thin'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 624;
	this.text.parent = this;
	this.text.setTransform(0,-25.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy, new cjs.Rectangle(-313.9,-27.2,627.9,62.400000000000006), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		TweenMax.fromTo([this], .5, {y: this.y + 50}, {y: this.y,ease: Back.easeOut.config(1.7)});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.text = new cjs.Text("Seu aproveitamento foi de:", "36px 'EDP Preon Hair'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 624;
	this.text.parent = this;
	this.text.setTransform(0,-25.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-313.9,-27.2,627.9,54.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		TweenMax.fromTo([this], .5, {y: this.y + 50}, {y: this.y,ease: Back.easeOut.config(1.7)});
		_this = this;
		this.texto.text = _root.notaFinal + "%";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.texto = new cjs.Text("%", "80px 'EDP Preon'", "#FFFFFF");
	this.texto.name = "texto";
	this.texto.textAlign = "center";
	this.texto.lineHeight = 111;
	this.texto.lineWidth = 322;
	this.texto.parent = this;
	this.texto.setTransform(-4.9,-59.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("A7ENQIAAhIMA0oAAAIAA5XIBhAAIAAafg");
	this.shape.setTransform(4.875,3.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(223,11,20,0.898)").s().p("A5jNRIhhAAIAA6hMA2JAAAIAABJIAAZYg");
	this.shape_1.setTransform(-4.875,-3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.texto}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.2,-88.4,356.4,176.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bgNeutro();
	this.instance.parent = this;
	this.instance.setTransform(-24,-314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-314,1129,635);


(lib.popTxt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{certo:0,errado:9,tentativa:17});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

	// txt
	this.text = new cjs.Text("Você acertou.", "19px 'EDP Preon'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 211;
	this.text.parent = this;
	this.text.setTransform(-4.85,24.9);

	this.text_1 = new cjs.Text("PARABÉNS", "25px 'EDP Preon Hair'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 37;
	this.text_1.lineWidth = 345;
	this.text_1.parent = this;
	this.text_1.setTransform(-5.25,-102.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{text:"PARABÉNS"}},{t:this.text,p:{x:-4.85,text:"Você acertou.",lineWidth:211,y:24.9}}]}).to({state:[{t:this.text_1,p:{text:"QUE PENA"}},{t:this.text,p:{x:-4.9,text:"Infelizmente você errou.",lineWidth:294,y:24.9}}]},9).to({state:[{t:this.text_1,p:{text:"QUE PENA"}},{t:this.text,p:{x:-4.9,text:"Não foi dessa vez.\nClique no botão e \ntente novamente.",lineWidth:294,y:-3.7}}]},8).wait(8));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(223,11,20,0.898)").s().p("A6lEyIhhAAIAApjMA4NAAAIAABJIAAIag");
	this.shape.setTransform(-5.275,-84.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.898)").s().p("A6pK9IhhAAIAA15MA4VAAAIAABIIAAUxg");
	this.shape_1.setTransform(-4.875,38.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("A8KRfIAAhIMA20AAAIAA0xIBhAAIAAV5gA8Kn6IAAhJMA2sAAAIAAobIBPAAIAAJkg");
	this.shape_2.setTransform(4.875,3.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.2,-115.5,370.4,231.1);


(lib.wefdwefwefwef_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAdIAAg5IA5AAIAAA5g");
	this.shape_4.setTransform(14.425,14.4);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(13).to({_off:false},0).to({_off:true},42).wait(5));

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcBWIAAg5IA5AAIAAA5gAgcgcIAAg5IA5AAIAAA5g");
	this.shape_5.setTransform(8.675,14.4);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(7).to({_off:false},0).to({_off:true},42).wait(11));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcCQIAAg5IA5AAIAAA5gAgchWIAAg5IA5AAIAAA5g");
	this.shape_6.setTransform(2.9,14.425);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1).to({_off:false},0).to({_off:true},42).wait(17));

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.2)").s().p("AhWCQIAAg5IA6AAIAAA5gAgcBWIAAg5IA5AAIAAA5gAAdAdIAAg5Ig5AAIAAg6IA5AAIAAA6IA5AAIAAA5gAAdAdgAhWhWIAAg5IA6AAIAAA5g");
	this.shape_7.setTransform(8.65,14.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.3,28.9);


(lib.Tween16copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGABQAHgBAFAFQAFAFAAAGQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.6,3.3,3.3);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGABQAHgBAFAFQAFAFAAAGQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.6,3.3,3.3);


(lib.Tween15copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGABQAHgBAFAFQAFAFAAAGQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.6,3.3,3.3);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGABQAHgBAFAFQAFAFAAAGQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.6,3.3,3.3);


(lib.popBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "default";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("EhT/Ax4MAAAhjvMCn/AAAMAAABjvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.popBg, new cjs.Rectangle(-537.6,-319.2,1075.2,638.4), null);


(lib.mouth_motioncopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(2,1).p("AiVhHIADAYQAHAbAMAXQAnBJBXAAQBVAAAqhMQANgWAHgdIAEgY");
	this.shape.setTransform(15.025,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#373535").ss(2,1).p("AiWhGIADAXQAHAbAMAWQAoBJBXAAQBVAAAqhLQANgWAIgcIAEgY");
	this.shape_1.setTransform(15.0117,7.8667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#373535").ss(2,1).p("AiXhFIAEAXQAGAaANAWQApBIBWAAQBWAAAqhKQANgWAIgbIAEgY");
	this.shape_2.setTransform(14.9983,8.1333);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#373535").ss(2,1).p("AiYhEIAEAWQAHAbAMAVQAqBHBWAAQBWAAArhJQANgVAHgcIAFgX");
	this.shape_3.setTransform(14.985,8.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#373535").ss(2,1).p("AiZhDIAEAWQAHAaANAVQAqBFBWAAQBWAAArhHQAOgVAHgbIAFgW");
	this.shape_4.setTransform(14.9717,8.6667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#373535").ss(2,1).p("AiahCIAEAVQAIAaANAVQAqBEBWAAQBWAAAshGQANgVAIgaIAFgW");
	this.shape_5.setTransform(14.9583,8.9333);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#373535").ss(2,1).p("AibhBIAEAVQAIAZANAVQArBDBXAAQBVAAAshFQAOgUAIgaIAFgW");
	this.shape_6.setTransform(14.945,9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#373535").ss(2,1).p("AichAIAEAUQAIAZAOAUQArBDBXAAQBVAAAthEQAOgUAIgZIAFgW");
	this.shape_7.setTransform(14.9317,9.4667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#373535").ss(2,1).p("Aidg/IAFAUQAIAYANAUQAsBCBXAAQBVAAAthDQAOgUAJgZIAFgV");
	this.shape_8.setTransform(14.9183,9.7333);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#373535").ss(2,1).p("Aieg/IAFAVQAIAYAOATQAsBABXAAQBVAAAuhBQAOgTAJgZIAFgV");
	this.shape_9.setTransform(14.905,10);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#373535").ss(2,1).p("Aifg+IAFAUQAIAYAOATQAuA/BWAAQBWAAAuhAQAOgTAJgYIAFgU");
	this.shape_10.setTransform(14.8917,10.2667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#373535").ss(2,1).p("Aigg9IAFAUQAJAXAOATQAuA+BWAAQBWAAAug/QAPgTAIgXIAGgU");
	this.shape_11.setTransform(14.8783,10.5333);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#373535").ss(2,1).p("Aihg8IAFATQAJAXAPATQAuA9BWAAQBWAAAvg+QAOgSAJgXIAGgU");
	this.shape_12.setTransform(14.865,10.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#373535").ss(2,1).p("Aiig7IAFATQAKAWAOATQAvA8BWAAQBWAAAvg9QAPgSAJgXIAGgT");
	this.shape_13.setTransform(14.8517,11.0667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#373535").ss(2,1).p("Aijg6IAGASQAJAXAPARQAvA8BWAAQBWAAAwg8QAPgSAJgWIAGgT");
	this.shape_14.setTransform(14.8383,11.3333);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#373535").ss(2,1).p("Ailg5IAHASQAJAWAPARQAwA7BWAAQBWAAAxg7QAPgRAJgWIAHgT");
	this.shape_15.setTransform(14.825,11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#373535").ss(2,1).p("Aimg4IAHASQAKAVAPARQAwA5BWAAQBWAAAxg5QAPgRAKgVIAHgS");
	this.shape_16.setTransform(14.8117,11.865);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#373535").ss(2,1).p("Aing3IAHARQAKAVAPARQAyA4BVAAQBXAAAxg4QAPgQAKgVIAHgS");
	this.shape_17.setTransform(14.7983,12.1175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#373535").ss(2,1).p("Aiog2IAHARQAKAVAQAQQAyA3BVAAQBXAAAxg3QAQgQAKgUIAHgS");
	this.shape_18.setTransform(14.785,12.37);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#373535").ss(2,1).p("Aipg1IAHARQALAUAQAQQAyA2BVAAQBXAAAyg2QAPgPALgUIAHgR");
	this.shape_19.setTransform(14.7717,12.6225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#373535").ss(2,1).p("Aiqg0IAIAQQAKAUAQAQQAzA1BVAAQBXAAAyg0QAQgQAKgTIAIgR");
	this.shape_20.setTransform(14.7583,12.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#373535").ss(2,1).p("AirgzIAIAQQAKAUARAPQAzA0BWAAQBWAAAzgzQAQgPAKgTIAIgR");
	this.shape_21.setTransform(14.745,13.1275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#373535").ss(2,1).p("AisgyIAIAQQALATAQAPQA0AzBWAAQBWAAA0gyQAQgPAKgTIAIgP");
	this.shape_22.setTransform(14.7317,13.38);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#373535").ss(2,1).p("AitgxIAIAQQALASARAPQA0AyBWAAQBWAAA0gxQAQgOALgTIAIgP");
	this.shape_23.setTransform(14.7183,13.6325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#373535").ss(2,1).p("AiugwIAIAPQAMATAQAOQA1AxBWAAQBWAAA1gwQAQgOALgSIAIgP");
	this.shape_24.setTransform(14.705,13.885);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#373535").ss(2,1).p("AivgvIAIAPQAMASARAOQA2AwBVAAQBXAAA0gvQARgNALgSIAIgP");
	this.shape_25.setTransform(14.6917,14.1375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#373535").ss(2,1).p("AiwguIAJAPQALARARAOQA3AvBVAAQBXAAA1guQAQgNAMgRIAIgO");
	this.shape_26.setTransform(14.6783,14.39);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#373535").ss(2,1).p("AixgtIAJAOQAMASARANQA3AuBVAAQBXAAA2gsQAQgNAMgRIAIgO");
	this.shape_27.setTransform(14.665,14.6425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#373535").ss(2,1).p("AiygsIAJAOQAMARASANQA3AtBVAAQBXAAA2grQARgNALgQIAJgO");
	this.shape_28.setTransform(14.6517,14.895);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#373535").ss(2,1).p("AizgrIAJAOQAMAQASANQA4AsBWAAQBWAAA3gqQARgMALgQIAJgN");
	this.shape_29.setTransform(14.6383,15.1475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#373535").ss(2,1).p("Ai0gqIAJAOQANAQASAMQA4ArBWAAQBWAAA3gpQARgMAMgPIAJgN");
	this.shape_30.setTransform(14.625,15.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#373535").ss(2,1).p("AizgpIAJANQAMAQASAMQA7AqBTAAQBdgFAwgiQARgMAMgOQAEgHAEgG");
	this.shape_31.setTransform(14.5045,15.3634);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#373535").ss(2,1).p("AizgpIAJANQANAQARAMQA8AqBRAAQBegGAvggQARgMAMgOQAFgGAEgG");
	this.shape_32.setTransform(14.3839,15.3268);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#373535").ss(2,1).p("AizgoIAJAMQANAQASAMQA7ApBRAAQBdgFAvggQARgKANgOQAFgGAEgG");
	this.shape_33.setTransform(14.2634,15.2902);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#373535").ss(2,1).p("AizgoIAKANQAMAPASAMQA7AoBRABQBcgFAwgfQARgKAMgNQAFgGAFgF");
	this.shape_34.setTransform(14.1429,15.2536);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#373535").ss(2,1).p("AiygnIAJAMQANAPARAMQA7AoBRAAQBbgFAwgdQARgKANgMQAFgGAEgF");
	this.shape_35.setTransform(14.0223,15.2171);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#373535").ss(2,1).p("AiygnIAJAMQANAPASAMQA7AnBQABQBagFAwgcQARgKAOgMQAEgFAFgF");
	this.shape_36.setTransform(13.9018,15.1805);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#373535").ss(2,1).p("AiygmIAKAMQANAOARAMQA7AmBQABQBZgEAxgbQARgJANgMQAFgFAFgF");
	this.shape_37.setTransform(13.7813,15.1439);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#373535").ss(2,1).p("AixgmIAJAMQANAOARAMQA7AmBQAAQBYgEAxgaQARgIAOgLQAFgFAEgF");
	this.shape_38.setTransform(13.6607,15.1073);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#373535").ss(2,1).p("AixglIAKALQANAOARAMQA6AlBPABQBYgEAygZQARgJANgKQAFgEAFgF");
	this.shape_39.setTransform(13.5402,15.0707);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#373535").ss(2,1).p("AixgkIAKALQANANARAMQA6AkBPABQBYgDAxgYQARgJAOgJQAFgEAFgF");
	this.shape_40.setTransform(13.4196,15.0341);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#373535").ss(2,1).p("AixgkIAKALQAOAOAQALQA7AkBOABQBXgEAxgWQARgJAOgIQAGgEAFgF");
	this.shape_41.setTransform(13.2991,14.9975);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#373535").ss(2,1).p("AiwgjIAKAKQANAOAQALQA7AjBOABQBWgDAygVQARgIAOgJQAFgDAFgE");
	this.shape_42.setTransform(13.1786,14.9609);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#373535").ss(2,1).p("AiwgjIAKALQANANARALQA6AiBOACQBVgDAygVQARgHAOgIQAGgEAFgD");
	this.shape_43.setTransform(13.058,14.9243);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#373535").ss(2,1).p("AiwgiIAKAKQAOANAQALQA6AiBOABQBUgDAygTQARgHAPgHQAFgEAGgD");
	this.shape_44.setTransform(12.9375,14.8877);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#373535").ss(2,1).p("AivgiIAKAKQANANAQALQA7AhBNACQBTgDAzgSQARgHAOgHQAGgDAFgD");
	this.shape_45.setTransform(12.817,14.851);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#373535").ss(2,1).p("AivghIAKAKQAOAMAQALQA6AgBNACQBSgCAzgRQARgGAPgIQAGgCAFgD");
	this.shape_46.setTransform(12.6964,14.8144);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#373535").ss(2,1).p("AivggIAKAJQAOAMAQALQA6AgBNABQBSgCAygPQARgGAQgHQAFgDAGgC");
	this.shape_47.setTransform(12.5759,14.7778);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#373535").ss(2,1).p("AiuggIAKAJQAOAMAPALQA6AfBNACQBRgCAzgPQARgFAPgGQAGgDAFgC");
	this.shape_48.setTransform(12.4554,14.7412);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#373535").ss(2,1).p("AiugfIAKAJQAOALAQALQA5AeBNACQBQgBAzgOQARgFAQgGQAFgCAGgC");
	this.shape_49.setTransform(12.3348,14.7046);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#373535").ss(2,1).p("AiugfIALAJQANALAQALQA6AeBMACQBPgCA0gMQARgFAPgFQAGgCAGgC");
	this.shape_50.setTransform(12.2143,14.668);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#373535").ss(2,1).p("AiugeIALAIQAOAMAPAKQA6AdBMACQBOgBA0gLQARgEAQgFQAGgCAGgC");
	this.shape_51.setTransform(12.0938,14.6314);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#373535").ss(2,1).p("AitgeIAKAJQAOALAQAKQA5AcBLADQBOgBA0gLQARgDAQgEQAGgCAGgC");
	this.shape_52.setTransform(11.9732,14.5947);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#373535").ss(2,1).p("AitgdIALAIQAOALAPAKQA5AcBLACQBNgBA1gJQARgDAQgEQAGgBAGgC");
	this.shape_53.setTransform(11.8527,14.5581);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#373535").ss(2,1).p("AitgdIALAIQAOALAPAJQA6AcBKACQBMAAA1gIQARgDAQgDQAHgBAGgC");
	this.shape_54.setTransform(11.7321,14.5215);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#373535").ss(2,1).p("AisgcIAKAIQAPAKAPAJQA5AbBKADQBMAAA0gHQARgCARgDQAGgCAGgB");
	this.shape_55.setTransform(11.6116,14.4848);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#373535").ss(2,1).p("AisgbIALAHQAOAKAPAJQA5AbBKACQBLAAA1gFQARgCAQgDQAHgBAGgB");
	this.shape_56.setTransform(11.4911,14.4482);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#373535").ss(2,1).p("AisgbIALAHQAPAKAOAJQA5AaBKADQBKAAA1gFQARgBARgCQAGgBAHAA");
	this.shape_57.setTransform(11.3705,14.4123);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#373535").ss(2,1).p("AisgbIAtAbQA8AcBWAAQBMAABOgI");
	this.shape_58.setTransform(11.25,14.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#373535").ss(2,1).p("AisgaIAjAWQA+AcBJADQAKAAALAAQA5AAA5gEQAUgCAUgC");
	this.shape_59.setTransform(11.4107,14.3393);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#373535").ss(2,1).p("AisgaIAjAWQA+AcBJACQAKABAMAAQA5AAA5gFQAUgCATgD");
	this.shape_60.setTransform(11.5714,14.2788);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#373535").ss(2,1).p("AitgZIAkAVQA+AcBJACQAKABAMgBQA6AAA4gFQAVgDATgD");
	this.shape_61.setTransform(11.7321,14.2184);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#373535").ss(2,1).p("AitgZIAkAWQA+AaBJADQALAAALAAQA7AAA4gGQAVgDASgE");
	this.shape_62.setTransform(11.8929,14.158);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#373535").ss(2,1).p("AitgZIAkAWQA+AaBKACQAKABAMAAQA7gBA3gGQAWgDARgE");
	this.shape_63.setTransform(12.0536,14.0978);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#373535").ss(2,1).p("AiugYIAkAVQA/AaBKACQAKABAMgBQA8AAA3gHQAWgEARgE");
	this.shape_64.setTransform(12.2143,14.0378);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#373535").ss(2,1).p("AiugYIAkAVQA/AaBKACQALAAALAAQA9gBA2gHQAXgEAQgF");
	this.shape_65.setTransform(12.375,13.9778);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#373535").ss(2,1).p("AivgYIAlAWQA/AZBKACQALAAAMAAQA9gBA2gIQAWgFARgF");
	this.shape_66.setTransform(12.5357,13.9179);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#373535").ss(2,1).p("AivgXIAlAVQA/AZBLABQAKABAMgBQA+gBA1gIQAXgFAQgF");
	this.shape_67.setTransform(12.6964,13.8582);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#373535").ss(2,1).p("AivgXIAlAVQA/AYBLACQALAAALAAQA/gBA1gJQAXgFAPgG");
	this.shape_68.setTransform(12.8571,13.7985);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#373535").ss(2,1).p("AiwgXIAmAVQA/AYBLACQALAAAMAAQA/gBA0gKQAYgGAPgG");
	this.shape_69.setTransform(13.0179,13.739);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#373535").ss(2,1).p("AiwgWIAlAVQBAAXBLABQALABAMgBQBAgBA0gLQAYgFAOgG");
	this.shape_70.setTransform(13.1786,13.6796);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#373535").ss(2,1).p("AixgWIAmAVQBAAXBLABQAMAAALAAQBBgBAzgMQAZgGAOgF");
	this.shape_71.setTransform(13.3393,13.6203);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#373535").ss(2,1).p("AixgWIAmAVQBAAXBLABQAMAAAMAAQBBgCAzgMQAZgGANgG");
	this.shape_72.setTransform(13.5,13.5611);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#373535").ss(2,1).p("AixgVIAmAUQBAAXBLAAQAMABAMgBQBCgBAygNQAagHAMgG");
	this.shape_73.setTransform(13.6607,13.502);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#373535").ss(2,1).p("AiygVIAnAVQBAAVBLABQANAAALAAQBDgCAygNQAZgHANgH");
	this.shape_74.setTransform(13.8214,13.4431);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#373535").ss(2,1).p("AiygVIAmAVQBAAVBNABQAMAAALgBQBEgBAxgOQAagGAMgI");
	this.shape_75.setTransform(13.9821,13.3842);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#373535").ss(2,1).p("AizgUIAnAUQBAAVBNAAQAMABAMgBQBEgCAxgOQAagHAMgI");
	this.shape_76.setTransform(14.1429,13.3255);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#373535").ss(2,1).p("AizgUIAnAUQBAAVBNAAQANAAALAAQBFgCAwgPQAbgHALgJ");
	this.shape_77.setTransform(14.3036,13.2669);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#373535").ss(2,1).p("AizgUIAnAUQBAAVBNAAQANAAALgBQBGgCAwgPQAbgIAKgJ");
	this.shape_78.setTransform(14.4643,13.2084);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#373535").ss(2,1).p("Ai0gTIAoATQA4AVBWAAQBWAAA3gTQAcgIAKgJ");
	this.shape_79.setTransform(14.625,13.15);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#373535").ss(2,1).p("Ai0gUIAoAUQA4AUBWAAQBWAAA3gSQAcgIAKgK");
	this.shape_80.setTransform(14.625,13.15);
	this.shape_80._off = true;

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#373535").ss(2,1).p("AizgTQAUALATAIQAwARBEADQBoAAA0gQQAGgBAFgCQAbgIAKgK");
	this.shape_81.setTransform(14.8,13.285);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#373535").ss(2,1).p("AizgSQAUAKAUAIQAwAQBDADQBoAAA0gQQAFgBAGgCQAagIALgK");
	this.shape_82.setTransform(14.975,13.4185);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#373535").ss(2,1).p("AizgQQAVAKATAIQAxAPBDACQBmAAA1gQQAFgBAGgCQAagJALgJ");
	this.shape_83.setTransform(15.15,13.4652);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#373535").ss(2,1).p("AiygOQAUAJAUAIQAxAOBCADQBmgBA1gQQAFgCAFgBQAagJALgK");
	this.shape_84.setTransform(15.325,13.512);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#373535").ss(2,1).p("AiygMQAUAJAUAHQAxAOBCACQBmAAA0gRQAGgCAFgBQAZgJAMgK");
	this.shape_85.setTransform(15.5,13.5587);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#373535").ss(2,1).p("AiygKQAVAIAUAHQAxANBBADQBmgBA0gRQAGgCAFgBQAZgKAMgK");
	this.shape_86.setTransform(15.675,13.6055);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#373535").ss(2,1).p("AixgIQAUAIAUAGQAyANBBACQBlgBA0gRQAFgCAGgCQAYgJAMgK");
	this.shape_87.setTransform(15.85,13.6523);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#373535").ss(2,1).p("AixgGQAVAGAUAHQAyANBAABQBlgBA0gSQAFgCAGgBQAXgJANgK");
	this.shape_88.setTransform(16.025,13.699);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#373535").ss(2,1).p("AixgFQAVAHAUAGQAzAMA/ACQBlgCA0gSQAFgCAFgBQAYgKANgK");
	this.shape_89.setTransform(16.2,13.7458);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#373535").ss(2,1).p("AiwgDQAUAGAVAGQAzAMA+ABQBlgBA0gTQAFgCAFgBQAXgKANgK");
	this.shape_90.setTransform(16.375,13.7925);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#373535").ss(2,1).p("AiwgBQAVAGAUAGQAzAKA/ACQBjgCA0gTQAGgCAFgCQAWgJAOgL");
	this.shape_91.setTransform(16.55,13.8392);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#373535").ss(2,1).p("AivAAQAUAGAVAGQAzAKA+ABQBjgCA0gTQAGgCAFgCQAWgKANgK");
	this.shape_92.setTransform(16.725,13.886);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#373535").ss(2,1).p("AivACQAVAGAUAFQA0AJA9ABQBjgCA0gTQAFgCAGgCQAVgKAOgK");
	this.shape_93.setTransform(16.9,13.9327);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#373535").ss(2,1).p("AivAEQAVAFAVAFQA0AJA9ABQBigDA0gUQAFgBAFgDQAVgJAPgL");
	this.shape_94.setTransform(17.075,13.9795);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#373535").ss(2,1).p("AiuAGQAVAFAUAEQA1AIA8ABQBigCA0gVQAFgBAFgDQAVgKAOgK");
	this.shape_95.setTransform(17.25,14.0262);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#373535").ss(2,1).p("AiuAHQAVAFAVAEQA1AIA7ABQBigDA0gVQAFgBAFgDQAUgKAPgL");
	this.shape_96.setTransform(17.425,14.0729);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#373535").ss(2,1).p("AiuAJQAVAFAVADQA1AHA7ABQBigDAzgVQAGgCAFgCQATgKAQgL");
	this.shape_97.setTransform(17.6,14.1197);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#373535").ss(2,1).p("AitALQAVAEAVADQA1AHA7AAQBhgDAzgVQAFgCAGgDQATgKAPgK");
	this.shape_98.setTransform(17.775,14.1664);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#373535").ss(2,1).p("AitANQAVAEAVADQA2AFA6ABQBggEA0gVQAFgCAFgDQATgKAQgL");
	this.shape_99.setTransform(17.95,14.2131);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#373535").ss(2,1).p("AitAPQAWADAVADQA2AFA5AAQBggEA0gWQAFgBAFgDQASgKARgL");
	this.shape_100.setTransform(18.125,14.2599);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#373535").ss(2,1).p("AisARQAVADAVACQA3AEA4ABQBggEA0gXQAFgCAFgCQASgLAQgL");
	this.shape_101.setTransform(18.3,14.3066);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#373535").ss(2,1).p("AisATQAWACAVACQA3AEA4AAQBfgEA0gXQAFgCAFgDQARgKARgL");
	this.shape_102.setTransform(18.475,14.3533);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#373535").ss(2,1).p("AirASQAJABAJABQATACAUACQAwAFAwAAQBYgDAzgXQAEgBAEgCQANgIAOgKIAQgK");
	this.shape_103.setTransform(18.5367,14.1837);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#373535").ss(2,1).p("AiqAPQAIABAJACQATADAUACQAvAHAwAAQBagDAygYQAEgBAEgCQANgJAOgKIAPgK");
	this.shape_104.setTransform(18.4234,13.9673);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#373535").ss(2,1).p("AipAMQAIACAIACQATADATAEQAvAIAxABQBagDAygaQAEgCAEgBQANgJANgLIAPgL");
	this.shape_105.setTransform(18.3102,13.7509);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#373535").ss(2,1).p("AipAJQAIACAIACQATAFATAEQAuAKAxABQBcgCAxgcQAEgCAEgBQANgKANgLIAPgL");
	this.shape_106.setTransform(18.1969,13.5346);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#373535").ss(2,1).p("AioAGQAIADAIACQASAGASAEQAuAMAyACQBcgDAxgdQAEgCAEgCQANgKANgLIAOgM");
	this.shape_107.setTransform(18.0836,13.3182);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#373535").ss(2,1).p("AinADQAHADAIADQARAGATAGQAtANAzACQBdgCAwgfQAEgCAEgCQANgKAMgMIAOgM");
	this.shape_108.setTransform(17.9703,13.1018);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#373535").ss(2,1).p("AinABQAIADAHADQARAHASAGQAtAQAzACQBegCAxghQADgCAEgCQANgLAMgMIAOgN");
	this.shape_109.setTransform(17.857,12.8854);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#373535").ss(2,1).p("AimgBQAHACAHAEQARAIASAGQAsASA0ACQBfgCAwgiQAEgDADgCQANgLAMgMIANgN");
	this.shape_110.setTransform(17.7438,12.669);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#373535").ss(2,1).p("AilgEQAHAEAHADQAQAIASAIQArATA0ADQBggCAwgkQAEgDADgCQANgLALgNIANgO");
	this.shape_111.setTransform(17.6305,12.4526);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#373535").ss(2,1).p("AilgHQAHAEAHADQAQAKARAIQArAVA1ADQBggBAwgmQAEgDAEgCQAMgMALgNIANgO");
	this.shape_112.setTransform(17.5172,12.2362);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#373535").ss(2,1).p("AikgKQAHAFAGAEQAQAKARAIQAqAXA2AEQBhgCAvgnQAEgDAEgDQAMgMALgNIAMgP");
	this.shape_113.setTransform(17.4039,12.0198);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#373535").ss(2,1).p("AijgNQAGAFAGAFQAPAKARAKQArAYA1AEQBigBAvgpQAEgDAEgDQAMgMAKgOIAMgP");
	this.shape_114.setTransform(17.2906,11.8034);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#373535").ss(2,1).p("AiigPQAGAFAGAFQAOALARAKQAqAaA2AFQBjgBAvgrQADgDAEgDQAMgNAKgOIALgQ");
	this.shape_115.setTransform(17.1773,11.5869);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#373535").ss(2,1).p("AiigSQAGAFAGAGQAOAMAQAKQAqAdA2AEQBkgBAvgsQADgDAEgDQAMgOAKgOIALgQ");
	this.shape_116.setTransform(17.0641,11.3705);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#373535").ss(2,1).p("AihgVQAGAGAFAGQAOAMAQAMQApAeA3AFQBlgBAugvQADgCAEgEQALgNAKgPIALgR");
	this.shape_117.setTransform(16.9508,11.1541);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#373535").ss(2,1).p("AiggYQAFAGAFAGQAOAOAQAMQAoAgA4AFQBlAAAugxQAEgCADgEQALgOAKgPIAKgR");
	this.shape_118.setTransform(16.8375,10.9376);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#373535").ss(2,1).p("AiggbQAGAHAFAGQAMAPAQAMQAoAiA4AGQBngBAtgyQAEgCADgEQALgPAKgPIAKgS");
	this.shape_119.setTransform(16.7242,10.7212);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#373535").ss(2,1).p("AifgeQAFAHAFAHQAMAQAQANQAnAjA5AGQBnAAAtg0QAEgDADgEQALgOAJgQIAKgS");
	this.shape_120.setTransform(16.6109,10.5047);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#373535").ss(2,1).p("AieggQAFAHAEAHQAMARAPANQAnAlA5AHQBoAAAug2QADgDADgEQALgPAJgQIAJgT");
	this.shape_121.setTransform(16.4977,10.2883);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#373535").ss(2,1).p("AiegjQAFAHAEAIQAMARAPAPQAmAmA6AHQBpAAAtg3QADgDAEgEQAKgPAJgRIAJgT");
	this.shape_122.setTransform(16.3844,10.0719);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#373535").ss(2,1).p("AidgmQAFAIAEAIQALASAOAPQAmApA7AHQBpAAAtg5QADgDAEgFQAKgPAIgRIAJgU");
	this.shape_123.setTransform(16.2711,9.8556);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#373535").ss(2,1).p("AicgpQAEAIAEAIQALAUAOAPQAlArA7AHQBrABAsg7QADgDAEgFQAKgQAIgRIAIgU");
	this.shape_124.setTransform(16.1578,9.6394);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#373535").ss(2,1).p("AicgsQAEAJAEAIQAKAUAPARQAkAsA8AHQBrABAsg8QAEgDADgFQAKgQAIgSIAIgU");
	this.shape_125.setTransform(16.0445,9.4232);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#373535").ss(2,1).p("AibgvQAEAJADAJQAKAVAOARQAlAuA7AIQBtABArg+QAEgEADgFQAKgQAHgSIAIgV");
	this.shape_126.setTransform(15.9313,9.207);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#373535").ss(2,1).p("AiagxQADAJAEAJQAJAWAOARQAkAwA8AIQBtACAshAQADgEADgFQAKgRAHgSIAHgV");
	this.shape_127.setTransform(15.818,8.9909);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#373535").ss(2,1).p("AiZg0QADAJADAKQAJAWANATQAkAxA9AJQBuABArhBQADgEADgFQAKgRAHgUIAGgV");
	this.shape_128.setTransform(15.7047,8.7748);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#373535").ss(2,1).p("AiZg3QADAKADAKQAJAXANATQAjAzA9AJQBvACArhDQADgEADgGQAKgRAGgUIAHgV");
	this.shape_129.setTransform(15.5914,8.5588);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#373535").ss(2,1).p("AiYg6QADAKACAKQAIAZANATQAjA2A+AJQBvACArhFQADgEADgGQAKgSAGgUIAGgW");
	this.shape_130.setTransform(15.4781,8.3428);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#373535").ss(2,1).p("AiXg9QACALADAKQAHAZANAVQAiA3A+AJQBxACAqhHQADgEADgFQAJgSAHgVIAFgW");
	this.shape_131.setTransform(15.3648,8.1268);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#373535").ss(2,1).p("AiXhAQADALACALQAHAaANAVQAhA5A/AKQBxACAqhJQADgEAEgGQAIgSAGgVIAGgX");
	this.shape_132.setTransform(15.2516,7.9108);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#373535").ss(2,1).p("AiWhCQACALACALQAHAbAMAVQAhA7BAAKQByADAqhLQADgEADgGQAIgTAGgVIAFgX");
	this.shape_133.setTransform(15.1383,7.6949);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},30).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58,p:{skewY:0,x:11.25}}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},39).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_58,p:{skewY:180,x:18.65}}]},1).to({state:[{t:this.shape_58,p:{skewY:180,x:18.65}}]},16).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape}]},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.shape_80).wait(149).to({_off:false},0).wait(18).to({_off:true},1).wait(144));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-3.9,52.8,26.099999999999998);


(lib.mouth_motion_speakcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AiIAHIAAAAQgNgYgGgcIAAgBIgBAAIgDgXQgBgEADgEQACgDAFgBQAEAAADACQADADABAEIADAXQAHAaALAWIAAAAQAkBDBRAAQBPAAAnhGQAMgWAHgcIAAABIAFgYQAAgEAEgCQADgCAEAAQAEABACADQADAEgBAEIgEAYIAAAAQgIAegNAYQgtBRhbAAQhdAAgqhPg");
	this.shape.setTransform(15.0152,7.6052);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AiEAFIAAAAQgNgYgGgcIAAgBIgBAAIgDgXQgBgEADgEQACgDAFgBQAEAAADACQADADABAEIADAXQAGAaAMAWIAAAAQAkBDBQAAQBQAAAnhGIAIgOIAFgSIADgLQABgEADgCQADgCAEAAQAEABACADQADAEgBAEIgCAMIgGAUIgJAQQgtBRhcAAQhcAAgqhPg");
	this.shape_1.setTransform(14.6246,7.8203);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AiEAFIAAAAQgNgYgGgcIAAgBIgBAAIgDgXQgBgEADgEQACgDAFgBQAEAAADACQADADABAEIAAAAQABApAgAoQBKA1A1gMQA2gMAWgaQAVgZAHgOIAHgPIABgFQABgEADgCQADgCAEAAQAEABACADQADAEgBAEIgCAMIgGAUIgJAQQgtBRhcAAQhcAAgqhPg");
	this.shape_2.setTransform(14.6246,7.8203);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AiBgKIAAgBQgIgPgGgRQgIgbANAJIAlAaQAZASgDADQgDACAjAUIAvAbQgegKhFgiQA5ApAqADQAeATgEgIQgGgLABgBQAvgJgQAAQgPgBAngZQAogbAWgGQAVgGgbAyQgbAzhgADIgHAAQhaAAgphKg");
	this.shape_3.setTransform(14.3489,9.4684);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},14).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},13).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(10));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AiIAHIAAAAQgNgYgGgcIAAgBIgBAAIgDgXQgBgEADgEQACgDAFgBQAEAAADACQADADABAEIADAXQAHAaALAWIAAAAQAkBDBRAAQBPAAAnhGQAMgWAHgcIAAABIAFgYQAAgEAEgCQADgCAEAAQAEABACADQADAEgBAEIgEAYIAAAAQgIAegNAYQgtBRhbAAQhdAAgqhPg");
	this.shape_4.setTransform(15.0152,7.6052);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgIBTQhPgDgphAIAAAAIgHgNIAAgBQgLgUgFgYIAAAAIAAAAIgCgGIAAgBIgBAAIgCgUIgBgCQAAgEACgDIABgBQACgDAEAAIACAAIAFABIACADIACAEIAIAUQAGAQAKAPIAGAKQAgAsA1AJQAPACARgBQApgCAegUQAdgTAPgYIABgCIAGgHIAEgFIADgEIAFgNIAAABIAAABIABgNQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAQACgCADACQACABACADQABADAAAEIgEAOIgCAJIAAAAQgJAcgOAVQgkA3g+AMQgPACgQAAIgIAAg");
	this.shape_5.setTransform(14.7793,7.7943);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgOBTQhLgHgmhAIAAAAIgHgMIAAAAQgKgUgFgXIAAgBIgBAAIgBgGIAAAAIAAAAIgDgTIAAgCQgBgEACgDIABgBQACgDAEAAIACAAIAEABIADACIADAEIALARQAIANAMAOIAHAIQAkAlAzAFQAPABAQgBQAmgEAegTQAggXAMgRIACgCIAGgFIAFgCIACAAIACAAIAAABIAAgBIAAgBIAAABIgBgBIABAAIADACIABAFIAAAGIgEANIgDAIIAAAAQgKAZgQAUQglAxg+AIIgWABIgPAAg");
	this.shape_6.setTransform(14.5392,7.78);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgXBSQhHgJgkhAIAAAAIgGgLIAAAAQgJgUgGgXIAAAAIAAgBIgBgFIAAAAIAAgBIgDgSIAAgBQgBgEACgDIABgBQACgCAEgBIABAAIAFABIADACIAEADIAOAOQAKAKAOAMIAIAHQAoAfAwABQAQAAAPgCQAkgGAcgUQAkgaAJgJIACgCQADgCAEAAQADgBACABQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIgBALIAAABIAAABIgDAJIgBAEIAAADIgBAGIgBAFIgFAMIgDAIIAAAAQgMAXgQASQgnAqg+AEIgMAAQgMAAgLgBg");
	this.shape_7.setTransform(14.6206,7.7852);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AiIAHIAAAAQgNgYgGgcIAAgBIgBAAIgDgXQgBgEADgEQACgDAFgBQAEAAADACIAzAgQAwAdAzgCQA0gDAngdQAngdAFgCQAGgDAEABQAEABACADQADAEgBAEIgEAYIAAAAQgIAegNAYQgtBRhbAAQhdAAgqhPgAgKBCIgBgBIgBABIABAAIABAAg");
	this.shape_8.setTransform(15.0152,7.6044);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgOBTQhPgGgnhGIAAAAIgDgHIgBAAQgKgVgGgZIAAAAIAAgBIgBgDIAAAAIAAAAIgCgPIAAgBIgBgFIAAAAQgBgEADgEQACgDAEgBIABAAQADAAADACIABABIAGAFIAPAOIAKAKIAMAIIABAAIABABIAIAFQApAbAuABIADAAQAWgBAVgFQAUgFARgKIAPgJIAcgUIAFgEIALgKQAFgDAEgBQADAAACABIAAABIABABIAAADIgBAJIAAADIAAAAIAAABIAAAEIAAAGIgBAGIgHAXIAAABIgGANIgJAOIAAACIgKAOQgqA4hKADIgHAAIgOgBg");
	this.shape_9.setTransform(14.7361,7.809);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgJBTQhSgEgohGIAAAAIgEgHIAAgBQgLgVgGgZIAAAAIgBAAIAAgEIAAAAIgBgBIgCgOIAAgBIgBgFIAAgBQAAgEACgEQADgDAEgBIABAAQADAAADACIABABIAFAFIALASIAIALIAMAJIAAAAIACABIAIAHQAoAdAwACIAEAAQAVAAAVgDQAVgFATgKIAPgJIAdgTIAFgEQAHgHADgGIAHgGIAEgCIAAAAIAAABIABABIAAgBIABAAIAAABIABAAIACACIACAFIAAAHIgGAXIAAABIgGAOIgIAQIAAABIgJAPQgpA9hLAFIgMABIgJgBg");
	this.shape_10.setTransform(14.7771,7.8084);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgFBUQhVgCgphHIAAAAIgEgIIgBAAQgLgVgGgaIAAAAIAAAAIgBgEIAAgBIgBAAIgCgPIAAgBIgBgFIAAgBQAAgFACgDQADgDAEgBIABAAQADAAADACIABABIAEAGIAHAUIAGANIAMAJIAAABIACACIAIAHQAnAhAyAEIADAAQAWABAWgEQAWgFAUgIIAQgKIAdgTIAFgDQAGgIADgHIAFgKIADgEIAAAAIAAABIABgCIACgKIACgDIAAAAIABAAQACgBADABQACABACAEQACADgBAEIgGAXIAAABIgFAQIgIASIAAABIgJAPQgnBChLAHIgSABIgEAAg");
	this.shape_11.setTransform(14.8983,7.8144);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AiIAHIAAAAQgNgYgGgcIAAgBIgBAAIgCgPIAAgBIgBgHQgBgEADgEQACgDAFgBQAEAAADACQADADABAEIADAXIAEAPIALAKIABABIAKAKQAmAkAzAGQAXADAZgEQAYgEAUgKQAigSANgKIAFgCQAIgSAFgUIAAABIAFgYQAAgEAEgCQADgCAEAAQAEABACADQADAEgBAEIgEAYIAAAAQgFAUgIARQABABgBgBIgIARQgtBRhbAAQhdAAgqhPg");
	this.shape_12.setTransform(15.0152,7.6052);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AiJAAIAAAAQgMgZgHgcIAAAAIAAgBIgCgJQA5BJBngIQBpgIA0hHIgEAUIAAAAQgHAegOAZQgsBQhcAAQhcAAgrhOgAgLA6IgBgBIAAABIAAAAIABAAg");
	this.shape_13.setTransform(15.075,8.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AiEgEIAAAAIgBgCIAAAAQgMgZgHgbIAAgBIAAAAIAAgBIgCgJQA4BPBigEQAVgBAUgFQBMgPAmg4IgBANIAAAAIgCAFQgEAXgNAXIgPAWQgpA4hPABIAAAAIAAAAQhZAAgrhMg");
	this.shape_14.setTransform(14.69,8.9801);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AiAgFIgBAAIgBgCIAAAAQgMgZgHgbIAAgBIAAAAIAAgBIgCgJQA4BWBdgBQATgBAUgDQBOgPAkg4IABAFIAAAAIgBACQgCAVgOAZIgOAWQgnA2hQACIgBAAIgBAAQhWAAgqhMg");
	this.shape_15.setTransform(14.35,9.0602);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("Ah+gFIAAAAIgBgCIAAgBQgNgYgGgbIAAgBIAAAAIAAgBIgCgIQA2BbBYADQATAAAUgDQBQgPAhg2IADgEIAAABIAAgCQAAATgOAcIgOAVQglA1hRABIgBAAIgCAAQhUAAgqhLg");
	this.shape_16.setTransform(14.0858,9.0405);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("Ah8gFIAAgBIgBgBIgBgBQgMgYgGgbIAAgBIAAAAIAAgBIgCgIQA1BhBSAHQATABAUgDQBSgOAeg2QADgFACgGIAAAAIABgFQADARgPAeIgOAVQgiAzhTACIgBAAIgCAAQhTAAgphLg");
	this.shape_17.setTransform(13.8793,9.0209);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("Ah7gGIAAAAQgNgYgGgdIAAAAIAAgBIgCgJQBBCCBmgQQBngRAShNQAHASgfAxQggAyhVACIgDAAQhSAAgphMgAACA0IgBAAIAAAAIAAAAIABAAg");
	this.shape_18.setTransform(13.6999,8.9897);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AiDgQQgMgVAAgTIAAgBIADACIAAAAQALAIAWAJIAAAAQAcAOAmAQQAlAOBNgVQBOgXgHAKQgIAJgMAMQAHABgEAGIgBAAIgLAAQgcAuhCAKIgYACIgFAAQhMAAgvhKg");
	this.shape_19.setTransform(14.6721,9.6289);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AiFgCIgBgBQgMgYAMgPQAageBXgCQBXgDA2AfQAfAQgOAZQgsBQhdAAQhbAAgqhNgAgIA3IgBAAIAAAAIAAAAIABAAg");
	this.shape_20.setTransform(14.7882,9.9155);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AiFgCIgBAAQgMgVAMgNQAagaBXgCQBXgCA2AaQAfAPgOAVQgsBFhdAAQhbAAgqhDg");
	this.shape_21.setTransform(14.7882,9.8483);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AiFgBIgBgBQgMgSAMgKQAagWBXgCQBXgCA2AXQAfAMgOASQgsA6hdAAQhbAAgqg4g");
	this.shape_22.setTransform(14.7882,9.7811);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AiFgBIgBAAQgMgPAMgIQAagSBXgCQBXgBA2ASQAfAKgOAPQgsAvhdAAQhbAAgqgug");
	this.shape_23.setTransform(14.7882,9.7139);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AiFAAIgBAAQgMgMAMgGQAagOBXgBQBXgBA2AOQAfAHgOAMQgsAkhdAAQhbAAgqgjgAgIAaIgBgBIAAABIAAgBIABABg");
	this.shape_24.setTransform(14.7882,9.6467);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AAEAdIgEAAQhSgBgvgbIAAAAQgGgDgCgDQgBgDACgDIACgDIAAAAQAHgDAIgCQAigIA+gBQBIgCA2AKIANACQAbAGgGAKIgCACQgCADgDACQguAYhIAAIgIAAg");
	this.shape_25.setTransform(14.6374,9.651);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AAHAYIgEAAQhMgBg1gTIAAAAIgJgEIAAgGIABgDIAAgBQAGgDAJgCQAlgHA4gBQBEgCA4AIIAOACQAXAEABAJIABACQgCADgEACQguATg+AAIgQAAg");
	this.shape_26.setTransform(14.5917,9.6619);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AAJATIgEAAQhFgBg7gLIAAAAIgLgDIgCgFIABgEIAAAAQAGgEAIgBQApgHAygBQBAgCA6AGIAOABQATADAIAHIAEACQgBADgFACQgtAQg1AAIgYgBg");
	this.shape_27.setTransform(14.6375,9.68);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AAIANQhGAAhHgFIgDgFIAAgEQAGgFAIAAQBpgOBoAJQAbAAAXAJQAAAEgFACQgsALgtAAQgSAAgRgCg");
	this.shape_28.setTransform(14.675,9.7037);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AiIAHIAAAAQgNgYgGgcIAAgBIgBAAIgDgXQgBgFADgDQACgDAFgBQAEAAADACIAzAgQAwAdAzgCQA0gDAngdQAngdAFgCQAGgDAEABQAEABACADQADADgBAFIgEAYIAAAAQgIAegNAYQgtBRhbAAQhdAAgqhPg");
	this.shape_29.setTransform(15.025,7.6107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24,p:{y:9.6467}}]},1).to({state:[{t:this.shape_25,p:{y:9.651}}]},1).to({state:[{t:this.shape_26,p:{y:9.6619}}]},1).to({state:[{t:this.shape_27,p:{y:9.68}}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27,p:{y:9.5925}}]},1).to({state:[{t:this.shape_26,p:{y:9.4869}}]},1).to({state:[{t:this.shape_25,p:{y:9.3885}}]},1).to({state:[{t:this.shape_24,p:{y:9.2967}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32.1,18.5);


(lib.mouth_motion_speak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AiIAHIAAAAQgNgYgGgcIAAgBIgBAAIgDgXQgBgEADgEQACgDAFgBQAEAAADACQADADABAEIADAXQAHAaALAWIAAAAQAkBDBRAAQBPAAAnhGQAMgWAHgcIAAABIAFgYQAAgEAEgCQADgCAEAAQAEABACADQADAEgBAEIgEAYIAAAAQgIAegNAYQgtBRhbAAQhdAAgqhPg");
	this.shape.setTransform(15.0152,7.6052);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AiEAFIAAAAQgNgYgGgcIAAgBIgBAAIgDgXQgBgEADgEQACgDAFgBQAEAAADACQADADABAEIADAXQAGAaAMAWIAAAAQAkBDBQAAQBQAAAnhGIAIgOIAFgSIADgLQABgEADgCQADgCAEAAQAEABACADQADAEgBAEIgCAMIgGAUIgJAQQgtBRhcAAQhcAAgqhPg");
	this.shape_1.setTransform(14.6246,7.8203);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AiEAFIAAAAQgNgYgGgcIAAgBIgBAAIgDgXQgBgEADgEQACgDAFgBQAEAAADACQADADABAEIAAAAQABApAgAoQBKA1A1gMQA2gMAWgaQAVgZAHgOIAHgPIABgFQABgEADgCQADgCAEAAQAEABACADQADAEgBAEIgCAMIgGAUIgJAQQgtBRhcAAQhcAAgqhPg");
	this.shape_2.setTransform(14.6246,7.8203);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AiBgKIAAgBQgIgPgGgRQgIgbANAJIAlAaQAZASgDADQgDACAjAUIAvAbQgegKhFgiQA5ApAqADQAeATgEgIQgGgLABgBQAvgJgQAAQgPgBAngZQAogbAWgGQAVgGgbAyQgbAzhgADIgHAAQhaAAgphKg");
	this.shape_3.setTransform(14.3489,9.4684);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},14).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},13).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(10));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AiIAHIAAAAQgNgYgGgcIAAgBIgBAAIgDgXQgBgEADgEQACgDAFgBQAEAAADACQADADABAEIADAXQAHAaALAWIAAAAQAkBDBRAAQBPAAAnhGQAMgWAHgcIAAABIAFgYQAAgEAEgCQADgCAEAAQAEABACADQADAEgBAEIgEAYIAAAAQgIAegNAYQgtBRhbAAQhdAAgqhPg");
	this.shape_4.setTransform(15.0152,7.6052);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgIBTQhPgDgphAIAAAAIgHgNIAAgBQgLgUgFgYIAAAAIAAAAIgCgGIAAgBIgBAAIgCgUIgBgCQAAgEACgDIABgBQACgDAEAAIACAAIAFABIACADIACAEIAIAUQAGAQAKAPIAGAKQAgAsA1AJQAPACARgBQApgCAegUQAdgTAPgYIABgCIAGgHIAEgFIADgEIAFgNIAAABIAAABIABgNQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAQACgCADACQACABACADQABADAAAEIgEAOIgCAJIAAAAQgJAcgOAVQgkA3g+AMQgPACgQAAIgIAAg");
	this.shape_5.setTransform(14.7793,7.7943);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgOBTQhLgHgmhAIAAAAIgHgMIAAAAQgKgUgFgXIAAgBIgBAAIgBgGIAAAAIAAAAIgDgTIAAgCQgBgEACgDIABgBQACgDAEAAIACAAIAEABIADACIADAEIALARQAIANAMAOIAHAIQAkAlAzAFQAPABAQgBQAmgEAegTQAggXAMgRIACgCIAGgFIAFgCIACAAIACAAIAAABIAAgBIAAgBIAAABIgBgBIABAAIADACIABAFIAAAGIgEANIgDAIIAAAAQgKAZgQAUQglAxg+AIIgWABIgPAAg");
	this.shape_6.setTransform(14.5392,7.78);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgXBSQhHgJgkhAIAAAAIgGgLIAAAAQgJgUgGgXIAAAAIAAgBIgBgFIAAAAIAAgBIgDgSIAAgBQgBgEACgDIABgBQACgCAEgBIABAAIAFABIADACIAEADIAOAOQAKAKAOAMIAIAHQAoAfAwABQAQAAAPgCQAkgGAcgUQAkgaAJgJIACgCQADgCAEAAQADgBACABQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIgBALIAAABIAAABIgDAJIgBAEIAAADIgBAGIgBAFIgFAMIgDAIIAAAAQgMAXgQASQgnAqg+AEIgMAAQgMAAgLgBg");
	this.shape_7.setTransform(14.6206,7.7852);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AiIAHIAAAAQgNgYgGgcIAAgBIgBAAIgDgXQgBgEADgEQACgDAFgBQAEAAADACIAzAgQAwAdAzgCQA0gDAngdQAngdAFgCQAGgDAEABQAEABACADQADAEgBAEIgEAYIAAAAQgIAegNAYQgtBRhbAAQhdAAgqhPgAgKBCIgBgBIgBABIABAAIABAAg");
	this.shape_8.setTransform(15.0152,7.6044);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgOBTQhPgGgnhGIAAAAIgDgHIgBAAQgKgVgGgZIAAAAIAAgBIgBgDIAAAAIAAAAIgCgPIAAgBIgBgFIAAAAQgBgEADgEQACgDAEgBIABAAQADAAADACIABABIAGAFIAPAOIAKAKIAMAIIABAAIABABIAIAFQApAbAuABIADAAQAWgBAVgFQAUgFARgKIAPgJIAcgUIAFgEIALgKQAFgDAEgBQADAAACABIAAABIABABIAAADIgBAJIAAADIAAAAIAAABIAAAEIAAAGIgBAGIgHAXIAAABIgGANIgJAOIAAACIgKAOQgqA4hKADIgHAAIgOgBg");
	this.shape_9.setTransform(14.7361,7.809);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgJBTQhSgEgohGIAAAAIgEgHIAAgBQgLgVgGgZIAAAAIgBAAIAAgEIAAAAIgBgBIgCgOIAAgBIgBgFIAAgBQAAgEACgEQADgDAEgBIABAAQADAAADACIABABIAFAFIALASIAIALIAMAJIAAAAIACABIAIAHQAoAdAwACIAEAAQAVAAAVgDQAVgFATgKIAPgJIAdgTIAFgEQAHgHADgGIAHgGIAEgCIAAAAIAAABIABABIAAgBIABAAIAAABIABAAIACACIACAFIAAAHIgGAXIAAABIgGAOIgIAQIAAABIgJAPQgpA9hLAFIgMABIgJgBg");
	this.shape_10.setTransform(14.7771,7.8084);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgFBUQhVgCgphHIAAAAIgEgIIgBAAQgLgVgGgaIAAAAIAAAAIgBgEIAAgBIgBAAIgCgPIAAgBIgBgFIAAgBQAAgFACgDQADgDAEgBIABAAQADAAADACIABABIAEAGIAHAUIAGANIAMAJIAAABIACACIAIAHQAnAhAyAEIADAAQAWABAWgEQAWgFAUgIIAQgKIAdgTIAFgDQAGgIADgHIAFgKIADgEIAAAAIAAABIABgCIACgKIACgDIAAAAIABAAQACgBADABQACABACAEQACADgBAEIgGAXIAAABIgFAQIgIASIAAABIgJAPQgnBChLAHIgSABIgEAAg");
	this.shape_11.setTransform(14.8983,7.8144);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AiIAHIAAAAQgNgYgGgcIAAgBIgBAAIgCgPIAAgBIgBgHQgBgEADgEQACgDAFgBQAEAAADACQADADABAEIADAXIAEAPIALAKIABABIAKAKQAmAkAzAGQAXADAZgEQAYgEAUgKQAigSANgKIAFgCQAIgSAFgUIAAABIAFgYQAAgEAEgCQADgCAEAAQAEABACADQADAEgBAEIgEAYIAAAAQgFAUgIARQABABgBgBIgIARQgtBRhbAAQhdAAgqhPg");
	this.shape_12.setTransform(15.0152,7.6052);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AiJAAIAAAAQgMgZgHgcIAAAAIAAgBIgCgJQA5BJBngIQBpgIA0hHIgEAUIAAAAQgHAegOAZQgsBQhcAAQhcAAgrhOgAgLA6IgBgBIAAABIAAAAIABAAg");
	this.shape_13.setTransform(15.075,8.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AiEgEIAAAAIgBgCIAAAAQgMgZgHgbIAAgBIAAAAIAAgBIgCgJQA4BPBigEQAVgBAUgFQBMgPAmg4IgBANIAAAAIgCAFQgEAXgNAXIgPAWQgpA4hPABIAAAAIAAAAQhZAAgrhMg");
	this.shape_14.setTransform(14.69,8.9801);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AiAgFIgBAAIgBgCIAAAAQgMgZgHgbIAAgBIAAAAIAAgBIgCgJQA4BWBdgBQATgBAUgDQBOgPAkg4IABAFIAAAAIgBACQgCAVgOAZIgOAWQgnA2hQACIgBAAIgBAAQhWAAgqhMg");
	this.shape_15.setTransform(14.35,9.0602);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("Ah+gFIAAAAIgBgCIAAgBQgNgYgGgbIAAgBIAAAAIAAgBIgCgIQA2BbBYADQATAAAUgDQBQgPAhg2IADgEIAAABIAAgCQAAATgOAcIgOAVQglA1hRABIgBAAIgCAAQhUAAgqhLg");
	this.shape_16.setTransform(14.0858,9.0405);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("Ah8gFIAAgBIgBgBIgBgBQgMgYgGgbIAAgBIAAAAIAAgBIgCgIQA1BhBSAHQATABAUgDQBSgOAeg2QADgFACgGIAAAAIABgFQADARgPAeIgOAVQgiAzhTACIgBAAIgCAAQhTAAgphLg");
	this.shape_17.setTransform(13.8793,9.0209);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("Ah7gGIAAAAQgNgYgGgdIAAAAIAAgBIgCgJQBBCCBmgQQBngRAShNQAHASgfAxQggAyhVACIgDAAQhSAAgphMgAACA0IgBAAIAAAAIAAAAIABAAg");
	this.shape_18.setTransform(13.6999,8.9897);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AiDgQQgMgVAAgTIAAgBIADACIAAAAQALAIAWAJIAAAAQAcAOAmAQQAlAOBNgVQBOgXgHAKQgIAJgMAMQAHABgEAGIgBAAIgLAAQgcAuhCAKIgYACIgFAAQhMAAgvhKg");
	this.shape_19.setTransform(14.6721,9.6289);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AiFgCIgBgBQgMgYAMgPQAageBXgCQBXgDA2AfQAfAQgOAZQgsBQhdAAQhbAAgqhNgAgIA3IgBAAIAAAAIAAAAIABAAg");
	this.shape_20.setTransform(14.7882,9.9155);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AiFgCIgBAAQgMgVAMgNQAagaBXgCQBXgCA2AaQAfAPgOAVQgsBFhdAAQhbAAgqhDg");
	this.shape_21.setTransform(14.7882,9.8483);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AiFgBIgBgBQgMgSAMgKQAagWBXgCQBXgCA2AXQAfAMgOASQgsA6hdAAQhbAAgqg4g");
	this.shape_22.setTransform(14.7882,9.7811);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AiFgBIgBAAQgMgPAMgIQAagSBXgCQBXgBA2ASQAfAKgOAPQgsAvhdAAQhbAAgqgug");
	this.shape_23.setTransform(14.7882,9.7139);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AiFAAIgBAAQgMgMAMgGQAagOBXgBQBXgBA2AOQAfAHgOAMQgsAkhdAAQhbAAgqgjgAgIAaIgBgBIAAABIAAgBIABABg");
	this.shape_24.setTransform(14.7882,9.6467);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AAEAdIgEAAQhSgBgvgbIAAAAQgGgDgCgDQgBgDACgDIACgDIAAAAQAHgDAIgCQAigIA+gBQBIgCA2AKIANACQAbAGgGAKIgCACQgCADgDACQguAYhIAAIgIAAg");
	this.shape_25.setTransform(14.6374,9.651);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AAHAYIgEAAQhMgBg1gTIAAAAIgJgEIAAgGIABgDIAAgBQAGgDAJgCQAlgHA4gBQBEgCA4AIIAOACQAXAEABAJIABACQgCADgEACQguATg+AAIgQAAg");
	this.shape_26.setTransform(14.5917,9.6619);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AAJATIgEAAQhFgBg7gLIAAAAIgLgDIgCgFIABgEIAAAAQAGgEAIgBQApgHAygBQBAgCA6AGIAOABQATADAIAHIAEACQgBADgFACQgtAQg1AAIgYgBg");
	this.shape_27.setTransform(14.6375,9.68);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AAIANQhGAAhHgFIgDgFIAAgEQAGgFAIAAQBpgOBoAJQAbAAAXAJQAAAEgFACQgsALgtAAQgSAAgRgCg");
	this.shape_28.setTransform(14.675,9.7037);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AiIAHIAAAAQgNgYgGgcIAAgBIgBAAIgDgXQgBgFADgDQACgDAFgBQAEAAADACIAzAgQAwAdAzgCQA0gDAngdQAngdAFgCQAGgDAEABQAEABACADQADADgBAFIgEAYIAAAAQgIAegNAYQgtBRhbAAQhdAAgqhPg");
	this.shape_29.setTransform(15.025,7.6107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24,p:{y:9.6467}}]},1).to({state:[{t:this.shape_25,p:{y:9.651}}]},1).to({state:[{t:this.shape_26,p:{y:9.6619}}]},1).to({state:[{t:this.shape_27,p:{y:9.68}}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27,p:{y:9.5925}}]},1).to({state:[{t:this.shape_26,p:{y:9.4869}}]},1).to({state:[{t:this.shape_25,p:{y:9.3885}}]},1).to({state:[{t:this.shape_24,p:{y:9.2967}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32.1,18.5);


(lib.mouth_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(2,1).p("AiVhHIADAYQAHAbAMAXQAnBJBXAAQBVAAAqhMQANgWAHgdIAEgY");
	this.shape.setTransform(15.025,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#373535").ss(2,1).p("AiWhGIADAXQAHAbAMAWQAoBJBXAAQBVAAAqhLQANgWAIgcIAEgY");
	this.shape_1.setTransform(15.0117,7.8667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#373535").ss(2,1).p("AiXhFIAEAXQAGAaANAWQApBIBWAAQBWAAAqhKQANgWAIgbIAEgY");
	this.shape_2.setTransform(14.9983,8.1333);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#373535").ss(2,1).p("AiYhEIAEAWQAHAbAMAVQAqBHBWAAQBWAAArhJQANgVAHgcIAFgX");
	this.shape_3.setTransform(14.985,8.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#373535").ss(2,1).p("AiZhDIAEAWQAHAaANAVQAqBFBWAAQBWAAArhHQAOgVAHgbIAFgW");
	this.shape_4.setTransform(14.9717,8.6667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#373535").ss(2,1).p("AiahCIAEAVQAIAaANAVQAqBEBWAAQBWAAAshGQANgVAIgaIAFgW");
	this.shape_5.setTransform(14.9583,8.9333);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#373535").ss(2,1).p("AibhBIAEAVQAIAZANAVQArBDBXAAQBVAAAshFQAOgUAIgaIAFgW");
	this.shape_6.setTransform(14.945,9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#373535").ss(2,1).p("AichAIAEAUQAIAZAOAUQArBDBXAAQBVAAAthEQAOgUAIgZIAFgW");
	this.shape_7.setTransform(14.9317,9.4667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#373535").ss(2,1).p("Aidg/IAFAUQAIAYANAUQAsBCBXAAQBVAAAthDQAOgUAJgZIAFgV");
	this.shape_8.setTransform(14.9183,9.7333);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#373535").ss(2,1).p("Aieg/IAFAVQAIAYAOATQAsBABXAAQBVAAAuhBQAOgTAJgZIAFgV");
	this.shape_9.setTransform(14.905,10);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#373535").ss(2,1).p("Aifg+IAFAUQAIAYAOATQAuA/BWAAQBWAAAuhAQAOgTAJgYIAFgU");
	this.shape_10.setTransform(14.8917,10.2667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#373535").ss(2,1).p("Aigg9IAFAUQAJAXAOATQAuA+BWAAQBWAAAug/QAPgTAIgXIAGgU");
	this.shape_11.setTransform(14.8783,10.5333);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#373535").ss(2,1).p("Aihg8IAFATQAJAXAPATQAuA9BWAAQBWAAAvg+QAOgSAJgXIAGgU");
	this.shape_12.setTransform(14.865,10.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#373535").ss(2,1).p("Aiig7IAFATQAKAWAOATQAvA8BWAAQBWAAAvg9QAPgSAJgXIAGgT");
	this.shape_13.setTransform(14.8517,11.0667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#373535").ss(2,1).p("Aijg6IAGASQAJAXAPARQAvA8BWAAQBWAAAwg8QAPgSAJgWIAGgT");
	this.shape_14.setTransform(14.8383,11.3333);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#373535").ss(2,1).p("Ailg5IAHASQAJAWAPARQAwA7BWAAQBWAAAxg7QAPgRAJgWIAHgT");
	this.shape_15.setTransform(14.825,11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#373535").ss(2,1).p("Aimg4IAHASQAKAVAPARQAwA5BWAAQBWAAAxg5QAPgRAKgVIAHgS");
	this.shape_16.setTransform(14.8117,11.865);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#373535").ss(2,1).p("Aing3IAHARQAKAVAPARQAyA4BVAAQBXAAAxg4QAPgQAKgVIAHgS");
	this.shape_17.setTransform(14.7983,12.1175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#373535").ss(2,1).p("Aiog2IAHARQAKAVAQAQQAyA3BVAAQBXAAAxg3QAQgQAKgUIAHgS");
	this.shape_18.setTransform(14.785,12.37);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#373535").ss(2,1).p("Aipg1IAHARQALAUAQAQQAyA2BVAAQBXAAAyg2QAPgPALgUIAHgR");
	this.shape_19.setTransform(14.7717,12.6225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#373535").ss(2,1).p("Aiqg0IAIAQQAKAUAQAQQAzA1BVAAQBXAAAyg0QAQgQAKgTIAIgR");
	this.shape_20.setTransform(14.7583,12.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#373535").ss(2,1).p("AirgzIAIAQQAKAUARAPQAzA0BWAAQBWAAAzgzQAQgPAKgTIAIgR");
	this.shape_21.setTransform(14.745,13.1275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#373535").ss(2,1).p("AisgyIAIAQQALATAQAPQA0AzBWAAQBWAAA0gyQAQgPAKgTIAIgP");
	this.shape_22.setTransform(14.7317,13.38);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#373535").ss(2,1).p("AitgxIAIAQQALASARAPQA0AyBWAAQBWAAA0gxQAQgOALgTIAIgP");
	this.shape_23.setTransform(14.7183,13.6325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#373535").ss(2,1).p("AiugwIAIAPQAMATAQAOQA1AxBWAAQBWAAA1gwQAQgOALgSIAIgP");
	this.shape_24.setTransform(14.705,13.885);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#373535").ss(2,1).p("AivgvIAIAPQAMASARAOQA2AwBVAAQBXAAA0gvQARgNALgSIAIgP");
	this.shape_25.setTransform(14.6917,14.1375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#373535").ss(2,1).p("AiwguIAJAPQALARARAOQA3AvBVAAQBXAAA1guQAQgNAMgRIAIgO");
	this.shape_26.setTransform(14.6783,14.39);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#373535").ss(2,1).p("AixgtIAJAOQAMASARANQA3AuBVAAQBXAAA2gsQAQgNAMgRIAIgO");
	this.shape_27.setTransform(14.665,14.6425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#373535").ss(2,1).p("AiygsIAJAOQAMARASANQA3AtBVAAQBXAAA2grQARgNALgQIAJgO");
	this.shape_28.setTransform(14.6517,14.895);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#373535").ss(2,1).p("AizgrIAJAOQAMAQASANQA4AsBWAAQBWAAA3gqQARgMALgQIAJgN");
	this.shape_29.setTransform(14.6383,15.1475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#373535").ss(2,1).p("Ai0gqIAJAOQANAQASAMQA4ArBWAAQBWAAA3gpQARgMAMgPIAJgN");
	this.shape_30.setTransform(14.625,15.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#373535").ss(2,1).p("AizgpIAJANQAMAQASAMQA7AqBTAAQBdgFAwgiQARgMAMgOQAEgHAEgG");
	this.shape_31.setTransform(14.5045,15.3634);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#373535").ss(2,1).p("AizgpIAJANQANAQARAMQA8AqBRAAQBegGAvggQARgMAMgOQAFgGAEgG");
	this.shape_32.setTransform(14.3839,15.3268);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#373535").ss(2,1).p("AizgoIAJAMQANAQASAMQA7ApBRAAQBdgFAvggQARgKANgOQAFgGAEgG");
	this.shape_33.setTransform(14.2634,15.2902);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#373535").ss(2,1).p("AizgoIAKANQAMAPASAMQA7AoBRABQBcgFAwgfQARgKAMgNQAFgGAFgF");
	this.shape_34.setTransform(14.1429,15.2536);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#373535").ss(2,1).p("AiygnIAJAMQANAPARAMQA7AoBRAAQBbgFAwgdQARgKANgMQAFgGAEgF");
	this.shape_35.setTransform(14.0223,15.2171);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#373535").ss(2,1).p("AiygnIAJAMQANAPASAMQA7AnBQABQBagFAwgcQARgKAOgMQAEgFAFgF");
	this.shape_36.setTransform(13.9018,15.1805);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#373535").ss(2,1).p("AiygmIAKAMQANAOARAMQA7AmBQABQBZgEAxgbQARgJANgMQAFgFAFgF");
	this.shape_37.setTransform(13.7813,15.1439);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#373535").ss(2,1).p("AixgmIAJAMQANAOARAMQA7AmBQAAQBYgEAxgaQARgIAOgLQAFgFAEgF");
	this.shape_38.setTransform(13.6607,15.1073);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#373535").ss(2,1).p("AixglIAKALQANAOARAMQA6AlBPABQBYgEAygZQARgJANgKQAFgEAFgF");
	this.shape_39.setTransform(13.5402,15.0707);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#373535").ss(2,1).p("AixgkIAKALQANANARAMQA6AkBPABQBYgDAxgYQARgJAOgJQAFgEAFgF");
	this.shape_40.setTransform(13.4196,15.0341);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#373535").ss(2,1).p("AixgkIAKALQAOAOAQALQA7AkBOABQBXgEAxgWQARgJAOgIQAGgEAFgF");
	this.shape_41.setTransform(13.2991,14.9975);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#373535").ss(2,1).p("AiwgjIAKAKQANAOAQALQA7AjBOABQBWgDAygVQARgIAOgJQAFgDAFgE");
	this.shape_42.setTransform(13.1786,14.9609);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#373535").ss(2,1).p("AiwgjIAKALQANANARALQA6AiBOACQBVgDAygVQARgHAOgIQAGgEAFgD");
	this.shape_43.setTransform(13.058,14.9243);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#373535").ss(2,1).p("AiwgiIAKAKQAOANAQALQA6AiBOABQBUgDAygTQARgHAPgHQAFgEAGgD");
	this.shape_44.setTransform(12.9375,14.8877);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#373535").ss(2,1).p("AivgiIAKAKQANANAQALQA7AhBNACQBTgDAzgSQARgHAOgHQAGgDAFgD");
	this.shape_45.setTransform(12.817,14.851);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#373535").ss(2,1).p("AivghIAKAKQAOAMAQALQA6AgBNACQBSgCAzgRQARgGAPgIQAGgCAFgD");
	this.shape_46.setTransform(12.6964,14.8144);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#373535").ss(2,1).p("AivggIAKAJQAOAMAQALQA6AgBNABQBSgCAygPQARgGAQgHQAFgDAGgC");
	this.shape_47.setTransform(12.5759,14.7778);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#373535").ss(2,1).p("AiuggIAKAJQAOAMAPALQA6AfBNACQBRgCAzgPQARgFAPgGQAGgDAFgC");
	this.shape_48.setTransform(12.4554,14.7412);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#373535").ss(2,1).p("AiugfIAKAJQAOALAQALQA5AeBNACQBQgBAzgOQARgFAQgGQAFgCAGgC");
	this.shape_49.setTransform(12.3348,14.7046);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#373535").ss(2,1).p("AiugfIALAJQANALAQALQA6AeBMACQBPgCA0gMQARgFAPgFQAGgCAGgC");
	this.shape_50.setTransform(12.2143,14.668);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#373535").ss(2,1).p("AiugeIALAIQAOAMAPAKQA6AdBMACQBOgBA0gLQARgEAQgFQAGgCAGgC");
	this.shape_51.setTransform(12.0938,14.6314);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#373535").ss(2,1).p("AitgeIAKAJQAOALAQAKQA5AcBLADQBOgBA0gLQARgDAQgEQAGgCAGgC");
	this.shape_52.setTransform(11.9732,14.5947);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#373535").ss(2,1).p("AitgdIALAIQAOALAPAKQA5AcBLACQBNgBA1gJQARgDAQgEQAGgBAGgC");
	this.shape_53.setTransform(11.8527,14.5581);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#373535").ss(2,1).p("AitgdIALAIQAOALAPAJQA6AcBKACQBMAAA1gIQARgDAQgDQAHgBAGgC");
	this.shape_54.setTransform(11.7321,14.5215);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#373535").ss(2,1).p("AisgcIAKAIQAPAKAPAJQA5AbBKADQBMAAA0gHQARgCARgDQAGgCAGgB");
	this.shape_55.setTransform(11.6116,14.4848);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#373535").ss(2,1).p("AisgbIALAHQAOAKAPAJQA5AbBKACQBLAAA1gFQARgCAQgDQAHgBAGgB");
	this.shape_56.setTransform(11.4911,14.4482);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#373535").ss(2,1).p("AisgbIALAHQAPAKAOAJQA5AaBKADQBKAAA1gFQARgBARgCQAGgBAHAA");
	this.shape_57.setTransform(11.3705,14.4123);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#373535").ss(2,1).p("AisgbIAtAbQA8AcBWAAQBMAABOgI");
	this.shape_58.setTransform(11.25,14.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#373535").ss(2,1).p("AisgaIAjAWQA+AcBJADQAKAAALAAQA5AAA5gEQAUgCAUgC");
	this.shape_59.setTransform(11.4107,14.3393);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#373535").ss(2,1).p("AisgaIAjAWQA+AcBJACQAKABAMAAQA5AAA5gFQAUgCATgD");
	this.shape_60.setTransform(11.5714,14.2788);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#373535").ss(2,1).p("AitgZIAkAVQA+AcBJACQAKABAMgBQA6AAA4gFQAVgDATgD");
	this.shape_61.setTransform(11.7321,14.2184);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#373535").ss(2,1).p("AitgZIAkAWQA+AaBJADQALAAALAAQA7AAA4gGQAVgDASgE");
	this.shape_62.setTransform(11.8929,14.158);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#373535").ss(2,1).p("AitgZIAkAWQA+AaBKACQAKABAMAAQA7gBA3gGQAWgDARgE");
	this.shape_63.setTransform(12.0536,14.0978);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#373535").ss(2,1).p("AiugYIAkAVQA/AaBKACQAKABAMgBQA8AAA3gHQAWgEARgE");
	this.shape_64.setTransform(12.2143,14.0378);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#373535").ss(2,1).p("AiugYIAkAVQA/AaBKACQALAAALAAQA9gBA2gHQAXgEAQgF");
	this.shape_65.setTransform(12.375,13.9778);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#373535").ss(2,1).p("AivgYIAlAWQA/AZBKACQALAAAMAAQA9gBA2gIQAWgFARgF");
	this.shape_66.setTransform(12.5357,13.9179);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#373535").ss(2,1).p("AivgXIAlAVQA/AZBLABQAKABAMgBQA+gBA1gIQAXgFAQgF");
	this.shape_67.setTransform(12.6964,13.8582);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#373535").ss(2,1).p("AivgXIAlAVQA/AYBLACQALAAALAAQA/gBA1gJQAXgFAPgG");
	this.shape_68.setTransform(12.8571,13.7985);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#373535").ss(2,1).p("AiwgXIAmAVQA/AYBLACQALAAAMAAQA/gBA0gKQAYgGAPgG");
	this.shape_69.setTransform(13.0179,13.739);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#373535").ss(2,1).p("AiwgWIAlAVQBAAXBLABQALABAMgBQBAgBA0gLQAYgFAOgG");
	this.shape_70.setTransform(13.1786,13.6796);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#373535").ss(2,1).p("AixgWIAmAVQBAAXBLABQAMAAALAAQBBgBAzgMQAZgGAOgF");
	this.shape_71.setTransform(13.3393,13.6203);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#373535").ss(2,1).p("AixgWIAmAVQBAAXBLABQAMAAAMAAQBBgCAzgMQAZgGANgG");
	this.shape_72.setTransform(13.5,13.5611);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#373535").ss(2,1).p("AixgVIAmAUQBAAXBLAAQAMABAMgBQBCgBAygNQAagHAMgG");
	this.shape_73.setTransform(13.6607,13.502);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#373535").ss(2,1).p("AiygVIAnAVQBAAVBLABQANAAALAAQBDgCAygNQAZgHANgH");
	this.shape_74.setTransform(13.8214,13.4431);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#373535").ss(2,1).p("AiygVIAmAVQBAAVBNABQAMAAALgBQBEgBAxgOQAagGAMgI");
	this.shape_75.setTransform(13.9821,13.3842);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#373535").ss(2,1).p("AizgUIAnAUQBAAVBNAAQAMABAMgBQBEgCAxgOQAagHAMgI");
	this.shape_76.setTransform(14.1429,13.3255);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#373535").ss(2,1).p("AizgUIAnAUQBAAVBNAAQANAAALAAQBFgCAwgPQAbgHALgJ");
	this.shape_77.setTransform(14.3036,13.2669);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#373535").ss(2,1).p("AizgUIAnAUQBAAVBNAAQANAAALgBQBGgCAwgPQAbgIAKgJ");
	this.shape_78.setTransform(14.4643,13.2084);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#373535").ss(2,1).p("Ai0gTIAoATQA4AVBWAAQBWAAA3gTQAcgIAKgJ");
	this.shape_79.setTransform(14.625,13.15);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#373535").ss(2,1).p("Ai0gUIAoAUQA4AUBWAAQBWAAA3gSQAcgIAKgK");
	this.shape_80.setTransform(14.625,13.15);
	this.shape_80._off = true;

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#373535").ss(2,1).p("AizgTQAUALATAIQAwARBEADQBoAAA0gQQAGgBAFgCQAbgIAKgK");
	this.shape_81.setTransform(14.8,13.285);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#373535").ss(2,1).p("AizgSQAUAKAUAIQAwAQBDADQBoAAA0gQQAFgBAGgCQAagIALgK");
	this.shape_82.setTransform(14.975,13.4185);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#373535").ss(2,1).p("AizgQQAVAKATAIQAxAPBDACQBmAAA1gQQAFgBAGgCQAagJALgJ");
	this.shape_83.setTransform(15.15,13.4652);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#373535").ss(2,1).p("AiygOQAUAJAUAIQAxAOBCADQBmgBA1gQQAFgCAFgBQAagJALgK");
	this.shape_84.setTransform(15.325,13.512);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#373535").ss(2,1).p("AiygMQAUAJAUAHQAxAOBCACQBmAAA0gRQAGgCAFgBQAZgJAMgK");
	this.shape_85.setTransform(15.5,13.5587);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#373535").ss(2,1).p("AiygKQAVAIAUAHQAxANBBADQBmgBA0gRQAGgCAFgBQAZgKAMgK");
	this.shape_86.setTransform(15.675,13.6055);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#373535").ss(2,1).p("AixgIQAUAIAUAGQAyANBBACQBlgBA0gRQAFgCAGgCQAYgJAMgK");
	this.shape_87.setTransform(15.85,13.6523);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#373535").ss(2,1).p("AixgGQAVAGAUAHQAyANBAABQBlgBA0gSQAFgCAGgBQAXgJANgK");
	this.shape_88.setTransform(16.025,13.699);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#373535").ss(2,1).p("AixgFQAVAHAUAGQAzAMA/ACQBlgCA0gSQAFgCAFgBQAYgKANgK");
	this.shape_89.setTransform(16.2,13.7458);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#373535").ss(2,1).p("AiwgDQAUAGAVAGQAzAMA+ABQBlgBA0gTQAFgCAFgBQAXgKANgK");
	this.shape_90.setTransform(16.375,13.7925);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#373535").ss(2,1).p("AiwgBQAVAGAUAGQAzAKA/ACQBjgCA0gTQAGgCAFgCQAWgJAOgL");
	this.shape_91.setTransform(16.55,13.8392);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#373535").ss(2,1).p("AivAAQAUAGAVAGQAzAKA+ABQBjgCA0gTQAGgCAFgCQAWgKANgK");
	this.shape_92.setTransform(16.725,13.886);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#373535").ss(2,1).p("AivACQAVAGAUAFQA0AJA9ABQBjgCA0gTQAFgCAGgCQAVgKAOgK");
	this.shape_93.setTransform(16.9,13.9327);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#373535").ss(2,1).p("AivAEQAVAFAVAFQA0AJA9ABQBigDA0gUQAFgBAFgDQAVgJAPgL");
	this.shape_94.setTransform(17.075,13.9795);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#373535").ss(2,1).p("AiuAGQAVAFAUAEQA1AIA8ABQBigCA0gVQAFgBAFgDQAVgKAOgK");
	this.shape_95.setTransform(17.25,14.0262);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#373535").ss(2,1).p("AiuAHQAVAFAVAEQA1AIA7ABQBigDA0gVQAFgBAFgDQAUgKAPgL");
	this.shape_96.setTransform(17.425,14.0729);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#373535").ss(2,1).p("AiuAJQAVAFAVADQA1AHA7ABQBigDAzgVQAGgCAFgCQATgKAQgL");
	this.shape_97.setTransform(17.6,14.1197);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#373535").ss(2,1).p("AitALQAVAEAVADQA1AHA7AAQBhgDAzgVQAFgCAGgDQATgKAPgK");
	this.shape_98.setTransform(17.775,14.1664);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#373535").ss(2,1).p("AitANQAVAEAVADQA2AFA6ABQBggEA0gVQAFgCAFgDQATgKAQgL");
	this.shape_99.setTransform(17.95,14.2131);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#373535").ss(2,1).p("AitAPQAWADAVADQA2AFA5AAQBggEA0gWQAFgBAFgDQASgKARgL");
	this.shape_100.setTransform(18.125,14.2599);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#373535").ss(2,1).p("AisARQAVADAVACQA3AEA4ABQBggEA0gXQAFgCAFgCQASgLAQgL");
	this.shape_101.setTransform(18.3,14.3066);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#373535").ss(2,1).p("AisATQAWACAVACQA3AEA4AAQBfgEA0gXQAFgCAFgDQARgKARgL");
	this.shape_102.setTransform(18.475,14.3533);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#373535").ss(2,1).p("AirASQAJABAJABQATACAUACQAwAFAwAAQBYgDAzgXQAEgBAEgCQANgIAOgKIAQgK");
	this.shape_103.setTransform(18.5367,14.1837);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#373535").ss(2,1).p("AiqAPQAIABAJACQATADAUACQAvAHAwAAQBagDAygYQAEgBAEgCQANgJAOgKIAPgK");
	this.shape_104.setTransform(18.4234,13.9673);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#373535").ss(2,1).p("AipAMQAIACAIACQATADATAEQAvAIAxABQBagDAygaQAEgCAEgBQANgJANgLIAPgL");
	this.shape_105.setTransform(18.3102,13.7509);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#373535").ss(2,1).p("AipAJQAIACAIACQATAFATAEQAuAKAxABQBcgCAxgcQAEgCAEgBQANgKANgLIAPgL");
	this.shape_106.setTransform(18.1969,13.5346);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#373535").ss(2,1).p("AioAGQAIADAIACQASAGASAEQAuAMAyACQBcgDAxgdQAEgCAEgCQANgKANgLIAOgM");
	this.shape_107.setTransform(18.0836,13.3182);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#373535").ss(2,1).p("AinADQAHADAIADQARAGATAGQAtANAzACQBdgCAwgfQAEgCAEgCQANgKAMgMIAOgM");
	this.shape_108.setTransform(17.9703,13.1018);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#373535").ss(2,1).p("AinABQAIADAHADQARAHASAGQAtAQAzACQBegCAxghQADgCAEgCQANgLAMgMIAOgN");
	this.shape_109.setTransform(17.857,12.8854);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#373535").ss(2,1).p("AimgBQAHACAHAEQARAIASAGQAsASA0ACQBfgCAwgiQAEgDADgCQANgLAMgMIANgN");
	this.shape_110.setTransform(17.7438,12.669);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#373535").ss(2,1).p("AilgEQAHAEAHADQAQAIASAIQArATA0ADQBggCAwgkQAEgDADgCQANgLALgNIANgO");
	this.shape_111.setTransform(17.6305,12.4526);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#373535").ss(2,1).p("AilgHQAHAEAHADQAQAKARAIQArAVA1ADQBggBAwgmQAEgDAEgCQAMgMALgNIANgO");
	this.shape_112.setTransform(17.5172,12.2362);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#373535").ss(2,1).p("AikgKQAHAFAGAEQAQAKARAIQAqAXA2AEQBhgCAvgnQAEgDAEgDQAMgMALgNIAMgP");
	this.shape_113.setTransform(17.4039,12.0198);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#373535").ss(2,1).p("AijgNQAGAFAGAFQAPAKARAKQArAYA1AEQBigBAvgpQAEgDAEgDQAMgMAKgOIAMgP");
	this.shape_114.setTransform(17.2906,11.8034);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#373535").ss(2,1).p("AiigPQAGAFAGAFQAOALARAKQAqAaA2AFQBjgBAvgrQADgDAEgDQAMgNAKgOIALgQ");
	this.shape_115.setTransform(17.1773,11.5869);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#373535").ss(2,1).p("AiigSQAGAFAGAGQAOAMAQAKQAqAdA2AEQBkgBAvgsQADgDAEgDQAMgOAKgOIALgQ");
	this.shape_116.setTransform(17.0641,11.3705);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#373535").ss(2,1).p("AihgVQAGAGAFAGQAOAMAQAMQApAeA3AFQBlgBAugvQADgCAEgEQALgNAKgPIALgR");
	this.shape_117.setTransform(16.9508,11.1541);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#373535").ss(2,1).p("AiggYQAFAGAFAGQAOAOAQAMQAoAgA4AFQBlAAAugxQAEgCADgEQALgOAKgPIAKgR");
	this.shape_118.setTransform(16.8375,10.9376);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#373535").ss(2,1).p("AiggbQAGAHAFAGQAMAPAQAMQAoAiA4AGQBngBAtgyQAEgCADgEQALgPAKgPIAKgS");
	this.shape_119.setTransform(16.7242,10.7212);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#373535").ss(2,1).p("AifgeQAFAHAFAHQAMAQAQANQAnAjA5AGQBnAAAtg0QAEgDADgEQALgOAJgQIAKgS");
	this.shape_120.setTransform(16.6109,10.5047);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#373535").ss(2,1).p("AieggQAFAHAEAHQAMARAPANQAnAlA5AHQBoAAAug2QADgDADgEQALgPAJgQIAJgT");
	this.shape_121.setTransform(16.4977,10.2883);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#373535").ss(2,1).p("AiegjQAFAHAEAIQAMARAPAPQAmAmA6AHQBpAAAtg3QADgDAEgEQAKgPAJgRIAJgT");
	this.shape_122.setTransform(16.3844,10.0719);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#373535").ss(2,1).p("AidgmQAFAIAEAIQALASAOAPQAmApA7AHQBpAAAtg5QADgDAEgFQAKgPAIgRIAJgU");
	this.shape_123.setTransform(16.2711,9.8556);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#373535").ss(2,1).p("AicgpQAEAIAEAIQALAUAOAPQAlArA7AHQBrABAsg7QADgDAEgFQAKgQAIgRIAIgU");
	this.shape_124.setTransform(16.1578,9.6394);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#373535").ss(2,1).p("AicgsQAEAJAEAIQAKAUAPARQAkAsA8AHQBrABAsg8QAEgDADgFQAKgQAIgSIAIgU");
	this.shape_125.setTransform(16.0445,9.4232);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#373535").ss(2,1).p("AibgvQAEAJADAJQAKAVAOARQAlAuA7AIQBtABArg+QAEgEADgFQAKgQAHgSIAIgV");
	this.shape_126.setTransform(15.9313,9.207);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#373535").ss(2,1).p("AiagxQADAJAEAJQAJAWAOARQAkAwA8AIQBtACAshAQADgEADgFQAKgRAHgSIAHgV");
	this.shape_127.setTransform(15.818,8.9909);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#373535").ss(2,1).p("AiZg0QADAJADAKQAJAWANATQAkAxA9AJQBuABArhBQADgEADgFQAKgRAHgUIAGgV");
	this.shape_128.setTransform(15.7047,8.7748);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#373535").ss(2,1).p("AiZg3QADAKADAKQAJAXANATQAjAzA9AJQBvACArhDQADgEADgGQAKgRAGgUIAHgV");
	this.shape_129.setTransform(15.5914,8.5588);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#373535").ss(2,1).p("AiYg6QADAKACAKQAIAZANATQAjA2A+AJQBvACArhFQADgEADgGQAKgSAGgUIAGgW");
	this.shape_130.setTransform(15.4781,8.3428);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#373535").ss(2,1).p("AiXg9QACALADAKQAHAZANAVQAiA3A+AJQBxACAqhHQADgEADgFQAJgSAHgVIAFgW");
	this.shape_131.setTransform(15.3648,8.1268);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#373535").ss(2,1).p("AiXhAQADALACALQAHAaANAVQAhA5A/AKQBxACAqhJQADgEAEgGQAIgSAGgVIAGgX");
	this.shape_132.setTransform(15.2516,7.9108);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#373535").ss(2,1).p("AiWhCQACALACALQAHAbAMAVQAhA7BAAKQByADAqhLQADgEADgGQAIgTAGgVIAFgX");
	this.shape_133.setTransform(15.1383,7.6949);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},30).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58,p:{skewY:0,x:11.25}}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},39).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_58,p:{skewY:180,x:18.65}}]},1).to({state:[{t:this.shape_58,p:{skewY:180,x:18.65}}]},16).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape}]},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.shape_80).wait(149).to({_off:false},0).wait(18).to({_off:true},1).wait(144));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-3.9,52.8,26.099999999999998);


(lib.legcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.woman_pants();
	this.instance.parent = this;
	this.instance.setTransform(2,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-10,140,93);


(lib.leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man_pants();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,65);


(lib.haircopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.woman_hair();
	this.instance.parent = this;
	this.instance.setTransform(44,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44,25,105,84);


(lib.hair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man_hair();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,117);


(lib.gravatacopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.woman_body();
	this.instance.parent = this;
	this.instance.setTransform(11,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,0,129,90);


(lib.gravata = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man_body();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,80);


(lib.foot2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man_boot();
	this.instance.parent = this;
	this.instance.setTransform(71,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0,70,11);


(lib.foot1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man_boot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,11);


(lib.eyebrow2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63B40").s().p("AhZAZQgHAAgFgFQgFgFAAgGIAAgQQAAgHAFgFQAFgFAHAAICzAAQAHAAAFAFQAFAFAAAHIAAAQQAAAGgFAFQgFAFgHAAg");
	this.shape.setTransform(26.975,23.75,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyebrow2copy, new cjs.Rectangle(16.3,21.3,21.400000000000002,5), null);


(lib.eyebrow2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man_eyebrow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyebrow2, new cjs.Rectangle(0,0,52,19), null);


(lib.eyebrow1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63B40").s().p("AhZAZQgHAAgFgFQgFgEAAgIIAAgPQAAgHAFgFQAFgFAHAAICzAAQAHAAAFAFQAFAFAAAHIAAAPQAAAIgFAEQgFAFgHAAg");
	this.shape.setTransform(21.575,25,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyebrow1copy, new cjs.Rectangle(10.9,22.5,21.4,5), null);


(lib.eyebrow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man_eyebrow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyebrow1, new cjs.Rectangle(0,0,52,19), null);


(lib.arm2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.woman_hand();
	this.instance.parent = this;
	this.instance.setTransform(5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,1,68,123);


(lib.arm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man_hand();
	this.instance.parent = this;
	this.instance.setTransform(68,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,118);


(lib.arm1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.woman_hand();
	this.instance.parent = this;
	this.instance.setTransform(66,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,68,123);


(lib.arm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man_hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,118);


(lib.alter_V = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Camada 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkwEYIAAovIJhAAIAAIvg");
	this.shape.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Camada 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(6,2,0,3).p("AjwALICqCZIE2lG");
	this.shape_1.setTransform(0.0012,-0.0285,0.5,0.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(1));

	// Camada 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(34,39,53,0.698)").s().p("AkwEYIAAovIJhAAIAAIvg");
	this.shape_2.setTransform(0,0.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DF0B14").s().p("AkwEYIAAovIJhAAIAAIvg");
	this.shape_3.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-28,61.1,56.1);


(lib.__balaocopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		TweenMax.fromTo([this], .5, {scaleX:.1, scaleY:.1}, {scaleX:1, scaleY:1,  ease: Back.easeOut.config(1.7)});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DF0B14").ss(3,1,1).p("AEZjGIoxGRIEvmV");
	this.shape.setTransform(-29.525,-19.925,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0F0F0").s().p("AiEiKIDSiAIFnAAIk5CEIowGRg");
	this.shape_1.setTransform(-45.175,-26.35,1,1,0,0,180);

	this.caixaTexto = new cjs.Text("Lembre-se de que o Canal de Ética do Grupo EDP está sempre disponível para a comunicação de quaisquer irregularidades. Agradecemos a sua participação!", "18px 'EDP Preon'", "#333333");
	this.caixaTexto.name = "caixaTexto";
	this.caixaTexto.lineHeight = 27;
	this.caixaTexto.lineWidth = 452;
	this.caixaTexto.parent = this;
	this.caixaTexto.setTransform(-334.65,-164.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DF0B14").ss(3,1,1).p("EAi2gLZMhFrAAKQjIAAAADIIAAQZQAADIDIAAMBFrgAKQDIAAAAjIIAAwZQAAjIjIAAg");
	this.shape_2.setTransform(-108.575,-111);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0F0F0").s().p("Egl9AISIAAwZQAAjIDIAAMBFrgAKQDIAAAADIIAAQZQAADIjIAAMhFrAAKQjIAAAAjIg");
	this.shape_3.setTransform(-108.575,-111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.caixaTexto},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.__balaocopy2, new cjs.Rectangle(-353.1,-185.5,489.1,187.4), null);


(lib.__balaocopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		TweenMax.fromTo([this], .5, {scaleX:.1, scaleY:.1}, {scaleX:1, scaleY:1,  ease: Back.easeOut.config(1.7)});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.caixaTexto = new cjs.Text("Você concluiu o treinamento Compliance.", "18px 'EDP Preon'", "#333333");
	this.caixaTexto.name = "caixaTexto";
	this.caixaTexto.lineHeight = 27;
	this.caixaTexto.lineWidth = 270;
	this.caixaTexto.parent = this;
	this.caixaTexto.setTransform(42,-84.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DF0B14").ss(3,1,1).p("AEZjGIoxGRIEvmV");
	this.shape.setTransform(96.375,3.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0F0F0").s().p("AiEiKIDSiAIFnAAIk5CEIowGRg");
	this.shape_1.setTransform(112.025,-3.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DF0B14").ss(3,1,1).p("Az/mtMAn/AAKQDIAAAADIIAAHBQAADIjIAAMgn/gAKQjIAAAAjIIAAnBQAAjIDIAAg");
	this.shape_2.setTransform(170.425,-58);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0F0F0").s().p("Az/GkQjIAAAAjIIAAnBQAAjIDIAAMAn/AAKQDIAAAADIIAAHBQAADIjIAAg");
	this.shape_3.setTransform(170.425,-58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.caixaTexto}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.__balaocopy, new cjs.Rectangle(20.9,-102.5,299.1,127.4), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("CONFIRMAR", "20px 'EDP Preon'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 165;
	this.text.parent = this;
	this.text.setTransform(-8,-11.3);

	this.instance = new lib.wefdwefwefwef();
	this.instance.parent = this;
	this.instance.setTransform(77.15,0,1,1,0,0,0,8.7,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-92.4,-14.4,178.2,33.1), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:1});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = 'pointer';
		Player.SetMsgStatus('Clique sobre o botão ">".');
		function checa(){
			//estando com BIND, 
			this.parent.play();
			this.removeAllEventListeners();
		}
		this.addEventListener('click', checa.bind(this));
	}
	this.frame_85 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(85).call(this.frame_85).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5A5A5A").ss(1,1,1).p("EAl5gDHMhLxAAAQgGAAgFAFQgEAEAAAGIAAFxQAAAGAEAEQAFAFAGAAMBLxAAAQAGAAAFgFQAEgEAAgGIAAlxQAAgGgEgEQgFgFgGAAg");
	this.shape.setTransform(0,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("Egl4ADIQgGAAgEgFQgFgEAAgGIAAlxQAAgGAFgEQAEgFAGAAMBLxAAAQAGAAAEAFQAFAEAAAGIAAFxQAAAGgFAEQgEAFgGAAg");
	this.shape_1.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(86));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAl5ADXMhLxAAAQgMAAgJgJQgJgJAAgMIAAlxQAAgMAJgJQAJgJAMAAMBLxAAAQAMAAAJAJQAJAJAAAMIAAFxQAAAMgJAJQgJAJgMAAIAAAAgEgl4AC5MBLxAAAIAAlxMhLxAAAg");
	mask.setTransform(0,-0.025);

	// Layer_3
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(-287.7,-0.1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:288.8},42,cjs.Ease.quadInOut).to({x:-287.7},42,cjs.Ease.quadInOut).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(90,90,90,0.298)").s().p("EAl5ADXMhLxAAAQgMAAgJgJQgJgJAAgMIAAlxQAAgMAJgJQAJgJAMAAMBLxAAAQAMAAAJAJQAJAJAAAMIAAFxQAAAMgJAJQgJAJgMAAIAAAAgEgl4AC5MBLxAAAIAAlxMhLxAAAg");
	this.shape_2.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(86));

	// Layer_5
	this.text = new cjs.Text("CLIQUE AQUI PARA FINALIZAR O TREINAMENTO", "bold 18px 'EDP Preon Thin'", "#E02129");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 499;
	this.text.parent = this;
	this.text.setTransform(0,-7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DF0B14").ss(3,1,1).p("AqKAAIUVAA");
	this.shape_3.setTransform(-174.25,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.text}]}).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.5,-21.5,503.1,43);


(lib.Symbol11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text_1 = new cjs.Text("REFAZER", "20px 'EDP Preon'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 28;
	this.text_1.lineWidth = 152;
	this.text_1.parent = this;
	this.text_1.setTransform(0,-11.3);

	this.instance_1 = new lib.wefdwefwefwef_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.15,0,1,1,0,0,0,8.7,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11_1, new cjs.Rectangle(-77.9,-14.4,163.7,33.1), null);


(lib.mouthcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.mouth_motioncopy2("single",0);
	this.instance.parent = this;
	this.instance.setTransform(15,7.3,1,1,0,0,0,15,7.3);

	this.instance_1 = new lib.mouth_motion_speakcopy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15,7.3,1,1,0,0,0,15,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-1.6,36.5,17.8);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.mouth_motion("single",0);
	this.instance.parent = this;
	this.instance.setTransform(15,7.3,1,1,0,0,0,15,7.3);

	this.instance_1 = new lib.mouth_motion_speak();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15,7.3,1,1,0,0,0,15,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-1.6,36.5,17.8);


(lib.eyescopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhfBbIAAi1IC/AAIAAC1g");
	var mask_graphics_24 = new cjs.Graphics().p("AhfBbIAAi1IC/AAIAAC1g");
	var mask_graphics_25 = new cjs.Graphics().p("AhfBHIAAiSQBgALBfgLIAACSQgwAFgwAAQgvAAgwgFg");
	var mask_graphics_26 = new cjs.Graphics().p("AhfAyIAAhvQBgAXBfgXIAABvQgwAMgwAAQgvAAgwgMg");
	var mask_graphics_27 = new cjs.Graphics().p("AhfAeIAAhMQBgAiBfgiIAABMQgwARgwAAQgwAAgvgRg");
	var mask_graphics_28 = new cjs.Graphics().p("AhfAKIAAgqQBgAsBfgsIAAAqQgxAXgvAAQgwAAgvgXg");
	var mask_graphics_29 = new cjs.Graphics().p("AhfAgIAAgIQBhA4Beg4IAAAIQgxAcgvAAQgwAAgvgcg");
	var mask_graphics_30 = new cjs.Graphics().p("AhfAgIAAgIQBhA4Beg4IAAAIQgxAcgvAAQgwAAgvgcg");
	var mask_graphics_31 = new cjs.Graphics().p("AhfAGIAAgjQBhAuBeguIAAAjQgxAYgvAAQgwAAgvgYg");
	var mask_graphics_32 = new cjs.Graphics().p("AhfAXIAAhBQBgAmBfgmIAABBQgwATgwAAQgwAAgvgTg");
	var mask_graphics_33 = new cjs.Graphics().p("AhfAoIAAheQBgAdBfgdIAABeQgwAPgwAAQgwAAgvgPg");
	var mask_graphics_34 = new cjs.Graphics().p("AhfA5IAAh7QBgATBfgTIAAB7QgwAKgwAAQgvAAgwgKg");
	var mask_graphics_35 = new cjs.Graphics().p("AhfBKIAAiYQBgAKBfgKIAACYQgwAFgwAAQgvAAgwgFg");
	var mask_graphics_36 = new cjs.Graphics().p("AhfBbIAAi1IC/AAIAAC1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:8.925,y:8.875}).wait(24).to({graphics:mask_graphics_24,x:8.925,y:8.875}).wait(1).to({graphics:mask_graphics_25,x:8.925,y:9.1475}).wait(1).to({graphics:mask_graphics_26,x:8.925,y:9.42}).wait(1).to({graphics:mask_graphics_27,x:8.925,y:9.6925}).wait(1).to({graphics:mask_graphics_28,x:8.925,y:9.965}).wait(1).to({graphics:mask_graphics_29,x:8.925,y:6.0347}).wait(1).to({graphics:mask_graphics_30,x:8.925,y:6.0347}).wait(1).to({graphics:mask_graphics_31,x:8.925,y:10.0104}).wait(1).to({graphics:mask_graphics_32,x:8.925,y:9.7833}).wait(1).to({graphics:mask_graphics_33,x:8.925,y:9.5563}).wait(1).to({graphics:mask_graphics_34,x:8.925,y:9.3292}).wait(1).to({graphics:mask_graphics_35,x:8.925,y:9.1021}).wait(1).to({graphics:mask_graphics_36,x:8.925,y:8.875}).wait(41));

	// Layer 3
	this.instance = new lib.Tween15copy2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(4.45,4.65);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("Ag+A/QgagaAAglQAAgkAagaQAagaAkAAQAlAAAaAaQAaAaAAAkQAAAlgaAaQgaAaglAAQgkAAgagag");
	this.shape.setTransform(8.9,8.925);

	var maskedShapeInstanceList = [this.instance,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(77));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AhfBbIAAi1IC/AAIAAC1g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AhfBbIAAi1IC/AAIAAC1g");
	var mask_1_graphics_25 = new cjs.Graphics().p("AhfBHIAAiSQBgALBfgLIAACSQgwAFgwAAQgvAAgwgFg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AhfAyIAAhvQBgAXBfgXIAABvQgwAMgwAAQgvAAgwgMg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AhfAeIAAhMQBgAiBfgiIAABMQgwARgwAAQgwAAgvgRg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AhfAKIAAgqQBgAsBfgsIAAAqQgxAXgvAAQgwAAgvgXg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AhfgJIAAgIQBhA3Beg3IAAAIQgxAbgvAAQgwAAgvgbg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AhfgJIAAgIQBhA3Beg3IAAAIQgxAbgvAAQgwAAgvgbg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AhfAGIAAgjQBgAuBfguIAAAjQgxAYgvAAQgwAAgvgYg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AhfAXIAAhBQBgAmBfgmIAABBQgwATgwAAQgwAAgvgTg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AhfAoIAAheQBgAdBfgdIAABeQgwAPgwAAQgwAAgvgPg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AhfA5IAAh7QBgATBfgTIAAB7QgwAKgwAAQgvAAgwgKg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AhfBKIAAiYQBfAKBggKIAACYQgwAFgwAAQgvAAgwgFg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AhfBbIAAi1IC/AAIAAC1g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:71.825,y:8.875}).wait(24).to({graphics:mask_1_graphics_24,x:71.825,y:8.875}).wait(1).to({graphics:mask_1_graphics_25,x:71.825,y:9.1475}).wait(1).to({graphics:mask_1_graphics_26,x:71.825,y:9.42}).wait(1).to({graphics:mask_1_graphics_27,x:71.825,y:9.6925}).wait(1).to({graphics:mask_1_graphics_28,x:71.825,y:9.965}).wait(1).to({graphics:mask_1_graphics_29,x:71.825,y:10.2347}).wait(1).to({graphics:mask_1_graphics_30,x:71.825,y:10.2347}).wait(1).to({graphics:mask_1_graphics_31,x:71.825,y:10.0104}).wait(1).to({graphics:mask_1_graphics_32,x:71.825,y:9.7833}).wait(1).to({graphics:mask_1_graphics_33,x:71.825,y:9.5563}).wait(1).to({graphics:mask_1_graphics_34,x:71.825,y:9.3292}).wait(1).to({graphics:mask_1_graphics_35,x:71.825,y:9.1021}).wait(1).to({graphics:mask_1_graphics_36,x:71.825,y:8.875}).wait(41));

	// Layer 1
	this.instance_1 = new lib.Tween16copy2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.6,4.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("Ag+A/QgagaAAglQAAgkAagaQAagaAkAAQAlAAAaAaQAaAaAAAkQAAAlgaAaQgaAaglAAQgjAAgbgag");
	this.shape_1.setTransform(71.75,8.925);

	var maskedShapeInstanceList = [this.instance_1,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1}]}).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.7,17.9);


(lib.eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhfBbIAAi1IC/AAIAAC1g");
	var mask_graphics_24 = new cjs.Graphics().p("AhfBbIAAi1IC/AAIAAC1g");
	var mask_graphics_25 = new cjs.Graphics().p("AhfBHIAAiSQBgALBfgLIAACSQgwAFgwAAQgvAAgwgFg");
	var mask_graphics_26 = new cjs.Graphics().p("AhfAyIAAhvQBgAXBfgXIAABvQgwAMgwAAQgvAAgwgMg");
	var mask_graphics_27 = new cjs.Graphics().p("AhfAeIAAhMQBgAiBfgiIAABMQgwARgwAAQgwAAgvgRg");
	var mask_graphics_28 = new cjs.Graphics().p("AhfAKIAAgqQBgAsBfgsIAAAqQgxAXgvAAQgwAAgvgXg");
	var mask_graphics_29 = new cjs.Graphics().p("AhfAgIAAgIQBhA4Beg4IAAAIQgxAcgvAAQgwAAgvgcg");
	var mask_graphics_30 = new cjs.Graphics().p("AhfAgIAAgIQBhA4Beg4IAAAIQgxAcgvAAQgwAAgvgcg");
	var mask_graphics_31 = new cjs.Graphics().p("AhfAGIAAgjQBhAuBeguIAAAjQgxAYgvAAQgwAAgvgYg");
	var mask_graphics_32 = new cjs.Graphics().p("AhfAXIAAhBQBgAmBfgmIAABBQgwATgwAAQgwAAgvgTg");
	var mask_graphics_33 = new cjs.Graphics().p("AhfAoIAAheQBgAdBfgdIAABeQgwAPgwAAQgwAAgvgPg");
	var mask_graphics_34 = new cjs.Graphics().p("AhfA5IAAh7QBgATBfgTIAAB7QgwAKgwAAQgvAAgwgKg");
	var mask_graphics_35 = new cjs.Graphics().p("AhfBKIAAiYQBgAKBfgKIAACYQgwAFgwAAQgvAAgwgFg");
	var mask_graphics_36 = new cjs.Graphics().p("AhfBbIAAi1IC/AAIAAC1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:8.925,y:8.875}).wait(24).to({graphics:mask_graphics_24,x:8.925,y:8.875}).wait(1).to({graphics:mask_graphics_25,x:8.925,y:9.1475}).wait(1).to({graphics:mask_graphics_26,x:8.925,y:9.42}).wait(1).to({graphics:mask_graphics_27,x:8.925,y:9.6925}).wait(1).to({graphics:mask_graphics_28,x:8.925,y:9.965}).wait(1).to({graphics:mask_graphics_29,x:8.925,y:6.0347}).wait(1).to({graphics:mask_graphics_30,x:8.925,y:6.0347}).wait(1).to({graphics:mask_graphics_31,x:8.925,y:10.0104}).wait(1).to({graphics:mask_graphics_32,x:8.925,y:9.7833}).wait(1).to({graphics:mask_graphics_33,x:8.925,y:9.5563}).wait(1).to({graphics:mask_graphics_34,x:8.925,y:9.3292}).wait(1).to({graphics:mask_graphics_35,x:8.925,y:9.1021}).wait(1).to({graphics:mask_graphics_36,x:8.925,y:8.875}).wait(41));

	// Layer 3
	this.instance = new lib.Tween15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(4.45,4.65);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("Ag+A/QgagaAAglQAAgkAagaQAagaAkAAQAlAAAaAaQAaAaAAAkQAAAlgaAaQgaAaglAAQgkAAgagag");
	this.shape.setTransform(8.9,8.925);

	var maskedShapeInstanceList = [this.instance,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(77));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AhfBbIAAi1IC/AAIAAC1g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AhfBbIAAi1IC/AAIAAC1g");
	var mask_1_graphics_25 = new cjs.Graphics().p("AhfBHIAAiSQBgALBfgLIAACSQgwAFgwAAQgvAAgwgFg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AhfAyIAAhvQBgAXBfgXIAABvQgwAMgwAAQgvAAgwgMg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AhfAeIAAhMQBgAiBfgiIAABMQgwARgwAAQgwAAgvgRg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AhfAKIAAgqQBgAsBfgsIAAAqQgxAXgvAAQgwAAgvgXg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AhfgJIAAgIQBhA3Beg3IAAAIQgxAbgvAAQgwAAgvgbg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AhfgJIAAgIQBhA3Beg3IAAAIQgxAbgvAAQgwAAgvgbg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AhfAGIAAgjQBgAuBfguIAAAjQgxAYgvAAQgwAAgvgYg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AhfAXIAAhBQBgAmBfgmIAABBQgwATgwAAQgwAAgvgTg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AhfAoIAAheQBgAdBfgdIAABeQgwAPgwAAQgwAAgvgPg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AhfA5IAAh7QBgATBfgTIAAB7QgwAKgwAAQgvAAgwgKg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AhfBKIAAiYQBfAKBggKIAACYQgwAFgwAAQgvAAgwgFg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AhfBbIAAi1IC/AAIAAC1g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:71.825,y:8.875}).wait(24).to({graphics:mask_1_graphics_24,x:71.825,y:8.875}).wait(1).to({graphics:mask_1_graphics_25,x:71.825,y:9.1475}).wait(1).to({graphics:mask_1_graphics_26,x:71.825,y:9.42}).wait(1).to({graphics:mask_1_graphics_27,x:71.825,y:9.6925}).wait(1).to({graphics:mask_1_graphics_28,x:71.825,y:9.965}).wait(1).to({graphics:mask_1_graphics_29,x:71.825,y:10.2347}).wait(1).to({graphics:mask_1_graphics_30,x:71.825,y:10.2347}).wait(1).to({graphics:mask_1_graphics_31,x:71.825,y:10.0104}).wait(1).to({graphics:mask_1_graphics_32,x:71.825,y:9.7833}).wait(1).to({graphics:mask_1_graphics_33,x:71.825,y:9.5563}).wait(1).to({graphics:mask_1_graphics_34,x:71.825,y:9.3292}).wait(1).to({graphics:mask_1_graphics_35,x:71.825,y:9.1021}).wait(1).to({graphics:mask_1_graphics_36,x:71.825,y:8.875}).wait(41));

	// Layer 1
	this.instance_1 = new lib.Tween16("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.6,4.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("Ag+A/QgagaAAglQAAgkAagaQAagaAkAAQAlAAAaAaQAaAaAAAkQAAAlgaAaQgaAaglAAQgjAAgbgag");
	this.shape_1.setTransform(71.75,8.925);

	var maskedShapeInstanceList = [this.instance_1,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1}]}).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.7,17.9);


(lib.eyebrowcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.eyebrow2copy();
	this.instance.parent = this;
	this.instance.setTransform(26,24.1,1,1,0,0,0,26,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.15},24,cjs.Ease.get(1)).wait(48).to({y:11.4},23,cjs.Ease.get(1)).wait(34).to({y:17.15},23,cjs.Ease.get(1)).wait(45).to({y:24.1},32,cjs.Ease.get(1)).to({y:17.15},33,cjs.Ease.get(1)).wait(33).to({y:11.4},26,cjs.Ease.get(1)).wait(16).to({y:17.15},29,cjs.Ease.get(1)).wait(31).to({y:24.1},22,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_1 = new lib.eyebrow1copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(97.35,9.7,1,1,0,0,0,26,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:16.65},24,cjs.Ease.get(1)).wait(48).to({y:10.9},23,cjs.Ease.get(1)).wait(34).to({y:16.65},23,cjs.Ease.get(1)).wait(45).to({y:9.7},32,cjs.Ease.get(1)).to({y:16.65},33,cjs.Ease.get(1)).wait(33).to({y:10.9},26,cjs.Ease.get(1)).wait(16).to({y:16.65},29,cjs.Ease.get(1)).wait(31).to({y:9.7},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.3,22.5,87.3,18.200000000000003);


(lib.eyebrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.eyebrow2();
	this.instance.parent = this;
	this.instance.setTransform(26,24.1,1,1,0,0,0,26,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.15},24,cjs.Ease.get(1)).wait(48).to({y:11.4},23,cjs.Ease.get(1)).wait(34).to({y:17.15},23,cjs.Ease.get(1)).wait(45).to({y:24.1},32,cjs.Ease.get(1)).to({y:17.15},33,cjs.Ease.get(1)).wait(33).to({y:11.4},26,cjs.Ease.get(1)).wait(16).to({y:17.15},29,cjs.Ease.get(1)).wait(31).to({y:24.1},22,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_1 = new lib.eyebrow1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(97.35,9.7,1,1,0,0,0,26,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:16.65},24,cjs.Ease.get(1)).wait(48).to({y:10.9},23,cjs.Ease.get(1)).wait(34).to({y:16.65},23,cjs.Ease.get(1)).wait(45).to({y:9.7},32,cjs.Ease.get(1)).to({y:16.65},33,cjs.Ease.get(1)).wait(33).to({y:10.9},26,cjs.Ease.get(1)).wait(16).to({y:16.65},29,cjs.Ease.get(1)).wait(31).to({y:9.7},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.4,33.4);


(lib.btnSeguir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		_root.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.cursor = 'pointer';
		Player.SetMsgStatus('Clique sobre o botão ">".');
		function checa(){
			//estando com BIND, 
			this.parent.play();
			this.removeAllEventListeners();
		}
		this.addEventListener('click', checa.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.wefdwefwefwef();
	this.instance.parent = this;
	this.instance.setTransform(25.35,22.25,1,1,0,0,0,8.7,14.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F0100").s().p("AifA4IgPgPQgbgggMgkQgNgkAAgpIABgRIAAAHIACAPQAEAXAIAVQAKAZARAXQAKAOAPAOQAiAjArAQIAqAMIAPACIAIABIADAAIAOAAIABAAIACAAIALAAIACAAIACAAIAGgBIAMgBIABAAIADgBIAYgFIATgHQAagKAXgRQAPgLAOgNQAigiARgrIAGgPQAEgNACgOIABgLIABgHIABgFIAAARQAABehCBCQhDBCheAAQhdAAhChCg");
	this.shape.setTransform(22.7,36.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF0000","#990000"],[0,1],13.1,-15.1,-9.7,12.6).s().p("AABDjIgBAAIgOAAIgDAAIgIgBIgPgCIgqgMQgrgRgigiQgPgOgKgPQgRgXgKgZQgIgVgEgXQgDgTAAgVQAAgTAEgUQADgXAIgVQAKgZARgXQAKgPAPgNQBChDBdAAIAJAAIAJABIAGAAIAQACQAWAEAVAIQAaAKAXARQAPALAOAOQAjAjAQAqIADAIIAGAXQAEAPABAOIABAMIAAACIAAAEIAAAGIAAANIAAACIAAABIgBAFIgBAHIgBALQgCAOgEANIgGAPQgRArgiAjQgOANgPALQgXARgaAKIgTAGIgYAGIgDAAIgBABIgSACIgCAAIgCAAIgLAAg");
	this.shape_1.setTransform(22.7,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(2));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("AiuC5QhQhXAAh1QAAhxBKhKQBHhIBkAEQBiAEBMBLQBNBNALBtQAMBxhDBUQhFBXhvAAQhvAAhRhag");
	this.shape_2.setTransform(26.1848,31.0144);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.7,58.5);


(lib.btnIniciar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = 'pointer';
		this.addEventListener('click', checa.bind(this));
		
		function checa(){
			Player.ResetPage();
		}
		this.visible = false;
	}
	this.frame_1 = function() {
		this.visible = true;
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(19).call(this.frame_20).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqZGdQirAAh4h6Qh5h5AAiqIAAAAQAAipB5h6QB6h5CpAAIUzAAQCpAAB5B5QB6B6AACpIAAAAQAACqh6B5Qh4B6iqAAg");
	this.shape.setTransform(-45.6,18.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(21));

	// Layer_4
	this.instance = new lib.Symbol11_1();
	this.instance.parent = this;
	this.instance.setTransform(-50.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.0117},0).wait(7).to({alpha:1},11,cjs.Ease.quadInOut).wait(2));

	// Layer_9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF0000","#990000"],[0,1],-87.6,0,87,0).s().p("AqYFEQiGAAhfhfQhgheAAiHIAAAAQAAiFBghfQBfhfCGAAIUxAAQCHAABeBfQBfBfAACFIAAAAQAACHhfBeQheBfiHAAg");
	this.shape_1.setTransform(-48.8,16.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF0000","#990000"],[0,1],-0.3,0,0.4,0).s().p("AgBACQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIACgBIABgBIACABIABABIgBACIgCABIgBgBg");
	this.shape_2.setTransform(-49.2,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF0000","#990000"],[0,1],-40.3,0,40.4,0).s().p("AgOGFQigAAhyhyQhyhyAAihIAAAAQAAifByhzQBzhyCfAAIAcAAQChAABxByQBzByAACgIAAAAQAAChhzByQhxByihAAg");
	this.shape_3.setTransform(-49.175,16.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF0000","#990000"],[0,1],-57.6,0,50.9,0).s().p("Ah/F9QidAAhwhwQhwhvAAieIAAAAQAAicBwhxQBxhvCcAAID/AAQCdAABvBvQBxBxAACcIAAAAQAACehxBvQhvBwidAAg");
	this.shape_4.setTransform(-46.0812,16.5313);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF0000","#990000"],[0,1],-74.9,0,61.5,0).s().p("AjwF1QiaAAhuhuQhthsAAibIAAAAQAAiZBthuQBuhtCaAAIHhAAQCaAABtBtQBuBuAACZIAAAAQAACbhuBsQhtBuiaAAg");
	this.shape_5.setTransform(-42.9875,16.5375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF0000","#990000"],[0,1],-92.2,0,72,0).s().p("AlhFtQiXAAhrhrQhrhrAAiXIAAAAQAAiWBrhrQBrhrCXAAILEAAQCWAABrBrQBrBrAACWIAAAAQAACXhrBrQhrBriWAAg");
	this.shape_6.setTransform(-39.8937,16.5438);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF0000","#990000"],[0,1],-109.6,0,82.5,0).s().p("AnSFlQiUAAhphpQhphoAAiUIAAAAQAAiTBphpQBphnCUAAIOmAAQCTAABpBnQBoBpAACTIAAAAQAACUhoBoQhpBpiTAAg");
	this.shape_7.setTransform(-36.8,16.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FF0000","#990000"],[0,1],-104.1,0,83.6,0).s().p("AoEFcQiQAAhnhmQhmhlAAiRIAAAAQAAiQBmhmQBnhlCQAAIQJAAQCRAABlBlQBnBnAACPIAAAAQAACRhnBlQhlBmiRAAg");
	this.shape_8.setTransform(-39.8,16.5438);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FF0000","#990000"],[0,1],-98.6,0,84.8,0).s().p("Ao1FUQiNAAhkhjQhkhjAAiOIAAAAQAAiMBkhkQBkhjCNAAIRsAAQCNAABjBjQBkBkAACMIAAAAQAACNhkBkQhjBjiNAAg");
	this.shape_9.setTransform(-42.8,16.5375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF0000","#990000"],[0,1],-93.1,0,85.9,0).s().p("ApnFMQiJAAhihhQhhhhAAiKIAAAAQAAiJBhhhQBihhCJAAITPAAQCKAABgBhQBiBiAACIIAAAAQAACKhiBhQhgBhiKAAg");
	this.shape_10.setTransform(-45.8,16.5313);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_1}]},1).wait(8));

	// Layer_1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4F0100").s().p("AqYFEQiGAAhghfQhehfAAiFIAAgBQAAiFBehfQBghfCGAAIUxAAQCGAABfBfQBfBfAACFIAAABQAACFhfBfQhfBfiGAAg");
	this.shape_11.setTransform(-46.275,19.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4F0100").s().p("AgBACIgCgCQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABgBIABAAIACAAQABABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAIgCACIgCABIgBgBg");
	this.shape_12.setTransform(-46.675,19.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4F0100").s().p("AgNGFQihAAhyhyQhyhyAAihIAAAAQAAifByhzQBzhyCgAAIAbAAQChAAByByQByByAACgIAAAAQAAChhyByQhyByihAAg");
	this.shape_13.setTransform(-46.675,19.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4F0100").s().p("Ah/F9QidAAhwhwQhwhvAAieIAAAAQAAicBwhxQBxhvCcAAID/AAQCdAABvBvQBxBwgBCdIAAAAQABCehxBvQhvBwidAAg");
	this.shape_14.setTransform(-43.575,19.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4F0100").s().p("AjwF1QiaAAhuhtQhthtAAibIAAAAQAAiZBthuQBuhtCaAAIHhAAQCaAABtBtQBuBuAACZIAAAAQAACbhuBtQhtBtiaAAg");
	this.shape_15.setTransform(-40.475,19.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4F0100").s().p("AlhFtQiXAAhrhrQhrhrAAiWIAAgBQAAiWBrhrQBrhrCXAAILDAAQCXAABrBrQBrBrAACWIAAABQAACWhrBrQhrBriXAAg");
	this.shape_16.setTransform(-37.375,19.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4F0100").s().p("AnTFlQiTAAhphpQhohoAAiTIAAgBQAAiSBohpQBphpCTAAIOnAAQCTAABoBpQBpBpAACSIAAABQAACThpBoQhoBpiTAAg");
	this.shape_17.setTransform(-34.275,19.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4F0100").s().p("AoEFdQiQAAhnhmQhlhnAAiPIAAgBQAAiPBlhnQBnhmCQAAIQJAAQCQAABmBmQBnBngBCPIAAABQABCPhnBnQhmBmiQAAg");
	this.shape_18.setTransform(-37.275,19.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4F0100").s().p("Ao1FUQiNABhkhkQhkhkAAiMIAAgBQAAiMBkhkQBkhjCNAAIRrAAQCNAABkBjQBkBkAACMIAAABQAACMhkBkQhkBkiNgBg");
	this.shape_19.setTransform(-40.275,19.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4F0100").s().p("ApnFMQiJAAhihhQhhhhAAiJIAAgBQAAiIBhhiQBihhCJAAITPAAQCJAABiBhQBhBhAACJIAAABQAACJhhBhQhiBhiJAAg");
	this.shape_20.setTransform(-43.275,19.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[{t:this.shape_13}]},3).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_11}]},1).wait(8));

	// Layer_10
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C4C5C6").s().p("AqYFFQiFAAhhhgQheheAAiGIAAgBQAAiFBehgQBghfCGABIUxAAQCGgBBfBfQBfBgAACFIAAABQAACFhfBfQhfBgiGAAg");
	this.shape_21.setTransform(-44.175,23.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C4C5C6").s().p("AgBADIgCgDIACgBIABgBIADABIABABIgBADIgDAAIgBAAg");
	this.shape_22.setTransform(-44.575,23.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C4C5C6").s().p("AgNGFQihAAhyhzQhyhxAAihIAAAAQAAifByhzQBzhyCgAAIAbAAQChAAByByQByByAACgIAAAAQAAChhyBxQhyBzihAAg");
	this.shape_23.setTransform(-44.575,23.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C4C5C6").s().p("Ah0F1QiaAAhuhuQhthtAAiaIAAAAQAAiYBthvQBvhtCZAAIDpAAQCaAABtBtQBuBuAACZIAAAAQAACahuBtQhtBuiaAAg");
	this.shape_24.setTransform(-41.475,23.2688);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C4C5C6").s().p("AjbFlQiTAAhphpQhohoAAiUIAAAAQAAiSBohpQBphpCTAAIG3AAQCTAABoBpQBpBoAACTIAAAAQAACUhpBoQhoBpiTAAg");
	this.shape_25.setTransform(-38.375,23.2625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C4C5C6").s().p("AlCFVQiMAAhkhlQhkhjAAiNIAAAAQAAiLBkhlQBkhkCMAAIKFAAQCMAABkBkQBkBkAACMIAAAAQAACNhkBjQhkBliMAAg");
	this.shape_26.setTransform(-35.275,23.2563);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C4C5C6").s().p("AmoFFQiGAAhghgQhehfAAiFIAAgBQAAiFBehgQBghfCGABINRAAQCGgBBfBfQBfBgAACFIAAABQAACFhfBfQhfBgiGAAg");
	this.shape_27.setTransform(-32.175,23.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C4C5C6").s().p("AnkFFQiGAAhghgQhehfAAiFIAAgBQAAiFBehgQBghfCGABIPJAAQCGgBBfBfQBfBgAACFIAAABQAACFhfBfQhfBgiGAAg");
	this.shape_28.setTransform(-35.175,23.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C4C5C6").s().p("AogFFQiFAAhhhgQhehfAAiFIAAgBQAAiFBehgQBghfCGABIRBAAQCGgBBfBfQBfBgAACFIAAABQAACFhfBfQhfBgiGAAg");
	this.shape_29.setTransform(-38.175,23.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C4C5C6").s().p("ApcFFQiFAAhhhgQhehfAAiFIAAgBQAAiFBehgQBghfCGABIS5AAQCGgBBfBfQBfBgAACFIAAABQAACFhfBfQhfBgiGAAg");
	this.shape_30.setTransform(-41.175,23.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[]},1).to({state:[{t:this.shape_23}]},3).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_21}]},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.4,-23.1,215.60000000000002,85.30000000000001);


(lib.btnFechar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = 'pointer';
		this.addEventListener('click', checa.bind(this));
		
		function checa(){
			//estando com BIND, 
			this.parent.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.instance = new lib.wefdwefwefwef();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-7,1,1,0,0,0,8.7,14.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F0100").s().p("AifA4IgPgPQgagggNgkIgEgKQgJggAAgjIAAgRIABAHIADAPIADASQADAOAFAMQAKAZARAXQAKAOAPAOQAiAjArAQIAqAMIAPACIAJABIACAAIAOAAIABAAIACAAIALAAIACAAIACAAIAGgBIAMgBIABAAIADgBIAYgFIAUgHQAZgKAXgRQAPgLANgNQAjgiARgrIAGgPIAGgbIACgLIAAgHIABgFIAAARQAABehDBCQhCBCheAAQhdAAhChCg");
	this.shape.setTransform(-3.15,7.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AivCUQhDhJgLhdIAEAKQANAkAbAgIAOAPQBCBDBeAAQBdAABDhDQBChCAAhdIAAgSIAAAAIAAgCIAAgNIAAgHIAAgEIAAgCIgBgMIgEgdQgDgMgEgLIgCgIQgIgSgKgRIAFAFQBNBNALBtQAMBxhDBUQhFBXhvAAQhvAAhRhag");
	this.shape_1.setTransform(0.4473,5.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF0000","#990000"],[0,1],13.1,-15.1,-9.7,12.6).s().p("AADDjIgCAAIgBAAIgOAAIgCgBIgJAAIgPgCIgqgMQgrgQgigkQgPgNgKgPQgRgXgKgZQgFgNgDgNIgDgSQgEgUAAgUQAAgUAEgTQADgXAIgVQAKgZARgXQAKgPAPgOQBChCBdAAIAJAAIAJAAIAGABIAQACQAWAEAWAIQAZAKAXARQAPALANANQAVAVAOAWQAKARAHASIADAIQAEALACAMIAFAdIABAMIAAACIAAAFIAAAGIAAAMIAAACIAAAAIgBAGIAAAHIgCALIgGAbIgGAPQgRArgjAiQgNAOgPALQgXARgZAKIgUAHIgYAFIgDAAIgBAAIgMACIgGAAIgCAAIgCABIgLAAg");
	this.shape_2.setTransform(-3.15,-6.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnFechar, new cjs.Rectangle(-25.8,-29.2,51.6,58.5), null);


(lib.btnConferir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = 'pointer';
		this.stop();
		this.visible = false;
	}
	this.frame_1 = function() {
		this.visible = true;
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(19).call(this.frame_20).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqZGdQirAAh4h6Qh5h5AAiqIAAAAQAAipB5h6QB6h5CpAAIUzAAQCpAAB5B5QB6B6AACpIAAAAQAACqh6B5Qh4B6iqAAg");
	this.shape.setTransform(-45.6,18.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(21));

	// Layer_4
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(-50.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.0117},0).wait(7).to({alpha:1},11,cjs.Ease.quadInOut).wait(2));

	// Layer_9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF0000","#990000"],[0,1],-87.6,0,87,0).s().p("AqYFEQiGAAhfhfQhgheAAiHIAAAAQAAiFBghfQBfhfCGAAIUxAAQCHAABeBfQBfBfAACFIAAAAQAACHhfBeQheBfiHAAg");
	this.shape_1.setTransform(-48.8,16.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF0000","#990000"],[0,1],-0.3,0,0.4,0).s().p("AgBACQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIACgBIABgBIACABIABABIgBACIgCABIgBgBg");
	this.shape_2.setTransform(-49.2,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF0000","#990000"],[0,1],-40.3,0,40.4,0).s().p("AgOGFQigAAhyhyQhyhyAAihIAAAAQAAifByhzQBzhyCfAAIAcAAQChAABxByQBzByAACgIAAAAQAAChhzByQhxByihAAg");
	this.shape_3.setTransform(-49.175,16.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF0000","#990000"],[0,1],-57.6,0,50.9,0).s().p("Ah/F9QidAAhwhwQhwhvAAieIAAAAQAAicBwhxQBxhvCcAAID/AAQCdAABvBvQBxBxAACcIAAAAQAACehxBvQhvBwidAAg");
	this.shape_4.setTransform(-46.0812,16.5313);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF0000","#990000"],[0,1],-74.9,0,61.5,0).s().p("AjwF1QiaAAhuhuQhthsAAibIAAAAQAAiZBthuQBuhtCaAAIHhAAQCaAABtBtQBuBuAACZIAAAAQAACbhuBsQhtBuiaAAg");
	this.shape_5.setTransform(-42.9875,16.5375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF0000","#990000"],[0,1],-92.2,0,72,0).s().p("AlhFtQiXAAhrhrQhrhrAAiXIAAAAQAAiWBrhrQBrhrCXAAILEAAQCWAABrBrQBrBrAACWIAAAAQAACXhrBrQhrBriWAAg");
	this.shape_6.setTransform(-39.8937,16.5438);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF0000","#990000"],[0,1],-109.6,0,82.5,0).s().p("AnSFlQiUAAhphpQhphoAAiUIAAAAQAAiTBphpQBphnCUAAIOmAAQCTAABpBnQBoBpAACTIAAAAQAACUhoBoQhpBpiTAAg");
	this.shape_7.setTransform(-36.8,16.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FF0000","#990000"],[0,1],-104.1,0,83.6,0).s().p("AoEFcQiQAAhnhmQhmhlAAiRIAAAAQAAiQBmhmQBnhlCQAAIQJAAQCRAABlBlQBnBnAACPIAAAAQAACRhnBlQhlBmiRAAg");
	this.shape_8.setTransform(-39.8,16.5438);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FF0000","#990000"],[0,1],-98.6,0,84.8,0).s().p("Ao1FUQiNAAhkhjQhkhjAAiOIAAAAQAAiMBkhkQBkhjCNAAIRsAAQCNAABjBjQBkBkAACMIAAAAQAACNhkBkQhjBjiNAAg");
	this.shape_9.setTransform(-42.8,16.5375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF0000","#990000"],[0,1],-93.1,0,85.9,0).s().p("ApnFMQiJAAhihhQhhhhAAiKIAAAAQAAiJBhhhQBihhCJAAITPAAQCKAABgBhQBiBiAACIIAAAAQAACKhiBhQhgBhiKAAg");
	this.shape_10.setTransform(-45.8,16.5313);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_1}]},1).wait(8));

	// Layer_1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4F0100").s().p("AqYFEQiGAAhghfQhehfAAiFIAAgBQAAiFBehfQBghfCGAAIUxAAQCGAABfBfQBfBfAACFIAAABQAACFhfBfQhfBfiGAAg");
	this.shape_11.setTransform(-46.275,19.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4F0100").s().p("AgBACIgCgCQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABgBIABAAIACAAQABABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAIgCACIgCABIgBgBg");
	this.shape_12.setTransform(-46.675,19.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4F0100").s().p("AgNGFQihAAhyhyQhyhyAAihIAAAAQAAifByhzQBzhyCgAAIAbAAQChAAByByQByByAACgIAAAAQAAChhyByQhyByihAAg");
	this.shape_13.setTransform(-46.675,19.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4F0100").s().p("Ah/F9QidAAhwhwQhwhvAAieIAAAAQAAicBwhxQBxhvCcAAID/AAQCdAABvBvQBxBwgBCdIAAAAQABCehxBvQhvBwidAAg");
	this.shape_14.setTransform(-43.575,19.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4F0100").s().p("AjwF1QiaAAhuhtQhthtAAibIAAAAQAAiZBthuQBuhtCaAAIHhAAQCaAABtBtQBuBuAACZIAAAAQAACbhuBtQhtBtiaAAg");
	this.shape_15.setTransform(-40.475,19.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4F0100").s().p("AlhFtQiXAAhrhrQhrhrAAiWIAAgBQAAiWBrhrQBrhrCXAAILDAAQCXAABrBrQBrBrAACWIAAABQAACWhrBrQhrBriXAAg");
	this.shape_16.setTransform(-37.375,19.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4F0100").s().p("AnTFlQiTAAhphpQhohoAAiTIAAgBQAAiSBohpQBphpCTAAIOnAAQCTAABoBpQBpBpAACSIAAABQAACThpBoQhoBpiTAAg");
	this.shape_17.setTransform(-34.275,19.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4F0100").s().p("AoEFdQiQAAhnhmQhlhnAAiPIAAgBQAAiPBlhnQBnhmCQAAIQJAAQCQAABmBmQBnBngBCPIAAABQABCPhnBnQhmBmiQAAg");
	this.shape_18.setTransform(-37.275,19.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4F0100").s().p("Ao1FUQiNABhkhkQhkhkAAiMIAAgBQAAiMBkhkQBkhjCNAAIRrAAQCNAABkBjQBkBkAACMIAAABQAACMhkBkQhkBkiNgBg");
	this.shape_19.setTransform(-40.275,19.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4F0100").s().p("ApnFMQiJAAhihhQhhhhAAiJIAAgBQAAiIBhhiQBihhCJAAITPAAQCJAABiBhQBhBhAACJIAAABQAACJhhBhQhiBhiJAAg");
	this.shape_20.setTransform(-43.275,19.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[{t:this.shape_13}]},3).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_11}]},1).wait(8));

	// Layer_10
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C4C5C6").s().p("AqYFFQiFAAhhhgQheheAAiGIAAgBQAAiFBehgQBghfCGABIUxAAQCGgBBfBfQBfBgAACFIAAABQAACFhfBfQhfBgiGAAg");
	this.shape_21.setTransform(-44.175,23.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C4C5C6").s().p("AgBADIgCgDIACgBIABgBIADABIABABIgBADIgDAAIgBAAg");
	this.shape_22.setTransform(-44.575,23.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C4C5C6").s().p("AgNGFQihAAhyhzQhyhxAAihIAAAAQAAifByhzQBzhyCgAAIAbAAQChAAByByQByByAACgIAAAAQAAChhyBxQhyBzihAAg");
	this.shape_23.setTransform(-44.575,23.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C4C5C6").s().p("Ah0F1QiaAAhuhuQhthtAAiaIAAAAQAAiYBthvQBvhtCZAAIDpAAQCaAABtBtQBuBuAACZIAAAAQAACahuBtQhtBuiaAAg");
	this.shape_24.setTransform(-41.475,23.2688);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C4C5C6").s().p("AjbFlQiTAAhphpQhohoAAiUIAAAAQAAiSBohpQBphpCTAAIG3AAQCTAABoBpQBpBoAACTIAAAAQAACUhpBoQhoBpiTAAg");
	this.shape_25.setTransform(-38.375,23.2625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C4C5C6").s().p("AlCFVQiMAAhkhlQhkhjAAiNIAAAAQAAiLBkhlQBkhkCMAAIKFAAQCMAABkBkQBkBkAACMIAAAAQAACNhkBjQhkBliMAAg");
	this.shape_26.setTransform(-35.275,23.2563);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C4C5C6").s().p("AmoFFQiGAAhghgQhehfAAiFIAAgBQAAiFBehgQBghfCGABINRAAQCGgBBfBfQBfBgAACFIAAABQAACFhfBfQhfBgiGAAg");
	this.shape_27.setTransform(-32.175,23.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C4C5C6").s().p("AnkFFQiGAAhghgQhehfAAiFIAAgBQAAiFBehgQBghfCGABIPJAAQCGgBBfBfQBfBgAACFIAAABQAACFhfBfQhfBgiGAAg");
	this.shape_28.setTransform(-35.175,23.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C4C5C6").s().p("AogFFQiFAAhhhgQhehfAAiFIAAgBQAAiFBehgQBghfCGABIRBAAQCGgBBfBfQBfBgAACFIAAABQAACFhfBfQhfBgiGAAg");
	this.shape_29.setTransform(-38.175,23.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C4C5C6").s().p("ApcFFQiFAAhhhgQhehfAAiFIAAgBQAAiFBehgQBghfCGABIS5AAQCGgBBfBfQBfBgAACFIAAABQAACFhfBfQhfBgiGAAg");
	this.shape_30.setTransform(-41.175,23.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[]},1).to({state:[{t:this.shape_23}]},3).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_21}]},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.4,-23.1,215.60000000000002,85.30000000000001);


(lib.feedBasico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.visible = false;
		_feed = this;
	}
	this.frame_1 = function() {
		this.visible = true;
	}
	this.frame_5 = function() {
		this.pop.gotoAndStop(_feed.destino)
	}
	this.frame_32 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		if (_feed.destino == "tentativa") {
			_desafio.reset();
		} else {
			_desafio.mostraCerta();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(27).call(this.frame_32).wait(35).call(this.frame_67).wait(1));

	// Camada 6
	this.instance = new lib.btnFechar();
	this.instance.parent = this;
	this.instance.setTransform(-0.05,134.65,1,1,0,0,0,-0.8,-0.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).to({_off:true},1).wait(35));

	// Layer_2
	this.pop = new lib.popTxt();
	this.pop.name = "pop";
	this.pop.parent = this;
	this.pop.setTransform(0,9.15);

	this.timeline.addTween(cjs.Tween.get(this.pop).wait(1).to({regY:5,scaleX:0.01,scaleY:0.01,y:589.15},0).wait(8).to({regY:0,scaleX:1,scaleY:1,y:550.1},0).wait(1).to({y:539.9787},0).wait(1).to({y:508.1084},0).wait(1).to({y:453.1138},0).wait(1).to({y:376.1687},0).wait(1).to({y:283.0697},0).wait(1).to({y:185.1324},0).wait(1).to({y:96.5298},0).wait(1).to({y:28.9621},0).wait(1).to({y:-11.7084},0).wait(1).to({y:-24.85},0).wait(1).to({y:-24.3572},0).wait(1).to({y:-22.8101},0).wait(1).to({y:-20.1372},0).wait(1).to({y:-16.3548},0).wait(1).to({y:-11.6441},0).wait(1).to({y:-6.4121},0).wait(1).to({y:-1.2556},0).wait(1).to({y:3.2065},0).wait(1).to({y:6.5278},0).wait(1).to({y:8.5096},0).wait(1).to({y:9.15},0).wait(6).to({y:8.6572},0).wait(1).to({y:7.1101},0).wait(1).to({y:4.4372},0).wait(1).to({y:0.6548},0).wait(1).to({y:-4.0559},0).wait(1).to({y:-9.2879},0).wait(1).to({y:-14.4444},0).wait(1).to({y:-18.9065},0).wait(1).to({y:-22.2278},0).wait(1).to({y:-24.2096},0).wait(1).to({y:-24.85},0).wait(1).to({y:-12.6162},0).wait(1).to({y:25.9059},0).wait(1).to({y:92.3786},0).wait(1).to({y:185.3832},0).wait(1).to({y:297.9132},0).wait(1).to({y:416.2914},0).wait(1).to({y:523.3866},0).wait(1).to({y:605.0566},0).wait(1).to({y:654.2156},0).wait(1).to({y:670.1},0).wait(11).to({regY:5,scaleX:0.01,scaleY:0.01,y:589.15},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.popBg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,333.1,1,0.003);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleY:1,y:0},14,cjs.Ease.get(1)).wait(31).to({scaleY:0.003,y:333.1},14,cjs.Ease.get(-1)).to({_off:true},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-537.6,-319.2,1075.2,1104.9);


(lib.facecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1696F").s().p("AgJBdQgNAAgJgJQgKgKAAgNIAAh4QAAgOAKgJQAJgKANAAIATAAQANAAAKAKQAJAJAAAOIAAB4QAAANgJAKQgKAJgNAAg");
	this.shape.setTransform(73.7,99.375,1,1,0,0,180);

	this.boca = new lib.mouthcopy2();
	this.boca.name = "boca";
	this.boca.parent = this;
	this.boca.setTransform(73.6,120.85,1,1,0,0,0,15,7.3);

	this.instance = new lib.eyebrowcopy();
	this.instance.parent = this;
	this.instance.setTransform(75.3,48.7,1,1,0,0,0,61.6,16.9);

	this.instance_1 = new lib.eyescopy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73.6,96.6,1,1,0,0,0,40.3,8.9);

	this.instance_2 = new lib.woman_head();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-43,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.boca},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-27,236,224);


(lib.face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.boca = new lib.mouth();
	this.boca.name = "boca";
	this.boca.parent = this;
	this.boca.setTransform(73.6,119.85,1,1,0,0,0,15,7.3);

	this.instance = new lib.eyebrow();
	this.instance.parent = this;
	this.instance.setTransform(75.3,47.7,1,1,0,0,0,61.6,16.9);

	this.instance_1 = new lib.eyes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73.6,91.4,1,1,0,0,0,40.3,8.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1696F").s().p("AgFCFQgZAAgRgSQgSgRAAgZIAAiRQAAgYASgTQASgRAYAAIALAAQAZAAARARQASATAAAYIAACRQAAAZgSARQgRASgZAAg");
	this.shape.setTransform(73.625,99.1);

	this.instance_2 = new lib.man_head();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape},{t:this.instance_1},{t:this.instance},{t:this.boca}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-24,188,187);


(lib.desafio6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		TweenMax.fromTo([this], .5, {
			y: this.y + 50
		}, {
			y: this.y,
			ease: Back.easeOut.config(1.7)
		});
		
		_root.numQuest += 1;
		_root.stop();
		_desafio = this;
		this.erradosCount = 0
		this.tenta = 0;
		
		this.tentaMax = 1;
		this.respostas_correta = [false, true, false, false];
		
		
		this.mostraCerta = function () {
			/*for (var i = 0; i < btns.length; i++) {
				_desafio['bt' + i].gotoAndStop(_desafio.respostas_correta[i]);
			}*/
			_root.play();
		}
		this.reset = function () {
			for (var i = 0; i < btns.length; i++) {
				_desafio['bt' + i].gotoAndStop(0);
				_desafio['bt' + i].mouseEnabled = true;
			}
		}
		
		
		this.verifica = function () {
			_desafio.btnConferir.gotoAndStop(0);
			for (var i = 0; i < _desafio.respostas_correta.length; i++) {
				_desafio['bt' + i].mouseEnabled = false;
				if (_desafio['bt' + i].currentFrame != _desafio.respostas_correta[i]) {
					_desafio.erradosCount += 1;
				}
			}
			if (_desafio.erradosCount == 0) {
				_root.pontos += 1;
				_feed.destino = "certo";
			} else {
				_desafio.tenta += 1;
				console.log('tentativa:' + _desafio.tenta);
				if (_desafio.tenta < _desafio.tentaMax) {
					_feed.destino = "tentativa";
				} else {
					_feed.destino = "errado";
				}
			}
			_desafio.feed.gotoAndPlay(1);
		}
		
		
		var btns = new Array;
		for (var i = 0; i < _desafio.respostas_correta.length; i++) {
			_desafio['bt' + i].cursor = "pointer";
			btns.push(i);
		}
		for (var i = 0; i < btns.length; i++) {
			(function (index) {
				_desafio['bt' + btns[index]].addEventListener("click", function () {
					_desafio.reset();
					if (_desafio.btnConferir.currentFrame < 1) {
						_desafio.btnConferir.gotoAndPlay(1);
					}
					if (_desafio['bt' + index].currentFrame == 0) {
						_desafio['bt' + index].gotoAndStop(1);
					} else {
						_desafio['bt' + index].gotoAndStop(0);
					}
				})
			})(i);
		}
		function conferir() {
			_desafio.verifica();
		
		}
		this.btnConferir.addEventListener('click', conferir.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 5
	this.feed = new lib.feedBasico();
	this.feed.name = "feed";
	this.feed.parent = this;
	this.feed.setTransform(0.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.feed).wait(1));

	// Camada 3
	this.btnConferir = new lib.btnConferir();
	this.btnConferir.name = "btnConferir";
	this.btnConferir.parent = this;
	this.btnConferir.setTransform(45.6,244.6);

	this.timeline.addTween(cjs.Tween.get(this.btnConferir).wait(1));

	// Camada 1
	this.bt3 = new lib.alter_V();
	this.bt3.name = "bt3";
	this.bt3.parent = this;
	this.bt3.setTransform(-366,166.7);

	this.text = new cjs.Text("Não devem ser consideradas se não recebidas por e-mail.", "19px 'EDP Preon'", "#333333");
	this.text.lineHeight = 25;
	this.text.lineWidth = 790;
	this.text.parent = this;
	this.text.setTransform(-324.75,153.45);

	this.bt1 = new lib.alter_V();
	this.bt1.name = "bt1";
	this.bt1.parent = this;
	this.bt1.setTransform(-366.05,-24.55);

	this.text_1 = new cjs.Text("Se um não cumprimento for confirmado, poderá haver a cessação\nde contrato da EDP com terceiros.", "19px 'EDP Preon'", "#333333");
	this.text_1.lineHeight = 25;
	this.text_1.lineWidth = 790;
	this.text_1.parent = this;
	this.text_1.setTransform(-324.75,-50.3);

	this.bt0 = new lib.alter_V();
	this.bt0.name = "bt0";
	this.bt0.parent = this;
	this.bt0.setTransform(-366,-120.2);

	this.text_2 = new cjs.Text("A denúncia por si só já garante algum tipo de punição.", "19px 'EDP Preon'", "#333333");
	this.text_2.lineHeight = 25;
	this.text_2.lineWidth = 790;
	this.text_2.parent = this;
	this.text_2.setTransform(-324.75,-133.45);

	this.bt2 = new lib.alter_V();
	this.bt2.name = "bt2";
	this.bt2.parent = this;
	this.bt2.setTransform(-366.05,71.1);

	this.text_3 = new cjs.Text("As denúncias e sanções se aplicam aos colaboradores EDP,\nsomente. Porém, é importante ter ciência sobre como proceder.", "19px 'EDP Preon'", "#333333");
	this.text_3.lineHeight = 25;
	this.text_3.lineWidth = 790;
	this.text_3.parent = this;
	this.text_3.setTransform(-324.75,45.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.bt2},{t:this.text_2},{t:this.bt0},{t:this.text_1},{t:this.bt1},{t:this.text},{t:this.bt3}]}).wait(1));

	// Camada 4
	this.text_4 = new cjs.Text("Sobre nosso canal de ética, está correto afirmar que:", "30px 'EDP Preon Hair'", "#333333");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 41;
	this.text_4.lineWidth = 955;
	this.text_4.parent = this;
	this.text_4.setTransform(0,-250.25);

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.desafio6, new cjs.Rectangle(-479.5,-252.2,959.1,556.3), null);


(lib.desafio5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		TweenMax.fromTo([this], .5, {
			y: this.y + 50
		}, {
			y: this.y,
			ease: Back.easeOut.config(1.7)
		});
		
		_root.numQuest += 1;
		_root.stop();
		_desafio = this;
		this.erradosCount = 0
		this.tenta = 0;
		
		this.tentaMax = 1;
		this.respostas_correta = [false, false, false, true];
		
		
		this.mostraCerta = function () {
			/*for (var i = 0; i < btns.length; i++) {
				_desafio['bt' + i].gotoAndStop(_desafio.respostas_correta[i]);
			}*/
			_root.play();
		}
		this.reset = function () {
			for (var i = 0; i < btns.length; i++) {
				_desafio['bt' + i].gotoAndStop(0);
				_desafio['bt' + i].mouseEnabled = true;
			}
		}
		
		
		this.verifica = function () {
			_desafio.btnConferir.gotoAndStop(0);
			for (var i = 0; i < _desafio.respostas_correta.length; i++) {
				_desafio['bt' + i].mouseEnabled = false;
				if (_desafio['bt' + i].currentFrame != _desafio.respostas_correta[i]) {
					_desafio.erradosCount += 1;
				}
			}
			if (_desafio.erradosCount == 0) {
				_root.pontos += 1;
				_feed.destino = "certo";
			} else {
				_desafio.tenta += 1;
				console.log('tentativa:' + _desafio.tenta);
				if (_desafio.tenta < _desafio.tentaMax) {
					_feed.destino = "tentativa";
				} else {
					_feed.destino = "errado";
				}
			}
			_desafio.feed.gotoAndPlay(1);
		}
		
		
		var btns = new Array;
		for (var i = 0; i < _desafio.respostas_correta.length; i++) {
			_desafio['bt' + i].cursor = "pointer";
			btns.push(i);
		}
		for (var i = 0; i < btns.length; i++) {
			(function (index) {
				_desafio['bt' + btns[index]].addEventListener("click", function () {
					_desafio.reset();
					if (_desafio.btnConferir.currentFrame < 1) {
						_desafio.btnConferir.gotoAndPlay(1);
					}
					if (_desafio['bt' + index].currentFrame == 0) {
						_desafio['bt' + index].gotoAndStop(1);
					} else {
						_desafio['bt' + index].gotoAndStop(0);
					}
				})
			})(i);
		}
		function conferir() {
			_desafio.verifica();
		
		}
		this.btnConferir.addEventListener('click', conferir.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 5
	this.feed = new lib.feedBasico();
	this.feed.name = "feed";
	this.feed.parent = this;
	this.feed.setTransform(0.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.feed).wait(1));

	// Camada 3
	this.btnConferir = new lib.btnConferir();
	this.btnConferir.name = "btnConferir";
	this.btnConferir.parent = this;
	this.btnConferir.setTransform(45.6,262.6);

	this.timeline.addTween(cjs.Tween.get(this.btnConferir).wait(1));

	// Camada 1
	this.bt3 = new lib.alter_V();
	this.bt3.name = "bt3";
	this.bt3.parent = this;
	this.bt3.setTransform(-328.15,184.7);

	this.text = new cjs.Text("Realizar licitações para escolher um fornecedor com melhor preço.", "19px 'EDP Preon'", "#333333");
	this.text.lineHeight = 25;
	this.text.lineWidth = 830;
	this.text.parent = this;
	this.text.setTransform(-286.9,171.45);

	this.bt2 = new lib.alter_V();
	this.bt2.name = "bt2";
	this.bt2.parent = this;
	this.bt2.setTransform(-328.2,89.1);

	this.text_1 = new cjs.Text("Vincular a empresa a contribuições para partidos políticos.", "19px 'EDP Preon'", "#333333");
	this.text_1.lineHeight = 25;
	this.text_1.lineWidth = 830;
	this.text_1.parent = this;
	this.text_1.setTransform(-286.9,75.85);

	this.bt1 = new lib.alter_V();
	this.bt1.name = "bt1";
	this.bt1.parent = this;
	this.bt1.setTransform(-328.2,-6.55);

	this.text_2 = new cjs.Text("Indicar a clientes quaisquer dos nossos fornecedores.", "19px 'EDP Preon'", "#333333");
	this.text_2.lineHeight = 25;
	this.text_2.lineWidth = 830;
	this.text_2.parent = this;
	this.text_2.setTransform(-286.9,-19.75);

	this.bt0 = new lib.alter_V();
	this.bt0.name = "bt0";
	this.bt0.parent = this;
	this.bt0.setTransform(-328.2,-102.2);

	this.text_3 = new cjs.Text("Aceitar ou oferecer brindes, presentes, empréstimos, estadas\nem hotel, viagens, serviços pessoais ou gratificações.", "19px 'EDP Preon'", "#333333");
	this.text_3.lineHeight = 25;
	this.text_3.parent = this;
	this.text_3.setTransform(-286.95,-127.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.bt0},{t:this.text_2},{t:this.bt1},{t:this.text_1},{t:this.bt2},{t:this.text},{t:this.bt3}]}).wait(1));

	// Camada 4
	this.text_4 = new cjs.Text("Ao falarmos em Corrupção e suborno, são\nproibidos todos os itens abaixo, com exceção de:", "30px 'EDP Preon Hair'", "#333333");
	this.text_4.lineHeight = 41;
	this.text_4.lineWidth = 859;
	this.text_4.parent = this;
	this.text_4.setTransform(-406.25,-259.25);

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.desafio5, new cjs.Rectangle(-408.2,-261.2,952.9000000000001,583.3), null);


(lib.desafio4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		TweenMax.fromTo([this], .5, {
			y: this.y + 50
		}, {
			y: this.y,
			ease: Back.easeOut.config(1.7)
		});
		
		_root.numQuest += 1;
		_root.stop();
		_desafio = this;
		this.erradosCount = 0
		this.tenta = 0;
		
		this.tentaMax = 1;
		this.respostas_correta = [true, false, false, false];
		
		
		this.mostraCerta = function () {
			/*for (var i = 0; i < btns.length; i++) {
				_desafio['bt' + i].gotoAndStop(_desafio.respostas_correta[i]);
			}*/
			_root.play();
		}
		this.reset = function () {
			for (var i = 0; i < btns.length; i++) {
				_desafio['bt' + i].gotoAndStop(0);
				_desafio['bt' + i].mouseEnabled = true;
			}
		}
		
		
		this.verifica = function () {
			_desafio.btnConferir.gotoAndStop(0);
			for (var i = 0; i < _desafio.respostas_correta.length; i++) {
				_desafio['bt' + i].mouseEnabled = false;
				if (_desafio['bt' + i].currentFrame != _desafio.respostas_correta[i]) {
					_desafio.erradosCount += 1;
				}
			}
			if (_desafio.erradosCount == 0) {
				_root.pontos += 1;
				_feed.destino = "certo";
			} else {
				_desafio.tenta += 1;
				console.log('tentativa:' + _desafio.tenta);
				if (_desafio.tenta < _desafio.tentaMax) {
					_feed.destino = "tentativa";
				} else {
					_feed.destino = "errado";
				}
			}
			_desafio.feed.gotoAndPlay(1);
		}
		
		
		var btns = new Array;
		for (var i = 0; i < _desafio.respostas_correta.length; i++) {
			_desafio['bt' + i].cursor = "pointer";
			btns.push(i);
		}
		for (var i = 0; i < btns.length; i++) {
			(function (index) {
				_desafio['bt' + btns[index]].addEventListener("click", function () {
					_desafio.reset();
					if (_desafio.btnConferir.currentFrame < 1) {
						_desafio.btnConferir.gotoAndPlay(1);
					}
					if (_desafio['bt' + index].currentFrame == 0) {
						_desafio['bt' + index].gotoAndStop(1);
					} else {
						_desafio['bt' + index].gotoAndStop(0);
					}
				})
			})(i);
		}
		function conferir() {
			_desafio.verifica();
		
		}
		this.btnConferir.addEventListener('click', conferir.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 5
	this.feed = new lib.feedBasico();
	this.feed.name = "feed";
	this.feed.parent = this;
	this.feed.setTransform(0.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.feed).wait(1));

	// Camada 3
	this.btnConferir = new lib.btnConferir();
	this.btnConferir.name = "btnConferir";
	this.btnConferir.parent = this;
	this.btnConferir.setTransform(45.6,262.6);

	this.timeline.addTween(cjs.Tween.get(this.btnConferir).wait(1));

	// Camada 1
	this.bt3 = new lib.alter_V();
	this.bt3.name = "bt3";
	this.bt3.parent = this;
	this.bt3.setTransform(-411.8,184.7);

	this.text = new cjs.Text("Uma auditoria realizada duas vezes ao ano, envolvendo parceiros \ne fornecedores.", "19px 'EDP Preon'", "#333333");
	this.text.lineHeight = 25;
	this.text.lineWidth = 830;
	this.text.parent = this;
	this.text.setTransform(-370.55,159.05);

	this.bt2 = new lib.alter_V();
	this.bt2.name = "bt2";
	this.bt2.parent = this;
	this.bt2.setTransform(-411.85,89.1);

	this.text_1 = new cjs.Text("Uma análise feita no Código de Ética de cada um dos nossos parceiros para encontrar pontos em comum e discutir aqueles que estão em desacordo.", "19px 'EDP Preon'", "#333333");
	this.text_1.lineHeight = 25;
	this.text_1.lineWidth = 830;
	this.text_1.parent = this;
	this.text_1.setTransform(-370.55,63.35);

	this.bt1 = new lib.alter_V();
	this.bt1.name = "bt1";
	this.bt1.parent = this;
	this.bt1.setTransform(-411.85,-6.55);

	this.text_2 = new cjs.Text("Um processo de seleção de parceiros e fornecedores, resultando em um \núnico escolhido.", "19px 'EDP Preon'", "#333333");
	this.text_2.lineHeight = 25;
	this.text_2.lineWidth = 830;
	this.text_2.parent = this;
	this.text_2.setTransform(-370.55,-32.3);

	this.bt0 = new lib.alter_V();
	this.bt0.name = "bt0";
	this.bt0.parent = this;
	this.bt0.setTransform(-411.8,-102.2);

	this.text_3 = new cjs.Text("Uma análise feita para conhecer melhor cada parceiro de negócio, garantindo a integridade de nossos parceiros e evitando riscos de atos ilícitos.", "19px 'EDP Preon'", "#333333");
	this.text_3.lineHeight = 25;
	this.text_3.lineWidth = 830;
	this.text_3.parent = this;
	this.text_3.setTransform(-370.55,-127.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.bt0},{t:this.text_2},{t:this.bt1},{t:this.text_1},{t:this.bt2},{t:this.text},{t:this.bt3}]}).wait(1));

	// Camada 4
	this.text_4 = new cjs.Text("O que é Due diligence?", "30px 'EDP Preon Hair'", "#333333");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 41;
	this.text_4.lineWidth = 809;
	this.text_4.parent = this;
	this.text_4.setTransform(0,-259.25);

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.desafio4, new cjs.Rectangle(-442.4,-261.2,903.4,583.3), null);


(lib.desafio3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		TweenMax.fromTo([this], .5, {	y: this.y + 50}, {	y: this.y,	ease: Back.easeOut.config(1.7)});
		
		_root.numQuest +=1;
		_root.stop();
		_desafio = this;
		this.erradosCount = 0
		this.tenta = 0;
		
		this.tentaMax = 1;
		this.respostas_correta = [false, true, false, false];
		
		
		this.mostraCerta = function () {
			/*for (var i = 0; i < btns.length; i++) {
				_desafio['bt' + i].gotoAndStop(_desafio.respostas_correta[i]);
			}*/
			_root.play();
		}
		this.reset = function () {
			for (var i = 0; i < btns.length; i++) {
				_desafio['bt' + i].gotoAndStop(0);
				_desafio['bt' + i].mouseEnabled = true;
			}
		}
		
		
		this.verifica = function () {
			_desafio.btnConferir.gotoAndStop(0);
			for (var i = 0; i < _desafio.respostas_correta.length; i++) {
				_desafio['bt' + i].mouseEnabled = false;
				if (_desafio['bt' + i].currentFrame != _desafio.respostas_correta[i]) {
					_desafio.erradosCount += 1;
				}
			}
			if (_desafio.erradosCount == 0) {
				_root.pontos += 1;
				_feed.destino = "certo";
			} else {
				_desafio.tenta += 1;
				console.log('tentativa:' + _desafio.tenta);
				if (_desafio.tenta < _desafio.tentaMax) {
					_feed.destino = "tentativa";
				} else {
					_feed.destino = "errado";
				}
			}
			_desafio.feed.gotoAndPlay(1);
		}
		
		
		var btns = new Array;
		for (var i = 0; i < _desafio.respostas_correta.length; i++) {
			_desafio['bt' + i].cursor = "pointer";
			btns.push(i);
		}
		for (var i = 0; i < btns.length; i++) {
			(function (index) {
				_desafio['bt' + btns[index]].addEventListener("click", function () {
					_desafio.reset();
					if (_desafio.btnConferir.currentFrame < 1) {
						_desafio.btnConferir.gotoAndPlay(1);
					}
					if (_desafio['bt' + index].currentFrame == 0) {
						_desafio['bt' + index].gotoAndStop(1);
					} else {
						_desafio['bt' + index].gotoAndStop(0);
					}
				})
			})(i);
		}
		function conferir() {
			_desafio.verifica();
		
		}
		this.btnConferir.addEventListener('click', conferir.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 5
	this.feed = new lib.feedBasico();
	this.feed.name = "feed";
	this.feed.parent = this;
	this.feed.setTransform(0.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.feed).wait(1));

	// Camada 3
	this.btnConferir = new lib.btnConferir();
	this.btnConferir.name = "btnConferir";
	this.btnConferir.parent = this;
	this.btnConferir.setTransform(45.6,262.6);

	this.timeline.addTween(cjs.Tween.get(this.btnConferir).wait(1));

	// Camada 1
	this.bt3 = new lib.alter_V();
	this.bt3.name = "bt3";
	this.bt3.parent = this;
	this.bt3.setTransform(-379.35,150.75);

	this.text = new cjs.Text("Não devem ser consideradas se não recebidas por e-mail.", "19px 'EDP Preon'", "#333333");
	this.text.lineHeight = 25;
	this.text.lineWidth = 814;
	this.text.parent = this;
	this.text.setTransform(-338.1,137.5);

	this.bt2 = new lib.alter_V();
	this.bt2.name = "bt2";
	this.bt2.parent = this;
	this.bt2.setTransform(-379.35,66.4);

	this.text_1 = new cjs.Text("Só podem ser compartilhadas por pessoas do mesmo nível hierárquico.", "19px 'EDP Preon'", "#333333");
	this.text_1.lineHeight = 25;
	this.text_1.lineWidth = 814;
	this.text_1.parent = this;
	this.text_1.setTransform(-338.1,53.15);

	this.bt1 = new lib.alter_V();
	this.bt1.name = "bt1";
	this.bt1.parent = this;
	this.bt1.setTransform(-379.35,-17.9);

	this.text_2 = new cjs.Text("São de propriedade exclusiva da EDP.", "19px 'EDP Preon'", "#333333");
	this.text_2.lineHeight = 25;
	this.text_2.lineWidth = 814;
	this.text_2.parent = this;
	this.text_2.setTransform(-338.1,-31.15);

	this.bt0 = new lib.alter_V();
	this.bt0.name = "bt0";
	this.bt0.parent = this;
	this.bt0.setTransform(-379.35,-102.2);

	this.text_3 = new cjs.Text("Posso divulgá-las, desde que não seja via redes sociais.", "19px 'EDP Preon'", "#333333");
	this.text_3.lineHeight = 25;
	this.text_3.lineWidth = 814;
	this.text_3.parent = this;
	this.text_3.setTransform(-338.1,-115.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.bt0},{t:this.text_2},{t:this.bt1},{t:this.text_1},{t:this.bt2},{t:this.text},{t:this.bt3}]}).wait(1));

	// Camada 4
	this.text_4 = new cjs.Text("Sobre as informações circulantes\nna EDP, é correto afirmar que:", "30px 'EDP Preon Hair'", "#333333");
	this.text_4.lineHeight = 41;
	this.text_4.lineWidth = 744;
	this.text_4.parent = this;
	this.text_4.setTransform(-275.45,-259.25);

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.desafio3, new cjs.Rectangle(-409.9,-261.2,887.9,583.3), null);


(lib.desafio2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		TweenMax.fromTo([this], .5, {	y: this.y + 50}, {	y: this.y,	ease: Back.easeOut.config(1.7)});
		
		_root.numQuest +=1;
		_root.stop();
		_desafio = this;
		this.erradosCount = 0
		this.tenta = 0;
		
		this.tentaMax = 1;
		this.respostas_correta = [true, false, false];
		
		
		this.mostraCerta = function () {
			/*for (var i = 0; i < btns.length; i++) {
				_desafio['bt' + i].gotoAndStop(_desafio.respostas_correta[i]);
			}*/
			_root.play();
		}
		this.reset = function () {
			for (var i = 0; i < btns.length; i++) {
				_desafio['bt' + i].gotoAndStop(0);
				_desafio['bt' + i].mouseEnabled = true;
			}
		}
		
		
		this.verifica = function () {
			_desafio.btnConferir.gotoAndStop(0);
			for (var i = 0; i < _desafio.respostas_correta.length; i++) {
				_desafio['bt' + i].mouseEnabled = false;
				if (_desafio['bt' + i].currentFrame != _desafio.respostas_correta[i]) {
					_desafio.erradosCount += 1;
				}
			}
			if (_desafio.erradosCount == 0) {
				_root.pontos += 1;
				_feed.destino = "certo";
			} else {
				_desafio.tenta += 1;
				console.log('tentativa:' + _desafio.tenta);
				if (_desafio.tenta < _desafio.tentaMax) {
					_feed.destino = "tentativa";
				} else {
					_feed.destino = "errado";
				}
			}
			_desafio.feed.gotoAndPlay(1);
		}
		
		
		var btns = new Array;
		for (var i = 0; i < _desafio.respostas_correta.length; i++) {
			_desafio['bt' + i].cursor = "pointer";
			btns.push(i);
		}
		for (var i = 0; i < btns.length; i++) {
			(function (index) {
				_desafio['bt' + btns[index]].addEventListener("click", function () {
					_desafio.reset();
					if (_desafio.btnConferir.currentFrame < 1) {
						_desafio.btnConferir.gotoAndPlay(1);
					}
					if (_desafio['bt' + index].currentFrame == 0) {
						_desafio['bt' + index].gotoAndStop(1);
					} else {
						_desafio['bt' + index].gotoAndStop(0);
					}
				})
			})(i);
		}
		function conferir() {
			_desafio.verifica();
		
		}
		this.btnConferir.addEventListener('click', conferir.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 5
	this.feed = new lib.feedBasico();
	this.feed.name = "feed";
	this.feed.parent = this;
	this.feed.setTransform(0.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.feed).wait(1));

	// Camada 3
	this.btnConferir = new lib.btnConferir();
	this.btnConferir.name = "btnConferir";
	this.btnConferir.parent = this;
	this.btnConferir.setTransform(45.6,189.6);

	this.timeline.addTween(cjs.Tween.get(this.btnConferir).wait(1));

	// Camada 1
	this.bt2 = new lib.alter_V();
	this.bt2.name = "bt2";
	this.bt2.parent = this;
	this.bt2.setTransform(-381.85,84.4);

	this.text = new cjs.Text("Ser filiado a um partido político.", "19px 'EDP Preon'", "#333333");
	this.text.lineHeight = 25;
	this.text.lineWidth = 804;
	this.text.parent = this;
	this.text.setTransform(-340.6,71.15);

	this.bt1 = new lib.alter_V();
	this.bt1.name = "bt1";
	this.bt1.parent = this;
	this.bt1.setTransform(-381.85,-0.1);

	this.text_1 = new cjs.Text("Solicitar mais de dois orçamentos para se decidir por uma contratação.", "19px 'EDP Preon'", "#333333");
	this.text_1.lineHeight = 25;
	this.text_1.lineWidth = 804;
	this.text_1.parent = this;
	this.text_1.setTransform(-340.6,-13.35);

	this.bt0 = new lib.alter_V();
	this.bt0.name = "bt0";
	this.bt0.parent = this;
	this.bt0.setTransform(-381.85,-84.55);

	this.text_2 = new cjs.Text("Indicar a empresa de um amigo para uma licitação.", "19px 'EDP Preon'", "#333333");
	this.text_2.lineHeight = 25;
	this.text_2.lineWidth = 804;
	this.text_2.parent = this;
	this.text_2.setTransform(-340.6,-97.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.bt0},{t:this.text_1},{t:this.bt1},{t:this.text},{t:this.bt2}]}).wait(1));

	// Camada 4
	this.text_3 = new cjs.Text("Em quais das situações abaixo é possível\nidentificar um conflito de interesse?", "30px 'EDP Preon Hair'", "#333333");
	this.text_3.lineHeight = 41;
	this.text_3.lineWidth = 805;
	this.text_3.parent = this;
	this.text_3.setTransform(-342.15,-240.25);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.desafio2, new cjs.Rectangle(-412.4,-242.2,877.4,491.29999999999995), null);


(lib.desafio1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		TweenMax.fromTo([this], .5, {	y: this.y + 50}, {	y: this.y,	ease: Back.easeOut.config(1.7)});
		
		_root.numQuest +=1;
		_root.stop();
		_desafio = this;
		this.erradosCount = 0
		this.tenta = 0;
		
		this.tentaMax = 1;
		this.respostas_correta = [false, true, false, false];
		
		
		this.mostraCerta = function () {
			/*for (var i = 0; i < btns.length; i++) {
				_desafio['bt' + i].gotoAndStop(_desafio.respostas_correta[i]);
			}*/
			_root.play();
		}
		this.reset = function () {
			for (var i = 0; i < btns.length; i++) {
				_desafio['bt' + i].gotoAndStop(0);
				_desafio['bt' + i].mouseEnabled = true;
			}
		}
		
		
		this.verifica = function () {
			_desafio.btnConferir.gotoAndStop(0);
			for (var i = 0; i < _desafio.respostas_correta.length; i++) {
				_desafio['bt' + i].mouseEnabled = false;
				if (_desafio['bt' + i].currentFrame != _desafio.respostas_correta[i]) {
					_desafio.erradosCount += 1;
				}
			}
			if (_desafio.erradosCount == 0) {
				_root.pontos += 1;
				_feed.destino = "certo";
			} else {
				_desafio.tenta += 1;
				console.log('tentativa:' + _desafio.tenta);
				if (_desafio.tenta < _desafio.tentaMax) {
					_feed.destino = "tentativa";
				} else {
					_feed.destino = "errado";
				}
			}
			_desafio.feed.gotoAndPlay(1);
		}
		
		
		var btns = new Array;
		for (var i = 0; i < _desafio.respostas_correta.length; i++) {
			_desafio['bt' + i].cursor = "pointer";
			btns.push(i);
		}
		for (var i = 0; i < btns.length; i++) {
			(function (index) {
				_desafio['bt' + btns[index]].addEventListener("click", function () {
					_desafio.reset();
					if (_desafio.btnConferir.currentFrame < 1) {
						_desafio.btnConferir.gotoAndPlay(1);
					}
					if (_desafio['bt' + index].currentFrame == 0) {
						_desafio['bt' + index].gotoAndStop(1);
					} else {
						_desafio['bt' + index].gotoAndStop(0);
					}
				})
			})(i);
		}
		function conferir() {
			_desafio.verifica();
		
		}
		this.btnConferir.addEventListener('click', conferir.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 5
	this.feed = new lib.feedBasico();
	this.feed.name = "feed";
	this.feed.parent = this;
	this.feed.setTransform(0.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.feed).wait(1));

	// Camada 3
	this.btnConferir = new lib.btnConferir();
	this.btnConferir.name = "btnConferir";
	this.btnConferir.parent = this;
	this.btnConferir.setTransform(45.6,262.6);

	this.timeline.addTween(cjs.Tween.get(this.btnConferir).wait(1));

	// Camada 1
	this.bt3 = new lib.alter_V();
	this.bt3.name = "bt3";
	this.bt3.parent = this;
	this.bt3.setTransform(-411.8,184.7);

	this.text = new cjs.Text("Está relacionado a órgãos reguladores externos da EDP e a auditorias que passamos, sem envolver o regulamento interno.", "19px 'EDP Preon'", "#333333");
	this.text.lineHeight = 25;
	this.text.lineWidth = 830;
	this.text.parent = this;
	this.text.setTransform(-370.55,159.05);

	this.bt2 = new lib.alter_V();
	this.bt2.name = "bt2";
	this.bt2.parent = this;
	this.bt2.setTransform(-411.85,89.1);

	this.text_1 = new cjs.Text("É a atividade que cuida das normas e regulamentos para assinatura de contratos internos e externos, mas não influencia nas demais atividades \nde trabalho.", "19px 'EDP Preon'", "#333333");
	this.text_1.lineHeight = 25;
	this.text_1.lineWidth = 830;
	this.text_1.parent = this;
	this.text_1.setTransform(-370.55,50.75);

	this.bt1 = new lib.alter_V();
	this.bt1.name = "bt1";
	this.bt1.parent = this;
	this.bt1.setTransform(-411.85,-6.55);

	this.text_2 = new cjs.Text("É a atividade de assegurar que as normas, regulamentos e as diretrizes da\nempresa estão sendo cumpridas, bem como estabelecer práticas para evitar,\ndetectar e tratar qualquer desvio ou inconformidade que possa ocorrer.", "19px 'EDP Preon'", "#333333");
	this.text_2.lineHeight = 25;
	this.text_2.lineWidth = 830;
	this.text_2.parent = this;
	this.text_2.setTransform(-370.55,-44.9);

	this.bt0 = new lib.alter_V();
	this.bt0.name = "bt0";
	this.bt0.parent = this;
	this.bt0.setTransform(-411.8,-102.2);

	this.text_3 = new cjs.Text("É um conjunto de normas que muda em cada departamento ou unidade e tem o objetivo de indicar procedimentos mais seguros.", "19px 'EDP Preon'", "#333333");
	this.text_3.lineHeight = 25;
	this.text_3.lineWidth = 830;
	this.text_3.parent = this;
	this.text_3.setTransform(-370.55,-127.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.bt0},{t:this.text_2},{t:this.bt1},{t:this.text_1},{t:this.bt2},{t:this.text},{t:this.bt3}]}).wait(1));

	// Camada 4
	this.text_4 = new cjs.Text("Qual das alternativas abaixo traz a\ndefinição mais correta para Compliance?", "30px 'EDP Preon Hair'", "#333333");
	this.text_4.lineHeight = 41;
	this.text_4.lineWidth = 809;
	this.text_4.parent = this;
	this.text_4.setTransform(-341.95,-259.25);

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.desafio1, new cjs.Rectangle(-442.4,-261.2,911.4,583.3), null);


(lib.woman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gravata
	this.instance = new lib.gravatacopy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(114.6,239.35,1,1,0,0,0,76,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:235.15},19,cjs.Ease.get(1)).to({y:239.35},20,cjs.Ease.get(1)).to({y:235.15},20,cjs.Ease.get(1)).to({y:239.35},20,cjs.Ease.get(1)).to({y:235.15},20,cjs.Ease.get(1)).to({y:239.35},20,cjs.Ease.get(1)).to({regX:76.2,scaleX:0.9976,scaleY:1.0029,skewX:4.3907,skewY:2.5494,x:117.9,y:238.8},10,cjs.Ease.get(1)).to({regX:76,scaleX:1,scaleY:1,skewX:0,skewY:0,x:114.6,y:239.35},6,cjs.Ease.get(-1)).to({regX:76.1,regY:40.2,scaleX:1.0008,scaleY:0.9993,skewX:-1.6432,skewY:-2.2204,x:113.4,y:236.5},6,cjs.Ease.get(1)).to({regX:76,regY:40.1,scaleX:1,scaleY:1,skewX:0,skewY:0,x:114.6,y:239.35},9,cjs.Ease.get(-1)).wait(1).to({startPosition:0},0).to({y:235.15},19,cjs.Ease.get(1)).to({y:239.35},20,cjs.Ease.get(1)).to({y:235.15},20,cjs.Ease.get(1)).to({y:239.35},20,cjs.Ease.get(1)).to({y:235.15},20,cjs.Ease.get(1)).to({y:239.35},20,cjs.Ease.get(1)).to({regX:76.1,regY:40.2,scaleX:0.9989,scaleY:1.0011,skewX:-2.7553,skewY:-2.2255,x:112.25,y:236.45},9,cjs.Ease.get(1)).to({regX:76,regY:40.1,scaleX:1,scaleY:1,skewX:0,skewY:0,x:114.6,y:239.35},5,cjs.Ease.get(-1)).to({scaleX:1.001,skewY:2.5224,y:233.9},6,cjs.Ease.get(1)).to({scaleX:1,skewY:0,y:239.35},9,cjs.Ease.get(1)).wait(1));

	// leg
	this.instance_1 = new lib.legcopy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(114.65,300.2,1,1,0,0,0,71.8,32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},19,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({scaleY:0.935,y:302.35},10,cjs.Ease.get(1)).to({scaleY:1,y:300.2},6,cjs.Ease.get(-1)).to({startPosition:0},6,cjs.Ease.get(1)).to({startPosition:0},9,cjs.Ease.get(-1)).wait(1).to({startPosition:0},0).to({startPosition:0},19,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},9,cjs.Ease.get(1)).to({startPosition:0},5,cjs.Ease.get(-1)).to({startPosition:0},6,cjs.Ease.get(1)).to({startPosition:0},9,cjs.Ease.get(1)).wait(1));

	// hair
	this.instance_2 = new lib.haircopy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(95.65,59,1,1,0,0,0,23.6,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:56.2},19,cjs.Ease.get(1)).to({y:59},20,cjs.Ease.get(1)).to({y:56.2},20,cjs.Ease.get(1)).to({y:59},20,cjs.Ease.get(1)).to({y:56.2},20,cjs.Ease.get(1)).to({y:59},20,cjs.Ease.get(1)).to({regX:23.7,scaleX:1.0005,skewX:12.1837,skewY:14.0006,x:114.85,y:58.7},10,cjs.Ease.get(1)).to({regX:23.6,scaleX:1,skewX:0,skewY:0,x:95.65,y:59},6,cjs.Ease.get(-1)).to({regX:23.7,regY:59.1,scaleX:1.0012,skewX:-9.9484,skewY:-12.7175,x:82.05,y:51.65},6,cjs.Ease.get(1)).to({regX:23.6,regY:59,scaleX:1,skewX:0,skewY:0,x:95.65,y:59},9,cjs.Ease.get(-1)).wait(1).to({startPosition:0},0).to({y:56.2},19,cjs.Ease.get(1)).to({y:59},20,cjs.Ease.get(1)).to({y:56.2},20,cjs.Ease.get(1)).to({y:59},20,cjs.Ease.get(1)).to({y:56.2},20,cjs.Ease.get(1)).to({y:59},20,cjs.Ease.get(1)).to({regY:59.1,rotation:-6.4394,x:83.25,y:58.2},9,cjs.Ease.get(1)).to({regY:59,rotation:0,x:95.65,y:59},5,cjs.Ease.get(-1)).to({rotation:3.9539,x:106.35,y:49.5},6,cjs.Ease.get(1)).to({rotation:0,x:95.65,y:59},9,cjs.Ease.get(1)).wait(1));

	// arm2
	this.instance_3 = new lib.arm2copy("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(34,252.2,1,1,0,0,0,34,47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-3.9794,x:34.55,y:248.9},19,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},20,cjs.Ease.get(1)).to({rotation:-3.9794,x:34.55,y:248.9},20,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},20,cjs.Ease.get(1)).to({rotation:-3.9794,x:34.55,y:248.9},20,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},20,cjs.Ease.get(1)).to({regY:47.9,rotation:5.9664,x:33.6,y:248.65},10,cjs.Ease.get(1)).to({regY:47.8,rotation:0,x:34,y:252.2},6,cjs.Ease.get(-1)).to({rotation:-4.466,x:36.4,y:255.4},6,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},9,cjs.Ease.get(-1)).wait(1).to({startPosition:0},0).to({rotation:-3.9794,x:34.55,y:248.9},19,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},20,cjs.Ease.get(1)).to({rotation:-3.9794,x:34.55,y:248.9},20,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},20,cjs.Ease.get(1)).to({rotation:-3.9794,x:34.55,y:248.9},20,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},20,cjs.Ease.get(1)).to({rotation:-4.466,x:34.3,y:257.5},9,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},5,cjs.Ease.get(-1)).to({rotation:3.7051,x:30.95,y:242.9},6,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},9,cjs.Ease.get(1)).wait(1));

	// arm1
	this.instance_4 = new lib.arm1copy("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(191.7,252.2,1,1,0,0,0,34,47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:4.6957,x:194.7,y:249.25},19,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},20,cjs.Ease.get(1)).to({rotation:4.6957,x:194.7,y:249.25},20,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},20,cjs.Ease.get(1)).to({rotation:4.6957,x:194.7,y:249.25},20,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},20,cjs.Ease.get(1)).to({regX:34.1,rotation:7.4549,x:196.35,y:258},10,cjs.Ease.get(1)).to({regX:34,rotation:0,x:191.7,y:252.2},6,cjs.Ease.get(-1)).to({rotation:-4.4431,x:196,y:244.5},6,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},9,cjs.Ease.get(-1)).wait(1).to({startPosition:0},0).to({rotation:4.6957,x:194.7,y:249.25},19,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},20,cjs.Ease.get(1)).to({rotation:4.6957,x:194.7,y:249.25},20,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},20,cjs.Ease.get(1)).to({rotation:4.6957,x:194.7,y:249.25},20,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},20,cjs.Ease.get(1)).to({rotation:-4.7062,x:195.5,y:247.15},9,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},5,cjs.Ease.get(-1)).to({rotation:4.2116,x:193.7,y:255.25},6,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},9,cjs.Ease.get(1)).wait(1));

	// face
	this.kbeca = new lib.facecopy();
	this.kbeca.name = "kbeca";
	this.kbeca.parent = this;
	this.kbeca.setTransform(114.6,140.2,1,1,0,0,0,72.2,81.2);

	this.instance_5 = new lib.facecopy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(114.6,140.2,1,1,0,0,0,72.2,81.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.kbeca).to({y:137.4},19,cjs.Ease.get(1)).to({y:140.2},20,cjs.Ease.get(1)).to({y:137.4},20,cjs.Ease.get(1)).to({y:140.2},20,cjs.Ease.get(1)).to({y:137.4},20,cjs.Ease.get(1)).to({y:140.2},20,cjs.Ease.get(1)).to({regX:72.3,rotation:4.9756,x:126.85,y:140.45},10,cjs.Ease.get(1)).to({regX:72.2,rotation:0,x:114.6,y:140.2},6,cjs.Ease.get(-1)).to({rotation:-3.9917,x:107.95,y:133.35},6,cjs.Ease.get(1)).to({rotation:0,x:114.6,y:140.2},9,cjs.Ease.get(-1)).wait(1).to({y:137.4},19,cjs.Ease.get(1)).to({_off:true,y:140.2},20,cjs.Ease.get(1)).to({_off:false,y:137.4},20,cjs.Ease.get(1)).to({y:140.2},20,cjs.Ease.get(1)).to({y:137.4},20,cjs.Ease.get(1)).to({y:140.2},20,cjs.Ease.get(1)).to({regX:72.3,regY:81.4,rotation:-3.2277,x:106.9,y:138.3},9,cjs.Ease.get(1)).to({regX:72.2,regY:81.2,rotation:0,x:114.6,y:140.2},5,cjs.Ease.get(-1)).to({regX:72.5,regY:81.3,rotation:3.9539,x:119.95,y:131.85},6,cjs.Ease.get(1)).to({regX:72.2,regY:81.2,rotation:0,x:114.6,y:140.2},9,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(170).to({_off:false},20,cjs.Ease.get(1)).to({_off:true,y:137.4},20,cjs.Ease.get(1)).wait(90));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("ArfBGQgoAAgbgVQgdgUAAgdQAAgcAdgVQAbgUAoAAIW/AAQAnAAAdAUQAcAVAAAcQAAAdgcAUQgdAVgnAAg");
	this.shape.setTransform(115.05,345.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-9.6,271,361.8);


(lib.man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// foot1
	this.instance = new lib.foot1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(161.2,337.7,1,1,0,0,0,35,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},19,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},10,cjs.Ease.get(1)).to({startPosition:0},6,cjs.Ease.get(-1)).to({startPosition:0},6,cjs.Ease.get(1)).to({startPosition:0},9,cjs.Ease.get(-1)).wait(1).to({startPosition:0},0).to({startPosition:0},19,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},9,cjs.Ease.get(1)).to({startPosition:0},5,cjs.Ease.get(-1)).to({startPosition:0},6,cjs.Ease.get(1)).to({startPosition:0},9,cjs.Ease.get(1)).wait(1));

	// foot2
	this.instance_1 = new lib.foot2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.05,337.7,1,1,0,0,0,35,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},19,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},10,cjs.Ease.get(1)).to({startPosition:0},6,cjs.Ease.get(-1)).to({startPosition:0},6,cjs.Ease.get(1)).to({startPosition:0},9,cjs.Ease.get(-1)).wait(1).to({startPosition:0},0).to({startPosition:0},19,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},9,cjs.Ease.get(1)).to({startPosition:0},5,cjs.Ease.get(-1)).to({startPosition:0},6,cjs.Ease.get(1)).to({startPosition:0},9,cjs.Ease.get(1)).wait(1));

	// gravata
	this.instance_2 = new lib.gravata("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(114.6,239.35,1,1,0,0,0,76,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:235.15},19,cjs.Ease.get(1)).to({y:239.35},20,cjs.Ease.get(1)).to({y:235.15},20,cjs.Ease.get(1)).to({y:239.35},20,cjs.Ease.get(1)).to({y:235.15},20,cjs.Ease.get(1)).to({y:239.35},20,cjs.Ease.get(1)).to({regX:76.2,scaleX:0.9976,scaleY:1.0029,skewX:4.3907,skewY:2.5494,x:117.9,y:238.8},10,cjs.Ease.get(1)).to({regX:76,scaleX:1,scaleY:1,skewX:0,skewY:0,x:114.6,y:239.35},6,cjs.Ease.get(-1)).to({regX:76.1,regY:40.2,scaleX:1.0008,scaleY:0.9993,skewX:-1.6432,skewY:-2.2204,x:113.4,y:236.5},6,cjs.Ease.get(1)).to({regX:76,regY:40.1,scaleX:1,scaleY:1,skewX:0,skewY:0,x:114.6,y:239.35},9,cjs.Ease.get(-1)).wait(1).to({startPosition:0},0).to({y:235.15},19,cjs.Ease.get(1)).to({y:239.35},20,cjs.Ease.get(1)).to({y:235.15},20,cjs.Ease.get(1)).to({y:239.35},20,cjs.Ease.get(1)).to({y:235.15},20,cjs.Ease.get(1)).to({y:239.35},20,cjs.Ease.get(1)).to({regX:76.1,regY:40.2,scaleX:0.9989,scaleY:1.0011,skewX:-2.7553,skewY:-2.2255,x:112.25,y:236.45},9,cjs.Ease.get(1)).to({regX:76,regY:40.1,scaleX:1,scaleY:1,skewX:0,skewY:0,x:114.6,y:239.35},5,cjs.Ease.get(-1)).to({scaleX:1.001,skewY:2.5224,y:233.9},6,cjs.Ease.get(1)).to({scaleX:1,skewY:0,y:239.35},9,cjs.Ease.get(1)).wait(1));

	// leg
	this.instance_3 = new lib.leg("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(114.65,300.2,1,1,0,0,0,71.8,32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},19,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({scaleY:0.935,y:302.35},10,cjs.Ease.get(1)).to({scaleY:1,y:300.2},6,cjs.Ease.get(-1)).to({startPosition:0},6,cjs.Ease.get(1)).to({startPosition:0},9,cjs.Ease.get(-1)).wait(1).to({startPosition:0},0).to({startPosition:0},19,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({startPosition:0},9,cjs.Ease.get(1)).to({startPosition:0},5,cjs.Ease.get(-1)).to({startPosition:0},6,cjs.Ease.get(1)).to({startPosition:0},9,cjs.Ease.get(1)).wait(1));

	// face
	this.kbeca = new lib.face();
	this.kbeca.name = "kbeca";
	this.kbeca.parent = this;
	this.kbeca.setTransform(114.6,140.2,1,1,0,0,0,72.2,81.2);

	this.timeline.addTween(cjs.Tween.get(this.kbeca).to({y:137.4},19,cjs.Ease.get(1)).to({y:140.2},20,cjs.Ease.get(1)).to({y:137.4},20,cjs.Ease.get(1)).to({y:140.2},20,cjs.Ease.get(1)).to({y:137.4},20,cjs.Ease.get(1)).to({y:140.2},20,cjs.Ease.get(1)).to({regX:72.3,rotation:4.9756,x:126.85,y:140.45},10,cjs.Ease.get(1)).to({regX:72.2,rotation:0,x:114.6,y:140.2},6,cjs.Ease.get(-1)).to({rotation:-3.9917,x:107.95,y:133.35},6,cjs.Ease.get(1)).to({rotation:0,x:114.6,y:140.2},9,cjs.Ease.get(-1)).wait(1).to({y:137.4},19,cjs.Ease.get(1)).to({y:140.2},20,cjs.Ease.get(1)).to({y:137.4},20,cjs.Ease.get(1)).to({y:140.2},20,cjs.Ease.get(1)).to({y:137.4},20,cjs.Ease.get(1)).to({y:140.2},20,cjs.Ease.get(1)).to({regX:72.3,regY:81.4,rotation:-3.2277,x:106.9,y:138.3},9,cjs.Ease.get(1)).to({regX:72.2,regY:81.2,rotation:0,x:114.6,y:140.2},5,cjs.Ease.get(-1)).to({regX:72.5,regY:81.3,rotation:3.9539,x:119.95,y:131.85},6,cjs.Ease.get(1)).to({regX:72.2,regY:81.2,rotation:0,x:114.6,y:140.2},9,cjs.Ease.get(1)).wait(1));

	// hair
	this.instance_4 = new lib.hair("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(95.65,59,1,1,0,0,0,23.6,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:56.2},19,cjs.Ease.get(1)).to({y:59},20,cjs.Ease.get(1)).to({y:56.2},20,cjs.Ease.get(1)).to({y:59},20,cjs.Ease.get(1)).to({y:56.2},20,cjs.Ease.get(1)).to({y:59},20,cjs.Ease.get(1)).to({regX:23.7,scaleX:1.0005,skewX:12.1837,skewY:14.0006,x:114.85,y:58.7},10,cjs.Ease.get(1)).to({regX:23.6,scaleX:1,skewX:0,skewY:0,x:95.65,y:59},6,cjs.Ease.get(-1)).to({regX:23.7,regY:59.1,scaleX:1.0012,skewX:-9.9484,skewY:-12.7175,x:82.05,y:51.65},6,cjs.Ease.get(1)).to({regX:23.6,regY:59,scaleX:1,skewX:0,skewY:0,x:95.65,y:59},9,cjs.Ease.get(-1)).wait(1).to({startPosition:0},0).to({y:56.2},19,cjs.Ease.get(1)).to({y:59},20,cjs.Ease.get(1)).to({y:56.2},20,cjs.Ease.get(1)).to({y:59},20,cjs.Ease.get(1)).to({y:56.2},20,cjs.Ease.get(1)).to({y:59},20,cjs.Ease.get(1)).to({regY:59.1,rotation:-6.4394,x:83.25,y:58.2},9,cjs.Ease.get(1)).to({regY:59,rotation:0,x:95.65,y:59},5,cjs.Ease.get(-1)).to({rotation:3.9539,x:106.35,y:49.5},6,cjs.Ease.get(1)).to({rotation:0,x:95.65,y:59},9,cjs.Ease.get(1)).wait(1));

	// arm2
	this.instance_5 = new lib.arm2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(34,252.2,1,1,0,0,0,34,47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-3.9794,x:34.55,y:248.9},19,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},20,cjs.Ease.get(1)).to({rotation:-3.9794,x:34.55,y:248.9},20,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},20,cjs.Ease.get(1)).to({rotation:-3.9794,x:34.55,y:248.9},20,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},20,cjs.Ease.get(1)).to({regY:47.9,rotation:5.9664,x:33.6,y:248.65},10,cjs.Ease.get(1)).to({regY:47.8,rotation:0,x:34,y:252.2},6,cjs.Ease.get(-1)).to({rotation:-4.466,x:36.4,y:255.4},6,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},9,cjs.Ease.get(-1)).wait(1).to({startPosition:0},0).to({rotation:-3.9794,x:34.55,y:248.9},19,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},20,cjs.Ease.get(1)).to({rotation:-3.9794,x:34.55,y:248.9},20,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},20,cjs.Ease.get(1)).to({rotation:-3.9794,x:34.55,y:248.9},20,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},20,cjs.Ease.get(1)).to({rotation:-4.466,x:34.3,y:257.5},9,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},5,cjs.Ease.get(-1)).to({rotation:3.7051,x:30.95,y:242.9},6,cjs.Ease.get(1)).to({rotation:0,x:34,y:252.2},9,cjs.Ease.get(1)).wait(1));

	// arm1
	this.instance_6 = new lib.arm1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(191.7,252.2,1,1,0,0,0,34,47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:4.6957,x:194.7,y:249.25},19,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},20,cjs.Ease.get(1)).to({rotation:4.6957,x:194.7,y:249.25},20,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},20,cjs.Ease.get(1)).to({rotation:4.6957,x:194.7,y:249.25},20,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},20,cjs.Ease.get(1)).to({regX:34.1,rotation:7.4549,x:196.35,y:258},10,cjs.Ease.get(1)).to({regX:34,rotation:0,x:191.7,y:252.2},6,cjs.Ease.get(-1)).to({rotation:-4.4431,x:196,y:244.5},6,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},9,cjs.Ease.get(-1)).wait(1).to({startPosition:0},0).to({rotation:4.6957,x:194.7,y:249.25},19,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},20,cjs.Ease.get(1)).to({rotation:4.6957,x:194.7,y:249.25},20,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},20,cjs.Ease.get(1)).to({rotation:4.6957,x:194.7,y:249.25},20,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},20,cjs.Ease.get(1)).to({rotation:-4.7062,x:195.5,y:247.15},9,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},5,cjs.Ease.get(-1)).to({rotation:4.2116,x:193.7,y:255.25},6,cjs.Ease.get(1)).to({rotation:0,x:191.7,y:252.2},9,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("Ar2BIQgpAAgdgWQgdgUAAgeIAAAAQAAgdAdgVQAdgVApAAIXtAAQApAAAeAVQAcAVAAAdIAAAAQAAAegcAUQgeAWgpAAg");
	this.shape.setTransform(114.2,344.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-40.3,283.7,391.6);


(lib.showAvatarHolograma2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible =false;
	}
	this.frame_1 = function() {
		this.visible =true;
	}
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(29).call(this.frame_30).wait(1));

	// Layer_1
	this.corpo = new lib.woman();
	this.corpo.name = "corpo";
	this.corpo.parent = this;
	this.corpo.setTransform(10.4,414.45,1.202,1.202,0,0,0,124,344.8);

	this.timeline.addTween(cjs.Tween.get(this.corpo).wait(1).to({regX:124.9,regY:345.6,scaleX:0.012,scaleY:0.012,x:10.45,y:414.4},0).wait(8).to({regX:124,regY:344.8,scaleX:0.9616,scaleY:1.4424,y:414.45},10,cjs.Ease.get(-1)).to({scaleX:1.202,scaleY:1.202,x:10.4},10,cjs.Ease.quadInOut).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.3,-46.8,283.70000000000005,471.90000000000003);


(lib.showAvatarHolograma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible =false;
	}
	this.frame_1 = function() {
		this.visible =true;
	}
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(29).call(this.frame_30).wait(1));

	// Layer_1
	this.corpo = new lib.man();
	this.corpo.name = "corpo";
	this.corpo.parent = this;
	this.corpo.setTransform(10.4,414.45,1.202,1.202,0,0,0,124,344.8);

	this.timeline.addTween(cjs.Tween.get(this.corpo).wait(1).to({regX:124.9,regY:345.6,scaleX:0.012,scaleY:0.012,x:10.45,y:414.4},0).wait(8).to({regX:124,regY:344.8,scaleX:0.9616,scaleY:1.4424,y:414.45},10,cjs.Ease.get(-1)).to({scaleX:1.202,scaleY:1.202,x:10.4},10,cjs.Ease.quadInOut).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.6,-82.9,299.4,506.79999999999995);


// stage content:
(lib.edp_compliance34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{reprov:130,aprov:162});

	// timeline functions:
	this.frame_0 = function() {
		window._root = this;
		stage.enableMouseOver();
		this.pontos = 0;
		this.numQuest = 0;
	}
	this.frame_120 = function() {
		this.notaFinal = Math.round(_root.pontos / _root.numQuest * 100);
		console.log('pontos:'+_root.pontos);
		console.log('numQuest:'+_root.numQuest);
		Player.setNota(_root.notaFinal);
		
		this.stop();
		if (this.notaFinal < 70) {
			_root.gotoAndPlay('reprov');
		
		} else {
			_root.gotoAndPlay('aprov');
		}
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_162 = function() {
		Player.onPageDone();
	}
	this.frame_226 = function() {
		//this.stop();
		//Player.NextPage();
	}
	this.frame_270 = function() {
		Player.setPlayAudio({
		   file:"comp_36.mp3", 
		   onStart:function(){ 
		      _root.stop();	
			   _root.moco.corpo.kbeca.boca.gotoAndStop(1);
		   },
		   onComplete:function(){
		      //_root.play();
			   _root.moco.corpo.kbeca.boca.gotoAndStop(0);
		   }
		});
	}
	this.frame_271 = function() {
		_root.moco.corpo.kbeca.boca.gotoAndStop(0);
		Player.stopAllAudio();
	}
	this.frame_284 = function() {
		Player.setPlayAudio({
		   file:"comp_34.mp3", 
		   onStart:function(){ 
		      //_root.stop();	
			   _root.moca.corpo.kbeca.boca.gotoAndStop(1);
		   },
		   onComplete:function(){
		     // _root.play();
			   _root.moca.corpo.kbeca.boca.gotoAndStop(0);
		   }
		});
	}
	this.frame_288 = function() {
		this.stop();
		Player.onPageDone();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120).call(this.frame_120).wait(39).call(this.frame_159).wait(3).call(this.frame_162).wait(64).call(this.frame_226).wait(44).call(this.frame_270).wait(1).call(this.frame_271).wait(13).call(this.frame_284).wait(4).call(this.frame_288).wait(1));

	// Layer_5
	this.instance = new lib.btnSeguir();
	this.instance.parent = this;
	this.instance.setTransform(784.2,530.05,0.8047,0.8047,0,0,0,25.6,27.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(194).to({_off:false},0).to({_off:true},1).wait(75).to({_off:false,x:618.1,y:164.65},0).to({_off:true},1).wait(18));

	// Layer_11
	this.botao = new lib.Symbol7();
	this.botao.name = "botao";
	this.botao.parent = this;
	this.botao.setTransform(512,524.95);

	this.instance_1 = new lib.__balaocopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(363.45,206.2,1,1,0,0,0,68.4,29.4);

	this.instance_2 = new lib.__balaocopy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(742.95,275.2,1,1,0,0,0,68.4,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.botao}]},194).to({state:[]},1).to({state:[{t:this.instance_1}]},62).to({state:[]},14).to({state:[{t:this.instance_2}]},1).wait(17));

	// Layer_12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_226 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_227 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_228 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_229 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_230 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_231 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_232 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_233 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_234 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_235 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_236 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_237 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_238 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_239 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_240 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_241 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_242 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_243 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_244 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_245 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_246 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_247 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_248 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_249 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_250 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_251 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_252 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_253 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_254 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_255 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(226).to({graphics:mask_graphics_226,x:-977.975,y:313.1}).wait(1).to({graphics:mask_graphics_227,x:-889.4657,y:313.1}).wait(1).to({graphics:mask_graphics_228,x:-804.062,y:313.1}).wait(1).to({graphics:mask_graphics_229,x:-721.7639,y:313.1}).wait(1).to({graphics:mask_graphics_230,x:-642.5714,y:313.1}).wait(1).to({graphics:mask_graphics_231,x:-566.4845,y:313.1}).wait(1).to({graphics:mask_graphics_232,x:-493.5032,y:313.1}).wait(1).to({graphics:mask_graphics_233,x:-423.6274,y:313.1}).wait(1).to({graphics:mask_graphics_234,x:-356.8573,y:313.1}).wait(1).to({graphics:mask_graphics_235,x:-293.1927,y:313.1}).wait(1).to({graphics:mask_graphics_236,x:-232.6337,y:313.1}).wait(1).to({graphics:mask_graphics_237,x:-175.1804,y:313.1}).wait(1).to({graphics:mask_graphics_238,x:-120.8326,y:313.1}).wait(1).to({graphics:mask_graphics_239,x:-69.5903,y:313.1}).wait(1).to({graphics:mask_graphics_240,x:-21.4537,y:313.1}).wait(1).to({graphics:mask_graphics_241,x:23.5773,y:313.1}).wait(1).to({graphics:mask_graphics_242,x:65.5028,y:313.1}).wait(1).to({graphics:mask_graphics_243,x:104.3226,y:313.1}).wait(1).to({graphics:mask_graphics_244,x:140.0369,y:313.1}).wait(1).to({graphics:mask_graphics_245,x:172.6456,y:313.1}).wait(1).to({graphics:mask_graphics_246,x:202.1487,y:313.1}).wait(1).to({graphics:mask_graphics_247,x:228.5462,y:313.1}).wait(1).to({graphics:mask_graphics_248,x:251.8381,y:313.1}).wait(1).to({graphics:mask_graphics_249,x:272.0244,y:313.1}).wait(1).to({graphics:mask_graphics_250,x:289.1051,y:313.1}).wait(1).to({graphics:mask_graphics_251,x:303.0803,y:313.1}).wait(1).to({graphics:mask_graphics_252,x:313.9499,y:313.1}).wait(1).to({graphics:mask_graphics_253,x:321.7138,y:313.1}).wait(1).to({graphics:mask_graphics_254,x:326.3722,y:313.1}).wait(1).to({graphics:mask_graphics_255,x:327.925,y:313.1}).wait(1).to({graphics:null,x:0,y:0}).wait(33));

	// Layer_13
	this.moca = new lib.showAvatarHolograma2();
	this.moca.name = "moca";
	this.moca.parent = this;
	this.moca.setTransform(485.15,121.85,1.1299,1.1299,0,0,180,0,0.1);
	this.moca._off = true;

	var maskedShapeInstanceList = [this.moca];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.moca).wait(231).to({_off:false},0).wait(1).to({regX:6.8,regY:164.2,x:486.35,y:307.2},0).wait(1).to({x:497.15},0).wait(1).to({x:509.8},0).wait(1).to({x:524.35},0).wait(1).to({x:540.7},0).wait(1).to({x:558.8},0).wait(1).to({x:578.25},0).wait(1).to({x:598.8},0).wait(1).to({x:619.85},0).wait(1).to({x:640.9},0).wait(1).to({x:661.5},0).wait(1).to({x:681.1},0).wait(1).to({x:699.4},0).wait(1).to({x:716.15},0).wait(1).to({x:731.15},0).wait(1).to({x:744.4},0).wait(1).to({x:755.95},0).wait(1).to({x:765.75},0).wait(1).to({x:774},0).wait(1).to({x:780.7},0).wait(1).to({x:786},0).wait(1).to({x:789.95},0).wait(1).to({x:792.7},0).wait(1).to({regX:0,regY:0,x:802.1,y:121.8},0).wait(34));

	// Layer_14
	this.moco = new lib.showAvatarHolograma();
	this.moco.name = "moco";
	this.moco.parent = this;
	this.moco.setTransform(33.45,361.4,1.1299,1.1299,0,0,0,149.6,211);
	this.moco._off = true;

	var maskedShapeInstanceList = [this.moco];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.moco).wait(226).to({_off:false},0).to({x:370.4},29,cjs.Ease.quadInOut).wait(34));

	// Layer_15
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-102,314);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(226).to({_off:false},0).to({x:-28,y:311.5},29,cjs.Ease.get(1)).wait(34));

	// Layer_4
	this.instance_4 = new lib.desafio1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(512,298.4);

	this.instance_5 = new lib.desafio2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(512,298.4);

	this.instance_6 = new lib.desafio3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(512,298.4);

	this.instance_7 = new lib.desafio4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(512,298.4);

	this.instance_8 = new lib.desafio5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(512,298.4);

	this.instance_9 = new lib.desafio6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(512,298.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},30).to({state:[]},14).to({state:[{t:this.instance_5}]},1).to({state:[]},14).to({state:[{t:this.instance_6}]},1).to({state:[]},14).to({state:[{t:this.instance_7}]},1).to({state:[]},14).to({state:[{t:this.instance_8}]},1).to({state:[]},14).to({state:[{t:this.instance_9}]},1).to({state:[]},14).wait(170));

	// Layer_1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_1 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_2 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_3 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_4 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_5 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_6 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_16 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_17 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_20 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_23 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_25 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_26 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_29 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_196 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_197 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_198 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_199 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_200 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_201 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_202 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_203 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_204 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_205 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_206 = new cjs.Graphics().p("EicGA9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_207 = new cjs.Graphics().p("EiW1A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_208 = new cjs.Graphics().p("EiREA9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_1_graphics_209 = new cjs.Graphics().p("EiKyA9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_210 = new cjs.Graphics().p("EiEBA9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_1_graphics_211 = new cjs.Graphics().p("Eh83A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_212 = new cjs.Graphics().p("Eh2GA9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_1_graphics_213 = new cjs.Graphics().p("Ehv0A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_214 = new cjs.Graphics().p("EhqDA9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_1_graphics_215 = new cjs.Graphics().p("EhkyA9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_1_graphics_216 = new cjs.Graphics().p("EhgAA9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_217 = new cjs.Graphics().p("EhbvA9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_218 = new cjs.Graphics().p("EhX/A9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_1_graphics_219 = new cjs.Graphics().p("EhUuA9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_1_graphics_220 = new cjs.Graphics().p("EhR9A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_221 = new cjs.Graphics().p("EhPtA9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_1_graphics_222 = new cjs.Graphics().p("EhN8A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_1_graphics_223 = new cjs.Graphics().p("EhMsA9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_1_graphics_224 = new cjs.Graphics().p("EhL8A9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_1_graphics_225 = new cjs.Graphics().p("EhLsA9vMAy9h7dMEG1AAAMgy9B7dg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-977.975,y:313.1}).wait(1).to({graphics:mask_1_graphics_1,x:-889.4657,y:313.1}).wait(1).to({graphics:mask_1_graphics_2,x:-804.062,y:313.1}).wait(1).to({graphics:mask_1_graphics_3,x:-721.7639,y:313.1}).wait(1).to({graphics:mask_1_graphics_4,x:-642.5714,y:313.1}).wait(1).to({graphics:mask_1_graphics_5,x:-566.4845,y:313.1}).wait(1).to({graphics:mask_1_graphics_6,x:-493.5032,y:313.1}).wait(1).to({graphics:mask_1_graphics_7,x:-423.6274,y:313.1}).wait(1).to({graphics:mask_1_graphics_8,x:-356.8573,y:313.1}).wait(1).to({graphics:mask_1_graphics_9,x:-293.1927,y:313.1}).wait(1).to({graphics:mask_1_graphics_10,x:-232.6337,y:313.1}).wait(1).to({graphics:mask_1_graphics_11,x:-175.1804,y:313.1}).wait(1).to({graphics:mask_1_graphics_12,x:-120.8326,y:313.1}).wait(1).to({graphics:mask_1_graphics_13,x:-69.5903,y:313.1}).wait(1).to({graphics:mask_1_graphics_14,x:-21.4537,y:313.1}).wait(1).to({graphics:mask_1_graphics_15,x:23.5773,y:313.1}).wait(1).to({graphics:mask_1_graphics_16,x:65.5028,y:313.1}).wait(1).to({graphics:mask_1_graphics_17,x:104.3226,y:313.1}).wait(1).to({graphics:mask_1_graphics_18,x:140.0369,y:313.1}).wait(1).to({graphics:mask_1_graphics_19,x:172.6456,y:313.1}).wait(1).to({graphics:mask_1_graphics_20,x:202.1487,y:313.1}).wait(1).to({graphics:mask_1_graphics_21,x:228.5462,y:313.1}).wait(1).to({graphics:mask_1_graphics_22,x:251.8381,y:313.1}).wait(1).to({graphics:mask_1_graphics_23,x:272.0244,y:313.1}).wait(1).to({graphics:mask_1_graphics_24,x:289.1051,y:313.1}).wait(1).to({graphics:mask_1_graphics_25,x:303.0803,y:313.1}).wait(1).to({graphics:mask_1_graphics_26,x:313.9499,y:313.1}).wait(1).to({graphics:mask_1_graphics_27,x:321.7138,y:313.1}).wait(1).to({graphics:mask_1_graphics_28,x:326.3722,y:313.1}).wait(1).to({graphics:mask_1_graphics_29,x:327.925,y:313.1}).wait(1).to({graphics:null,x:0,y:0}).wait(166).to({graphics:mask_1_graphics_196,x:692.925,y:313.1}).wait(1).to({graphics:mask_1_graphics_197,x:696.1367,y:313.1}).wait(1).to({graphics:mask_1_graphics_198,x:705.7716,y:313.1}).wait(1).to({graphics:mask_1_graphics_199,x:721.8299,y:313.1}).wait(1).to({graphics:mask_1_graphics_200,x:744.3114,y:313.1}).wait(1).to({graphics:mask_1_graphics_201,x:773.2163,y:313.1}).wait(1).to({graphics:mask_1_graphics_202,x:808.5445,y:313.1}).wait(1).to({graphics:mask_1_graphics_203,x:850.296,y:313.1}).wait(1).to({graphics:mask_1_graphics_204,x:898.4708,y:313.1}).wait(1).to({graphics:mask_1_graphics_205,x:953.0689,y:313.1}).wait(1).to({graphics:mask_1_graphics_206,x:1009.1076,y:313.1}).wait(1).to({graphics:mask_1_graphics_207,x:1042.83,y:313.1}).wait(1).to({graphics:mask_1_graphics_208,x:1079.764,y:313.1}).wait(1).to({graphics:mask_1_graphics_209,x:1119.9097,y:313.1}).wait(1).to({graphics:mask_1_graphics_210,x:1163.267,y:313.1}).wait(1).to({graphics:mask_1_graphics_211,x:1209.033,y:313.1}).wait(1).to({graphics:mask_1_graphics_212,x:1252.3903,y:313.1}).wait(1).to({graphics:mask_1_graphics_213,x:1292.536,y:313.1}).wait(1).to({graphics:mask_1_graphics_214,x:1329.47,y:313.1}).wait(1).to({graphics:mask_1_graphics_215,x:1363.1924,y:313.1}).wait(1).to({graphics:mask_1_graphics_216,x:1393.7031,y:313.1}).wait(1).to({graphics:mask_1_graphics_217,x:1421.0021,y:313.1}).wait(1).to({graphics:mask_1_graphics_218,x:1445.0895,y:313.1}).wait(1).to({graphics:mask_1_graphics_219,x:1465.9652,y:313.1}).wait(1).to({graphics:mask_1_graphics_220,x:1483.6293,y:313.1}).wait(1).to({graphics:mask_1_graphics_221,x:1498.0818,y:313.1}).wait(1).to({graphics:mask_1_graphics_222,x:1509.3226,y:313.1}).wait(1).to({graphics:mask_1_graphics_223,x:1517.3517,y:313.1}).wait(1).to({graphics:mask_1_graphics_224,x:1522.1692,y:313.1}).wait(1).to({graphics:mask_1_graphics_225,x:1523.775,y:313.1}).wait(1).to({graphics:null,x:0,y:0}).wait(63));

	// Layer_9
	this.instance_10 = new lib.Symbol3copy3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(512,487.1);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(180).to({_off:false},0).to({_off:true},46).wait(63));

	// Layer_8
	this.btn1 = new lib.btnIniciar();
	this.btn1.name = "btn1";
	this.btn1.parent = this;
	this.btn1.setTransform(557.6,546.15);

	this.instance_11 = new lib.Symbol3copy();
	this.instance_11.parent = this;
	this.instance_11.setTransform(512,430.5);

	var maskedShapeInstanceList = [this.btn1,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.btn1}]},148).to({state:[]},12).wait(129));

	// Layer_7
	this.instance_12 = new lib.Symbol2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(512,248.6);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(139).to({_off:false},0).to({_off:true},21).wait(11).to({_off:false,y:319.1},0).to({_off:true},55).wait(63));

	// Layer_3
	this.instance_13 = new lib.Symbol3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(512,62.7);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(130).to({_off:false},0).to({_off:true},30).wait(2).to({_off:false,y:145.3},0).to({_off:true},64).wait(63));

	// Layer 2
	this.instance_14 = new lib.Symbol1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-102,314);

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:-28,y:311.5},29,cjs.Ease.get(1)).to({_off:true},197).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(219.8,311,857.2,324);
// library properties:
lib.properties = {
	id: 'C37405BD8F594507A40351BF19C590BA',
	width: 1024,
	height: 627,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"_assets/images/bgNeutro.jpg?1623082695555", id:"bgNeutro"},
		{src:"_assets/images/man_body.png?1623082695555", id:"man_body"},
		{src:"_assets/images/man_boot.png?1623082695555", id:"man_boot"},
		{src:"_assets/images/man_eyebrow.png?1623082695555", id:"man_eyebrow"},
		{src:"_assets/images/man_hair.png?1623082695555", id:"man_hair"},
		{src:"_assets/images/man_hand.png?1623082695555", id:"man_hand"},
		{src:"_assets/images/man_head.png?1623082695555", id:"man_head"},
		{src:"_assets/images/man_pants.png?1623082695555", id:"man_pants"},
		{src:"_assets/images/woman_body.png?1623082695555", id:"woman_body"},
		{src:"_assets/images/woman_hair.png?1623082695555", id:"woman_hair"},
		{src:"_assets/images/woman_hand.png?1623082695555", id:"woman_hand"},
		{src:"_assets/images/woman_head.png?1623082695555", id:"woman_head"},
		{src:"_assets/images/woman_pants.png?1623082695555", id:"woman_pants"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C37405BD8F594507A40351BF19C590BA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;