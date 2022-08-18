type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'

export const createMenuObject=(activeMenu: MenuOptions)=>{
    let returnObjects={
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if(activeMenu !== ''){
        returnObjects[activeMenu]=true
    }

    return returnObjects
}