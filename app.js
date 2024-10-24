const express = require('express');
const app = express();
const port = 3000;

const { persegi, segitiga, persegipanjang } = require('./modules/shape.js');

app.get("/bangun-ruang", (req, res) => {
    const { shape, action, sisi, alas, tinggi, A, B, C, panjang, lebar } = req.query;
    const params = {
        sisi: parseInt(sisi),
        alas: parseInt(alas),
        tinggi: parseInt(tinggi),
        A: parseInt(A),
        B: parseInt(B),
        C: parseInt(C),
        panjang: parseInt(panjang),
        lebar: parseInt(lebar),
    };

    if (shape === "persegi" && action === "luas") {
        res.send(`Sisi: ${params.sisi}<br>Luas persegi: ${persegi.luas(params.sisi)}`);
    } else if (shape === "persegi" && action === "keliling") {
        res.send(`Sisi: ${params.sisi}<br>Keliling persegi: ${persegi.keliling(params.sisi)}`);
    } else if (shape === "segitiga" && action === "luas") {
        res.send(`Alas: ${params.alas}<br>Tinggi: ${params.tinggi}<br>Luas segitiga: ${segitiga.luas(params.alas, params.tinggi)}`)
    } else if (shape === "segitiga" && action === "keliling") {
            res.send(`Sisi A: ${params.A}<br>Sisi B: ${params.B}<br>Sisi C: ${params.C}<br>Keliling segitiga: ${segitiga.keliling(params.A, params.B, params.C)}`);
    } else if (shape === "persegipanjang" && action === "luas") {
        res.send(`Panjang: ${params.panjang}<br>Lebar: ${params.lebar}<br>Luas persegi panjang: ${persegipanjang.luas(params.panjang, params.lebar)}`);
    } else if (shape === "persegipanjang" && action === "keliling") {
        res.send(`Panjang: ${params.panjang}<br>Lebar: ${params.lebar}<br>Keliling persegi panjang: ${persegipanjang.keliling(params.panjang, params.lebar)}`);
    } else {
        res.send("Bentuk atau aksi tidak dikenali.");
    }
});

app.listen(port, () => {
    console.log(`Aplikasi berjalan pada port ${port}`);
});
