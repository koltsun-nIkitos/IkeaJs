
const userData = {
    wishlistData : ['idd005', 'idd050', 'idd033'],

    get wishList(){
        return this.wishlistData;
    },
    set wishList(id){
        if (this.wishlistData.includes(id)){
            const index = this.wishlistData.indexOf(id);
            this.wishlistData.filter(index, 1);
        }
        this.wishlistData.push(id);
    },



    cartList : [
        {
            id: 'idd015',
            count: 3
        },
        {
            id: 'idd045',
            count: 1
        },
        {
            id: 'idd095',
            count: 2
        },
    ]
};

export default userData;