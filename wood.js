/*
fixed: per item wood requirents
1. cair --> 3cft
2. table --> 10cft
3. bed --> 50cft

vary: quantity
 */

function woodCalulator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const pertTableWood = 10;
    const perBedWood = 50;
    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * pertTableWood;
    const bedWood = bedQuantity * perBedWood;
    // console.log(chairQuantity, tableQuantity, bedQuantity)
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
const totalWood = woodCalulator(10, 1, 1)
console.log('total wood required:', totalWood);