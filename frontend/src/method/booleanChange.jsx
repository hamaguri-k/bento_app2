export const booleanChange = (day) => {
    switch(day){
        case true:
            return "○";
            break;
        case false:
            return "×";
            break;
            default:
                return "その他"
    }
}