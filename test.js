let places = [
    { Id: 0, Name: "Ukraine" }, // ['Ukraine']
    { Id: 1, Name: "Armenia" },
    { Id: 2, Name: "Russia" },
    { Id: 3, Name: "Petersburg", ParentID: 2 }, // ['Russia', 'Petersburg']
    { Id: 4, Name: "Mariburg", ParentID: 5 },
    { Id: 5, Name: "Lvov", ParentID: 0 },
    { Id: 6, Name: "Erevan", ParentID: 1 },
    { Id: 23, Name: "Pushkin", ParentID: 3 },
    { Id: 12, Name: "Sortov", ParentID: 5 },
    { Id: 92, Name: "Zradovka", ParentID: 12 }
];



const search = (searchString) => {
    const result = [];
    let map = {}
    let i = 0
    if(!searchString) return result

      while (Object.keys(map).length !== places.length && i !== places.length){
        const place = places[i]
        map[place.Id] = place
        i++
      }

    for (let i = 0; i < places.length; i++) {
        const {Name, ParentID} = places[i]
        if(Name.toLowerCase().includes(searchString.toLowerCase())){
            if(ParentID || ParentID >= 0) {
                const founded = map[ParentID]
                result.push(...search(founded.Name));
            }
            result.push(Name)
        }
    }

    return result;
}

console.log(search('Lvov'));
console.log(search('Zradovka'));
