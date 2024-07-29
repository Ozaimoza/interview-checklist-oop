abstract class Hewan {
    name :string
    spesies :string
    private usia : number
    constructor(name:string, spesies:string, usia:number){
        this.name = name
        this.spesies = spesies
        this.usia = usia
    }

    abstract bersuara(): string
    
    getUsia() {
        return this.usia
    }
}

class Singa extends Hewan {
    constructor(name:string, spesies:string, usia:number){
        super(name, spesies, usia)
    }

    bersuara(): string {
        return 'Mengaung'
    }
}

class Kucing extends Hewan {
    constructor(name:string, spesies:string, usia:number){
        super(name, spesies, usia)
    }

    bersuara(): string {
        return 'Mengeong'
    }
}



let hewan1 = new Singa('Singa','Mamalia', 12)
console.log (`hewan ${hewan1.name} adalah ${hewan1.spesies} dan usianya ${hewan1.getUsia()} tahun`)



let hewan2 = new Kucing('robin', 'Mamalia', 3)
console.log (`hewan ${hewan2.name} adalah ${hewan2.spesies} dan usianya ${hewan2.getUsia()} tahun`)


console.log( `${hewan1.name} ${hewan1.bersuara()}`)
console.log( `${hewan2.name} ${hewan2.bersuara()}`)