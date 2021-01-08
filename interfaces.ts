interface Reportable {
    summary(): string;
}

const building = {
    material: 'brick',
    heating: true,
    cost: 100000,
    summary(): string {
        return `material ${this.material}`
    }
};

const automobile = {
    brand: 'lada',
    color: 'white',
    cost: 7000,
    summary(): string {
        return `brand of the ${this.color} car is ${this.brand}. Costs ${this.cost}`
    }
};

const describeItem = (item: Reportable) => {
    console.log(item.summary());
};

describeItem(building);
describeItem(automobile);