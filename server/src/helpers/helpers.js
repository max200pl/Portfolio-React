function toCamelCase(str) {
    return str.trim().replace(/\s+/g, ' ').toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

class Work {
    constructor({
        id,
        name,
        dateFinished,
        category,
        client,
        link,
        frontTech,
        backTech,
        cardImage,
        images,
    }) {
        this.id = id;
        this.name = name;
        this.dateFinished = dateFinished;
        this.category = category;
        this.client = client;
        this.link = link;
        this.frontTech = frontTech;
        this.backTech = backTech;
        this.cardImage = cardImage;
        this.images = images;
    }

    static create() {
        return new Work({
            id: undefined,
            name: '',
            dateFinished: undefined,
            category: '',
            client: '',
            link: '',
            frontTech: [],
            backTech: [],
            cardImage: { name: '' },
            images: [],
        });
    }
}

module.exports = {
    toCamelCase,
    Work
}