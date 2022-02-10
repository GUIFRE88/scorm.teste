(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgNeutro = function() {
	this.initialize(img.bgNeutro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1129,635);// helper functions:

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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if (_desafio.erradosCount < _desafio.respostas_correta.length) {
			this.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("Não foi dessa vez.\nClique no botão e confira \na resposta correta.", "19px 'EDP Preon'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 294;
	this.text.parent = this;
	this.text.setTransform(0.35,7.45);

	this.text_1 = new cjs.Text("QUE PENA", "25px 'EDP Preon Hair'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 37;
	this.text_1.lineWidth = 345;
	this.text_1.parent = this;
	this.text_1.setTransform(0,-91.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text,p:{x:0.35,y:7.45,text:"Não foi dessa vez.\nClique no botão e confira \na resposta correta.",lineWidth:294}}]}).to({state:[{t:this.text_1},{t:this.text,p:{x:-0.05,y:-8.55,text:"Você não acertou totalmente o exercício. Confira a resposta correta antes de continuar.",lineWidth:288}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.2,-93.3,348.5,199.2);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if (_desafio.erradosCount < _desafio.respostas_correta.length) {
			this.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.text = new cjs.Text("Não foi dessa vez.\nClique no botão e \ntente novamente.", "19px 'EDP Preon'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 294;
	this.text.parent = this;
	this.text.setTransform(0.35,7.45);

	this.text_1 = new cjs.Text("QUE PENA", "25px 'EDP Preon Hair'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 37;
	this.text_1.lineWidth = 345;
	this.text_1.parent = this;
	this.text_1.setTransform(0,-91.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{text:"QUE PENA"}},{t:this.text,p:{x:0.35,y:7.45,text:"Não foi dessa vez.\nClique no botão e \ntente novamente.",lineWidth:294}}]}).to({state:[{t:this.text_1,p:{text:"Atenção! "}},{t:this.text,p:{x:0,y:-10.7,text:"Você não acertou totalmente o exercício. Talvez tenha faltado sinalizar alguma resposta correta ou uma resposta incorreta foi sinalizada. Que tal verificar? Tente mais uma vez.",lineWidth:549}}]},1).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(223,11,20,0.898)").s().p("A6lEyIhhAAIAApjMA4NAAAIAABJIAAIag");
	this.shape.setTransform(-5.275,-74.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.898)").s().p("A6pK9IhhAAIAA15MA4VAAAIAABIIAAUxg");
	this.shape_1.setTransform(-4.875,48.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("A8KRfIAAhIMA20AAAIAA0xIBhAAIAAV5gA8Kn6IAAhJMA2sAAAIAAobIBPAAIAAJkg");
	this.shape_2.setTransform(4.875,13.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(223,11,20,0.898)").s().p("EgsjAEyIhhAAIAApjMBcJAAAIAABJIAAIag");
	this.shape_3.setTransform(-0.275,-74.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.898)").s().p("EgsnAK9IhhAAIAA15MBcRAAAIAABIIAAUxg");
	this.shape_4.setTransform(0.125,48.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.298)").s().p("EguIARfIAAhIMBawAAAIAA0xIBhAAIAAV5gEguIgH6IAAhJMBaoAAAIAAobIBPAAIAAJkg");
	this.shape_5.setTransform(9.875,13.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295.2,-105.5,600.4,231.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bgNeutro();
	this.instance.parent = this;
	this.instance.setTransform(-24,-314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-314,1129,635);


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

	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(-5.25,-11.15);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.25,-11.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},8).wait(8));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},17).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.4,-116.7,375.6,232.3);


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
		
		console.log('_desafio.erradosCount:'+_desafio.erradosCount);
		console.log('_desafio.respostas_correta.length:'+_desafio.respostas_correta.length);
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

	this.timeline.addTween(cjs.Tween.get(this.pop).wait(1).to({regY:5,scaleX:0.01,scaleY:0.01,y:589.15},0).wait(8).to({regY:0,scaleX:1,scaleY:1,y:550.1},0).wait(1).to({regX:-0.2,regY:-0.6,x:-0.2,y:539.35},0).wait(1).to({y:507.5},0).wait(1).to({y:452.5},0).wait(1).to({y:375.55},0).wait(1).to({y:282.45},0).wait(1).to({y:184.5},0).wait(1).to({y:95.9},0).wait(1).to({y:28.35},0).wait(1).to({y:-12.3},0).wait(1).to({regX:0,regY:0,x:0,y:-24.85},0).wait(1).to({regX:-0.2,regY:-0.6,x:-0.2,y:-24.95},0).wait(1).to({y:-23.4},0).wait(1).to({y:-20.7},0).wait(1).to({y:-16.95},0).wait(1).to({y:-12.2},0).wait(1).to({y:-7},0).wait(1).to({y:-1.85},0).wait(1).to({y:2.6},0).wait(1).to({y:5.9},0).wait(1).to({y:7.9},0).wait(1).to({regX:0,regY:0,x:0,y:9.15},0).wait(6).to({regX:-0.2,regY:-0.6,x:-0.2,y:8.05},0).wait(1).to({y:6.5},0).wait(1).to({y:3.8},0).wait(1).to({y:0.05},0).wait(1).to({y:-4.65},0).wait(1).to({y:-9.85},0).wait(1).to({y:-15},0).wait(1).to({y:-19.5},0).wait(1).to({y:-22.8},0).wait(1).to({y:-24.8},0).wait(1).to({regX:0,regY:0,x:0,y:-24.85},0).wait(1).to({regX:-0.2,regY:-0.6,x:-0.2,y:-13.2},0).wait(1).to({y:25.3},0).wait(1).to({y:91.75},0).wait(1).to({y:184.75},0).wait(1).to({y:297.3},0).wait(1).to({y:415.65},0).wait(1).to({y:522.75},0).wait(1).to({y:604.45},0).wait(1).to({y:653.6},0).wait(1).to({regX:0,regY:0,x:0,y:670.1},0).wait(11).to({regY:5,scaleX:0.01,scaleY:0.01,y:589.15},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.popBg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,333.1,1,0.003);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleY:1,y:0},14,cjs.Ease.get(1)).wait(31).to({scaleY:0.003,y:333.1},14,cjs.Ease.get(-1)).to({_off:true},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-537.6,-319.2,1075.2,1104.9);


(lib.desafio9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		TweenMax.fromTo([this], .5, {	y: this.y + 50}, {	y: this.y,	ease: Back.easeOut.config(1.7)});
		
		_root.stop();
		_desafio = this;
		this.erradosCount = 0
		this.tenta = 0;
		
		this.tentaMax = 2;
		this.respostas_correta = [false, false, true, true];
		
		
		this.mostraCerta = function () {
			for (var i = 0; i < btns.length; i++) {
				_desafio['bt' + i].gotoAndStop(_desafio.respostas_correta[i]);
			}
			_root.gotoAndStop('fim');
		}
		this.reset = function () {
			_desafio.erradosCount = 0;
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
					Player.stopAllAudio();
		
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
	this.btnConferir.setTransform(45.6,206.6);

	this.timeline.addTween(cjs.Tween.get(this.btnConferir).wait(1));

	// Camada 1
	this.bt3 = new lib.alter_V();
	this.bt3.name = "bt3";
	this.bt3.parent = this;
	this.bt3.setTransform(-302,147.3);

	this.text = new cjs.Text("Solicitar uma das normas de Compliance para leitura.", "19px 'EDP Preon'", "#333333");
	this.text.lineHeight = 25;
	this.text.lineWidth = 647;
	this.text.parent = this;
	this.text.setTransform(-260.7,134.05);

	this.bt2 = new lib.alter_V();
	this.bt2.name = "bt2";
	this.bt2.parent = this;
	this.bt2.setTransform(-302,72.95);

	this.text_1 = new cjs.Text("Pedir afastamento de uma tomada de decisão que envolva conflito de interesses.", "19px 'EDP Preon'", "#333333");
	this.text_1.lineHeight = 25;
	this.text_1.lineWidth = 647;
	this.text_1.parent = this;
	this.text_1.setTransform(-260.7,47.15);

	this.bt1 = new lib.alter_V();
	this.bt1.name = "bt1";
	this.bt1.parent = this;
	this.bt1.setTransform(-302,-1.35);

	this.text_2 = new cjs.Text("Prometer um favor em troca de uma informação restrita.", "19px 'EDP Preon'", "#333333");
	this.text_2.lineHeight = 25;
	this.text_2.lineWidth = 647;
	this.text_2.parent = this;
	this.text_2.setTransform(-260.7,-14.8);

	this.bt0 = new lib.alter_V();
	this.bt0.name = "bt0";
	this.bt0.parent = this;
	this.bt0.setTransform(-302,-75.65);

	this.text_3 = new cjs.Text("Fazer campanha para o candidato de minha preferência\nno ambiente de trabalho ou usando o nome da EDP.", "19px 'EDP Preon'", "#333333");
	this.text_3.lineHeight = 25;
	this.text_3.lineWidth = 647;
	this.text_3.parent = this;
	this.text_3.setTransform(-260.7,-101.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.bt0},{t:this.text_2},{t:this.bt1},{t:this.text_1},{t:this.bt2},{t:this.text},{t:this.bt3}]}).wait(1));

	// Camada 4
	this.text_4 = new cjs.Text("Selecione na lista abaixo as situações que\nestão de acordo com nosso Código de Ética:", "30px 'EDP Preon Hair'", "#333333");
	this.text_4.lineHeight = 41;
	this.text_4.lineWidth = 850;
	this.text_4.parent = this;
	this.text_4.setTransform(-368.85,-216.25);

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.desafio9, new cjs.Rectangle(-370.8,-218.2,853.8,484.3), null);


