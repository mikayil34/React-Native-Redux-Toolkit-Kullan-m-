import { createSlice } from '@reduxjs/toolkit';



const slice = createSlice({
    name: 'dictionary',
    initialState: {
        words: [
            { id: 1, en: 'arbitrary', tr: 'rastgele' },
            { id: 2, en: 'abandon', tr: 'terketmek' },
            { id: 3, en: 'abate', tr: 'azalmak' },
            { id: 4, en: 'abbey', tr: 'manastır' },
            { id: 5, en: 'abbreviate', tr: 'kısaltmak' },
            { id: 6, en: 'abdicate', tr: 'tahtı bırakmak' },
            { id: 7, en: 'abduct', tr: 'kaçırmak' },
            { id: 8, en: 'abide', tr: 'katlanmak' },
            { id: 9, en: 'abject', tr: 'sefil' },
            { id: 10, en: 'abjure', tr: 'fikrinden vazgeçmek' },
            { id: 11, en: 'abnormal', tr: 'normal olmayan' },
            { id: 12, en: 'aboard', tr: 'taşıta binmiş' },
            { id: 13, en: 'abolish', tr: 'feshetmek' },
            { id: 14, en: 'abominable', tr: 'iğrenç' },
            { id: 15, en: 'abort', tr: 'düşük yapmak' },
            { id: 16, en: 'abound', tr: 'bol olmak' },
            { id: 17, en: 'about', tr: 'hakkında' },
            { id: 18, en: 'above', tr: 'yukarıda' },
            { id: 19, en: 'abroad', tr: 'yurt dışında' },
            { id: 20, en: 'abrupt', tr: 'ani' },
            { id: 21, en: 'absent', tr: 'yok' },
            { id: 22, en: 'absorb', tr: 'emmek' },
            { id: 23, en: 'abstain', tr: 'çekinmek' },
            { id: 24, en: 'abstract', tr: 'soyut' },
            { id: 25, en: 'absurd', tr: 'saçma' },
            { id: 26, en: 'abundant', tr: 'bol' },
            { id: 27, en: 'abuse', tr: 'kötüye kullanmak' },
            { id: 28, en: 'academic', tr: 'akademik' },
            { id: 29, en: 'accelerate', tr: 'hızlandırmak' },
            { id: 30, en: 'accent', tr: 'aksan' },
            { id: 31, en: 'accept', tr: 'kabul etmek' },
            { id: 32, en: 'access', tr: 'erişim' },
            { id: 33, en: 'accident', tr: 'kaza' },
            { id: 34, en: 'acclaim', tr: 'beğeni' },
            { id: 35, en: 'accommodate', tr: 'barındırmak' },
            { id: 36, en: 'accompany', tr: 'eşlik etmek' },
            { id: 37, en: 'accomplish', tr: 'başarmak' },
            { id: 38, en: 'accord', tr: 'anlaşma' },
            { id: 39, en: 'account', tr: 'hesap' },
            { id: 40, en: 'accumulate', tr: 'biriktirmek' },
            { id: 41, en: 'accurate', tr: 'doğru' },
            { id: 42, en: 'accuse', tr: 'suçlamak' },
            { id: 43, en: 'accustom', tr: 'alıştırmak' },
            { id: 44, en: 'ache', tr: 'ağrı' },
            { id: 45, en: 'achieve', tr: 'başarmak' },
            { id: 46, en: 'acknowledge', tr: 'kabul etmek' },
            { id: 47, en: 'acquaint', tr: 'haberdar etmek' },
            { id: 48, en: 'acquire', tr: 'edinmek' },
            { id: 49, en: 'acquit', tr: 'beraat etmek' },
            { id: 50, en: 'acre', tr: 'arazi' },
            { id: 51, en: 'acrobat', tr: 'akrobat' },
            { id: 52, en: 'across', tr: 'karşıya' },
            { id: 53, en: 'act', tr: 'hareket etmek' },
            { id: 54, en: 'action', tr: 'hareket' },
            { id: 55, en: 'active', tr: 'aktif' },
            { id: 56, en: 'actor', tr: 'oyuncu' },
            { id: 57, en: 'actress', tr: 'kadın oyuncu' },
            { id: 58, en: 'actual', tr: 'gerçek' },
            { id: 59, en: 'acute', tr: 'şiddetli' },
            { id: 60, en: 'adapt', tr: 'uyum sağlamak' },
            { id: 61, en: 'add', tr: 'eklemek' },
            { id: 62, en: 'addict', tr: 'bağımlı' },
            { id: 63, en: 'address', tr: 'adres' },
            { id: 64, en: 'adequate', tr: 'yeterli' },
            { id: 65, en: 'adhere', tr: 'yapışmak' },
            { id: 66, en: 'adjacent', tr: 'bitişik' },
            { id: 67, en: 'adjective', tr: 'sıfat' },
            { id: 68, en: 'adjust', tr: 'ayarlamak' },
            { id: 69, en: 'administer', tr: 'yönetmek' },
            { id: 70, en: 'admire', tr: 'hayran olmak' },
            { id: 71, en: 'admit', tr: 'kabul etmek' },
            { id: 72, en: 'adopt', tr: 'benimsemek' },
            { id: 73, en: 'adult', tr: 'yetişkin' },
            { id: 74, en: 'advance', tr: 'ileri' },
            { id: 75, en: 'advantage', tr: 'avantaj' },
            { id: 76, en: 'adventure', tr: 'macera' },
            { id: 77, en: 'advertise', tr: 'reklam yapmak' },
            { id: 78, en: 'advise', tr: 'tavsiye etmek' },
            { id: 79, en: 'aerial', tr: 'havai' },
            { id: 80, en: 'aeroplane', tr: 'uçak' },
            { id: 81, en: 'affect', tr: 'etkilemek' },
            { id: 82, en: 'afford', tr: 'mali gücü yetmek' },
            { id: 83, en: 'afraid', tr: 'korkmuş' },
            { id: 84, en: 'after', tr: 'sonra' },
            { id: 85, en: 'afternoon', tr: 'öğleden sonra' },
            { id: 86, en: 'afterwards', tr: 'sonradan' },
            { id: 87, en: 'again', tr: 'tekrar' },
            { id: 88, en: 'against', tr: 'karşı' },
            { id: 89, en: 'age', tr: 'yaş' },
            { id: 90, en: 'agency', tr: 'ajans' },
            { id: 91, en: 'agent', tr: 'temsilci' },
            { id: 92, en: 'aggravate', tr: 'kötüleştirmek' },
            { id: 93, en: 'aggressive', tr: 'saldırgan' },
            { id: 94, en: 'agony', tr: 'ızdırap' },
            { id: 95, en: 'agree', tr: 'katılmak' },
            { id: 96, en: 'agriculture', tr: 'tarım' },
            { id: 97, en: 'ahead', tr: 'önünde' },
            { id: 98, en: 'aid', tr: 'yardım' },
            { id: 99, en: 'aim', tr: 'amaç' },
            { id: 100, en: 'air', tr: 'hava' },
        ],
        count: 1,
        length: 100,
isModel: false,

    },
    reducers: {
        add(state, actions) {
            const word = actions.payload;
            console.log(word);
              state.words= [...state.words, word]; 
        },
        remove(state, actions) {
            state = state.filter((word) => word.id !== actions.payload.id);
        },
        update(state, actions) {
            const word = actions.payload;
            state = state.map((item) => item.id === word.id ? word : item);
        },
        setLength(state, actions) {
            state.length = actions.payload;
        },
        increment(state) {
            console.log(state.count);
            if (state.count >=(state.length)) {
                state.count =1;
            }else{
                state.count++;
            }    
        },
        decrement(state) { 
            if (state.count <= 1) {
                state.count = state.length;
            }else{
                state.count--;
            }
        },
        setmodul(state,actions){
            state.isModel = actions.payload; 
        }

    },
});

export default slice.reducer;
export const { add,remove,update ,setLength,increment,decrement,setmodul} = slice.actions;
