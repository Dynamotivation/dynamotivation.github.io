// Software section filtering
document.addEventListener('DOMContentLoaded', function () {
    // Set up title filter
    const titleFilter = document.getElementById('titleFilter');
    if (titleFilter) {
        titleFilter.addEventListener('input', filterSoftware);
    }
    
    // Set up tag filters
    const tagCheckboxes = document.querySelectorAll('.tagCheckbox');
    tagCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterSoftware);
    });

    // Set up date filters
    const dateFrom = document.getElementById('dateFrom');
    const dateTo = document.getElementById('dateTo');
    
    if (dateFrom && dateTo) {
        dateFrom.addEventListener('change', filterSoftware);
        dateTo.addEventListener('change', filterSoftware);
    }
});

function filterSoftware() {
    const query = document.getElementById('titleFilter').value.toLowerCase().trim();
    const activeTags = Array.from(document.querySelectorAll('.tagCheckbox:checked')).map(cb => cb.value.toLowerCase());
    const dateFromVal = document.getElementById('dateFrom').value;
    const dateToVal = document.getElementById('dateTo').value;
    
    const postContainers = document.querySelectorAll('#postGrid .postContainer');

    const updateFilters = () => {
        postContainers.forEach(container => {
            const searchData = container.getAttribute('data-search').toLowerCase();
            const cardTags = (container.getAttribute('data-tags') || '').toLowerCase().split(',').filter(t => t.length > 0);
            const cardDate = container.getAttribute('data-date'); // Expected format: YYYY-MM-DD
            
            // Fuzzy title check
            const words = query.split(/\s+/).filter(w => w.length > 0);
            const titleMatch = words.every(word => searchData.includes(word));
            
            // Tag check (AND logic - card must have ALL of the selected tags)
            const tagMatch = activeTags.length === 0 || activeTags.every(tag => cardTags.includes(tag));

            // Date range check
            let dateMatch = true;
            if (cardDate) {
                if (dateFromVal && cardDate < dateFromVal) dateMatch = false;
                if (dateToVal && cardDate > dateToVal) dateMatch = false;
            }
            
            if (titleMatch && tagMatch && dateMatch) {
                container.style.display = '';
                
                // Highlight matching tags
                const pills = container.querySelectorAll('.categoryPill');
                pills.forEach(pill => {
                    const pillText = pill.textContent.toLowerCase();
                    if (activeTags.includes(pillText)) {
                        pill.classList.add('active-filter');
                    } else {
                        pill.classList.remove('active-filter');
                    }
                });
            } else {
                container.style.display = 'none';
            }
        });
    };

    if (document.startViewTransition) {
        document.startViewTransition(() => updateFilters());
    } else {
        updateFilters();
    }
}
