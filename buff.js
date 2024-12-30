document.addEventListener('DOMContentLoaded', function() {
    // Define all row pairs (main row and info row)
    const rowPairs = [
        { row: 'betting-period-row', info: 'expandable-info' },
        { row: 'min-betting-row', info: 'min-betting-info' },
        { row: 'max-daily-row', info: 'max-daily-info' },
        { row: 'max-loss-row', info: 'max-loss-info' },
        { row: 'profit-target-row', info: 'profit-target-info' },
        { row: 'refundable-fee-row', info: 'refundable-fee-info' }
    ];

    // Keep track of currently expanded row
    let currentlyExpanded = null;

    rowPairs.forEach(pair => {
        const mainRow = document.getElementById(pair.row);
        const cells = mainRow.getElementsByClassName('betting-cell');

        Array.from(cells).forEach(cell => {
            cell.addEventListener('click', function() {
                const infoRow = document.getElementById(pair.info);
                
                // If clicking the same row that's already expanded, close it
                if (currentlyExpanded === infoRow && infoRow.style.display === 'table-row') {
                    infoRow.style.display = 'none';
                    currentlyExpanded = null;
                } else {
                    // Close any currently expanded row
                    if (currentlyExpanded) {
                        currentlyExpanded.style.display = 'none';
                    }
                    // Open the clicked row's info
                    infoRow.style.display = 'table-row';
                    currentlyExpanded = infoRow;
                }
            });
        });
    });

    // Steps interaction
    const steps = document.querySelectorAll('.STEPS');
    steps.forEach(step => {
        step.addEventListener('click', function() {
            steps.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
