//namespace
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bola, chao, cubo, retangulo;

function setup(){
    createCanvas(600,500)
    engine = Engine.create();
    world = engine.world;

    var bola_op = {
        restitution:0.70,
        frictionAir:0.05
    };
    var cubo_op = {
        restitution:0.50,
        frictionAir:0.03
    };
    var retangulo_op = {
        restitution:0.30,
        frictionAir:0.1
    };
    //criando corpo bola
    bola = Bodies.circle(290,50,20,bola_op);
    cubo = Bodies.rectangle(110,50,20,40,cubo_op);
    retangulo = Bodies.rectangle(450,50,20,40,retangulo_op);
    //adicionando bola ao mundo
    World.add(world,bola);
    World.add(world,cubo);
    World.add(world,retangulo);
    var chao_op = {
        isStatic:true
    };
    chao = Bodies.rectangle(300,450,600,20,chao_op);
    World.add(world,chao);
    

    rectMode(CENTER);
}

function draw(){
    background(200)
    Engine.update(engine);
    push();
    fill("blue");
    rect(bola.position.x,bola.position.y,40);
    pop();
    push();
    fill("red");
    rect(cubo.position.x,cubo.position.y,100,40);
    pop();
    push();
    fill("orange");
    ellipse(retangulo.position.x,retangulo.position.y,40);
    pop();
    push();
    fill("yellow");
    rect(chao.position.x,chao.position.y,600,20);
    pop();
}