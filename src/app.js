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
            {id:1, name:'Apel', price:20000, img:'apel.jpg'},
            {id:2, name:'Anggur', price:25000, img:'anggur.jpg'},
            {id:3, name:'Jeruk', price:27000, img:'jeruk.jpg'},
            {id:4, name:'Kiwi', price:32000, img:'kiwi.jpg'},
            {id:5, name:'Semangka', price:17000, img:'semangka.jpg'},
            {id:6, name:'Mangga', price:17000, img:'mangga.jpg'},
            {id:7, name:'Pepaya', price:17000, img:'pepaya.jpg'},
            {id:8, name:'Stroberi', price:17000, img:'stroberi.jpg'},
            {id:9, name:'Alpukat', price:17000, img:'alpukat.jpg'},
            {id:10, name:'Pisang', price:18000, img:'pisang.jpg'}
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