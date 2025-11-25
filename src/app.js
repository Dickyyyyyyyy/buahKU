document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {id:1, name: 'Apel', img: 'apel.jpg', price: 20000},
            {id:2, name: 'Pisang', img: 'pisang.jpg', price: 18000},
            {id:3, name: 'Anggur', img: 'anggur.jpg', price: 25000},
            {id:4, name: 'Jeruk', img: 'jeruk.jpg', price: 27000},
            {id:5, name: 'Kiwi', img: 'kiwi.jpg', price: 32000},
            {id:6, name: 'Semangka', img: 'semangka.jpg', price: 21000},
            {id:7, name: 'Mangga', img: 'mangga.jpg', price: 22000},
            {id:8, name: 'Pepaya', img: 'pepaya.jpg', price: 14000},
            {id:9, name: 'Stroberi', img: 'stroberi.jpg', price: 39000},
            {id:10, name: 'Alpukat', img: 'alpukat.jpg', price: 21500},
        ],
    }));
});