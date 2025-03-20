document.addEventListener('DOMContentLoaded', () => {
    // Initialize with default filter
    window.filterPosts('all');

    // Event delegation for tag clicks
    document.querySelector('.tag-filter').addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link) {
            e.preventDefault();
            const tag = link.dataset.tag || 'all';
            window.filterPosts(tag);
        }
    });

    // Handle URL hash on initial load
    const hashTag = decodeURIComponent(window.location.hash.substring(1));
    if (hashTag) window.filterPosts(hashTag);
});

window.filterPosts = function(selectedTag = 'all') {
    try {
        // Normalize the tag consistently with Jekyll's slugify
        const processedTag = selectedTag === 'all' 
            ? 'all'
            : selectedTag
                .toLowerCase()
                .trim()
                .replace(/%20/g, '-')  // Handle URL encoded spaces
                .replace(/\s+/g, '-')   // Convert spaces to hyphens
                .replace(/[^a-z0-9-]/g, ''); // Remove special characters

        // Remove active class from all tags first
        document.querySelectorAll('.tag-item a').forEach(link => {
            link.classList.remove('active');
        });

        // Find matching tag and add active class
        const activeLink = Array.from(document.querySelectorAll('.tag-item a')).find(link => {
            const linkTag = link.dataset.tag.toLowerCase().trim();
            return linkTag === processedTag;
        });

        // Fallback to 'all' if no match found
        if (activeLink) {
            activeLink.classList.add('active');
        } else {
            document.querySelector('.tag-item a[data-tag="all"]').classList.add('active');
        }

    // Filter cards
    document.querySelectorAll('.project-card').forEach(card => {
      const rawTags = card.dataset.tags || '';
      const cardTags = rawTags
        .split(',')
        .map(t => t.trim())
        .filter(t => t.length > 0); // Remove empty tags

      const isMatch = processedTag === 'all' || cardTags.includes(processedTag);
      card.style.display = isMatch ? 'grid' : 'none';
    });

  } catch (error) {
    console.error('Filter Error:', error);
    // Fallback: Show all cards
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = 'grid';
    });
  }
};