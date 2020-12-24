export default class Item {
    constructor(entity) {
        Object.assign(
            this,
            {
                brand: 'brand',
                title: 'title',
                description: 'description',
                descriptionFull: 'descriptionFull',
                price: 0,
                currency: '£'
            },
            entity
        )
    }
}