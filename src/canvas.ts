// window.addEventListener('load', () => {
//     const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
//     const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

//     canvas.width = 800;
//     canvas.height = 600;

//     let painting = false;

//     function startPosition() {
//         ctx.beginPath();
//         painting = true;
//     }

//     function endPosition() {
//         ctx.closePath();
//         painting = false;
//     }

//     function draw(e: MouseEvent) {
//         if (painting) {
//             ctx.stroke();
//             ctx.lineTo(e.offsetX, e.offsetY);
//         }
//     }

//     canvas.addEventListener('mousedown', startPosition);
//     canvas.addEventListener('mousemove', draw);
//     canvas.addEventListener('mouseup', endPosition);
// });

class Point {
    constructor(private _x: number, private _y: number) {}

    getX() {
        return this._x;
    }

    setX(x: number) {
        this._x = x;
    }

    getY() {
        return this._y;
    }

    setY(y: number) {
        this._y = y;
    }
}

window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas.width = 800;
    canvas.height = 600;

    let painting = false;
    const startPoint = new Point(0, 0);
    const maxPoint = new Point(0, 0);
    const minPoint = new Point(0, 0);

    function startPosition(e: MouseEvent) {
        startPoint.setX(e.offsetX);
        startPoint.setY(e.offsetY);
        painting = true;
    }

    function endPosition(e: MouseEvent) {
        ctx.rect(
            startPoint.getX(),
            startPoint.getY(),
            e.offsetX - startPoint.getX(),
            e.offsetY - startPoint.getY()
        );
        ctx.stroke();
        painting = false;
    }

    function draw(e: MouseEvent) {
        maxPoint.setX(Math.max(maxPoint.getX(), e.offsetX));
        maxPoint.setY(Math.max(maxPoint.getY(), e.offsetY));
        minPoint.setX(Math.min(minPoint.getX(), e.offsetX));
        minPoint.setY(Math.min(minPoint.getY(), e.offsetY));
        ctx.clearRect(
            startPoint.getX(),
            startPoint.getY(),
            canvas.width,
            canvas.height
        );
        if (painting) {
            ctx.strokeRect(
                startPoint.getX(),
                startPoint.getY(),
                e.offsetX - startPoint.getX(),
                e.offsetY - startPoint.getY()
            );
        }
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', endPosition);
});
