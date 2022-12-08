let checkbox = document.querySelector('#wishlist_checkbox');
let text = document.querySelector('#wishlist_text');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        text.innerHTML = 'Remove from wishlist';
        document.querySelector('#wishlist_heart').src="/content/svg_files/heart_checked_v2.svg"
    }
    else {
        text.innerHTML = 'Add to wishlist';
        document.querySelector('#wishlist_heart').src="/content/svg_files/heart.svg"
    }
    }
);