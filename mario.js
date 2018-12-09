const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

canvas.width = 1430;
canvas.height = 703;

//images

const background1 = new Image();
background1.src = 'img/back2.gif';

const bigBlockImg = new Image();
bigBlockImg.src = 'img/blok.png';

const marioImg = new Image();
marioImg.src = 'https://cdn3.iconfinder.com/data/icons/supermario/PNG/retro-mario-2.png';

const questionImg = new Image();
questionImg.src = 'https://vignette.wikia.nocookie.net/mario/images/f/f6/Question_Block_Art_-_New_Super_Mario_Bros.png/revision/latest?cb=20120603213532';

const mushroomImg = new Image();
mushroomImg.src = 'https://www.cartoon-clipart.co/amp/images/goomba.png';

const stolbikImg = new Image();
stolbikImg.src = 'https://cdn4.iconfinder.com/data/icons/video-games-filled/64/transporter_mario_luigi-128.png';

const piranhaImg = new Image();
piranhaImg.src = 'http://images3.wikia.nocookie.net/__cb20121122165158/fantendo/images/0/04/Baby_Piranha_Plant.png';

const koopaImg = new Image();
koopaImg.src = 'img/koopa.png';

const koopaReverseImg = new Image();
koopaReverseImg.src = 'https://vignette.wikia.nocookie.net/videogames-fanon/images/9/9b/Paratroopa_2012.png/revision/latest?cb=20130903103544';

const fireImg = new Image();
fireImg.src = 'img/fire.png';

const coinImg = new Image();
coinImg.src = 'https://uploads-ssl.webflow.com/575d645da4bf5b9f21dd0064/5857110c8c626b3005f64356_my-coin.png';

const goldenMushroomImg = new Image();
goldenMushroomImg.src = 'img/Golden_Mushroom.png';

const dragonImg = new Image();
dragonImg.src = 'https://png2.kisspng.com/20180328/olq/kisspng-super-mario-bros-super-paper-mario-mario-luigi-bearded-dragon-5abb3af7d4eb32.7883570115222197678721.png';

const princessImg = new Image();
princessImg.src = 'https://vignette.wikia.nocookie.net/papermario/images/f/fc/PMCS_Princess_Peach.png/revision/latest/scale-to-width-down/150?cb=20171214020734';

const bulletImg = new Image();
bulletImg.src = 'https://vignette.wikia.nocookie.net/mario/images/6/6f/Bullet_Bill_-_New_Super_Mario_Bros.png/revision/latest?cb=20171019085520';

const flowerImg = new Image();
flowerImg.src = 'img/flo.png';

const dropletImg = new Image();
dropletImg.src = 'https://png2.kisspng.com/20180218/erq/kisspng-yellow-oil-petroleum-beautifully-yellow-droplets-5a896d06f16a19.9672243415189557829888.png';


