import * as NAME_ACTION from '../Constants/actionTypes';

const defaultState = {
    dataCart: [],
    dataShop: [{
        id: 1,
        checked: false,
        title: 'Cá bò giáp',
        price: '1000000',
        image: 'http://tunghaisan.com/sites/default/files/1427691019_giap.jpg',
        category: 1
    }, {
        id: 2,
        checked: false,
        title: 'Cá mú đỏ',
        price: '2000000',
        image: 'http://haisandaiduong.com/files/sanpham/2/1/jpg/ca-mu-do.jpg',
        category: 1

    }, {
        id: 3,
        checked: false,
        title: 'Cá đuối sao xanh',
        price: 'Liên hệ',
        image: 'http://haisandaiduong.com/files/sanpham/1/1/jpg/ca-duoi-sao-xanh.jpg',
        category: 1
    }, {
        id: 4,
        checked: false,
        title: 'Cá gia bò',
        price: '700000',
        image: 'http://phannha.net/files/assets/ca_bo_da.jpg',
        category: 1
    }, {
        id: 5,
        checked: false,
        title: 'Cá mặt quỷ',
        price: 'Liên hệ',
        image: 'http://haisandaiduong.com/files/sanpham/4/1/jpg/ca-mat-quy.jpg',
        category: 1
    }, {
        id: 6,
        checked: false,
        title: 'Cá mú chân trâu',
        price: 'Liên hệ',
        image: 'http://tunghaisan.com/sites/default/files/styles/750x540/public/14595662_1817293301882932_2383930148935363712_n.jpg',
        category: 1
    }, {
        id: 7,
        checked: false,
        title: 'Cá bò giáp',
        price: '1000000',
        image: 'http://tunghaisan.com/sites/default/files/1427691019_giap.jpg',
        category: 2
    }, {
        id: 8,
        checked: false,
        title: 'Cá mú đỏ',
        price: '2000000',
        image: 'http://haisandaiduong.com/files/sanpham/2/1/jpg/ca-mu-do.jpg',
        category: 2
    }, {
        id: 9,
        checked: false,
        title: 'Cá đuối sao xanh',
        price: 'Liên hệ',
        image: 'http://haisandaiduong.com/files/sanpham/1/1/jpg/ca-duoi-sao-xanh.jpg',
        category: 2
    }, {
        id: 10,
        checked: false,
        title: 'Cá gia bò',
        price: '700000',
        image: 'http://phannha.net/files/assets/ca_bo_da.jpg',
        category: 2
    }, {
        id: 11,
        checked: false,
        title: 'Cá mặt quỷ',
        price: 'Liên hệ',
        image: 'http://haisandaiduong.com/files/sanpham/4/1/jpg/ca-mat-quy.jpg',
        category: 2
    }, {
        id: 12,
        checked: false,
        title: 'Cá mú chân trâu',
        price: 'Liên hệ',
        image: 'http://tunghaisan.com/sites/default/files/styles/750x540/public/14595662_1817293301882932_2383930148935363712_n.jpg',
        category: 2
    },
        {
            id: 13,
            checked: false,
            title: 'Ghẹ xanh',
            price: '350000',
            image: 'http://haisanchienthu.vn/wp-content/uploads/2016/08/image-211-600x600.jpeg',
            category: 3
        }, {
            id: 14,
            checked: false,
            title: 'Cua tuyết',
            price: '2500000',
            image: 'http://imgs.emdep.vn/Share/Image/2014/12/29/thuc-pham-gia-bac-trieu-cua-dai-gia-viet-1-10491377.jpg',
            category: 3
        }, {
            id: 15,
            checked: false,
            title: 'Cua huỳnh đế',
            price: '800000',
            image: 'http://vihasa.vn/files/large/542e460860fafc1',
            category: 3
        }, {
            id: 24,
            checked: false,
            title: 'Ghẹ đỏ',
            price: '500000',
            image: 'https://i2.wp.com/congthucmonngon.com/wp-content/uploads/2018/06/kham-pha-ve-ghe-do-dac-san-noi-tieng-bien-viet-nam.jpg?ssl=1',
            category: 3
        },
        {
            id: 16,
            checked: false,
            title: 'Sò huyết',
            price: '200000',
            image: 'https://tepbac.com/upload/news/ge_image/nuoi-so-huyet_3.jpg',
            category: 4
        }, {
            id: 17,
            checked: false,
            title: 'Ốc hương',
            price: '500000',
            image: 'https://product.hstatic.net/1000030244/product/asddduu_grande.png',
            category: 4
        }, {
            id: 18,
            checked: false,
            title: 'Tu hài',
            price: 'Liên hệ',
            image: 'http://tunghaisan.com/sites/default/files/styles/750x540/public/tu-hai2-halongwave.jpg',
            category: 4
        }, {
            id: 19,
            checked: false,
            title: 'Ngao Xanh',
            price: '700.000 VND',
            image: 'http://chohaisanquangninh.com/wp-content/uploads/2017/08/chohaisanquangninh_ngao-480x450.jpg',
            category: 4
        }, {
            id: 20,
            checked: false,
            title: 'Tôm hùm',
            price: '1100000',
            image: 'http://tunghaisan.com/sites/default/files/styles/750x540/public/img_0073.jpg',
            category: 5
        }, {
            id: 21, /**/
            checked: false,
            title: 'Mức lá',
            price: '220000',
            image: 'https://tomcuacaghe.com/wp-content/uploads/2017/11/muc-la.jpg',
            category: 5
        }, {
            id: 22,
            checked: false,
            title: 'Bạch tuột biển',
            price: 'Liên hệ',
            image: 'http://tunghaisan.com/sites/default/files/styles/750x540/public/bachtuocsong.jpg',
            category: 5
        }, {
            id: 23,
            checked: false,
            title: 'Mực trứng',
            price: '300000',
            image: 'http://media.bizwebmedia.net/Sites/99161/data/upload/2016/thg6/13925168_530624393794840_4040651031735564301_n.jpg?20',
            category: 5
        }],
    totalPrice:''
};

export default function userLoginReducer(state = defaultState, action) {
    switch (action.type) {
        case NAME_ACTION.ITEM_IS_SELECTED:
            return {...state, dataShop:state.dataShop.map(e=>{
                if(e.id !== action.id) return e;
                return {...e, checked: true};
                })};
        case NAME_ACTION.ADD_ITEM_TO_CARD:
            return {...state, dataCart:state.dataShop.filter(e => e.checked===true)};
        case NAME_ACTION.DELETE_ITEM_TO_CARD:
            return {...state, dataShop:state.dataShop.map(e=>{
                    if(e.id !== action.id) return e;
                    return {...e, checked: false};
                })};
        case NAME_ACTION.ADD_TOTAL_PRICE:
            let arr=[];
            let total ='';
            if(state.dataCart.length !== 0){
                try{
                    const reducer = (accumulator, currentValue) => accumulator + currentValue;
                    state.dataCart.forEach(e =>{
                        if(e.price !== 'Liên hệ'){
                            arr.push(parseInt(e.price))
                        }
                    });
                    total = arr.reduce(reducer);
                }catch (e) {
                    console.log(e)
                }

            }
            return {...state, totalPrice: total};
        default:
            return state;
    }
}
