class Fighter {
	constructor(name='Fighter',power=50,health=300) {
		this.name = name;
		this.power = power;
		this.health = health;
	};

	setDamage(damage=0){console.log(`${this.name} Health: ${this.health = this.health - damage}`)};
	hit(enemy,point=0){
		enemy.setDamage(point*this.power)
		return this;
	};
}

class ImprovedFighter extends Fighter{
	constructor(){super(...arguments)};
	doubleHit(e,p){super.hit(e,2*p)};
}


function fight(firstFighter, secondFighter, ...point){
	let round = 1;
	let roundUp = () => round++;
	// Я просто не знал куда присунуть стрелочную функцю поэтому так

	for (let p of point){

		console.log(`Round ${roundUp()}`);
		firstFighter.hit(secondFighter.hit(firstFighter,p),p);

		if(firstFighter.health <= 0 && secondFighter.health){
			console.log(`DRAW!!!111!!!!!`);
			break;
		}else if(firstFighter.health <= 0){
			console.log(`${secondFighter.name} WIN!!!`);
			break;
		}else if(secondFighter.health <= 0){
			console.log(`${firstFighter.name} WIN!!!`);
			break;
		}

	};
}

let fighter = new Fighter('John',30,500);
let improvedFighter = new ImprovedFighter('Daenerys',15,750);

fight(fighter,improvedFighter,1,2,3,4,5,6,7,8,9);