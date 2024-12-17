export const nameChange = (name) => {
    switch(name){
        case "oishi":
            return "大石";
            break;
        case "Nanami":
            return "中山";
            break;
        case "Ishikawa":
            return "石河";
            break;
        case "Nakajima":
            return "中嶋";
            break;
        case "Suzuki":
            return "鈴木";
            break;
            default:
                return "その他"
    }
}