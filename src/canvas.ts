window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas.width = 800;
    canvas.height = 600;

    let painting = false;

    function startPosition() {
        ctx.beginPath();
        painting = true;
    }

    function endPosition() {
        ctx.closePath();
        painting = false;
    }

    function draw(e: MouseEvent) {
        if (painting) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        }
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', endPosition);
});
