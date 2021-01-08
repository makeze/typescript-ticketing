const building = {
    material: 'brick',
    heating: true,
    cost: 100000
};

type Building = [string, boolean, number]

const workHouse: Building = ['metal', false, 20000];
const trailer: Building = ['metal', true, 10000];