mario = {
	x: 10,
	y: 513,
	xDelta: 0,
	yDelta: 0,
	width: 70,
	height: 120,
	image: marioImg,
	draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},
	update: function(){
		this.x += this.xDelta;
        this.y += this.yDelta;

        if(mario.y <= 355){
    		mario.yDelta = 8;
    	}
    	if(mario.y >= 510){
    		mario.yDelta = 0;
    	}	
    	
       	if(!piranha.deleteme && intersect(mario, piranha)){
			alert("GAME OVER");	
		}
		if(!mushroom.deleteme &&  intersect(mario, mushroom)){
    		alert("GAME OVER");
    	}  	
    }	
};
flower1 = {
	x: 440,
	y: 120,
	xDelta: 0,
	yDelta: 0,
	width: 60,
	height: 80,
	image: flowerImg,
	draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},
	update: function(){
		this.x += this.xDelta;
        this.y += this.yDelta;
    }	
};
flower2 = {
	x: 850,
	y: 120,
	xDelta: 0,
	yDelta: 0,
	width: 60,
	height: 80,
	image: flowerImg,
	draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},
	update: function(){
		this.x += this.xDelta;
        this.y += this.yDelta;
    }	
};
droplet1 = {
	x: flower1.x + 8,
	y: flower1.y + flower1.width,
	xDelta: 0,
	yDelta: 5,
	width: 50,	
	height: 50,
	deleteme: false,
	image: dropletImg,
	draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},
	update: function(){
		this.x += this.xDelta; 
		this.y += this.yDelta;
		if(intersect(mario, droplet1)){
    	 	alert("GAME OVER");
       	}
    }	
};
droplet2 = {
	x: flower2.x + 8,
	y: flower2.y + flower2.width,
	xDelta: 0,
	yDelta: 5,
	width: 50,	
	height: 50,
	deleteme: false,
	image: dropletImg,
	draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},
	update: function(){
		this.x += this.xDelta; 
		this.y += this.yDelta;
		if(intersect(mario, droplet2)){
    	 	alert("GAME OVER");
       	}
    }	
};
princess = {
	x: 1296,
	y: 125,
	xDelta: 0,
	yDelta: 0,
	width: 80,
	height: 120,
	image: princessImg,
	draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},
	update: function(){
		this.x += this.xDelta; 
		this.y += this.yDelta;
		if(mario.x + mario.width >= bigBlock2.x){
			princess.yDelta = 4;
			if(princess.y >= 513){
				princess.yDelta = 0;
			}
		}
		if(intersect(mario, princess)){
     		alert("Congratulations!!!")
    	}
    }	
};
dragon = {
	x: 980,
	y: 463,
	xDelta: 0,
	yDelta: 0,
	width: 120,
	height: 180,
	deleteme: false,
	image: dragonImg,
	draw: function(){
		if(!this.deleteme)
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},
	update: function(){
		this.x += this.xDelta; 
		this.y += this.yDelta;
		if(!dragon.deleteme && intersect(mario, dragon)){
     		alert("GAME OVER");
    	} 
    	bullets.forEach(bullet =>{
			if(intersect(bullet, dragon)){
				this.deleteme = true;
			}
		})
    }
};	
dragonBullet = {
	x: dragon.x,
	y: dragon.y + dragon.height/2 +20,
	xDelta: -5,
	yDelta: 0,
	width: 30,	
	height: 30,
	deleteme: false,
	image: bulletImg,
	draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},
	update: function(){
		this.x += this.xDelta; 
		this.y += this.yDelta;
		if(intersect(mario, dragonBullet)){
    	 	alert("GAME OVER");
       	}
    }	
};
bigBlock = {
	x: 300,
	y: 340,
	xDelta: 0,
	yDelta: 0,
	width: 190,
	height: 50,
	image: bigBlockImg,
	draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},
	update: function(){			
	}
};
bigBlock2 = {
	x: 1280,
	y: 240,
	xDelta: 0,
	yDelta: 0,
	width: 140,
	height: 40,
	image: bigBlockImg,
	draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},
	update: function(){			
	}
};
koopa = {
	x: 790,
	y: 523,
	xDelta: 2,
	yDelta: 0,
	width: 80,
	height: 70,
	deleteme: false,
	image: koopaImg,
	draw: function(){
		if(!this.deleteme)
			context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},
	update: function(){
		this.x += this.xDelta;
	    this.y += this.yDelta;
	    if(this.x + this.width >= canvas.width){
	        this.xDelta = -2;
	        this.image = koopaReverseImg;
	    }
	    if(this.x <= stolbik2.x + stolbik2.width){
	        this.xDelta = 2;
	        this.image = koopaImg;
	    }			
	   	bullets.forEach(bullet =>{
			if(!bullet.deleteme && intersect(bullet, koopa)){
				koopa.deleteme = true;
			}
		})
		if(!koopa.deleteme && intersect(mario, koopa)){
    		alert("GAME OVER");
       	}	    
	}
};
stolbik2 = {
	x: 720,
	y: 513,
	xDelta: 0,
	yDelta: 0,
	width: 70,
	height: 120,
	image: stolbikImg,
	draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},
	update: function(){	
	}
};
coins = [
	{
		x: 1060,
		y: 480,
		xDelta: 3,
		yDelta: 0,
		width: 40,
		height: 40,
		image: coinImg,
		draw: function(){
			context.drawImage(this.image, this.x, this.y, this.width, this.height);
		},
		deleteme: false ,
		update: function(){	
			this.x += this.xDelta;
		    this.y += this.yDelta;

			if(this.x + this.width >= canvas.width - 20){
				this.xDelta = -3; 
			}
			if(this.x <= 1060){
				this.xDelta = 3; 
			}
			if(intersect(mario, coins[0])){
				this.deleteme = true;
			}
		}
	}, 
	{
		x: 150,
		y: 480,
		xDelta: 0,
		yDelta: 0,
		width: 30,
		height: 30,
		image: coinImg,
		draw: function(){
			context.drawImage(this.image, this.x, this.y, this.width, this.height);
		},
		update: function(){	
			if(intersect(mario, coins[1])){
				this.deleteme = true;
			}
		}
	},
	{
		x: 210,
		y: 480,
		xDelta: 0,
		yDelta: 0,
		width: 30,
		height: 30,
		image: coinImg,
		draw: function(){
			context.drawImage(this.image, this.x, this.y, this.width, this.height);
		},
		update: function(){	
			if(intersect(mario, coins[2])){
				this.deleteme = true;
			}
		}
	},
	{
		x: 270,
		y: 480,
		xDelta: 0,
		yDelta: 0,
		width: 30,
		height: 30,
		image: coinImg,
		draw: function(){
			context.drawImage(this.image, this.x, this.y, this.width, this.height);
		},
		update: function(){	
			if(intersect(mario, coins[3])){
				this.deleteme = true;
			}
		}
	}  
]
mushroom = {
		x: 571,
		y: 563,
		xDelta: 2,
		yDelta: 0,
		width: 70,
		height: 70,
		deleteme: false,
		image: mushroomImg,
		draw: function(){
			context.drawImage(this.image, this.x, this.y, this.width, this.height);
		},
		update: function(){
			this.x += this.xDelta;
	        this.y += this.yDelta;
	        if(this.x + this.width >= 720){
	        	this.xDelta = -2;
	        }
	        if(this.x <= 570){
	        	this.xDelta = 2;
	        }
	        bullets.forEach(bullet =>{
			if(intersect(bullet, mushroom)){
				this.deleteme = true;
			}
			})   
		}	
};
stolbik1 = {
	x: 500,
	y: 511,
	xDelta: 0,
	yDelta: 0,
	width: 70,
	height: 120,
	image: stolbikImg,
	draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},
};
piranha = {
	x: 729,
	y: 549,
	xDelta: 0,
	yDelta: -1,
	width: 50,
	height: 75,
	image: piranhaImg,
	draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},
	update: function(){	
		this.x += this.xDelta;
	    this.y += this.yDelta;
		if(piranha.y <= 438){
			piranha.yDelta = 1;
		}
		if(piranha.y >= 549){
			piranha.yDelta = -1;
		}
		bullets.forEach(bullet =>{
			if(intersect(bullet, piranha)){
				this.deleteme = true;				
			}
		})	
	}
};
question = {
	x: 349,
	y: 342,
	xDelta: 0,
	yDelta: 0,
	width: 45,
	height: 45,
	image: questionImg,
	draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},
	update: function(){
		this.x += this.xDelta;
        this.y += this.yDelta;

		if (mario.x + mario.width >=335 && mario.x <= 387) {
        	if(mario.y <= bigBlock.y + bigBlock.height && mario.x  ){
        		question.yDelta = -3;
        	}
        	if(question.y <= 298){	
        		question.yDelta = 0;
        	}
    	}		
	}
}
goldenMushroom = {
	x: 349,
	y: 342,
	xDelta: 0,
	yDelta: 0,
	width: 45,
	height: 45,
	image: goldenMushroomImg,
	draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},
	update: function(){
		this.x += this.xDelta;
        this.y += this.yDelta;
        if(!this.deleteme && intersect(mario, goldenMushroom)){
        	this.deleteme = true;
        }
		if (mario.x + mario.width >=335 && mario.x <= 387) {
        	if(mario.y <= bigBlock.y + bigBlock.height && mario.x){
        		this.x = 300;
        		this.y = 563
        	}        	
    	}		
	}
};
let bullets = []

