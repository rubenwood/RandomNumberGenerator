const GRID_SIZE = 10;
function createDefaultGrid() {
    return Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i: number) => i + 1);
}
function goldenGridSelect(seed: number,grid: number[],steps: number = 10, startRadius: number = 2, expandBy: number = 2): number[] {
    const GOLDEN_ANGLE = 2.399963229728653; // in radians - approximately 137.508 degrees

    const CENTER = (GRID_SIZE - 1) / 2;

    let cx: number = CENTER + Math.sin(seed) * 1.5;
    let cy: number = CENTER + Math.cos(seed) * 1.5;

    let angle: number = (seed / 1000000) * Math.PI * 2;
    let radius: number = startRadius;

    const result: number[] = [];

    for (let i = 0; i < steps; i++) {
        angle += GOLDEN_ANGLE + (seed % (i + 1)) * 0.00001;

        let x: number = cx + Math.cos(angle) * radius;
        let y: number = cy + Math.sin(angle) * radius;

        let gx: number = Math.round(x);
        let gy: number = Math.round(y);

        const isNearCorner: boolean =
            (gx <= 1 && gy <= 1) || // top-left
            (gx >= GRID_SIZE - 2 && gy <= 1) || // top-right
            (gx <= 1 && gy >= GRID_SIZE - 2) || // bottom-left
            (gx >= GRID_SIZE - 2 && gy >= GRID_SIZE - 2); // bottom-right

        // if we're near a corner, reset
        if (isNearCorner) {
            // add some variation based on the seed
            // if we dont do this, we'll either cluster around the center or the corners,
            // depending on the seed, which isnt very interesting
            cx = CENTER + Math.sin(seed + i) * 1.5;
            cy = CENTER + Math.sin(seed + i) * 1.5;

            radius = startRadius;

            gx = Math.round(cx);
            gy = Math.round(cy);
        }

        let attempts: number = 0;
        const MAX_ATTEMPTS: number = 5;

        while ((gx < 0 || gx >= GRID_SIZE || gy < 0 || gy >= GRID_SIZE) && attempts < MAX_ATTEMPTS) {
            cx = (cx + Math.cos(angle + i + attempts)) / 2;
            cy = (cy + Math.sin(angle + i + attempts)) / 2;

            gx = Math.round(cx);
            gy = Math.round(cy);

            attempts++;
        }

        const index: number = gy * GRID_SIZE + gx;

        result.push(grid[index]);

        cx = (cx + gx + Math.sin(seed + i)) / 2;
        cy = (cy + gy + Math.cos(seed + i)) / 2;

        radius += expandBy;
    }

    return result;
}

const result = goldenGridSelect(Date.now(), createDefaultGrid(), 10, 2, 2);
alert(result)
