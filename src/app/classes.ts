export enum RewardLevel {
    Bronze = 1, // Pays Full Price
    Silver = .9, // 10% discount
    Gold = .85 // 15% discount
}

export class Member {
    name: string;
    ID: number;
    rewardLevel: RewardLevel;
}

export class Product {
    name: string;
    price: number;
}

export class Store {
    products: Product[];
    members: Member[];
}

export class Customer {
    member: Member;
    cart: Product[] = [];
}
