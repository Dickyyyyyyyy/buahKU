document.addEventListener('alpine:init', () => {
    Alpine.store('cart', {
        items: [],

        get quantity() {
            return this.items.reduce((acc, item) => acc + item.quantity, 0);
        },

        get total() {
            return this.items.reduce((acc, item) => acc + item.total, 0);
        },

        add(product) {
            const found = this.items.find(item => item.id === product.id);

            if (found) {
                found.quantity++;
                found.total = found.quantity * found.price;
            } else {
                this.items.push({
                    ...product,
                    quantity: 1,
                    total: product.price
                });
            }
        },

        remove(id) {
            const index = this.items.findIndex(item => item.id === id);

            if (this.items[index].quantity > 1) {
                this.items[index].quantity--;
                this.items[index].total -= this.items[index].price;
            } else {
                this.items.splice(index, 1);
            }
        }
    });

    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Apel',      price: 20000, img: 'apel.jpg' },
            { id: 2, name: 'Pisang',    price: 18000, img: 'pisang.jpg' },
            { id: 3, name: 'Anggur',    price: 25000, img: 'anggur.jpg' },
            { id: 4, name: 'Jeruk',     price: 27000, img: 'jeruk.jpg' },
            { id: 5, name: 'Kiwi',      price: 32000, img: 'kiwi.jpg' },
            { id: 6, name: 'Semangka',  price: 21000, img: 'semangka.jpg' },
            { id: 7, name: 'Mangga',    price: 22000, img: 'mangga.jpg' },
            { id: 8, name: 'Pepaya',    price: 14000, img: 'pepaya.jpg' },
            { id: 9, name: 'Stroberi',  price: 39000, img: 'stroberi.jpg' },
            { id:10, name: 'Alpukat',   price: 28000, img: 'alpukat.jpg' }
        ]
    }));

    window.rupiah = function (number) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(number);
    }
});
