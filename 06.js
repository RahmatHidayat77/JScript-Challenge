let words = ['Aku', 'ingin', 'begini', 'Aku', 'ingin', 'begitu', 'Ingin', 'ini', 'itu', 'banyak', 'sekali', 'Semua', 'semua', 'semua', 'Dapat', 'dikabulkan', 'Dapat', 'dikabulkan', 'Dengan', 'kantong', 'ajaib', 'Aku', 'ingin', 'terbang', 'bebas', 'Di', 'angkasa', 'Hei…', 'baling', 'baling', 'bambu', 'La...', 'la...', 'la...', 'Aku', 'sayang', 'sekali', 'Doraemon', 'La...', 'la...', 'la...', 'Aku', 'sayang', 'sekali'];
console.log("Jumlah kata ada "+words.length);
let jumlah = 0;

for (let i=0; i<=words.length; i++) {
  if (words[i] == 'Aku') {
    jumlah = jumlah + 1;
  }
}
console.log(`Jumlah kata "Aku" adalah `+jumlah);

for (let i=0; i<=words.length; i++) {
  if (words[i] == 'ingin') {
    jumlah = jumlah + 1;
  }
}
console.log(`Jumlah kata "ingin" adalah `+jumlah);

for (let i=0; i<=words.length; i++) {
  if (words[i] == 'dapat') {
    jumlah = jumlah + 1;
  }
}
console.log(`Jumlah kata "dapat" adalah `+jumlah);