// stage content:
(lib.edp_compliance28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fim:47});

	// timeline functions:
	this.frame_0 = function() {
		window._root = this;
		stage.enableMouseOver();
	}
	this.frame_30 = function() {
		Player.setPlayAudio({
		   file:"comp_28.mp3", 
		   onStart:function(){ 
		  //    _root.stop();	
		   },
		   onComplete:function(){
		    //  _root.play();
		   }
		});
	}
	this.frame_36 = function() {
		this.stop();
	}
	this.frame_79 = function() {
		this.stop();
		Player.NextPage();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(6).call(this.frame_36).wait(43).call(this.frame_79).wait(1));

	// Layer_5
	this.instance = new lib.btnSeguir();
	this.instance.parent = this;
	this.instance.setTransform(511.85,581.3,0.8047,0.8047,0,0,0,25.6,27.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({_off:true},1).wait(32));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_1 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_2 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_3 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_4 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_5 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_6 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_7 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_8 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_9 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_10 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_11 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_12 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_13 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_14 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_15 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_16 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_17 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_18 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_19 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_20 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_21 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_22 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_23 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_24 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_25 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_26 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_27 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_28 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_29 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_49 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_50 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_51 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_52 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_53 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_54 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_55 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_56 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_57 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_58 = new cjs.Graphics().p("Eic4A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_59 = new cjs.Graphics().p("EicGA9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_60 = new cjs.Graphics().p("EiW1A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_61 = new cjs.Graphics().p("EiREA9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_graphics_62 = new cjs.Graphics().p("EiKyA9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_63 = new cjs.Graphics().p("EiEBA9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_graphics_64 = new cjs.Graphics().p("Eh83A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_65 = new cjs.Graphics().p("Eh2GA9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_graphics_66 = new cjs.Graphics().p("Ehv0A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_67 = new cjs.Graphics().p("EhqDA9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_graphics_68 = new cjs.Graphics().p("EhkyA9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_graphics_69 = new cjs.Graphics().p("EhgAA9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_70 = new cjs.Graphics().p("EhbvA9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_71 = new cjs.Graphics().p("EhX/A9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_graphics_72 = new cjs.Graphics().p("EhUuA9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_graphics_73 = new cjs.Graphics().p("EhR9A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_74 = new cjs.Graphics().p("EhPtA9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_graphics_75 = new cjs.Graphics().p("EhN8A9vMAy9h7dMEG0AAAMgy9B7dg");
	var mask_graphics_76 = new cjs.Graphics().p("EhMsA9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_graphics_77 = new cjs.Graphics().p("EhL8A9vMAy9h7dMEG1AAAMgy9B7dg");
	var mask_graphics_78 = new cjs.Graphics().p("EhLsA9vMAy9h7dMEG1AAAMgy9B7dg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-977.975,y:313.1}).wait(1).to({graphics:mask_graphics_1,x:-889.4657,y:313.1}).wait(1).to({graphics:mask_graphics_2,x:-804.062,y:313.1}).wait(1).to({graphics:mask_graphics_3,x:-721.7639,y:313.1}).wait(1).to({graphics:mask_graphics_4,x:-642.5714,y:313.1}).wait(1).to({graphics:mask_graphics_5,x:-566.4845,y:313.1}).wait(1).to({graphics:mask_graphics_6,x:-493.5032,y:313.1}).wait(1).to({graphics:mask_graphics_7,x:-423.6274,y:313.1}).wait(1).to({graphics:mask_graphics_8,x:-356.8573,y:313.1}).wait(1).to({graphics:mask_graphics_9,x:-293.1927,y:313.1}).wait(1).to({graphics:mask_graphics_10,x:-232.6337,y:313.1}).wait(1).to({graphics:mask_graphics_11,x:-175.1804,y:313.1}).wait(1).to({graphics:mask_graphics_12,x:-120.8326,y:313.1}).wait(1).to({graphics:mask_graphics_13,x:-69.5903,y:313.1}).wait(1).to({graphics:mask_graphics_14,x:-21.4537,y:313.1}).wait(1).to({graphics:mask_graphics_15,x:23.5773,y:313.1}).wait(1).to({graphics:mask_graphics_16,x:65.5028,y:313.1}).wait(1).to({graphics:mask_graphics_17,x:104.3226,y:313.1}).wait(1).to({graphics:mask_graphics_18,x:140.0369,y:313.1}).wait(1).to({graphics:mask_graphics_19,x:172.6456,y:313.1}).wait(1).to({graphics:mask_graphics_20,x:202.1487,y:313.1}).wait(1).to({graphics:mask_graphics_21,x:228.5462,y:313.1}).wait(1).to({graphics:mask_graphics_22,x:251.8381,y:313.1}).wait(1).to({graphics:mask_graphics_23,x:272.0244,y:313.1}).wait(1).to({graphics:mask_graphics_24,x:289.1051,y:313.1}).wait(1).to({graphics:mask_graphics_25,x:303.0803,y:313.1}).wait(1).to({graphics:mask_graphics_26,x:313.9499,y:313.1}).wait(1).to({graphics:mask_graphics_27,x:321.7138,y:313.1}).wait(1).to({graphics:mask_graphics_28,x:326.3722,y:313.1}).wait(1).to({graphics:mask_graphics_29,x:327.925,y:313.1}).wait(1).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_49,x:692.925,y:313.1}).wait(1).to({graphics:mask_graphics_50,x:696.1367,y:313.1}).wait(1).to({graphics:mask_graphics_51,x:705.7716,y:313.1}).wait(1).to({graphics:mask_graphics_52,x:721.8299,y:313.1}).wait(1).to({graphics:mask_graphics_53,x:744.3114,y:313.1}).wait(1).to({graphics:mask_graphics_54,x:773.2163,y:313.1}).wait(1).to({graphics:mask_graphics_55,x:808.5445,y:313.1}).wait(1).to({graphics:mask_graphics_56,x:850.296,y:313.1}).wait(1).to({graphics:mask_graphics_57,x:898.4708,y:313.1}).wait(1).to({graphics:mask_graphics_58,x:953.0689,y:313.1}).wait(1).to({graphics:mask_graphics_59,x:1009.1076,y:313.1}).wait(1).to({graphics:mask_graphics_60,x:1042.83,y:313.1}).wait(1).to({graphics:mask_graphics_61,x:1079.764,y:313.1}).wait(1).to({graphics:mask_graphics_62,x:1119.9097,y:313.1}).wait(1).to({graphics:mask_graphics_63,x:1163.267,y:313.1}).wait(1).to({graphics:mask_graphics_64,x:1209.033,y:313.1}).wait(1).to({graphics:mask_graphics_65,x:1252.3903,y:313.1}).wait(1).to({graphics:mask_graphics_66,x:1292.536,y:313.1}).wait(1).to({graphics:mask_graphics_67,x:1329.47,y:313.1}).wait(1).to({graphics:mask_graphics_68,x:1363.1924,y:313.1}).wait(1).to({graphics:mask_graphics_69,x:1393.7031,y:313.1}).wait(1).to({graphics:mask_graphics_70,x:1421.0021,y:313.1}).wait(1).to({graphics:mask_graphics_71,x:1445.0895,y:313.1}).wait(1).to({graphics:mask_graphics_72,x:1465.9652,y:313.1}).wait(1).to({graphics:mask_graphics_73,x:1483.6293,y:313.1}).wait(1).to({graphics:mask_graphics_74,x:1498.0818,y:313.1}).wait(1).to({graphics:mask_graphics_75,x:1509.3226,y:313.1}).wait(1).to({graphics:mask_graphics_76,x:1517.3517,y:313.1}).wait(1).to({graphics:mask_graphics_77,x:1522.1692,y:313.1}).wait(1).to({graphics:mask_graphics_78,x:1523.775,y:313.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// Layer_4
	this.instance_1 = new lib.desafio9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(512,298.4);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({_off:true},49).wait(1));

	// Layer 2
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-102,314);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-28,y:311.5},29,cjs.Ease.get(1)).to({_off:true},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1077,635);
// library properties:
lib.properties = {
	id: 'C37405BD8F594507A40351BF19C590BA',
	width: 1024,
	height: 627,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"_assets/images/bgNeutro.jpg?1620331395877", id:"bgNeutro"}
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