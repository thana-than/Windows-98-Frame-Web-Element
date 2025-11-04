document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.win98-frame');

    const params = new URLSearchParams(window.location.search);

    const query_title = params.get('title');
    if (query_title) {
        container.querySelector('.border-title').textContent = query_title;
    }

    const query_color_a = params.get('color') || params.get('color-a');
    if (query_color_a) {
        document.documentElement.style.setProperty('--color-a', validate_color(query_color_a));
    }

    const query_color_b = params.get('color-b') || query_color_a;
    if (query_color_b) {
        document.documentElement.style.setProperty('--color-b', validate_color(query_color_b));
    }

    const query_text_color = params.get('title-color');
    if (query_text_color) {
        document.documentElement.style.setProperty('--title-color', validate_color(query_text_color));
    }

    const query_scale = params.get('scale');
    if (query_scale) {
        document.documentElement.style.setProperty('--scale', query_scale);
    }
});

function validate_color(color) {
    const hexRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    const hex = '#' + color;
    if (hexRegex.test(hex)) {
        color = hex;
    }
    return color;
}
