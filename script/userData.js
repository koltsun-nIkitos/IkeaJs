import { getLocalStorage, setLocalStorage } from "./storage.js";


const userData = {
    wishlistData : getLocalStorage('wishList'),

    get wishList(){
        return this.wishlistData;
    },
    set wishList(id){
        if (this.wishlistData.includes(id)){
            const index = this.wishlistData.indexOf(id);
            this.wishlistData.splice(index, 1);
        }else {
            this.wishlistData.push(id);
        }
        setLocalStorage('wishList', this.wishList);
    },

    cartListData : getLocalStorage('cartList'),

    get cartList(){
        return this.cartListData;
    },

    set cartList(id){
        let obj = this.cartListData.find(item => item.id === id);

        if (obj){
            obj.count ++
        } else {
            obj = {
                id, 
                count: 1,
            }
            this.cartList.push(obj);
        }
        setLocalStorage('cartList', this.cartList);
    },

    set changeCountCartList(itemCart) {
        let obj = this.cartListData.find(item => item.id === itemCart.id);
        obj.count = itemCart.count;

        setLocalStorage('cartList', this.cartList);
    },

    set deleteItemCart(idd) {
        let index = -1;
        
        this.cartList.forEach((item, i) => {
            if (item.id === idd){
                index = i;
            }
        });

        this.cartList.splice(index, 1);
        setLocalStorage('cartList', this.cartList);
    },
};

export default userData;