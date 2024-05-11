function toggleDetail(element) {
    var allDetails = document.querySelectorAll('.detail-text');
    var detail = element.querySelector('.detail-text');
    var arrowIcon = element.querySelector('.arrow-icon');

    allDetails.forEach(function(item) {
        if (item !== detail && item.style.display === 'block') {
            item.style.display = 'none';
        }
    });
    document.querySelectorAll('.arrow-icon').forEach(function(item) {
        item.classList.remove('rotated');
    });

    if (detail.style.display === 'none') {
        detail.style.display = 'block';
        arrowIcon.classList.add('rotated');
    } else {
        detail.style.display = 'none';
        arrowIcon.classList.remove('rotated');
    }
}
