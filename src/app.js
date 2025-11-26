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
    
    Alpine.store('cart',{
        items: [],
        total:0,
        quantity:0,
        add(newItem){
            //cek apakah ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);

            //jika belum ada / cart masih kosong
            if(!cartItem){

                this.items.push({...newItem, quantity: 1, total: newItem.price});
                this.quantity++;
                this.total += newItem.price;
              
            } else{
                //jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
                this.items = this.items.map((item)=>{
                    //jika barang berbeda
                    if (item.id !== newItem.id){
                        return item;
                    } else{
                        //jika barang sudah ada, tambah jumlah quantity dan totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },
        remove(id){
            //ambil item yang mau di remove berdasarkan id
            const cartItem = this.items.find((item) => item.id === id);

            //jika item lebih dari 1
            if(cartItem.quantity > 1) {
                //telusuri 1 1 
                this.items =  this.items.map((item) => {
                    //jika bukan barang yang diklik
                    if (item.id != id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            } else if (cartItem.quantity === 1) {
                //jika barangnya sisa 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }

        }
    });

});

//konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};