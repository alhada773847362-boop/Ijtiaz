// AntiAdBlock script safe endpoint for Ijtiaz platform
(function() {
  try {
    if (typeof window !== 'undefined') {
      window.__ijtiaz_antiadblock_ready = true;
    }
  } catch (e) {
    // Ignore benign script errors
  }
})();
