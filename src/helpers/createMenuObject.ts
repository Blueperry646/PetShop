type MenuOptions = ''|"all"|"dogs"|"cats"|"fishes"
export const createMenuObejct = (activeMenu: MenuOptions) => {
    let returnObject = {
        all:false,
        dogs:false,
        cats:false,
        fishes:false
    }
    if (activeMenu !== '') {
        returnObject[activeMenu] = true;
    }
}