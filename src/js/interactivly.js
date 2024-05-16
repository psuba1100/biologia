export function convertToSmartObject(object) {
    return new SmartObject(object.id);
}

export class SmartObject {
    constructor(id) {
        this.object = document.getElementById(id)

        this.clickableAreas = []
    }

    createClickingRegions() {
        this.object.addEventListener("click", this.handleClick.bind(this))
        return this
    }

    handleClick(event) {
        const rect = this.object.getBoundingClientRect();
        const scaleX = 1035 / rect.width
        const scaleY = 602 / rect.height
        const mouseX = (event.clientX - rect.left) * scaleX;
        const mouseY = (event.clientY - rect.top) * scaleY;

        console.log(this.object.width, rect.width)

        console.log("click")
        console.log(mouseX, mouseY)
        console.log(this.clickableAreas)

        if (this.clickableAreas.length === 0) return;
        this.clickableAreas.forEach(area => {
            if (this.isClickedOnArea(mouseX, mouseY, area)){
                area.callback()
                console.log("area clicked")
                console.log(area.x1,area.x2,area.y1,area.y2)
            } 
        });
    }

    isClickedOnArea(mouseX, mouseY, pos) {
        return (
            mouseX >= pos.x1 &&
            mouseX <= pos.x2 &&
            mouseY >= pos.y1 &&
            mouseY <= pos.y2
        );
    }

    addClickableArea(x1, y1, x2, y2, callback) {
        this.clickableAreas.push({
            x1: x1,
            x2: x2,
            y1: y1,
            y2: y2,
            callback: callback
        })

        return this
    }
}



class InputHandler {
    constructor(object) {
        this.object = object;

        this.object.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick(event) {
        const rect = this.object.getBoundingClientRect();
        const scaleX = this.object.width / rect.width
        const scaleY = this.object.height / rect.height
        const mouseX = (event.clientX - rect.left) * scaleX;
        const mouseY = (event.clientY - rect.top) * scaleY;

        console.log(`[${mouseX}, ${mouseY}]`)

    }
    isClickedOnKarta(mouseX, mouseY, pos) {

        return (
            mouseX >= pos.x1 &&
            mouseX <= pos.x2 &&
            mouseY >= pos.y1 &&
            mouseY <= pos.y2
        );
    }
}