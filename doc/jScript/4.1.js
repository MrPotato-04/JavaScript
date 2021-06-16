var mijnAuto = {
    merk: "ford",
    type: "Mondeo",
    aantalWielen: 4,
    kleur: "blauw",
    snelheid: 0,

    gasgeven: function () {
        this.snelheid += 5;
        console.log(mijnAuto.snelheid);
    },
    toeteren: function () {
        console.log('toet')
    }
}
mijnAuto.gasgeven();
mijnAuto.toeteren()

//4.2


