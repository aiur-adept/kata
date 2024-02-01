function rgb(r, g, b) {
    // clamp
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
    // render
    let rx = r.toString(16).toUpperCase();
    let gx = g.toString(16).toUpperCase();
    let bx = b.toString(16).toUpperCase();
    // pad
    if (rx.length == 1) {
      rx = '0' + rx;
    }
    if (gx.length == 1) {
      gx = '0' + gx;
    }
    if (bx.length == 1) {
      bx = '0' + bx;
    }
    return rx + gx + bx;
}
