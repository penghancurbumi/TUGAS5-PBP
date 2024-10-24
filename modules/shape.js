const persegi = {
    luas: (sisi) => {
        return sisi*sisi;
    },
    keliling: (sisi)  =>{
        return 4*sisi;
    }
}

const segitiga = {
    luas: (alas,tinggi) => {
        return 0.5*(alas*tinggi);
    },
    keliling: (A,B,C) =>{
        return A+B+C;
    }
}

const persegipanjang ={
    luas: (panjang,lebar) =>{
        return panjang*lebar
    },
    keliling:(panjang,lebar) => {
        return 2*(panjang+lebar)
    }
}

module.exports = {
    persegi,
    segitiga,
    persegipanjang,
}