const createFire = function(x, y){
	return {
		x: x,
		y: y,
		xDelta: 5,
		yDelta: 0,
		width: 40,
		height: 40,
		image: fireImg,
		deleteme :false,
		draw: function(){
			context.drawImage(this.image, this.x, this.y, this.width, this.height);
		},
		update: function(){	
			this.x += this.xDelta;
		    this.y += this.yDelta;

		    if(this.x >= canvas.width){
				this.deleteme = true;
			}
		}
	}
};

// Keys

const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;
const spacekey = 32;
const xkey = 88;

document.addEventListener('keydown', function(event) {
  if(event.keyCode === rightKey) {
  	mario.xDelta = 4;
  }
}, false);

document.addEventListener('keydown', function(event) {
  if(event.keyCode === leftKey) {
	mario.xDelta = -4;  
  }
}, false);

document.addEventListener('keydown', function(event) {
  if(event.keyCode === spacekey) {
    mario.yDelta = -8; 
  }
}, false);

document.addEventListener('keydown', function(event) {
  if(event.keyCode === xkey) {
   	bullets.push(createFire(mario.x + mario.width, mario.y + 30));
  }
}, false);

document.addEventListener('keyup', function(event) {
    mario.xDelta = 0;
}, false);

const draw = function(){
	context.drawImage(background1, 0, 0, canvas.width, canvas.height);
	stolbik1.draw();
	!piranha.deleteme &&  piranha.draw();
	!mushroom.deleteme &&  mushroom.draw();
	!koopa.deleteme &&  koopa.draw();
	!dragon.deleteme &&  dragon.draw();
	!goldenMushroom.deleteme && goldenMushroom.draw();
	stolbik2.draw();
	question.draw();	
	bigBlock.draw();
	koopa.draw();
	mario.draw();
	bigBlock2.draw();
	princess.draw();
	dragon.draw();
	dragonBullet.draw();
	flower1.draw();
	flower2.draw();
	droplet1.draw();
	coins.forEach(coin=>{
		!coin.deleteme && coin.draw()
	})
	bullets.forEach(bullet=>{
		!bullet.deleteme && bullet.draw()
	})	
};

const update = function(){
	mario.update();
	mushroom.update(); 
	question.update();
	piranha.update();
	koopa.update();
	goldenMushroom.update();
	dragon.update();
	dragonBullet.update();
	princess.update();
	bigBlock2.update();
	droplet1.update();
	droplet2.update();
	coins.forEach(coin=>{
		!coin.deleteme && coin.update()
	})
	bullets.forEach(bullet=>{
		!bullet.deleteme && bullet.update ()
	})
}; 

bullets = bullets.filter(star => !star.deleteme);

//this code is taken from roubenmeschian.com
const intersect = function(obj1, obj2) {
    let x = Math.max(obj1.x, obj2.x);
    let num1 = Math.min(obj1.x + obj1.width, obj2.x + obj2.width);
    let y = Math.max(obj1.y, obj2.y);
    let num2 = Math.min(obj1.y + obj1.height, obj2.y + obj2.height);
    return (num1 >= x && num2 >= y);
};

const loop = function (){  
  draw();
  update();
  requestAnimationFrame(loop);
};
 
loop();
