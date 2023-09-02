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
    }
};

export default userData;