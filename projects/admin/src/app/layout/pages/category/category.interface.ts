export interface Category {
    catId: number;
    catLevel: number;
    icon: string;
    name: string;
    parentCid: number;
    productCount: number;
    showStatus: number;
    productUnit: string;
    sort: number;
    children: Category[];
}
