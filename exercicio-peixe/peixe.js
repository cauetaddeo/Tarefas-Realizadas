var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
}

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    //carregar o logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    //carregar o peixe
    this.load.image('peixe', 'assets/peixes/peixe_serio.png')
    //carregar imagem da alga
    this.load.image('alga', 'assets/pngtree-water-grass.png');
}

function create() {
    this.add.image(400, 300, 'mar');
    //adicionar logo na tela
    this.add.image(250, 525, 'logo').setScale(0.5);
    //guardar o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5)
    peixinho.setFlip(true, false);
    this.add.image(600, 480, 'alga');
}

function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}


    


