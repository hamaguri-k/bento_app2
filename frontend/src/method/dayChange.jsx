export const dayChange = (day) => {
    switch(day){
        case "monday":
            return "月";
            break;
        case "tuesday":
            return "火";
            break;
        case "wednesday":
            return "水";
            break;
        case "thursday":
            return "木";
            break;
        case "friday":
            return "金";
            break;
            default:
                return "その他"
    }
}